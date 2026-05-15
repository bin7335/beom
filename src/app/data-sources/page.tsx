import Link from "next/link";

export default function DataSourcesPage() {
  return (
    <main className="mx-auto w-full max-w-3xl px-4 py-10 sm:px-6">
      <div className="space-y-6 rounded-2xl border bg-card p-8">
        <h1 className="text-3xl font-semibold tracking-tight">데이터 출처 안내</h1>
        <p className="text-sm leading-6 text-muted-foreground sm:text-base">
          현재 학교 기본정보는 NEIS Open API로 수집했고, 주소 기준 위경도는 카카오 로컬 API로
          변환했습니다. Supabase에는 경북 초등학교 474개교가 적재되어 있으며, 검색과 결과 화면
          연결은 다음 단계에서 진행합니다.
        </p>
        <div className="grid gap-3 text-sm sm:grid-cols-2">
          <div className="rounded-xl border bg-background p-4">
            <div className="font-semibold">완료된 데이터</div>
            <p className="mt-2 leading-6 text-muted-foreground">
              NEIS 학교 기본정보 474건, 카카오 위경도 473건, Supabase schools 474건
            </p>
          </div>
          <div className="rounded-xl border bg-background p-4">
            <div className="font-semibold">다음 연결 데이터</div>
            <p className="mt-2 leading-6 text-muted-foreground">
              교통사고, 어린이보호구역, 다문화 학생 비율, 학교폭력 또는 대체 지표
            </p>
          </div>
        </div>
        <Link href="/search" className="text-sm font-medium text-blue-700 hover:underline">
          학교 검색 페이지로 이동
        </Link>
      </div>
    </main>
  );
}
