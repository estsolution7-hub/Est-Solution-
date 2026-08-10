"use client";

import { FormEvent, useState } from "react";

const navItems = [
  ["technology", "Technology", "기술"],
  ["products", "Products", "제품"],
  ["proof", "Proof & Partners", "성과·파트너"],
  ["company", "Company", "회사소개"],
  ["contact", "Contact", "문의"],
];

const technologies = [
  {
    number: "01",
    eyebrow: "HYDROGEN PRODUCTION",
    title: "Green hydrogen systems",
    copy: "Research and development across alkaline and PEM water electrolysis—connecting core materials, components and stack engineering into one development path.",
    tags: ["Alkaline", "PEM", "System engineering"],
    tone: "azure",
  },
  {
    number: "02",
    eyebrow: "CORE COMPONENTS",
    title: "Catalyst · MEA · Stack",
    copy: "In-house know-how spanning catalyst synthesis, membrane electrode assemblies and stack processes helps shorten iteration cycles and strengthen technical control.",
    tags: ["Catalyst", "Electrode", "MEA", "Stack"],
    tone: "teal",
  },
  {
    number: "03",
    eyebrow: "INTEGRATED ENERGY",
    title: "Solar power systems",
    copy: "Solar source and system capabilities designed to complement hydrogen production and support practical carbon-neutral energy projects.",
    tags: ["BIPV", "Plant", "Integrated systems"],
    tone: "green",
  },
];

