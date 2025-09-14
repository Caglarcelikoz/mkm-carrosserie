import { Metadata } from "next";
import { Contact } from "@/components/sections/Contact";

export const metadata: Metadata = {
  title: "Contact | Gratis Offerte Carrosserie België | MKM Carrosserie",
  description:
    "Neem contact op met MKM Carrosserie voor een gratis offerte carrosseriewerken in België. Vakmanschap sinds 2023. Snelle reactie en professioneel advies!",
  keywords: [
    "contact carrosserie belgië",
    "gratis offerte carrosserie",
    "carrosseriebedrijf contact",
    "MKM Carrosserie contact",
    "offerte aanvragen",
    "carrosserie belgië",
    "carrosseriediensten",
    "schadeherstel contact",
  ],
  openGraph: {
    title: "Contact | Gratis Offerte Carrosserie België | MKM Carrosserie",
    description:
      "Neem contact op met MKM Carrosserie voor een gratis offerte carrosseriewerken in België. Vakmanschap sinds 2023.",
    url: "https://mkmcarrosserie.be/contact",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "MKM Carrosserie - Contact Carrosserie België",
      },
    ],
  },
  twitter: {
    title: "Contact | Gratis Offerte Carrosserie België | MKM Carrosserie",
    description:
      "Neem contact op met MKM Carrosserie voor een gratis offerte carrosseriewerken in België.",
  },
  alternates: {
    canonical: "https://mkmcarrosserie.be/contact",
  },
};

export default function ContactPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact MKM Carrosserie",
    description:
      "Neem contact op met MKM Carrosserie voor een gratis offerte carrosseriewerken in België. Vakmanschap sinds 2023.",
    url: "https://mkmcarrosserie.be/contact",
    mainEntity: {
      "@type": "LocalBusiness",
      name: "MKM Carrosserie",
      description: "Vakmanschap in carrosseriewerken sinds 2023",
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
      openingHours: "Mo-Fr 09:00-17:00",
      priceRange: "€€",
      paymentAccepted: "Cash, Credit Card, Bank Transfer",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div>
        <Contact />
      </div>
    </>
  );
}
