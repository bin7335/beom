import type {
  AllTopicsIntensity,
  CurriculumTopicScore,
  EnvironmentIndicator,
  RadarDataPoint,
  SchoolResult,
  TopicRecommendation,
} from "@/lib/types";

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

function createEnvironmentIndicators(input: {
  trafficAccidents3yr: number;
  avgTrafficAccidents: number;
  childProtectionZones: number;
  avgChildProtectionZones: number;
  multiculturalRatio: number;
  avgMulticulturalRatio: number;
  schoolViolenceIndex: number | null;
  avgSchoolViolenceIndex: number | null;
}): EnvironmentIndicator[] {
  return [
    {
      id: "school-zone-accidents",
      label: "스쿨존 사고다발지역",
      value: input.trafficAccidents3yr,
      unit: "곳",
      description: `경북 평균 ${input.avgTrafficAccidents}곳`,
    },
    {
      id: "child-protection-zones",
      label: "어린이보호구역",
      value: input.childProtectionZones,
      unit: "개소",
      description: `경북 평균 ${input.avgChildProtectionZones}개소`,
    },
    {
      id: "multicultural-ratio",
      label: "다문화 학생 비율",
      value: Number((input.multiculturalRatio * 100).toFixed(1)),
      unit: "%",
      description: `경북 평균 ${(input.avgMulticulturalRatio * 100).toFixed(1)}%`,
    },
    {
      id: "school-violence-index",
      label: "학교폭력 지수",
      value:
        input.schoolViolenceIndex === null
          ? Number.NaN
          : Number(input.schoolViolenceIndex.toFixed(3)),
      description:
        input.avgSchoolViolenceIndex === null
          ? "비교 기준 없음"
          : `경북 평균 ${input.avgSchoolViolenceIndex.toFixed(3)}`,
    },
  ];
}

function createRadarData(input: {
  safetyHealth: number;
  communityCareer: number;
  societyCitizenship: number;
  rightsDiversity: number;
  environmentSustainability: number;
}): RadarDataPoint[] {
  return [
    {
      groupId: "safety-health",
      group: "안전·건강 환경",
      score: input.safetyHealth,
      rawValue: input.safetyHealth,
      items: ["스쿨존 사고다발지역", "어린이보호구역", "CCTV", "학교폭력"],
    },
    {
      groupId: "character-career",
      group: "공동체·진로 환경",
      score: input.communityCareer,
      rawValue: input.communityCareer,
      items: ["청소년수련시설", "진로체험처", "아동복지시설"],
    },
    {
      groupId: "society-citizenship",
      group: "사회·시민 환경",
      score: input.societyCitizenship,
      rawValue: input.societyCitizenship,
      items: ["공공기관", "공공도서관", "문화시설", "시민단체"],
    },
    {
      groupId: "rights-diversity",
      group: "인권·다양성 환경",
      score: input.rightsDiversity,
      rawValue: input.rightsDiversity,
      items: ["다문화 비율", "특수학급", "외국인 주민", "장애인복지시설"],
    },
    {
      groupId: "future-sustainability",
      group: "환경·지속가능",
      score: input.environmentSustainability,
      rawValue: input.environmentSustainability,
      items: ["대기질", "공원·녹지", "재활용시설"],
    },
  ];
}

function recommendation(
  input: Omit<TopicRecommendation, "intensity">,
): TopicRecommendation {
  const mappedIntensity = Math.max(
    1,
    Math.min(5, Math.ceil((100 - input.score) / 20)),
  ) as 1 | 2 | 3 | 4 | 5;

  return {
    ...input,
    intensity: mappedIntensity,
  };
}

