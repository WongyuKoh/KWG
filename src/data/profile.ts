import type { Lang } from "../i18n/ui";

// L10n = { ko: "...", en: "..." } 형태 — 한/영 문구를 한 곳에서 관리
type L10n = Record<Lang, string>;
type showandlink = "show" | "link";
type S9k = Record<showandlink,string>;

// ============================================================
// profile — 사이트 전체에서 쓰이는 "나"에 대한 기본 정보
// ============================================================
// 사용처: Hero(이름·직무·소개·버튼), Contact(연락 카드), Footer(저작권).
// ⬇️ 여기를 본인 정보로 채우세요. 파일 저장만 하면 사이트 전체에 반영됩니다.
export const profile: {
  handle: string; // 닉네임 (브랜드 표기용)
  name: L10n; // 이름 — 히어로 제목과 푸터에 표시
  role: L10n; // 직무 한 줄 (예: 백엔드 개발자) — 이름 위 민트 라벨
  tagline: L10n; // 한 문장 자기소개 — 이름 아래 + 검색엔진 설명문으로도 사용
  location: L10n; // 거주 지역
  email?: S9k; // 공개용 이메일 — Contact 카드 (비우면 카드 숨김)
  github?: S9k; // GitHub 주소 — 히어로 아이콘 + Contact 카드 (비우면 숨김)
  instagram?: S9k; // Instagram 주소 (비우면 숨김)
  linkedin?: S9k; // LinkedIn 주소 (비우면 숨김)
  blog?: S9k; // 블로그 주소 (비우면 숨김)
  // public/ 폴더에 resume.pdf 를 넣으면 다운로드 버튼이 동작합니다. (비우면 버튼 숨김)
  resumePdf: string;
  
  // public/ 폴더의 프로필 사진 파일명. 비워두면(현재) KWG 로고 마크가 표시됩니다.
  photo: string;
} = {
  handle: "KWG",
  name: { ko: "고원규", en: "Wongyu Koh" },
  role: { ko: "풀스텍 개발자", en: "Full-Stack Developer" },
  tagline: {
    ko: "안정적이고 확장 가능한 서비스를 만드는 것을 좋아하는 개발자입니다.",
    en: "A developer who loves building reliable, scalable services.",
  },
  location: { ko: "대한민국, 광주", en: "Gwangju, South Korea" },
  email: {show : "joseph13ko15",link : "joseph13ko15@gmail.com"},
  github: {show : "KWG",link : "https://github.com/WongyuKoh"},
  instagram: {show:"joseph0528",link:"https://instagram.com/kjoseph0528"},
  blog: {show:"joseph0528",link:"https://joseph0528.tistory.com/"},
  resumePdf: "resume.pdf",
  photo: "",
};
