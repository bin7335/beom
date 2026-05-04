import type { SchoolResult, AllTopicsIntensity } from "@/lib/types";

// ============================================================
// 교육해범 mock 데이터 v0.3
// ============================================================
// 변경: 10개 주제 → 17개 추천 단위로 재작성
// 출처: 2023학년도 범교과 학습 주제 편성·운영안 (교육부)
// ============================================================

// 17개 항목 기본 강도 (1=낮음, 5=높음)
const baselineIntensity: AllTopicsIntensity = {
  "safety-education": 3,
  "sex-education": 3,
  "health-education": 3,
  "fire-safety-education": 3,
  "nutrition-education": 3,
  "internet-addiction-education": 3,
  "suicide-prevention-education": 3,
  "school-violence-prevention": 3,
  "character-education": 3,
  "career-education": 3,
  "democratic-citizen-education": 3,
  "disability-awareness-education": 3,
  "multicultural-education": 3,
  "unification-education": 3,
  "dokdo-education": 3,
  "economic-education": 3,
  "environment-education": 3,
};

// ============================================================
// 샘플 1: 도시형 학교 (포항제철초등학교)
// 특징: 인근 교통사고 多, 다문화 비율 높음, 학교폭력 신고 평균 이상
// ============================================================
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
        topicId: "safety-education",
        rank: 1,
        intensity: 5,
        evidence: "인근 교통사고 발생률이 경북 평균 대비 47% 높음 (3년간 18건)",
        evidenceData: { value: 18, baseline: 12.2 },
        hoursRecommendation: "51시간 유지하되 교통안전 비중 강화 권장",
      },
      {
        topicId: "multicultural-education",
        rank: 2,
        intensity: 4,
        evidence: "다문화 가정 비율 8.2%로 경북 평균 대비 +3.1%p",
        evidenceData: { value: 0.082, baseline: 0.051 },
        hoursRecommendation: "기준 2시간 → 4시간 (+2시간)",
      },
      {
        topicId: "school-violence-prevention",
        rank: 3,
        intensity: 4,
        evidence: "학교폭력 지수 경북 평균 대비 +21% (사이버 비중 증가 추세)",
        evidenceData: { value: 0.034, baseline: 0.028 },
        hoursRecommendation: "11시간 유지 + 사이버폭력 예방 비중 확대",
      },
      {
        topicId: "health-education",
        rank: 4,
        intensity: 3,
        evidence: "도시형 대형 학교 — 표준 보건교육 운영 권장",
        evidenceData: { value: 612, baseline: 350 },
        hoursRecommendation: "기준 17시간 운영",
      },
      {
        topicId: "career-education",
        rank: 5,
        intensity: 3,
        evidence: "포항 산업단지 인근 — 진로 다양성 노출 기회 활용",
        evidenceData: { value: 612, baseline: 350 },
        hoursRecommendation: "지역 산업 연계 진로교육 권장",
      },
    ],
    allTopicsIntensity: {
      ...baselineIntensity,
      "safety-education": 5,
      "multicultural-education": 4,
      "school-violence-prevention": 4,
      "health-education": 3,
      "career-education": 3,
      "fire-safety-education": 3,
      "environment-education": 3,
    },
  },
  generatedAt: "2026-05-04T20:00:00+09:00",
};