const urbanCurriculumTopicScores: CurriculumTopicScore[] = [
  {
    topicId: "environment-sustainability",
    score: 72,
    reason: "환경·지속가능 영역은 다른 진단 항목보다 상대적으로 보강 여지가 있습니다.",
  },
  {
    topicId: "economic-finance",
    score: 75,
    reason: "실생활 맥락의 경제·금융 교육을 연결하면 미래 역량을 더 촘촘히 보완할 수 있습니다.",
  },
  {
    topicId: "dokdo",
    score: 76,
    reason: "지역성은 살릴 수 있지만 현재 환경 진단상 우선순위는 중간 수준입니다.",
  },
  {
    topicId: "unification",
    score: 77,
    reason: "사회과와 창체 연계 운영은 가능하나 다른 영역보다 긴급도는 낮습니다.",
  },
  {
    topicId: "democratic-citizenship",
    score: 79,
    reason: "학생자치와 공동체 운영 측면에서 안정적이나 추가 확장 여지가 있습니다.",
  },
  {
    topicId: "multicultural",
    score: 80,
    reason: "다문화 감수성 교육은 기본 이상 수준으로 운영 가능한 상태입니다.",
  },
  {
    topicId: "human-rights",
    score: 81,
    reason: "인권·다양성 환경은 비교적 양호하지만 꾸준한 운영은 필요합니다.",
  },
  {
    topicId: "character",
    score: 83,
    reason: "공동체 경험을 다루는 교육 여건은 안정적이라 인성교육 운영에 무리가 없습니다.",
  },
  {
    topicId: "career",
    score: 85,
    reason: "지역 산업 인프라 덕분에 진로 연계 환경이 양호합니다.",
  },
  {
    topicId: "safety-health",
    score: 88,
    reason: "전반적으로 양호한 편이며 안전·건강 환경의 기반도 비교적 안정적입니다.",
  },
];

const ruralCurriculumTopicScores: CurriculumTopicScore[] = [
  {
    topicId: "safety-health",
    score: 32,
    reason: "통학 환경과 생활 안전 요인을 반영하면 가장 먼저 보강이 필요한 영역입니다.",
  },
  {
    topicId: "multicultural",
    score: 55,
    reason: "다문화 학생 비율이 높아 관계 형성과 상호이해를 꾸준히 보완해야 합니다.",
  },
  {
    topicId: "human-rights",
    score: 58,
    reason: "소규모 공동체 특성상 인권과 존중의 규칙을 선명하게 다루는 것이 중요합니다.",
  },
  {
    topicId: "unification",
    score: 63,
    reason: "사회·시민 환경은 기본 운영이 가능하지만 다른 취약 영역보다 후순위입니다.",
  },
  {
    topicId: "democratic-citizenship",
    score: 65,
    reason: "학생 참여형 활동은 가능하나 구조적 지원을 더하면 좋습니다.",
  },
  {
    topicId: "dokdo",
    score: 66,
    reason: "지역성과 연결할 수 있으나 진단상 긴급도는 중간 수준입니다.",
  },
  {
    topicId: "character",
    score: 70,
    reason: "공동체 기반 인성교육은 무난한 편이지만 지속 보완이 필요합니다.",
  },
  {
    topicId: "economic-finance",
    score: 74,
    reason: "생활경제 교육으로 자연스럽게 확장할 수 있는 보통 수준의 환경입니다.",
  },
  {
    topicId: "career",
    score: 76,
    reason: "외부 체험 자원을 연결하면 진로교육 여건은 점차 개선될 수 있습니다.",
  },
  {
    topicId: "environment-sustainability",
    score: 82,
    reason: "자연환경을 활용한 학습 여건이 좋아 이 영역은 상대적으로 양호합니다.",
  },
];

const standardCurriculumTopicScores: CurriculumTopicScore[] = [
  {
    topicId: "safety-health",
    score: 28,
    reason: "안전·건강 환경 관련 보강이 가장 시급한 학교 환경 사례입니다.",
  },
  {
    topicId: "multicultural",
    score: 33,
    reason: "다양성 수용과 관계 형성을 더 적극적으로 보완할 필요가 있습니다.",
  },
  {
    topicId: "human-rights",
    score: 35,
    reason: "인권 감수성과 상호존중 규칙을 학교 차원에서 더 선명히 다뤄야 합니다.",
  },
  {
    topicId: "economic-finance",
    score: 39,
    reason: "환경·지속가능 영역과 연결된 미래 역량 환경 점수가 낮아 우선 보강 대상입니다.",
  },
  {
    topicId: "environment-sustainability",
    score: 40,
    reason: "환경·지속가능 영역도 실천형 활동을 늘릴 필요가 있습니다.",
  },
  {
    topicId: "democratic-citizenship",
    score: 42,
    reason: "사회·시민 환경은 기초는 있으나 학교 차원에서 더 강화할 여지가 있습니다.",
  },
  {
    topicId: "unification",
    score: 43,
    reason: "통일교육은 기본 운영 수준에 머물러 보완 여지가 보입니다.",
  },
  {
    topicId: "dokdo",
    score: 44,
    reason: "독도교육 역시 지역성과 연계하면 더 힘을 실을 수 있습니다.",
  },
  {
    topicId: "character",
    score: 47,
    reason: "학생 관계성 회복과 공동체 경험 확장이 추가로 필요합니다.",
  },
  {
    topicId: "career",
    score: 49,
    reason: "진로 노출 기회를 넓히면 공동체·진로 환경의 진단 점수를 끌어올릴 수 있습니다.",
  },
];

