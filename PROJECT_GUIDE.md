# 📖 KWG 프로필 사이트 — 프로젝트 완전 가이드

이 문서는 이 저장소의 **모든 폴더와 파일이 무엇이고, 왜 존재하며, 어떻게 사용하는지**를 설명합니다.
코드를 처음 보는 사람(미래의 나 포함)이 이 문서 하나로 전체 구조를 파악하는 것이 목표입니다.

---

## 1. 이 프로젝트는 무엇인가

**기업 제출용 CV 겸 개인 포트폴리오 웹사이트**입니다.

- 한 페이지 스크롤 구성: 히어로 → 소개 → 기술 → 경력 → 프로젝트 → 실적 → 학력 → 연락처
- **한국어(`/`) / 영어(`/en/`)** 두 언어 지원, 상단 버튼으로 전환
- **다크 모드 기본**, 라이트 모드 토글 가능
- 브랜드: 직접 디자인한 **KWG 로고** + 로고에서 추출한 **민트색(#49ffce)** 테마
- 배포: GitHub Pages (main에 push하면 자동 배포)
- 배포 주소: `https://WongyuKoh.github.io/KWG/`

### 기술 스택과 선택 이유

| 기술 | 역할 | 왜 선택했나 |
| --- | --- | --- |
| **Astro** | 정적 사이트 생성기(SSG). `.astro` 파일을 빌드 시점에 순수 HTML로 변환 | CV는 내용이 고정된 문서 → 서버 없이 HTML만 있으면 됨. 로딩 최고 속도 + SEO 유리 + JS 최소화 |
| **Tailwind CSS v4** | 스타일링. `class="text-sm font-bold"`처럼 유틸리티 클래스로 디자인 | CSS 파일 왕복 없이 컴포넌트 안에서 디자인 완결. 다크모드·반응형 내장 |
| **React (아일랜드)** | 상호작용이 필요한 **일부** 컴포넌트만 담당 | Astro는 기본 JS 0kb. 다크모드 토글·스크롤 애니메이션 등 꼭 필요한 조각만 React로 |
| **Framer Motion** | 스크롤 등장 애니메이션 | 선언적 API로 세련된 모션을 짧은 코드로 구현 |
| **GitHub Actions + Pages** | 자동 빌드·무료 호스팅 | push만 하면 배포 끝. 서버 비용 0원 |

### 큰 그림: 데이터가 화면이 되기까지

```
src/data/*.ts (내 정보·경력·프로젝트)     src/i18n/ui.ts (버튼·제목 문구)
        │                                        │
        └──────────────┬─────────────────────────┘
                       ▼
        src/components/*.astro  (섹션별 화면 조각)
                       ▼
        src/components/PageContent.astro  (섹션들을 순서대로 조립)
                       ▼
        src/pages/index.astro (ko) · src/pages/en/index.astro (en)
                       ▼
        src/layouts/Base.astro  (<html><head> 뼈대로 감쌈)
                       ▼
        `npm run build` → dist/ (완성된 정적 HTML/CSS/JS)
                       ▼
        GitHub Actions → GitHub Pages 게시
```

**핵심 규칙: 내용 수정은 `src/data/`만, 디자인 수정은 `src/components/`만 건드리면 됩니다.**

---

## 2. 최상위 폴더 구조

```
KWG/
├── 📄 astro.config.mjs      Astro 설정 (배포 경로·언어·플러그인) ★중요
├── 📄 package.json          프로젝트 정보 + 의존성 + npm 명령어 정의
├── 📄 package-lock.json     의존성 정확한 버전 잠금 (직접 수정 금지)
├── 📄 tsconfig.json         TypeScript 설정
├── 📄 README.md             저장소 소개 (GitHub 첫 화면)
├── 📄 PROJECT_GUIDE.md      이 문서
├── 📄 .gitignore            Git이 추적하지 않을 파일 목록
│
├── 📁 src/                  ★ 소스 코드 전부 (아래 3장에서 상세)
├── 📁 public/               빌드 없이 그대로 복사되는 정적 파일
├── 📁 brand/                로고 원본·프로필 이미지 세트 (사이트 빌드와 무관한 보관용)
├── 📁 dist/                 빌드 결과물 (자동 생성 — 수정 금지, git 미추적)
├── 📁 node_modules/         설치된 라이브러리 (자동 생성 — git 미추적)
├── 📁 archive/              이전 Svelte 게임 프로젝트 보존용 (현 사이트와 무관)
│
├── 📁 .github/workflows/    GitHub Actions 자동 배포 설정
├── 📁 .astro/               Astro가 생성하는 타입 캐시 (자동 생성)
├── 📁 .vscode/              VS Code 추천 확장 설정
└── 📁 .claude/              Claude Code 개발 도구 설정 (미리보기 서버 실행법)
```

---

## 3. `src/` — 소스 코드 상세

### 3-1. `src/pages/` — URL이 되는 파일들

Astro는 **파일 경로 = URL**입니다 (파일 기반 라우팅).

| 파일 | URL | 역할 |
| --- | --- | --- |
| `index.astro` | `/` | 한국어 페이지. `lang="ko"`를 정하고 PageContent에 위임 |
| `en/index.astro` | `/en/` | 영어 페이지. `lang="en"`만 다르고 구조 동일 |

두 파일 모두 10줄 남짓입니다 — 실제 내용은 전부 컴포넌트에 있고,
페이지는 "언어 선택 + 탭 제목"만 담당하기 때문입니다.
**새 페이지(예: 블로그)를 만들려면 여기에 파일을 추가하면 됩니다.**

### 3-2. `src/layouts/` — HTML 문서의 뼈대

| 파일 | 역할 |
| --- | --- |
| `Base.astro` | 유일한 레이아웃. `<html>` `<head>` `<body>`를 만드는 곳 |

하는 일:
- 전역 CSS(`global.css`) 로드
- `<title>`, 설명 메타태그, 파비콘, Open Graph(링크 공유 미리보기) 설정
- **다크모드 초기화 스크립트**: 페이지가 그려지기 *전에* localStorage를 읽어
  `<html class="dark">`를 결정 → 라이트→다크로 "번쩍"이는 현상(FOUC) 방지.
  저장된 값이 없으면 **다크가 기본**

### 3-3. `src/components/` — 화면 조각들

#### 구조 컴포넌트

| 파일 | 역할 |
| --- | --- |
| `PageContent.astro` | **조립도.** Nav→Hero→…→Footer를 순서대로 나열. 섹션 순서 변경은 여기서 |
| `Nav.astro` | 상단 고정 바: 로고 워드마크 · 섹션 앵커 링크 · 언어 토글 · 다크모드 토글 · 모바일 햄버거 메뉴(JS 없는 `<details>`) |
| `Section.astro` | 모든 섹션의 공통 틀: "작은 라벨(eyebrow) + 제목 + 내용". 여백·타이포·등장 애니메이션을 통일. `alt` prop으로 배경을 번갈아 어둡게 |
| `Footer.astro` | 저작권 문구 |
| `KwgMark.astro` | KWG 로고 이미지 컴포넌트 (`public/logo-mark.png`를 원하는 크기로) |

#### 섹션 컴포넌트 (내용은 전부 `src/data/`에서 가져옴)

| 파일 | 데이터 출처 | 화면 |
| --- | --- | --- |
| `Hero.astro` | `data/profile.ts` | 첫 화면: 로고 → 직무 → 이름 → 소개 → 이력서 다운로드/연락/GitHub 버튼 |
| `About.astro` | `data/about.ts` | 자기소개 문단 |
| `Skills.astro` | `data/skills.ts` | 기술 스택 — 카테고리 카드 + 민트 칩 |
| `Experience.astro` | `data/experience.ts` | 경력 — 세로 타임라인(민트 점) + 성과 불릿 + 기술 칩 |
| `Projects.astro` | `data/projects.ts` | 프로젝트 카드 — 문제/해결/결과 구조. `featured: true`면 2칸 차지 |
| `Achievements.astro` | `data/achievements.ts` | 수상·자격증 카드 |
| `Education.astro` | `data/education.ts` | 학력 카드 |
| `Contact.astro` | `data/profile.ts` | 이메일/GitHub/LinkedIn/블로그 카드 — **값이 비어 있으면 자동 숨김** |

#### `react/` — React 아일랜드 (브라우저에서 실제로 동작하는 JS)

Astro는 기본적으로 JS가 없는 정적 HTML을 만듭니다.
`client:*` 지시어를 붙인 컴포넌트만 브라우저에서 React로 "살아나며", 이를 **아일랜드**라 부릅니다.

| 파일 | 역할 | 로딩 방식 |
| --- | --- | --- |
| `ThemeToggle.tsx` | 다크/라이트 전환 버튼. `<html class="dark">` 토글 + localStorage 저장 | `client:load` (즉시) |
| `Reveal.tsx` | 감싼 내용을 스크롤 진입 시 페이드인 (Framer Motion) | `client:visible` (보일 때만 — 성능 절약) |

### 3-4. `src/data/` — ★ 콘텐츠 수정은 여기만

**디자인을 몰라도 이 폴더의 값만 바꾸면 사이트 내용이 바뀝니다.**
모든 문구는 `{ ko: "한국어", en: "English" }` 쌍으로 되어 있어 두 언어를 한 곳에서 관리합니다.

| 파일 | 내용 | 주요 필드 |
| --- | --- | --- |
| `profile.ts` | 이름·직무·연락처 등 기본 정보 | `name`, `role`, `tagline`, `email`, `github`, `resumePdf`(PDF 파일명), `photo`(사진 파일명, 비우면 로고 표시) |
| `about.ts` | 자기소개 문단 배열 | 배열 원소 1개 = 문단 1개 |
| `skills.ts` | 기술 스택 | `category`(그룹명) + `items`(기술 배열) |
| `experience.ts` | 경력 (최신순) | `company`, `role`, `period`, `highlights`(성과 불릿 — **숫자로!**), `tech` |
| `projects.ts` | 프로젝트 | `summary`, `problem`, `solution`, `result`, `tech`, `github`, `demo`, `image`, `featured` |
| `achievements.ts` | 수상·자격증 | `title`, `issuer`, `date`, `desc` |
| `education.ts` | 학력 | `school`, `degree`, `period`, `desc` |

### 3-5. `src/i18n/` — UI 문구 사전

| 파일 | 역할 |
| --- | --- |
| `ui.ts` | 섹션 제목·버튼·내비 라벨 같은 **고정 UI 문구**의 한/영 사전. 컴포넌트에서 `t(lang, "nav.about")`처럼 키로 조회 |

콘텐츠(경력 내용 등)는 `data/`, UI 문구(버튼 이름 등)는 `i18n/` — 이 구분만 기억하면 됩니다.

### 3-6. `src/styles/` — 전역 스타일

| 파일 | 역할 |
| --- | --- |
| `global.css` | ① Tailwind 로드 ② **class 기반 다크모드 정의** ③ **브랜드 민트 색 램프**(`mint-50`~`mint-800`, 로고에서 추출한 #49ffce 기준) ④ 폰트 스택 ⑤ 부드러운 스크롤 ⑥ `.container-cv` 공통 폭 |

**테마 색을 바꾸고 싶으면 이 파일의 `--color-mint-*` 값만 수정하면 사이트 전체가 바뀝니다.**

### 3-7. `src/utils/` — 작은 도우미

| 파일 | 역할 |
| --- | --- |
| `url.ts` | `withBase("파일명")` — GitHub Pages 하위경로(`/KWG/`)를 안전하게 붙임. `public/` 파일 참조는 반드시 이 함수 경유 (없으면 배포 후 404) |

---

## 4. `public/` — 그대로 복사되는 파일

빌드(변환) 없이 `dist/` 루트로 **그대로 복사**됩니다. 이미지·PDF 같은 "완성된 파일"을 두는 곳.

| 파일 | 용도 | 사용처 |
| --- | --- | --- |
| `favicon.png` | 브라우저 탭 아이콘 (로고 256px) | `Base.astro` |
| `logo-mark.png` | 정사각 로고 512px | 히어로 아바타 (`KwgMark.astro`) |
| `logo-wordmark.png` | 여백 트림한 가로 로고 | 상단 내비 |
| `resume.pdf` | 이력서 — **⚠️ 현재 자리표시자. 실제 이력서로 교체 필요** | 히어로 다운로드 버튼 |

프로젝트 스크린샷을 쓰려면 `public/projects/` 폴더를 만들어 넣고
`data/projects.ts`의 `image`에 `"projects/파일명.png"`을 적으면 됩니다.

---

## 5. `brand/` — 브랜드 원본 보관소

사이트 빌드에는 쓰이지 않는, **로고 원본과 프로필 이미지 세트** 보관 폴더입니다.

| 파일 | 용도 |
| --- | --- |
| `logo-original.png` | 직접 제작한 로고 원본 (720×720) — 모든 파생 이미지의 출발점 |
| `logo-circle-1024/512.png` | **GitHub·SNS 프로필 사진용** — 원형 크롭에 안전하게 여백 조정됨 |
| `logo-square-1024/512.png` | 사각 컨텍스트용 (명함, 앱 아이콘 등) |

> GitHub 프로필 사진 적용: [github.com/settings/profile](https://github.com/settings/profile) → `logo-circle-1024.png` 업로드

---

## 6. 설정 파일들

### `astro.config.mjs` ★ 가장 중요한 설정

```
site: 'https://WongyuKoh.github.io'   ← 최종 도메인
base: '/KWG'                          ← 하위 경로 (프로젝트 페이지라서 필요)
i18n: ko(기본, /) · en(/en/)          ← 언어 라우팅
integrations: react                   ← React 아일랜드 사용
vite.plugins: tailwindcss             ← Tailwind v4 연결
```

- **왜 base가 필요한가**: 저장소 이름이 `KWG`라서 사이트가 `WongyuKoh.github.io/KWG/`에 배포됩니다.
  base를 지정해야 모든 링크·이미지 경로 앞에 `/KWG`가 자동으로 붙습니다.
- 저장소를 `WongyuKoh.github.io`로 바꾸면(사용자 페이지) `base: '/'`로 수정하세요.

### `package.json`

- `scripts`: `npm run dev`(개발 서버) · `build`(정적 빌드) · `preview`(빌드 결과 확인)
- `dependencies`: astro, @astrojs/react, react, framer-motion
- `devDependencies`: tailwindcss, @tailwindcss/vite, 타입 정의

JSON은 주석이 불가능해 여기서 설명합니다. `package-lock.json`은 npm이 관리 — 직접 수정 금지.

### `tsconfig.json`

TypeScript 검사 규칙. Astro의 `strict` 프리셋 + React JSX 설정.
`archive/`와 `dist/`는 검사 제외.

### `.github/workflows/deploy.yml`

main에 push → GitHub 서버에서 자동으로 ①체크아웃 ②빌드 ③Pages 게시.
**최초 1회만** 저장소 Settings → Pages → Source를 "GitHub Actions"로 설정해야 동작합니다.

### `.gitignore`

`node_modules/`(재설치 가능), `dist/`(재빌드 가능), `.astro/`(캐시), `.DS_Store` 등
"생성 가능한 것들"을 Git에서 제외 — 저장소를 가볍게 유지합니다.

### `.vscode/extensions.json` · `.claude/launch.json`

- VS Code를 열면 Astro·Tailwind 확장을 추천해주는 설정
- Claude Code가 미리보기 서버(`npm run dev`, 포트 4321)를 실행하는 방법 정의

---

## 7. 자주 하는 작업 레시피

| 하고 싶은 것 | 방법 |
| --- | --- |
| **내 정보로 채우기** | `src/data/profile.ts`의 이름·이메일·GitHub 수정 |
| **경력 한 줄 추가** | `src/data/experience.ts` 배열 맨 앞에 객체 추가 |
| **프로젝트 추가** | `src/data/projects.ts`에 객체 추가 (문제→해결→결과 채우기) |
| **이력서 교체** | 실제 PDF를 `public/resume.pdf`로 덮어쓰기 |
| **프로필 사진으로 전환** | 사진을 `public/`에 넣고 `profile.ts`의 `photo: "파일명.jpg"` |
| **테마 색 변경** | `src/styles/global.css`의 `--color-mint-*` 값 수정 |
| **섹션 순서 변경** | `src/components/PageContent.astro`의 나열 순서 수정 |
| **섹션 제목 문구 변경** | `src/i18n/ui.ts`에서 해당 키의 ko/en 수정 |
| **로컬에서 확인** | `npm run dev` → http://localhost:4321/KWG/ |
| **배포** | `git add -A && git commit && git push` — 이후 자동 |

---

## 8. 빌드·배포 파이프라인 요약

```
[로컬]  npm run dev      → 개발 중 실시간 미리보기 (저장하면 즉시 반영)
[로컬]  npm run build    → dist/ 생성 (배포 전 최종 점검용)
[원격]  git push (main)  → GitHub Actions가 빌드 → GitHub Pages 게시
                          → https://WongyuKoh.github.io/KWG/
```

빌드 결과물(`dist/`)을 직접 커밋하지 마세요 — Actions가 매번 새로 만듭니다.

---

## 9. 남은 할 일 체크리스트

- [ ] `src/data/` 전체를 실제 정보로 채우기 (현재 홍길동 자리표시자)
- [ ] `public/resume.pdf`를 실제 이력서로 교체
- [ ] GitHub 저장소 Settings → Pages → Source: **GitHub Actions** 설정 (최초 1회)
- [ ] GitHub 프로필 사진을 `brand/logo-circle-1024.png`로 업로드
- [ ] 배포 후 `https://WongyuKoh.github.io/KWG/` 접속 확인
