"use client";

import { useEffect, useState } from "react";
import { IconArrowRight, IconAtom, IconBoxMultiple, IconBuilding, IconFlask2, IconGrain, IconLayersIntersect, IconMail, IconPhone, IconQuote, IconStack2, IconSun } from "@tabler/icons-react";
import { SiteNavigation } from "./site-navigation";

const heroSlides = [
  { src: "/hydrogen-prototype.jpg", label: "EST Solution electrolysis cabinet", caption: "EST SOLUTION ELECTROLYSIS PROTOTYPE" },
  { src: "/mobile-hydrogen-station.png", label: "EST Solution mobile hydrogen station", caption: "MOBILE GREEN HYDROGEN SYSTEM" },
  { src: "/product-stack-20kw.png", label: "EST Solution PEM electrolysis stack", caption: "PEM STACK DEVELOPMENT" },
];

const coreComponents = [
  { label: "Catalyst", Icon: IconAtom },
  { label: "MEA", Icon: IconStack2 },
  { label: "Ti-PTL", Icon: IconGrain },
  { label: "Membrane", Icon: IconLayersIntersect },
  { label: "Stack", Icon: IconBoxMultiple },
];

const partnerLogos = [
  { src: "/partners/inst_01.png", name: "녹색에너지연구원" },
  { src: "/partners/inst_02.png", name: "산업통상자원부" },
  { src: "/partners/inst_03.png", name: "연구개발특구진흥재단" },
  { src: "/partners/inst_04.png", name: "전남테크노파크" },
  { src: "/partners/inst_05.png", name: "전라남도" },
  { src: "/partners/inst_06.png", name: "한국가스공사" },
  { src: "/partners/inst_07.png", name: "한국가스안전공사" },
  { src: "/partners/inst_08.png", name: "한국과학기술연구원" },
  { src: "/partners/inst_09.png", name: "한국남부발전" },
  { src: "/partners/inst_10.png", name: "한국동서발전" },
  { src: "/partners/inst_11.png", name: "한국생산기술연구원" },
  { src: "/partners/inst_12.png", name: "한국에너지공단" },
  { src: "/partners/inst_13.png", name: "한국에너지기술연구원" },
  { src: "/partners/inst_14.png", name: "한국에너지기술평가원" },
  { src: "/partners/inst_15.png", name: "한국전력공사" },
  { src: "/partners/inst_16.png", name: "한국전력연구원" },
  { src: "/partners/inst_17.png", name: "한국화학연구원" },
  { src: "/partners/inst_18.png", name: "광주테크노파크" },
  { src: "/partners/inst_19.png", name: "과학기술정보통신부" },
  { src: "/partners/inst_20.png", name: "광주광역시" },
  { src: "/partners/uni_01.png", name: "전남대학교" },
  { src: "/partners/uni_02.png", name: "전북대학교" },
  { src: "/partners/uni_03.png", name: "한국에너지공과대학교" },
  { src: "/partners/uni_04.png", name: "광주과학기술원" },
  { src: "/partners/uni_05.png", name: "연세대학교" },
  { src: "/partners/uni_06.png", name: "카이스트" },
  { src: "/partners/uni_07.png", name: "서울대학교" },
  { src: "/partners/uni_08.png", name: "포항공과대학교" },
  { src: "/partners/uni_09.png", name: "강릉원주대학교" },
  { src: "/partners/uni_10.png", name: "한양대학교" },
];

const mapLocations = {
  hq: {
    lat: "35.2281557",
    lon: "126.8421662",
    bbox: "126.8371662,35.2231557,126.8471662,35.2331557",
  },
  rd: {
    lat: "34.974837113219",
    lon: "126.688945217552",
    bbox: "126.683945217552,34.969837113219,126.693945217552,34.979837113219",
  },
} as const;

