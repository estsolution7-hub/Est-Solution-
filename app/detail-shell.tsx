import type { ReactNode } from "react";

export function DetailShell({ eyebrow, title, intro, children }: { eyebrow: string; title: string; intro: string; children: ReactNode }) {
  return <main className="detail-page">
    <header className="detail-header">
      <a href="/" aria-label="EST Solution home"><img src="/est-solution-logo.png" alt="EST Solution" /></a>
      <nav aria-label="Detail page navigation"><a href="/company">Company</a><a href="/#products">Products</a><a href="/#contact">Technical inquiry</a></nav>
    </header>
    <section className="detail-hero">
      <div className="eyebrow light"><span /> {eyebrow}</div>
      <h1>{title}</h1><p>{intro}</p>
    </section>
    {children}
    <section className="detail-cta"><h2>Let’s turn your application<br />into a working system.</h2><a href="/#contact">Start a technical inquiry →</a></section>
  </main>;
}
