import type { Metadata, Viewport } from "next";
import { Epilogue, Inter } from "next/font/google";

import { Footer } from "@/components/layout/Footer";
import { MagneticCursor } from "@/components/layout/MagneticCursor";
import { Navbar } from "@/components/layout/Navbar";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { Noise } from "@/components/layout/Noise";
import { siteConfig } from "@/lib/content";

import "./globals.css";

const epilogue = Epilogue({
  subsets: ["latin"],
  variable: "--font-epilogue",
  display: "swap",
  weight: ["400", "700", "800", "900"]
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"]
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.shortName}`
  },
  description: siteConfig.description,
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    type: "website",
    locale: "en_IN",
    url: siteConfig.url
  },
  robots: {
    index: true,
    follow: true
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0b0b0b"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={`${epilogue.variable} ${inter.variable} dark`} lang="en">
      <body className="font-body antialiased">
        <Noise />
        <SmoothScroll>
          <a
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-primary focus:px-5 focus:py-3 focus:text-on-primary"
            href="#main-content"
          >
            Skip to content
          </a>
          <Navbar />
          <main id="main-content">{children}</main>
          <Footer />
        </SmoothScroll>
        <MagneticCursor />
      </body>
    </html>
  );
}
