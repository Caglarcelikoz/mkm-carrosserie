import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "MKM Carrosserie - Vakmanschap in Carrosseriewerken België",
    template: "%s | MKM Carrosserie",
  },
  description:
    "Vakmanschap in carrosseriewerken sinds 2023. Professionele carrosseriediensten: schadeherstel, lakwerk, carrosseriewerken, bumper reparaties en onderhoud. Gratis offerte!",
  keywords: [
    "carrosserie belgië",
    "schadeherstel",
    "lakwerk",
    "carrosseriewerken",
    "bumper reparatie",
    "onderhoud auto",
    "carrosseriebedrijf",
    "carrosseriediensten",
    "MKM Carrosserie",
    "carrosserie genk",
    "auto reparatie",
    "schadeherstel belgië",
    "lakwerk belgië",
    "carrosserie herstellingen",
    "verzekeringswerk",
    "MKM",
    "Mustafa Mutlu",
  ],
  authors: [{ name: "MKM Carrosserie" }],
  creator: "MKM Carrosserie",
  publisher: "MKM Carrosserie",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://mkmcarrosserie.be"),
  alternates: {
    canonical: "/",
    languages: {
      "nl-BE": "/",
    },
  },
  openGraph: {
    type: "website",
    locale: "nl_BE",
    url: "https://mkmcarrosserie.be",
    siteName: "MKM Carrosserie",
    title: "MKM Carrosserie - Vakmanschap in Carrosseriewerken België",
    description:
      "Vakmanschap in carrosseriewerken sinds 2023. Professionele carrosseriediensten voor particulieren en bedrijven.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "MKM Carrosserie - Carrosseriebedrijf België",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MKM Carrosserie - Vakmanschap in Carrosseriewerken België",
    description:
      "Vakmanschap in carrosseriewerken sinds 2023. Professionele carrosseriediensten.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
