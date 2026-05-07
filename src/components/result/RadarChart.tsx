"use client";

import type { RadarDataPoint } from "@/lib/types";
import {
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart as RechartsRadarChart,
  ResponsiveContainer,
} from "recharts";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

function getScoreState(score: number) {
  if (score >= 70) {
    return {
      label: "양호",
      stroke: "#16a34a",
      fill: "#86efac",
      badgeClassName: "border-green-200 bg-green-50 text-green-700",
    };
  }

  if (score >= 40) {
    return {
      label: "보통",
      stroke: "#ca8a04",
      fill: "#fde68a",
      badgeClassName: "border-yellow-200 bg-yellow-50 text-yellow-700",
    };
  }

  return {
    label: "취약",
    stroke: "#ea580c",
    fill: "#fdba74",
    badgeClassName: "border-orange-200 bg-orange-50 text-orange-700",
  };
}

export function RadarChart({ data }: { data: RadarDataPoint[] }) {
  const averageScore = Math.round(
    data.reduce((sum, item) => sum + item.score, 0) / data.length,
  );
  const state = getScoreState(averageScore);

  return (
    <Card>
      <CardHeader className="space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <CardTitle>학교 환경 진단</CardTitle>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              학교 인근 공공데이터로 산출된 5개 영역의 환경 점수입니다.
            </p>
          </div>
          <Badge className={state.badgeClassName}>평균 환경 점수 {averageScore}점</Badge>
        </div>
        <p className="rounded-xl border border-dashed px-4 py-3 text-sm leading-6 text-muted-foreground">
          오각형이 작을수록 학교 인근 환경에 보강이 필요한 영역이 많습니다.
        </p>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="h-[300px] w-full sm:h-[360px]">
          <ResponsiveContainer width="100%" height="100%">
            <RechartsRadarChart
              data={data}
              cx="50%"
              cy="50%"
              outerRadius="64%"
            >
              <PolarGrid stroke="var(--border)" />
              <PolarAngleAxis
                dataKey="group"
                tick={{ fill: "var(--muted-foreground)", fontSize: 12 }}
              />
              <PolarRadiusAxis
                angle={90}
                domain={[0, 100]}
                tick={{ fill: "var(--muted-foreground)", fontSize: 11 }}
                tickCount={6}
              />
              <Radar
                dataKey="score"
                stroke={state.stroke}
                fill={state.fill}
                fillOpacity={0.32}
                strokeWidth={2}
              />
            </RechartsRadarChart>
          </ResponsiveContainer>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-5">
          {data.map((item) => (
            <div key={item.groupId} className="rounded-xl border p-4">
              <div className="flex items-center justify-between gap-3">
                <div className="text-sm font-semibold">{item.group}</div>
                <Badge className={getScoreState(item.score).badgeClassName}>
                  {getScoreState(item.score).label}
                </Badge>
              </div>
              <div className="mt-2 text-2xl font-bold">{item.score}점</div>
              <div className="mt-2 text-sm text-muted-foreground">
                포함 주제: {item.items.join(", ")}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
