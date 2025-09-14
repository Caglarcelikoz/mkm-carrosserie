import { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Contact } from "@/components/sections/Contact";

export const metadata: Metadata = {
  title:
    "Carrosseriediensten België | Schadeherstel & Lakwerk | MKM Carrosserie",
  description:
    "Vakmanschap in carrosseriewerken sinds 2023. Professionele carrosseriediensten: schadeherstel, lakwerk, carrosseriewerken, bumper reparaties en onderhoud. Gratis offerte voor particulieren en bedrijven!",
  keywords: [
    "carrosserie belgië",
    "carrosserie genk",
    "schadeherstel",
    "schadeherstel genk",
    "lakwerk",
    "lakwerk genk",
    "carrosseriewerken",
    "carrosseriewerken genk",
    "bumper reparatie",
    "onderhoud auto",
    "onderhoud auto genk",
    "carrosseriebedrijf",
    "carrosseriebedrijf genk",
    "carrosseriediensten",
    "carrosseriediensten genk",
    "MKM Carrosserie",
    "MKM Carrosserie genk",
    "MKM Genk",
    "MKM Solutions",
    "MKM Solutions genk",
    "carrosserie particulieren",
    "carrosserie bedrijven",
    "auto reparatie belgië",
    "schadeherstel belgië",
    "lakwerk belgië",
    "carrosserie herstellingen",
    "verzekeringswerk",
  ],
  openGraph: {
    title:
      "Carrosseriediensten België | Schadeherstel & Lakwerk | MKM Carrosserie",
    description:
      "Vakmanschap in carrosseriewerken sinds 2023. Professionele carrosseriediensten voor particulieren en bedrijven.",
    url: "https://mkmcarrosserie.be",
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
    title:
      "Carrosseriediensten België | Schadeherstel & Lakwerk | MKM Carrosserie",
    description:
      "Vakmanschap in carrosseriewerken sinds 2023. Professionele carrosseriediensten.",
  },
  alternates: {
    canonical: "https://mkmcarrosserie.be",
  },
};

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "MKM Carrosserie",
    description:
      "Vakmanschap in carrosseriewerken sinds 2023. Professionele carrosseriediensten voor particulieren en bedrijven.",
    url: "https://mkmcarrosserie.be",
    telephone: "+32 484 81 89 83",
    email: "info@mkmcarrosserie.be",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Toekomstlaan 13",
      addressLocality: "Genk",
      postalCode: "3600",
      addressCountry: "BE",
      addressRegion: "België",
    },
    areaServed: {
      "@type": "Country",
      name: "België",
    },
    serviceType: [
      "Carrosseriewerken",
      "Schadeherstel",
      "Lakwerk",
      "Bumper Reparaties",
      "Onderhoud",
      "Verzekeringswerk",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Carrosseriediensten",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Schadeherstel",
            description:
              "Professioneel herstel van alle soorten schade aan uw voertuig met hoogwaardige materialen en vakmanschap.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Lakwerk",
            description:
              "Hoogwaardige lakwerkzaamheden voor een perfecte afwerking met moderne spuitcabine technologie.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Carrosseriewerken",
            description:
              "Vakmanschap in alle carrosseriewerken met aandacht voor detail en kwaliteit.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Bumper Reparaties",
            description:
              "Professionele reparatie van bumpers en andere carrosserie onderdelen.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Onderhoud",
            description:
              "Preventief onderhoud om uw voertuig in topconditie te houden.",
          },
        },
      ],
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "15",
    },
    foundingDate: "2023",
    openingHours: "Mo-Fr 09:00-17:00",
    priceRange: "€€",
    paymentAccepted: "Cash, Credit Card, Bank Transfer",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div>
        <Hero />
        <Services />
        <Contact />
      </div>
    </>
  );
}
