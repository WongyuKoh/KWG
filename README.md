# KWG · 프로필 / CV 웹사이트

기업 제출용 CV 겸 포트폴리오 웹사이트입니다. 프로젝트 · 경력 · 실적 · 기술 스택을
한 페이지로 보여주고, **한국어 / 영어 토글**과 **다크 모드**를 지원합니다.

> 📖 **모든 폴더·파일의 역할과 사용법을 정리한 상세 문서 → [PROJECT_GUIDE.md](PROJECT_GUIDE.md)**

## 기술 스택

- **Astro** — 정적 사이트 생성 (빠른 로딩 · 좋은 SEO)
- **Tailwind CSS v4** — 스타일링 · 반응형 · 다크 모드
- **React (아일랜드)** + **Framer Motion** — 스크롤 애니메이션, 테마 토글
- **GitHub Pages** — 무료 배포 (`.github/workflows/deploy.yml` 자동화)

## 개발

```bash
npm install       # 최초 1회 의존성 설치
npm run dev       # 개발 서버 (http://localhost:4321/KWG/)
npm run build     # 정적 빌드 (dist/)
npm run preview   # 빌드 결과 미리보기
```

## ✏️ 내용 수정하는 법

디자인은 그대로 두고 **`src/data/` 의 파일만 고치면** 내용이 바뀝니다.

| 파일 | 내용 |
| --- | --- |
| `src/data/profile.ts` | 이름 · 직무 · 이메일 · GitHub · 사진 · 이력서 PDF |
| `src/data/about.ts` | 자기소개 문단 |
| `src/data/skills.ts` | 기술 스택 (카테고리별) |
| `src/data/experience.ts` | 개발 경력 (타임라인) |
| `src/data/projects.ts` | 프로젝트 (문제 → 해결 → 결과) |
| `src/data/achievements.ts` | 수상 · 자격증 · 대외활동 |
| `src/data/education.ts` | 학력 |
| `src/i18n/ui.ts` | 섹션 제목 · 버튼 등 UI 문구 |

각 항목은 `{ ko: "...", en: "..." }` 형태라 한 곳에서 두 언어를 함께 관리합니다.

### 이미지 · 파일 추가

- 프로필 사진: `public/` 에 넣고 `profile.ts` 의 `photo`에 파일명 지정
- 프로젝트 스크린샷: `public/projects/` 에 넣고 각 프로젝트의 `image`에 지정
- 이력서 PDF: `public/resume.pdf` 를 실제 파일로 교체 (지금은 자리표시자)

## 배포 (GitHub Pages)

1. 이 저장소를 GitHub에 push
2. GitHub 저장소 → **Settings → Pages → Build and deployment → Source: GitHub Actions** 선택
3. `main` 브랜치에 push하면 자동 빌드·배포됩니다.
4. 배포 주소: `https://WongyuKoh.github.io/KWG/`

> **참고:** 현재는 "프로젝트 페이지"라 주소에 `/KWG/` 경로가 붙습니다.
> 만약 레포명을 `WongyuKoh.github.io` 로 바꾸면(= 사용자 페이지)
> `astro.config.mjs` 에서 `base: '/'`, `site: 'https://WongyuKoh.github.io'` 로 바꾸세요.

## 기존 프로젝트

이전 Svelte 게임 프로젝트는 `archive/` 폴더에 보존되어 있습니다.
