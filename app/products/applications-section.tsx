"use client";

import { useEffect, useRef } from "react";

const applications = [
  {
    eyebrow: "Mobility",
    title: "Local fueling",
    copy: "Support demonstration fleets where centralized hydrogen supply is limited.",
    image: "/images/products/application-mobility.jpg",
    alt: "Parked semi-trailer trucks at a depot",
    direction: "from-left",
  },
  {
    eyebrow: "Farms & remote sites",
    title: "Energy resilience",
    copy: "Convert available renewable electricity into a storable fuel for remote operations.",
    image: "/images/products/application-remote-sites.jpg",
    alt: "Aerial view of a solar panel array in a field",
    direction: "from-right",
  },
  {
    eyebrow: "Data centers",
    title: "Clean backup power",
    copy: "Provide a pathway from renewable generation to hydrogen-based backup and resilience.",
    image: "/images/products/application-data-centers.jpg",
    alt: "Close-up of server room cabling",
    direction: "from-left",
  },
];

export function ApplicationsSection() {
  const stackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cards = stackRef.current?.querySelectorAll<HTMLElement>(".app-card");
    if (!cards?.length) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      cards.forEach((card) => card.classList.add("in-view"));
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="applications-section nav-target" id="applications">
      <div className="eyebrow"><span /> APPLICATIONS</div>
      <h2>Designed for places where distributed energy matters.</h2>
      <div className="applications-stack" ref={stackRef}>
        {applications.map((application) => (
          <article className={`app-card ${application.direction}`} key={application.title}>
            <img src={application.image} alt={application.alt} />
            <div className="app-card-scrim" />
            <div className="app-card-copy">
              <small>{application.eyebrow}</small>
              <h3>{application.title}</h3>
              <p>{application.copy}</p>
            </div>
          </article>
        ))}
      </div>
      <p className="applications-caption">Stock photography, illustrative — not EST Solution sites.</p>
    </section>
  );
}
