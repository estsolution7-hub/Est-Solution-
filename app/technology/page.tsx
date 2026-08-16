"use client";

import { Bar } from "react-chartjs-2";
import { BarElement, CategoryScale, Chart as ChartJS, LinearScale, Tooltip, type ChartData, type ChartOptions } from "chart.js";
import { IconAlertTriangle, IconCheck, IconShip, IconTrendingDown, IconWavesElectricity } from "@tabler/icons-react";
import { DetailShell } from "../detail-shell";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip);

const subNav = [
  { label: "Why green hydrogen", id: "why-green-hydrogen" },
  { label: "Production system", id: "production-system" },
  { label: "How it works", id: "how-it-works" },
  { label: "Core technology", id: "core-technology" },
  { label: "Roadmap", id: "roadmap" },
];

const hydrogenMix = [
  { year: "2023", gray: 95, blue: 4, green: 1 }, { year: "2025", gray: 92, blue: 6, green: 2 },
  { year: "2027", gray: 85, blue: 10, green: 5 }, { year: "2030", gray: 60, blue: 25, green: 15 },
  { year: "2035", gray: 35, blue: 35, green: 30 }, { year: "2040", gray: 18, blue: 32, green: 50 },
  { year: "2045", gray: 10, blue: 25, green: 65 }, { year: "2050", gray: 6, blue: 18, green: 76 },
];

const hydrogenChartData: ChartData<"bar"> = {
  labels: hydrogenMix.map((item) => item.year),
  datasets: [
    { label: "Gray hydrogen", data: hydrogenMix.map((item) => item.gray), backgroundColor: "#898781", borderWidth: 0, stack: "hydrogen" },
    { label: "Blue hydrogen", data: hydrogenMix.map((item) => item.blue), backgroundColor: "#2a78d6", borderWidth: 0, stack: "hydrogen" },
    { label: "Green hydrogen", data: hydrogenMix.map((item) => item.green), backgroundColor: "#008300", borderWidth: 0, stack: "hydrogen" },
  ],
};

const hydrogenChartOptions: ChartOptions<"bar"> = {
  responsive: true, maintainAspectRatio: false, interaction: { mode: "index", intersect: false },
  plugins: { legend: { display: false }, tooltip: { enabled: true, backgroundColor: "#1a1a19", titleColor: "#ffffff", bodyColor: "#ffffff", borderColor: "rgba(255,255,255,0.1)", borderWidth: 1, padding: 10, titleFont: { size: 12, weight: 500 }, bodyFont: { size: 12 }, callbacks: { label: (ctx) => `${ctx.dataset.label}: ${ctx.parsed.y}%` } } },
  scales: { x: { stacked: true, grid: { display: false }, ticks: { color: "#898781", font: { size: 11 } } }, y: { stacked: true, beginAtZero: true, max: 100, grid: { color: "#e1e0d9" }, ticks: { color: "#898781", font: { size: 11 }, callback: (value) => `${value}%` } } },
};

const methods = [
  { method: "PEM", image: "/diag_pem.png", alt: "PEM electrolysis cell diagram", note: "what we build", strengths: ["High current density", "Compact", "Responds fast to variable renewables", "99.97–99.99% purity"], tradeoffs: ["Needs precious-metal catalysts — the exact cost problem we solve"], featured: true },
  { method: "AEC", image: "/diag_aec.png", alt: "AEC electrolysis cell diagram", strengths: ["Most mature", "Lowest capital cost", "No precious metals"], tradeoffs: ["Low current density", "Slow response", "Bulky", "Liquid electrolyte"] },
  { method: "AEM", image: "/diag_aem.png", alt: "AEM electrolysis cell diagram", strengths: ["Avoids precious metals", "Lower material cost"], tradeoffs: ["Durability unproven at commercial scale."] },
  { method: "SOEC", image: "/diag_soec.png", alt: "SOEC electrolysis cell diagram", strengths: ["Highest electrical efficiency of any method."], tradeoffs: ["700–850°C operation", "Material degradation", "Slow start-up"] },
];

