import { notFound } from "next/navigation";
import { EnvironmentSection } from "@/components/result/EnvironmentSection";
import { RadarChart } from "@/components/result/RadarChart";
import { RecommendationList } from "@/components/result/RecommendationList";
import { ResourceLinks } from "@/components/result/ResourceLinks";
import { SchoolHeader } from "@/components/result/SchoolHeader";
import { getSampleSchool } from "@/lib/mock/sample-schools";

interface Props {
  params: Promise<{ code: string }>;
}

export default async function SchoolResultPage({ params }: Props) {
  const { code } = await params;
  const result = getSampleSchool(code);

  if (!result) {
    notFound();
  }

  return (
    <main className="container mx-auto max-w-6xl space-y-6 px-4 py-6 sm:px-6 sm:py-8">
      <SchoolHeader school={result.school} />
      <RadarChart data={result.recommendations.radarData} />
      <RecommendationList
        recommendations={result.recommendations.top5}
        allTopicScores={result.recommendations.curriculumTopicScores}
      />
      <EnvironmentSection environment={result.environment} />
      <ResourceLinks recommendations={result.recommendations.top5} />

      <div className="rounded-xl bg-muted/40 px-4 py-5 text-center text-sm leading-6 text-muted-foreground">
        분석 시점: {new Date(result.generatedAt).toLocaleString("ko-KR")}
        <br />
        현재는 목업 데이터 기반 화면입니다. 실제 데이터 연동 이후 환경 점수와 추천
        교육 근거가 함께 갱신됩니다.
      </div>
    </main>
  );
}
