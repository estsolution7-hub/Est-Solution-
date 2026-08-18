"use client";

import { useEffect } from "react";
import { DetailShell } from "../detail-shell";
import { useLanguage } from "../use-language";

export default function PrivacyPage() {
  const [, , korean] = useLanguage();

  useEffect(() => {
    document.title = korean ? "이에스티솔루션 | 개인정보 처리방침" : "EST Solution | Privacy";
  }, [korean]);

  return (
    <DetailShell
      eyebrow={korean ? "개인정보" : "PRIVACY"}
      title={korean ? "개인정보 처리방침" : "Privacy policy"}
      intro={korean
        ? "웹사이트 문의 양식을 통해 제출하신 정보는 견적, 기술 상담, 연구 협력 회신에만 사용합니다."
        : "Information submitted through the website inquiry form is used only to reply to quotes, technical consultations, and research partnerships."}
    >
      <div className="detail-content">
        <section className="detail-intro">
          <h2>{korean ? "수집 항목" : "What we collect"}</h2>
          <p>{korean
            ? "회사·기관명, 담당자명, 이메일, 선택 전화번호, 문의 유형, 메시지. 양식은 FormSubmit을 통해 estsolution1@naver.com으로 전달됩니다."
            : "Company or institution, contact name, email, optional phone, inquiry type, and message. The form is delivered via FormSubmit to estsolution1@naver.com."}</p>
        </section>
        <section className="detail-section">
          <h2>{korean ? "보관과 문의" : "Retention and requests"}</h2>
          <p>{korean
            ? "영업 목적의 회신에 필요한 기간만 보관합니다. 삭제를 원하시면 062-972-0823 또는 estsolution1@naver.com으로 연락해 주십시오."
            : "We keep inquiries only as long as needed to respond. To request deletion, call 062-972-0823 or email estsolution1@naver.com."}</p>
        </section>
      </div>
    </DetailShell>
  );
}
