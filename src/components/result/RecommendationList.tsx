import type { CurriculumTopicScore, TopicRecommendation } from "@/lib/types";
import { RESOURCE_LINKS, getCurriculumTopicById, getTopicById } from "@/lib/types";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

function getScoreState(score: number) {
  if (score >= 70) {
    return {
      label: "양호",
      className: "border-green-200 bg-green-50 text-green-700",
      accentClassName: "border-green-200 bg-green-50/60",
      progressClassName: "bg-green-500",
    };
  }

  if (score >= 40) {
    return {
      label: "보통",
      className: "border-yellow-200 bg-yellow-50 text-yellow-700",
      accentClassName: "border-yellow-200 bg-yellow-50/60",
      progressClassName: "bg-yellow-500",
    };
  }

  return {
    label: "취약",
    className: "border-orange-200 bg-orange-50 text-orange-700",
    accentClassName: "border-orange-200 bg-orange-50/70",
    progressClassName: "bg-orange-500",
  };
}

export function RecommendationList({
  recommendations,
  allTopicScores,
}: {
  recommendations: TopicRecommendation[];
  allTopicScores: CurriculumTopicScore[];
}) {
  const topRecommendations = recommendations.slice(0, 3);
  const sortedScores = [...allTopicScores].sort((a, b) => a.score - b.score);

  return (
    <Card>
      <CardHeader className="space-y-2">
        <CardTitle>추천 교육 TOP 3</CardTitle>
        <p className="text-sm text-muted-foreground">
          환경 점수가 낮은 영역부터 보강이 필요한 교육 주제를 제안합니다.
        </p>
      </CardHeader>
      <CardContent className="space-y-4">
        {topRecommendations.map((rec) => {
          const topic = getTopicById(rec.topicId);
          const state = getScoreState(rec.score);
          const primaryResource = RESOURCE_LINKS[rec.topicId]?.[0];

          return (
            <div
              key={rec.rank}
              className={`rounded-xl border bg-card p-4 shadow-sm sm:p-5 ${
                rec.rank === 1 ? state.accentClassName : ""
              }`}
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div className="min-w-0 flex-1">
                  <div className="mb-3 flex flex-wrap items-center gap-2">
                    <span className="rounded-full bg-primary/10 px-3 py-1 text-sm font-bold text-primary">
                      {rec.rank}. 추천 교육
                    </span>
                    <h3 className="text-base font-semibold sm:text-lg">{topic.name}</h3>
                    <Badge className={state.className}>{state.label}</Badge>
                  </div>
                  <p className="mb-3 text-sm leading-6 text-muted-foreground">
                    {rec.evidence}
                  </p>
                  <p className="mb-4 text-sm leading-6">{rec.hoursRecommendation}</p>
                  <div className="flex flex-wrap gap-2 text-sm">
                    <Badge variant="outline">근거 그룹: {rec.groupLabel}</Badge>
                    <Badge variant="outline">권장 시수 방향: 보강 우선</Badge>
                    <Badge variant="outline">법적 근거: {topic.legalBasis}</Badge>
                  </div>
                  {primaryResource ? (
                    <div className="mt-4">
                      <Button asChild variant="outline" className="h-11 px-4 text-sm">
                        <a
                          href={primaryResource.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          관련 자료 보기
                        </a>
                      </Button>
                    </div>
                  ) : null}
                </div>
                <div className="rounded-lg bg-muted px-4 py-3 sm:min-w-36">
                  <div className="text-sm text-muted-foreground">환경 점수</div>
                  <div className="mt-1 text-2xl font-bold">{rec.score}점</div>
                  <div className="mt-1 text-sm text-muted-foreground">{state.label}</div>
                </div>
              </div>
            </div>
          );
        })}

        <details className="rounded-xl border bg-muted/30 p-4">
          <summary className="cursor-pointer text-sm font-semibold">
            전체 진단 결과 보기
          </summary>
          <div className="mt-4 grid grid-cols-1 gap-3 md:grid-cols-2">
            {sortedScores.map((item) => {
              const topic = getCurriculumTopicById(item.topicId);
              const state = getScoreState(item.score);

              return (
                <div key={item.topicId} className="rounded-lg border bg-background p-4">
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <div className="text-sm font-semibold">{topic.label}</div>
                      <div className="mt-1 text-sm text-muted-foreground">
                        {topic.category}
                      </div>
                    </div>
                    <div className="shrink-0 text-right">
                      <div className="text-base font-bold">{item.score}점</div>
                      <div className="text-sm text-muted-foreground">{state.label}</div>
                    </div>
                  </div>
                  <div className="mt-3 h-2 overflow-hidden rounded-full bg-muted">
                    <div
                      className={`h-full rounded-full ${state.progressClassName}`}
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
