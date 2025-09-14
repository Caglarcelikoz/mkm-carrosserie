import Link from "next/link";
import Image from "next/image";
import { SITE_CONFIG } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-8">
          {/* Company Info */}
          <div className="space-y-4 sm:col-span-2 lg:col-span-1">
            <div className="flex justify-center lg:justify-start">
              <div className="relative">
                <Image
                  src="/logo.png"
                  alt="MKM Carrosserie"
                  width={250}
                  height={100}
                  className="object-contain filter brightness-0 invert"
                />
              </div>
            </div>
            <p className="text-sm text-primary-foreground/80 leading-relaxed text-center lg:text-left max-w-md mx-auto lg:mx-0">
              Vakmanschap in carrosseriewerken. Al meer dan 25 jaar uw
              betrouwbare partner voor alle carrosseriewerken.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4 text-center sm:text-left">
            <h3 className="text-sm font-semibold uppercase tracking-wider">
              Navigatie
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Over Ons
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Diensten
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Galerij
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4 text-center sm:text-left">
            <h3 className="text-sm font-semibold uppercase tracking-wider">
              Onze Diensten
            </h3>
            <ul className="space-y-2">
              <li className="text-sm text-primary-foreground/80">
                Schadeherstel
              </li>
              <li className="text-sm text-primary-foreground/80">Lakwerk</li>
              <li className="text-sm text-primary-foreground/80">
                Carrosseriewerken
              </li>
              <li className="text-sm text-primary-foreground/80">Onderhoud</li>
              <li className="text-sm text-primary-foreground/80">
                Verzekeringswerk
              </li>
            </ul>
          </div>

          {/* Additional Info */}
          <div className="space-y-4 text-center sm:text-left">
            <h3 className="text-sm font-semibold uppercase tracking-wider">
              Informatie
            </h3>
            <ul className="space-y-2">
              <li className="text-sm text-primary-foreground/80">
                Gratis offerte
              </li>
              <li className="text-sm text-primary-foreground/80">
                Kwaliteitsgarantie
              </li>
              <li className="text-sm text-primary-foreground/80">
                Snelle service
              </li>
              <li className="text-sm text-primary-foreground/80">
                Ervaren team
              </li>
              <li className="text-sm text-primary-foreground/80">
                25+ jaar ervaring
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-primary-foreground/80">
              © 2024 MKM Carrosserie. Alle rechten voorbehouden.
            </p>
            <div className="flex space-x-6">
              <Link
                href="/privacy"
                className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                Algemene Voorwaarden
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
