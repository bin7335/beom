# 진행 상황 (PROGRESS)

> 기준일: 2026-05-07
> 현재 상태: Day 3 결과 페이지 v2 반영 및 데이터 수집 Step 2 완료

---

## 현재 요약

- 랜딩 페이지, 검색 mock 페이지, 결과 페이지 기본 흐름 완료
- 결과 페이지를 v2 명세 기준으로 재정리 완료
- 학교 환경 진단과 추천 교육 개념 분리 완료
- 학교 환경 진단 카드 안에 진단 근거 지표까지 통합 완료
- NEIS 경북 초등학교 474개 수집 완료
- 카카오 로컬 API 기준 위경도 변환 473개 성공, 1개 실패
- 최근 원격 반영 완료 커밋:
  - `05f918a` fix: separate diagnosis and recommendation on result page
  - `61af79b` refactor: merge diagnosis chart and evidence indicators

---

## 완료된 작업

### 1. 프로젝트 기초 세팅

- Next.js + TypeScript + Tailwind + shadcn/ui 초기 세팅
- GitHub 저장소 연결
- Vercel 초기 배포 확인
- 기본 문서 구조 정리

### 2. 화면 흐름 구축

- `/` 랜딩 페이지 리뉴얼
- `/search` 학교 검색 mock 페이지 구현
- `/school/[code]` 결과 페이지 라우트 구현
- `/data-sources` placeholder 페이지 추가
- 공통 sticky 헤더 적용

### 3. 결과 페이지 mock 1차 구현

- `SchoolHeader`, `RecommendationList`, `RadarChart`, `ResourceLinks` 구성
- PRD v0.3 기준 17개 교육과정 단위 반영
- mock 학교 3곳 기준 결과 화면 렌더링 가능 상태 확보

### 4. 결과 페이지 Day 3 v2 반영

- 차트 의미를 `추천도`에서 `학교 환경 진단`으로 재정의
- 환경 점수와 추천 교육을 분리
- 5개 그룹 오각형 차트로 변경
- 점수 방향을 `점수 낮음 = 환경 취약 = 교육 보강 필요`로 정리
- 평균 환경 점수에 따라 차트 색상 변경
  - 70 이상: 초록
  - 40~69: 노랑
  - 40 미만: 주황
- 추천 교육 TOP 3를 낮은 환경 점수 순으로 재정렬
- `강도` 사용자 텍스트 제거 및 문맥별 교체

### 5. 결과 페이지 구조 개선

- `학교 환경 진단`과 `학교 환경 지표`를 별도 섹션으로 두지 않고 통합
- 진단 카드 안에 다음 내용을 한 번에 배치
  - 차트
  - 5개 그룹 점수 카드
  - 진단 근거 지표 4개
- 페이지 흐름을 `진단 -> 추천 -> 자료` 중심으로 단순화

### 6. 데이터 수집 Step 1

- NEIS Open API 연동 스크립트 작성
- 경상북도 초등학교 474개 수집
- 산출물:
  - `data/raw/neis_schools_경북초등.json`

### 7. 데이터 수집 Step 2

- 카카오 로컬 API 연동 스크립트 작성
- 주소 기준 위경도 변환 수행
- 산출물:
  - `data/processed/schools_with_coords.json`
- 결과:
  - 총 474개
  - 성공 473개
  - 실패 1개

---

## 현재 산출물

- 문서
  - `docs/01_교육해범_PRD_v0.2.md`
  - `docs/01_교육해범_PRD_v0.3.md`
  - `docs/02_2주_작업계획_v2.md`
  - `docs/04_PROGRESS.md`
  - `docs/05_DECISIONS.md`
  - `docs/06_BLOCKERS.md`
- 화면
  - `/`
  - `/search`
  - `/school/[code]`
  - `/data-sources`
- 데이터
  - `data/raw/neis_schools_경북초등.json`
  - `data/processed/schools_with_coords.json`

---

## 다음 작업 후보

1. Step 3 교통사고 데이터 수집 및 학교 반경 매칭
2. Supabase `schools` 테이블 설계 및 적재
3. 검색 페이지 mock -> real 전환
4. 결과 페이지 mock 환경 점수 -> real 계산 구조 연결
5. 포항영흥초등학교 좌표 단건 보정 여부 판단

---

## 메모

- `.env.local`은 계속 로컬 전용으로 유지
- 원천/가공 데이터는 필요한 산출물만 예외적으로 git 추적
- 결과 페이지 개념은 이제 다음처럼 고정
  - 학교 환경 진단 = 객관적 환경 점수
  - 추천 교육 = 진단 결과를 바탕으로 한 제안
