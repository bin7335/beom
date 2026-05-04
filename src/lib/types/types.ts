// ============================================================
// 교육해범 (범) - 타입 정의 v0.3
// ============================================================
// 변경 이력:
// - v0.2: 10개 주제 기준
// - v0.3: 17개 추천 단위 + 의무/권장 + 시수 메타데이터
// ============================================================

// ---------- 17개 추천 단위 ID ----------
// 안전·건강 영역 (8개)
export const TOPIC_IDS = [
  "safety-education",              // 안전교육 (51h)
  "sex-education",                 // 성교육 (15h)
  "health-education",              // 보건교육 (17h)
  "fire-safety-education",         // 소방안전교육 (연1회)
  "nutrition-education",           // 식품안전·영양·식생활교육 (연2회)
  "internet-addiction-education",  // 인터넷 중독교육
  "suicide-prevention-education",  // 생명존중·자살예방교육 (6h)
  "school-violence-prevention",    // 학교폭력 예방교육 (11h)
  // 기타 9개 영역
  "character-education",           // 인성교육
  "career-education",              // 진로교육
  "democratic-citizen-education",  // 민주시민교육
  "disability-awareness-education", // 장애인식 개선교육 (2h)
  "multicultural-education",       // 다문화 이해교육 (2h)
  "unification-education",         // 통일교육
  "dokdo-education",               // 독도교육
  "economic-education",            // 경제·금융교육
  "environment-education",         // 환경·지속가능한 발전교육
] as const;

export type TopicId = (typeof TOPIC_IDS)[number];

// ---------- 10대 범교과 분류 ----------
export const CATEGORIES = [
  "안전·건강",
  "인성",
  "진로",
  "민주시민",
  "인권",
  "다문화",
  "통일",
  "독도",
  "경제·금융",
  "환경·지속가능발전",
] as const;

export type Category = (typeof CATEGORIES)[number];

// ---------- 추천 단위 메타데이터 (고정 상수) ----------
export interface TopicMetadata {
  id: TopicId;
  name: string;                          // 표시명
  category: Category;                    // 10대 범교과 분류
  isLegallyRequired: boolean;            // true=의무, false=권장
  requiredHours: number | null;          // 기준 시수/횟수 (null=명시 없음)
  hourUnit: "hours" | "yearly" | "none"; // 시간 단위 / 연간 횟수 / 없음
  legalBasis: string;                    // 근거 법령 (간단 표시)
  relatedSubjects: string[];             // 연계 가능 교과
  dataMappingStrength: "strong" | "weak" | "none";
  // strong: 공공데이터로 직접 매핑 가능 (교통사고→교통안전 등)
  // weak: 학교 일반 특성으로만 추론
  // none: 데이터 매핑 거의 불가, 일반 추천만
}

