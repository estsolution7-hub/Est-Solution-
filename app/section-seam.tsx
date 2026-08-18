"use client";

/**
 * Flow-field seam — the serpentine channel pattern machined into a bipolar
 * plate, run across a section boundary.
 *
 * `tone`    which surfaces meet at the seam
 * `from`    which edge the channels enter from ("left" | "right")
 * `size`    "sm" | "md" | "lg" — lg gives long, lazy curves for wide breaks
 */
export function SectionSeam({
  tone = "light-to-dark",
  from = "left",
  size = "md",
  draw = false,
  molecules = false,
}: {
  tone?: "light-to-dark" | "dark-to-light" | "light";
  from?: "left" | "right";
  size?: "sm" | "md" | "lg";
  draw?: boolean;
  molecules?: boolean;
}) {
  // Longer, shallower arcs for lg; tighter turns for sm.
  const geometry = {
    sm: [[440, 540], [520, 620], [600, 700]],
    md: [[520, 640], [580, 700], [660, 760], [740, 820]],
    lg: [[620, 900], [720, 1010], [820, 1120], [920, 1230], [1020, 1340]],
  }[size];

  const paths = geometry.map(([flat, turn], i) => {
    const y = 40 + i * 30;
    const r = 56 + i * 6;
    return `M-20 ${y} H${flat} Q${turn} ${y} ${turn} ${y + r} Q${turn} ${y + r * 2} ${flat} ${y + r * 2} H-20`;
  });

  return (
    <div
      className={`seam seam-${tone} seam-${size} seam-from-${from}${draw ? " seam-draw reveal" : ""}`}
      aria-hidden="true"
    >
      <div className="seam-top" />
      <div className="seam-bottom" />
      <svg className="seam-lines seam-lines-light" viewBox="0 0 1400 260" preserveAspectRatio="none" focusable="false">
        {paths.map((d) => <path d={d} key={d} />)}
      </svg>
      <svg className="seam-lines seam-lines-dark" viewBox="0 0 1400 260" preserveAspectRatio="none" focusable="false">
        {paths.map((d) => <path d={d} key={d} />)}
      </svg>
      {molecules && <>
        <span className="seam-mol seam-mol-1">H₂</span>
        <span className="seam-mol seam-mol-2">H₂</span>
        <span className="seam-mol seam-mol-3">H₂</span>
      </>}
    </div>
  );
}
