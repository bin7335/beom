import type { Environment, Baseline } from "@/lib/types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Props {
  environment: Environment;
  baseline: Baseline;
}

export function EnvironmentSection({ environment, baseline }: Props) {
  const items = [
    {
      label: "최근 3년 인근 교통사고",
      value: `${environment.trafficAccidents3yr}건`,
      baseline: `경북 평균 ${baseline.avgTrafficAccidents}건`,
    },
    {
      label: "어린이보호구역",
      value: `${environment.childProtectionZones}개소`,
      baseline: `경북 평균 ${baseline.avgChildProtectionZones}개소`,
    },
    {
      label: "다문화 학생 비율",
      value: `${(environment.multiculturalRatio * 100).toFixed(1)}%`,
      baseline: `경북 평균 ${(baseline.avgMulticulturalRatio * 100).toFixed(1)}%`,
    },
    {
      label: "학교폭력 지수",
      value: environment.schoolViolenceIndex !== null
        ? environment.schoolViolenceIndex.toFixed(3)
        : "데이터 없음",
      baseline: baseline.avgSchoolViolenceIndex !== null
        ? `경북 평균 ${baseline.avgSchoolViolenceIndex.toFixed(3)}`
        : "",
    },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>📍 우리 학교 주변, 이런 환경입니다</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {items.map((item) => (
            <div key={item.label} className="border rounded-lg p-4">
              <div className="text-sm text-muted-foreground">{item.label}</div>
              <div className="text-2xl font-bold mt-1">{item.value}</div>
              <div className="text-xs text-muted-foreground mt-1">
                {item.baseline}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 p-4 bg-muted rounded-lg text-sm text-muted-foreground">
          🗺️ 지도 시각화는 Day 13에 추가 예정
        </div>
      </CardContent>
    </Card>
  );
}
