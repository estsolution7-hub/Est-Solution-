import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Electrolysis Products",
  description: "PEM electrolysis systems from 2.5 kW to 20 kW, in-house core components, and mobile hydrogen production.",
};

export default function ProductsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
