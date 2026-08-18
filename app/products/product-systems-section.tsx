"use client";

import { useState } from "react";
import { IconChevronDown } from "../icons";
import { useLanguage } from "../use-language";

const systemProducts = [
  { id: "2-5kw", name: "2.5 kW system", nameKr: "2.5kW 시스템", use: "500 L/h · pilot sites", useKr: "시간당 500L · 파일럿 현장", stackImage: "/product-stack-2-5kw.webp", stackCaption: "Electrolyzer stack, 2.5kW", stackCaptionKr: "수전해 스택, 2.5kW", specs: [["Dimensions", "580 × 374 × 550 mm"], ["Power", "< 2.5 kW"], ["Hydrogen", "500 L/h"], ["Oxygen", "250 L/h"], ["Purity", "99.97–99.99%"]] },
  { id: "5kw", name: "5 kW system", nameKr: "5kW 시스템", use: "1,000 L/h · distributed sites", useKr: "시간당 1,000L · 분산 현장", stackImage: "/product-stack-5kw.webp", stackCaption: "Electrolyzer stack, 5kW", stackCaptionKr: "수전해 스택, 5kW", specs: [["Dimensions", "1,000 × 550 × 1,200 mm"], ["Power", "< 5 kW"], ["Hydrogen", "1,000 L/h"], ["Oxygen", "500 L/h"], ["Purity", "99.97–99.99%"]] },
  { id: "20kw", name: "20 kW system", nameKr: "20kW 시스템", use: "4,000 L/h · industrial sites", useKr: "시간당 4,000L · 산업 현장", stackImage: "/product-stack-20kw.webp", stackCaption: "Electrolyzer stack, 20kW", stackCaptionKr: "수전해 스택, 20kW", specs: [["Dimensions", "1,800 × 550 × 2,200 mm"], ["Power", "< 20 kW"], ["Hydrogen", "4,000 L/h"], ["Oxygen", "2,000 L/h"], ["Purity", "99.97–99.99%"]], flagship: true },
];

const SPEC_LABELS_KR: Record<string, string> = {
  Dimensions: "크기", Power: "소비 전력", Hydrogen: "수소 생산량", Oxygen: "산소 발생량", Purity: "순도",
};

export function ProductSystemsSection() {
  const [expandedSpecs, setExpandedSpecs] = useState<Record<string, boolean>>({});
  const [, , korean] = useLanguage();
  return <section className="product-section relocated-product-section nav-target" id="products">
    <div className="product-tier system-tier">
      <div className="product-tier-heading reveal"><div className="product-eyebrow"><span /> {korean ? "제품 구성" : "WHAT YOU BUY"}</div><h2>{korean ? "세 가지 용량, 하나의 스택 계열." : "Three sizes. One stack family."}</h2></div>
      <div className="system-card-grid reveal-children">
        {systemProducts.map((product) => {
          const isExpanded = Boolean(expandedSpecs[product.id]);
          const panelId = `specs-${product.id}`;
          return <article className={product.flagship ? "system-card flagship" : "system-card"} key={product.id}>
            <div className="system-photo"><img className="system-stack-photo" src={product.stackImage} alt={`${product.name} electrolyzer stack`} loading="lazy" decoding="async" /></div>
            <small className="system-photo-caption">{korean ? product.stackCaptionKr : product.stackCaption}</small>
            <h3>{korean ? product.nameKr : product.name}</h3><p>{korean ? product.useKr : product.use}</p>
            <div className="system-spec-divider" />
            <button className={isExpanded ? "spec-toggle open" : "spec-toggle"} type="button" onClick={() => setExpandedSpecs((current) => ({ ...current, [product.id]: !current[product.id] }))} aria-expanded={isExpanded} aria-controls={panelId}>
              {isExpanded ? (korean ? "사양 접기" : "Hide full specs") : (korean ? "전체 사양 보기" : "View full specs")}<IconChevronDown size={16} stroke={1.8} aria-hidden="true" />
            </button>
            <div className={isExpanded ? "spec-panel open" : "spec-panel"} id={panelId} aria-hidden={!isExpanded}><div className="spec-panel-inner"><dl>{product.specs.map(([label, value]) => <div key={label}><dt>{korean ? (SPEC_LABELS_KR[label] ?? label) : label}</dt><dd>{value}</dd></div>)}</dl></div></div>
            <a className="system-detail-link" href="/products/systems">{korean ? "시스템 상세 보기" : "View system details"} <IconChevronDown size={16} stroke={1.8} aria-hidden="true" style={{ transform: "rotate(-90deg)" }} /></a>
          </article>;
        })}
      </div>
      <div className="product-actions single reveal"><a className="quote-link primary" href="/contact">{korean ? "견적 요청" : "Request a quote"}</a></div>
    </div>
  </section>;
}
