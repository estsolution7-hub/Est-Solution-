"use client";

import { useEffect, useRef, useState } from "react";
import { IconArrowUpRight, IconChevronDown, IconMenu2, IconX } from "./icons";
import { useLanguage } from "./use-language";

type NavEntry = { label: string; labelKr: string; description?: string; descriptionKr?: string; href: string };
type NavGroup = { label: string; labelKr: string; href: string; items?: NavEntry[] };

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
  return null;
}

const navigation: NavGroup[] = [
  { label: "Technology", labelKr: "기술", href: "/technology", items: [
    { label: "Why green hydrogen", labelKr: "그린수소란", description: "Gray vs blue vs green", descriptionKr: "그레이 · 블루 · 그린 비교", href: "/technology#why-green-hydrogen" },
    { label: "How PEM electrolysis works", labelKr: "PEM 수전해 원리", description: "Reaction and method comparison", descriptionKr: "반응 원리와 방식 비교", href: "/technology#how-it-works" },
    { label: "Core technology", labelKr: "핵심 기술", description: "Catalyst, MEA, Ti-PTL, membrane", descriptionKr: "촉매, MEA, Ti-PTL, 전해질막", href: "/technology#core-technology" },
    { label: "Roadmap", labelKr: "로드맵", description: "Seawater, marine, next steps", descriptionKr: "해수 전해, 해양, 다음 단계", href: "/technology#roadmap" },
  ]},
  { label: "Products", labelKr: "제품", href: "/products", items: [
    { label: "Electrolysis systems", labelKr: "수전해 시스템", href: "/products#products" },
    { label: "System specifications", labelKr: "시스템 사양", href: "/products/systems" },
    { label: "Components", labelKr: "핵심 부품", href: "/products#components" },
    { label: "Component details", labelKr: "부품 상세", href: "/products/components" },
    { label: "NEOHYD dispensing", labelKr: "NEOHYD 충전", href: "/products#dispensing" },
    { label: "Mobile hydrogen", labelKr: "이동형 수소", href: "/products/mobile" },
    { label: "Applications", labelKr: "적용 분야", href: "/products#applications" },
  ]},
  { label: "Company", labelKr: "회사 소개", href: "/company", items: [
    { label: "Team", labelKr: "팀", href: "/company#team" },
    { label: "Milestones", labelKr: "주요 실적", href: "/company#milestones" },
    { label: "Certifications & IP", labelKr: "인증 · 지식재산", href: "/company#certifications" },
    { label: "Partners & universities", labelKr: "협력 기관 · 대학", href: "/company#partners" },
    { label: "CEO message", labelKr: "대표 인사말", href: "/company#ceo-message" },
    { label: "Case study", labelKr: "실증 사례", href: "/company#case-study" },
  ]},
  { label: "Contact", labelKr: "문의", href: "/#contact" },
];

export type SubNavItem = { label: string; labelKr?: string; id: string; href?: string };

export function PageSubNavigation({ subNav }: { subNav: SubNavItem[] }) {
  const [, , korean] = useLanguage();
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

  return <nav className="page-subnav" aria-label={korean ? "이 페이지" : "On this page"}><div>{subNav.map((item) => <a className={activeSection === item.id ? "active" : ""} href={item.href ?? `#${item.id}`} key={item.id} aria-current={activeSection === item.id ? "location" : undefined}>{korean && item.labelKr ? item.labelKr : item.label}</a>)}</div></nav>;
}

