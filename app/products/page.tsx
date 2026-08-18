"use client";

import { useEffect, useRef } from "react";
import { DetailShell } from "../detail-shell";
import { SectionSeam } from "../section-seam";
import { useLanguage } from "../use-language";
import { ProductSystemsSection } from "./product-systems-section";
import { ApplicationsSection } from "./applications-section";
import { IconArrowRight, IconBolt, IconCylinder, IconMapPin } from "../icons";

const components = [
  { src: "/images/technology/enhanced_catalyst.webp", name: "Catalyst", nameKr: "촉매", alt: "EST Solution catalyst material" },
  { src: "/images/technology/enhanced_mea.webp", name: "MEA", nameKr: "막전극접합체 (MEA)", alt: "EST Solution membrane electrode assembly" },
  { src: "/images/technology/enhanced_ptl.webp", name: "Ti-PTL", nameKr: "티타늄 이송층 (Ti-PTL)", alt: "EST Solution titanium porous transport layer" },
  { src: "/images/technology/enhanced_cell.webp", name: "Electrolyte membrane", nameKr: "전해질막", alt: "EST Solution assembled cell with electrolyte membrane" },
];

const neohydFeatures = [
  { Icon: IconBolt, title: "Produces on-site", titleKr: "현장에서 직접 생산",
    body: "Electrolysis happens in the unit itself, no separate plant needed.",
    bodyKr: "별도 설비 없이 유닛 내부에서 수전해가 이루어집니다." },
  { Icon: IconCylinder, title: "Stores in cartridges", titleKr: "카트리지에 저장",
    body: "Hydrogen is captured and held for later use, not just piped out.",
    bodyKr: "생산한 수소를 배관으로 흘려보내지 않고 저장해 두었다가 필요할 때 사용합니다." },
  { Icon: IconMapPin, title: "Deploys off-grid", titleKr: "오프그리드 배치",
    body: "Serves as emergency or backup power where grid access is limited.",
    bodyKr: "전력망 접근이 어려운 곳에서 비상 전원이나 예비 전원으로 활용됩니다." },
];

