import type { SchoolResult } from "@/lib/types";

// 도시형 학교 (포항 도심)
export const sampleUrban: SchoolResult = {
  school: {
    code: "sample-urban",
    name: "포항제철초등학교 (예시)",
    address: "경상북도 포항시 남구 효자동",
    lat: 36.0190,
    lng: 129.3435,
    studentCount: 612,
    classCount: 24,
    sigungu: "포항시 남구",
  },
  environment: {
    trafficAccidents3yr: 18,
    childProtectionZones: 4,
    multiculturalRatio: 0.082,
    schoolViolenceIndex: 0.034,
  },
  baseline: {
    avgTrafficAccidents: 12.2,
    avgChildProtectionZones: 2.8,
    avgMulticulturalRatio: 0.051,
    avgSchoolViolenceIndex: 0.028,
  },
  recommendations: {
    top5: [
      {
        rank: 1,
        topic: "교통안전교육",
        category: "안전·건강",
        intensity: 5,
        evidence: "인근 교통사고 발생률이 경북 평균 대비 47% 높음",
        evidenceData: { value: 18, baseline: 12.2 },
        recommendedHoursChange: "+1",
        subjectLinks: ["사회 2-1", "안전한 생활 1~2학년"],
        resources: [
          { name: "에듀넷 교통안전 자료", url: "https://www.edunet.net" },
          { name: "안전교육포털", url: "https://www.schoolsafe.kr" },
        ],
      },
      {
        rank: 2,
        topic: "다문화교육",
        category: "다문화",
        intensity: 4,
        evidence: "다문화 가정 비율 경북 평균 대비 +3.1%p",
        evidenceData: { value: 0.082, baseline: 0.051 },
        recommendedHoursChange: "+1",
        subjectLinks: ["도덕 3~6학년", "사회 4~6학년"],
        resources: [
          { name: "에듀넷 다문화 자료", url: "https://www.edunet.net" },
        ],
      },
      {
        rank: 3,
        topic: "생활안전교육",
        category: "안전·건강",
        intensity: 4,
        evidence: "어린이보호구역 4개소 — 보호구역 활용 안전교육 강화 필요",
        evidenceData: { value: 4, baseline: 2.8 },
        recommendedHoursChange: "+1",
        subjectLinks: ["안전한 생활 1~2학년", "체육 3~6학년"],
        resources: [
          { name: "안전교육포털 생활안전", url: "https://www.schoolsafe.kr" },
        ],
      },
      {
        rank: 4,
        topic: "폭력예방교육",
        category: "안전·건강",
        intensity: 3,
        evidence: "학교폭력 지수 경북 평균 수준 유지",
        evidenceData: { value: 0.034, baseline: 0.028 },
        recommendedHoursChange: "0",
        subjectLinks: ["도덕 3~6학년"],
        resources: [
          { name: "에듀넷 학교폭력 예방", url: "https://www.edunet.net" },
        ],
      },
      {
        rank: 5,
        topic: "인성교육",
        category: "인성",
        intensity: 3,
        evidence: "학교 규모(24학급) 평균 — 표준 인성교육 권장",
        evidenceData: { value: 24, baseline: 18 },
        recommendedHoursChange: "0",
        subjectLinks: ["도덕 3~6학년", "창체"],
        resources: [
          { name: "에듀넷 인성교육", url: "https://www.edunet.net" },
        ],
      },
    ],
    allTenIntensity: {
      "안전·건강": 5,
      "인성": 3,
      "진로": 2,
      "민주시민": 3,
      "인권": 2,
      "다문화": 4,
      "통일": 1,
      "독도": 2,
      "경제·금융": 2,
      "환경·지속가능발전": 3,
    },
  },
  generatedAt: "2026-05-04T20:00:00+09:00",
};

// 농어촌 소규모 학교 (예시)
export const sampleRural: SchoolResult = {
  school: {
    code: "sample-rural",
    name: "영양분교 (예시)",
    address: "경상북도 영양군 입암면",
    lat: 36.6664,
    lng: 129.1124,
    studentCount: 24,
    classCount: 6,
    sigungu: "영양군",
  },
  environment: {
    trafficAccidents3yr: 2,
    childProtectionZones: 1,
    multiculturalRatio: 0.125,
    schoolViolenceIndex: 0.012,
  },
  baseline: {
    avgTrafficAccidents: 12.2,
    avgChildProtectionZones: 2.8,
    avgMulticulturalRatio: 0.051,
    avgSchoolViolenceIndex: 0.028,
  },
  recommendations: {
    top5: [
      {
        rank: 1,
        topic: "다문화교육",
        category: "다문화",
        intensity: 5,
        evidence: "다문화 가정 비율 12.5% — 경북 평균의 2.4배",
        evidenceData: { value: 0.125, baseline: 0.051 },
        recommendedHoursChange: "+2",
        subjectLinks: ["도덕 3~6학년", "사회 4~6학년", "창체"],
        resources: [
          { name: "에듀넷 다문화 자료", url: "https://www.edunet.net" },
        ],
      },
      {
        rank: 2,
        topic: "환경·지속가능발전교육",
        category: "환경·지속가능발전",
        intensity: 4,
        evidence: "농어촌 지역 특성 — 자연환경 활용 생태교육 강화 권장",
        evidenceData: { value: 1, baseline: 1 },
        recommendedHoursChange: "+1",
        subjectLinks: ["과학 3~6학년", "창체"],
        resources: [
          { name: "에듀넷 환경교육", url: "https://www.edunet.net" },
        ],
      },
      {
        rank: 3,
        topic: "진로교육",
        category: "진로",
        intensity: 4,
        evidence: "소규모 학교 — 진로 다양성 노출 기회 보강 필요",
        evidenceData: { value: 24, baseline: 350 },
        recommendedHoursChange: "+1",
        subjectLinks: ["창체", "실과 5~6학년"],
        resources: [
          { name: "커리어넷 진로 자료", url: "https://www.career.go.kr" },
        ],
      },
      {
        rank: 4,
        topic: "교통안전교육",
        category: "안전·건강",
        intensity: 2,
        evidence: "인근 교통사고 평균 이하 — 표준 권장 시수 유지",
        evidenceData: { value: 2, baseline: 12.2 },
        recommendedHoursChange: "0",
        subjectLinks: ["안전한 생활 1~2학년"],
        resources: [
          { name: "에듀넷 교통안전 자료", url: "https://www.edunet.net" },
        ],
      },
      {
        rank: 5,
        topic: "인성교육",
        category: "인성",
        intensity: 3,
        evidence: "소규모 학교 — 학년 통합 인성교육 효과적",
        evidenceData: { value: 6, baseline: 18 },
        recommendedHoursChange: "0",
        subjectLinks: ["도덕 3~6학년", "창체"],
        resources: [
          { name: "에듀넷 인성교육", url: "https://www.edunet.net" },
        ],
      },
    ],
    allTenIntensity: {
      "안전·건강": 2,
      "인성": 3,
      "진로": 4,
      "민주시민": 2,
      "인권": 3,
      "다문화": 5,
      "통일": 1,
      "독도": 2,
      "경제·금융": 2,
      "환경·지속가능발전": 4,
    },
  },
  generatedAt: "2026-05-04T20:00:00+09:00",
};

