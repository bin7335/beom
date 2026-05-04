import { getAllTopics, formatRequiredHours } from "@/lib/types";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function TopicCatalog() {
  const topics = getAllTopics();

  return (
    <Card>
      <CardHeader>
        <CardTitle>17개 교육과정 전체 목록</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="mb-4 text-sm text-muted-foreground">
          v0.3 기준 전체 교육과정 단위를 한 번에 확인할 수 있도록 정리했습니다.
        </div>
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
          {topics.map((topic, index) => (
            <div key={topic.id} className="rounded-lg border p-4">
              <div className="mb-2 flex flex-wrap items-center gap-2">
                <span className="text-sm font-semibold">{index + 1}. {topic.name}</span>
                <Badge variant="secondary">{topic.category}</Badge>
                <Badge variant={topic.isLegallyRequired ? "default" : "outline"}>
                  {topic.isLegallyRequired ? "의무" : "권장"}
                </Badge>
              </div>
              <div className="space-y-1 text-sm text-muted-foreground">
                <div>기준 시수: {formatRequiredHours(topic)}</div>
                <div>연계 교과: {topic.relatedSubjects.join(", ")}</div>
                <div>데이터 매핑: {topic.dataMappingStrength}</div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
