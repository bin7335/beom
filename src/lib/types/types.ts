export const TOPIC_IDS = [
  "safety-education",
  "sex-education",
  "health-education",
  "fire-safety-education",
  "nutrition-education",
  "internet-addiction-education",
  "suicide-prevention-education",
  "school-violence-prevention",
  "character-education",
  "career-education",
  "democratic-citizen-education",
  "disability-awareness-education",
  "multicultural-education",
  "unification-education",
  "dokdo-education",
  "economic-education",
  "environment-education",
] as const;

export type TopicId = (typeof TOPIC_IDS)[number];

export const CATEGORIES = [
  "안전·건강",
  "인성",
  "진로",
  "민주시민",
  "인권·장애이해",
  "다문화",
  "통일",
  "독도",
  "경제·금융",
  "환경·지속가능발전",
] as const;

export type Category = (typeof CATEGORIES)[number];

export interface TopicMetadata {
  id: TopicId;
  name: string;
  category: Category;
  isLegallyRequired: boolean;
  requiredHours: number | null;
  hourUnit: "hours" | "yearly" | "none";
  legalBasis: string;
  relatedSubjects: string[];
  dataMappingStrength: "strong" | "weak" | "none";
}

export const TOPIC_METADATA: Record<TopicId, TopicMetadata> = {
  "safety-education": {
    id: "safety-education",
    name: "안전교육",
    category: "안전·건강",
    isLegallyRequired: true,
    requiredHours: 51,
    hourUnit: "hours",
    legalBasis: "학교안전사고 예방 및 보상에 관한 법률",
    relatedSubjects: ["안전한 생활", "사회", "체육"],
    dataMappingStrength: "strong",
  },
  "sex-education": {
    id: "sex-education",
    name: "성교육",
    category: "안전·건강",
    isLegallyRequired: true,
    requiredHours: 15,
    hourUnit: "hours",
    legalBasis: "교육기본법 및 학교 성교육 운영 지침",
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
    legalBasis: "학교보건법",
    relatedSubjects: ["보건", "체육", "과학"],
    dataMappingStrength: "weak",
  },
  "fire-safety-education": {
    id: "fire-safety-education",
    name: "소방안전교육",
    category: "안전·건강",
    isLegallyRequired: true,
    requiredHours: 1,
    hourUnit: "yearly",
    legalBasis: "화재의 예방 및 안전관리에 관한 법률",
    relatedSubjects: ["안전한 생활", "사회"],
    dataMappingStrength: "weak",
  },
  "nutrition-education": {
    id: "nutrition-education",
    name: "영양·식생활교육",
    category: "안전·건강",
    isLegallyRequired: true,
    requiredHours: 2,
    hourUnit: "yearly",
    legalBasis: "식생활교육지원법",
    relatedSubjects: ["실과", "보건", "체육"],
    dataMappingStrength: "none",
  },
  "internet-addiction-education": {
    id: "internet-addiction-education",
    name: "인터넷·스마트폰 과의존 예방교육",
    category: "안전·건강",
    isLegallyRequired: true,
    requiredHours: null,
    hourUnit: "none",
    legalBasis: "지능정보화 기본법",
    relatedSubjects: ["정보", "실과", "도덕"],
    dataMappingStrength: "none",
  },
  "suicide-prevention-education": {
    id: "suicide-prevention-education",
    name: "생명존중 및 자살예방교육",
    category: "안전·건강",
    isLegallyRequired: true,
    requiredHours: 6,
    hourUnit: "hours",
    legalBasis: "자살예방 및 생명존중문화 조성을 위한 법률",
    relatedSubjects: ["보건", "도덕"],
    dataMappingStrength: "weak",
  },
  "school-violence-prevention": {
    id: "school-violence-prevention",
    name: "학교폭력 예방교육",
    category: "안전·건강",
    isLegallyRequired: true,
    requiredHours: 11,
    hourUnit: "hours",
    legalBasis: "학교폭력예방 및 대책에 관한 법률",
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
    legalBasis: "인성교육진흥법",
    relatedSubjects: ["도덕", "창체", "국어"],
    dataMappingStrength: "weak",
  },
  "career-education": {
    id: "career-education",
    name: "진로교육",
    category: "진로",
    isLegallyRequired: true,
    requiredHours: null,
    hourUnit: "none",
    legalBasis: "진로교육법",
    relatedSubjects: ["실과", "창체"],
    dataMappingStrength: "weak",
  },
  "democratic-citizen-education": {
    id: "democratic-citizen-education",
    name: "민주시민교육",
    category: "민주시민",
    isLegallyRequired: false,
    requiredHours: null,
    hourUnit: "none",
    legalBasis: "교육기본법의 민주시민 교육 취지",
    relatedSubjects: ["사회", "도덕", "국어"],
    dataMappingStrength: "none",
  },
  "disability-awareness-education": {
    id: "disability-awareness-education",
    name: "장애이해교육",
    category: "인권·장애이해",
    isLegallyRequired: true,
    requiredHours: 2,
    hourUnit: "hours",
    legalBasis: "장애인복지법",
    relatedSubjects: ["도덕", "사회", "창체"],
    dataMappingStrength: "weak",
  },
  "multicultural-education": {
    id: "multicultural-education",
    name: "다문화이해교육",
    category: "다문화",
    isLegallyRequired: true,
    requiredHours: 2,
    hourUnit: "hours",
    legalBasis: "다문화가족지원법",
    relatedSubjects: ["사회", "도덕"],
    dataMappingStrength: "strong",
  },
  "unification-education": {
    id: "unification-education",
    name: "통일교육",
    category: "통일",
    isLegallyRequired: true,
    requiredHours: null,
    hourUnit: "none",
    legalBasis: "통일교육지원법",
    relatedSubjects: ["사회", "도덕"],
    dataMappingStrength: "none",
  },
  "dokdo-education": {
    id: "dokdo-education",
    name: "독도교육",
    category: "독도",
    isLegallyRequired: false,
    requiredHours: null,
    hourUnit: "none",
    legalBasis: "시도교육청 독도교육 운영 계획",
    relatedSubjects: ["사회", "창체"],
    dataMappingStrength: "none",
  },
  "economic-education": {
    id: "economic-education",
    name: "경제·금융교육",
    category: "경제·금융",
    isLegallyRequired: false,
    requiredHours: null,
    hourUnit: "none",
    legalBasis: "경제교육지원법",
    relatedSubjects: ["사회", "실과"],
    dataMappingStrength: "none",
  },
  "environment-education": {
    id: "environment-education",
    name: "환경·지속가능발전교육",
    category: "환경·지속가능발전",
    isLegallyRequired: true,
    requiredHours: null,
    hourUnit: "none",
    legalBasis: "환경교육의 활성화 및 지원에 관한 법률",
    relatedSubjects: ["과학", "사회", "창체"],
    dataMappingStrength: "weak",
  },
};

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
  return "명시 없음";
}

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

