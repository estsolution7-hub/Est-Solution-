"use client";

import { useEffect, useState } from "react";
import { IconArrowUpRight, IconChevronDown, IconMenu2, IconX } from "@tabler/icons-react";

type NavEntry = { label: string; description: string; href: string };
type NavGroup = { label: string; href: string; items?: NavEntry[] };

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
    { label: "NEOHYD dispensing", description: "On-site delivery unit", href: "/products#neohyd" },
    { label: "Applications", description: "Mobility, farms, data centers", href: "/products#applications" },
  ]},
  { label: "Company", href: "/company", items: [
    { label: "Overview", description: "Who we are", href: "/company#overview" },
    { label: "CEO message", description: "Mission and vision", href: "/company#ceo-message" },
    { label: "Team and advisors", description: "Leadership and research board", href: "/company#team-advisors" },
    { label: "Partners and certifications", description: "Institutions, patents, awards", href: "/company#partners-certifications" },
    { label: "Case study", description: "Field demonstration", href: "/company#case-study" },
  ]},
  { label: "Technical Resources", href: "/technical-resources" },
  { label: "Contact", href: "/#contact" },
];

export type SubNavItem = { label: string; id: string };

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

  return <nav className="page-subnav" aria-label="On this page"><div>{subNav.map((item) => <a className={activeSection === item.id ? "active" : ""} href={`#${item.id}`} key={item.id} aria-current={activeSection === item.id ? "location" : undefined}>{item.label}</a>)}</div></nav>;
}

export function SiteNavigation({ subNav = [] }: { subNav?: SubNavItem[] }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 12);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  const closeMenu = () => { setMenuOpen(false); setOpenGroup(null); };
  return <>
    <header className={`global-header${scrolled ? " is-scrolled" : ""}`}>
      <div className="global-header-left"><a className="global-brand" href="/" aria-label="EST Solution home"><img src="/est-solution-logo.png" alt="EST Solution" /></a></div>
      <nav className={`global-nav${menuOpen ? " is-open" : ""}`} aria-label="Primary navigation">
        {navigation.map((group) => group.items ? <div className={`global-nav-group${openGroup === group.label ? " is-open" : ""}`} key={group.label} onMouseEnter={() => setOpenGroup(group.label)} onMouseLeave={() => setOpenGroup(null)}>
          <div className="global-nav-trigger-row"><a className="global-nav-trigger" href={group.href} onClick={closeMenu}>{group.label}</a><button type="button" onClick={() => setOpenGroup(openGroup === group.label ? null : group.label)} aria-expanded={openGroup === group.label} aria-label={`Toggle ${group.label} menu`}><IconChevronDown size={12} stroke={1.8} /></button></div>
          <div className="global-dropdown">{group.items.map((item) => <a href={item.href} key={item.href} onClick={closeMenu}><strong>{item.label}</strong><span>{item.description}</span></a>)}</div>
        </div> : <a className="global-nav-direct" href={group.href} key={group.label} onClick={closeMenu}>{group.label}</a>)}
      </nav>
      <div className="global-header-right"><div className="global-language" aria-label="Language"><a className="active" href="/">EN</a><span>/</span><a href="/" lang="ko">한국어</a></div><a className="global-inquiry" href="/#contact">Technical inquiry <IconArrowUpRight size={15} stroke={1.8} /></a><button className="global-menu-button" type="button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label="Toggle navigation">{menuOpen ? <IconX size={22} /> : <IconMenu2 size={22} />}</button></div>
    </header>
    {subNav.length > 0 && <PageSubNavigation subNav={subNav} />}
  </>;
}
