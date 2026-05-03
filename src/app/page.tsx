import { ArrowRight, Database, MapPin, Search, Sparkles } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const sampleSchools = [
  "포항제철초등학교",
  "안동송현초등학교",
  "구미원당초등학교",
];

const signals = [
  { label: "교통안전", score: 92, tone: "bg-emerald-500" },
  { label: "다문화", score: 78, tone: "bg-cyan-500" },
  { label: "생활안전", score: 71, tone: "bg-amber-500" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#f8fafc_0%,#eef6f1_48%,#f8fafc_100%)] text-slate-950">
      <section className="mx-auto flex min-h-screen w-full max-w-6xl flex-col px-6 py-8">
        <header className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex size-10 items-center justify-center rounded-md bg-slate-950 text-sm font-bold text-white">
              범
            </div>
            <div>
              <p className="text-sm font-semibold">교육해 범</p>
              <p className="text-xs text-slate-500">교원을 위한 데이터 기반 추천</p>
            </div>
          </div>
          <Badge variant="outline" className="border-slate-300 bg-white/80">
            2026 공공데이터 AI 활용대회
          </Badge>
        </header>

        <div className="grid flex-1 items-center gap-10 py-12 lg:grid-cols-[1fr_0.92fr]">
          <section className="space-y-8">
            <div className="space-y-5">
              <Badge className="bg-emerald-700 text-white hover:bg-emerald-700">
                학교별 맞춤 범교과·계기교육
              </Badge>
              <div className="space-y-4">
                <h1 className="max-w-3xl text-4xl font-bold leading-tight text-slate-950 sm:text-5xl">
                  우리 학교 주변 데이터로 필요한 교육 주제를 찾아줍니다.
                </h1>
                <p className="max-w-2xl text-lg leading-8 text-slate-600">
                  학교 위치, 학생 구성, 인근 안전·환경 데이터를 분석해 교사가
                  교육과정 편성 회의에서 바로 쓸 수 있는 추천 근거를 만듭니다.
                </p>
              </div>
            </div>

            <Card className="rounded-lg border-slate-200 bg-white/90 shadow-sm">
              <CardHeader>
                <CardTitle className="text-xl">학교 검색</CardTitle>
                <CardDescription>
                  MVP는 경상북도 초등학교 데이터를 우선 대상으로 합니다.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-col gap-3 sm:flex-row">
                  <div className="relative flex-1">
                    <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-slate-400" />
                    <Input
                      className="h-11 pl-9"
                      placeholder="학교명을 입력하세요"
                      defaultValue="포항제철초등학교"
                      aria-label="학교명 검색"
                    />
                  </div>
                  <Button className="h-11 bg-slate-950 hover:bg-slate-800">
                    분석 시작
                    <ArrowRight className="size-4" />
                  </Button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {sampleSchools.map((school) => (
                    <Badge
                      key={school}
                      variant="secondary"
                      className="rounded-md bg-slate-100 text-slate-700"
                    >
                      {school}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>

          <section className="space-y-4">
            <div className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
              <div className="border-b border-slate-200 bg-slate-950 px-5 py-4 text-white">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm text-slate-300">분석 미리보기</p>
                    <h2 className="text-xl font-semibold">포항제철초등학교</h2>
                  </div>
                  <MapPin className="size-6 text-emerald-300" />
                </div>
              </div>

              <div className="grid gap-0 md:grid-cols-[1.1fr_0.9fr]">
                <div className="relative min-h-72 overflow-hidden bg-[linear-gradient(90deg,#e2e8f0_1px,transparent_1px),linear-gradient(#e2e8f0_1px,transparent_1px)] bg-[size:28px_28px]">
                  <div className="absolute left-[42%] top-[38%] size-24 rounded-full border border-emerald-500/40 bg-emerald-500/10" />
                  <div className="absolute left-[49%] top-[45%] size-4 rounded-full bg-slate-950 ring-4 ring-white" />
                  <div className="absolute left-[26%] top-[26%] size-3 rounded-full bg-amber-500 ring-4 ring-white" />
                  <div className="absolute left-[68%] top-[33%] size-3 rounded-full bg-cyan-500 ring-4 ring-white" />
                  <div className="absolute left-[58%] top-[68%] size-3 rounded-full bg-emerald-500 ring-4 ring-white" />
                  <div className="absolute bottom-4 left-4 rounded-md border border-slate-200 bg-white px-3 py-2 text-xs text-slate-600 shadow-sm">
                    반경 1km 공공데이터 매칭
                  </div>
                </div>

                <div className="space-y-4 p-5">
                  <div className="flex items-center gap-2 text-sm font-medium text-slate-600">
                    <Database className="size-4" />
                    우선 신호
                  </div>
                  <div className="space-y-4">
                    {signals.map((signal) => (
                      <div key={signal.label} className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span className="font-medium">{signal.label}</span>
                          <span className="text-slate-500">{signal.score}</span>
                        </div>
                        <div className="h-2 rounded-full bg-slate-100">
                          <div
                            className={`h-full rounded-full ${signal.tone}`}
                            style={{ width: `${signal.score}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="rounded-lg bg-emerald-50 p-4 text-sm leading-6 text-emerald-950">
                    <Sparkles className="mb-2 size-4" />
                    추천 1순위는 교통안전교육입니다. 인근 통학 환경과
                    보호구역 데이터를 근거로 편성 강화가 필요합니다.
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
