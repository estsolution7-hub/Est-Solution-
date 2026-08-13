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
        <div className="pem-explainer">
          <div className="pem-explainer-copy">
            <p className="pem-explainer-eyebrow">How it works</p>
            <h2>What is <span>PEM electrolysis</span></h2>
            <p>A thin polymer membrane sits between two electrodes. Water enters at the anode, where it splits into oxygen, protons, and electrons.</p>
            <p>Protons pass straight through the membrane. Electrons travel around the external circuit and recombine with the protons at the cathode, forming pure hydrogen gas.</p>
          </div>
          <div className="pem-diagram-panel">
          <svg viewBox="0 0 320 270" style={{ width: "100%", height: "auto", display: "block" }} role="img" aria-label="PEM electrolysis process diagram">
            <path d="M118 46 V30 H202 V46" fill="none" stroke="#8aa4bd" strokeWidth="1.5" />
            <path d="M118 40 V32" fill="none" stroke="#8aa4bd" strokeWidth="1.5" markerEnd="url(#arrowElecUp)" />
            <path d="M202 32 V40" fill="none" stroke="#8aa4bd" strokeWidth="1.5" markerEnd="url(#arrowElecDown)" />
            <text x="118" y="20" textAnchor="middle" fontSize="9" fill="#8aa4bd">e⁻</text>
            <text x="202" y="20" textAnchor="middle" fontSize="9" fill="#8aa4bd">e⁻</text>
            <text x="30" y="95" fontSize="11" fill="#c3d3e2">H₂O</text>
            <path d="M55 92 H88" stroke="#6fd0f2" strokeWidth="4" markerEnd="url(#arrowBlue)" />
            <rect x="100" y="50" width="30" height="172" fill="#123a5e" />
            <circle cx="115" cy="92" r="2" fill="#6fd0f2" opacity="0.6" />
            <circle cx="110" cy="132" r="2" fill="#6fd0f2" opacity="0.6" />
            <circle cx="120" cy="172" r="2" fill="#6fd0f2" opacity="0.6" />
            <text x="115" y="140" textAnchor="middle" fontSize="9" fill="#8ec9ec" transform="rotate(-90 115 140)">Anode (+)</text>
            <rect x="130" y="50" width="60" height="172" fill="#0a2440" stroke="#2f5578" strokeWidth="1" />
            <text x="160" y="74" textAnchor="middle" fontSize="10" fill="#9fd8f5" fontWeight="500">PEM</text>
            <text x="160" y="86" textAnchor="middle" fontSize="8" fill="#7695ae">membrane</text>
            <text x="160" y="130" textAnchor="middle" fontSize="12" fill="#f0916a" fontWeight="500">H⁺</text>
            <path d="M140 142 H180" stroke="#f0916a" strokeWidth="3" markerEnd="url(#arrowRed)" />
            <rect x="190" y="50" width="30" height="172" fill="#123a5e" />
            <circle cx="205" cy="97" r="2" fill="#8fdc7a" opacity="0.6" />
            <circle cx="200" cy="137" r="2" fill="#8fdc7a" opacity="0.6" />
            <circle cx="210" cy="177" r="2" fill="#8fdc7a" opacity="0.6" />
            <text x="205" y="140" textAnchor="middle" fontSize="9" fill="#8fdc7a" transform="rotate(-90 205 140)">Cathode (-)</text>
            <path d="M35 224 V78 H98" fill="none" stroke="#3a5f80" strokeWidth="1.5" />
            <path d="M300 224 V78 H222" fill="none" stroke="#3a5f80" strokeWidth="1.5" />
            <text x="15" y="229" fontSize="11" fill="#c3d3e2">O₂</text>
            <path d="M55 226 H37" stroke="#a9bccb" strokeWidth="3" markerEnd="url(#arrowGray)" />
            <text x="290" y="95" textAnchor="middle" fontSize="11" fill="#c3d3e2">H₂</text>
            <path d="M250 110 H295" stroke="#8fdc7a" strokeWidth="5" markerEnd="url(#arrowGreen)" />
            <text x="160" y="256" textAnchor="middle" fontSize="9" fill="#5c7b98">External circuit carries electrons around the membrane</text>
            <defs>
              <marker id="arrowBlue" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto"><path d="M0,0 L10,5 L0,10 Z" fill="#6fd0f2" /></marker>
              <marker id="arrowRed" markerUnits="userSpaceOnUse" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0,0 L9,4.5 L0,9 Z" fill="#f0916a" /></marker>
              <marker id="arrowGray" markerUnits="userSpaceOnUse" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0,0 L9,4.5 L0,9 Z" fill="#a9bccb" /></marker>
              <marker id="arrowGreen" markerUnits="userSpaceOnUse" markerWidth="12" markerHeight="12" refX="9" refY="6" orient="auto"><path d="M0,0 L12,6 L0,12 Z" fill="#8fdc7a" /></marker>
              <marker id="arrowElecUp" markerUnits="userSpaceOnUse" markerWidth="7" markerHeight="6" refX="3.5" refY="5" orient="auto"><path d="M0,6 L3.5,0 L7,6 Z" fill="#8aa4bd" /></marker>
              <marker id="arrowElecDown" markerUnits="userSpaceOnUse" markerWidth="7" markerHeight="6" refX="3.5" refY="1" orient="auto"><path d="M0,0 L3.5,6 L7,0 Z" fill="#8aa4bd" /></marker>
            </defs>
          </svg>
          </div>
        </div>
        <h3 className="technology-table-title">Why PEM, and not the alternatives</h3><div className="method-card-grid">{methods.map((item) => <article className={`method-card${item.featured ? " featured" : ""}`} key={item.method}><div className="method-diagram"><img src={item.image} alt={item.alt} /></div><div className="method-title"><h4>{item.method}</h4>{item.note && <span>{item.note}</span>}</div><div className="method-detail strengths"><span><IconCheck size={11} stroke={2} />Strengths</span><ul>{item.strengths.map((strength) => <li key={strength}>{strength}</li>)}</ul></div><div className="method-detail tradeoff"><span><IconAlertTriangle size={11} stroke={1.8} />Trade-off</span><ul>{item.tradeoffs.map((tradeoff) => <li key={tradeoff}>{tradeoff}</li>)}</ul></div></article>)}</div>
        <div className="pem-callout">PEM's responsiveness is what matches solar and wind, which don't produce on a steady schedule. Its one weakness — precious-metal cost — is the specific problem our materials work addresses.</div>
      </section>
      <section className="technology-section nav-target" id="core-technology"><div className="technology-eyebrow">CORE TECHNOLOGY</div><h2>Every layer of the stack, <span>engineered in-house.</span></h2><p className="technology-intro">Most electrolyzer makers assemble systems from imported parts. We develop the four components that determine cost and performance ourselves.</p><div className="component-photo-grid">{components.map((item) => <article key={item.name}><div className="component-photo"><img src={item.image} alt={`${item.name} developed by EST Solution`} /></div>{item.caption && <small className="component-caption">{item.caption}</small>}<div className="component-copy"><div className="component-metric"><strong>{item.metric}</strong><span>{item.qualifier}</span></div><h3>{item.name}</h3><p>{item.description}</p></div></article>)}</div><div className="technology-summary"><IconTrendingDown size={20} stroke={1.7} /><p>Together, roughly <strong>20% lower total stack cost</strong> against the industry baseline — concentrated in MEA and PTL, where our materials work runs deepest.</p></div></section>
      <section className="technology-section nav-target" id="roadmap"><div className="technology-eyebrow">WHAT'S NEXT</div><h2>Where we're <span>taking this.</span></h2><p className="technology-intro">Two active development directions, both aimed at removing practical limits on where green hydrogen can be produced and used.</p><div className="roadmap-grid">{roadmap.map(({ name, Icon, description, status }) => <article key={name}><div className="roadmap-icon"><Icon size={18} stroke={1.7} /></div><h3>{name}</h3><p>{description}</p><span>{status}</span></article>)}</div></section>
    </div>
  </DetailShell>;
}
