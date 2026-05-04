import type { TopicRecommendation } from "@/lib/types";
import { RESOURCE_LINKS, getTopicById } from "@/lib/types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function ResourceLinks({
  recommendations,
}: {
  recommendations: TopicRecommendation[];
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>연계 교육 자료</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {recommendations.map((rec) => {
            const topic = getTopicById(rec.topicId);
            const resources = RESOURCE_LINKS[rec.topicId] ?? [];

            return (
              <div key={rec.rank}>
                <div className="mb-2 font-medium">
                  {rec.rank}위. {topic.name}
                </div>
                <div className="flex flex-wrap gap-2">
                  {resources.map((res) => (
                    <a
                      key={`${rec.topicId}-${res.url}`}
                      href={res.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-blue-600 hover:underline"
                    >
                      자료 보기: {res.name}
                    </a>
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
