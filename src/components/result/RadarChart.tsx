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
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function RadarChart({ data }: { data: RadarDataPoint[] }) {
  return (
    <Card>
      <CardHeader className="space-y-2">
        <CardTitle>5개 그룹 추천도 요약</CardTitle>
        <p className="text-sm text-muted-foreground">
          교육부 범교과 학습 주제 10개를 5개 그룹으로 묶어 0~100 기준으로 정규화한
          목업 차트입니다.
        </p>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="h-[280px] w-full sm:h-[340px]">
          <ResponsiveContainer width="100%" height="100%">
            <RechartsRadarChart
              data={data}
              cx="50%"
              cy="50%"
              outerRadius="68%"
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
                stroke="var(--primary)"
                fill="var(--primary)"
                fillOpacity={0.24}
                strokeWidth={2}
              />
            </RechartsRadarChart>
          </ResponsiveContainer>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-5">
          {data.map((item) => (
            <div key={item.groupId} className="rounded-xl border p-4">
              <div className="text-sm font-semibold">{item.group}</div>
              <div className="mt-1 text-2xl font-bold">{item.score}점</div>
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