const urbanRecommendations: TopicRecommendation[] = [
  recommendation({
    topicId: "environment-education",
    groupId: "future-sustainability",
    groupLabel: "환경·지속가능",
    rank: 1,
    score: 72,
    evidence:
      "환경·지속가능 영역이 이 학교에서 가장 먼저 보완할 환경 진단 결과로 나타났습니다.",
    evidenceData: { value: 72, baseline: 100 },
    hoursRecommendation: "환경교육주간과 프로젝트 수업을 연계해 권장 시수를 안정적으로 확보합니다.",
  }),
  recommendation({
    topicId: "democratic-citizen-education",
    groupId: "society-citizenship",
    groupLabel: "사회·시민 환경",
    rank: 2,
    score: 76,
    evidence:
      "사회·시민 환경은 기본 여건은 갖춰져 있지만 다른 양호 영역보다 상대적으로 먼저 챙길 만합니다.",
    evidenceData: { value: 76, baseline: 100 },
    hoursRecommendation: "학생자치와 사회과 활동을 연결해 민주시민교육의 체감도를 높입니다.",
  }),
  recommendation({
    topicId: "multicultural-education",
    groupId: "rights-diversity",
    groupLabel: "인권·다양성 환경",
    rank: 3,
    score: 80,
    evidence:
      "인권·다양성 환경은 양호하지만 학생 구성 특성을 고려하면 예방적 운영 가치가 높습니다.",
    evidenceData: { value: 80, baseline: 100 },
    hoursRecommendation: "다문화 이해교육과 학급 관계성 프로그램을 함께 배치해 꾸준히 운영합니다.",
  }),
  recommendation({
    topicId: "character-education",
    groupId: "character-career",
    groupLabel: "공동체·진로 환경",
    rank: 4,
    score: 84,
    evidence:
      "공동체·진로 환경은 비교적 양호한 편이라 중장기 운영 중심으로 접근하면 충분합니다.",
    evidenceData: { value: 84, baseline: 100 },
    hoursRecommendation: "학년군별 생활교육과 진로활동을 연결해 연간 흐름으로 운영합니다.",
  }),
  recommendation({
    topicId: "safety-education",
    groupId: "safety-health",
    groupLabel: "안전·건강 환경",
    rank: 5,
    score: 88,
    evidence:
      "안전·건강 환경은 현재 가장 양호한 편이므로 표준 운영을 유지하는 수준이면 충분합니다.",
    evidenceData: { value: 88, baseline: 100 },
    hoursRecommendation: "법정 기준을 중심으로 유지하되 교내 사례 중심 점검 활동만 보강합니다.",
  }),
];