// 일반 학교 (구미 - 평균적 도시)
export const sampleStandard: SchoolResult = {
  school: {
    code: "sample-standard",
    name: "구미중앙초등학교 (예시)",
    address: "경상북도 구미시 송정동",
    lat: 36.1195,
    lng: 128.3445,
    studentCount: 380,
    classCount: 18,
    sigungu: "구미시",
  },
  environment: {
    trafficAccidents3yr: 11,
    childProtectionZones: 3,
    multiculturalRatio: 0.045,
    schoolViolenceIndex: 0.025,
  },
  baseline: {
    avgTrafficAccidents: 12.2,
    avgChildProtectionZones: 2.8,
    avgMulticulturalRatio: 0.051,
    avgSchoolViolenceIndex: 0.028,
  },
  recommendations: {
    top5: [
      {
        rank: 1,
        topic: "교통안전교육",
        category: "안전·건강",
        intensity: 3,
        evidence: "인근 교통사고 경북 평균 수준 — 표준 권장 시수",
        evidenceData: { value: 11, baseline: 12.2 },
        recommendedHoursChange: "0",
        subjectLinks: ["사회 2-1", "안전한 생활 1~2학년"],
        resources: [
          { name: "에듀넷 교통안전 자료", url: "https://www.edunet.net" },
        ],
      },
      {
        rank: 2,
        topic: "민주시민교육",
        category: "민주시민",
        intensity: 3,
        evidence: "도시형 평균 학교 — 시민의식 함양 표준 운영",
        evidenceData: { value: 380, baseline: 350 },
        recommendedHoursChange: "0",
        subjectLinks: ["사회 4~6학년"],
        resources: [
          { name: "에듀넷 민주시민", url: "https://www.edunet.net" },
        ],
      },
      {
        rank: 3,
        topic: "환경교육",
        category: "환경·지속가능발전",
        intensity: 3,
        evidence: "도심 위치 — 환경 인식 균형 운영",
        evidenceData: { value: 1, baseline: 1 },
        recommendedHoursChange: "0",
        subjectLinks: ["과학 3~6학년"],
        resources: [
          { name: "에듀넷 환경교육", url: "https://www.edunet.net" },
        ],
      },
      {
        rank: 4,
        topic: "진로교육",
        category: "진로",
        intensity: 3,
        evidence: "표준 권장 — 다양한 진로 탐색 기회 제공",
        evidenceData: { value: 380, baseline: 350 },
        recommendedHoursChange: "0",
        subjectLinks: ["창체", "실과 5~6학년"],
        resources: [
          { name: "커리어넷", url: "https://www.career.go.kr" },
        ],
      },
      {
        rank: 5,
        topic: "독도교육",
        category: "독도",
        intensity: 3,
        evidence: "경북 소재 학교 — 독도 인식 강화 권장",
        evidenceData: { value: 1, baseline: 1 },
        recommendedHoursChange: "0",
        subjectLinks: ["사회 5학년", "창체"],
        resources: [
          { name: "독도교육 자료", url: "https://www.edunet.net" },
        ],
      },
    ],
    allTenIntensity: {
      "안전·건강": 3,
      "인성": 3,
      "진로": 3,
      "민주시민": 3,
      "인권": 3,
      "다문화": 3,
      "통일": 2,
      "독도": 3,
      "경제·금융": 2,
      "환경·지속가능발전": 3,
    },
  },
  generatedAt: "2026-05-04T20:00:00+09:00",
};

// code로 샘플 조회
export const SAMPLE_SCHOOLS: Record<string, SchoolResult> = {
  "sample-urban": sampleUrban,
  "sample-rural": sampleRural,
  "sample-standard": sampleStandard,
};

export function getSampleSchool(code: string): SchoolResult | null {
  return SAMPLE_SCHOOLS[code] ?? null;
}
