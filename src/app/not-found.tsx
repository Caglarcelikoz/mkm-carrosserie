"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        {/* 404 Icon */}
        <div className="mb-8">
          <div className="text-8xl font-bold text-primary/20 mb-4">404</div>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        {/* Error Message */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Pagina niet gevonden
          </h1>
          <p className="text-lg text-gray-600 mb-2">
            De pagina die u zoekt bestaat niet of is verplaatst.
          </p>
          <p className="text-gray-500">
            Ga terug naar de hoofdpagina om verder te navigeren.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="space-y-4">
          <Button asChild size="lg" className="w-full">
            <Link href="/" className="flex items-center justify-center gap-2">
              <Home className="h-5 w-5" />
              Naar Homepagina
            </Link>
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="w-full"
            onClick={() => window.history.back()}
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Ga Terug
          </Button>
        </div>

        {/* Additional Links */}
        <div className="mt-8 pt-6 border-t border-gray-200">
          <p className="text-sm text-gray-500 mb-4">Of ga naar:</p>
          <div className="flex flex-col sm:flex-row gap-2 justify-center">
            <Link
              href="/services"
              className="text-sm text-primary hover:text-primary/80 transition-colors"
            >
              Diensten
            </Link>
            <span className="hidden sm:inline text-gray-300">•</span>
            <Link
              href="/contact"
              className="text-sm text-primary hover:text-primary/80 transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
