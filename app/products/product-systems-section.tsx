"use client";

import { useState } from "react";
import { IconChevronDown } from "@tabler/icons-react";

const systemProducts = [
  { id: "2-5kw", name: "2.5 kW system", use: "500 L/h · pilot sites", stackImage: "/product-stack-2-5kw.png", stackCaption: "Electrolyzer stack, 2.5kW", specs: [["Dimensions", "580 × 374 × 550 mm"], ["Power", "< 2.5 kW"], ["Hydrogen", "500 L/h"], ["Oxygen", "250 L/h"], ["Purity", "99.97–99.99%"]] },
  { id: "5kw", name: "5 kW system", use: "1,000 L/h · distributed sites", stackImage: "/product-stack-5kw.png", stackCaption: "Electrolyzer stack, 5kW", specs: [["Dimensions", "1,000 × 550 × 1,200 mm"], ["Power", "< 5 kW"], ["Hydrogen", "1,000 L/h"], ["Oxygen", "500 L/h"], ["Purity", "99.97–99.99%"]] },
  { id: "20kw", name: "20 kW system", use: "4,000 L/h · industrial sites", stackImage: "/product-stack-20kw.png", stackCaption: "Electrolyzer stack, 20kW", specs: [["Dimensions", "1,800 × 550 × 2,200 mm"], ["Power", "< 20 kW"], ["Hydrogen", "4,000 L/h"], ["Oxygen", "2,000 L/h"], ["Purity", "99.97–99.99%"]], flagship: true },
];

export function ProductSystemsSection() {
  const [expandedSpecs, setExpandedSpecs] = useState<Record<string, boolean>>({});
  return <section className="product-section relocated-product-section nav-target" id="products">
    <div className="product-tier system-tier">
      <div className="product-tier-heading"><div className="product-eyebrow"><span /> WHAT YOU BUY</div><h2>Three sizes. One scalable platform.</h2></div>
      <div className="system-card-grid">
        {systemProducts.map((product) => {
          const isExpanded = Boolean(expandedSpecs[product.id]);
          const panelId = `specs-${product.id}`;
          return <article className={product.flagship ? "system-card flagship" : "system-card"} key={product.id}>
            <div className="system-photo"><img className="system-stack-photo" src={product.stackImage} alt={`${product.name} electrolyzer stack`} /></div>
            <small className="system-photo-caption">{product.stackCaption}</small>
            <h3>{product.name}</h3><p>{product.use}</p>
            <div className="system-spec-divider" />
            <button className={isExpanded ? "spec-toggle open" : "spec-toggle"} type="button" onClick={() => setExpandedSpecs((current) => ({ ...current, [product.id]: !current[product.id] }))} aria-expanded={isExpanded} aria-controls={panelId}>
              {isExpanded ? "Hide full specs" : "View full specs"}<IconChevronDown size={16} stroke={1.8} aria-hidden="true" />
            </button>
            <div className={isExpanded ? "spec-panel open" : "spec-panel"} id={panelId} aria-hidden={!isExpanded}><div className="spec-panel-inner"><dl>{product.specs.map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl></div></div>
            <a className="system-detail-link" href="/products/systems">View system details →</a>
          </article>;
        })}
      </div>
      <div className="product-actions single"><a className="quote-link primary" href="/contact">Request a quote <span>→</span></a></div>
    </div>
  </section>;
}
