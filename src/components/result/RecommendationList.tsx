import type { Recommendation } from "@/lib/types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function RecommendationList({ recommendations }: { recommendations: Recommendation[] }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>🎯 우리 학교에 특히 필요한 범교과 주제 TOP 5</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {recommendations.map((rec) => (
          <div key={rec.rank} className="border rounded-lg p-5">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl font-bold">{rec.rank}위</span>
                  <h3 className="text-lg font-semibold">{rec.topic}</h3>
                  <Badge variant="secondary">{rec.category}</Badge>
                </div>
                <p className="text-sm text-muted-foreground mb-3">{rec.evidence}</p>
                <div className="flex flex-wrap gap-2 text-sm">
                  <Badge variant="outline">
                    시수 조정: {rec.recommendedHoursChange === "0" ? "유지" : rec.recommendedHoursChange + "회"}
                  </Badge>
                  {rec.subjectLinks.map((link) => (
                    <Badge key={link} variant="outline">{link}</Badge>
                  ))}
                </div>
              </div>
              <div className="text-right">
                <div className="text-xs text-muted-foreground">강도</div>
                <div className="text-xl">
                  {"★".repeat(rec.intensity)}{"☆".repeat(5 - rec.intensity)}
                </div>
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