const products = [
  { code: "M", title: "Membrane & MEA", copy: "Core interfaces engineered for water-electrolysis development and system integration.", meta: "Hydrogen components" },
  { code: "C", title: "Catalyst & Electrode", copy: "Carbon catalysts, hydrogen electrodes and cell-focused development for clean-energy applications.", meta: "Materials & components" },
  { code: "S", title: "Solar Modules", copy: "Mono, poly, steel-integrated, plant and BIPV module options for diverse project environments.", meta: "Renewable generation" },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [language, setLanguage] = useState<"EN" | "KR">("EN");
  const [submitted, setSubmitted] = useState(false);

  function submitInquiry(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  const korean = language === "KR";

  return (
    <main>
      <header className="site-header">
        <a className="brand brand-image" href="#top" aria-label="EST Solution home">
          <img src="/est-solution-logo.png" alt="EST Solution" />
        </a>
        <nav className={menuOpen ? "nav open" : "nav"} aria-label="Primary navigation">
          {navItems.map(([id, en, kr]) => (
            <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>{korean ? kr : en}</a>
          ))}
        </nav>
        <div className="header-actions">
          <button className="language" onClick={() => setLanguage(korean ? "EN" : "KR")} aria-label="Switch language">
            <b>{language}</b><span>{korean ? "English" : "한국어"}</span>
          </button>
          <a className="header-cta" href="#contact">{korean ? "기술 문의" : "Technical inquiry"}<span>↗</span></a>
          <button className="menu" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label="Toggle navigation">
            <span /><span />
          </button>
        </div>
      </header>

      <section className="hero" id="top">
        <div className="hero-background" aria-hidden="true"><img src="/hydrogen-hero.png" alt="" /></div>
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-copy">
          <div className="eyebrow light"><span /> EST SOLUTION · CLEAN ENERGY R&D</div>
          <h1>{korean ? <>물에서 시작해,<br /><em>에너지의 미래</em>를 만듭니다.</> : <>From water to a<br /><em>cleaner energy future.</em></>}</h1>
          <p>{korean
            ? "촉매와 MEA부터 수전해 스택까지. 이에스티솔루션은 경제적인 그린수소 생산을 위한 핵심 기술을 개발합니다."
            : "From catalysts and MEAs to water-electrolysis stacks, EST Solution develops the core technologies that make green hydrogen more practical."}</p>
          <div className="hero-actions">
            <a className="button primary" href="#technology">{korean ? "기술 살펴보기" : "Explore our technology"}<span>→</span></a>
          </div>
        </div>
      </section>

      <section className="signal-bar" aria-label="Company highlights">
        <div><small>CORE SCOPE</small><strong>Catalyst → MEA → Stack</strong></div>
        <div><small>TECHNOLOGIES</small><strong>Alkaline + PEM</strong></div>
        <div><small>ESTABLISHED</small><strong>August 2023</strong></div>
        <div><small>LOCATION</small><strong>Gwangju · Naju</strong></div>
      </section>

      <section className="section intro" id="technology">
        <div className="section-heading">
          <div className="eyebrow"><span /> TECHNOLOGY PORTFOLIO</div>
          <h2>One connected path<br />from material to system.</h2>
        </div>
        <p className="section-lead">Energy technology performs best when every layer is understood. Our development scope connects core hydrogen components with renewable-energy systems—creating a clearer path from research to real-world application.</p>
        <div className="technology-grid">
          {technologies.map((item) => (
            <article className={`technology-card ${item.tone}`} key={item.number}>
              <div className="card-index">{item.number}</div>
              <div className="card-orbit" aria-hidden="true"><i /><i /></div>
              <small>{item.eyebrow}</small>
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
              <div className="tag-row">{item.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
              <a href="#contact" aria-label={`Discuss ${item.title}`}>Discuss a project <b>↗</b></a>
            </article>
          ))}
        </div>
      </section>

      <section className="process-section">
        <div className="process-copy">
          <div className="eyebrow light"><span /> HOW IT CONNECTS</div>
          <h2>A clean energy chain,<br />engineered end to end.</h2>
          <p>We connect renewable input, electrolysis development and practical hydrogen use in one understandable system story.</p>
        </div>
        <div className="process-flow">
          {[
            ["01", "Renewable power", "Solar and clean electricity"],
            ["02", "Water electrolysis", "Alkaline + PEM systems"],
            ["03", "Green hydrogen", "Zero-carbon energy carrier"],
            ["04", "Application", "Industry · storage · power"],
          ].map(([n, title, copy], index) => (
            <div className="process-step" key={n}>
              <div className="process-icon"><b>{n}</b><span>{index === 0 ? "☀" : index === 1 ? "H₂O" : index === 2 ? "H₂" : "↗"}</span></div>
              <h3>{title}</h3><p>{copy}</p>{index < 3 && <i className="connector" />}
            </div>
          ))}
        </div>
      </section>

      <section className="section products" id="products">
        <div className="section-heading inline">
          <div><div className="eyebrow"><span /> PRODUCTS & COMPONENTS</div><h2>Built for technical progress.</h2></div>
          <p>Clear product families, consistent technical information and a direct route to the people who can answer detailed questions.</p>
        </div>
        <div className="product-list">
          {products.map((product, index) => (
            <article className="product-row" key={product.code}>
              <div className="product-code">{product.code}<span>0{index + 1}</span></div>
              <div><small>{product.meta}</small><h3>{product.title}</h3></div>
              <p>{product.copy}</p>
              <a href="#contact" aria-label={`Ask about ${product.title}`}>Technical details <span>→</span></a>
            </article>
          ))}
        </div>
      </section>

      <section className="proof-section" id="proof">
        <div className="section proof-inner">
          <div className="proof-copy">
            <div className="eyebrow light"><span /> VALIDATED MOMENTUM</div>
            <h2>Proof before promises.</h2>
            <p>As a young deep-tech company, credibility comes from transparent milestones, active R&D and clearly stated development status.</p>
            <a className="text-link" href="#company">View company milestones <span>→</span></a>
          </div>
          <div className="proof-metrics">
            <div><strong>03</strong><span>Intellectual property rights</span><small>Reported in 2025 profile</small></div>
            <div><strong>07</strong><span>Supported projects completed</span><small>Reported in 2025 profile</small></div>
            <div><strong>04</strong><span>Projects in progress</span><small>Reported in 2025 profile</small></div>
            <div><strong>02</strong><span>Trademark applications</span><small>Reported in 2025 profile</small></div>
          </div>
        </div>
      </section>

      <section className="section company" id="company">
        <div className="company-panel">
          <div className="company-monogram">E<span>S</span>T</div>
          <div className="company-copy">
            <div className="eyebrow"><span /> WHO WE ARE</div>
            <h2>Technology grounded in<br />energy independence.</h2>
            <p>EST Solution is a Korean renewable-energy manufacturer developing green-hydrogen production systems and solar solutions. Our goal is to strengthen local core technology and contribute to a more resilient, carbon-neutral energy future.</p>
            <div className="company-facts"><span><small>CEO</small>Kim Dong-ho</span><span><small>INDUSTRY</small>Manufacturing</span><span><small>FOCUS</small>Hydrogen · Solar</span></div>
          </div>
        </div>
        <div className="values">
          {[["01","Customer focus"],["02","New technology"],["03","Value creation"],["04","Passion & challenge"]].map(([n,v]) => <div key={n}><small>{n}</small><strong>{v}</strong></div>)}
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="contact-copy">
          <div className="eyebrow light"><span /> START A CONVERSATION</div>
          <h2>What energy challenge<br />are you solving?</h2>
          <p>Tell us about your application, target capacity and timeline. We’ll route your inquiry to the right technical conversation.</p>
          <div className="contact-details">
            <a href="tel:+82629720823"><small>CALL</small>+82 62 972 0823</a>
            <a href="mailto:estsolution1@naver.com"><small>EMAIL</small>estsolution1@naver.com</a>
          </div>
          <address><small>HEADQUARTERS</small>GIST Startup Promotion Center B, Room 302<br />123 Cheomdangwagi-ro, Buk-gu, Gwangju, Korea</address>
        </div>
        <form className="inquiry-form" onSubmit={submitInquiry}>
          {submitted ? (
            <div className="form-success" role="status"><span>✓</span><h3>Thank you.</h3><p>Your inquiry is ready for review. This prototype does not send data; connect the production form to EST Solution’s approved email workflow.</p><button type="button" onClick={() => setSubmitted(false)}>Send another inquiry</button></div>
          ) : <>
            <div className="form-title"><span>TECHNICAL INQUIRY</span><b>Fields marked * are required</b></div>
            <div className="form-grid">
              <label><span>Name *</span><input required name="name" placeholder="Your name" /></label>
              <label><span>Organization *</span><input required name="organization" placeholder="Company or institute" /></label>
              <label><span>Work email *</span><input required type="email" name="email" placeholder="name@company.com" /></label>
              <label><span>Area of interest *</span><select required name="interest" defaultValue=""><option value="" disabled>Select one</option><option>Water electrolysis system</option><option>Catalyst / Electrode</option><option>Membrane / MEA</option><option>Solar power system</option><option>R&D partnership</option></select></label>
              <label className="full"><span>Project context</span><textarea name="message" rows={4} placeholder="Application, target capacity, timeline and the challenge you are solving" /></label>
            </div>
            <label className="consent"><input type="checkbox" required /><span>I agree to the collection and use of my information for responding to this inquiry. *</span></label>
            <button className="submit" type="submit">Send technical inquiry <span>↗</span></button>
          </>}
        </form>
      </section>

      <footer>
        <a className="brand footer-brand" href="#top"><span className="brand-mark"><i /><i /><i /></span><span><strong>EST</strong><small>ENERGY SPACE TECHNOLOGY</small></span></a>
        <p>Core technology for a cleaner, more independent energy future.</p>
        <div className="footer-links"><a href="#technology">Technology</a><a href="#products">Products</a><a href="#proof">Proof</a><a href="#company">Company</a><a href="#contact">Contact</a></div>
        <div className="footer-bottom"><span>© 2026 EST Solution Co., Ltd. Concept redesign.</span><span>Gwangju · Naju · Republic of Korea</span></div>
      </footer>
    </main>
  );
}
