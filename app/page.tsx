"use client";

import { FormEvent, useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { BarElement, CategoryScale, Chart as ChartJS, LinearScale, Tooltip, type ChartData, type ChartOptions } from "chart.js";
import { IconAtom, IconBoxMultiple, IconChevronDown, IconGrain, IconLayersIntersect, IconStack2, IconSun } from "@tabler/icons-react";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip);

const heroSlides = [
  { src: "/hydrogen-prototype.jpg", label: "EST Solution electrolysis cabinet", caption: "EST SOLUTION ELECTROLYSIS PROTOTYPE" },
  { src: "/mobile-hydrogen-station.png", label: "EST Solution mobile hydrogen station", caption: "MOBILE GREEN HYDROGEN SYSTEM" },
  { src: "/product-stack-20kw.png", label: "EST Solution PEM electrolysis stack", caption: "PEM STACK DEVELOPMENT" },
];

const navItems = [
  ["#why-hydrogen", "Why green hydrogen", "그린수소"],
  ["#products", "Products", "제품"],
  ["#results", "Results", "성과"],
  ["/company", "Company", "회사소개"],
  ["#contact", "Contact", "문의"],
];

const systemProducts = [
  {
    id: "2-5kw",
    name: "2.5 kW system",
    use: "500 L/h · pilot sites",
    stackImage: "/product-stack-2-5kw.png",
    stackCaption: "Electrolyzer stack, 2.5kW",
    specs: [["Dimensions", "580 × 374 × 550 mm"], ["Power", "< 2.5 kW"], ["Hydrogen", "500 L/h"], ["Oxygen", "250 L/h"], ["Purity", "99.97–99.99%"]],
  },
  {
    id: "5kw",
    name: "5 kW system",
    use: "1,000 L/h · distributed sites",
    stackImage: "/product-stack-5kw.png",
    stackCaption: "Electrolyzer stack, 5kW",
    specs: [["Dimensions", "1,000 × 550 × 1,200 mm"], ["Power", "< 5 kW"], ["Hydrogen", "1,000 L/h"], ["Oxygen", "500 L/h"], ["Purity", "99.97–99.99%"]],
  },
  {
    id: "20kw",
    name: "20 kW system",
    use: "4,000 L/h · industrial sites",
    stackImage: "/product-stack-20kw.png",
    stackCaption: "Electrolyzer stack, 20kW",
    specs: [["Dimensions", "1,800 × 550 × 2,200 mm"], ["Power", "< 20 kW"], ["Hydrogen", "4,000 L/h"], ["Oxygen", "2,000 L/h"], ["Purity", "99.97–99.99%"]],
    flagship: true,
  },
];

const coreComponents = [
  { label: "Catalyst", Icon: IconAtom },
  { label: "MEA", Icon: IconStack2 },
  { label: "Ti-PTL", Icon: IconGrain },
  { label: "Membrane", Icon: IconLayersIntersect },
  { label: "Stack", Icon: IconBoxMultiple },
];

