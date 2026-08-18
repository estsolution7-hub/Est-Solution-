import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  size?: number;
  stroke?: number;
};

function outlineIcon(paths: string[]) {
  return function Icon({ size = 24, stroke = 2, ...props }: IconProps) {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
        {paths.map((d) => <path d={d} key={d} />)}
      </svg>
    );
  };
}

export const IconAlertTriangle = outlineIcon([
  "M12 9v4",
  "M10.363 3.591l-8.106 13.534a1.914 1.914 0 0 0 1.636 2.871h16.214a1.914 1.914 0 0 0 1.636 -2.87l-8.106 -13.536a1.914 1.914 0 0 0 -3.274 0",
  "M12 16h.01",
]);
export const IconArrowRight = outlineIcon(["M5 12l14 0", "M13 18l6 -6", "M13 6l6 6"]);
export const IconArrowUpRight = outlineIcon(["M17 7l-10 10", "M8 7l9 0l0 9"]);
export const IconAtom = outlineIcon([
  "M12 12v.01",
  "M19.071 4.929c-1.562 -1.562 -6 .337 -9.9 4.243c-3.905 3.905 -5.804 8.337 -4.242 9.9c1.562 1.561 6 -.338 9.9 -4.244c3.905 -3.905 5.804 -8.337 4.242 -9.9",
  "M4.929 4.929c-1.562 1.562 .337 6 4.243 9.9c3.905 3.905 8.337 5.804 9.9 4.242c1.561 -1.562 -.338 -6 -4.244 -9.9c-3.905 -3.905 -8.337 -5.804 -9.9 -4.242",
]);
export const IconBolt = outlineIcon(["M13 3l0 7l6 0l-8 11l0 -7l-6 0l8 -11"]);
export const IconBoxMultiple = outlineIcon([
  "M7 5a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2l0 -10",
  "M17 17v2a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h2",
]);
export const IconBuilding = outlineIcon([
  "M3 21l18 0", "M9 8l1 0", "M9 12l1 0", "M9 16l1 0", "M14 8l1 0", "M14 12l1 0", "M14 16l1 0",
  "M5 21v-16a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v16",
]);
export const IconCheck = outlineIcon(["M5 12l5 5l10 -10"]);
export const IconChevronDown = outlineIcon(["M6 9l6 6l6 -6"]);
export const IconCylinder = outlineIcon(["M5 6a7 3 0 1 0 14 0a7 3 0 1 0 -14 0", "M5 6v12c0 1.657 3.134 3 7 3s7 -1.343 7 -3v-12"]);
export const IconFlask2 = outlineIcon(["M6.1 15h11.8", "M14 3v7.342a6 6 0 0 1 1.318 10.658h-6.635a6 6 0 0 1 1.317 -10.66v-7.34h4", "M9 3h6"]);
export const IconGrain = outlineIcon([
  "M3.5 9.5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", "M8.5 4.5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",
  "M8.5 14.5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", "M3.5 19.5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",
  "M13.5 9.5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", "M18.5 4.5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",
  "M13.5 19.5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", "M18.5 14.5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",
]);
export const IconLayersIntersect = outlineIcon([
  "M8 6a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2l0 -8",
  "M4 10a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2l0 -8",
]);
export const IconMail = outlineIcon(["M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10", "M3 7l9 6l9 -6"]);
export const IconMapPin = outlineIcon(["M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0", "M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0"]);
export const IconMenu2 = outlineIcon(["M4 6l16 0", "M4 12l16 0", "M4 18l16 0"]);
export const IconPhone = outlineIcon(["M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"]);
export const IconQuote = outlineIcon([
  "M10 11h-4a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h3a1 1 0 0 1 1 1v6c0 2.667 -1.333 4.333 -4 5",
  "M19 11h-4a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h3a1 1 0 0 1 1 1v6c0 2.667 -1.333 4.333 -4 5",
]);
export const IconShip = outlineIcon([
  "M2 20a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1",
  "M4 18l-1 -5h18l-2 4", "M5 13v-6h8l4 6", "M7 7v-4h-1",
]);
export const IconStack2 = outlineIcon(["M12 4l-8 4l8 4l8 -4l-8 -4", "M4 12l8 4l8 -4", "M4 16l8 4l8 -4"]);
export const IconSun = outlineIcon(["M8 12a4 4 0 1 0 8 0a4 4 0 1 0 -8 0", "M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7"]);
export const IconTrendingDown = outlineIcon(["M3 7l6 6l4 -4l8 8", "M21 10l0 7l-7 0"]);
export const IconWavesElectricity = outlineIcon([
  "M3 12c.576 -.643 1.512 -1.017 2.5 -1c.988 -.017 1.924 .357 2.5 1c.576 .643 1.512 1.017 2.5 1c.988 .017 1.924 -.357 2.5 -1",
  "M3 16c.576 -.643 1.512 -1.017 2.5 -1c.988 -.017 1.924 .357 2.5 1c.576 .643 1.512 1.017 2.5 1c.988 .017 1.924 -.357 2.5 -1",
  "M3 8c.576 -.643 1.512 -1.017 2.5 -1c.988 -.017 1.924 .357 2.5 1c.576 .643 1.512 1.017 2.5 1c.988 .017 1.924 -.357 2.5 -1",
  "M20 7l-3 5h4l-3 5",
]);
export const IconX = outlineIcon(["M18 6l-12 12", "M6 6l12 12"]);

export function IconPlayerPlayFilled({ size = 24, stroke = 2, ...props }: IconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor" stroke="none" aria-hidden="true" {...props}>
      <path d="M6 4v16a1 1 0 0 0 1.524 .852l13 -8a1 1 0 0 0 0 -1.704l-13 -8a1 1 0 0 0 -1.524 .852z" />
    </svg>
  );
}
