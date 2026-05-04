import type { Metadata } from "next";
import localFont from "next/font/local";
import { Footer, Header } from "./components/SiteChrome";
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
});

const romanEdition = localFont({
  src: [
    { path: "./fonts/roman-regular.otf", weight: "400", style: "normal" },
    { path: "./fonts/roman-italic.otf", weight: "400", style: "italic" },
  ],
  variable: "--font-display",
});

const facelio = localFont({
  src: [{ path: "./fonts/facelio.otf", weight: "400", style: "normal" }],
  variable: "--font-nav",
});

export const metadata: Metadata = {
  title: "The House of Vows",
  description:
    "Wedding planning, styling, and branding for intentionally designed celebrations.",
};

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
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