// ---------- 17개 메타데이터 (고정 상수) ----------
// 출처: 「2023학년도 범교과 학습 주제 편성·운영안」(교육부)
export const TOPIC_METADATA: Record<TopicId, TopicMetadata> = {
  "safety-education": {
    id: "safety-education",
    name: "안전교육",
    category: "안전·건강",
    isLegallyRequired: true,
    requiredHours: 51,
    hourUnit: "hours",
    legalBasis: "학교안전법 제8조",
    relatedSubjects: ["사회", "안전한 생활", "체육"],
    dataMappingStrength: "strong",
  },
  "sex-education": {
    id: "sex-education",
    name: "성교육",
    category: "안전·건강",
    isLegallyRequired: true,
    requiredHours: 15,
    hourUnit: "hours",
    legalBasis: "교육기본법 제17조의2",
    relatedSubjects: ["보건", "체육", "도덕"],
    dataMappingStrength: "none",
  },
  "health-education": {
    id: "health-education",
    name: "보건교육",
    category: "안전·건강",
    isLegallyRequired: true,
    requiredHours: 17,
    hourUnit: "hours",
    legalBasis: "학교보건법 제9조",
    relatedSubjects: ["보건", "생물", "체육"],
    dataMappingStrength: "weak",
  },
  "fire-safety-education": {
    id: "fire-safety-education",
    name: "소방안전교육",
    category: "안전·건강",
    isLegallyRequired: true,
    requiredHours: 1,
    hourUnit: "yearly",
    legalBasis: "소방시설법 제22조",
    relatedSubjects: ["안전한 생활", "사회"],
    dataMappingStrength: "weak",
  },
  "nutrition-education": {
    id: "nutrition-education",
    name: "식품안전·영양·식생활교육",
    category: "안전·건강",
    isLegallyRequired: true,
    requiredHours: 2,
    hourUnit: "yearly",
    legalBasis: "식생활교육법 제26조",
    relatedSubjects: ["실과", "보건", "체육"],
    dataMappingStrength: "none",
  },
  "internet-addiction-education": {
    id: "internet-addiction-education",
    name: "인터넷 중독교육",
    category: "안전·건강",
    isLegallyRequired: true,
    requiredHours: null,
    hourUnit: "none",
    legalBasis: "지능정보화기본법 제30조의8",
    relatedSubjects: ["실과", "정보", "도덕"],
    dataMappingStrength: "none",
  },
  "suicide-prevention-education": {
    id: "suicide-prevention-education",
    name: "생명존중·자살예방교육",
    category: "안전·건강",
    isLegallyRequired: true,
    requiredHours: 6,
    hourUnit: "hours",
    legalBasis: "자살예방법 제17조",
    relatedSubjects: ["도덕", "보건"],
    dataMappingStrength: "weak",
  },
  "school-violence-prevention": {
    id: "school-violence-prevention",
    name: "학교폭력 예방교육",
    category: "안전·건강",
    isLegallyRequired: true,
    requiredHours: 11,
    hourUnit: "hours",
    legalBasis: "학교폭력예방법 제15조",
    relatedSubjects: ["도덕", "사회"],
    dataMappingStrength: "strong",
  },
  "character-education": {
    id: "character-education",
    name: "인성교육",
    category: "인성",
    isLegallyRequired: true,
    requiredHours: null,
    hourUnit: "none",
    legalBasis: "인성교육진흥법 제6조",
    relatedSubjects: ["도덕", "실과", "기술가정", "정보"],
    dataMappingStrength: "weak",
  },
  "career-education": {
    id: "career-education",
    name: "진로교육",
    category: "진로",
    isLegallyRequired: true,
    requiredHours: null,
    hourUnit: "none",
    legalBasis: "진로교육법 제12조",
    relatedSubjects: ["창체", "실과"],
    dataMappingStrength: "weak",
  },
  "democratic-citizen-education": {
    id: "democratic-citizen-education",
    name: "민주시민교육",
    category: "민주시민",
    isLegallyRequired: false, // 권장
    requiredHours: null,
    hourUnit: "none",
    legalBasis: "교육기본법 제2조",
    relatedSubjects: ["사회", "도덕", "국어"],
    dataMappingStrength: "none",
  },
  "disability-awareness-education": {
    id: "disability-awareness-education",
    name: "장애인식 개선교육",
    category: "인권",
    isLegallyRequired: true,
    requiredHours: 2,
    hourUnit: "hours",
    legalBasis: "장애인복지법 제25조",
    relatedSubjects: ["도덕", "사회", "창체"],
    dataMappingStrength: "weak",
  },
  "multicultural-education": {
    id: "multicultural-education",
    name: "다문화 이해교육",
    category: "다문화",
    isLegallyRequired: true,
    requiredHours: 2,
    hourUnit: "hours",
    legalBasis: "다문화가족지원법 제5조",
    relatedSubjects: ["도덕", "사회"],
    dataMappingStrength: "strong",
  },
  "unification-education": {
    id: "unification-education",
    name: "통일교육",
    category: "통일",
    isLegallyRequired: true,
    requiredHours: null,
    hourUnit: "none",
    legalBasis: "통일교육지원법 제4조",
    relatedSubjects: ["도덕", "사회"],
    dataMappingStrength: "none",
  },
  "dokdo-education": {
    id: "dokdo-education",
    name: "독도교육",
    category: "독도",
    isLegallyRequired: false, // 권장
    requiredHours: null,
    hourUnit: "none",
    legalBasis: "독도이용법 제5조",
    relatedSubjects: ["사회", "한국사"],
    dataMappingStrength: "none",
  },
  "economic-education": {
    id: "economic-education",
    name: "경제·금융교육",
    category: "경제·금융",
    isLegallyRequired: false, // 권장
    requiredHours: null,
    hourUnit: "none",
    legalBasis: "경제교육지원법 제4조",
    relatedSubjects: ["사회", "실과"],
    dataMappingStrength: "none",
  },
  "environment-education": {
    id: "environment-education",
    name: "환경·지속가능한 발전교육",
    category: "환경·지속가능발전",
    isLegallyRequired: true,
    requiredHours: null,
    hourUnit: "none",
    legalBasis: "환경교육법 제4조",
    relatedSubjects: ["환경", "사회", "실과"],
    dataMappingStrength: "weak",
  },
};

// 메타데이터 헬퍼 함수
export function getTopicById(id: TopicId): TopicMetadata {
  return TOPIC_METADATA[id];
}

export function getAllTopics(): TopicMetadata[] {
  return TOPIC_IDS.map((id) => TOPIC_METADATA[id]);
}

