import type { School } from "@/lib/types";
import { SAMPLE_SCHOOLS } from "@/lib/mock/sample-schools";

const SCHOOL_DISPLAY_OVERRIDES: Record<string, Pick<School, "name" | "address" | "sigungu">> = {
  "sample-urban": {
    name: "안동초등학교",
    address: "경상북도 안동시 남문동",
    sigungu: "안동시",
  },
  "sample-rural": {
    name: "소규모학교",
    address: "경상북도 영양군 입암면",
    sigungu: "영양군",
  },
  "sample-standard": {
    name: "구미중앙초등학교",
    address: "경상북도 구미시 송정동",
    sigungu: "구미시",
  },
};

function normalizeQuery(value: string) {
  return value.toLowerCase().replace(/\s+/g, "");
}

export function getMockSchools(): School[] {
  return Object.values(SAMPLE_SCHOOLS).map((result) => {
    const override = SCHOOL_DISPLAY_OVERRIDES[result.school.code];

    return {
      ...result.school,
      ...override,
    };
  });
}

export function searchSchools(query: string): School[] {
  const schools = getMockSchools();
  const normalizedQuery = normalizeQuery(query);

  if (!normalizedQuery) {
    return schools;
  }

  return schools.filter((school) => normalizeQuery(school.name).includes(normalizedQuery));
}
