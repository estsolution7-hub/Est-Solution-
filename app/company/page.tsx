import { IconQuote } from "@tabler/icons-react";
import { DetailShell } from "../detail-shell";
import { PartnersSection } from "./partners-section";

const subNav = [
  { label: "Team", id: "team" },
  { label: "Milestones", id: "milestones" },
  { label: "Certifications & IP", id: "certifications" },
  { label: "Partners & universities", id: "partners" },
  { label: "CEO message", id: "ceo-message" },
  { label: "Case study", id: "case-study" },
];

const ipRows = [
  { category: "Application", title: "Method for manufacturing membrane electrode assembly, membrane electrode assembly, and water electrolysis apparatus", date: "26.02.26", number: "10-2026-0035753" },
  { category: "Registration", title: "Method for manufacturing low-cost hydrocarbon-based polymer electrolyte membrane", date: "26.04.29", number: "10-2961064-00-00" },
  { category: "Application", title: "Water electrolysis system comprising surface-treated titanium porous transport layer (Ti-PTL)", date: "24.10.28", number: "10-2024-0149069" },
  { category: "Trademark", title: "Registered trademark", date: "2025.09.26", number: "40-2025-0098856" },
  { category: "Trademark", title: "Trademark application", date: "2025.05.31", number: "40-2025-0098855" },
] as const;

const certificates = [
  { src: "/assets/company/cert1_venture_inspect.png", alt: "Venture Enterprise Verification Certificate", caption: "Venture Enterprise Verification" },
  { src: "/assets/company/cert2_demo_inspect.png", alt: "Demonstration Confirmation Certificate", caption: "Demonstration Confirmation" },
  { src: "/assets/company/cert3_energy_inspect.png", alt: "Energy Specialized Enterprise Certificate", caption: "Energy Specialized Enterprise" },
  { src: "/assets/company/cert4_penguin_inspect.png", alt: "First Penguin Company Selection Certificate", caption: '"First Penguin" Company Selection' },
] as const;

