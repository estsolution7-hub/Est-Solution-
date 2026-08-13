import { IconQuote } from "@tabler/icons-react";
import { DetailShell } from "../detail-shell";

const subNav = [
  { label: "Overview", id: "overview" },
  { label: "CEO message", id: "ceo-message" },
  { label: "Team", id: "team" },
  { label: "Advisors", id: "team-advisors" },
  { label: "Partners and certifications", id: "partners-certifications" },
  { label: "Case study", id: "case-study" },
];

const partnerLogos = [...Array.from({ length: 20 }, (_, i) => `/partners/inst_${String(i + 1).padStart(2, "0")}.png`), ...Array.from({ length: 10 }, (_, i) => `/partners/uni_${String(i + 1).padStart(2, "0")}.png`)];

export default function CompanyPage() {
  return <DetailShell eyebrow="COMPANY" title="A focused team for practical green hydrogen." intro="EST Solution develops renewable-energy technology through local technical capability, connected R&D and deployable hydrogen systems." subNav={subNav} hero={
    <section className="company-hero hero-gradient">
      <div className="company-bubbles" aria-hidden="true">
        <i className="bubble bubble-1" /><i className="bubble bubble-2" /><i className="bubble bubble-3" /><i className="bubble bubble-4" />
        <i className="bubble bubble-5" /><i className="bubble bubble-6" /><i className="bubble bubble-7" /><i className="bubble bubble-8" />
      </div>
      <div className="company-hero-copy">
        <p className="company-hero-eyebrow">Company</p>
        <h1>13 years in hydrogen.<br />3 years as a company.</h1>
        <p>EST Solution engineers green hydrogen production systems in-house, from catalyst to finished stack — built on technical experience developed over more than a decade.</p>
        <div className="company-hero-actions"><a href="#team">Meet the team</a><a href="/contact">Get in touch</a></div>
      </div>
    </section>
  }>
    <div className="detail-content nav-section-stack">
      <section className="detail-section nav-target" id="overview"><div className="eyebrow"><span /> OVERVIEW</div><div className="detail-intro"><h2>Technology with a clear purpose.</h2><p>Founded in 2023, EST Solution works across the PEM water-electrolysis value chain: catalyst synthesis, membrane electrode assemblies, hydrocarbon membranes, porous transport layers, stack engineering and independent hydrogen production systems. The goal is to strengthen energy independence while helping customers move toward carbon-neutral operations.</p></div><div className="feature-grid"><article><small>FOUNDED</small><h3>2023</h3><p>Growing from Gwangju and Naju, Republic of Korea.</p></article><article><small>CORE SCOPE</small><h3>Catalyst → MEA → Stack</h3><p>Connected development across the interfaces that determine cost and performance.</p></article><article><small>PLATFORM</small><h3>PEM electrolysis</h3><p>Scalable systems for research, demonstration and distributed deployment.</p></article></div></section>
      <section className="detail-section nav-target company-ceo" id="ceo-message"><div className="eyebrow"><span /> CEO MESSAGE</div><div className="company-ceo-grid"><img src="/est-solution-ceo.png" alt="EST Solution founder and CEO with hydrogen equipment" /><blockquote><IconQuote size={32} stroke={1.6} /><p>We put trust and value creation with our customers first. Through relentless in-house research, we are building a green hydrogen energy society and working toward true energy self-sufficiency through core technology we own ourselves.</p><small>Founder and CEO · EST Solution</small></blockquote></div></section>
      <section className="detail-section nav-target company-team" id="team">
        <div className="company-team-label"><span /><p>Team</p></div>
        <h2>The people building it</h2>
        <div className="company-team-grid">
          <article className="company-team-card">
            <header><img src="/kim-dong-ho.jpg" alt="Kim Dong-ho, CEO of EST Solution" /><div><h3>Kim Dong-ho</h3><p>CEO · Ph.D., Energy Resources Engineering</p></div></header>
            <div className="company-team-stat"><strong>13</strong><span>years leading hydrogen and fuel cell research, before founding EST</span></div>
            <div className="company-team-divider" />
            <p className="company-team-bio">Before starting EST Solution, Kim Dong-ho spent over a decade as <strong>VP and Director of Research</strong> at hydrogen and fuel cell research institutes. That track record shows up as <strong>director-level trust</strong> today: he sits on the Gwangju Hydrogen Planning Committee and reviews national gas safety standards as Director of the Korea Hydrogen Safety Association.</p>
          </article>
          <article className="company-team-card">
            <header><img src="/park-seo-jin.jpg" alt="Park Seo-jin, senior researcher at EST Solution" /><div><h3>Park Seo-jin</h3><p>Senior researcher · New material engineering</p></div></header>
            <div className="company-team-stat"><strong>6</strong><span>years focused specifically on hydrogen materials engineering</span></div>
            <div className="company-team-divider" />
            <p className="company-team-bio">Park Seo-jin owns the process at the <strong>core of every EST stack</strong>: she manages MEA production, the membrane electrode assembly step where catalyst, membrane, and electrode become a single working unit. It&apos;s the hardest part of the stack to get right, and the one she&apos;s spent her career on.</p>
          </article>
        </div>
      </section>
      <section className="detail-section nav-target" id="team-advisors"><div className="eyebrow"><span /> TEAM AND ADVISORS</div><h2>Research depth connected to application.</h2><div className="feature-grid"><article><small>LEADERSHIP</small><h3>Commercial direction</h3><p>Customer requirements and deployment constraints shape the product and research roadmap.</p></article><article><small>ENGINEERING</small><h3>Materials to systems</h3><p>Researchers connect catalyst, MEA, transport-layer and stack decisions across one platform.</p></article><article><small>ADVISORY NETWORK</small><h3>University collaboration</h3><p>Academic and institutional relationships extend testing, validation and specialist knowledge.</p></article></div></section>
      <section className="detail-section nav-target" id="partners-certifications"><div className="eyebrow"><span /> PARTNERS AND CERTIFICATIONS</div><h2>An ecosystem built around proof.</h2><p className="detail-section-lead">EST Solution collaborates with Korean research institutes, public institutions, technology parks and universities. Patent filings, selected programs and field demonstrations support the company’s growing technical evidence base.</p><div className="company-partner-grid">{partnerLogos.map((src) => <div key={src}><img src={src} alt="EST Solution partner organization logo" /></div>)}</div></section>
      <section className="detail-section nav-target" id="case-study"><div className="eyebrow"><span /> CASE STUDY</div><h2>Tested indoors and demonstrated in the field.</h2><div className="case-photos company-case-photos"><img src="/field-demonstration.jpg" alt="Outdoor field demonstration of EST Solution hydrogen equipment" /><img src="/hydrogen-prototype.jpg" alt="Indoor testing of EST Solution hydrogen equipment" /></div><p className="detail-section-lead">A self-contained hydrogen system was operated under controlled indoor conditions and presented as an outdoor field demonstration, showing how distributed production can move beyond the laboratory.</p></section>
    </div>
  </DetailShell>;
}