// ============================================================
// 샘플 2: 농어촌 소규모 학교 (영양분교)
// 특징: 다문화 매우 높음, 교통사고 적음, 자연환경 풍부
// ============================================================
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
        topicId: "multicultural-education",
        rank: 1,
        intensity: 5,
        evidence: "다문화 가정 비율 12.5%로 경북 평균의 2.4배",
        evidenceData: { value: 0.125, baseline: 0.051 },
        hoursRecommendation: "기준 2시간 → 6시간 (+4시간), 학교 자율시간 활용",
      },
      {
        topicId: "environment-education",
        rank: 2,
        intensity: 4,
        evidence: "농어촌 자연환경 — 생태감수성 증진 위한 체험 중심 교육 적합",
        evidenceData: { value: 1, baseline: 1 },
        hoursRecommendation: "환경교육주간 연계 + 학교자율시간 활용 권장",
      },
      {
        topicId: "career-education",
        rank: 3,
        intensity: 4,
        evidence: "소규모 학교 — 진로 다양성 노출 기회 보강 필요 (학생 24명)",
        evidenceData: { value: 24, baseline: 350 },
        hoursRecommendation: "외부 진로체험 프로그램 적극 활용 권장",
      },
      {
        topicId: "safety-education",
        rank: 4,
        intensity: 2,
        evidence: "인근 교통사고 평균 이하 — 표준 시수 유지 적정",
        evidenceData: { value: 2, baseline: 12.2 },
        hoursRecommendation: "51시간 표준 운영, 농어촌 안전 요소(농기계 등) 반영",
      },
      {
        topicId: "character-education",
        rank: 5,
        intensity: 3,
        evidence: "소규모 학교 — 학년 통합 인성교육 효과적",
        evidenceData: { value: 6, baseline: 18 },
        hoursRecommendation: "도덕·창체 통합 운영 권장",
      },
    ],
    allTopicsIntensity: {
      ...baselineIntensity,
      "multicultural-education": 5,
      "environment-education": 4,
      "career-education": 4,
      "safety-education": 2,
      "character-education": 3,
      "school-violence-prevention": 2,
      "internet-addiction-education": 4, // 소규모 농어촌도 인터넷 의존 높음
    },
  },
  generatedAt: "2026-05-04T20:00:00+09:00",
};

// ============================================================
// 샘플 3: 표준 도시 학교 (구미중앙초등학교)
// 특징: 모든 지표 경북 평균 수준, 표준 운영 적합
// ============================================================
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
        topicId: "dokdo-education",
        rank: 1,
        intensity: 4,
        evidence: "경상북도 소재 — 독도교육 강화 권장 (시도 정책 연계)",
        evidenceData: { value: 1, baseline: 1 },
        hoursRecommendation: "독도교육주간 연계 10시간 이상 권장",
      },
      {
        topicId: "career-education",
        rank: 2,
        intensity: 3,
        evidence: "구미 산업단지 인근 — 다양한 진로 탐색 기회 활용",
        evidenceData: { value: 380, baseline: 350 },
        hoursRecommendation: "지역 산업 연계 진로 프로그램 권장",
      },
      {
        topicId: "safety-education",
        rank: 3,
        intensity: 3,
        evidence: "인근 교통사고 경북 평균 수준 — 표준 시수 적정",
        evidenceData: { value: 11, baseline: 12.2 },
        hoursRecommendation: "기준 51시간 표준 운영",
      },
      {
        topicId: "democratic-citizen-education",
        rank: 4,
        intensity: 3,
        evidence: "도시형 평균 학교 — 시민의식 함양 표준 운영",
        evidenceData: { value: 380, baseline: 350 },
        hoursRecommendation: "사회·도덕 교과 연계 운영 권장",
      },
      {
        topicId: "environment-education",
        rank: 5,
        intensity: 3,
        evidence: "도심 위치 — 환경 인식 균형 운영 권장",
        evidenceData: { value: 1, baseline: 1 },
        hoursRecommendation: "환경교육주간 연계 4시간 이상 권장",
      },
    ],
    allTopicsIntensity: {
      ...baselineIntensity,
      "dokdo-education": 4,
      "career-education": 3,
      "safety-education": 3,
      "democratic-citizen-education": 3,
      "environment-education": 3,
      "multicultural-education": 3,
      "school-violence-prevention": 3,
    },
  },
  generatedAt: "2026-05-04T20:00:00+09:00",
};

// ============================================================
// 조회 헬퍼
// ============================================================
export const SAMPLE_SCHOOLS: Record<string, SchoolResult> = {
  "sample-urban": sampleUrban,
  "sample-rural": sampleRural,
  "sample-standard": sampleStandard,
};

export function getSampleSchool(code: string): SchoolResult | null {
  return SAMPLE_SCHOOLS[code] ?? null;
}
