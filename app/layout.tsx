import type { Metadata } from "next";
import { Geist, Geist_Mono, Noto_Sans_KR } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
const notoSansKR = Noto_Sans_KR({
  variable: "--font-noto-sans-kr",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://est-solution-energy.estsolution7.chatgpt.site"),
  title: { default: "EST Solution | Green Hydrogen Technology", template: "%s | EST Solution" },
  description: "EST Solution develops catalysts, MEAs, water-electrolysis stacks and integrated renewable-energy systems for practical green hydrogen.",
  openGraph: {
    title: "EST Solution | Green Hydrogen Technology",
    description: "Green hydrogen, engineered from material to system.",
    type: "website",
    images: [{ url: "/og.png", width: 1792, height: 933, alt: "EST Solution green hydrogen technology" }],
  },
  twitter: { card: "summary_large_image", title: "EST Solution | Green Hydrogen Technology", description: "Green hydrogen, engineered from material to system.", images: ["/og.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${geistSans.variable} ${geistMono.variable} ${notoSansKR.variable}`}>{children}</body></html>;
}
