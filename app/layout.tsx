import type { Metadata } from "next";
import { Geist_Mono, Noto_Sans_KR } from "next/font/google";
import "./globals.css";

const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
const notoSansKR = Noto_Sans_KR({
  variable: "--font-noto-sans-kr",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  preload: true,
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "EST Solution | Green Hydrogen Technology", template: "%s | EST Solution" },
  description: "EST Solution develops catalysts, MEAs, water-electrolysis stacks and integrated renewable-energy systems for practical green hydrogen.",
  openGraph: {
    title: "EST Solution | Green Hydrogen Technology",
    description: "Green hydrogen, engineered from material to system.",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "EST Solution green hydrogen technology" }],
  },
  twitter: { card: "summary_large_image", title: "EST Solution | Green Hydrogen Technology", description: "Green hydrogen, engineered from material to system.", images: ["/og.png"] },
  alternates: { languages: { en: "/", ko: "/" } },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "32x32" },
    ],
  },
};

const LANG_BOOTSTRAP = `(function(){try{if(localStorage.getItem("est-language")==="KR")document.documentElement.lang="ko";}catch(e){}})();`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: LANG_BOOTSTRAP }} />
      </head>
      <body className={`${geistMono.variable} ${notoSansKR.variable}`}>{children}</body>
    </html>
  );
}
