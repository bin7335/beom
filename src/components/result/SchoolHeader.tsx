import type { School } from "@/lib/types";
import { Card, CardContent } from "@/components/ui/card";

export function SchoolHeader({ school }: { school: School }) {
  return (
    <Card>
      <CardContent className="p-4 sm:p-6">
        <div className="space-y-2">
          <h1 className="text-2xl font-bold leading-tight sm:text-3xl">
            {school.name}
          </h1>
          <p className="text-sm leading-6 text-muted-foreground sm:text-base">
            {school.address}
          </p>
        </div>
        <div className="mt-5 grid grid-cols-1 gap-3 text-sm sm:grid-cols-3">
          <div className="rounded-lg bg-muted/50 p-3">
            <span className="text-muted-foreground">학생 수</span>
            <span className="ml-2 font-medium">{school.studentCount}명</span>
          </div>
          <div className="rounded-lg bg-muted/50 p-3">
            <span className="text-muted-foreground">학급 수</span>
            <span className="ml-2 font-medium">{school.classCount}개</span>
          </div>
          <div className="rounded-lg bg-muted/50 p-3">
            <span className="text-muted-foreground">지역</span>
            <span className="ml-2 font-medium">{school.sigungu}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
