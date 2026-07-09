import type { Lang } from "../i18n/ui";

type L10n = Record<Lang, string>;

// 수상, 자격증, 대외활동, 오픈소스 기여 등.
export const achievements: {
  title: L10n; // 수상·자격 이름 (카드 제목)
  issuer: L10n; // 발급·주최 기관 (민트색으로 표시)
  date: string; // 취득·수상 시기 (자유 형식, 언어 공통)
  desc: L10n; // 한 줄 설명 — 무엇을 했고 왜 인정받았는지
}[] = [
  {
    title: { ko: "정보처리기사 (예시)", en: "Engineer Information Processing (example)" },
    issuer: { ko: "한국산업인력공단", en: "HRD Korea" },
    date: "2023.06",
    desc: {
      ko: "자격증 / 수상 / 활동 내용을 간단히 설명하세요.",
      en: "Briefly describe the certificate / award / activity.",
    },
  },
  {
    title: { ko: "OO 해커톤 우수상 (예시)", en: "OO Hackathon, Excellence Award (example)" },
    issuer: { ko: "주최 기관", en: "Host Organization" },
    date: "2023.11",
    desc: {
      ko: "무엇을 만들었고 왜 인정받았는지 적으세요.",
      en: "Describe what you built and why it was recognized.",
    },
  },
];
