# 진행 상황 (PROGRESS)

> **갱신 원칙**: 작업 시작 전·종료 후 1분 갱신. 길게 쓰지 말기.
> **업데이트**: 2026-05-04 (Day 2)

---

## 현재 상태

- **단계**: Day 2 (mock 결과 페이지 구현 중)
- **다음 마일스톤**: 5/5 관리자 화면 공유 (체크포인트 1)
- **마감**: 2주 데모 5/16 / 대회 제출 5/31

---

## Day 1 — 5/3 (토) ✅

- [x] `D:\dev\beom` 폴더 생성 (OneDrive 바깥)
- [x] GitHub `beom` 레포 생성 (경북교육청 조직, Private)
- [x] Next.js + TypeScript + Tailwind 셋업
- [x] shadcn/ui + 기본 컴포넌트 4개 설치
- [x] 폴더 구조 + README + .gitignore
- [x] 문서 3개 docs/에 복사 (PRD·작업계획·데이터가이드)
- [x] 첫 커밋 + 푸시
- [x] Vercel 배포 + 도메인 동작 확인

---

## Day 2 — 5/4 (일) 🟡

- [x] 타입 정의 (`src/lib/types.ts`)
- [x] mock 데이터 3개 학교 (`src/lib/mock/sample-schools.ts`)
- [x] 컴포넌트 5개 작성
- [ ] **🔧 ResourceLinks.tsx 코드 누락 수정 (진행 중)**
- [ ] 결과 페이지 라우트 (`/school/[code]`)
- [ ] 메인 페이지 샘플 링크
- [ ] 동작 확인 + git 푸시

---

## Day 3 — 5/5 (월) 예정

- [ ] 디자인 다듬기 (필요한 만큼만)
- [ ] **🎯 관리자에게 도메인 공유 → 피드백 받기 (체크포인트 1)**

---

## 이번 주 남은 작업 (5/6~5/9)

- 검색 페이지 (mock)
- NEIS API 키 발급
- 경북 초등학교 데이터 수집
- Supabase 프로젝트 생성 + 학교 데이터 적재
- 검색 mock → real 교체