export interface Environment {
  trafficAccidents3yr: number;
  childProtectionZones: number;
  multiculturalRatio: number;
  schoolViolenceIndex: number | null;
  indicators: EnvironmentIndicator[];
}

export interface Baseline {
  avgTrafficAccidents: number;
  avgChildProtectionZones: number;
  avgMulticulturalRatio: number;
  avgSchoolViolenceIndex: number | null;
}

export interface TopicRecommendation {
  topicId: TopicId;
  groupId: RadarGroupId;
  groupLabel: string;
  rank: 1 | 2 | 3 | 4 | 5;
  intensity: 1 | 2 | 3 | 4 | 5;
  score: number;
  evidence: string;
  evidenceData: {
    value: number;
    baseline: number;
  };
  hoursRecommendation: string;
}

export type AllTopicsIntensity = Record<TopicId, number>;

export interface EnvironmentIndicator {
  id: string;
  label: string;
  value: number;
  unit?: string;
  description?: string;
}

export const CURRICULUM_TOPIC_IDS = [
  "safety-health",
  "character",
  "career",
  "democratic-citizenship",
  "unification",
  "dokdo",
  "human-rights",
  "multicultural",
  "economic-finance",
  "environment-sustainability",
] as const;

export type CurriculumTopicId = (typeof CURRICULUM_TOPIC_IDS)[number];

export interface CurriculumTopicMetadata {
  id: CurriculumTopicId;
  label: string;
  category: string;
}

export const CURRICULUM_TOPIC_METADATA: Record<
  CurriculumTopicId,
  CurriculumTopicMetadata
