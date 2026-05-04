"use client";

import type { AllTenIntensity } from "@/lib/types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function RadarChart({ intensity }: { intensity: AllTenIntensity }) {
  const items = Object.entries(intensity);

  return (
    <Card>
      <CardHeader>
        <CardTitle>📊 10개 주제 전체 강도</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-sm text-muted-foreground mb-4">
          ※ 레이더 차트는 Day 8에 Recharts로 교체 예정
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
          {items.map(([topic, value]) => (
            <div key={topic} className="border rounded-lg p-3 text-center">
              <div className="text-xs text-muted-foreground mb-1">{topic}</div>
              <div className="text-lg font-bold">
                {"●".repeat(value)}{"○".repeat(5 - value)}
              </div>
              <div className="text-xs mt-1">{value}/5</div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
