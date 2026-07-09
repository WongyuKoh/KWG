// ============================================================
// i18n(국제화) 사전 — 화면의 "고정 문구"를 언어별로 관리
// ============================================================
// 여기 있는 것: 섹션 제목, 내비 라벨, 버튼 문구 같은 UI 텍스트.
// 여기 없는 것: 경력·프로젝트 같은 "콘텐츠" → src/data/*.ts 에서 관리.
// 사용법: 컴포넌트에서 t(lang, "nav.about") 처럼 키로 조회합니다.
// 새 문구가 필요하면 ko와 en 양쪽에 같은 키를 추가하세요.
// (as const 덕분에 존재하지 않는 키를 쓰면 TypeScript가 빌드에서 잡아줍니다)

export type Lang = "ko" | "en"; // 지원 언어 목록 — 늘리면 이 유니온에 추가

export const ui = {
  ko: {
    "nav.about": "소개",
    "nav.skills": "기술 스택",
    "nav.experience": "경력",
    "nav.projects": "프로젝트",
    "nav.achievements": "실적",
    "nav.education": "학력",
    "nav.contact": "연락처",

    "hero.cta.resume": "이력서 PDF 다운로드",
    "hero.cta.contact": "연락하기",
    "hero.cta.github": "GitHub",

    "section.about.eyebrow": "About",
    "section.about.title": "자기소개",

    "section.skills.eyebrow": "Skills",
    "section.skills.title": "기술 스택",

    "section.experience.eyebrow": "Experience",
    "section.experience.title": "개발 경력",

    "section.projects.eyebrow": "Projects",
    "section.projects.title": "프로젝트",
    "projects.problem": "문제",
    "projects.solution": "해결",
    "projects.result": "결과",
    "projects.viewCode": "코드 보기",
    "projects.viewDemo": "데모 보기",

    "section.achievements.eyebrow": "Achievements",
    "section.achievements.title": "실적 · 수상 · 자격",

    "section.education.eyebrow": "Education",
    "section.education.title": "학력",

    "section.contact.eyebrow": "Contact",
    "section.contact.title": "연락처",
    "contact.desc": "함께 일하거나 궁금한 점이 있다면 편하게 연락 주세요.",
    "contact.email": "이메일",

    "footer.built": "이 사이트는 Astro · Tailwind CSS · Framer Motion 으로 제작되었습니다.",
    "theme.toggle": "다크 모드 전환",
  },
  en: {
    "nav.about": "About",
    "nav.skills": "Skills",
    "nav.experience": "Experience",
    "nav.projects": "Projects",
    "nav.achievements": "Achievements",
    "nav.education": "Education",
    "nav.contact": "Contact",

    "hero.cta.resume": "Download Resume (PDF)",
    "hero.cta.contact": "Get in touch",
    "hero.cta.github": "GitHub",

    "section.about.eyebrow": "About",
    "section.about.title": "About Me",

    "section.skills.eyebrow": "Skills",
    "section.skills.title": "Tech Stack",

    "section.experience.eyebrow": "Experience",
    "section.experience.title": "Work Experience",

    "section.projects.eyebrow": "Projects",
    "section.projects.title": "Projects",
    "projects.problem": "Problem",
    "projects.solution": "Solution",
    "projects.result": "Result",
    "projects.viewCode": "View Code",
    "projects.viewDemo": "Live Demo",

    "section.achievements.eyebrow": "Achievements",
    "section.achievements.title": "Achievements · Awards · Certs",

    "section.education.eyebrow": "Education",
    "section.education.title": "Education",

    "section.contact.eyebrow": "Contact",
    "section.contact.title": "Get in Touch",
    "contact.desc": "Feel free to reach out for work or any questions.",
    "contact.email": "Email",

    "footer.built": "Built with Astro · Tailwind CSS · Framer Motion.",
    "theme.toggle": "Toggle dark mode",
  },
} as const;

// t = translate(번역) 함수. 사용 예: t("ko", "nav.about") → "소개"
// 매개변수 타입 keyof (typeof ui)["ko"]의 의미:
//   typeof ui        = 위 사전 객체의 타입
//   (…)["ko"]        = 그중 한국어 사전 부분
//   keyof …          = "그 사전에 실제로 존재하는 키들"만 모은 유니온 타입
//   → t(lang, "nav.abuot") 같은 오타는 빌드(타입 검사) 단계에서 에러로 잡힘
export function t(lang: Lang, key: keyof (typeof ui)["ko"]): string {
  // ?? (널 병합 연산자): 왼쪽 값이 null/undefined일 때만 오른쪽을 사용
  // 조회 순서: ① 요청한 언어의 값 → ② 없으면 한국어 값(폴백) → ③ 그래도 없으면 키 이름 그대로
  // (③ 덕분에 최악의 경우에도 빈 화면 대신 "nav.about" 같은 키가 보여 디버깅이 쉬움)
  return ui[lang][key] ?? ui.ko[key] ?? String(key);
}
