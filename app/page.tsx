"use client";

import { FormEvent, useEffect, useState } from "react";

const heroSlides = [
  { src: "/hero-hydrogen-clean.png", label: "Hydrogen storage and wind power" },
  { src: "/hero-solar-clean.png", label: "Solar energy field" },
  { src: "/hero-forest-clean.png", label: "Forest and natural environment" },
];

const navItems = [
  ["about", "About", "회사소개"],
  ["challenges", "Challenges", "해결과제"],
  ["products", "Products", "제품"],
  ["results", "Results", "성과"],
  ["contact", "Contact", "문의"],
];

const challenges = [
  { number: "01", title: "Carbon-heavy hydrogen", copy: "Conventional hydrogen can carry a significant emissions burden. Renewable-powered electrolysis creates a direct route to zero-carbon hydrogen production." },
  { number: "02", title: "High component cost", copy: "Imported catalysts, membranes and stack parts make projects harder to scale. Local engineering is focused on reducing cost without sacrificing performance." },
  { number: "03", title: "Fragmented supply chains", copy: "When materials, MEAs and stacks come from separate suppliers, development slows. EST Solution connects these layers in one technical workflow." },
  { number: "04", title: "Scaling with confidence", copy: "Distributed sites need flexible capacity and resilient operation. Modular single- and multi-stack designs help systems grow with demand." },
];

