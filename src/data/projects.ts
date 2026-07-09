import type { Lang } from "../i18n/ui";

type L10n = Record<Lang, string>;

// 대표 프로젝트. 각 프로젝트는 "문제 → 해결 → 결과" 구조로 작성하면 설득력이 높습니다.
// image: public/projects/ 폴더에 이미지를 넣고 파일명을 적으면 카드에 표시됩니다. (비우면 아이콘)
export const projects: {
  title: L10n; // 프로젝트 이름
  period: string; // 진행 기간 (자유 형식)
  summary: L10n; // 카드 상단의 한 문장 요약
  problem: L10n; // 어떤 문제를 풀려 했나 (카드에서 빨간 라벨)
  solution: L10n; // 어떻게 접근·구현했나 (주황 라벨)
  result: L10n; // 결과와 성과 — 가능하면 숫자로 (초록 라벨)
  tech: string[]; // 사용 기술 칩
  github: string; // 저장소 주소 — 비우면("") "코드 보기" 링크가 숨겨짐
  demo: string; // 라이브 데모 주소 — 비우면 "데모 보기" 링크 숨김
  image: string; // 스크린샷 파일 경로(public/ 기준, 예: "projects/arcade.png") — 비우면 이미지 영역 없음
  featured: boolean; // true면 카드가 2칸을 차지해 대표작으로 강조됨
}[] = [
  {
    title: { ko: "게임 아케이드 웹 플랫폼", en: "Game Arcade Web Platform" },
    period: "2024.01 – 2024.03",
    summary: {
      ko: "여러 미니게임(두더지 잡기, 지뢰찾기, 테트리스, 지하철 게임)을 모아, 회원가입·로그인·랭킹·기록 저장이 가능한 웹 게임 플랫폼.",
      en: "A web game platform bundling several mini-games (Whack-a-Mole, Minesweeper, Tetris, Subway) with sign-up, login, ranking and score history.",
    },
    problem: {
      ko: "흩어져 있던 미니게임들을 하나의 서비스로 묶고, 사용자별 점수와 랭킹을 관리할 방법이 필요했습니다.",
      en: "Scattered mini-games needed to be unified into one service with per-user scores and rankings.",
    },
    solution: {
      ko: "Svelte + Vite로 SPA를 구성하고 라우팅·상태관리(store)를 도입, 백엔드 API와 연동해 사용자 인증과 랭킹·기록 저장 기능을 구현했습니다.",
      en: "Built an SPA with Svelte + Vite with routing and a store, integrating a backend API for auth, rankings and score history.",
    },
    result: {
      ko: "여러 게임을 하나의 계정으로 즐기고 순위를 겨룰 수 있는 완성형 플랫폼을 구현했습니다. (실제 성과·이용 수치가 있다면 여기에 추가)",
      en: "Delivered a complete platform where users play multiple games under one account and compete on leaderboards.",
    },
    tech: ["Svelte", "Vite", "JavaScript", "REST API"],
    github: "https://github.com/WongyuKoh/KWG",
    demo: "",
    image: "",
    featured: true,
  },
  {
    title: { ko: "프로젝트 제목 2", en: "Project Title 2" },
    period: "2023.xx – 2023.xx",
    summary: {
      ko: "프로젝트를 한 문장으로 요약하세요.",
      en: "Summarize the project in one sentence.",
    },
    problem: {
      ko: "어떤 문제를 풀려고 했나요?",
      en: "What problem were you solving?",
    },
    solution: {
      ko: "어떻게 접근하고 무엇을 만들었나요? 사용한 기술을 함께 설명하세요.",
      en: "How did you approach it and what did you build?",
    },
    result: {
      ko: "결과와 성과를 (가능하면 숫자로) 적으세요.",
      en: "Describe the outcome and impact, ideally with numbers.",
    },
    tech: ["React", "TypeScript", "Node.js"],
    github: "",
    demo: "",
    image: "",
    featured: false,
  },
  {
    title: { ko: "프로젝트 제목 3", en: "Project Title 3" },
    period: "2023.xx",
    summary: {
      ko: "프로젝트를 한 문장으로 요약하세요.",
      en: "Summarize the project in one sentence.",
    },
    problem: { ko: "어떤 문제를 풀려고 했나요?", en: "What problem were you solving?" },
    solution: { ko: "어떻게 해결했나요?", en: "How did you solve it?" },
    result: { ko: "결과는 어땠나요?", en: "What was the outcome?" },
    tech: ["Python", "FastAPI"],
    github: "",
    demo: "",
    image: "",
    featured: false,
  },
];
