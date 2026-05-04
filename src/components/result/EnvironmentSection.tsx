import type { Baseline, Environment } from "@/lib/types";
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
      label: "어린이보호구역 수",
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
      value:
        environment.schoolViolenceIndex !== null
          ? environment.schoolViolenceIndex.toFixed(3)
          : "데이터 없음",
      baseline:
        baseline.avgSchoolViolenceIndex !== null
          ? `경북 평균 ${baseline.avgSchoolViolenceIndex.toFixed(3)}`
          : "비교 기준 없음",
    },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>학교 환경 지표</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {items.map((item) => (
            <div key={item.label} className="rounded-lg border p-4">
              <div className="text-sm text-muted-foreground">{item.label}</div>
              <div className="mt-1 text-2xl font-bold">{item.value}</div>
              <div className="mt-1 text-xs text-muted-foreground">{item.baseline}</div>
            </div>
          ))}
        </div>
        <div className="mt-4 rounded-lg bg-muted p-4 text-sm text-muted-foreground">
          현재는 목업 데이터 기준 비교입니다. 실제 공공데이터 연동 시 수치와 근거 문구가 자동으로 갱신됩니다.
        </div>
      </CardContent>
    </Card>
  );
}
