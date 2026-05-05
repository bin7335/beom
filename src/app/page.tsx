import Link from "next/link";
import { ArrowRight, Building2, MapPinned, Search, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { getMockSchools } from "@/lib/mock/school-directory";

const featureItems = [
  {
    icon: MapPinned,
    title: "공공데이터 기반",
    description: "교통사고, 다문화, 보호구역 등 학교 인근 데이터를 바탕으로 상황을 읽습니다.",
  },
  {
    icon: ShieldCheck,
    title: "학교별 맞춤 추천",
    description: "모든 학교에 같은 권장을 하지 않고 우리 학교 맥락에 맞는 주제를 제안합니다.",
  },
  {
    icon: Search,
    title: "빠른 결과 확인",
    description: "학교명 검색 한 번으로 분석 결과와 추천 근거를 바로 확인할 수 있습니다.",
  },
];

export default function HomePage() {
  const sampleSchools = getMockSchools();

  return (
    <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col px-4 py-8 sm:px-6">
      <section className="grid min-h-[calc(100vh-8rem)] items-center gap-10 py-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-6">
          <div className="inline-flex w-fit items-center rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">
            범교과 교육과정 의사결정 보조 서비스
          </div>
          <div className="space-y-4">
            <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
              학교에 진짜 필요한 교육 주제를 데이터로 찾습니다.
            </h1>
            <p className="max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
              교육해Beom은 학교 인근 공공데이터를 분석해 학교별 맞춤 범교과·계기교육 주제를 추천하는
              교원용 의사결정 보조 서비스입니다. 학부모용 안내가 아니라 교육과정 편성 담당 교사를 위한
              업무 지원 도구를 목표로 합니다.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" className="h-12 px-6 text-base">
              <Link href="/search">
                학교 검색하기
                <ArrowRight />
              </Link>
            </Button>
          </div>
        </div>

        <Card className="border-blue-100 bg-blue-50/60 shadow-none">
          <CardContent className="p-6">
            <div className="mb-4 text-sm font-medium text-blue-800">서비스가 하는 일</div>
            <div className="space-y-4">
              <div className="rounded-xl border bg-background p-4">
                <div className="text-sm font-medium">1. 학교 주변 지표 확인</div>
                <div className="mt-1 text-sm text-muted-foreground">
                  교통사고, 보호구역, 다문화 비율, 학교폭력 지표 등 학교 주변 맥락을 분석합니다.
                </div>
              </div>
              <div className="rounded-xl border bg-background p-4">
                <div className="text-sm font-medium">2. 17개 교육과정 단위와 연결</div>
                <div className="mt-1 text-sm text-muted-foreground">
                  범교과·계기교육 주제를 의무·권장 기준과 함께 구조화해 추천 근거를 정리합니다.
                </div>
              </div>
              <div className="rounded-xl border bg-background p-4">
                <div className="text-sm font-medium">3. 학교별 우선순위 제안</div>
                <div className="mt-1 text-sm text-muted-foreground">
                  우리 학교 상황에 더 필요한 교육 주제를 우선순위와 시수 제안까지 함께 보여줍니다.
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="py-8">
        <div className="mb-6">
          <h2 className="text-2xl font-semibold tracking-tight">왜 필요한가</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {featureItems.map((item) => {
            const Icon = item.icon;

            return (
              <Card key={item.title} className="shadow-none">
                <CardContent className="p-6">
                  <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="mb-2 text-lg font-semibold">{item.title}</div>
                  <p className="text-sm leading-6 text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      <section className="py-8">
        <div className="mb-6">
          <h2 className="text-2xl font-semibold tracking-tight">샘플 학교로 미리 보기</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            검색 없이도 현재 결과 페이지 흐름을 체험할 수 있도록 mock 학교 3개를 준비했습니다.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {sampleSchools.map((school) => (
            <Link key={school.code} href={`/school/${school.code}`}>
              <Card className="h-full transition-colors hover:border-blue-300 hover:bg-blue-50/40">
                <CardContent className="flex h-full flex-col justify-between p-6">
                  <div>
                    <div className="mb-2 flex items-center gap-2 text-sm text-blue-700">
                      <Building2 className="h-4 w-4" />
                      샘플 학교
                    </div>
                    <div className="text-lg font-semibold">{school.name}</div>
                    <div className="mt-2 text-sm leading-6 text-muted-foreground">{school.address}</div>
                  </div>
                  <div className="mt-6 text-sm font-medium text-blue-700">결과 보기</div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      <footer className="border-t py-8">
        <div className="flex flex-col gap-2 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <div>교육 공공데이터 AI 활용</div>
          <Link href="/data-sources" className="font-medium text-blue-700 hover:underline">
            데이터 출처 안내
          </Link>
        </div>
      </footer>
    </main>
  );
}
