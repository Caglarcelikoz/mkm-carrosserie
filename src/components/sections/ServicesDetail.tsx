import { Button } from "@/components/ui/button";
import {
  Wrench,
  Paintbrush,
  Car,
  Settings,
  CheckCircle,
  Clock,
  Shield,
  Award,
  Users,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const detailedServices = [
  {
    id: "schadeherstel",
    title: "Schadeherstel",
    description:
      "Professioneel herstel van alle soorten schade aan uw voertuig met de nieuwste technieken en hoogwaardige materialen.",
    icon: Wrench,
    image: "/cardamage.jpg",
    features: [
      "Bumper reparatie en vervanging",
      "Deur- en kozijn herstel",
      "Voorruit en zijruit reparatie",
      "Kleine en grote schades",
      "Verzekeringswerk",
      "Originele onderdelen",
      "Kleurmatching",
      "Kwaliteitscontrole",
    ],
    process: [
      "Gratis inspectie en schadebeoordeling",
      "Offerte binnen 24 uur",
      "Afspraak inplannen",
      "Reparatie met originele onderdelen",
      "Kwaliteitscontrole en aflevering",
    ],
    benefits: ["Snelle service", "Verzekeringswerk", "Kwaliteitsgarantie"],
  },
  {
    id: "lakwerk",
    title: "Lakwerk",
    description:
      "Hoogwaardige lakwerkzaamheden voor een perfecte afwerking met moderne spuittechnieken en duurzame materialen.",
    icon: Paintbrush,
    image: "/lakwerk.jpg",
    features: [
      "Complete lakbeurt",
      "Spot repair werkzaamheden",
      "Kleurmatching met spectrometer",
      "Beschermende coatings",
      "Detailing en polijsten",
      "Anti-corrosie behandeling",
      "UV-bescherming",
      "Glansbehandeling",
    ],
    process: [
      "Kleuranalyse en matching",
      "Voorbereiding en schuren",
      "Primer en grondverf",
      "Hoofdlaag lakwerk",
      "Beschermende coating",
      "Polijsten en afwerking",
    ],
    benefits: ["Kleurmatching", "Garantie", "Moderne technieken"],
    duration: "3-7 werkdagen",
    warranty: "3 jaar garantie",
  },
  {
    id: "carrosserie",
    title: "Carrosseriewerken",
    description:
      "Vakmanschap in alle carrosseriewerken met aandacht voor detail en gebruik van professionele apparatuur.",
    icon: Car,
    image: "/carrosserie.jpg",
    features: [
      "Carrosserie reparatie",
      "Metaalbewerking",
      "Laswerkzaamheden",
      "Constructie herstel",
      "Onderstel werkzaamheden",
      "Frame rechtzetten",
      "Plaatwerk reparatie",
      "Constructie versterking",
    ],
    process: [
      "Schadebeoordeling en meting",
      "Dismontage van onderdelen",
      "Metaalbewerking en lassen",
      "Constructie herstel",
      "Montage en afstelling",
      "Kwaliteitscontrole",
    ],
    benefits: ["Vakmanschap", "Originele onderdelen", "Precisie werk"],
  },
  {
    id: "onderhoud",
    title: "Onderhoud",
    description:
      "Preventief onderhoud om uw voertuig in topconditie te houden met regelmatige controles en service.",
    icon: Settings,
    image: "/onderhoud.jpeg",
    features: [
      "Periodiek onderhoud",
      "Inspectie en controle",
      "Olie en filters vervangen",
      "Remmen en banden controle",
      "Motor en transmissie service",
      "Koelsysteem onderhoud",
      "Elektrische systemen",
      "Onderstel inspectie",
    ],
    process: [
      "Onderhoudsplan opstellen",
      "Uitgebreide inspectie",
      "Onderhoudswerkzaamheden",
      "Testen en kalibreren",
      "Rapportage en advies",
      "Volgende afspraak inplannen",
    ],
    benefits: ["Preventief", "Onderhoudsplan", "Servicepakket"],
  },
];

export function ServicesDetail() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "MKM Carrosserie",
    description:
      "Professionele carrosseriediensten in België. Schadeherstel, lakwerk, carrosseriewerken en onderhoud.",
    url: "https://mkmcarrosserie.nl",
    telephone: "+32 484 81 89 83",
    address: {
      "@type": "PostalAddress",
      addressCountry: "BE",
      addressRegion: "België",
    },
    areaServed: {
      "@type": "Country",
      name: "België",
    },
    serviceType: [
      "Carrosseriediensten",
      "Schadeherstel",
      "Lakwerk",
      "Carrosseriewerken",
      "Onderhoud",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Carrosseriediensten",
      itemListElement: detailedServices.map((service, index) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.title,
          description: service.description,
        },
      })),
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "25",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="bg-white">
        {/* Hero Section */}
        <section className="pt-16 bg-gradient-to-br from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
                  Onze Diensten
                </h1>
                <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                  Van schadeherstel tot preventief onderhoud - wij bieden een
                  compleet pakket aan carrosseriediensten met de hoogste
                  kwaliteitsstandaarden en jarenlange ervaring.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Services */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto space-y-12 md:space-y-16">
              {detailedServices.map((service, index) => {
                const isEven = index % 2 === 0;

                return (
                  <div
                    key={service.id}
                    id={service.id}
                    className="space-y-6 md:space-y-8"
                  >
                    {/* Complete Service Card */}
                    <div className="relative">
                      <div className="bg-gradient-to-br from-gray-50 via-white to-gray-100 rounded-2xl md:rounded-3xl p-6 md:p-12 shadow-2xl border border-gray-200/50 hover:shadow-3xl transition-all duration-500 hover:scale-[1.01]">
                        {/* Service Header */}
                        <div className="text-center space-y-6 md:space-y-8 mb-12 md:mb-16">
                          {/* Title */}
                          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-tight">
                            <span className="bg-gradient-to-r from-gray-800 via-black to-gray-800 bg-clip-text text-transparent drop-shadow-sm">
                              {service.title}
                            </span>
                          </h2>

                          {/* Description */}
                          <div className="max-w-4xl mx-auto">
                            <div className="bg-white/80 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 md:p-8 border border-gray-200/50 shadow-lg">
                              <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-medium">
                                {service.description}
                              </p>
                            </div>
                          </div>

                          {/* Benefits Tags */}
                          <div className="flex flex-wrap justify-center gap-3 md:gap-4 pt-4">
                            {service.benefits.map((benefit, idx) => (
                              <div key={idx} className="relative group">
                                <div className="bg-gradient-to-r from-gray-800 to-black text-white px-4 md:px-6 py-2 md:py-3 rounded-full shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                                  <span className="text-xs md:text-sm font-bold tracking-wide">
                                    {benefit}
                                  </span>
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-r from-gray-600 to-black rounded-full blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300 -z-10"></div>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Service Content */}
                        <div
                          className={`grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-start ${
                            !isEven ? "lg:grid-flow-col-dense" : ""
                          }`}
                        >
                          {/* Image */}
                          <div className={`${!isEven ? "lg:col-start-2" : ""}`}>
                            <div className="relative h-64 md:h-80 lg:h-[500px] rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl">
                              <Image
                                src={service.image}
                                alt={service.title}
                                fill
                                className="object-cover transition-transform hover:scale-105"
                              />
                            </div>
                          </div>

                          {/* Content */}
                          <div
                            className={`space-y-8 md:space-y-10 ${
                              !isEven ? "lg:col-start-1" : ""
                            }`}
                          >
                            {/* Features */}
                            <div>
                              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-6 md:mb-8 text-gray-900">
                                Wat wij doen:
                              </h3>
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                                {service.features.map((feature, idx) => (
                                  <div
                                    key={idx}
                                    className="flex items-start space-x-3 p-3 md:p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
                                  >
                                    <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-green-600 flex-shrink-0 mt-0.5" />
                                    <span className="text-sm md:text-base text-gray-700 font-medium">
                                      {feature}
                                    </span>
                                  </div>
                                ))}
                              </div>
                            </div>

                            {/* Process */}
                            <div>
                              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-6 md:mb-8 text-gray-900">
                                Ons werkproces:
                              </h3>
                              <div className="space-y-3 md:space-y-4">
                                {service.process.map((step, idx) => (
                                  <div
                                    key={idx}
                                    className="flex items-start space-x-3 md:space-x-4 p-3 md:p-4 rounded-xl bg-white border border-gray-200 shadow-sm"
                                  >
                                    <div className="w-8 h-8 md:w-10 md:h-10 bg-black text-white rounded-full flex items-center justify-center text-xs md:text-sm font-bold flex-shrink-0">
                                      {idx + 1}
                                    </div>
                                    <span className="text-sm md:text-base text-gray-700 font-medium pt-1 md:pt-2">
                                      {step}
                                    </span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Divider */}
                    {index < detailedServices.length - 1 && (
                      <div className="border-t border-gray-200 pt-8 md:pt-12"></div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Block */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-gray-50 via-white to-gray-100 rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-200/50 text-center">
                <div className="space-y-6">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                    Gratis Offerte
                  </h2>
                  <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
                    Neem contact met ons op voor een gratis offerte of advies
                    voor uw carrosseriewerk. Wij helpen u graag verder met
                    professionele carrosseriediensten!
                  </p>
                  <div className="flex justify-center pt-4">
                    <Button
                      size="lg"
                      className="px-8 py-4 text-lg bg-black hover:bg-gray-800 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                      asChild
                    >
                      <Link href="/#contact">Contact</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
