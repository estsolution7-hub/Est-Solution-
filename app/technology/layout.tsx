import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PEM Technology",
  description: "EST Solution engineers PEM electrolysis from catalyst to stack. Lower-cost green hydrogen, made in Korea.",
};

export default function TechnologyLayout({ children }: { children: React.ReactNode }) {
  return children;
}
