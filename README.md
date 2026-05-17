# 범 (교육해 범)

학교 인근 공공데이터를 분석하여 학교별 맞춤 범교과·계기교육 주제를 추천하는 AI 서비스.

> 제8회 교육 공공데이터 AI 활용대회 출품작 (일반 부문)
> 개발 기간: 2026-05-03 ~ 2026-05-31

## 현재 상태

- 화면 흐름 구현 완료: `/`, `/search`, `/school/[code]`, `/data-sources`
- 결과 페이지 v2 반영 완료: 학교 환경 진단과 추천 교육 분리
- NEIS 경북 초등학교 474개 수집 완료
- 카카오 로컬 API 위경도 변환 완료: 473개 성공, 1개 실패
- Supabase `schools` 테이블 생성 및 학교 데이터 474건 적재 완료
- 현재 검색/결과 화면은 샘플 mock 데이터 기반이며, 다음 단계는 Supabase real 검색 전환

## 샘플 페이지

```text
/
/school/sample-urban
/school/sample-rural
/school/sample-standard
```

## 기술 스택

- Next.js 15+ (App Router, TypeScript)
- Tailwind CSS + shadcn/ui
- Supabase (PostgreSQL)
- Anthropic Claude API
- Kakao Maps SDK
- Recharts

## 개발

```bash
npm install
npm run dev
```

## 확인

```bash
npm run lint
npm run build
```

## 폴더 구조

```text
data/raw/         원본 데이터 (git 제외, .gitkeep만 추적)
data/processed/   1차 처리 데이터
data/clean/       정제 데이터
data/final/       최종 적재/배포용 데이터
scripts/          데이터 수집·전처리 스크립트
docs/             PRD, 작업계획, 진행 추적 문서
supabase/         Supabase SQL 마이그레이션
src/app/          Next.js App Router 페이지
src/components/   UI 및 결과 페이지 컴포넌트
src/lib/mock/     mock 데이터
src/lib/supabase/ Supabase 클라이언트
src/lib/types/    타입 보조 폴더
```

## 문서

- docs/01_교육해범_PRD_v0.2.md
- docs/01_교육해범_PRD_v0.3.md
- docs/02_2주_작업계획_v2.md
- docs/03_데이터수집_우선순위.md
- docs/04_PROGRESS.md
- docs/05_DECISIONS.md
- docs/06_BLOCKERS.md

## 라이선스

활용 데이터: 공공누리 또는 동등 라이선스
상세: docs/03_데이터수집_우선순위.md

---

작업자: 송냠냠 (경상북도교육청)