export function formatRequiredHours(meta: TopicMetadata): string {
  if (meta.requiredHours === null) return "명시 없음";
  if (meta.hourUnit === "hours") return `${meta.requiredHours}시간`;
  if (meta.hourUnit === "yearly") return `연 ${meta.requiredHours}회`;
  return "—";
}

// ---------- 학교 정보 ----------
export interface School {
  code: string;
  name: string;
  address: string;
  lat: number;
  lng: number;
  studentCount: number;
  classCount: number;
  sigungu: string;
}

// ---------- 학교 환경 지표 ----------
export interface Environment {
  trafficAccidents3yr: number;
  childProtectionZones: number;
  multiculturalRatio: number;
  schoolViolenceIndex: number | null;
  // 추후 추가
}

// ---------- 경북 평균 기준값 ----------
export interface Baseline {
  avgTrafficAccidents: number;
  avgChildProtectionZones: number;
  avgMulticulturalRatio: number;
  avgSchoolViolenceIndex: number | null;
}

// ---------- 중점교육 추천 1건 ----------
// 메타데이터(시수·법령)는 topicId로 조회. 여기엔 AI가 생성한 분석만.
export interface TopicRecommendation {
  topicId: TopicId;
  rank: 1 | 2 | 3 | 4 | 5;
  intensity: 1 | 2 | 3 | 4 | 5;
  evidence: string;                  // 데이터 근거 (AI 생성)
  evidenceData: {
    value: number;
    baseline: number;
  };
  hoursRecommendation: string;       // 시수 권장 (자유 텍스트, AI 생성)
  // 예: "11시간 유지 + 사이버 비중 확대"
  //    "2시간 → 4시간 (+2시간)"
}

// ---------- 17개 항목 강도 ----------
export type AllTopicsIntensity = Record<TopicId, number>; // 0~5

// ---------- 추천 결과 전체 ----------
export interface Recommendations {
  top5: TopicRecommendation[];
  allTopicsIntensity: AllTopicsIntensity;
}

// ---------- 결과 페이지 전체 데이터 ----------
export interface SchoolResult {
  school: School;
  environment: Environment;
  baseline: Baseline;
  recommendations: Recommendations;
  generatedAt: string;
}

// ---------- 자료 링크 매핑 ----------
// 17개 추천 단위별 외부 자료 링크
export const RESOURCE_LINKS: Record<TopicId, { name: string; url: string }[]> = {
  "safety-education": [
    { name: "학교안전정보센터", url: "https://www.schoolsafe.kr" },
    { name: "에듀넷 안전교육 자료", url: "https://www.edunet.net" },
  ],
  "sex-education": [
    { name: "에듀넷 성교육 자료", url: "https://www.edunet.net" },
  ],
  "health-education": [
    { name: "에듀넷 보건교육 자료", url: "https://www.edunet.net" },
  ],
  "fire-safety-education": [
    { name: "소방청 어린이 소방안전", url: "https://www.nfa.go.kr" },
  ],
  "nutrition-education": [
    { name: "식품안전나라", url: "https://www.foodsafetykorea.go.kr" },
  ],
  "internet-addiction-education": [
    { name: "스마트쉼센터", url: "https://www.iapc.or.kr" },
  ],
  "suicide-prevention-education": [
    { name: "한국생명존중희망재단", url: "https://www.kfsp.org" },
  ],
  "school-violence-prevention": [
    { name: "학교폭력예방 어울림", url: "https://stopbullying.re.kr" },
    { name: "에듀넷 학교폭력 예방", url: "https://www.edunet.net" },
  ],
  "character-education": [
    { name: "에듀넷 인성교육", url: "https://www.edunet.net" },
  ],
  "career-education": [
    { name: "커리어넷", url: "https://www.career.go.kr" },
  ],
  "democratic-citizen-education": [
    { name: "에듀넷 민주시민교육", url: "https://www.edunet.net" },
  ],
  "disability-awareness-education": [
    { name: "국립특수교육원", url: "https://www.nise.go.kr" },
  ],
  "multicultural-education": [
    { name: "에듀넷 다문화 자료", url: "https://www.edunet.net" },
    { name: "중앙다문화교육센터", url: "https://www.edu4mc.or.kr" },
  ],
  "unification-education": [
    { name: "통일부 통일교육원", url: "https://www.uniedu.go.kr" },
  ],
  "dokdo-education": [
    { name: "사이버 독도", url: "https://www.dokdo.go.kr" },
  ],
  "economic-education": [
    { name: "한국은행 경제교육", url: "https://www.bok.or.kr" },
  ],
  "environment-education": [
    { name: "환경교육포털", url: "https://www.keep.go.kr" },
  ],
};
