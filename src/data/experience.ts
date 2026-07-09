import type { Lang } from "../i18n/ui";

type L10n = Record<Lang, string>;

// 개발 경력 (최신순으로 위에서 아래). highlights에는 정량적 성과를 넣으면 좋습니다.
// 배열 원소 하나 = 타임라인 항목 하나. 타입 뒤의 []가 "이 모양의 객체 여러 개"라는 뜻.
export const experiences: {
  company: L10n; // 회사 이름 (한/영)
  role: L10n; // 직무·직함 — 타임라인에서 굵게 표시되는 부분
  period: string; // 예: "2023.01 – 현재" — 자유 형식 문자열 (언어 공통이라 L10n 아님)
  location: L10n; // 근무 지역
  highlights: Record<Lang, string[]>; // 성과 불릿 — 언어별 "문자열 배열"(불릿 1개 = 문자열 1개)
  tech: string[]; // 사용 기술 칩 — 기술명은 언어 공통이라 그냥 문자열 배열
}[] = [
  {
    company: { ko: "회사 이름 (예: OO 테크)", en: "Company Name (e.g. OO Tech)" },
    role: { ko: "백엔드 개발자", en: "Backend Developer" },
    period: "2023.01 – 현재",
    location: { ko: "서울", en: "Seoul" },
    highlights: {
      ko: [
        "성과는 숫자로: 예) API 평균 응답 시간을 320ms → 180ms로 44% 단축",
        "담당한 기능과 기여를 구체적으로 서술하세요.",
        "협업 방식(코드 리뷰, 문서화 등)과 팀에 준 영향도 좋습니다.",
      ],
      en: [
        "Quantify impact: e.g. cut average API response time from 320ms to 180ms (-44%).",
        "Describe the features you owned and your concrete contributions.",
        "Mention collaboration (code reviews, docs) and team impact.",
      ],
    },
    tech: ["Python", "FastAPI", "PostgreSQL", "Docker"],
  },
  {
    company: { ko: "이전 회사 / 인턴 / 팀 프로젝트", en: "Previous Company / Internship" },
    role: { ko: "소프트웨어 엔지니어", en: "Software Engineer" },
    period: "2021.03 – 2022.12",
    location: { ko: "서울", en: "Seoul" },
    highlights: {
      ko: ["주요 업무와 배운 점을 간단히 정리하세요."],
      en: ["Summarize your main responsibilities and what you learned."],
    },
    tech: ["JavaScript", "React", "Node.js"],
  },
];
