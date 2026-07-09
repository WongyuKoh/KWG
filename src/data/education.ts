import type { Lang } from "../i18n/ui";

type L10n = Record<Lang, string>;
type L10n_array = Record<Lang, Array<string>>;

// 학력 — 배열 원소 하나 = 카드 하나 (보통 최신 학력이 위)
export const education: {
  school: L10n; // 학교 이름
  degree?: L10n; // 학위·전공 (예: 컴퓨터공학과 학사)
  period: string; // 재학 기간 (자유 형식, 언어 공통)
  desc?: L10n_array; // 부가 설명 — 주요 과목·학점·활동 등 (선택)
}[] = [
  {
    school: { ko: "광주과학기술원", en: "GIST" },
    degree: { ko: "도전탐색과정", en: "hallenge and Exploration Program" },
    period: "2026.03 ~ ",
    desc: {
      ko: ["학생자치회 INOFOTEAM 소속 부원(2026 ~ )"],
      en: ["Major, key courses, GPA, activities, etc. (optional)"],
    },
  },
  {
    school: { ko: "운호고등학교", en: "unho high school" },
	degree : { ko : "56기 졸업생", en : "56th Graduate"},
    period: "2023.03 - 2026.02",
	desc: {
      ko: [
			"2024년 학생회 소속 IT융합신문부 차장",
			"2025년 학생회 소속 IT융합신문부 부장(총괄)"
		],
      en: [
			"Deputy Head of the IT Convergence Newspaper Department (Student Council) 2024",
			"Head of the IT Convergence Newspaper Department (Student Council), 2025"
		],
    },
  },
];
