import type { TopicRecommendation } from "@/lib/types";
import { RESOURCE_LINKS, getTopicById } from "@/lib/types";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function ResourceLinks({
  recommendations,
}: {
  recommendations: TopicRecommendation[];
}) {
  return (
    <Card>
      <CardHeader className="space-y-2">
        <CardTitle>연계 교육 자료</CardTitle>
        <p className="text-sm text-muted-foreground">
          바로 참고할 수 있는 공공 자료와 교수학습 링크를 추천 주제별로 정리했습니다.
        </p>
      </CardHeader>
      <CardContent>
        <div className="space-y-5">
          {recommendations.map((rec) => {
            const topic = getTopicById(rec.topicId);
            const resources = RESOURCE_LINKS[rec.topicId] ?? [];

            return (
              <div key={rec.rank} className="rounded-xl border p-4">
                <div className="mb-3 text-sm font-semibold">
                  {rec.rank}위. {topic.name}
                </div>
                <div className="flex flex-wrap gap-3">
                  {resources.map((res) => (
                    <Button
                      key={`${rec.topicId}-${res.url}`}
                      asChild
                      variant="outline"
                      className="h-11 px-4 text-sm"
                    >
                      <a href={res.url} target="_blank" rel="noopener noreferrer">
                        자료 보기: {res.name}
                      </a>
                    </Button>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
