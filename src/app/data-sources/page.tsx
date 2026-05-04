import Link from "next/link";

export default function DataSourcesPage() {
  return (
    <main className="mx-auto w-full max-w-3xl px-4 py-10 sm:px-6">
      <div className="space-y-4 rounded-2xl border bg-card p-8">
        <h1 className="text-3xl font-semibold tracking-tight">데이터 출처 안내</h1>
        <p className="text-sm leading-6 text-muted-foreground sm:text-base">
          현재는 mock 단계라 실제 공공데이터 출처 목록은 정리 중입니다. 이후 교통사고,
          다문화, 보호구역 등 사용 데이터셋과 기준을 이 페이지에서 안내할 예정입니다.
        </p>
        <Link href="/search" className="text-sm font-medium text-blue-700 hover:underline">
          학교 검색 페이지로 이동
        </Link>
      </div>
    </main>
  );
}