export default function Home() {
  const [language, setLanguage] = useState<"EN" | "KR">("EN");
  const [activeSlide, setActiveSlide] = useState(0);
  const [mapLocation, setMapLocation] = useState<"hq" | "rd">("hq");

  useEffect(() => {
    const interval = window.setInterval(() => setActiveSlide((current) => (current + 1) % heroSlides.length), 6000);
    return () => window.clearInterval(interval);
  }, []);

  const korean = language === "KR";
  const activeMap = mapLocations[mapLocation];
  const mapSrc = `https://www.openstreetmap.org/export/embed.html?bbox=${encodeURIComponent(activeMap.bbox)}&layer=mapnik&marker=${encodeURIComponent(`${activeMap.lat},${activeMap.lon}`)}`;
  const externalMapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${activeMap.lat},${activeMap.lon}`)}`;

  return (
    <main>
      <SiteNavigation />

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
          <div className="hero-actions"><a className="button primary" href="/technology#why-green-hydrogen">{korean ? "기술 살펴보기" : "Explore our technology"}<span>→</span></a><a className="button ghost" href="#contact">{korean ? "견적 문의" : "Request a quote"}</a></div>
        </div>
        <div className="hero-image-label"><span />{heroSlides[activeSlide].caption}</div>
        <div className="hero-pagination" aria-label="Hero image carousel">
          {heroSlides.map((slide, index) => <button className={activeSlide === index ? "active" : ""} key={slide.src} type="button" onClick={() => setActiveSlide(index)} aria-label={`Show ${slide.label}`} aria-current={activeSlide === index ? "true" : undefined} />)}
        </div>
        <a className="hero-scroll" href="/technology#why-green-hydrogen" aria-label="Continue to why green hydrogen">↓</a>
      </section>

      <section className="product-section" id="core-components">
        <div className="product-tier component-tier">
          <div className="product-tier-heading"><div className="product-eyebrow"><span /> WHAT’S INSIDE</div><h2>Core technology, built in-house</h2><p>Every system runs on components we design and manufacture ourselves — not sold separately, but why our systems cost less to run.</p></div>
          <div className="component-strip">{coreComponents.map(({ label, Icon }) => <div className="component-tile" key={label}><Icon size={20} stroke={1.7} aria-hidden="true" /><span>{label}</span></div>)}</div>
        </div>

        <div className="solar-footnote"><IconSun size={16} stroke={1.6} aria-hidden="true" /><span>Also offering solar power generation systems as a complementary product line — <a href="/products/solar">view details</a></span></div>
      </section>

      <section className="who-section" id="who-we-are">
        <div className="who-container">
          <div className="who-eyebrow"><span /> WHO WE ARE</div>
          <h2 className="who-headline">Founded in 2023, built on technology we own end to end</h2>

          <div className="who-lead">
            <figure className="ceo-profile">
              <div className="ceo-portrait"><img src="/est-solution-ceo.png" alt="EST Solution founder and CEO with hydrogen equipment" /></div>
              <figcaption><strong>CEO name</strong><span>Founder and CEO, EST Solution</span></figcaption>
            </figure>
            <blockquote className="ceo-quote">
              <IconQuote className="quote-mark" size={32} stroke={1.7} aria-hidden="true" />
              <p>“We put trust and value creation with our customers first. Through relentless in-house research, we’re building a green hydrogen energy society — and working toward true energy self-sufficiency for Korea’s hydrogen economy through core technology we own ourselves.”</p>
              <small>Adapted from the Korean mission statement; final English wording is pending client approval.</small>
            </blockquote>
          </div>

          <p className="who-description">EST Solution is based in Gwangju and Naju, South Korea. From catalyst to stack, every core component in our systems is designed and manufactured in-house — not licensed or imported.</p>

          <div className="who-stats" aria-label="Company statistics">
            <div><strong>3</strong><span>Years since founding</span></div>
            <div><strong>10+</strong><span>Programs selected</span></div>
            <div><strong>2</strong><span>Patents filed</span></div>
          </div>

          <div className="partner-evidence">
            <div className="partner-label">PARTNERED WITH</div>
            <div className="partner-logo-grid">
              {partnerLogos.map((partner) => <figure className="partner-logo" key={partner.src}><img src={partner.src} alt={`${partner.name} logo`} /><figcaption>{partner.name}</figcaption></figure>)}
            </div>
          </div>
        </div>
      </section>

      <section className="case-section" id="case-study">
        <div className="case-container">
          <div className="case-eyebrow">TESTED AND VERIFIED</div>
          <h2>We took a self-contained hydrogen system into the field <span>and proved it works.</span></h2>

          <div className="tested-conditions" aria-label="Tested conditions">
            <article><h3>Outdoor</h3><p>Ran on-site, exposed to real weather and field conditions.</p></article>
            <article><h3>Indoor</h3><p>Stress-tested under controlled lab conditions.</p></article>
          </div>

          <p className="case-support">That capability turns wasted renewable power into usable backup energy for remote sites, on demand.</p>

          <div className="case-photos">
            <img src="/field-demonstration.jpg" alt="EST Solution outdoor hydrogen-system field demonstration" />
            <img src="/hydrogen-prototype.jpg" alt="EST Solution hydrogen system undergoing indoor testing" />
          </div>

          <div className="case-closing">
            <h3>Next, we’d like to prove it on your site.</h3>
            <a href="#contact">Request a quote <IconArrowRight size={16} stroke={1.8} aria-hidden="true" /></a>
          </div>
        </div>
      </section>

      <section className="contact-section-v2" id="contact">
        <div className="contact-container">
          <div className="contact-eyebrow"><span /> GET IN TOUCH</div>
          <h2>Let’s talk about your site, or your research</h2>
          <p className="contact-subhead">Whether you’re evaluating a system for deployment or exploring a research partnership, tell us a bit about what you need.</p>

          <div className="contact-card">
            {/* FormSubmit is the active delivery backend; confirm this provider with EST Solution before final production handoff. */}
            <form className="contact-form" action="https://formsubmit.co/estsolution1@naver.com" method="POST">
              <input type="hidden" name="_subject" value="New EST Solution website inquiry" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_captcha" value="false" />
              <div className="contact-form-grid">
                <label><span>Company or institution</span><input required name="company_or_institution" type="text" autoComplete="organization" /></label>
                <label><span>Contact person</span><input required name="contact_person" type="text" autoComplete="name" /></label>
                <label><span>Email</span><input required name="email" type="email" autoComplete="email" /></label>
                <label><span>Phone, optional</span><input name="phone" type="tel" autoComplete="tel" /></label>
                <label className="full"><span>What are you reaching out about?</span><select required name="inquiry_type" defaultValue=""><option value="" disabled>Select one</option><option>Request a quote</option><option>Product inquiry</option><option>Research collaboration</option><option>University partnership</option><option>Investment or media</option><option>Other</option></select></label>
                <label className="full"><span>Message</span><textarea required name="message" rows={4} /></label>
              </div>
              <button className="contact-submit" type="submit">Send inquiry</button>
            </form>

            <aside className="contact-panel" aria-label="EST Solution locations and contact details">
              <div className="location-list">
                <article><span className="location-icon"><IconBuilding size={17} stroke={1.8} aria-hidden="true" /></span><div><small>HEADQUARTERS · GWANGJU</small><p>123 Cheomdan-gwagi-ro, Buk-gu, Gwangju, South Korea — inside GIST</p></div></article>
                <article><span className="location-icon"><IconFlask2 size={17} stroke={1.8} aria-hidden="true" /></span><div><small>R&amp;D CENTER · NAJU</small><p>32-18 Hyeoksinsandan 3-gil, Naju-si, Jeollanam-do, South Korea</p></div></article>
              </div>

              <div className="contact-chips"><a href="tel:+82629720823"><IconPhone size={15} stroke={1.8} aria-hidden="true" />062-972-0823</a><a href="mailto:estsolution1@naver.com"><IconMail size={15} stroke={1.8} aria-hidden="true" />estsolution1@naver.com</a></div>

              <div className="map-tabs" aria-label="Choose map location"><button className={mapLocation === "hq" ? "active" : ""} type="button" onClick={() => setMapLocation("hq")} aria-pressed={mapLocation === "hq"}>Headquarters</button><button className={mapLocation === "rd" ? "active" : ""} type="button" onClick={() => setMapLocation("rd")} aria-pressed={mapLocation === "rd"}>R&amp;D center</button></div>
              <div className="contact-map"><iframe key={mapLocation} title={mapLocation === "hq" ? "EST Solution headquarters map" : "EST Solution R&D center map"} src={mapSrc} loading="lazy" referrerPolicy="no-referrer-when-downgrade" /></div>
              <a className="contact-map-link" href={externalMapUrl} target="_blank" rel="noreferrer">Open in Google Maps <span aria-hidden="true">↗</span></a>
            </aside>
          </div>
        </div>
      </section>

      <footer>
        <a className="brand footer-brand" href="#top"><img src="/est-solution-logo.png" alt="EST Solution" /></a>
        <p>Core technology for a cleaner, more independent energy future.</p>
        <div className="footer-links"><a href="/technology#why-green-hydrogen">Why green hydrogen</a><a href="/products#products">Products</a><a href="#case-study">Case study</a><a href="#who-we-are">Company</a><a href="#contact">Contact</a></div>
        <div className="footer-bottom"><span>© 2026 EST Solution Co., Ltd. Concept redesign.</span><span>Gwangju · Naju · Republic of Korea</span></div>
      </footer>
    </main>
  );
}