export function SiteNavigation({ subNav = [], language: controlledLanguage, onLanguageChange }: { subNav?: SubNavItem[]; language?: string; onLanguageChange?: (language: string) => void }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [sharedLanguage, setSharedLanguage] = useLanguage();
  const [route, setRoute] = useState<{ path: string; hash: string }>({ path: "", hash: "" });
  const languageRef = useRef<HTMLDivElement>(null);
  const language = controlledLanguage ?? sharedLanguage;

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 12);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  // Track path + hash so the dropdown can show which section you're viewing.
  // Read on the client only, to keep the server and first client render identical.
  useEffect(() => {
    const read = () => setRoute({ path: window.location.pathname, hash: window.location.hash.slice(1) });
    read();
    window.addEventListener("hashchange", read);
    window.addEventListener("popstate", read);
    return () => {
      window.removeEventListener("hashchange", read);
      window.removeEventListener("popstate", read);
    };
  }, []);


  const isKorean = language === "KR";
  const closeMenu = () => { setMenuOpen(false); setOpenGroup(null); };

  /** Marks the dropdown entry matching the page (and section) you're on. */
  const isCurrent = (href: string) => {
    if (!route.path) return false;
    const [linkPath, linkHash] = href.split("#");
    const normalise = (value: string) => (value.replace(/\/$/, "") || "/");
    if (normalise(linkPath || "/") !== normalise(route.path)) return false;
    return linkHash ? linkHash === route.hash : !route.hash;
  };

  const selectLanguage = (nextLanguage: string) => {
    setSharedLanguage(nextLanguage === "KR" ? "KR" : "EN");
    onLanguageChange?.(nextLanguage);
  };
  return <>
    <header className={`global-header${scrolled ? " is-scrolled" : ""}`}>
      <div className="global-header-left"><a className="global-brand" href="/" aria-label="EST Solution home"><img src="/est-solution-logo-transparent.webp" alt="EST Solution" width={220} height={78} decoding="async" /></a></div>
      <nav className={`global-nav${menuOpen ? " is-open" : ""}`} aria-label="Primary navigation">
        {navigation.map((group) => group.items ? <div className={`global-nav-group${openGroup === group.label ? " is-open" : ""}`} key={group.label} onMouseEnter={() => setOpenGroup(group.label)} onMouseLeave={() => setOpenGroup(null)}>
          <div className="global-nav-trigger-row"><a className="global-nav-trigger" href={group.href} onClick={closeMenu}>{isKorean ? group.labelKr : group.label}</a><button type="button" onClick={() => setOpenGroup(openGroup === group.label ? null : group.label)} aria-expanded={openGroup === group.label} aria-label={`Toggle ${group.label} menu`}><IconChevronDown size={12} stroke={1.8} /></button></div>
          <div className={`global-dropdown${group.items.some((item) => item.description) ? "" : " is-compact"}`} role="menu">
            <p className="global-dropdown-label">{isKorean ? group.labelKr : group.label}</p>
            {group.items.map((item, index) => {
              const active = isCurrent(item.href);
              const description = isKorean ? item.descriptionKr : item.description;
              return <a
                className={`global-dropdown-item${active ? " is-current" : ""}`}
                href={item.href}
                key={item.href}
                role="menuitem"
                aria-current={active ? "page" : undefined}
                onClick={closeMenu}
              >
                <span className="global-dropdown-row">
                  <span className="global-dropdown-num">{String(index + 1).padStart(2, "0")}</span>
                  <strong>{isKorean ? item.labelKr : item.label}</strong>
                </span>
                {description ? <span className="global-dropdown-desc">{description}</span> : null}
              </a>;
            })}
          </div>
        </div> : <a className="global-nav-direct" href={group.href} key={group.label} onClick={closeMenu}>{isKorean ? group.labelKr : group.label}</a>)}
      </nav>
      <div className="global-header-right">
        {/* Two languages only, so a dropdown always rendered a single naked flag
            hanging below the header. A direct toggle removes that entirely. */}
        <div className="global-language" ref={languageRef}>
          <button
            className="global-language-trigger"
            type="button"
            onClick={() => selectLanguage(isKorean ? "EN" : "KR")}
            aria-label={isKorean ? "Switch to English" : "한국어로 전환"}
            title={isKorean ? "Switch to English" : "한국어로 전환"}
          >
            <LanguageFlag code={isKorean ? "KR" : "EN"} />
            <span className="global-language-code">{isKorean ? "KR" : "EN"}</span>
          </button>
        </div>
        <a className="global-inquiry" href="/#contact">{isKorean ? "문의하기" : "Get in touch"} <IconArrowUpRight size={15} stroke={1.8} /></a>
        <button className="global-menu-button" type="button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label="Toggle navigation">{menuOpen ? <IconX size={22} /> : <IconMenu2 size={22} />}</button>
      </div>
    </header>
    {subNav.length > 0 && <PageSubNavigation subNav={subNav} />}
  </>;
}