const hydrogenMix = [
  { year: "2023", gray: 95, blue: 4, green: 1 },
  { year: "2025", gray: 92, blue: 6, green: 2 },
  { year: "2027", gray: 85, blue: 10, green: 5 },
  { year: "2030", gray: 60, blue: 25, green: 15 },
  { year: "2035", gray: 35, blue: 35, green: 30 },
  { year: "2040", gray: 18, blue: 32, green: 50 },
  { year: "2045", gray: 10, blue: 25, green: 65 },
  { year: "2050", gray: 6, blue: 18, green: 76 },
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
  responsive: true,
  maintainAspectRatio: false,
  interaction: { mode: "index", intersect: false },
  plugins: {
    legend: { display: false },
    tooltip: {
      enabled: true,
      backgroundColor: "#1a1a19",
      titleColor: "#ffffff",
      bodyColor: "#ffffff",
      borderColor: "rgba(255,255,255,0.1)",
      borderWidth: 1,
      padding: 10,
      titleFont: { size: 12, weight: 500 },
      bodyFont: { size: 12 },
      callbacks: { label: (ctx) => `${ctx.dataset.label}: ${ctx.parsed.y}%` },
    },
  },
  scales: {
    x: { stacked: true, grid: { display: false }, ticks: { color: "#898781", font: { size: 11 } } },
    y: { stacked: true, beginAtZero: true, max: 100, grid: { color: "#e1e0d9" }, ticks: { color: "#898781", font: { size: 11 }, callback: (value) => `${value}%` } },
  },
};

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [language, setLanguage] = useState<"EN" | "KR">("EN");
  const [submitted, setSubmitted] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const [expandedSpecs, setExpandedSpecs] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const interval = window.setInterval(() => setActiveSlide((current) => (current + 1) % heroSlides.length), 6000);
    return () => window.clearInterval(interval);
  }, []);

  function submitInquiry(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  function toggleSpecs(productId: string) {
    setExpandedSpecs((current) => ({ ...current, [productId]: !current[productId] }));
  }

  const korean = language === "KR";

  return (
    <main>
      <header className="site-header">
        <a className="brand brand-image" href="#top" aria-label="EST Solution home"><img src="/est-solution-logo.png" alt="EST Solution" /></a>
        <nav className={menuOpen ? "nav open" : "nav"} aria-label="Primary navigation">
          {navItems.map(([href, en, kr]) => <a key={href} href={href} onClick={() => setMenuOpen(false)}>{korean ? kr : en}</a>)}
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
          <p>{korean ? "촉매와 MEA부터 수전해 스택까지. 이에스티솔루션은 실용적인 그린수소를 위한 핵심 기술을 개발합니다." : "From catalysts and MEAs to electrolysis stacks, EST Solution builds the core technologies behind practical green hydrogen."}</p>
          <div className="hero-proof" aria-label="Key company strengths">
            <span>↓ Up to 37% component cost reduction</span><span>0 kg CO₂ green H₂</span><span>GIST · KENTECH collaboration</span>
          </div>
          <div className="hero-actions"><a className="button primary" href="#why-hydrogen">{korean ? "기술 살펴보기" : "Explore our technology"}<span>→</span></a><a className="button ghost" href="#products">{korean ? "견적 문의" : "Request a quote"}</a></div>
        </div>
        <div className="hero-image-label"><span />{heroSlides[activeSlide].caption}</div>
        <div className="hero-pagination" aria-label="Hero image carousel">
          {heroSlides.map((slide, index) => <button className={activeSlide === index ? "active" : ""} key={slide.src} type="button" onClick={() => setActiveSlide(index)} aria-label={`Show ${slide.label}`} aria-current={activeSlide === index ? "true" : undefined} />)}
        </div>
        <a className="hero-scroll" href="#why-hydrogen" aria-label="Continue to why green hydrogen">↓</a>
      </section>

      <section className="why-section" id="why-hydrogen">
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

      <section className="product-section" id="products">
        <div className="product-tier system-tier">
          <div className="product-tier-heading"><div className="product-eyebrow"><span /> WHAT YOU BUY</div><h2>Electrolysis systems</h2></div>
          <div className="system-card-grid">
            {systemProducts.map((product) => {
              const isExpanded = Boolean(expandedSpecs[product.id]);
              const panelId = `specs-${product.id}`;
              return <article className={product.flagship ? "system-card flagship" : "system-card"} key={product.id}>
                <div className="system-photo">
                  <img className="system-stack-photo" src={product.stackImage} alt={`${product.name} electrolyzer stack`} />
                </div>
                <small className="system-photo-caption">{product.stackCaption}</small>
                <h3>{product.name}</h3><p>{product.use}</p>
                <div className="system-spec-divider" />
                <button className={isExpanded ? "spec-toggle open" : "spec-toggle"} type="button" onClick={() => toggleSpecs(product.id)} aria-expanded={isExpanded} aria-controls={panelId}>
                  {isExpanded ? "Hide full specs" : "View full specs"}<IconChevronDown size={16} stroke={1.8} aria-hidden="true" />
                </button>
                <div className={isExpanded ? "spec-panel open" : "spec-panel"} id={panelId} aria-hidden={!isExpanded}>
                  <div className="spec-panel-inner"><dl>{product.specs.map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl></div>
                </div>
              </article>;
            })}
          </div>
          <div className="product-actions single"><a className="quote-link primary" href="#contact">Request a quote <span>→</span></a></div>
        </div>

        <div className="product-tier component-tier">
          <div className="product-tier-heading"><div className="product-eyebrow"><span /> WHAT’S INSIDE</div><h2>Core technology, built in-house</h2><p>Every system runs on components we design and manufacture ourselves — not sold separately, but why our systems cost less to run.</p></div>
          <div className="component-strip">{coreComponents.map(({ label, Icon }) => <div className="component-tile" key={label}><Icon size={20} stroke={1.7} aria-hidden="true" /><span>{label}</span></div>)}</div>
        </div>

        <div className="solar-footnote"><IconSun size={16} stroke={1.6} aria-hidden="true" /><span>Also offering solar power generation systems as a complementary product line — <a href="/products/solar">view details</a></span></div>
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
        <div className="footer-links"><a href="#why-hydrogen">Why green hydrogen</a><a href="#products">Products</a><a href="#results">Results</a><a href="/company">Company</a><a href="#contact">Contact</a></div>
        <div className="footer-bottom"><span>© 2026 EST Solution Co., Ltd. Concept redesign.</span><span>Gwangju · Naju · Republic of Korea</span></div>
      </footer>
    </main>
  );
}
