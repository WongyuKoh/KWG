// framer-motion: 애니메이션 라이브러리. motion.div = "애니메이션 능력이 붙은 div"
import { motion } from "framer-motion";
// ReactNode: "React가 그릴 수 있는 모든 것"(태그, 문자열, 컴포넌트...) 타입 — children의 타입으로 사용
import type { ReactNode } from "react";

// ============================================================
// Reveal — 스크롤 등장 애니메이션 래퍼 (React 아일랜드)
// ============================================================
// 감싼 내용이 화면에 들어오는 순간 "아래에서 24px 떠오르며 페이드인"합니다.
// Astro 쪽에서 <Reveal client:visible>...</Reveal>로 사용:
//   client:visible = 이 요소가 뷰포트에 보일 때에야 JS를 로드 → 초기 로딩 가벼움
// 각 옵션의 의미:
//   initial     시작 상태 (투명 + 아래로 24px)
//   whileInView 화면에 들어왔을 때 도달할 상태 (불투명 + 제자리)
//   viewport    once: 한 번만 실행(스크롤 다시 올려도 재생 안 함)
//               margin: -60px → 요소가 60px 더 들어온 뒤에 발동(너무 일찍 터지는 것 방지)
//   transition  0.5초, 커스텀 이징(빠르게 시작해 부드럽게 정지), delay로 시차 연출 가능
export default function Reveal({
  children, // 태그 사이에 감싼 내용물 (React에서 slot에 해당하는 개념)
  delay = 0, // 지연 시간(초). 기본 0 — 여러 개를 계단식으로 등장시킬 때 0.1, 0.2… 식으로 사용
}: {
  children?: ReactNode;
  delay?: number;
}) {
  // 반환값: children을 감싼 motion.div — 이 div가 스스로 opacity/y를 애니메이션함
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }} // 시작: 완전 투명, 원래 자리보다 24px 아래
      whileInView={{ opacity: 1, y: 0 }} // 목표: 완전 불투명, 제자리 (뷰포트 진입 시 시작)
      viewport={{ once: true, margin: "-60px" }} // 1회만 + 60px 여유를 두고 발동
      transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1], delay }} // ease 배열 = 베지어 곡선 좌표
    >
      {children}
    </motion.div>
  );
}
