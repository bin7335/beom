import type { Environment } from "@/lib/types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Props {
  environment: Environment;
}

export function EnvironmentSection({ environment }: Props) {
  const items = environment.indicators;

  return (
    <Card>
      <CardHeader className="space-y-2">
        <CardTitle>학교 환경 지표</CardTitle>
        <p className="text-sm text-muted-foreground">
          항목 수가 늘어나도 같은 구조로 확장할 수 있도록 배열 기반으로 정리했습니다.
        </p>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
          {items.map((item) => (
            <div key={item.id} className="rounded-xl border p-4 sm:p-5">
              <div className="text-sm text-muted-foreground">{item.label}</div>
              <div className="mt-2 text-2xl font-bold">
                {Number.isNaN(item.value) ? "데이터 없음" : `${item.value}${item.unit ?? ""}`}
              </div>
              {item.description ? (
                <div className="mt-2 text-sm text-muted-foreground">{item.description}</div>
              ) : null}
            </div>
          ))}
        </div>
        <div className="mt-4 rounded-xl bg-muted p-4 text-sm leading-6 text-muted-foreground">
          현재는 목업 데이터 기준 비교입니다. 실제 공공데이터 연동 시 수치와
          근거 문구가 자동으로 갱신됩니다.
        </div>
      </CardContent>
    </Card>
  );
}
