import type { Lang } from "../i18n/ui";

// 자기소개 문단 (여러 줄 가능). 한/영 각각 작성.
// Record<Lang, string[]> = { ko: [문단들], en: [문단들] } 형태.
// 배열의 문자열 1개 = 화면의 <p> 문단 1개 — 문단을 늘리려면 문자열을 추가하면 됨.
export const about: Record<Lang, string[]> = {
  ko: [
    "사용자에게 실제로 가치를 주는 제품을 만드는 데 관심이 많은 개발자입니다. 문제의 원인을 끝까지 파고들어 근본적으로 해결하는 것을 좋아합니다.",
    "새로운 기술을 빠르게 학습하고, 배운 것을 팀과 나누며 함께 성장하는 문화를 지향합니다.",
  ],
  en: [
    "I'm a developer passionate about building products that deliver real value to users. I enjoy digging into the root cause of a problem and solving it fundamentally.",
    "I learn new technologies quickly and value a culture of sharing knowledge and growing together with the team.",
  ],
};
