import { config as loadEnv } from "dotenv";
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, "..");

loadEnv({ path: path.join(projectRoot, ".env.local") });

const API_KEY = process.env.NEIS_API_KEY?.trim();
const ENDPOINT = "https://open.neis.go.kr/hub/schoolInfo";
const PAGE_SIZE = 200;
const PAGE_DELAY_MS = 200;
const OUTPUT_PATH = path.join(projectRoot, "data", "raw", "neis_schools_경북초등.json");

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function toSchoolRecord(row) {
  return {
    code: row.SD_SCHUL_CODE ?? "",
    name: row.SCHUL_NM ?? "",
    englishName: row.ENG_SCHUL_NM ?? "",
    address: row.ORG_RDNMA ?? "",
    addressDetail: row.ORG_RDNDA ?? "",
    postalCode: row.ORG_RDNZC ?? "",
    foundedDate: row.FOND_YMD ?? "",
    foundationType: row.FOND_SC_NM ?? "",
    schoolKind: row.SCHUL_KND_SC_NM ?? "",
    location: row.LCTN_SC_NM ?? "",
    officeName: row.ATPT_OFCDC_SC_NM ?? "",
    officeCode: row.ATPT_OFCDC_SC_CODE ?? "",
    phoneNumber: row.ORG_TELNO ?? "",
    homepageUrl: row.HMPG_ADRES ?? "",
  };
}

function getTotalCount(payload) {
  const totalCount = payload?.schoolInfo?.[0]?.head?.[0]?.list_total_count;

  if (typeof totalCount !== "number") {
    throw new Error("NEIS 응답에서 전체 학교 수(list_total_count)를 찾지 못했습니다.");
  }

  return totalCount;
}

function getRows(payload) {
  const rows = payload?.schoolInfo?.[1]?.row;

  if (!Array.isArray(rows)) {
    throw new Error("NEIS 응답에서 학교 배열(row)을 찾지 못했습니다.");
  }

  return rows;
}

async function fetchPage(pageIndex) {
  const url = new URL(ENDPOINT);
  url.searchParams.set("KEY", API_KEY);
  url.searchParams.set("Type", "json");
  url.searchParams.set("pIndex", String(pageIndex));
  url.searchParams.set("pSize", String(PAGE_SIZE));
  url.searchParams.set("ATPT_OFCDC_SC_CODE", "R10");
  url.searchParams.set("SCHUL_KND_SC_NM", "초등학교");

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`NEIS API 호출 실패: HTTP ${response.status} ${response.statusText}`);
  }

  const payload = await response.json();

  if (payload.RESULT?.CODE && payload.RESULT.CODE !== "INFO-000") {
    throw new Error(`NEIS API 오류: ${payload.RESULT.CODE} - ${payload.RESULT.MESSAGE ?? "알 수 없는 오류"}`);
  }

  return payload;
}

async function main() {
  if (!API_KEY) {
    console.error("NEIS_API_KEY가 없습니다. d:\\dev\\beom\\.env.local에 NEIS_API_KEY=... 형태로 등록한 뒤 다시 실행해 주세요.");
    process.exit(1);
  }

  console.log("NEIS 경북 초등학교 기본정보 수집을 시작합니다.");

  const firstPayload = await fetchPage(1);
  const totalCount = getTotalCount(firstPayload);
  const totalPages = Math.ceil(totalCount / PAGE_SIZE);
  const allRows = [...getRows(firstPayload)];

  console.log(`[1/${totalPages}] ${allRows.length}/${totalCount}개 수집 완료`);

  for (let pageIndex = 2; pageIndex <= totalPages; pageIndex += 1) {
    await sleep(PAGE_DELAY_MS);
    const payload = await fetchPage(pageIndex);
    const rows = getRows(payload);
    allRows.push(...rows);
    console.log(`[${pageIndex}/${totalPages}] ${allRows.length}/${totalCount}개 수집 완료`);
  }

  const schools = allRows.map(toSchoolRecord);

  await mkdir(path.dirname(OUTPUT_PATH), { recursive: true });
  await writeFile(OUTPUT_PATH, `${JSON.stringify(schools, null, 2)}\n`, "utf8");

  console.log(`수집 완료: 총 ${schools.length}개 학교`);
  console.log(`저장 경로: ${OUTPUT_PATH}`);
}

main().catch((error) => {
  console.error("NEIS 학교 데이터 수집 중 오류가 발생했습니다.");
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
});
