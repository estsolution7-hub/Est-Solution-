import { DetailShell } from "../detail-shell";
import { ProductSystemsSection } from "./product-systems-section";
import { ApplicationsSection } from "./applications-section";
import { IconArrowRight, IconBolt, IconCylinder, IconMapPin } from "@tabler/icons-react";

const subNav = [
  { label: "Systems", id: "products" },
  { label: "Components", id: "components" },
  { label: "Mobile deployment", id: "dispensing" },
  { label: "Applications", id: "applications" },
  { label: "Contact", id: "contact", href: "/contact" },
];

export default function ProductsPage() {
  return <DetailShell eyebrow="PRODUCTS" title="A product platform built around real operating needs." intro="Explore scalable electrolysis systems, in-house core components, on-site dispensing and the applications they enable." subNav={subNav} closingCta={
    <section className="products-closing-cta">
      <h2>Tell us your project.<br />We'll size the system.</h2>
      <a href="/contact">Request a quote →</a>
      <div className="products-closing-brand"><img src="/est-solution-logo.png" alt="EST Solution" /></div>
    </section>
  } hero={
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
      <section className="neohyd-section nav-target" id="dispensing">
        <div className="neohyd-heading"><span /><h2>Produce it, <em>store it, take it anywhere</em></h2></div>
        <p className="neohyd-intro">A mobile electrolysis unit that produces green hydrogen on-site and stores it in cartridges — bringing power to places the grid doesn't reach.</p>
        <div className="neohyd-visual"><img src="/images/products/neohyd_mobile_truck.png" alt="EST Solution mobile green-hydrogen production and cartridge storage truck" /></div>
        <p className="neohyd-caption">Mobile green-hydrogen production and cartridge storage unit.</p>
        <div className="neohyd-features">
          <article><IconBolt size={22} stroke={1.7} aria-hidden="true" /><h3>Produces on-site</h3><p>Electrolysis happens in the unit itself, no separate plant needed.</p></article>
          <article><IconCylinder size={22} stroke={1.7} aria-hidden="true" /><h3>Stores in cartridges</h3><p>Hydrogen is captured and held for later use, not just piped out.</p></article>
          <article><IconMapPin size={22} stroke={1.7} aria-hidden="true" /><h3>Deploys off-grid</h3><p>Serves as emergency or backup power where grid access is limited.</p></article>
        </div>
      </section>
      <ApplicationsSection />
    </div>
  </DetailShell>;
}
