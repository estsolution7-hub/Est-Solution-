import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Company",
  description: "EST Solution — 13 years in hydrogen, 16 national and regional R&D programmes since 2023, team, IP, and field demonstration.",
};

export default function CompanyLayout({ children }: { children: React.ReactNode }) {
  return children;
}
