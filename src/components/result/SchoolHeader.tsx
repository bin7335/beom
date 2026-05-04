import type { School } from "@/lib/types";
import { Card, CardContent } from "@/components/ui/card";

export function SchoolHeader({ school }: { school: School }) {
  return (
    <Card>
      <CardContent className="p-6">
        <h1 className="text-2xl font-bold">{school.name}</h1>
        <p className="mt-1 text-sm text-muted-foreground">{school.address}</p>
        <div className="mt-4 flex flex-wrap gap-6 text-sm">
          <div>
            <span className="text-muted-foreground">학생 수</span>
            <span className="ml-2 font-medium">{school.studentCount}명</span>
          </div>
          <div>
            <span className="text-muted-foreground">학급 수</span>
            <span className="ml-2 font-medium">{school.classCount}개</span>
          </div>
          <div>
            <span className="text-muted-foreground">지역</span>
            <span className="ml-2 font-medium">{school.sigungu}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