const ruralRecommendations: TopicRecommendation[] = [
  recommendation({
    topicId: "safety-education",
    groupId: "safety-health",
    groupLabel: "안전·건강 환경",
    rank: 1,
    score: 32,
    evidence:
      "안전·건강 환경의 점수가 가장 낮아 학교 인근 생활 안전과 통학 안전 보강이 시급합니다.",
    evidenceData: { value: 32, baseline: 100 },
    hoursRecommendation: "교통안전과 생활안전 중심으로 권장 시수를 우선 배치합니다.",
  }),
  recommendation({
    topicId: "multicultural-education",
    groupId: "rights-diversity",
    groupLabel: "인권·다양성 환경",
    rank: 2,
    score: 55,
    evidence:
      "인권·다양성 환경은 보통 수준이지만 다문화 학생 비율을 고려하면 선제적 보강이 필요합니다.",
    evidenceData: { value: 55, baseline: 100 },
    hoursRecommendation: "다문화 이해교육과 학급 규칙 세우기 활동을 묶어 운영합니다.",
  }),
  recommendation({
    topicId: "democratic-citizen-education",
    groupId: "society-citizenship",
    groupLabel: "사회·시민 환경",
    rank: 3,
    score: 64,
    evidence:
      "사회·시민 환경은 다른 양호 영역보다 먼저 다뤄 두면 공동체 경험을 넓히는 데 도움이 됩니다.",
    evidenceData: { value: 64, baseline: 100 },
    hoursRecommendation: "작은 학교 규모를 살려 참여형 토의와 학생자치 활동을 늘립니다.",
  }),
  recommendation({
    topicId: "character-education",
    groupId: "character-career",
    groupLabel: "공동체·진로 환경",
    rank: 4,
    score: 73,
    evidence:
      "공동체·진로 환경은 보통 이상이지만 진로 노출 기회 보강은 계속 필요합니다.",
    evidenceData: { value: 73, baseline: 100 },
    hoursRecommendation: "외부 체험형 진로활동과 학년 통합 인성 프로그램을 함께 엮습니다.",
  }),
  recommendation({
    topicId: "environment-education",
    groupId: "future-sustainability",
    groupLabel: "환경·지속가능",
    rank: 5,
    score: 82,
    evidence:
      "환경·지속가능 영역은 이 학교의 강점에 가까워 유지 중심의 운영이 적절합니다.",
    evidenceData: { value: 82, baseline: 100 },
    hoursRecommendation: "생태 체험과 지역 자원 기반 프로젝트를 중심으로 꾸준히 운영합니다.",
  }),
];

const standardRecommendations: TopicRecommendation[] = [
  recommendation({
    topicId: "safety-education",
    groupId: "safety-health",
    groupLabel: "안전·건강 환경",
    rank: 1,
    score: 28,
    evidence:
      "안전·건강 환경의 점수가 가장 낮아 이 학교에서 가장 먼저 보강해야 할 영역으로 나타났습니다.",
    evidenceData: { value: 28, baseline: 100 },
    hoursRecommendation: "안전교육과 보건교육을 묶어 권장 시수를 우선 확보합니다.",
  }),
  recommendation({
    topicId: "multicultural-education",
    groupId: "rights-diversity",
    groupLabel: "인권·다양성 환경",
    rank: 2,
    score: 34,
    evidence:
      "인권·다양성 환경도 취약 구간이라 관계 회복과 상호존중 경험을 함께 설계할 필요가 큽니다.",
    evidenceData: { value: 34, baseline: 100 },
    hoursRecommendation: "다문화 이해교육과 인권 감수성 활동을 묶어 집중 편성합니다.",
  }),
  recommendation({
    topicId: "environment-education",
    groupId: "future-sustainability",
    groupLabel: "환경·지속가능",
    rank: 3,
    score: 39,
    evidence:
      "환경·지속가능 영역도 취약 구간이어서 실천형 프로젝트를 통해 빠르게 체감 개선이 가능합니다.",
    evidenceData: { value: 39, baseline: 100 },
    hoursRecommendation: "환경·경제 활동을 연계한 프로젝트형 수업으로 권장 시수를 보강합니다.",
  }),
  recommendation({
    topicId: "democratic-citizen-education",
    groupId: "society-citizenship",
    groupLabel: "사회·시민 환경",
    rank: 4,
    score: 43,
    evidence:
      "사회·시민 환경 역시 취약권에 가까워 학생 참여형 경험을 더 의도적으로 설계해야 합니다.",
    evidenceData: { value: 43, baseline: 100 },
    hoursRecommendation: "토의 활동과 학생자치 프로젝트를 활용해 시민성 경험을 늘립니다.",
  }),
  recommendation({
    topicId: "career-education",
    groupId: "character-career",
    groupLabel: "공동체·진로 환경",
    rank: 5,
    score: 48,
    evidence:
      "공동체·진로 환경도 충분히 양호하다고 보기 어려워 중기적으로 함께 보완할 필요가 있습니다.",
    evidenceData: { value: 48, baseline: 100 },
    hoursRecommendation: "관계 형성과 진로 탐색 활동을 연간 흐름으로 묶어 운영합니다.",
  }),
];

