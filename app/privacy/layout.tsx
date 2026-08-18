import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy",
  description: "How EST Solution uses inquiry-form information submitted through the website.",
};

export default function PrivacyLayout({ children }: { children: React.ReactNode }) {
  return children;
}
