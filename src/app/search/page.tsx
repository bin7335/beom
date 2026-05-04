"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { getMockSchools, searchSchools } from "@/lib/mock/school-directory";

export default function SearchPage() {
  const [query, setQuery] = useState("");

  const results = useMemo(() => searchSchools(query), [query]);
  const hasQuery = query.trim().length > 0;
  const allSchools = useMemo(() => getMockSchools(), []);

  return (
    <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col px-4 py-10 sm:px-6">
      <section className="mb-8 max-w-2xl space-y-3">
        <div className="inline-flex w-fit items-center rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">
          mock 검색
        </div>
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">학교 검색</h1>
        <p className="text-sm leading-6 text-muted-foreground sm:text-base">
          학교명을 입력하면 mock 학교 목록에서 일치하는 결과를 바로 확인할 수 있습니다.
          현재는 샘플 학교 3개만 연결되어 있습니다.
        </p>
      </section>

      <section className="mb-8">
        <div className="flex flex-col gap-3 sm:flex-row">
          <div className="relative flex-1">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="학교명을 입력하세요 (예: 포항제철초)"
              className="h-12 pl-10"
            />
          </div>
          <Button type="button" size="lg" className="sm:w-auto">
            학교 찾기
          </Button>
        </div>
      </section>

      <section className="flex-1 space-y-4">
        {!hasQuery && (
          <div className="rounded-2xl border border-dashed bg-muted/40 p-5 text-sm text-muted-foreground">
            검색어를 입력하지 않으면 현재 연결된 전체 mock 학교 목록을 보여줍니다. 총 {allSchools.length}개 학교가 준비되어 있습니다.
          </div>
        )}

        {results.length === 0 ? (
          <Card>
            <CardContent className="flex min-h-40 flex-col items-center justify-center gap-2 p-6 text-center">
              <div className="text-base font-medium">검색 결과가 없습니다</div>
              <p className="max-w-md text-sm text-muted-foreground">
                학교명을 다시 입력해 주세요. 현재 mock 데이터에는 샘플 학교 3개만 포함되어 있습니다.
              </p>
            </CardContent>
          </Card>
        ) : (
          <div className="grid gap-3">
            {results.map((school) => (
              <Link key={school.code} href={`/school/${school.code}`}>
                <Card className="transition-colors hover:border-blue-300 hover:bg-blue-50/40">
                  <CardContent className="flex items-center justify-between gap-4 p-5">
                    <div className="min-w-0">
                      <div className="truncate text-base font-semibold">{school.name}</div>
                      <div className="mt-1 text-sm text-muted-foreground">{school.address}</div>
                    </div>
                    <div className="shrink-0 text-xs font-medium text-blue-700">결과 보기</div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
