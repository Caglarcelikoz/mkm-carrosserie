import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Jan de Vries",
    role: "Klant",
    content:
      "Uitstekende service! Mijn auto ziet er weer als nieuw uit. Het team van MKM Carrosserie heeft fantastisch werk geleverd.",
    rating: 5,
  },
  {
    name: "Maria van der Berg",
    role: "Klant",
    content:
      "Professioneel en betrouwbaar. Ze hebben mijn schade snel en perfect hersteld. Zeker een aanrader!",
    rating: 5,
  },
  {
    name: "Peter Jansen",
    role: "Klant",
    content:
      "Al jaren klant bij MKM Carrosserie. Altijd tevreden over de kwaliteit en service. Echt vakmanschap!",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold">
            Wat Onze Klanten Zeggen
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Lees de ervaringen van onze tevreden klanten en ontdek waarom zij
            vertrouwen op MKM Carrosserie.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-background">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">
                  "{testimonial.content}"
                </p>
                <div className="border-t pt-4">
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}