export default function ProductsPage() {
  const [, , korean] = useLanguage();
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.title = korean ? "이에스티솔루션 | 수전해 제품" : "EST Solution | Electrolysis Products";
  }, [korean]);

  useEffect(() => {
    const bar = progressRef.current;
    if (!bar) return;
    let frame = 0;
    const update = () => {
      frame = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      bar.style.transform = `scaleX(${max > 0 ? Math.min(window.scrollY / max, 1) : 0})`;
    };
    const onScroll = () => { if (!frame) frame = window.requestAnimationFrame(update); };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    const items = Array.from(document.querySelectorAll<HTMLElement>(".reveal, .reveal-children"));
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      items.forEach((item) => item.classList.add("is-visible"));
      return;
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    }, { threshold: 0, rootMargin: "120px 0px 120px 0px" });
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, [korean]);


  return <DetailShell
    eyebrow="PRODUCTS"
    title={korean ? "현장에 맞는 수전해 시스템." : "Electrolysis systems built for the site."}
    intro={korean ? "수전해 시스템, 자체 핵심 부품, 현장 충전, 그리고 적용 분야." : "Electrolysis systems, in-house core components, on-site dispensing, and the applications they enable."}
    closingCta={
      <section className="products-closing-cta reveal">
        <div className="products-closing-copy">
          <p className="products-closing-kicker">{korean ? "다음 단계" : "NEXT STEP"}</p>
          <h2>{korean ? <>프로젝트를 알려주세요.<br /><span>용량은 저희가 산정합니다.</span></> : <>Tell us your project.<br /><span>We&rsquo;ll size the system.</span></>}</h2>
          <p className="products-closing-sub">{korean
            ? "필요한 수소량과 설치 공간, 가용 전력만 알려주시면 2.5kW부터 20kW까지 적합한 구성을 제안해 드립니다."
            : "Tell us the hydrogen you need, the space you have and the power available. We’ll come back with a configuration from 2.5 kW to 20 kW."}</p>
        </div>
        <div className="products-closing-side">
          <a className="products-closing-button" href="/contact">{korean ? "견적 요청" : "Request a quote"} <IconArrowRight size={17} stroke={1.9} aria-hidden="true" /></a>
          <p className="products-closing-note">{korean ? "영업일 기준 2일 이내 회신 · 현장 실사 요청 가능" : "Response within 2 business days · Site assessment available"}</p>
        </div>
      </section>
    }
    hero={
      <section className="products-hero">
        <div className="products-hero-copy">
          <p className="products-hero-eyebrow">{korean ? "제품" : "Products"}</p>
          <h1>{korean ? <>현장에 맞게 제작합니다.<br />오래 쓰도록 만듭니다.</> : <>Made for your project.<br />Built to last.</>}</h1>
          <p>{korean
            ? <><strong>맞춤 용량 설계</strong>와 <strong>티타늄급 핵심 부품</strong>을 2.5kW부터 20kW까지 직접 제조합니다.</>
            : <><strong>Customizable sizing</strong> and <strong>titanium-grade components</strong>, manufactured in-house from 2.5kW to 20kW.</>}</p>
          <div className="products-hero-actions">
            <a href="#products">{korean ? "수전해 시스템 보기" : "View electrolysis systems"}</a>
            <a href="/contact">{korean ? "견적 요청" : "Request a quote"}</a>
          </div>
        </div>
      </section>
    }>
    <div className="scroll-progress" ref={progressRef} aria-hidden="true" />
    <ProductSystemsSection />
    <SectionSeam tone="light" size="lg" from="right" draw molecules />
    <div className="detail-content products-content nav-section-stack">
      <section className="titanium-teaser nav-target reveal" id="components">
        <p className="section-kicker"><span className="section-kicker-num">02</span>{korean ? "자체 제조" : "BUILT IN-HOUSE"}</p>
        <h2 className="section-hook">
          {korean ? "모든 핵심 부품을 " : "Every core component, "}
          <span className="ink-mark">{korean ? "직접 만듭니다" : "engineered in-house"}
            <svg className="ink-stroke" viewBox="0 0 90 12" preserveAspectRatio="none" aria-hidden="true" focusable="false"><path d="M2 8 Q30 2 88 6" fill="none" strokeWidth="3" strokeLinecap="round" /></svg>
          </span>
        </h2>
        <p>{korean
          ? "촉매부터 티타늄 분리판까지, 모든 용량의 EST 시스템이 동일한 소재와 제조 기준을 공유합니다. 외부에서 조달하지 않고 직접 생산하기 때문에 품질이 일정하고 공급망 리스크가 줄어듭니다."
          : "From catalyst to titanium plates, every EST system — at every size — shares the same materials and manufacturing standard. Producing these in-house, rather than sourcing them, keeps quality consistent and cuts supply-chain risk."}</p>
        <div className="titanium-grid reveal-children">
          {components.map((item) => (
            <article key={item.name}>
              <div className="titanium-photo"><img src={item.src} alt={item.alt} loading="lazy" decoding="async" /></div>
              <h3>{korean ? item.nameKr : item.name}</h3>
            </article>
          ))}
        </div>
        <a className="titanium-link" href="/technology#core-technology">
          {korean ? "전체 기술 자료 보기" : "See the full technology breakdown"} <IconArrowRight size={16} stroke={1.8} aria-hidden="true" />
        </a>
      </section>

      <SectionSeam tone="light" size="md" draw />

      <section className="neohyd-section nav-target reveal" id="dispensing">
        <p className="section-kicker"><span className="section-kicker-num">03</span>{korean ? "이동형 배치" : "MOBILE DEPLOYMENT"}</p>
        <h2 className="section-hook">
          {korean ? "생산하고, 저장하고, " : "Produce it, store it, "}
          <span className="ink-mark">{korean ? "어디로든" : "take it anywhere"}
            <svg className="ink-stroke" viewBox="0 0 90 12" preserveAspectRatio="none" aria-hidden="true" focusable="false"><path d="M2 8 Q30 2 88 6" fill="none" strokeWidth="3" strokeLinecap="round" /></svg>
          </span>
        </h2>
        <p className="neohyd-intro">{korean
          ? "현장에서 그린수소를 직접 생산하고 카트리지에 저장하는 이동형 수전해 유닛입니다. 전력망이 닿지 않는 곳까지 에너지를 가져갑니다."
          : "A mobile electrolysis unit that produces green hydrogen on-site and stores it in cartridges — bringing power to places the grid doesn't reach."}</p>
        <div className="neohyd-visual"><img src="/images/products/neohyd-station.webp" alt="EST Solution mobile green-hydrogen production and cartridge storage truck" loading="lazy" decoding="async" /></div>
        <p className="neohyd-caption">{korean ? "이동형 그린수소 생산 · 카트리지 저장 유닛" : "Mobile green-hydrogen production and cartridge storage unit."}</p>
        <div className="neohyd-features reveal-children">
          {neohydFeatures.map(({ Icon, title, titleKr, body, bodyKr }) => (
            <article key={title}>
              <Icon size={22} stroke={1.7} aria-hidden="true" />
              <h3>{korean ? titleKr : title}</h3>
              <p>{korean ? bodyKr : body}</p>
            </article>
          ))}
        </div>
      </section>

      <SectionSeam tone="light" size="lg" from="right" draw molecules />

      <ApplicationsSection />
    </div>
  </DetailShell>;
}
