"use client";

import { useEffect, useRef, useState } from "react";
import { IconArrowUpRight, IconChevronDown, IconMenu2, IconX } from "@tabler/icons-react";

type NavEntry = { label: string; description: string; href: string };
type NavGroup = { label: string; href: string; items?: NavEntry[] };

function LanguageFlag({ code }: { code: string }) {
  if (code === "EN") {
    return <svg className="language-flag" viewBox="0 0 24 16" aria-hidden="true">
      <rect width="24" height="16" fill="#fff" />
      {[0, 2.46, 4.92, 7.38, 9.84, 12.3, 14.76].map((y) => <rect key={y} y={y} width="24" height="1.23" fill="#b22234" />)}
      <rect width="10.5" height="8.62" fill="#3c3b6e" />
      {[1.4, 3.5, 5.6, 7.7].flatMap((x) => [1.4, 3.5, 5.6, 7.7].map((y) => <circle key={`${x}-${y}`} cx={x} cy={y} r=".42" fill="#fff" />))}
    </svg>;
  }
  if (code === "KR") {
    return <svg className="language-flag" viewBox="0 0 24 16" aria-hidden="true">
      <rect width="24" height="16" fill="#fff" />
      <circle cx="12" cy="8" r="3.7" fill="#cd2e3a" />
      <path d="M8.3 8a3.7 3.7 0 0 0 7.4 0A1.85 1.85 0 0 1 12 8a1.85 1.85 0 0 0-3.7 0Z" fill="#0047a0" />
      <g fill="#111">
        <rect x="3.2" y="3" width="4.1" height=".65" transform="rotate(-32 5.25 3.33)" /><rect x="3.5" y="4" width="4.1" height=".65" transform="rotate(-32 5.55 4.33)" /><rect x="16.7" y="11.8" width="4.1" height=".65" transform="rotate(-32 18.75 12.13)" />
        <rect x="16.8" y="3" width="4.1" height=".65" transform="rotate(32 18.85 3.33)" /><rect x="3.2" y="12" width="4.1" height=".65" transform="rotate(32 5.25 12.33)" />
      </g>
    </svg>;
  }
  if (code === "IT") {
    return <svg className="language-flag" viewBox="0 0 24 16" aria-hidden="true"><rect width="8" height="16" fill="#009246" /><rect x="8" width="8" height="16" fill="#fff" /><rect x="16" width="8" height="16" fill="#ce2b37" /></svg>;
  }
  return <svg className="language-flag" viewBox="0 0 24 16" aria-hidden="true"><rect width="24" height="5.34" fill="#000" /><rect y="5.33" width="24" height="5.34" fill="#dd0000" /><rect y="10.66" width="24" height="5.34" fill="#ffce00" /></svg>;
}

const navigation: NavGroup[] = [
  { label: "Technology", href: "/technology", items: [
      { label: "Why green hydrogen", description: "Gray vs blue vs green", href: "/technology#why-green-hydrogen" },
      { label: "How PEM electrolysis works", description: "Reaction and method comparison", href: "/technology#how-it-works" },
    { label: "Core technology", description: "Catalyst, MEA, Ti-PTL, membrane", href: "/technology#core-technology" },
    { label: "Roadmap", description: "Seawater, marine, next steps", href: "/technology#roadmap" },
  ]},
  { label: "Products", href: "/products", items: [
    { label: "Electrolysis systems", description: "2.5kW · 5kW · 20kW", href: "/products#products" },
    { label: "Components", description: "What's inside our systems", href: "/products#components" },
    { label: "NEOHYD dispensing", description: "On-site delivery unit", href: "/products#dispensing" },
    { label: "Applications", description: "Mobility, farms, data centers", href: "/products#applications" },
  ]},
  { label: "Company", href: "/company", items: [
    { label: "Team", description: "Leadership and engineering", href: "/company#team" },
    { label: "Milestones", description: "Government-backed R&D programs", href: "/company#milestones" },
    { label: "Certifications & IP", description: "Patents, trademarks and verification", href: "/company#certifications" },
    { label: "Partners & universities", description: "Korea's hydrogen research network", href: "/company#partners" },
    { label: "CEO message", description: "Mission and vision", href: "/company#ceo-message" },
    { label: "Case study", description: "Field demonstration", href: "/company#case-study" },
  ]},
  { label: "Contact", href: "/#contact" },
];

export type SubNavItem = { label: string; id: string; href?: string };

