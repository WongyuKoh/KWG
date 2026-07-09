// @ts-check — JS 파일이지만 TypeScript 검사기로 오타·타입 오류를 잡아달라는 지시
import { defineConfig } from 'astro/config'; // 설정 객체에 자동완성·검증을 붙여주는 헬퍼
import react from '@astrojs/react'; // React 아일랜드(.tsx 컴포넌트)를 쓰기 위한 통합 플러그인
import tailwindcss from '@tailwindcss/vite'; // Tailwind v4는 Vite 플러그인 방식으로 연결

// ── GitHub Pages 배포 설정 ─────────────────────────────────────────────
// 이 레포(WongyuKoh/KWG)는 "프로젝트 페이지"이므로
// 실제 주소는 https://WongyuKoh.github.io/KWG/ 입니다.
// → 그래서 base 경로가 필요합니다.
//
// 만약 나중에 레포명을 'WongyuKoh.github.io'로 바꾸면(= 사용자 페이지),
// 아래를 site: 'https://WongyuKoh.github.io', base: '/' 로 바꾸면 됩니다.
const SITE = 'https://wongyukoh.github.io';
const BASE = '/KWG';

export default defineConfig({
  // site: 사이트의 최종 절대 주소 — canonical URL·사이트맵 생성 등에 사용됨
  site: SITE,
  // base: 모든 내부 링크·에셋 경로 앞에 자동으로 붙는 하위 경로.
  //       컴포넌트에서는 import.meta.env.BASE_URL로 이 값을 읽음 (utils/url.ts 참고)
  base: BASE,
  // integrations: Astro에 기능을 추가하는 플러그인 목록. react() = .tsx 아일랜드 렌더러 등록
  integrations: [react()],
  // Astro는 내부적으로 Vite(빌드 도구)를 쓰므로, Vite 플러그인은 이 자리에 등록
  vite: {
    plugins: [tailwindcss()],
  },
  // 다국어(i18n) 라우팅 설정
  i18n: {
    defaultLocale: 'ko', // 기본 언어
    locales: ['ko', 'en'], // 지원 언어 목록 — 여기 추가하면 새 언어 라우트 생성 가능
    routing: {
      prefixDefaultLocale: false, // ko는 '/', en은 '/en/' -> 기본 언어도 링크에 붙일 건지를 정하는 변수
      // true로 바꾸면 한국어도 '/ko/'가 되고 루트('/')는 리다이렉트용이 됨
    },
  },
});