export default function CompanyPage() {
  return <DetailShell eyebrow="COMPANY" title="A focused team for practical green hydrogen." intro="EST Solution develops renewable-energy technology through local technical capability, connected R&D and deployable hydrogen systems." subNav={subNav} closingCta={<></>} hero={
    <section className="company-hero hero-gradient">
      <div className="company-bubbles" aria-hidden="true">
        <i className="bubble bubble-1" /><i className="bubble bubble-2" /><i className="bubble bubble-3" /><i className="bubble bubble-4" />
        <i className="bubble bubble-5" /><i className="bubble bubble-6" /><i className="bubble bubble-7" /><i className="bubble bubble-8" />
      </div>
      <div className="company-hero-copy">
        <p className="company-hero-eyebrow">Company</p>
        <h1>13 years in hydrogen.<br />3 years as a company.</h1>
        <p>EST Solution engineers green hydrogen production systems in-house, from catalyst to finished stack вЂ” built on technical experience developed over more than a decade.</p>
        <div className="company-hero-actions"><a href="#team">Meet the team</a><a href="/contact">Get in touch</a></div>
      </div>
    </section>
  }>
    <div className="detail-content nav-section-stack">
      <section className="detail-section nav-target company-team" id="team">
        <div className="company-team-label"><span /><p>Team</p></div>
        <h2>The people building it</h2>
        <div className="company-team-grid">
          <article className="company-team-card">
            <header><img src="/kim_dongho_circle_final.png" alt="Kim Dong-ho" /><div><h3>Kim Dong-ho</h3><p>CEO В· Ph.D., Energy Resources Engineering</p></div></header>
            <div className="company-team-stat"><strong>13</strong><span>years leading hydrogen<br />and fuel cell research,<br />before founding EST</span></div>
            <div className="company-team-divider" />
            <p className="company-team-bio">Before starting EST Solution, Kim Dong-ho spent over a decade as <strong>VP and Director of Research</strong> at hydrogen and fuel cell research institutes. That track record shows up as <strong>director-level trust</strong> today: he sits on the Gwangju Hydrogen Planning Committee and reviews national gas safety standards as Director of the Korea Hydrogen Safety Association.</p>
          </article>
          <article className="company-team-card">
            <header><img src="/park_seojin_circle_v2.png" alt="Park Seo-jin" /><div><h3>Park Seo-jin</h3><p>Senior researcher В· New material engineering</p></div></header>
            <div className="company-team-stat"><strong>6</strong><span>years focused<br />specifically on hydrogen<br />materials engineering</span></div>
            <div className="company-team-divider" />
            <p className="company-team-bio">Park Seo-jin owns the process at the <strong>core of every EST stack</strong>: she manages MEA production, the membrane electrode assembly step where catalyst, membrane, and electrode become a single working unit. It&apos;s the hardest part of the stack to get right, and the one she&apos;s spent her career on.</p>
          </article>
        </div>
      </section>
      <section className="detail-section nav-target company-milestones" id="milestones">
        <div className="company-milestones-layout">
          <div className="company-milestones-intro">
            <div className="company-team-label"><span /><p>Milestones</p></div>
            <h2>Three years, nine government-backed programs</h2>
            <p>Founded August 2023. Since then, EST has been selected for nine national and regional R&amp;D programs, spanning stack materials, mobile deployment, and BOP engineering, with seven additional projects in progress.</p>
          </div>
          <div className="company-milestones-stack">
            <article className="milestone-card milestone-01"><header><div><h3>KEPCO</h3><small>24.08 ~</small></div><b>01</b></header><p>Commercialization of manufacturing technologies for high-efficiency, large-area MEAs and PEM water electrolysis stacks</p></article>
            <article className="milestone-card milestone-02"><header><div><h3>Ministry of SMEs and Startups (Entrusted: KENTECH)</h3><small>24.08 ~</small></div><b>02</b></header><p>Development of stack commercialization manufacturing technology for 2.5kW PEMWE with high efficiency through R&amp;D of low-cost hydrocarbon electrolyte membrane</p></article>
            <article className="milestone-card milestone-03"><header><div><h3>Gwangju Technopark <span>Best Enterprise Selection</span></h3><small>24.10 ~</small></div><b>03</b></header><p>Mobility utilization using green hydrogen production technology and citizen-engaged demonstration commercialization for carbon neutrality</p></article>
            <article className="milestone-card milestone-04"><header><div><h3>Ministry of SMEs and Startups (Co-operation: KITECH)</h3><small>25.05 ~</small></div><b>04</b></header><p>Development of Ti-PTL commercialization performance technology based on high-efficiency PEM water electrolysis tape casting process</p></article>
            <article className="milestone-card milestone-05"><header><div><h3>Ministry of Education</h3><small>25.08 ~</small></div><b>05</b></header><p>MEA manufacturing technology utilizing high-durability, low-cost hydrocarbon-based electrolyte membranes and applied R&amp;D on core technologies for small-scale PEM water electrolysis stacks</p></article>
            <article className="milestone-card milestone-06"><header><div><h3>Jeonnam Technopark</h3><small>25.09 ~</small></div><b>06</b></header><p>Integrated BOP optimization manufacturing technology and low-cost commercialization for large-area stack-based PEM water electrolysis systems</p></article>
            <article className="milestone-card milestone-07"><header><div><h3>KISED</h3><small>26.04 ~</small></div><b>07</b></header><p>Commercialization of modular PEM water electrolysis systems for distributed green hydrogen production</p></article>
            <article className="milestone-card milestone-08"><header><div><h3>Ministry of SMEs and Startups (Co-operation: KITECH)</h3><small>26.04 ~</small></div><b>08</b></header><p>Development of technology for commercialization of 100cm² class Ti-PTL based on tape casting process for PEM water electrolysis</p></article>
            <article className="milestone-card milestone-09"><header><div><h3>Ministry of Education</h3><small>26.06 ~</small></div><b>09</b></header><p>Localization of pore structure-controlled Ti-PTL and development of commercialization technology for 25cm² scale PEM water electrolysis unit cells</p></article>
            <p className="company-milestones-footnote">Seven additional development projects are underway beyond the nine listed here.</p>
          </div>
        </div>
      </section>
      <section className="detail-section nav-target company-certifications" id="certifications">
        <div className="company-team-label"><span /><p>Certifications &amp; IP</p></div>
        <h2>Protected, verified, and government-recognized</h2>
        <p className="company-certifications-lead">Five active patents and trademarks, and four certifications from Korean national and regional agencies confirming EST&apos;s technology and business status.</p>

        <h3 className="company-certifications-subtitle">IP status</h3>
        <div className="company-ip-table-wrap">
          <table className="company-ip-table">
            <thead><tr><th>Category</th><th>IP title</th><th>Date</th><th>App. / reg. no.</th></tr></thead>
            <tbody>{ipRows.map((row) => <tr key={row.number}>
              <td><span className={`ip-badge ip-${row.category.toLowerCase()}`}>{row.category}</span></td>
              <td>{row.title}</td><td>{row.date}</td><td>{row.number}</td>
            </tr>)}</tbody>
          </table>
        </div>
        <div className="company-ip-mobile" aria-label="IP status">
          {ipRows.map((row) => <article key={row.number}>
            <span className={`ip-badge ip-${row.category.toLowerCase()}`}>{row.category}</span>
            <dl><div><dt>IP title</dt><dd>{row.title}</dd></div><div><dt>Date</dt><dd>{row.date}</dd></div><div><dt>App. / reg. no.</dt><dd>{row.number}</dd></div></dl>
          </article>)}
        </div>

        <h3 className="company-certifications-subtitle">Certifications</h3>
        <div className="company-certifications-grid">
          {certificates.map((certificate) => <figure key={certificate.src}><img src={certificate.src} alt={certificate.alt} /><figcaption>{certificate.caption}</figcaption></figure>)}
        </div>
        <p className="company-certifications-disclosure">All four certificates are genuine, issued by Korean national and regional government agencies (2025 Venture Enterprise Verification, Gwangju Metropolitan City Demonstration Confirmation, Ministry of Climate Energy and Environment Energy-Specialized Enterprise Designation, and KODIT &quot;First Penguin&quot; Company Selection).</p>
      </section>
      <PartnersSection />
      <section className="detail-section nav-target company-ceo" id="ceo-message">
        <div className="company-ceo-inner">
          <div className="company-ceo-label"><span /><p>CEO message</p></div>
          <div className="company-ceo-grid">
            <blockquote><span className="company-ceo-quote-mark" aria-hidden="true">&ldquo;</span><p>Trust with our customers comes first. Everything else follows from it: relentless in-house research, technology we own outright, and a green hydrogen society built on real energy self-sufficiency.</p><small>Founder and CEO, Kim Dong-ho &middot; EST Solution</small></blockquote>
            <img src="/est-solution-ceo.png" alt="Kim Dong-ho, CEO" />
          </div>
        </div>
      </section>
      <section className="detail-section nav-target company-case-study" id="case-study">
        <div className="eyebrow"><span /> CASE STUDY</div>
        <h2>Built to work <span>outside the lab.</span></h2>
        <p className="company-case-lead">EST validated the core hydrogen production and mobility system indoors under controlled conditions, then took the same hardware outside and ran it as a live field demonstration. No swaps, no simulations. The system that passed the bench is the system that ran in the field.</p>
        <div className="company-case-grid">
          <figure>
            <img src="/field-demonstration.jpg" alt="Outdoor field demonstration setup" />
            <figcaption>Field demonstration setup</figcaption>
          </figure>
          <figure>
            <img src="/hydrogen-prototype.jpg" alt="Hydrogen system hardware detail" />
            <figcaption>System internals, indoor test bench</figcaption>
          </figure>
        </div>
        <p className="company-case-note">Core performance data recorded under controlled indoor conditions.</p>
      </section>
      <section className="nav-target company-closing-cta" id="company-products">
        <div className="company-closing-copy">
          <div className="company-closing-pills" aria-label="Product highlights">
            <span>Ready to install</span>
            <strong>2.5–20 kW range</strong>
          </div>
          <h2>Compact, containerized electrolyzers, ready to install.</h2>
          <p>PEM electrolysis systems to pilot, prove, and scale your green hydrogen production, and a team ready to talk through your project.</p>
          <div className="company-closing-actions">
            <a className="primary" href="/products">View products</a>
            <a href="/contact">Get in touch</a>
          </div>
        </div>
        <img className="company-closing-product" src="/images/technology/prod_electrolyzer_hq_clean.png" alt="H2-241002A containerized PEM electrolysis system" />
        <img className="company-closing-mark" src="/favicon.svg" alt="" aria-hidden="true" />
      </section>
    </div>
  </DetailShell>;
}