const components = [
  { image: "/images/technology/enhanced_catalyst.png", metric: "30%+", qualifier: "cost reduction", name: "Catalyst", description: "Low-noble-metal formulation with longer operating life. Precious-metal loading is the largest lever on PEM cost." },
  { image: "/images/technology/enhanced_mea.png", metric: "37%", qualifier: "cost reduction", name: "MEA", description: "High current density with uniform large-area coating — more work per cell without adding material." },
  { image: "/images/technology/enhanced_ptl.png", metric: "25%", qualifier: "cost reduction", name: "Ti-PTL", description: "Pore-size controlled titanium. Pore structure governs how water and gas move through the cell." },
  { image: "/images/technology/enhanced_cell.png", metric: "2×", qualifier: "vs Nafion", name: "Electrolyte membrane", description: "Hydrocarbon-based, crossover ~1/4 of conventional PFSA — thinner membrane, double the durability.", caption: "Assembled stack — membrane shown in situ" },
];

const roadmap = [
  { name: "Seawater electrolysis", Icon: IconWavesElectricity, image: "/images/technology/roadmap-seawater-v2.jpg", alt: "Offshore wind turbines at sea", description: "Conventional electrolysis needs purified freshwater — a real constraint in coastal and water-scarce regions. Running directly on seawater removes that dependency and makes coastal production viable." },
  { name: "Hydrogen fuel cell vessels", Icon: IconShip, image: "/images/technology/roadmap-vessels.jpg", alt: "Small boats docked in a coastal harbor", description: "Hydrogen-powered leisure craft in Jeollanam-do, supplying clean hydrogen to vessels in the region's coastal waters. Boats operate far from hydrogen infrastructure — a natural fit for on-site production." },
];

