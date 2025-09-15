import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Wrench, Paintbrush, Car, Settings } from "lucide-react";

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
                className="border-0 shadow-xl shadow-black/20 hover:shadow-2xl hover:shadow-black/30 transition-all duration-300 bg-white/95 backdrop-blur-sm hover:scale-105 rounded-3xl overflow-hidden relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900/5 via-transparent to-transparent rounded-3xl"></div>

                <CardHeader className="pb-4 relative z-10">
                  <div className="flex items-start space-x-4">
                    <div className="p-4 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full shadow-sm">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-2xl mb-2">
                        {service.title}
                      </CardTitle>
                      <CardDescription className="text-lg leading-relaxed">
                        {service.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6 relative z-10">
                  {/* Service Details */}
                  <div>
                    <h4 className="font-semibold mb-3 text-lg">
                      Wat wij doen:
                    </h4>
                    <ul className="space-y-2">
                      {service.details.map((detail, idx) => (
                        <li key={idx} className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Features */}
                  <div>
                    <h4 className="font-semibold mb-3 text-lg">
                      Waarom kiezen voor ons:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {service.features.map((feature, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
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
      </div>
    </section>
  );
}
