"use client";

import { useEffect } from "react";
import { DetailShell } from "../../detail-shell";
import { useLanguage } from "../../use-language";

export default function MobilePage() {
  const [, , korean] = useLanguage();
  useEffect(() => {
    document.title = korean ? "이에스티솔루션 | 이동형 수소" : "EST Solution | Mobile Hydrogen";
  }, [korean]);

  return <DetailShell
    eyebrow={korean ? "분산 에너지" : "DISTRIBUTED ENERGY"}
    title={korean ? "에너지가 필요한 곳에서 그린수소를 만듭니다." : "Green hydrogen where the energy is needed."}
    intro={korean ? "남은 재생전력을 수소로 바꿔 저장·실증·분산 공급에 쓰는 이동형 생산 개념입니다." : "A mobile, independent production concept converts available renewable electricity into hydrogen for storage, demonstration and distributed use."}
  >
    <div className="detail-content">
      <section className="detail-intro">
        <h2>{korean ? "생산을 수요에 가깝게." : "Move production closer to demand."}</h2>
        <p>{korean
          ? "남는 청정 전력으로 사용 지점 근처에서 수소를 생산·저장합니다. 산간, 도서, 현장 실증, 비상 지원처럼 중앙 인프라가 닿기 어려운 곳에 맞습니다."
          : "The mobile green-hydrogen system is designed around a simple idea: use otherwise idle clean electricity to produce and store hydrogen near the point of use. That opens possibilities for remote mountainous areas, islands, field demonstrations and emergency-support scenarios where centralized infrastructure is difficult to reach."}</p>
      </section>
      <section className="detail-media">
        <img src="/field-demonstration.webp" alt={korean ? "이동형 수소 시스템 현장 실증" : "EST Solution field demonstration of a mobile hydrogen system"} loading="lazy" decoding="async" />
        <div className="detail-media-copy">
          <div className="eyebrow"><span /> {korean ? "현장 검증" : "FIELD PROOF"}</div>
          <h2>{korean ? "눈으로 볼 수 있는 시스템." : "A system people can see."}</h2>
          <p>{korean ? "생산 설비, 저장, 공개 모니터링을 하나의 이동형 환경에 모았습니다. 복잡한 기술 이야기를 실제 운전으로 보여 줍니다." : "The demonstration installation brings production equipment, storage and public-facing monitoring into one transportable environment. It turns a complex technology story into a tangible operating experience."}</p>
        </div>
      </section>
      <section className="detail-section">
        <div className="eyebrow"><span /> {korean ? "적용" : "APPLICATIONS"}</div>
        <h2>{korean ? "분산 사용을 전제로 설계했습니다." : "Designed for distributed use."}</h2>
        <div className="feature-grid">
          <article><small>{korean ? "원격지" : "REMOTE SITES"}</small><h3>{korean ? "독립 공급" : "Independent supply"}</h3><p>{korean ? "전력망과 연료 인프라가 부족한 곳에서 청정 에너지 운전을 지원합니다." : "Support clean-energy operation where grid and fuel infrastructure are constrained."}</p></article>
          <article><small>{korean ? "비상" : "EMERGENCY"}</small><h3>{korean ? "저장 에너지" : "Stored energy access"}</h3><p>{korean ? "가용 전력을 나중에 쓸 수 있는 에너지 운반체로 바꿉니다." : "Convert available electricity into an energy carrier that can be stored for later use."}</p></article>
          <article><small>{korean ? "실증" : "DEMONSTRATION"}</small><h3>{korean ? "보이는 혁신" : "Visible innovation"}</h3><p>{korean ? "파트너, 지역사회, 기술 관계자에게 수소 생산을 가깝게 보여 줍니다." : "Bring hydrogen production closer to partners, communities and technical stakeholders."}</p></article>
        </div>
      </section>
      <section className="detail-media">
        <img src="/hydrogen-prototype.webp" alt={korean ? "이에스티 수소 생산 프로토타입" : "EST Solution hydrogen production prototype"} loading="lazy" decoding="async" />
        <div className="detail-media-copy">
          <div className="eyebrow"><span /> {korean ? "시스템 개발" : "SYSTEM DEVELOPMENT"}</div>
          <h2>{korean ? "스택에서 외함까지." : "From stack to enclosure."}</h2>
          <p>{korean ? "수전해 스택, 제어, 주변 설비를 하나의 실용 장비로 묶은 통합 프로토타입입니다." : "Integrated prototypes combine the electrolysis stack, controls and supporting balance-of-plant hardware into a practical equipment package."}</p>
        </div>
      </section>
    </div>
  </DetailShell>;
}
