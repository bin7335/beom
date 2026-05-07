import type {
  AllTopicsIntensity,
  CurriculumTopicScore,
  EnvironmentIndicator,
  RadarDataPoint,
  SchoolResult,
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
      id: "traffic-accidents",
      label: "최근 3년 인근 교통사고",
      value: input.trafficAccidents3yr,
      unit: "건",
      description: `경북 평균 ${input.avgTrafficAccidents}건`,
    },
    {
      id: "child-protection-zones",
      label: "어린이보호구역 수",
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
  characterCareer: number;
  societyCitizenship: number;
  rightsDiversity: number;
  futureSustainability: number;
}): RadarDataPoint[] {
  return [
    {
      groupId: "safety-health",
      group: "안전·건강",
      score: input.safetyHealth,
      rawValue: 79,
      items: ["안전·건강"],
    },
    {
      groupId: "character-career",
      group: "인성·진로",
      score: input.characterCareer,
      rawValue: 62,
      items: ["인성", "진로"],
    },
    {
      groupId: "society-citizenship",
      group: "사회·시민",
      score: input.societyCitizenship,
      rawValue: 58,
      items: ["민주시민", "통일", "독도"],
    },
    {
      groupId: "rights-diversity",
      group: "인권·다양성",
      score: input.rightsDiversity,
      rawValue: 67,
      items: ["인권", "다문화"],
    },
    {
      groupId: "future-sustainability",
      group: "미래·지속가능",
      score: input.futureSustainability,
      rawValue: 54,
      items: ["경제·금융", "환경·지속가능발전"],
    },
  ];
}

const urbanCurriculumTopicScores: CurriculumTopicScore[] = [
  {
    topicId: "safety-health",
    score: 96,
    reason: "교통사고와 학교폭력 관련 지표가 평균보다 높아 우선 반영이 필요합니다.",
  },
  {
    topicId: "multicultural",
    score: 88,
    reason: "다문화 학생 비율이 높아 학교 구성원의 상호이해를 적극 지원할 필요가 있습니다.",
  },
  {
    topicId: "career",
    score: 84,
    reason: "지역 산업 인프라를 활용한 진로 체험 연결성이 좋습니다.",
  },
  {
    topicId: "character",
    score: 76,
    reason: "대규모 학교 운영 특성상 관계 형성과 생활지도가 꾸준히 요구됩니다.",
  },
  {
    topicId: "human-rights",
    score: 74,
    reason: "학교폭력 예방과 연계해 인권 감수성 교육을 함께 설계하기 좋습니다.",
  },
  {
    topicId: "democratic-citizenship",
    score: 68,
    reason: "학생자치 활동과 연결한 민주시민 교육 확장 여지가 있습니다.",
  },
  {
    topicId: "environment-sustainability",
    score: 63,
    reason: "도시 생활환경을 다루는 실천형 프로젝트 구성에 적합합니다.",
  },
  {
    topicId: "economic-finance",
    score: 58,
    reason: "지역 상권과 연계한 생활경제 수업으로 확장할 수 있습니다.",
  },
  {
    topicId: "dokdo",
    score: 49,
    reason: "경북 소재 학교라는 지역성을 활용한 운영이 가능합니다.",
  },
  {
    topicId: "unification",
    score: 44,
    reason: "사회과 연계 기본 운영 수준으로 안정적으로 담아낼 수 있습니다.",
  },
];

const ruralCurriculumTopicScores: CurriculumTopicScore[] = [
  {
    topicId: "multicultural",
    score: 95,
    reason: "다문화 학생 비율이 높아 학급 운영 전반에 직접적인 영향이 있습니다.",
  },
  {
    topicId: "environment-sustainability",
    score: 90,
    reason: "농어촌 자연환경을 활용한 체험형 수업 운영 여건이 매우 좋습니다.",
  },
  {
    topicId: "career",
    score: 86,
    reason: "소규모 학교일수록 외부 진로 노출 기회를 의도적으로 보강할 필요가 큽니다.",
  },
  {
    topicId: "character",
    score: 78,
    reason: "학년 통합형 공동체 활동과 연계한 인성교육 운영 효과를 기대할 수 있습니다.",
  },
  {
    topicId: "safety-health",
    score: 60,
    reason: "사고 건수는 낮지만 지역 특수 위험요인을 반영한 맞춤 안전교육이 필요합니다.",
  },
  {
    topicId: "human-rights",
    score: 58,
    reason: "작은 학교일수록 상호존중과 배려의 규칙을 선명하게 다룰 수 있습니다.",
  },
  {
    topicId: "democratic-citizenship",
    score: 55,
    reason: "학생 참여형 의사결정 구조를 작게라도 실습하기 좋습니다.",
  },
  {
    topicId: "economic-finance",
    score: 47,
    reason: "생활경제와 지역 자원 순환을 연결한 수업 소재가 있습니다.",
  },
  {
    topicId: "unification",
    score: 42,
    reason: "사회과와 창체를 통해 기본 내용을 꾸준히 운영하기 적합합니다.",
  },
  {
    topicId: "dokdo",
    score: 38,
    reason: "학교 특성상 우선순위는 낮지만 지역 맥락 연계는 가능합니다.",
  },
];

