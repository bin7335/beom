export function ResultPageSkeleton() {
  return (
    <main className="container mx-auto max-w-6xl space-y-6 px-4 py-6 sm:px-6 sm:py-8">
      <div className="animate-pulse rounded-xl border p-4 sm:p-6">
        <div className="h-8 w-2/3 rounded bg-muted" />
        <div className="mt-3 h-5 w-full rounded bg-muted sm:w-1/2" />
        <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-3">
          <div className="h-16 rounded-lg bg-muted" />
          <div className="h-16 rounded-lg bg-muted" />
          <div className="h-16 rounded-lg bg-muted" />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="animate-pulse rounded-xl border p-4 sm:p-6">
          <div className="h-6 w-48 rounded bg-muted" />
          <div className="mt-4 space-y-4">
            <div className="h-32 rounded-xl bg-muted" />
            <div className="h-32 rounded-xl bg-muted" />
            <div className="h-32 rounded-xl bg-muted" />
          </div>
        </div>
        <div className="animate-pulse rounded-xl border p-4 sm:p-6">
          <div className="h-6 w-40 rounded bg-muted" />
          <div className="mt-4 h-[280px] rounded-xl bg-muted" />
        </div>
      </div>

      <div className="animate-pulse rounded-xl border p-4 sm:p-6">
        <div className="h-6 w-36 rounded bg-muted" />
        <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
          <div className="h-28 rounded-xl bg-muted" />
          <div className="h-28 rounded-xl bg-muted" />
          <div className="h-28 rounded-xl bg-muted" />
          <div className="h-28 rounded-xl bg-muted" />
        </div>
      </div>
    </main>
  );
}
