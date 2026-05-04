import { config as loadEnv } from "dotenv";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, "..");

loadEnv({ path: path.join(projectRoot, ".env.local") });

const API_KEY = process.env.KAKAO_REST_API_KEY?.trim();
const ENDPOINT = "https://dapi.kakao.com/v2/local/search/address.json";
const INPUT_PATH = path.join(projectRoot, "data", "raw", "neis_schools_경북초등.json");
const OUTPUT_PATH = path.join(projectRoot, "data", "processed", "schools_with_coords.json");
const REQUEST_DELAY_MS = 100;
const LOG_INTERVAL = 50;

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function fetchCoordinates(address) {
  const url = new URL(ENDPOINT);
  url.searchParams.set("query", address);

  const response = await fetch(url, {
    headers: {
      Authorization: `KakaoAK ${API_KEY}`,
    },
  });

  if (!response.ok) {
    throw new Error(`HTTP ${response.status} ${response.statusText}`);
  }

  const payload = await response.json();
  const document = payload?.documents?.[0];

  if (!document) {
    return { lat: null, lng: null, reason: "주소 검색 결과 없음" };
  }

  const lat = Number.parseFloat(document.y);
  const lng = Number.parseFloat(document.x);

  if (!Number.isFinite(lat) || !Number.isFinite(lng)) {
    return { lat: null, lng: null, reason: "좌표 파싱 실패" };
  }

  return { lat, lng, reason: null };
}

async function main() {
  if (!API_KEY) {
    console.error("KAKAO_REST_API_KEY가 없습니다. d:\\dev\\beom\\.env.local에 KAKAO_REST_API_KEY=... 형태로 등록한 뒤 다시 실행해 주세요.");
    process.exit(1);
  }

  const raw = await readFile(INPUT_PATH, "utf8");
  const schools = JSON.parse(raw);

  if (!Array.isArray(schools)) {
    console.error("입력 파일 형식이 올바르지 않습니다. JSON 배열이어야 합니다.");
    process.exit(1);
  }

  console.log(`학교 위경도 변환을 시작합니다. 총 ${schools.length}개 학교`);

  try {
    await fetchCoordinates(schools[0]?.address ?? "");
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);

    if (message.includes("401")) {
      console.error("카카오 로컬 API 인증에 실패했습니다. .env.local의 KAKAO_REST_API_KEY가 올바른 REST API 키인지 확인해 주세요.");
      process.exit(1);
    }

    throw error;
  }

  let successCount = 0;
  let failedCount = 0;
  const results = [];

  for (let index = 0; index < schools.length; index += 1) {
    const school = schools[index];
    const current = index + 1;

    try {
      const { lat, lng, reason } = await fetchCoordinates(school.address);

      if (lat === null || lng === null) {
        failedCount += 1;
        console.warn(`⚠️ ${school.name}: ${reason}`);
      } else {
        successCount += 1;
      }

      results.push({
        ...school,
        lat,
        lng,
      });
    } catch (error) {
      failedCount += 1;
      console.warn(`⚠️ ${school.name}: ${error instanceof Error ? error.message : error}`);
      results.push({
        ...school,
        lat: null,
        lng: null,
      });
    }

    if (current % LOG_INTERVAL === 0 || current === schools.length) {
      console.log(`[${current}/${schools.length}] 완료`);
    }

    if (current < schools.length) {
      await sleep(REQUEST_DELAY_MS);
    }
  }

  await mkdir(path.dirname(OUTPUT_PATH), { recursive: true });
  await writeFile(OUTPUT_PATH, `${JSON.stringify(results, null, 2)}\n`, "utf8");

  console.log("변환 완료");
  console.log(`총 학교 수: ${results.length}`);
  console.log(`변환 성공 수: ${successCount}`);
  console.log(`변환 실패 수: ${failedCount}`);
  console.log(`저장 경로: ${OUTPUT_PATH}`);
}

main().catch((error) => {
  console.error("학교 위경도 변환 중 오류가 발생했습니다.");
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
});
