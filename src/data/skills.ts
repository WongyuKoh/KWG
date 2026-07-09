import type { Lang } from "../i18n/ui";

// 카테고리별 기술 스택. category는 한/영, items는 공통(기술명).
// 배열 원소 하나 = 화면의 카드 하나. category = 카드 제목, items = 카드 안의 칩들.
export const skillGroups: { category: Record<Lang, string>; items: string[] }[] = [
  {
    category: { ko: "언어", en: "Languages" },
    items: ["Python", "JavaScript", "TypeScript", "Java"],
  },
  {
    category: { ko: "프론트엔드", en: "Frontend" },
    items: ["Svelte", "React", "Astro", "HTML/CSS", "Tailwind CSS"],
  },
  {
    category: { ko: "백엔드", en: "Backend" },
    items: ["FastAPI", "Django", "Node.js", "REST API"],
  },
  {
    category: { ko: "데이터베이스", en: "Database" },
    items: ["PostgreSQL", "MySQL", "SQLite", "Redis"],
  },
  {
    category: { ko: "도구 · 인프라", en: "Tools · Infra" },
    items: ["Git", "GitHub Actions", "Docker", "AWS", "Linux"],
  },
];
