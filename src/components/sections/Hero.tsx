import Image from "next/image";

export function Hero() {
  return (
    <section className="bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo Section */}
          <div className="mb-8">
            <div className="relative w-80 h-40 sm:w-96 sm:h-48 lg:w-112 lg:h-56 mx-auto">
              <Image
                src="/logo.png"
                alt="MKM Carrosserie"
                fill
                className="object-contain"
                priority
              />
            </div>

            <p className="text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Vakmanschap in carrosseriewerken. Met een ervaren team staan we
              klaar om uw voertuig met zorg en kwaliteit te herstellen.
            </p>
          </div>

          {/* Trust Indicators - Minimalist */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-1">25+</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider">
                Jaar
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-1">1000+</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider">
                Klanten
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-1">15+</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider">
                Experts
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
