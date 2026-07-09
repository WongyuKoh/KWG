// ============================================================
// withBase — public/ 파일 경로에 배포 하위경로를 붙여주는 헬퍼
// ============================================================
// 왜 필요한가:
//   이 사이트는 GitHub Pages "프로젝트 페이지"라서 도메인 루트가 아니라
//   https://WongyuKoh.github.io/KWG/ 아래에 배포됩니다.
//   그래서 "/favicon.png"처럼 절대경로를 쓰면 /KWG/를 빠뜨려 404가 납니다.
// 어떻게 동작하나:
//   astro.config.mjs의 base("/KWG")가 import.meta.env.BASE_URL로 들어오는데,
//   환경에 따라 끝 슬래시 유무가 달라서("/KWG" vs "/KWG/") 그대로 이어붙이면
//   "/KWGresume.pdf" 같은 깨진 경로가 생길 수 있습니다.
//   → 양쪽 슬래시를 정리한 뒤 정확히 하나로 합칩니다.
// 예) withBase("resume.pdf") → "/KWG/resume.pdf"
// public/ 안의 파일을 참조할 때는 항상 이 함수를 거치세요.
export function withBase(path: string): string {
  // import.meta.env.BASE_URL: astro.config.mjs의 base 값("/KWG")을 빌드 시 주입받는 내장 환경변수
  // .replace(/\/$/, ""): 정규식 /\/$/ = "문자열 끝의 슬래시" → 있으면 제거 ("/KWG/" → "/KWG")
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  // 정규식 /^\// = "문자열 맨 앞의 슬래시" → 제거 ("/resume.pdf" → "resume.pdf")
  // 호출자가 앞슬래시를 붙였든 안 붙였든 결과가 같아지게 정규화
  const clean = path.replace(/^\//, "");
  // 템플릿 리터럴로 "base + / + 경로" 조합 → 슬래시가 정확히 1개인 완성 경로를 반환
  return `${base}/${clean}`;
}
