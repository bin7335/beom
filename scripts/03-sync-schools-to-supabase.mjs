import { config as loadEnv } from "dotenv";
import { readFile } from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import { fileURLToPath } from "node:url";
import { createClient } from "@supabase/supabase-js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, "..");

loadEnv({ path: path.join(projectRoot, ".env.local") });

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL?.trim();
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY?.trim();
const INPUT_PATH = path.join(projectRoot, "data", "processed", "schools_with_coords.json");
const BATCH_SIZE = 100;

function normalizeString(value) {
  if (typeof value !== "string") {
    return null;
  }

  const trimmed = value.trim();
  return trimmed.length > 0 ? trimmed : null;
}

function normalizeNumber(value) {
  return typeof value === "number" && Number.isFinite(value) ? value : null;
}

function toSchoolRow(school) {
  return {
    code: String(school.code ?? "").trim(),
    name: String(school.name ?? "").trim(),
    address: normalizeString(school.address),
    address_detail: normalizeString(school.addressDetail),
    zipcode: normalizeString(school.postalCode),
    lat: normalizeNumber(school.lat),
    lng: normalizeNumber(school.lng),
    sido: normalizeString(school.location),
    edu_office: normalizeString(school.officeName),
    school_type: normalizeString(school.schoolKind),
    establishment_type: normalizeString(school.foundationType),
    founded_date: normalizeString(school.foundedDate),
    english_name: normalizeString(school.englishName),
  };
}

function chunk(items, size) {
  const chunks = [];

  for (let index = 0; index < items.length; index += size) {
    chunks.push(items.slice(index, index + size));
  }

  return chunks;
}

async function loadSchools() {
  const raw = await readFile(INPUT_PATH, "utf8");
  const schools = JSON.parse(raw);

  if (!Array.isArray(schools)) {
    throw new Error("schools_with_coords.json 형식이 올바르지 않습니다. JSON 배열이어야 합니다.");
  }

  const rows = schools.map(toSchoolRow);
  const invalidRows = rows.filter((row) => !row.code || !row.name);

  if (invalidRows.length > 0) {
    throw new Error(`code 또는 name이 비어 있는 학교 ${invalidRows.length}건이 있습니다.`);
  }

  return rows;
}

async function main() {
  if (!SUPABASE_URL) {
    throw new Error("NEXT_PUBLIC_SUPABASE_URL이 없습니다.");
  }

  if (!SUPABASE_SERVICE_ROLE_KEY) {
    throw new Error("SUPABASE_SERVICE_ROLE_KEY가 없습니다.");
  }

  const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  });

  const rows = await loadSchools();
  const batches = chunk(rows, BATCH_SIZE);
  const missingCoordsCount = rows.filter((row) => row.lat === null || row.lng === null).length;

  console.log(`Supabase schools 적재를 시작합니다. 총 ${rows.length}건`);
  console.log(`좌표 누락 학교 수: ${missingCoordsCount}건`);

  for (let index = 0; index < batches.length; index += 1) {
    const batch = batches[index];
    const { error } = await supabase
      .from("schools")
      .upsert(batch, { onConflict: "code" });

    if (error) {
      throw new Error(`배치 ${index + 1}/${batches.length} 적재 실패: ${error.message}`);
    }

    console.log(`배치 ${index + 1}/${batches.length} 적재 완료 (${batch.length}건)`);
  }

  const { count, error: countError } = await supabase
    .from("schools")
    .select("*", { count: "exact", head: true });

  if (countError) {
    throw new Error(`적재 후 건수 확인 실패: ${countError.message}`);
  }

  console.log(`적재 완료. 현재 schools 테이블 행 수: ${count ?? "알 수 없음"}`);
}

main().catch((error) => {
  console.error("Supabase schools 적재 중 오류가 발생했습니다.");
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
});
