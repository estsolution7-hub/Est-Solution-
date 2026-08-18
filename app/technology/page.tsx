"use client";

import { IconAlertTriangle, IconCheck, IconShip, IconTrendingDown, IconWavesElectricity } from "../icons";
import { useEffect, useRef } from "react";
import { DetailShell } from "../detail-shell";
import { SectionSeam } from "../section-seam";
import { useLanguage } from "../use-language";

const methods = [
  { method: "PEM", image: "/diag_pem.webp", alt: "PEM electrolysis cell diagram", note: "what we build", noteKr: "우리가 만드는 방식",
    strengths: ["High current density", "Compact", "Responds fast to variable renewables", "99.97–99.99% purity"],
    strengthsKr: ["높은 전류밀도", "소형", "재생에너지 변동에 빠르게 반응", "99.97–99.99% 순도"],
    tradeoffs: ["Needs precious-metal catalysts — the exact cost problem we solve"],
    tradeoffsKr: ["귀금속 촉매가 필요 — 우리가 해결하는 바로 그 원가 문제"], featured: true },
  { method: "AEC", image: "/diag_aec.webp", alt: "AEC electrolysis cell diagram",
    strengths: ["Most mature", "Lowest capital cost", "No precious metals"],
    strengthsKr: ["가장 성숙한 기술", "가장 낮은 초기 투자비", "귀금속 불필요"],
    tradeoffs: ["Low current density", "Slow response", "Bulky", "Liquid electrolyte"],
    tradeoffsKr: ["낮은 전류밀도", "느린 응답성", "큰 부피", "액체 전해질"] },
  { method: "AEM", image: "/diag_aem.webp", alt: "AEM electrolysis cell diagram",
    strengths: ["Avoids precious metals", "Lower material cost"],
    strengthsKr: ["귀금속 불필요", "낮은 소재 원가"],
    tradeoffs: ["Durability unproven at commercial scale."],
    tradeoffsKr: ["상용 규모에서 내구성 미검증"] },
  { method: "SOEC", image: "/diag_soec.webp", alt: "SOEC electrolysis cell diagram",
    strengths: ["Highest electrical efficiency of any method."],
    strengthsKr: ["모든 방식 중 가장 높은 전기 효율"],
    tradeoffs: ["700–850°C operation", "Material degradation", "Slow start-up"],
    tradeoffsKr: ["700–850°C 고온 운전", "소재 열화", "느린 기동"] },
];
const components = [
  { image: "/images/technology/enhanced_catalyst.webp", metric: "30%+", qualifier: "cost reduction", qualifierKr: "원가 절감", name: "Catalyst", nameKr: "촉매",
    description: "Low-noble-metal formulation with longer operating life. Precious-metal loading is the largest lever on PEM cost.",
    descriptionKr: "귀금속 사용을 최소화한 조성으로 수명을 늘렸습니다. 귀금속 담지량은 PEM 원가를 좌우하는 가장 큰 요소입니다." },
  { image: "/images/technology/enhanced_mea.webp", metric: "37%", qualifier: "cost reduction", qualifierKr: "원가 절감", name: "MEA", nameKr: "막전극접합체 (MEA)",
    description: "High current density with uniform large-area coating — more work per cell without adding material.",
    descriptionKr: "대면적 균일 코팅으로 높은 전류밀도를 구현합니다. 재료를 늘리지 않고 셀당 성능을 높였습니다." },
  { image: "/images/technology/enhanced_ptl.webp", metric: "25%", qualifier: "cost reduction", qualifierKr: "원가 절감", name: "Ti-PTL", nameKr: "티타늄 다공성 이송층 (Ti-PTL)",
    description: "Pore-size controlled titanium. Pore structure governs how water and gas move through the cell.",
    descriptionKr: "기공 크기를 제어한 티타늄입니다. 기공 구조가 셀 내부의 물과 기체 이동을 결정합니다." },
  { image: "/images/technology/enhanced_cell.webp", metric: "2×", qualifier: "vs Nafion", qualifierKr: "Nafion 대비", name: "Electrolyte membrane", nameKr: "전해질막",
    description: "Hydrocarbon-based, crossover ~1/4 of conventional PFSA — thinner membrane, double the durability.",
    descriptionKr: "탄화수소 기반으로 기존 PFSA 대비 크로스오버가 약 1/4 수준입니다. 더 얇으면서 내구성은 두 배입니다.",
    caption: "Assembled stack — membrane shown in situ", captionKr: "조립된 스택 — 전해질막이 장착된 상태" },
];
const roadmap = [
  { name: "Seawater electrolysis", nameKr: "해수 전해", Icon: IconWavesElectricity, image: "/images/technology/roadmap-seawater-v2.webp", alt: "Offshore wind turbines at sea",
    description: "Conventional electrolysis needs purified freshwater — a real constraint in coastal and water-scarce regions. Running directly on seawater removes that dependency and makes coastal production viable.",
    descriptionKr: "일반적인 수전해는 정제된 담수가 필요하며, 이는 연안이나 물이 부족한 지역에서 실질적인 제약이 됩니다. 해수를 직접 사용하면 그 의존성이 사라지고 연안 생산이 가능해집니다." },
  { name: "Hydrogen fuel cell vessels", nameKr: "수소 연료전지 선박", Icon: IconShip, image: "/images/technology/roadmap-vessels.webp", alt: "Small boats docked in a coastal harbor",
    description: "Hydrogen-powered leisure craft in Jeollanam-do, supplying clean hydrogen to vessels in the region's coastal waters. Boats operate far from hydrogen infrastructure — a natural fit for on-site production.",
    descriptionKr: "전라남도의 수소 추진 레저 선박에 청정 수소를 공급합니다. 선박은 수소 인프라에서 멀리 떨어져 운항하기 때문에 현장 생산이 특히 잘 맞습니다." },
];
function PemProcessDiagram({ korean }: { korean: boolean }) {
  return <svg className="pem-process-svg" viewBox="0 0 320 270" role="img" aria-label="Animated PEM electrolysis process: water enters the anode, protons cross the PEM membrane, and hydrogen exits the cathode">
    <path d="M115 50 V28 H205 V50" fill="none" stroke="#7898b8" strokeWidth="1.8" markerEnd="url(#arrowElecDown)" />
    <path className="pem-flow electron-flow" d="M115 50 V28 H205 V50" fill="none" stroke="#c9dced" strokeWidth="2.2" />
    <text x="115" y="19" textAnchor="middle" fontSize="9" fill="#c9dced">e⁻</text>
    <text x="205" y="19" textAnchor="middle" fontSize="9" fill="#c9dced">e⁻</text>
    <text x="24" y="94" fontSize="11" fill="#d8e7f2">H₂O</text>
    <path d="M55 91 H100" stroke="#6fd0f2" strokeWidth="4" markerEnd="url(#arrowBlue)" />
    <path className="pem-flow water-flow" d="M55 91 H100" stroke="#d4f4ff" strokeWidth="2" />
    <rect x="100" y="50" width="30" height="172" fill="#244466" />
    <circle className="pem-process-particle particle-water one" cx="115" cy="92" r="2.5" fill="#7bd8f6" />
    <circle className="pem-process-particle particle-water two" cx="110" cy="132" r="2.5" fill="#7bd8f6" />
    <circle className="pem-process-particle particle-water three" cx="120" cy="172" r="2.5" fill="#7bd8f6" />
    <text x="115" y="140" textAnchor="middle" fontSize="9" fill="#a9ddf3" transform="rotate(-90 115 140)">{korean ? "양극 (+)" : "Anode (+)"}</text>
    <rect x="130" y="50" width="60" height="172" fill="#10243e" stroke="#507399" strokeWidth="1" />
    <text x="160" y="74" textAnchor="middle" fontSize="10" fill="#c0e5f6" fontWeight="650">PEM</text>
    <text x="160" y="86" textAnchor="middle" fontSize="8" fill="#88a7c0">{korean ? "전해질막" : "membrane"}</text>
    <text x="160" y="130" textAnchor="middle" fontSize="12" fill="#f4a078" fontWeight="650">H⁺</text>
    <path d="M140 142 H180" stroke="#f0916a" strokeWidth="3" markerEnd="url(#arrowRed)" />
    <path className="pem-flow proton-flow" d="M140 142 H180" stroke="#ffd0bc" strokeWidth="2" />
    <rect x="190" y="50" width="30" height="172" fill="#244466" />
    <circle className="pem-process-particle particle-hydrogen one" cx="205" cy="97" r="2.5" fill="#9ee482" />
    <circle className="pem-process-particle particle-hydrogen two" cx="200" cy="137" r="2.5" fill="#9ee482" />
    <circle className="pem-process-particle particle-hydrogen three" cx="210" cy="177" r="2.5" fill="#9ee482" />
    <text x="205" y="140" textAnchor="middle" fontSize="9" fill="#a9eb8f" transform="rotate(-90 205 140)">{korean ? "음극 (−)" : "Cathode (-)"}</text>
    <path d="M100 178 V218 H42" fill="none" stroke="#b7c8d6" strokeWidth="3" markerEnd="url(#arrowGray)" />
    <path className="pem-flow oxygen-flow" d="M100 178 V218 H42" fill="none" stroke="#f0f7fb" strokeWidth="1.6" />
    <text x="19" y="222" fontSize="11" fill="#d8e7f2">O₂</text>
    <path d="M220 110 H294" stroke="#96dd78" strokeWidth="5" markerEnd="url(#arrowGreen)" />
    <path className="pem-flow hydrogen-flow" d="M220 110 H294" stroke="#e0ffd2" strokeWidth="2.2" />
    <text x="291" y="96" textAnchor="middle" fontSize="11" fill="#d8e7f2">H₂</text>
    <text x="160" y="256" textAnchor="middle" fontSize="9" fill="#8ba8c1">{korean ? "외부 회로가 전자를 막 바깥으로 운반합니다" : "External circuit carries electrons around the membrane"}</text>
    <defs>
      <marker id="arrowBlue" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto"><path d="M0,0 L10,5 L0,10 Z" fill="#6fd0f2" /></marker>
      <marker id="arrowRed" markerUnits="userSpaceOnUse" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0,0 L9,4.5 L0,9 Z" fill="#f0916a" /></marker>
      <marker id="arrowGray" markerUnits="userSpaceOnUse" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0,0 L9,4.5 L0,9 Z" fill="#b7c8d6" /></marker>
      <marker id="arrowGreen" markerUnits="userSpaceOnUse" markerWidth="12" markerHeight="12" refX="9" refY="6" orient="auto"><path d="M0,0 L12,6 L0,12 Z" fill="#96dd78" /></marker>
      <marker id="arrowElecDown" markerUnits="userSpaceOnUse" markerWidth="7" markerHeight="6" refX="3.5" refY="1" orient="auto"><path d="M0,0 L3.5,6 L7,0 Z" fill="#b9cce0" /></marker>
    </defs>
  </svg>;
}