const standardCurriculumTopicScores: CurriculumTopicScore[] = [
  {
    topicId: "dokdo",
    score: 87,
    reason: "경북 지역성 활용이 뚜렷해 상징성과 지역 정체성을 살리기 좋습니다.",
  },
  {
    topicId: "career",
    score: 82,
    reason: "구미 산업 인프라를 활용한 진로 탐색 프로그램 구성이 수월합니다.",
  },
  {
    topicId: "safety-health",
    score: 76,
    reason: "평균 수준의 안전 지표를 바탕으로 표준 운영을 안정적으로 수행하기 좋습니다.",
  },
  {
    topicId: "democratic-citizenship",
    score: 72,
    reason: "도시형 평균 학교로 민주시민 역량을 균형 있게 다루기 적합합니다.",
  },
  {
    topicId: "environment-sustainability",
    score: 69,
    reason: "생활 밀착형 환경 실천 활동을 꾸준히 운영하기 좋습니다.",
  },
  {
    topicId: "character",
    score: 66,
    reason: "학생 규모와 학교 운영의 균형 측면에서 관계성 교육을 함께 담기 좋습니다.",
  },
  {
    topicId: "multicultural",
    score: 61,
    reason: "다문화 학생 비율은 평균 수준이지만 기본 운영은 꾸준히 필요합니다.",
  },
  {
    topicId: "human-rights",
    score: 59,
    reason: "학교폭력 예방과 결합해 기본 인권 교육 구조를 갖추기 적합합니다.",
  },
  {
    topicId: "economic-finance",
    score: 56,
    reason: "지역 상권과 산업을 연결한 생활경제 수업 확장이 가능합니다.",
  },
  {
    topicId: "unification",
    score: 51,
    reason: "사회과 기본 운영 안에서 무리 없이 담아낼 수 있습니다.",
  },
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
    top5: [
      {
        topicId: "safety-education",
        rank: 1,
        intensity: 5,
        score: 96,
        evidence: "인근 교통사고 발생률이 경북 평균 대비 47% 높습니다. (3년간 18건)",
        evidenceData: { value: 18, baseline: 12.2 },
        hoursRecommendation: "51시간은 유지하되 교통안전 비중을 강화하는 편이 적절합니다.",
      },
      {
        topicId: "multicultural-education",
        rank: 2,
        intensity: 4,
        score: 88,
        evidence: "다문화 학생 비율이 8.2%로 경북 평균 대비 3.1%p 높습니다.",
        evidenceData: { value: 0.082, baseline: 0.051 },
        hoursRecommendation: "기준 2시간에서 4시간 수준으로 확대를 권장합니다.",
      },
      {
        topicId: "school-violence-prevention",
        rank: 3,
        intensity: 4,
        score: 84,
        evidence: "학교폭력 지수가 경북 평균 대비 약 21% 높고, 사이버폭력 대응 필요가 있습니다.",
        evidenceData: { value: 0.034, baseline: 0.028 },
        hoursRecommendation: "11시간 기본 운영에 더해 사이버폭력 예방 비중 확대를 권장합니다.",
      },
      {
        topicId: "health-education",
        rank: 4,
        intensity: 3,
        score: 68,
        evidence: "학생 수가 많은 도시형 학교라 표준 보건교육 운영의 필요성이 높습니다.",
        evidenceData: { value: 612, baseline: 350 },
        hoursRecommendation: "기준 17시간을 안정적으로 운영하는 편이 좋습니다.",
      },
      {
        topicId: "career-education",
        rank: 5,
        intensity: 3,
        score: 64,
        evidence: "포항 산업단지 인근 입지를 활용하면 다양한 진로 노출 기회를 만들 수 있습니다.",
        evidenceData: { value: 612, baseline: 350 },
        hoursRecommendation: "지역 산업 연계 진로교육 프로그램 운영을 권장합니다.",
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
    curriculumTopicScores: urbanCurriculumTopicScores,
    radarData: createRadarData({
      safetyHealth: 96,
      characterCareer: 80,
      societyCitizenship: 54,
      rightsDiversity: 81,
      futureSustainability: 61,
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
    top5: [
      {
        topicId: "multicultural-education",
        rank: 1,
        intensity: 5,
        score: 95,
        evidence: "다문화 학생 비율이 12.5%로 경북 평균의 약 2.4배입니다.",
        evidenceData: { value: 0.125, baseline: 0.051 },
        hoursRecommendation: "기준 2시간에서 6시간 수준까지 확대를 권장합니다.",
      },
      {
        topicId: "environment-education",
        rank: 2,
        intensity: 4,
        score: 90,
        evidence: "농어촌 자연환경을 활용한 생태 체험 중심 수업 운영에 유리합니다.",
        evidenceData: { value: 1, baseline: 1 },
        hoursRecommendation: "환경교육주간과 학교자율시간을 연계해 운영하는 편이 좋습니다.",
      },
      {
        topicId: "career-education",
        rank: 3,
        intensity: 4,
        score: 86,
        evidence: "소규모 학교라 진로 다양성 노출 기회를 의도적으로 보강할 필요가 있습니다.",
        evidenceData: { value: 24, baseline: 350 },
        hoursRecommendation: "외부 진로체험 프로그램을 적극 활용하는 방향을 권장합니다.",
      },
      {
        topicId: "safety-education",
        rank: 4,
        intensity: 2,
        score: 60,
        evidence: "교통사고 수치는 평균 이하이지만 농어촌 특성을 반영한 안전교육은 필요합니다.",
        evidenceData: { value: 2, baseline: 12.2 },
        hoursRecommendation: "51시간 표준 운영을 유지하되 농기계 등 지역 위험요소를 반영하면 좋습니다.",
      },
      {
        topicId: "character-education",
        rank: 5,
        intensity: 3,
        score: 78,
        evidence: "소규모 학교는 학년 통합형 인성교육 운영 효과를 기대할 수 있습니다.",
        evidenceData: { value: 6, baseline: 18 },
        hoursRecommendation: "도덕과 창체를 연계한 통합 운영을 권장합니다.",
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
      "internet-addiction-education": 4,
    },
    curriculumTopicScores: ruralCurriculumTopicScores,
    radarData: createRadarData({
      safetyHealth: 60,
      characterCareer: 82,
      societyCitizenship: 45,
      rightsDiversity: 77,
      futureSustainability: 69,
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
    top5: [
      {
        topicId: "dokdo-education",
        rank: 1,
        intensity: 4,
        score: 87,
        evidence: "경상북도 소재 학교 특성을 살려 독도교육을 강조하기 좋습니다.",
        evidenceData: { value: 1, baseline: 1 },
        hoursRecommendation: "독도교육주간과 연계해 10시간 이상 심화 운영을 권장합니다.",
      },
      {
        topicId: "career-education",
        rank: 2,
        intensity: 3,
        score: 82,
        evidence: "구미 산업 인프라를 활용하면 진로 탐색 프로그램 구성이 수월합니다.",
        evidenceData: { value: 380, baseline: 350 },
        hoursRecommendation: "지역 산업 연계 진로 프로그램 운영을 권장합니다.",
      },
      {
        topicId: "safety-education",
        rank: 3,
        intensity: 3,
        score: 76,
        evidence: "교통안전 지표가 평균 수준이므로 표준 운영을 유지하면 됩니다.",
        evidenceData: { value: 11, baseline: 12.2 },
        hoursRecommendation: "기준 51시간 표준 운영을 유지하는 편이 적절합니다.",
      },
      {
        topicId: "democratic-citizen-education",
        rank: 4,
        intensity: 3,
        score: 72,
        evidence: "도시형 평균 학교로 민주시민 역량을 균형 있게 다루기 좋습니다.",
        evidenceData: { value: 380, baseline: 350 },
        hoursRecommendation: "사회와 도덕 교과를 연계한 운영을 권장합니다.",
      },
      {
        topicId: "environment-education",
        rank: 5,
        intensity: 3,
        score: 69,
        evidence: "도시 생활환경 맥락에서 환경 인식과 실천 교육을 꾸준히 운영하기 적합합니다.",
        evidenceData: { value: 1, baseline: 1 },
        hoursRecommendation: "환경교육주간 연계 4시간 이상 운영을 권장합니다.",
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
    curriculumTopicScores: standardCurriculumTopicScores,
    radarData: createRadarData({
      safetyHealth: 76,
      characterCareer: 74,
      societyCitizenship: 70,
      rightsDiversity: 60,
      futureSustainability: 63,
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
