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
} from "lucide-react";
import Link from "next/link";

const services = [
  {
    title: "Schadeherstel",
    description:
      "Professioneel herstel van alle soorten schade aan uw voertuig",
    icon: Wrench,
    details: [
      "Bumper reparatie en vervanging",
      "Deur- en kozijn herstel",
      "Voorruit en zijruit reparatie",
      "Kleine en grote schades",
      "Verzekeringswerk",
    ],
    features: ["Snelle service", "Verzekeringswerk", "Kwaliteitsgarantie"],
  },
  {
    title: "Lakwerk",
    description: "Hoogwaardige lakwerkzaamheden voor een perfecte afwerking",
    icon: Paintbrush,
    details: [
      "Complete lakbeurt",
      "Spot repair werkzaamheden",
      "Kleurmatching",
      "Beschermende coatings",
      "Detailing en polijsten",
    ],
    features: ["Kleurmatching", "Garantie", "Moderne technieken"],
  },
  {
    title: "Carrosseriewerken",
    description:
      "Vakmanschap in alle carrosseriewerken met aandacht voor detail",
    icon: Car,
    details: [
      "Carrosserie reparatie",
      "Metaalbewerking",
      "Laswerkzaamheden",
      "Constructie herstel",
      "Onderstel werkzaamheden",
    ],
    features: ["Vakmanschap", "Originele onderdelen", "Precisie werk"],
  },
  {
    title: "Onderhoud",
    description: "Preventief onderhoud om uw voertuig in topconditie te houden",
    icon: Settings,
    details: [
      "Periodiek onderhoud",
      "Inspectie en controle",
      "Olie en filters",
      "Remmen en banden",
      "Motor en transmissie",
    ],
    features: ["Preventief", "Onderhoudsplan", "Servicepakket"],
  },
];

export function Services() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold">Onze Diensten</h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Van schadeherstel tot preventief onderhoud - wij bieden een compleet
            pakket aan carrosseriediensten met de hoogste kwaliteitsstandaarden
            en jarenlange ervaring.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="border border-white/20 bg-primary text-primary-foreground overflow-hidden relative"
              >
                {/* Liquid glass overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-white/5 to-transparent"></div>
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>

                <CardHeader className="pb-4 relative z-10">
                  <div className="flex items-start space-x-4">
                    <div className="p-4 bg-white/20 backdrop-blur-sm border border-white/30 rounded-2xl flex-shrink-0">
                      <Icon className="h-10 w-10 text-primary-foreground" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-2xl mb-2">
                        {service.title}
                      </CardTitle>
                      <CardDescription className="text-lg leading-relaxed text-primary-foreground/80">
                        {service.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6 relative z-10">
                  {/* Service Details */}
                  <div>
                    <h4 className="font-semibold mb-3 text-primary-foreground">
                      Wat wij doen:
                    </h4>
                    <ul className="space-y-2">
                      {service.details.map((detail, idx) => (
                        <li
                          key={idx}
                          className="flex items-center space-x-2 text-primary-foreground/80"
                        >
                          <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Features */}
                  <div>
                    <h4 className="font-semibold mb-3 text-primary-foreground">
                      Waarom kiezen voor ons:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {service.features.map((feature, idx) => (
                        <span
                          key={idx}
                          className="px-4 py-2 bg-white/20 backdrop-blur-sm border border-white/30 text-primary-foreground rounded-full text-sm font-medium"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="space-y-6">
            <h3 className="text-2xl lg:text-3xl font-bold">
              Klaar om uw voertuig te laten repareren?
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Neem contact met ons op voor een gratis offerte of advies. Wij
              helpen u graag verder!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="px-8 py-4 text-lg" asChild>
                <Link href="/contact">Gratis Offerte Aanvragen</Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="px-8 py-4 text-lg"
                asChild
              >
                <Link href="/services">Alle Diensten Bekijken</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