> = {
  "safety-health": {
    id: "safety-health",
    label: "안전·건강",
    category: "안전·건강 환경",
  },
  character: {
    id: "character",
    label: "공동체",
    category: "공동체·진로 환경",
  },
  career: {
    id: "career",
    label: "진로",
    category: "공동체·진로 환경",
  },
  "democratic-citizenship": {
    id: "democratic-citizenship",
    label: "민주시민",
    category: "사회·시민 환경",
  },
  unification: {
    id: "unification",
    label: "통일",
    category: "사회·시민 환경",
  },
  dokdo: {
    id: "dokdo",
    label: "독도",
    category: "사회·시민 환경",
  },
  "human-rights": {
    id: "human-rights",
    label: "인권",
    category: "인권·다양성 환경",
  },
  multicultural: {
    id: "multicultural",
    label: "다문화",
    category: "인권·다양성 환경",
  },
  "economic-finance": {
    id: "economic-finance",
    label: "경제·금융",
    category: "환경·지속가능",
  },
  "environment-sustainability": {
    id: "environment-sustainability",
    label: "환경·지속가능발전",
    category: "환경·지속가능",
  },
};

export function getCurriculumTopicById(
  id: CurriculumTopicId,
): CurriculumTopicMetadata {
  return CURRICULUM_TOPIC_METADATA[id];
}

export interface CurriculumTopicScore {
  topicId: CurriculumTopicId;
  score: number;
  reason: string;
}

export type ScoreStatus = "취약" | "보통" | "양호";

export const RADAR_GROUP_IDS = [
  "safety-health",
  "character-career",
  "society-citizenship",
  "rights-diversity",
  "future-sustainability",
] as const;

export type RadarGroupId = (typeof RADAR_GROUP_IDS)[number];

export interface RadarDataPoint {
  groupId: RadarGroupId;
  group: string;
  score: number;
  rawValue?: number;
  items: string[];
}

export interface Recommendations {
  top5: TopicRecommendation[];
  allTopicsIntensity: AllTopicsIntensity;
  curriculumTopicScores: CurriculumTopicScore[];
  radarData: RadarDataPoint[];
}

export interface SchoolResult {
  school: School;
  environment: Environment;
  baseline: Baseline;
  recommendations: Recommendations;
  generatedAt: string;
}

// 교육부 범교과 학습 주제 10개를 시각화 가독성을 위해 5개 그룹으로 묶어 사용한다.

export const RESOURCE_LINKS: Record<TopicId, { name: string; url: string }[]> = {
  "safety-education": [
    { name: "학교안전정보센터", url: "https://www.schoolsafe.kr" },
    { name: "에듀넷 안전교육 자료", url: "https://www.edunet.net" },
  ],
  "sex-education": [{ name: "에듀넷 성교육 자료", url: "https://www.edunet.net" }],
  "health-education": [{ name: "에듀넷 보건교육 자료", url: "https://www.edunet.net" }],
  "fire-safety-education": [{ name: "소방청 어린이 안전교육", url: "https://www.nfa.go.kr" }],
  "nutrition-education": [{ name: "식품안전나라", url: "https://www.foodsafetykorea.go.kr" }],
  "internet-addiction-education": [{ name: "스마트쉼센터", url: "https://www.iapc.or.kr" }],
  "suicide-prevention-education": [{ name: "학생생명존중 교육자료", url: "https://www.kfsp.org" }],
  "school-violence-prevention": [
    { name: "학교폭력예방 어울림", url: "https://stopbullying.re.kr" },
    { name: "에듀넷 학교폭력 예방", url: "https://www.edunet.net" },
  ],
  "character-education": [{ name: "에듀넷 인성교육", url: "https://www.edunet.net" }],
  "career-education": [{ name: "커리어넷", url: "https://www.career.go.kr" }],
  "democratic-citizen-education": [{ name: "에듀넷 민주시민교육", url: "https://www.edunet.net" }],
  "disability-awareness-education": [{ name: "국립특수교육원", url: "https://www.nise.go.kr" }],
  "multicultural-education": [
    { name: "에듀넷 다문화교육", url: "https://www.edunet.net" },
    { name: "중앙다문화교육센터", url: "https://www.edu4mc.or.kr" },
  ],
  "unification-education": [{ name: "통일부 통일교육원", url: "https://www.uniedu.go.kr" }],
  "dokdo-education": [{ name: "사이버독도", url: "https://www.dokdo.go.kr" }],
  "economic-education": [{ name: "한국은행 경제교육", url: "https://www.bok.or.kr" }],
  "environment-education": [{ name: "환경교육포털", url: "https://www.keep.go.kr" }],
};
