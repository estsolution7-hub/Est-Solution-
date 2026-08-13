import { IconAlertTriangle, IconCheck, IconDroplet, IconFlame, IconShip, IconTrendingDown, IconWavesElectricity } from "@tabler/icons-react";
import { DetailShell } from "../detail-shell";

const subNav = [
  { label: "How it works", id: "how-it-works" },
  { label: "Core technology", id: "core-technology" },
  { label: "Roadmap", id: "roadmap" },
];

const methods = [
  { method: "PEM", image: "/diag_pem.png", alt: "PEM electrolysis cell diagram", note: "what we build", strengths: "High current density, compact, responds fast to variable renewables, 99.97–99.99% purity", tradeoffs: "Needs precious-metal catalysts — the exact cost problem we solve", featured: true },
  { method: "AEC", image: "/diag_aec.png", alt: "AEC electrolysis cell diagram", strengths: "Most mature, lowest capital cost, no precious metals", tradeoffs: "Low current density, slow response, bulky, liquid electrolyte" },
  { method: "AEM", image: "/diag_aem.png", alt: "AEM electrolysis cell diagram", strengths: "Avoids precious metals, lower material cost", tradeoffs: "Durability unproven at commercial scale" },
  { method: "SOEC", image: "/diag_soec.png", alt: "SOEC electrolysis cell diagram", strengths: "Highest electrical efficiency of any method", tradeoffs: "700–850°C operation, material degradation, slow start-up" },
];

const components = [
  { image: "/comp_catalyst.png", metric: "30%+", qualifier: "cost reduction", name: "Catalyst", description: "Low-noble-metal formulation with longer operating life. Precious-metal loading is the largest lever on PEM cost." },
  { image: "/comp_mea.png", metric: "37%", qualifier: "cost reduction", name: "MEA", description: "High current density with uniform large-area coating — more work per cell without adding material." },
  { image: "/comp_ptl.png", metric: "25%", qualifier: "cost reduction", name: "Ti-PTL", description: "Pore-size controlled titanium. Pore structure governs how water and gas move through the cell." },
  { image: "/comp_stack.png", metric: "2×", qualifier: "vs Nafion", name: "Electrolyte membrane", description: "Hydrocarbon-based, crossover ~1/4 of conventional PFSA — thinner membrane, double the durability.", caption: "Assembled stack — membrane shown in situ" },
];

const roadmap = [
  { name: "Seawater electrolysis", Icon: IconWavesElectricity, description: "Conventional electrolysis needs purified freshwater — a real constraint in coastal and water-scarce regions. Running directly on seawater removes that dependency and makes coastal production viable.", status: "Timeline to be confirmed" },
  { name: "Hydrogen fuel cell vessels", Icon: IconShip, description: "Hydrogen-powered leisure craft in Jeollanam-do, supplying clean hydrogen to vessels in the region's coastal waters. Boats operate far from hydrogen infrastructure — a natural fit for on-site production.", status: "Timeline to be confirmed" },
];

export default function TechnologyPage() {
  return <DetailShell eyebrow="TECHNOLOGY" title="PEM technology by EST Solution" intro="We build every layer of the electrolysis stack ourselves — so green hydrogen costs less to make." subNav={subNav} hero={<section className="technology-hero" role="img" aria-label="Hydrogen storage tanks and wind turbines"><div className="technology-hero-overlay" /><div className="technology-hero-copy"><h1>PEM technology by <span>EST Solution</span></h1><p>We build every layer of the electrolysis stack ourselves — so green hydrogen costs less to make.</p><div className="technology-hero-actions"><a href="/products">Our products</a><a href="/technical-resources">Technical resources</a></div></div></section>}>
    <div className="technology-page-content">
      <section className="technology-section nav-target" id="how-it-works">
        <div className="technology-eyebrow">HOW IT WORKS</div><h2>Splitting water with <span>nothing but electricity.</span></h2><p className="technology-intro">Electrolysis uses electricity to split water into hydrogen and oxygen. When that electricity comes from solar or wind, the hydrogen carries no carbon at all.</p>
        <div className="reaction-panel"><div className="reaction-halves"><div className="reaction-half"><div className="reaction-icon blue"><IconDroplet size={21} stroke={1.7} /></div><strong>Anode</strong><span>Water splits, oxygen released</span><code>2H₂O → O₂ + 4H⁺ + 4e⁻</code></div><div className="reaction-membrane"><i /><span>PEM membrane</span></div><div className="reaction-half"><div className="reaction-icon green"><IconFlame size={21} stroke={1.7} /></div><strong>Cathode</strong><span>Protons recombine as H₂</span><code>4H⁺ + 4e⁻ → 2H₂</code></div></div><div className="overall-reaction"><code>2H₂O → 2H₂ + O₂</code></div></div>
        <h3 className="technology-table-title">Why PEM, and not the alternatives</h3><div className="method-card-grid">{methods.map((item) => <article className={`method-card${item.featured ? " featured" : ""}`} key={item.method}><div className="method-diagram"><img src={item.image} alt={item.alt} /></div><div className="method-title"><h4>{item.method}</h4>{item.note && <span>{item.note}</span>}</div><div className="method-detail strengths"><span><IconCheck size={11} stroke={2} />Strengths</span><p>{item.strengths}</p></div><div className="method-detail tradeoff"><span><IconAlertTriangle size={11} stroke={1.8} />Trade-off</span><p>{item.tradeoffs}</p></div></article>)}</div>
        <div className="pem-callout">PEM's responsiveness is what matches solar and wind, which don't produce on a steady schedule. Its one weakness — precious-metal cost — is the specific problem our materials work addresses.</div>
      </section>
      <section className="technology-section nav-target" id="core-technology"><div className="technology-eyebrow">CORE TECHNOLOGY</div><h2>Every layer of the stack, <span>engineered in-house.</span></h2><p className="technology-intro">Most electrolyzer makers assemble systems from imported parts. We develop the four components that determine cost and performance ourselves.</p><div className="component-photo-grid">{components.map((item) => <article key={item.name}><div className="component-photo"><img src={item.image} alt={`${item.name} developed by EST Solution`} /></div>{item.caption && <small className="component-caption">{item.caption}</small>}<div className="component-copy"><div className="component-metric"><strong>{item.metric}</strong><span>{item.qualifier}</span></div><h3>{item.name}</h3><p>{item.description}</p></div></article>)}</div><div className="technology-summary"><IconTrendingDown size={20} stroke={1.7} /><p>Together, roughly <strong>20% lower total stack cost</strong> against the industry baseline — concentrated in MEA and PTL, where our materials work runs deepest.</p></div></section>
      <section className="technology-section nav-target" id="roadmap"><div className="technology-eyebrow">WHAT'S NEXT</div><h2>Where we're <span>taking this.</span></h2><p className="technology-intro">Two active development directions, both aimed at removing practical limits on where green hydrogen can be produced and used.</p><div className="roadmap-grid">{roadmap.map(({ name, Icon, description, status }) => <article key={name}><div className="roadmap-icon"><Icon size={18} stroke={1.7} /></div><h3>{name}</h3><p>{description}</p><span>{status}</span></article>)}</div></section>
    </div>
  </DetailShell>;
}
