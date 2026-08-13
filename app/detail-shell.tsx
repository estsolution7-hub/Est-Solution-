import type { ReactNode } from "react";
import { PageSubNavigation, SiteNavigation, type SubNavItem } from "./site-navigation";

export function DetailShell({ eyebrow, title, intro, children, subNav = [], hero }: { eyebrow: string; title: string; intro: string; children: ReactNode; subNav?: SubNavItem[]; hero?: ReactNode }) {
  return <main className="detail-page">
    <SiteNavigation subNav={hero ? [] : subNav} />
    {hero ?? <section className="detail-hero">
      <div className="eyebrow light"><span /> {eyebrow}</div>
      <h1>{title}</h1><p>{intro}</p>
    </section>}
    {hero && subNav.length > 0 && <PageSubNavigation subNav={subNav} />}
    {children}
    <section className="detail-cta"><h2>Let’s turn your application<br />into a working system.</h2><a href="/#contact">Start a technical inquiry →</a></section>
  </main>;
}
