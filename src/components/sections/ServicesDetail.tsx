import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
  Star,
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
    image:
      "https://images.unsplash.com/photo-1549317336-206569e8475c?w=800&h=600&fit=crop",
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
    duration: "1-5 werkdagen",
    warranty: "2 jaar garantie",
  },
  {
    id: "lakwerk",
    title: "Lakwerk",
    description:
      "Hoogwaardige lakwerkzaamheden voor een perfecte afwerking met moderne spuittechnieken en duurzame materialen.",
    icon: Paintbrush,
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
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
    image:
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&h=600&fit=crop",
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
    duration: "5-14 werkdagen",
    warranty: "2 jaar garantie",
  },
  {
    id: "onderhoud",
    title: "Onderhoud",
    description:
      "Preventief onderhoud om uw voertuig in topconditie te houden met regelmatige controles en service.",
    icon: Settings,
    image:
      "https://images.unsplash.com/photo-1486754735734-325b5831c3ad?w=800&h=600&fit=crop",
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
    duration: "1-2 werkdagen",
    warranty: "1 jaar garantie",
  },
];

const whyChooseUs = [
  {
    icon: Clock,
    title: "Snelle Service",
    description:
      "Gratis offerte binnen 24 uur en snelle afhandeling van uw reparatie zonder concessies aan kwaliteit.",
  },
  {
    icon: Users,
    title: "Ervaren Vakmensen",
    description:
      "Meer dan 25 jaar ervaring in carrosseriewerken met continue bijscholing en certificering.",
  },
  {
    icon: Shield,
    title: "Kwaliteitsgarantie",
    description:
      "Wij staan garant voor onze werkzaamheden met de hoogste kwaliteitsstandaarden en materialen.",
  },
  {
    icon: Award,
    title: "Verzekeringswerk",
    description:
      "Erkend door alle verzekeringsmaatschappijen voor professionele afhandeling van schades.",
  },
];

export function ServicesDetail() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
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
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Button
                size="lg"
                className="px-8 py-4 text-lg bg-black hover:bg-gray-800 text-white"
                asChild
              >
                <Link href="/contact">Gratis Offerte Aanvragen</Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="px-8 py-4 text-lg border-black text-black hover:bg-black hover:text-white"
                asChild
              >
                <Link href="/gallery">Bekijk Ons Werk</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto space-y-20">
            {detailedServices.map((service, index) => {
              const Icon = service.icon;
              const isEven = index % 2 === 0;

              return (
                <div key={service.id} className="space-y-12">
                  {/* Service Header */}
                  <div className="text-center space-y-6">
                    <div className="flex justify-center mb-6">
                      <div className="p-6 bg-gray-100 rounded-2xl shadow-sm">
                        <Icon className="h-16 w-16 text-black" />
                      </div>
                    </div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
                      {service.title}
                    </h2>
                    <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Service Content */}
                  <div
                    className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-start ${
                      !isEven ? "lg:grid-flow-col-dense" : ""
                    }`}
                  >
                    {/* Image */}
                    <div className={`${!isEven ? "lg:col-start-2" : ""}`}>
                      <div className="relative h-80 md:h-96 lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
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
                      className={`space-y-10 ${
                        !isEven ? "lg:col-start-1" : ""
                      }`}
                    >
                      {/* Features */}
                      <div>
                        <h3 className="text-2xl md:text-3xl font-bold mb-8 text-gray-900">
                          Wat wij doen:
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {service.features.map((feature, idx) => (
                            <div
                              key={idx}
                              className="flex items-start space-x-3 p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
                            >
                              <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                              <span className="text-gray-700 font-medium">
                                {feature}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Process */}
                      <div>
                        <h3 className="text-2xl md:text-3xl font-bold mb-8 text-gray-900">
                          Ons Proces:
                        </h3>
                        <div className="space-y-4">
                          {service.process.map((step, idx) => (
                            <div
                              key={idx}
                              className="flex items-start space-x-4 p-4 rounded-xl bg-white border border-gray-200 shadow-sm"
                            >
                              <div className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                                {idx + 1}
                              </div>
                              <span className="text-gray-700 font-medium pt-2">
                                {step}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Info Cards */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <Card className="border-2 border-gray-200 shadow-lg hover:shadow-xl transition-shadow">
                          <CardContent className="p-6 text-center">
                            <Clock className="h-10 w-10 text-black mx-auto mb-4" />
                            <h4 className="font-bold text-lg text-gray-900 mb-2">
                              Duur
                            </h4>
                            <p className="text-gray-600 font-medium">
                              {service.duration}
                            </p>
                          </CardContent>
                        </Card>
                        <Card className="border-2 border-gray-200 shadow-lg hover:shadow-xl transition-shadow">
                          <CardContent className="p-6 text-center">
                            <Shield className="h-10 w-10 text-black mx-auto mb-4" />
                            <h4 className="font-bold text-lg text-gray-900 mb-2">
                              Garantie
                            </h4>
                            <p className="text-gray-600 font-medium">
                              {service.warranty}
                            </p>
                          </CardContent>
                        </Card>
                      </div>

                      {/* CTA */}
                      <div className="pt-6">
                        <Button
                          size="lg"
                          className="w-full sm:w-auto bg-black hover:bg-gray-800 text-white px-8 py-4 text-lg"
                          asChild
                        >
                          <Link href="/contact">
                            Offerte Aanvragen
                            <ArrowRight className="ml-2 h-5 w-5" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>

                  {/* Divider */}
                  {index < detailedServices.length - 1 && (
                    <div className="border-t border-gray-200 pt-16"></div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-10">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
                Klaar om uw voertuig te laten repareren?
              </h2>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                Neem contact met ons op voor een gratis offerte of advies. Wij
                helpen u graag verder!
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                size="lg"
                className="px-8 py-4 text-lg bg-black hover:bg-gray-800 text-white"
                asChild
              >
                <Link href="/contact">Gratis Offerte Aanvragen</Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="px-8 py-4 text-lg border-black text-black hover:bg-black hover:text-white"
                asChild
              >
                <Link href="/gallery">Bekijk Ons Werk</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