export const sampleUrban: SchoolResult = {
  school: {
    code: "sample-urban",
    name: "안동초등학교 (예시)",
    address: "경상북도 안동시 남문동",
    lat: 36.019,
    lng: 129.3435,
    studentCount: 612,
    classCount: 24,
    sigungu: "안동시 남문동",
  },
  environment: {
    trafficAccidents3yr: 18,
    childProtectionZones: 4,
    multiculturalRatio: 0.082,
    schoolViolenceIndex: 0.034,
    indicators: createEnvironmentIndicators({
      trafficAccidents3yr: 18,
      avgTrafficAccidents: 12.2,
      childProtectionZones: 4,
      avgChildProtectionZones: 2.8,
      multiculturalRatio: 0.082,
      avgMulticulturalRatio: 0.051,
      schoolViolenceIndex: 0.034,
      avgSchoolViolenceIndex: 0.028,
    }),
  },
  baseline: {
    avgTrafficAccidents: 12.2,
    avgChildProtectionZones: 2.8,
    avgMulticulturalRatio: 0.051,
    avgSchoolViolenceIndex: 0.028,
  },
  recommendations: {
    top5: urbanRecommendations,
    allTopicsIntensity: baselineIntensity,
    curriculumTopicScores: urbanCurriculumTopicScores,
    radarData: createRadarData({
      safetyHealth: 88,
      communityCareer: 84,
      societyCitizenship: 76,
      rightsDiversity: 80,
      environmentSustainability: 72,
    }),
  },
  generatedAt: "2026-05-04T20:00:00+09:00",
};

export const sampleRural: SchoolResult = {
  school: {
    code: "sample-rural",
    name: "소규모 학교 (예시)",
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
    indicators: createEnvironmentIndicators({
      trafficAccidents3yr: 2,
      avgTrafficAccidents: 12.2,
      childProtectionZones: 1,
      avgChildProtectionZones: 2.8,
      multiculturalRatio: 0.125,
      avgMulticulturalRatio: 0.051,
      schoolViolenceIndex: 0.012,
      avgSchoolViolenceIndex: 0.028,
    }),
  },
  baseline: {
    avgTrafficAccidents: 12.2,
    avgChildProtectionZones: 2.8,
    avgMulticulturalRatio: 0.051,
    avgSchoolViolenceIndex: 0.028,
  },
  recommendations: {
    top5: ruralRecommendations,
    allTopicsIntensity: baselineIntensity,
    curriculumTopicScores: ruralCurriculumTopicScores,
    radarData: createRadarData({
      safetyHealth: 32,
      communityCareer: 73,
      societyCitizenship: 64,
      rightsDiversity: 56,
      environmentSustainability: 82,
    }),
  },
  generatedAt: "2026-05-04T20:00:00+09:00",
};

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
    indicators: createEnvironmentIndicators({
      trafficAccidents3yr: 11,
      avgTrafficAccidents: 12.2,
      childProtectionZones: 3,
      avgChildProtectionZones: 2.8,
      multiculturalRatio: 0.045,
      avgMulticulturalRatio: 0.051,
      schoolViolenceIndex: 0.025,
      avgSchoolViolenceIndex: 0.028,
    }),
  },
  baseline: {
    avgTrafficAccidents: 12.2,
    avgChildProtectionZones: 2.8,
    avgMulticulturalRatio: 0.051,
    avgSchoolViolenceIndex: 0.028,
  },
  recommendations: {
    top5: standardRecommendations,
    allTopicsIntensity: baselineIntensity,
    curriculumTopicScores: standardCurriculumTopicScores,
    radarData: createRadarData({
      safetyHealth: 28,
      communityCareer: 48,
      societyCitizenship: 43,
      rightsDiversity: 34,
      environmentSustainability: 39,
    }),
  },
  generatedAt: "2026-05-04T20:00:00+09:00",
};

export const SAMPLE_SCHOOLS: Record<string, SchoolResult> = {
  "sample-urban": sampleUrban,
  "sample-rural": sampleRural,
  "sample-standard": sampleStandard,
};

export function getSampleSchool(code: string): SchoolResult | null {
  return SAMPLE_SCHOOLS[code] ?? null;
}
