import type { CurriculumTopicScore, TopicRecommendation } from "@/lib/types";
import { getCurriculumTopicById, getTopicById } from "@/lib/types";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

function renderIntensity(intensity: number) {
  return `${"★".repeat(intensity)}${"☆".repeat(5 - intensity)}`;
}

export function RecommendationList({
  recommendations,
  allTopicScores,
}: {
  recommendations: TopicRecommendation[];
  allTopicScores: CurriculumTopicScore[];
}) {
  const topRecommendations = recommendations.slice(0, 3);
  const sortedScores = [...allTopicScores].sort((a, b) => b.score - a.score);

  return (
    <Card>
      <CardHeader className="space-y-2">
        <CardTitle>이 학교에 우선 추천하는 주제 TOP 3</CardTitle>
        <p className="text-sm text-muted-foreground">
          교내 환경과 지역 맥락을 함께 반영한 목업 추천 결과입니다.
        </p>
      </CardHeader>
      <CardContent className="space-y-4">
        {topRecommendations.map((rec) => {
          const topic = getTopicById(rec.topicId);

          return (
            <div
              key={rec.rank}
              className="rounded-xl border bg-card p-4 shadow-sm sm:p-5"
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div className="min-w-0 flex-1">
                  <div className="mb-3 flex flex-wrap items-center gap-2">
                    <span className="rounded-full bg-primary/10 px-3 py-1 text-sm font-bold text-primary">
                      TOP {rec.rank}
                    </span>
                    <h3 className="text-base font-semibold sm:text-lg">{topic.name}</h3>
                    <Badge variant="secondary">{topic.category}</Badge>
                    <Badge variant={topic.isLegallyRequired ? "default" : "outline"}>
                      {topic.isLegallyRequired ? "의무" : "권장"}
                    </Badge>
                  </div>
                  <p className="mb-3 text-sm leading-6 text-muted-foreground">
                    {rec.evidence}
                  </p>
                  <div className="flex flex-wrap gap-2 text-sm">
                    <Badge variant="outline">운영 제안: {rec.hoursRecommendation}</Badge>
                    <Badge variant="outline">법적 근거: {topic.legalBasis}</Badge>
                    {topic.relatedSubjects.map((subject) => (
                      <Badge key={subject} variant="outline">
                        연계 교과: {subject}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="rounded-lg bg-muted px-4 py-3 sm:min-w-32">
                  <div className="text-sm text-muted-foreground">추천도</div>
                  <div className="mt-1 text-2xl font-bold">{rec.score}점</div>
                  <div className="mt-1 text-sm text-muted-foreground">
                    {renderIntensity(rec.intensity)}
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        <details className="rounded-xl border bg-muted/30 p-4">
          <summary className="cursor-pointer text-sm font-semibold">
            전체 추천도 보기
          </summary>
          <div className="mt-4 grid grid-cols-1 gap-3 md:grid-cols-2">
            {sortedScores.map((item) => {
              const topic = getCurriculumTopicById(item.topicId);

              return (
                <div key={item.topicId} className="rounded-lg border bg-background p-4">
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <div className="text-sm font-semibold">{topic.label}</div>
                      <div className="mt-1 text-sm text-muted-foreground">
                        {topic.category}
                      </div>
                    </div>
                    <div className="shrink-0 text-base font-bold">{item.score}점</div>
                  </div>
                  <div className="mt-3 h-2 overflow-hidden rounded-full bg-muted">
                    <div
                      className="h-full rounded-full bg-primary"
                      style={{ width: `${item.score}%` }}
                    />
                  </div>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">
                    {item.reason}
                  </p>
                </div>
              );
            })}
          </div>
        </details>
      </CardContent>
    </Card>
  );
}
