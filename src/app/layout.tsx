import type { Metadata } from "next";
import localFont from "next/font/local";
import { Footer, Header } from "./components/SiteChrome";
import { JsonLd, organizationJsonLd, siteMetadata, websiteJsonLd } from "./seo";
import "./globals.css";

const neueHaas = localFont({
  src: [
    { path: "./fonts/neue-haas-light.ttf", weight: "300", style: "normal" },
    { path: "./fonts/neue-haas-roman.ttf", weight: "400", style: "normal" },
    {
      path: "./fonts/neue-haas-medium-italic.ttf",
      weight: "500",
      style: "italic",
    },
  ],
  variable: "--font-sans",
  display: "swap",
  preload: false,
});

const romanEdition = localFont({
  src: [
    { path: "./fonts/roman-regular.otf", weight: "400", style: "normal" },
    { path: "./fonts/roman-italic.otf", weight: "400", style: "italic" },
  ],
  variable: "--font-display",
  display: "swap",
  preload: false,
});

const facelio = localFont({
  src: [{ path: "./fonts/facelio.otf", weight: "400", style: "normal" }],
  variable: "--font-nav",
  display: "swap",
  preload: false,
});

export const metadata: Metadata = siteMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${neueHaas.variable} ${romanEdition.variable} ${facelio.variable} h-full antialiased`}
    >
      <body>
        <JsonLd data={[organizationJsonLd, websiteJsonLd]} />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
