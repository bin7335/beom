import { notFound } from "next/navigation";
import { EnvironmentSection } from "@/components/result/EnvironmentSection";
import { RadarChart } from "@/components/result/RadarChart";
import { RecommendationList } from "@/components/result/RecommendationList";
import { ResourceLinks } from "@/components/result/ResourceLinks";
import { SchoolHeader } from "@/components/result/SchoolHeader";
import { TopicCatalog } from "@/components/result/TopicCatalog";
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
    <main className="container mx-auto max-w-5xl space-y-6 px-4 py-8">
      <SchoolHeader school={result.school} />
      <EnvironmentSection
        environment={result.environment}
        baseline={result.baseline}
      />
      <RecommendationList recommendations={result.recommendations.top5} />
      <TopicCatalog />
      <RadarChart intensity={result.recommendations.allTopicsIntensity} />
      <ResourceLinks recommendations={result.recommendations.top5} />

      <div className="py-4 text-center text-xs text-muted-foreground">
        분석 시점: {new Date(result.generatedAt).toLocaleString("ko-KR")}
        <br />
        현재는 mock 데이터 기반 화면입니다. 실제 데이터 연동 이후 수치와 추천 근거가 함께 갱신됩니다.
      </div>
    </main>
  );
}
