"use client";

import type { AllTopicsIntensity, TopicId } from "@/lib/types";
import { TOPIC_IDS, getTopicById } from "@/lib/types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

function renderIntensity(intensity: number) {
  return `${"●".repeat(intensity)}${"○".repeat(5 - intensity)}`;
}

export function RadarChart({ intensity }: { intensity: AllTopicsIntensity }) {
  const items = TOPIC_IDS.map((topicId: TopicId) => ({
    topicId,
    label: getTopicById(topicId).name,
    value: intensity[topicId],
  }));

  return (
    <Card>
      <CardHeader>
        <CardTitle>17개 교육과정 전체 강도</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="mb-4 text-sm text-muted-foreground">
          각 교육과정 단위별 우선 강도를 한눈에 보는 목업입니다.
        </div>
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-3">
          {items.map((item) => (
            <div key={item.topicId} className="rounded-lg border p-3">
              <div className="mb-1 text-sm font-medium">{item.label}</div>
              <div className="text-lg font-bold">{renderIntensity(item.value)}</div>
              <div className="mt-1 text-xs text-muted-foreground">{item.value}/5</div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
