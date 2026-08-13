import { DetailShell } from "../detail-shell";
import { ProductSystemsSection } from "./product-systems-section";
import { IconArrowRight } from "@tabler/icons-react";

const subNav = [
  { label: "Electrolysis systems", id: "products" },
  { label: "Components", id: "components" },
  { label: "NEOHYD dispensing", id: "neohyd" },
  { label: "Applications", id: "applications" },
];

export default function ProductsPage() {
  return <DetailShell eyebrow="PRODUCTS" title="A product platform built around real operating needs." intro="Explore scalable electrolysis systems, in-house core components, on-site dispensing and the applications they enable." subNav={subNav} hero={
    <section className="products-hero">
      <div className="products-hero-copy">
        <p className="products-hero-eyebrow">Products</p>
        <h1>Made for your project.<br />Built to last.</h1>
        <p><strong>Customizable sizing</strong> and <strong>titanium-grade components</strong>, manufactured in-house from 2.5kW to 20kW.</p>
        <div className="products-hero-actions"><a href="#products">View electrolysis systems</a><a href="/contact">Request a quote</a></div>
      </div>
    </section>
  }>
    <ProductSystemsSection />
    <div className="detail-content products-content nav-section-stack">
      <section className="titanium-teaser nav-target" id="components">
        <p className="titanium-kicker">Built in-house</p>
        <div className="titanium-heading"><span /><h2>Every core component, engineered in-house</h2></div>
        <p>From catalyst to titanium plates, every EST system — at every size — shares the same materials and manufacturing standard. Producing these in-house, rather than sourcing them, keeps quality consistent and cuts supply-chain risk.</p>
        <div className="titanium-grid">
          <article><div className="titanium-photo"><img src="/images/technology/enhanced_catalyst.png" alt="EST Solution catalyst material" /></div><h3>Catalyst</h3></article>
          <article><div className="titanium-photo"><img src="/images/technology/enhanced_mea.png" alt="EST Solution membrane electrode assembly" /></div><h3>MEA</h3></article>
          <article><div className="titanium-photo"><img src="/images/technology/enhanced_ptl.png" alt="EST Solution titanium porous transport layer" /></div><h3>Ti-PTL</h3></article>
          <article><div className="titanium-photo"><img src="/images/technology/enhanced_cell.png" alt="EST Solution assembled cell with electrolyte membrane" /></div><h3>Electrolyte membrane</h3></article>
        </div>
        <a className="titanium-link" href="/technology#core-technology">See the full technology breakdown <IconArrowRight size={16} stroke={1.8} aria-hidden="true" /></a>
      </section>
      <section className="detail-section nav-target" id="neohyd"><div className="eyebrow"><span /> NEOHYD DISPENSING</div><h2>Hydrogen production closer to use.</h2><div className="detail-media"><img src="/mobile-hydrogen-station.png" alt="EST Solution mobile on-site hydrogen dispensing unit" /><div className="detail-media-copy"><h3>On-site delivery unit</h3><p>A transportable demonstration and dispensing concept makes distributed green hydrogen tangible for operators, partners and the public.</p><a href="/products/mobile">View NEOHYD concept →</a></div></div></section>
      <section className="detail-section nav-target" id="applications"><div className="eyebrow"><span /> APPLICATIONS</div><h2>Designed for places where distributed energy matters.</h2><div className="feature-grid"><article><small>MOBILITY</small><h3>Local fueling</h3><p>Support demonstration fleets and equipment where centralized hydrogen supply is limited.</p></article><article><small>FARMS &amp; REMOTE SITES</small><h3>Energy resilience</h3><p>Convert available renewable electricity into a storable fuel for remote operations.</p></article><article><small>DATA CENTERS</small><h3>Clean backup power</h3><p>Provide a pathway from renewable generation to hydrogen-based backup and resilience.</p></article></div></section>
    </div>
  </DetailShell>;
}