export function PageSubNavigation({ subNav }: { subNav: SubNavItem[] }) {
  const [activeSection, setActiveSection] = useState(subNav[0]?.id ?? "");

  useEffect(() => {
    if (!subNav.length) return;
    const sections = subNav.map(({ id }) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible) setActiveSection(visible.target.id);
    }, { rootMargin: "-145px 0px -55% 0px", threshold: [0.05, 0.25, 0.5] });
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [subNav]);

  return <nav className="page-subnav" aria-label="On this page"><div>{subNav.map((item) => <a className={activeSection === item.id ? "active" : ""} href={item.href ?? `#${item.id}`} key={item.id} aria-current={activeSection === item.id ? "location" : undefined}>{item.label}</a>)}</div></nav>;
}

export function SiteNavigation({ subNav = [], language: controlledLanguage, onLanguageChange }: { subNav?: SubNavItem[]; language?: string; onLanguageChange?: (language: string) => void }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);
  const [internalLanguage, setInternalLanguage] = useState("EN");
  const languageRef = useRef<HTMLDivElement>(null);
  const language = controlledLanguage ?? internalLanguage;

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 12);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  useEffect(() => {
    const closeLanguageMenu = (event: PointerEvent) => {
      if (!languageRef.current?.contains(event.target as Node)) setLanguageOpen(false);
    };
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setLanguageOpen(false);
    };
    document.addEventListener("pointerdown", closeLanguageMenu);
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.removeEventListener("pointerdown", closeLanguageMenu);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, []);

  const closeMenu = () => { setMenuOpen(false); setOpenGroup(null); };
  const selectLanguage = (nextLanguage: string) => {
    setInternalLanguage(nextLanguage);
    onLanguageChange?.(nextLanguage);
    setLanguageOpen(false);
  };
  return <>
    <header className={`global-header${scrolled ? " is-scrolled" : ""}`}>
      <div className="global-header-left"><a className="global-brand" href="/" aria-label="EST Solution home"><img src="/est-solution-logo-transparent.png" alt="EST Solution" width={2103} height={748} /></a></div>
      <nav className={`global-nav${menuOpen ? " is-open" : ""}`} aria-label="Primary navigation">
        {navigation.map((group) => group.items ? <div className={`global-nav-group${openGroup === group.label ? " is-open" : ""}`} key={group.label} onMouseEnter={() => setOpenGroup(group.label)} onMouseLeave={() => setOpenGroup(null)}>
          <div className="global-nav-trigger-row"><a className="global-nav-trigger" href={group.href} onClick={closeMenu}>{group.label}</a><button type="button" onClick={() => setOpenGroup(openGroup === group.label ? null : group.label)} aria-expanded={openGroup === group.label} aria-label={`Toggle ${group.label} menu`}><IconChevronDown size={12} stroke={1.8} /></button></div>
          <div className="global-dropdown">{group.items.map((item) => <a href={item.href} key={item.href} onClick={closeMenu}><strong>{item.label}</strong><span>{item.description}</span></a>)}</div>
        </div> : <a className="global-nav-direct" href={group.href} key={group.label} onClick={closeMenu}>{group.label}</a>)}
      </nav>
      <div className="global-header-right">
        <div className={`global-language${languageOpen ? " is-open" : ""}`} ref={languageRef}>
          <button className="global-language-trigger" type="button" onClick={() => setLanguageOpen(!languageOpen)} aria-expanded={languageOpen} aria-haspopup="menu" aria-label={`Language: ${language}`}>
            <LanguageFlag code={language} />
          </button>
          <div className="global-language-menu" role="menu" aria-label="Choose language">
            {[
              ["EN", "English", "en"],
              ["KR", "Korean", "ko"],
              ["IT", "Italian", "it"],
              ["DE", "German", "de"],
            ].filter(([code]) => code !== language).map(([code, label, locale]) => (
              <button key={code} type="button" role="menuitem" lang={locale} onClick={() => selectLanguage(code)} aria-label={label}><LanguageFlag code={code} /></button>
            ))}
          </div>
        </div>
        <a className="global-inquiry" href="/#contact">Get in touch <IconArrowUpRight size={15} stroke={1.8} /></a>
        <button className="global-menu-button" type="button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label="Toggle navigation">{menuOpen ? <IconX size={22} /> : <IconMenu2 size={22} />}</button>
      </div>
    </header>
    {subNav.length > 0 && <PageSubNavigation subNav={subNav} />}
  </>;
}
