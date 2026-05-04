import { notFound } from "next/navigation";
import { getSampleSchool } from "@/lib/mock/sample-schools";
import { SchoolHeader } from "@/components/result/SchoolHeader";
import { EnvironmentSection } from "@/components/result/EnvironmentSection";
import { RecommendationList } from "@/components/result/RecommendationList";
import { RadarChart } from "@/components/result/RadarChart";
import { ResourceLinks } from "@/components/result/ResourceLinks";

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
    <main className="container mx-auto px-4 py-8 max-w-5xl space-y-6">
      <SchoolHeader school={result.school} />
      <EnvironmentSection
        environment={result.environment}
        baseline={result.baseline}
      />
      <RecommendationList recommendations={result.recommendations.top5} />
      <RadarChart intensity={result.recommendations.allTenIntensity} />
      <ResourceLinks recommendations={result.recommendations.top5} />

      <div className="text-center text-xs text-muted-foreground py-4">
        분석 시점: {new Date(result.generatedAt).toLocaleString("ko-KR")}
        <br />※ 현재 mock 데이터로 동작 중. 실데이터 연동은 Day 6 이후.
      </div>
    </main>
  );
}
