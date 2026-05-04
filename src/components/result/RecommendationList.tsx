import type { TopicRecommendation } from "@/lib/types";
import { getTopicById } from "@/lib/types";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

function renderIntensity(intensity: number) {
  return `${"★".repeat(intensity)}${"☆".repeat(5 - intensity)}`;
}

export function RecommendationList({
  recommendations,
}: {
  recommendations: TopicRecommendation[];
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>우선 추천 교육과정 TOP 5</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {recommendations.map((rec) => {
          const topic = getTopicById(rec.topicId);

          return (
            <div key={rec.rank} className="rounded-lg border p-5">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="mb-2 flex flex-wrap items-center gap-2">
                    <span className="text-2xl font-bold">{rec.rank}위</span>
                    <h3 className="text-lg font-semibold">{topic.name}</h3>
                    <Badge variant="secondary">{topic.category}</Badge>
                    <Badge variant={topic.isLegallyRequired ? "default" : "outline"}>
                      {topic.isLegallyRequired ? "의무" : "권장"}
                    </Badge>
                  </div>
                  <p className="mb-3 text-sm text-muted-foreground">{rec.evidence}</p>
                  <div className="flex flex-wrap gap-2 text-sm">
                    <Badge variant="outline">시수 제안: {rec.hoursRecommendation}</Badge>
                    <Badge variant="outline">법적 근거: {topic.legalBasis}</Badge>
                    {topic.relatedSubjects.map((subject) => (
                      <Badge key={subject} variant="outline">
                        연계 교과: {subject}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-muted-foreground">강도</div>
                  <div className="text-xl">{renderIntensity(rec.intensity)}</div>
                </div>
              </div>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
}