const solutions = [
  { href: "/products/systems", eyebrow: "WATER ELECTROLYSIS", title: "PEM stack systems", copy: "A scalable 2.5, 5 and 20 kW stack portfolio for practical green-hydrogen production.", image: "/product-stack-20kw.png", accent: "azure" },
  { href: "/products/components", eyebrow: "CORE TECHNOLOGY", title: "Catalyst to stack", copy: "Catalysts, MEAs, membranes and Ti-PTL engineered as one connected performance chain.", image: "/product-stack-5kw.png", accent: "teal" },
  { href: "/products/mobile", eyebrow: "DISTRIBUTED ENERGY", title: "Mobile hydrogen systems", copy: "Independent production and storage for remote sites, demonstrations and emergency energy use.", image: "/mobile-hydrogen-station.png", accent: "green" },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [language, setLanguage] = useState<"EN" | "KR">("EN");
  const [submitted, setSubmitted] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => setActiveSlide((current) => (current + 1) % heroSlides.length), 6000);
    return () => window.clearInterval(interval);
  }, []);

  function submitInquiry(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  const korean = language === "KR";

  return (
    <main>
      <header className="site-header">
        <a className="brand brand-image" href="#top" aria-label="EST Solution home"><img src="/est-solution-logo.png" alt="EST Solution" /></a>
        <nav className={menuOpen ? "nav open" : "nav"} aria-label="Primary navigation">
          {navItems.map(([id, en, kr]) => <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>{korean ? kr : en}</a>)}
        </nav>
        <div className="header-actions">
          <button className="language" onClick={() => setLanguage(korean ? "EN" : "KR")} aria-label="Switch language"><b>{language}</b><span>{korean ? "English" : "한국어"}</span></button>
          <a className="header-cta" href="#contact">{korean ? "기술 문의" : "Technical inquiry"}<span>↗</span></a>
          <button className="menu" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label="Toggle navigation"><span /><span /></button>
        </div>
      </header>

      <section className="hero" id="top">
        <div className="hero-background" aria-hidden="true">
          {heroSlides.map((slide, index) => <img className={activeSlide === index ? "active" : ""} key={slide.src} src={slide.src} alt="" />)}
        </div>
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-copy">
          <h1>{korean ? <>물에서 시작해,<br /><em>에너지의 미래</em>를 만듭니다.</> : <>From water to a<br /><em>cleaner energy future.</em></>}</h1>
          <p>{korean ? "촉매와 MEA부터 수전해 스택까지. 이에스티솔루션은 경제적인 그린수소 생산을 위한 핵심 기술을 개발합니다." : "From catalysts and MEAs to water-electrolysis stacks, EST Solution develops the core technologies that make green hydrogen more practical."}</p>
          <div className="hero-actions"><a className="button primary" href="#about">{korean ? "기술 살펴보기" : "Explore our technology"}<span>→</span></a></div>
        </div>
        <div className="hero-pagination" aria-label="Hero image carousel">
          {heroSlides.map((slide, index) => <button className={activeSlide === index ? "active" : ""} key={slide.src} type="button" onClick={() => setActiveSlide(index)} aria-label={`Show ${slide.label}`} aria-current={activeSlide === index ? "true" : undefined} />)}
        </div>
      </section>

      <section className="story-about" id="about">
        <div className="story-about-copy">
          <div className="eyebrow"><span /> ABOUT EST SOLUTION</div>
          <h2>Building the heart of the hydrogen economy.</h2>
          <p>EST Solution is a Korean clean-energy technology company developing the core materials, components and systems that turn renewable electricity and water into green hydrogen.</p>
          <p>By connecting catalyst synthesis, MEA manufacturing, porous transport layers and stack design, the company aims to shorten development cycles, reduce import dependence and make deployment more practical.</p>
          <a className="story-link" href="/company">Meet EST Solution <span>→</span></a>
        </div>
        <div className="story-facts" aria-label="Company facts">
          <div className="story-fact-primary"><small>FOUNDED</small><strong>2023</strong><span>Growing from Gwangju and Naju, Republic of Korea</span></div>
          <div><small>CORE SCOPE</small><strong>Catalyst → MEA → Stack</strong></div>
          <div><small>PLATFORMS</small><strong>PEM water electrolysis</strong></div>
          <div><small>MISSION</small><strong>Practical energy independence</strong></div>
        </div>
      </section>

      <section className="challenge-section" id="challenges">
        <div className="challenge-heading">
          <div className="eyebrow light"><span /> THE PROBLEMS WE ADDRESS</div>
          <h2>Green hydrogen must work<br />beyond the laboratory.</h2>
          <p>The transition needs more than a single breakthrough. It needs lower cost, technical control and systems that can scale into real operating environments.</p>
        </div>
        <div className="challenge-grid">
          {challenges.map((item) => <article key={item.number}><small>{item.number}</small><h3>{item.title}</h3><p>{item.copy}</p></article>)}
        </div>
        <div className="challenge-answer"><span>ONE CONNECTED ANSWER</span><strong>Material science</strong><i>→</i><strong>Core components</strong><i>→</i><strong>Modular systems</strong></div>
      </section>

      <section className="solution-section" id="products">
        <div className="solution-heading">
          <div><div className="eyebrow"><span /> SOLUTIONS & PRODUCTS</div><h2>From a critical component<br />to a working system.</h2></div>
          <p>Explore each product family for specifications, technical advantages and application context. The landing page stays simple; the detail lives where buyers expect it.</p>
        </div>
        <div className="solution-grid">
          {solutions.map((item) => (
            <a className={`solution-card ${item.accent}`} href={item.href} key={item.href}>
              <div className="solution-image"><img src={item.image} alt="" /></div>
              <div className="solution-body"><small>{item.eyebrow}</small><h3>{item.title}</h3><p>{item.copy}</p><span>Explore solution <b>→</b></span></div>
            </a>
          ))}
        </div>
      </section>

      <section className="results-section" id="results">
        <div className="results-visual"><img src="/field-demonstration.jpg" alt="EST Solution mobile green hydrogen field demonstration" /><span>FIELD DEMONSTRATION · GWANGJU</span></div>
        <div className="results-copy">
          <div className="eyebrow light"><span /> RESULTS & EVIDENCE</div>
          <h2>Progress you can inspect.</h2>
          <p>EST Solution’s company brochure reports a growing body of component development, stack performance work and public field demonstrations.</p>
          <div className="result-metrics">
            <div><strong>20<span>kW</span></strong><p>Largest stack class in the current product lineup</p></div>
            <div><strong>99.97<span>%+</span></strong><p>Reported hydrogen purity across listed stack models</p></div>
            <div><strong>20<span>%+</span></strong><p>Targeted overall stack cost reduction through localized components</p></div>
            <div><strong>0<span>kg</span></strong><p>Direct CO₂ per kg H₂ for renewable-powered green hydrogen*</p></div>
          </div>
          <small className="results-note">* Product and performance figures are based on the EST Solution company brochure. Final specifications depend on project configuration and validation.</small>
          <a className="story-link light-link" href="/products/systems">Review technical specifications <span>→</span></a>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="contact-copy">
          <div className="eyebrow light"><span /> START A CONVERSATION</div>
          <h2>What energy challenge<br />are you solving?</h2>
          <p>Tell us about your application, target capacity and timeline. We’ll route your inquiry to the right technical conversation.</p>
          <div className="contact-details"><a href="tel:+82629720823"><small>CALL</small>+82 62 972 0823</a><a href="mailto:estsolution1@naver.com"><small>EMAIL</small>estsolution1@naver.com</a></div>
          <address><small>HEADQUARTERS</small>GIST Startup Promotion Center B, Room 302<br />123 Cheomdangwagi-ro, Buk-gu, Gwangju, Korea</address>
        </div>
        <form className="inquiry-form" onSubmit={submitInquiry}>
          {submitted ? <div className="form-success" role="status"><span>✓</span><h3>Thank you.</h3><p>Your inquiry is ready for review. This prototype does not send data; connect the production form to EST Solution’s approved email workflow.</p><button type="button" onClick={() => setSubmitted(false)}>Send another inquiry</button></div> : <>
            <div className="form-title"><span>TECHNICAL INQUIRY</span><b>Fields marked * are required</b></div>
            <div className="form-grid">
              <label><span>Name *</span><input required name="name" placeholder="Your name" /></label>
              <label><span>Organization *</span><input required name="organization" placeholder="Company or institute" /></label>
              <label><span>Work email *</span><input required type="email" name="email" placeholder="name@company.com" /></label>
              <label><span>Area of interest *</span><select required name="interest" defaultValue=""><option value="" disabled>Select one</option><option>Water electrolysis system</option><option>Catalyst / Electrode</option><option>Membrane / MEA</option><option>Mobile hydrogen system</option><option>R&D partnership</option></select></label>
              <label className="full"><span>Project context</span><textarea name="message" rows={4} placeholder="Application, target capacity, timeline and the challenge you are solving" /></label>
            </div>
            <label className="consent"><input type="checkbox" required /><span>I agree to the collection and use of my information for responding to this inquiry. *</span></label>
            <button className="submit" type="submit">Send technical inquiry <span>↗</span></button>
          </>}
        </form>
      </section>

      <footer>
        <a className="brand footer-brand" href="#top"><img src="/est-solution-logo.png" alt="EST Solution" /></a>
        <p>Core technology for a cleaner, more independent energy future.</p>
        <div className="footer-links"><a href="#about">About</a><a href="#challenges">Challenges</a><a href="#products">Products</a><a href="#results">Results</a><a href="#contact">Contact</a></div>
        <div className="footer-bottom"><span>© 2026 EST Solution Co., Ltd. Concept redesign.</span><span>Gwangju · Naju · Republic of Korea</span></div>
      </footer>
    </main>
  );
}
