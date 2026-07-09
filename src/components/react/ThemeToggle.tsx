// useState: 컴포넌트 안에서 바뀌는 값(상태) 저장 / useEffect: 렌더링 후에 부수 작업 실행
import { useEffect, useState } from "react";

// ============================================================
// ThemeToggle — 다크/라이트 모드 전환 버튼 (React 아일랜드)
// ============================================================
// 동작 원리 (Tailwind의 class 기반 다크모드):
//   <html class="dark"> 가 있으면 dark: 접두사 스타일이 켜집니다.
//   이 버튼은 그 클래스를 켜고 끄며, 선택을 localStorage("theme")에 저장합니다.
//   다음 방문 때는 Base.astro의 인라인 스크립트가 저장값을 읽어
//   페이지가 그려지기 전에 클래스를 미리 적용합니다(깜빡임 방지).
// 역할 분담: 초기 적용 = Base.astro / 전환 + 저장 = 이 컴포넌트.
export default function ThemeToggle({ label = "Toggle dark mode" }: { label?: string }) {
  // dark: "지금 다크모드인가" — 어떤 아이콘(해/달)을 보여줄지 결정하는 상태
  const [dark, setDark] = useState(false);
  // mounted: "브라우저에서 실제로 실행 중인가" — 서버 렌더링 단계와 구분하기 위한 플래그
  const [mounted, setMounted] = useState(false);

  // useEffect(fn, []): 빈 배열 = "처음 화면에 붙은 직후 딱 1번" 실행
  // 서버에서 HTML을 만들 때는 document가 없으므로, 실제 <html>의 dark 여부는
  // 브라우저에 도착한 뒤 여기서 읽어와 상태를 동기화합니다.
  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark")); // 현재 클래스 유무 → 상태 반영
    setMounted(true); // "이제 브라우저다" 표시 → 아이콘 렌더링 허용
  }, []);

  // 버튼 클릭 시 실행되는 함수
  const toggle = () => {
    const el = document.documentElement; // <html> 태그
    const next = !el.classList.contains("dark"); // 다음 상태 = 지금의 반대
    el.classList.toggle("dark", next); // 클래스 부착/제거 → 화면 즉시 전환
    localStorage.setItem("theme", next ? "dark" : "light"); // 선택 저장 → 새로고침·재방문에도 유지
    setDark(next); // 아이콘도 갱신
  };

  // 반환값: 버튼 하나. 클릭하면 toggle 실행
  return (
    <button
      type="button" // 폼 제출 방지(버튼 기본형은 submit이므로 명시)
      onClick={toggle}
      aria-label={label} // 스크린리더가 읽을 이름 (아이콘뿐인 버튼이라 필수)
      title={label} // 마우스 올리면 뜨는 툴팁
      className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-slate-600 transition hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
    >
      {/* 하이드레이션 전에는 빈 아이콘으로 깜빡임 방지
          (서버 HTML과 브라우저 첫 렌더링이 달라지면 React가 경고/깜빡임 → mounted 전엔 아무것도 안 그림) */}
      {mounted && dark ? (
        // 다크모드일 때 → 해 아이콘 ("누르면 밝아진다"는 의미)
        // circle = 해의 몸통, path의 M12 2v2 같은 조각들 = 8방향 햇살
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
        </svg>
      ) : (
        // 라이트모드일 때 → 달 아이콘. path = 초승달 실루엣 곡선
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
        </svg>
      )}
    </button>
  );
}