export default function TechnologyPage() {
  return <DetailShell eyebrow="TECHNOLOGY" title="PEM technology by EST Solution" intro="We build every layer of the electrolysis stack ourselves — so green hydrogen costs less to make." subNav={subNav} hero={<section className="technology-hero" role="img" aria-label="Hydrogen storage tanks and wind turbines"><div className="technology-hero-overlay" /><div className="technology-hero-copy"><h1>PEM technology by <span>EST Solution</span></h1><p>We build every layer of the electrolysis stack ourselves — so green hydrogen costs less to make.</p><div className="technology-hero-actions"><a href="/products">Our products</a><a href="/contact">Get in touch</a></div></div></section>}>
    <div className="technology-page-content">
      <section className="technology-section technology-why-section nav-target" id="why-green-hydrogen">
        <div className="why-heading">
          <div><div className="why-eyebrow"><span /> WHY GREEN HYDROGEN</div><h2>Not all hydrogen is <span>created equal.</span></h2></div>
          <p>Most hydrogen today comes from fossil fuels. Green hydrogen uses renewable electricity and water, avoiding direct carbon emissions while creating a flexible energy carrier for industry, storage and power.</p>
        </div>
        <div className="hydrogen-comparison" aria-label="Carbon emissions by hydrogen production type">
          <article className="hydrogen-card gray"><small>FOSSIL-BASED</small><strong>~11<span>kg</span></strong><p>CO₂ per kg of H₂</p><h3>Gray hydrogen</h3></article>
          <article className="hydrogen-card blue"><small>CARBON CAPTURE</small><strong>3.5–3.9<span>kg</span></strong><p>CO₂ per kg of H₂</p><h3>Blue hydrogen</h3></article>
          <article className="hydrogen-card green"><small>RENEWABLE-POWERED</small><strong>0<span>kg</span></strong><p>Direct CO₂ per kg of H₂</p><h3>Green hydrogen</h3></article>
        </div>
        <div className="transition-chart-wrap">
          <div className="chart-copy"><div className="eyebrow"><span /> THE TRANSITION</div><h2>A cleaner production mix is taking shape.</h2><p>As renewable power expands and electrolysis costs fall, green hydrogen is expected to take a growing share of global production.</p></div>
          <div className="mix-chart" aria-label="Illustrative transition from gray and blue hydrogen toward green hydrogen from 2023 to 2050">
            <div className="chart-legend" aria-label="Chart legend"><span className="gray">Gray hydrogen</span><span className="blue">Blue hydrogen</span><span className="green">Green hydrogen</span></div>
            <div className="chart-canvas"><Bar data={hydrogenChartData} options={hydrogenChartOptions} /></div>
            <div className="chart-insight"><b>↘</b><span><strong>Green hydrogen is projected to become increasingly cost-competitive with blue hydrogen.</strong><small>Market outlook direction based on BNEF, 2022.</small></span></div>
          </div>
        </div>
        <p className="why-note">Emissions figures are based on EST Solution’s company brochure. Actual lifecycle emissions vary by feedstock, electricity source, capture rate and system boundaries.</p>
      </section>
      <section className="technology-section production-system-section nav-target" id="production-system">
        <div className="technology-eyebrow">PRODUCTION SYSTEM</div>
        <h2>From renewable power to <span>green hydrogen</span></h2>
        <p className="technology-intro">Renewable electricity and water are the only inputs. No carbon enters this loop at any stage — the only byproduct is oxygen.</p>
        <div className="production-system-panel">
          <svg viewBox="0 0 900 460" role="img" aria-label="Renewable power and water converge into an EST Solution PEM electrolyzer producing green hydrogen and oxygen">
            <path d="M126 150 C 240 150, 290 228, 320 232" fill="none" stroke="var(--border-stronger)" strokeWidth="2.5" />
            <path d="M126 300 C 240 300, 290 242, 320 238" fill="none" stroke="var(--border-stronger)" strokeWidth="2.5" />
            <path d="M580 234 C 680 215, 720 110, 800 104" fill="none" stroke="var(--border-stronger)" strokeWidth="2.5" />
            <path d="M580 246 C 680 275, 720 330, 800 338" fill="none" stroke="var(--border-stronger)" strokeWidth="2.5" />
            <g><circle cx="80" cy="150" r="50" fill="var(--bg-accent)" /><circle cx="72" cy="140" r="14" fill="none" stroke="var(--text-accent)" strokeWidth="2.5" /><g stroke="var(--text-accent)" strokeWidth="2.5"><line x1="72" y1="120" x2="72" y2="115" /><line x1="72" y1="165" x2="72" y2="160" /><line x1="52" y1="140" x2="47" y2="140" /><line x1="58" y1="126" x2="54" y2="122" /><line x1="58" y1="154" x2="54" y2="158" /></g><path d="M92 128 L109 138 L92 148 Z" fill="var(--text-accent)" opacity="0.85" /></g>
            <text x="80" y="216" textAnchor="middle" fontSize="12" fontWeight="500" fill="var(--text-primary)">Renewable power</text><text x="80" y="232" textAnchor="middle" fontSize="10" fill="var(--text-muted)">Solar and wind</text>
            <g><circle cx="80" cy="300" r="50" fill="var(--bg-accent)" /><path d="M80 274 C 92 290, 100 302, 100 312 A 20 20 0 1 1 60 312 C 60 302, 68 290, 80 274 Z" fill="var(--text-accent)" /><ellipse cx="72" cy="308" rx="4" ry="7" fill="var(--bg-accent)" opacity="0.6" /></g>
            <text x="80" y="366" textAnchor="middle" fontSize="12" fontWeight="500" fill="var(--text-primary)">Water</text><text x="80" y="382" textAnchor="middle" fontSize="10" fill="var(--text-muted)">Feedstock, not fuel</text>
            <rect x="320" y="95" width="260" height="260" rx="20" fill="var(--surface-2)" stroke="var(--fill-accent)" strokeWidth="2.5" /><rect x="345" y="118" width="210" height="158" rx="10" fill="var(--surface-1)" /><image href="/images/technology/prod_electrolyzer_hq.png" x="360" y="128" width="180" height="135" preserveAspectRatio="xMidYMid meet" />
            <text x="450" y="298" textAnchor="middle" fontSize="14" fontWeight="500" fill="var(--text-primary)">PEM electrolyzer</text><text x="450" y="316" textAnchor="middle" fontSize="11" fill="var(--text-muted)">H2-241002A, our own unit</text>
            <g><circle cx="850" cy="90" r="44" fill="var(--bg-success)" /><circle cx="837" cy="90" r="10" fill="none" stroke="var(--text-success)" strokeWidth="2.5" /><circle cx="863" cy="90" r="10" fill="none" stroke="var(--text-success)" strokeWidth="2.5" /><line x1="847" y1="90" x2="853" y2="90" stroke="var(--text-success)" strokeWidth="2.5" /><text x="850" y="114" textAnchor="middle" fontSize="9" fill="var(--text-success)" fontWeight="500">H₂</text></g>
            <text x="850" y="156" textAnchor="middle" fontSize="12" fontWeight="500" fill="var(--text-primary)">Green hydrogen</text><text x="850" y="172" textAnchor="middle" fontSize="10" fill="var(--text-muted)">Stored or dispensed</text>
            <g><circle cx="850" cy="348" r="38" fill="var(--surface-1)" /><circle cx="840" cy="348" r="8.5" fill="none" stroke="var(--text-secondary)" strokeWidth="2" /><circle cx="860" cy="348" r="8.5" fill="none" stroke="var(--text-secondary)" strokeWidth="2" /><line x1="848" y1="348" x2="852" y2="348" stroke="var(--text-secondary)" strokeWidth="2" /><text x="850" y="366" textAnchor="middle" fontSize="8" fill="var(--text-secondary)" fontWeight="500">O₂</text></g>
            <text x="850" y="400" textAnchor="middle" fontSize="11" fontWeight="500" fill="var(--text-secondary)">Oxygen</text><text x="850" y="416" textAnchor="middle" fontSize="9" fill="var(--text-muted)">Released, no CO₂</text>
          </svg>
        </div>
        <p className="production-system-caption">The unit shown at the center is our own H2-241002A electrolyzer, not a stock illustration.</p>
      </section>
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
      <section className="technology-section nav-target" id="roadmap"><h2>Where we're <span>taking this.</span></h2><p className="technology-intro">Two active development directions, both aimed at removing practical limits on where green hydrogen can be produced and used.</p><div className="roadmap-grid">{roadmap.map(({ name, Icon, image, alt, description }) => <article key={name}><div className="roadmap-photo"><img src={image} alt={alt} /></div><div className="roadmap-content"><div className="roadmap-icon"><Icon size={24} stroke={1.8} /></div><h3>{name}</h3><p>{description}</p></div></article>)}</div></section>
      <section className="technology-section product-portfolio nav-target" id="product-portfolio">
        <h2 className="portfolio-title">Our product <span>portfolio.</span></h2>
        <div className="portfolio-grid">
          <div className="portfolio-visual"><img src="/images/technology/prod_electrolyzer_hq.png" alt="H2-241002A PEM electrolysis system" /></div>
          <div className="portfolio-copy">
            <p className="portfolio-headline"><strong>Compact, containerized electrolyzers</strong> ready to install, from <strong>2.5kW to 20kW</strong>.</p>
            <div className="portfolio-hook" aria-label="Product highlights"><span>Ready to install</span><strong>2.5–20 kW range</strong></div>
            <p className="portfolio-support">PEM electrolysis systems: pilot, prove, and scale your green hydrogen production.</p>
            <div className="portfolio-actions"><a href="/products">View products</a><a className="primary" href="/contact">Request a quote</a></div>
          </div>
        </div>
      </section>
    </div>
  </DetailShell>;
}
