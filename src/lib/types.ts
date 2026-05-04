// 범교과 10개 주제
export const TOPICS = [
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

export type Topic = (typeof TOPICS)[number];

// 학교 기본 정보
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

// 학교 환경 지표 (학교 좌표 기준 반경 1km)
export interface Environment {
  trafficAccidents3yr: number;        // 인근 교통사고 3년 누적
  childProtectionZones: number;       // 어린이보호구역 수
  multiculturalRatio: number;         // 다문화 학생 비율 (0~1)
  schoolViolenceIndex: number | null; // 학교폭력 지수 (없으면 null)
  // 추후 데이터 추가됨
}

// 경북 평균 기준값
export interface Baseline {
  avgTrafficAccidents: number;
  avgChildProtectionZones: number;
  avgMulticulturalRatio: number;
  avgSchoolViolenceIndex: number | null;
}

// 추천 1건
export interface Recommendation {
  rank: number;
  topic: string;
  category: Topic;
  intensity: 1 | 2 | 3 | 4 | 5;
  evidence: string;
  evidenceData: {
    value: number;
    baseline: number;
  };
  recommendedHoursChange: string; // "+1", "-1", "0"
  subjectLinks: string[];
  resources: {
    name: string;
    url: string;
  }[];
}

// 10개 주제 강도 (레이더 차트용)
export type AllTenIntensity = Record<Topic, number>;

// 추천 결과 전체
export interface Recommendations {
  top5: Recommendation[];
  allTenIntensity: AllTenIntensity;
}

// 결과 페이지 전체 데이터
export interface SchoolResult {
  school: School;
  environment: Environment;
  baseline: Baseline;
  recommendations: Recommendations;
  generatedAt: string;
}
