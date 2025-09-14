import { Metadata } from "next";
import { ServicesDetail } from "@/components/sections/ServicesDetail";

export const metadata: Metadata = {
  title:
    "Carrosseriediensten België | Schadeherstel, Lakwerk & Onderhoud | MKM Carrosserie",
  description:
    "Ontdek onze uitgebreide carrosseriediensten in België: schadeherstel, lakwerk, carrosseriewerken, bumper reparaties en onderhoud. Vakmanschap sinds 2023. Gratis offerte!",
  keywords: [
    "carrosseriediensten belgië",
    "schadeherstel belgië",
    "lakwerk belgië",
    "carrosseriewerken belgië",
    "bumper reparatie belgië",
    "onderhoud auto belgië",
    "carrosseriebedrijf",
    "MKM Carrosserie",
    "carrosserie particulieren",
    "carrosserie bedrijven",
    "auto reparatie",
    "verzekeringswerk",
  ],
  openGraph: {
    title:
      "Carrosseriediensten België | Schadeherstel, Lakwerk & Onderhoud | MKM Carrosserie",
    description:
      "Ontdek onze uitgebreide carrosseriediensten in België: schadeherstel, lakwerk, carrosseriewerken, bumper reparaties en onderhoud. Vakmanschap sinds 2023.",
    url: "https://mkmcarrosserie.beservices",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "MKM Carrosserie - Carrosseriediensten België",
      },
    ],
  },
  twitter: {
    title:
      "Carrosseriediensten België | Schadeherstel, Lakwerk & Onderhoud | MKM Carrosserie",
    description:
      "Ontdek onze uitgebreide carrosseriediensten in België. Vakmanschap sinds 2023.",
  },
  alternates: {
    canonical: "https://mkmcarrosserie.be/services",
  },
};

export default function ServicesPage() {
  return <ServicesDetail />;
}


