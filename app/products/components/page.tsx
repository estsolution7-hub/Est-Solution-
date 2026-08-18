"use client";

import { useEffect } from "react";
import { DetailShell } from "../../detail-shell";
import { useLanguage } from "../../use-language";

export default function ComponentsPage() {
  const [, , korean] = useLanguage();
  useEffect(() => {
    document.title = korean ? "이에스티솔루션 | 핵심 부품" : "EST Solution | Core Components";
  }, [korean]);

  return <DetailShell
    eyebrow={korean ? "핵심 부품" : "CORE COMPONENTS"}
    title={korean ? "성능을 좌우하는 계면을 직접 다룹니다." : "Control the interfaces that control performance."}
    intro={korean ? "촉매, MEA, 전해질막, Ti-PTL, 스택을 한 체인으로 개발해 반복 시간과 수입 부품 의존을 줄입니다." : "EST Solution connects catalyst, MEA, membrane, Ti-PTL and stack development to reduce iteration time and dependence on imported components."}
  >
    <div className="detail-content">
      <section className="detail-intro">
        <h2>{korean ? "하나의 기술 체인으로 함께 개발합니다." : "One technical chain, developed together."}</h2>
        <p>{korean
          ? "수전해 성능은 서로 맞물린 여러 층에 달려 있습니다. 연결된 시스템으로 다루면 촉매 담지량, 전기화학 활성, 기체 이송, 막 내구성, 스택 구조를 같은 목표에 맞춰 조율할 수 있습니다."
          : "Water-electrolysis performance depends on many closely coupled layers. Treating them as a connected system makes it possible to tune catalyst loading, electrochemical activity, gas transport, membrane durability and stack architecture around the same application goal."}</p>
      </section>
      <section className="detail-section">
        <div className="eyebrow"><span /> {korean ? "자체 개발 범위" : "IN-HOUSE SET"}</div>
        <h2>{korean ? "다섯 가지 자체 개발 영역." : "Five areas of in-house development."}</h2>
        <div className="feature-grid">
          <article><small>{korean ? "촉매" : "CATALYST"}</small><h3>{korean ? "낮은 귀금속 담지" : "Low precious-metal loading"}</h3><p>{korean ? "고활성 촉매로 고가 소재 사용을 줄입니다." : "High-activity catalyst development focused on lowering expensive material use."}</p></article>
          <article><small>MEA</small><h3>{korean ? "대면적 제조" : "Large-area manufacturing"}</h3><p>{korean ? "높은 전류밀도 MEA. 제조 수율은 약 87%로 보고됩니다." : "High-current-density MEA work with reported manufacturing yield of approximately 87%."}</p></article>
          <article><small>{korean ? "전해질막" : "MEMBRANE"}</small><h3>{korean ? "성능과 내구성" : "Performance and durability"}</h3><p>{korean ? "낮은 수소 크로스오버와 긴 수명을 목표로 한 탄화수소막." : "Hydrocarbon membrane development aimed at low hydrogen crossover and longer operating life."}</p></article>
          <article><small>TI-PTL</small><h3>{korean ? "제어된 기공 구조" : "Controlled pore structure"}</h3><p>{korean ? "촉매층과의 접촉과 물질 이동을 개선하는 다공성 이송층." : "Porous transport-layer engineering designed to improve contact and transport at the catalyst layer."}</p></article>
          <article><small>{korean ? "스택" : "STACK"}</small><h3>{korean ? "맞춤 구조" : "Customized architecture"}</h3><p>{korean ? "필요 용량과 운전 환경에 맞춘 부품 선정과 형상." : "Component selection and geometry tailored to the required capacity and operating environment."}</p></article>
          <article><small>{korean ? "통합" : "INTEGRATION"}</small><h3>{korean ? "짧은 반복 주기" : "Shorter iteration cycles"}</h3><p>{korean ? "소재 시험부터 시스템 성능까지 개발 피드백을 공유합니다." : "Shared development feedback from material testing through system performance."}</p></article>
        </div>
      </section>
      <section className="detail-media">
        <img src="/ti-ptl-diagram.webp" alt={korean ? "대구경과 다중 스케일 다공성 티타늄 이송층 비교" : "Comparison of large-pore and multi-scale porous titanium transport layers"} loading="lazy" decoding="async" />
        <div className="detail-media-copy">
          <div className="eyebrow"><span /> {korean ? "Ti-PTL 개념" : "TI-PTL CONCEPT"}</div>
          <h2>{korean ? "중요한 곳에서 이송합니다." : "Transport where it matters."}</h2>
          <p>{korean ? "기공 크기를 섞으면 티타늄 이송층과 촉매층 계면이 좋아집니다. 균일 대공극 구조보다 기체와 물을 더 제어할 수 있습니다." : "A tailored mix of pore sizes can improve the interface between the titanium transport layer and catalyst layer. This supports more controlled gas and water transport than a uniform large-pore structure."}</p>
        </div>
      </section>
      <p className="results-note">{korean ? "성능·수율 수치는 브로슈어 기준 개발 결과이며, 상용 구성에서는 확인이 필요합니다." : "Performance and yield figures are brochure-reported development results and require confirmation for a specific commercial configuration."}</p>
    </div>
  </DetailShell>;
}
