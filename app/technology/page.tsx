import { IconAlertTriangle, IconCheck, IconShip, IconTrendingDown, IconWavesElectricity } from "@tabler/icons-react";
import { DetailShell } from "../detail-shell";

const subNav = [
  { label: "How it works", id: "how-it-works" },
  { label: "Core technology", id: "core-technology" },
  { label: "Roadmap", id: "roadmap" },
];

const methods = [
  { method: "PEM", image: "/diag_pem.png", alt: "PEM electrolysis cell diagram", note: "what we build", strengths: ["High current density", "Compact", "Responds fast to variable renewables", "99.97–99.99% purity"], tradeoffs: ["Needs precious-metal catalysts — the exact cost problem we solve"], featured: true },
  { method: "AEC", image: "/diag_aec.png", alt: "AEC electrolysis cell diagram", strengths: ["Most mature", "Lowest capital cost", "No precious metals"], tradeoffs: ["Low current density", "Slow response", "Bulky", "Liquid electrolyte"] },
  { method: "AEM", image: "/diag_aem.png", alt: "AEM electrolysis cell diagram", strengths: ["Avoids precious metals", "Lower material cost"], tradeoffs: ["Durability unproven at commercial scale."] },
  { method: "SOEC", image: "/diag_soec.png", alt: "SOEC electrolysis cell diagram", strengths: ["Highest electrical efficiency of any method."], tradeoffs: ["700–850°C operation", "Material degradation", "Slow start-up"] },
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
        <div className="reaction-panel">
          <svg viewBox="0 0 320 260" style={{ width: "100%", height: "auto", display: "block" }} role="img" aria-label="PEM electrolysis process diagram">
            <text x="160" y="16" textAnchor="middle" fontSize="10" fill="var(--text-muted)">e⁻</text>
            <path d="M110 40 V24 H210 V40" fill="none" stroke="var(--text-muted)" strokeWidth="1.5" />
            <text x="30" y="90" fontSize="11" fill="var(--text-secondary)">H₂O</text>
            <path d="M55 88 H90" stroke="#5dcaeb" strokeWidth="4" markerEnd="url(#arrowBlue)" />
            <rect x="100" y="40" width="30" height="180" fill="var(--bg-accent)" />
            <text x="115" y="135" textAnchor="middle" fontSize="9" fill="var(--text-accent)" transform="rotate(-90 115 135)">Anode (+)</text>
            <rect x="130" y="40" width="60" height="180" fill="var(--surface-2)" stroke="var(--border)" strokeWidth="1" />
            <text x="160" y="70" textAnchor="middle" fontSize="10" fill="var(--text-accent)" fontWeight="500">PEM</text>
            <text x="160" y="82" textAnchor="middle" fontSize="8" fill="var(--text-muted)">membrane</text>
            <text x="160" y="128" textAnchor="middle" fontSize="12" fill="#d85a30" fontWeight="500">H⁺</text>
            <path d="M138 140 H182" stroke="#d85a30" strokeWidth="3" markerEnd="url(#arrowRed)" />
            <rect x="190" y="40" width="30" height="180" fill="var(--bg-success)" />
            <text x="205" y="135" textAnchor="middle" fontSize="9" fill="var(--text-success)" transform="rotate(-90 205 135)">Cathode (-)</text>
            <path d="M35 220 V70 H100" fill="none" stroke="var(--border-strong)" strokeWidth="1.5" />
            <path d="M285 220 V70 H220" fill="none" stroke="var(--border-strong)" strokeWidth="1.5" />
            <text x="15" y="225" fontSize="11" fill="var(--text-secondary)">O₂</text>
            <path d="M55 222 H35" stroke="var(--text-secondary)" strokeWidth="3" markerEnd="url(#arrowGray)" />
            <text x="275" y="90" fontSize="11" fill="var(--text-secondary)">H₂</text>
            <path d="M255 88 H285" stroke="#639922" strokeWidth="4" markerEnd="url(#arrowGreen)" />
            <defs>
              <marker id="arrowBlue" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#5dcaeb" /></marker>
              <marker id="arrowRed" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#d85a30" /></marker>
              <marker id="arrowGray" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="var(--text-secondary)" /></marker>
              <marker id="arrowGreen" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#639922" /></marker>
            </defs>
          </svg>
        </div>
        <h3 className="technology-table-title">Why PEM, and not the alternatives</h3><div className="method-card-grid">{methods.map((item) => <article className={`method-card${item.featured ? " featured" : ""}`} key={item.method}><div className="method-diagram"><img src={item.image} alt={item.alt} /></div><div className="method-title"><h4>{item.method}</h4>{item.note && <span>{item.note}</span>}</div><div className="method-detail strengths"><span><IconCheck size={11} stroke={2} />Strengths</span><ul>{item.strengths.map((strength) => <li key={strength}>{strength}</li>)}</ul></div><div className="method-detail tradeoff"><span><IconAlertTriangle size={11} stroke={1.8} />Trade-off</span><ul>{item.tradeoffs.map((tradeoff) => <li key={tradeoff}>{tradeoff}</li>)}</ul></div></article>)}</div>
        <div className="pem-callout">PEM's responsiveness is what matches solar and wind, which don't produce on a steady schedule. Its one weakness — precious-metal cost — is the specific problem our materials work addresses.</div>
      </section>
      <section className="technology-section nav-target" id="core-technology"><div className="technology-eyebrow">CORE TECHNOLOGY</div><h2>Every layer of the stack, <span>engineered in-house.</span></h2><p className="technology-intro">Most electrolyzer makers assemble systems from imported parts. We develop the four components that determine cost and performance ourselves.</p><div className="component-photo-grid">{components.map((item) => <article key={item.name}><div className="component-photo"><img src={item.image} alt={`${item.name} developed by EST Solution`} /></div>{item.caption && <small className="component-caption">{item.caption}</small>}<div className="component-copy"><div className="component-metric"><strong>{item.metric}</strong><span>{item.qualifier}</span></div><h3>{item.name}</h3><p>{item.description}</p></div></article>)}</div><div className="technology-summary"><IconTrendingDown size={20} stroke={1.7} /><p>Together, roughly <strong>20% lower total stack cost</strong> against the industry baseline — concentrated in MEA and PTL, where our materials work runs deepest.</p></div></section>
      <section className="technology-section nav-target" id="roadmap"><div className="technology-eyebrow">WHAT'S NEXT</div><h2>Where we're <span>taking this.</span></h2><p className="technology-intro">Two active development directions, both aimed at removing practical limits on where green hydrogen can be produced and used.</p><div className="roadmap-grid">{roadmap.map(({ name, Icon, description, status }) => <article key={name}><div className="roadmap-icon"><Icon size={18} stroke={1.7} /></div><h3>{name}</h3><p>{description}</p><span>{status}</span></article>)}</div></section>
    </div>
  </DetailShell>;
}