export default function TechnologyPage() {
  const [, , korean] = useLanguage();
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.title = korean
      ? "이에스티솔루션 | PEM 수전해 기술"
      : "EST Solution | PEM Electrolysis Technology";
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
    const items = Array.from(document.querySelectorAll<HTMLElement>(".technology-reveal, .reveal"));
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

  return <DetailShell eyebrow="TECHNOLOGY" title="PEM technology by EST Solution" intro="We engineer the stack from catalyst to complete system." hero={<section className="technology-hero"><div className="technology-hero-overlay" /><div className="technology-hero-copy"><p className="technology-hero-kicker">{korean ? "PEM 수전해 · 대한민국 자체 개발" : "PEM ELECTROLYSIS · ENGINEERED IN KOREA"}</p><h1>{korean ? <>스택을 직접 설계합니다.<br /><span>수소 원가는 낮아집니다.</span></> : <>We engineer the stack.<br /><span>You get lower-cost hydrogen.</span></>}</h1><p>{korean ? "촉매부터 완성형 PEM 시스템까지, 원가와 성능과 수명을 좌우하는 기술을 직접 보유하고 있습니다." : "From catalyst to complete PEM systems, we control the technology that drives cost, performance and durability."}</p><div className="technology-hero-actions"><a href="#production-system">{korean ? "작동 원리 보기" : "See how it works"}</a><a href="/products">{korean ? "제품 살펴보기" : "Explore our systems"}</a></div></div></section>}>
    <div className="scroll-progress" ref={progressRef} aria-hidden="true" />
    <div className="technology-page-content">
      <section className="technology-section technology-why-section technology-reveal nav-target" id="why-green-hydrogen">
        <div className="why-heading">
          <div><div className="why-eyebrow">{korean ? "과제" : "THE CHALLENGE"}</div><h2>{korean ? <>수소는 생산 방식이 깨끗할 때 <span>비로소 깨끗합니다.</span></> : <>Hydrogen is only clean when <span>its production is clean.</span></>}</h2></div>
          <p>{korean ? "현재 대부분의 수소는 여전히 화석연료로 만들어집니다. 그린수소는 이 탄소 집약적 공정을 재생에너지와 물로 대체해, 직접적인 CO₂ 배출 없이 에너지를 생산합니다." : "Most hydrogen is still made from fossil fuels. Green hydrogen replaces that carbon-heavy process with renewable electricity and water—producing energy without direct CO₂ emissions."}</p>
        </div>
        <div className="hydrogen-comparison" aria-label="Carbon emissions by hydrogen production type">
          <article className="hydrogen-card gray"><small>{korean ? "화석연료 기반" : "FOSSIL-BASED"}</small><strong>~11<span>kg</span></strong><p>{korean ? "수소 1kg당 CO₂" : "CO₂ per kg of H₂"}</p><h3>{korean ? "그레이수소" : "Gray hydrogen"}</h3></article>
          <article className="hydrogen-card blue"><small>{korean ? "탄소 포집" : "CARBON CAPTURE"}</small><strong>3.5–3.9<span>kg</span></strong><p>{korean ? "수소 1kg당 CO₂" : "CO₂ per kg of H₂"}</p><h3>{korean ? "블루수소" : "Blue hydrogen"}</h3></article>
          <article className="hydrogen-card green"><small>{korean ? "재생에너지 기반" : "RENEWABLE-POWERED"}</small><strong>0<span>kg</span></strong><p>{korean ? "수소 1kg당 직접 CO₂" : "Direct CO₂ per kg of H₂"}</p><h3>{korean ? "그린수소" : "Green hydrogen"}</h3></article>
        </div>
        <p className="why-note">{korean ? "배출량 수치는 이에스티솔루션 회사소개 자료를 기준으로 합니다. 실제 전주기 배출량은 원료, 전력원, 포집률, 시스템 경계에 따라 달라집니다." : "Emissions figures are based on EST Solution’s company brochure. Actual lifecycle emissions vary by feedstock, electricity source, capture rate and system boundaries."}</p>
      </section>
      <SectionSeam tone="light" draw molecules />
      <section className="technology-section production-system-section technology-reveal nav-target" id="production-system">
        <div className="technology-eyebrow">{korean ? "공정" : "THE PROCESS"}</div>
        <h2>{korean ? <>전기 + 물.<br /><span>결과는 수소.</span></> : <>Electricity + water.<br /><span>Hydrogen out.</span></>}</h2>
        <p className="technology-intro">{korean ? "재생에너지가 반응을 일으키고, 물이 수소를 공급합니다. 부산물은 산소뿐이며, 공정 어디에도 탄소가 개입하지 않습니다." : "Renewable power drives the reaction. Water supplies the hydrogen. The only byproduct is oxygen—no carbon enters the process."}</p>
        <div className="production-system-panel">
          <svg viewBox="0 0 900 460" role="img" aria-label="Renewable power and water converge into an EST Solution PEM electrolyzer producing green hydrogen and oxygen">
            <path d="M126 150 C 240 150, 290 228, 320 232" fill="none" stroke="var(--border-stronger)" strokeWidth="2.5" />
            <path d="M126 300 C 240 300, 290 242, 320 238" fill="none" stroke="var(--border-stronger)" strokeWidth="2.5" />
            <path d="M580 234 C 680 215, 720 110, 800 104" fill="none" stroke="var(--border-stronger)" strokeWidth="2.5" />
            <path d="M580 246 C 680 275, 720 330, 800 338" fill="none" stroke="var(--border-stronger)" strokeWidth="2.5" />
            <g><circle cx="80" cy="150" r="50" fill="var(--bg-accent)" /><circle cx="72" cy="140" r="14" fill="none" stroke="var(--text-accent)" strokeWidth="2.5" /><g stroke="var(--text-accent)" strokeWidth="2.5"><line x1="72" y1="120" x2="72" y2="115" /><line x1="72" y1="165" x2="72" y2="160" /><line x1="52" y1="140" x2="47" y2="140" /><line x1="58" y1="126" x2="54" y2="122" /><line x1="58" y1="154" x2="54" y2="158" /></g><path d="M92 128 L109 138 L92 148 Z" fill="var(--text-accent)" opacity="0.85" /></g>
            <text x="80" y="216" textAnchor="middle" fontSize="12" fontWeight="500" fill="var(--text-primary)">{korean ? "재생에너지" : "Renewable power"}</text><text x="80" y="232" textAnchor="middle" fontSize="10" fill="var(--text-muted)">{korean ? "태양광 · 풍력" : "Solar and wind"}</text>
            <g><circle cx="80" cy="300" r="50" fill="var(--bg-accent)" /><path d="M80 274 C 92 290, 100 302, 100 312 A 20 20 0 1 1 60 312 C 60 302, 68 290, 80 274 Z" fill="var(--text-accent)" /><ellipse cx="72" cy="308" rx="4" ry="7" fill="var(--bg-accent)" opacity="0.6" /></g>
            <text x="80" y="366" textAnchor="middle" fontSize="12" fontWeight="500" fill="var(--text-primary)">{korean ? "물" : "Water"}</text><text x="80" y="382" textAnchor="middle" fontSize="10" fill="var(--text-muted)">{korean ? "연료가 아닌 원료" : "Feedstock, not fuel"}</text>
            <rect x="320" y="95" width="260" height="260" rx="20" fill="var(--surface-2)" stroke="var(--fill-accent)" strokeWidth="2.5" /><rect x="345" y="118" width="210" height="158" rx="10" fill="var(--surface-1)" /><image href="/images/technology/prod_electrolyzer_hq.webp" x="360" y="128" width="180" height="135" preserveAspectRatio="xMidYMid meet" />
            <text x="450" y="298" textAnchor="middle" fontSize="14" fontWeight="500" fill="var(--text-primary)">{korean ? "PEM 수전해 장치" : "PEM electrolyzer"}</text><text x="450" y="316" textAnchor="middle" fontSize="11" fill="var(--text-muted)">{korean ? "H2-241002A · 자체 제작 장비" : "H2-241002A, our own unit"}</text>
            <g><circle cx="850" cy="90" r="44" fill="var(--bg-success)" /><circle cx="837" cy="90" r="10" fill="none" stroke="var(--text-success)" strokeWidth="2.5" /><circle cx="863" cy="90" r="10" fill="none" stroke="var(--text-success)" strokeWidth="2.5" /><line x1="847" y1="90" x2="853" y2="90" stroke="var(--text-success)" strokeWidth="2.5" /><text x="850" y="114" textAnchor="middle" fontSize="9" fill="var(--text-success)" fontWeight="500">H₂</text></g>
            <text x="850" y="156" textAnchor="middle" fontSize="12" fontWeight="500" fill="var(--text-primary)">{korean ? "그린수소" : "Green hydrogen"}</text><text x="850" y="172" textAnchor="middle" fontSize="10" fill="var(--text-muted)">{korean ? "저장 또는 충전" : "Stored or dispensed"}</text>
            <g><circle cx="850" cy="348" r="38" fill="var(--surface-1)" /><circle cx="840" cy="348" r="8.5" fill="none" stroke="var(--text-secondary)" strokeWidth="2" /><circle cx="860" cy="348" r="8.5" fill="none" stroke="var(--text-secondary)" strokeWidth="2" /><line x1="848" y1="348" x2="852" y2="348" stroke="var(--text-secondary)" strokeWidth="2" /><text x="850" y="366" textAnchor="middle" fontSize="8" fill="var(--text-secondary)" fontWeight="500">O₂</text></g>
            <text x="850" y="400" textAnchor="middle" fontSize="11" fontWeight="500" fill="var(--text-secondary)">{korean ? "산소" : "Oxygen"}</text><text x="850" y="416" textAnchor="middle" fontSize="9" fill="var(--text-muted)">{korean ? "배출, CO₂ 없음" : "Released, no CO₂"}</text>
          </svg>
        </div>
        <p className="production-system-caption">{korean ? "중앙에 있는 장비는 이에스티솔루션이 직접 제작한 H2-241002A PEM 수전해 장치입니다." : "At the center: our H2-241002A PEM electrolyzer, built by EST Solution."}</p>
      </section>
      <SectionSeam tone="light" draw />
      <section className="technology-section technology-reveal nav-target" id="how-it-works">
        <div className="pem-explainer">
          <div className="pem-explainer-copy">
            <p className="pem-explainer-eyebrow">{korean ? "셀 내부" : "INSIDE THE CELL"}</p>
            <h2>{korean ? <>빠른 응답성.<br /><span>높은 순도.</span></> : <>Fast response.<br /><span>Pure hydrogen.</span></>}</h2>
            <p>{korean ? "물이 얇은 고분자 전해질막 한쪽으로 들어가 산소, 양성자, 전자로 분해됩니다." : "Water enters one side of a thin polymer membrane and splits into oxygen, protons and electrons."}</p>
            <p>{korean ? "막은 양성자만 통과시킵니다. 반대편에서 전자와 재결합해 고순도 수소가 만들어지며, 태양광·풍력의 변동 출력을 따라갈 만큼 빠르게 반응합니다." : "The membrane passes only protons. They recombine with electrons on the other side to form high-purity hydrogen—quickly enough to follow changing solar and wind output."}</p>
          </div>
          <div className="pem-diagram-panel">
            <PemProcessDiagram korean={korean} />
          </div>
        </div>
        <h3 className="technology-table-title">{korean ? "태양광·풍력에 PEM이 강한 이유" : "Why PEM wins with solar and wind"}</h3><div className="method-card-grid">{methods.map((item) => <article className={`method-card${item.featured ? " featured" : ""}`} key={item.method}><div className="method-diagram"><img src={item.image} alt={item.alt} loading="lazy" decoding="async" /></div><div className="method-title"><h4>{item.method}</h4>{item.note && <span>{korean ? item.noteKr : item.note}</span>}</div><div className="method-detail strengths"><span><IconCheck size={11} stroke={2} />{korean ? "강점" : "Strengths"}</span><ul>{(korean ? item.strengthsKr : item.strengths).map((strength) => <li key={strength}>{strength}</li>)}</ul></div><div className="method-detail tradeoff"><span><IconAlertTriangle size={11} stroke={1.8} />{korean ? "한계" : "Trade-off"}</span><ul>{(korean ? item.tradeoffsKr : item.tradeoffs).map((tradeoff) => <li key={tradeoff}>{tradeoff}</li>)}</ul></div></article>)}</div>
        <div className="pem-callout">{korean ? "일정하게 발전하지 않는 태양광·풍력에는 PEM의 응답성이 맞습니다. 유일한 약점인 귀금속 원가가 바로 우리의 소재 연구가 겨냥하는 문제입니다." : "PEM's responsiveness is what matches solar and wind, which don't produce on a steady schedule. Its one weakness — precious-metal cost — is the specific problem our materials work addresses."}</div>
      </section>
      <SectionSeam tone="light" draw molecules />
      <section className="technology-section technology-reveal nav-target" id="core-technology"><div className="technology-eyebrow">{korean ? "핵심 경쟁력" : "OUR ADVANTAGE"}</div><h2>{korean ? <>네 가지 핵심 층.<br /><span>더 낮은 스택 원가.</span></> : <>Four critical layers.<br /><span>One lower-cost stack.</span></>}</h2><p className="technology-intro">{korean ? "수입 부품을 단순 조립하지 않습니다. 원가와 출력, 수명을 좌우하는 촉매, MEA, 이송층, 전해질막을 직접 설계하고 제조합니다." : "We do not simply assemble imported parts. We engineer the catalyst, MEA, transport layer and membrane—the components that control cost, output and lifetime."}</p><div className="component-photo-grid">{components.map((item) => <article key={item.name}><div className="component-photo"><img src={item.image} alt={`${korean ? item.nameKr : item.name} developed by EST Solution`} loading="lazy" decoding="async" width={900} height={675} /></div>{item.caption && <small className="component-caption">{korean ? item.captionKr : item.caption}</small>}<div className="component-copy"><div className="component-metric"><strong>{item.metric}</strong><span>{korean ? item.qualifierKr : item.qualifier}</span></div><h3>{korean ? item.nameKr : item.name}</h3><p>{korean ? item.descriptionKr : item.description}</p></div></article>)}</div><div className="technology-summary"><IconTrendingDown size={20} stroke={1.7} /><p>{korean ? <>이를 합치면 업계 기준 대비 <strong>스택 총원가 약 20% 절감</strong>입니다. 소재 혁신의 효과가 가장 큰 지점에 집중했습니다.</> : <>Together, roughly <strong>20% lower total stack cost</strong> against the industry baseline—focused where materials innovation has the greatest impact.</>}</p></div></section>
      <SectionSeam tone="light" draw />
      <section className="technology-section technology-reveal nav-target" id="roadmap"><div className="technology-eyebrow">{korean ? "다음 단계" : "WHAT'S NEXT"}</div><h2>{korean ? <>수소가 나아갈 <span>다음 무대를 준비합니다.</span></> : <>Built for where hydrogen <span>goes next.</span></>}</h2><p className="technology-intro">{korean ? "수전해를 공장 밖으로 확장하고 있습니다. 해수 직접 전해와 청정 수소 선박이 다음 목표입니다." : "We are taking electrolysis beyond the factory—toward direct seawater production and clean hydrogen vessels."}</p><div className="roadmap-grid">{roadmap.map(({ name, nameKr, Icon, image, alt, description, descriptionKr }) => <article key={name}><div className="roadmap-photo"><img src={image} alt={alt} loading="lazy" decoding="async" /></div><div className="roadmap-content"><div className="roadmap-icon"><Icon size={24} stroke={1.8} /></div><h3>{korean ? nameKr : name}</h3><p>{korean ? descriptionKr : description}</p></div></article>)}</div></section>
      <section className="technology-section product-portfolio technology-reveal nav-target" id="product-portfolio">
        <div className="technology-eyebrow">{korean ? "실험실에서 현장으로" : "FROM LAB TO SITE"}</div>
        <h2 className="portfolio-title">{korean ? <>바로 <span>수소를 만듭니다.</span></> : <>Ready to make <span>hydrogen.</span></>}</h2>
        <div className="portfolio-grid">
          <div className="portfolio-visual"><img src="/images/technology/prod_electrolyzer_hq.webp" alt="H2-241002A PEM electrolysis system" loading="lazy" decoding="async" /></div>
          <div className="portfolio-copy">
            <p className="portfolio-headline">{korean ? <><strong>소형 PEM 시스템</strong>을 바로 설치하고 시험하고 확장하십시오. <strong>2.5kW부터 20kW까지</strong>.</> : <><strong>Compact PEM systems</strong> ready to install, test and scale—from <strong>2.5 kW to 20 kW</strong>.</>}</p>
            <div className="portfolio-hook" aria-label="Product highlights"><span>{korean ? "즉시 설치 가능" : "Ready to install"}</span><strong>{korean ? "2.5–20kW 범위" : "2.5–20 kW range"}</strong></div>
            <p className="portfolio-support">{korean ? "파일럿으로 시작해 적용성을 검증하고, 확신을 갖고 확장하십시오." : "Start with a pilot. Prove the application. Scale with confidence."}</p>
            <div className="portfolio-actions"><a href="/products">{korean ? "제품 보기" : "View products"}</a><a className="primary" href="/contact">{korean ? "견적 요청" : "Request a quote"}</a></div>
          </div>
        </div>
      </section>
    </div>
  </DetailShell>;
}
