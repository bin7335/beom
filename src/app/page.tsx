import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

const samples = [
  { code: "sample-urban", name: "포항제철초등학교 (도시형)", desc: "도심·교통사고·다문화" },
  { code: "sample-rural", name: "영양분교 (농어촌 소규모)", desc: "다문화·환경·진로" },
  { code: "sample-standard", name: "구미중앙초등학교 (표준)", desc: "균형 분포" },
];

export default function HomePage() {
  return (
    <main className="container mx-auto px-4 py-12 max-w-3xl">
      <div className="text-center space-y-4 mb-12">
        <h1 className="text-4xl font-bold">범 (교육해범)</h1>
        <p className="text-lg text-muted-foreground">
          우리 학교에 진짜 필요한 교육, 데이터로 찾아드립니다
        </p>
        <p className="text-sm text-muted-foreground">
          교원의 교육과정 편성을 돕는 AI 추천 서비스
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-lg font-semibold">샘플 학교로 미리 보기</h2>
        <div className="grid gap-3">
          {samples.map((s) => (
            <Link key={s.code} href={`/school/${s.code}`}>
              <Card className="hover:shadow-md transition-shadow cursor-pointer">
                <CardContent className="p-4">
                  <div className="font-medium">{s.name}</div>
                  <div className="text-sm text-muted-foreground mt-1">{s.desc}</div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>

      <div className="mt-12 p-4 bg-muted rounded-lg text-xs text-muted-foreground text-center">
        ※ 현재 mock 데이터 단계. 실제 학교 검색은 Day 6 이후 활성화 예정.
      </div>
    </main>
  );
}
