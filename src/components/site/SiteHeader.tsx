import Link from "next/link";
import { Button } from "@/components/ui/button";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/95 backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-3">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-sm font-semibold text-primary-foreground">
            b
          </span>
          <div className="min-w-0">
            <div className="font-semibold tracking-tight">beom</div>
            <div className="text-xs text-muted-foreground">교육해범</div>
          </div>
        </Link>

        <Button asChild>
          <Link href="/search">학교 검색</Link>
        </Button>
      </div>
    </header>
  );
}
