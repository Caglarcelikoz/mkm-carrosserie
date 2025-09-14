import Image from "next/image";

export function Hero() {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/mkm-solutions-building.jpeg"
          alt="MKM Carrosserie Building"
          fill
          className="object-cover"
          priority
        />
        {/* Darker overlay for better text readability */}
        <div className="absolute inset-0 bg-black/70"></div>
        {/* Subtle gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center bg-white/35 backdrop-blur-sm rounded-2xl p-4 sm:p-6 md:p-8 lg:p-12 border border-white/40">
          {/* Logo Section */}
          <div className="mb-8">
            <div className="relative w-64 h-32 xs:w-72 xs:h-36 sm:w-80 sm:h-40 md:w-96 md:h-48 lg:w-112 lg:h-56 mx-auto mb-4">
              <Image
                src="/logo.png"
                alt="MKM Carrosserie"
                fill
                className="object-contain drop-shadow-lg"
                priority
              />
            </div>

            <p className="text-lg sm:text-xl lg:text-2xl text-white max-w-3xl mx-auto leading-relaxed drop-shadow-md px-2">
              Vakmanschap in carrosseriewerken. Met een ervaren team staan we
              klaar om uw voertuig met zorg en kwaliteit te herstellen. Wij
              bieden professionele carrosseriediensten met de hoogste
              kwaliteitsstandaarden.
            </p>
          </div>

          {/* Key Features - Modern Design */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 lg:gap-8 max-w-5xl mx-auto mb-8">
            <div className="flex items-center gap-3 bg-white/15 backdrop-blur-sm rounded-full px-4 py-3 border border-white/25 w-full sm:w-auto sm:min-w-[200px] justify-center">
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="text-white font-medium">Ervaren Team</span>
            </div>

            <div className="flex items-center gap-3 bg-white/15 backdrop-blur-sm rounded-full px-4 py-3 border border-white/25 w-full sm:w-auto sm:min-w-[200px] justify-center">
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className="text-white font-medium">Kwaliteitsgarantie</span>
            </div>

            <div className="flex items-center gap-3 bg-white/15 backdrop-blur-sm rounded-full px-4 py-3 border border-white/25 w-full sm:w-auto sm:min-w-[200px] justify-center">
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
              <span className="text-white font-medium">Snelle Service</span>
            </div>
          </div>

          {/* Stats Section */}
          <div className="mt-20 max-w-6xl mx-auto">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-12 sm:gap-16">
              {/* 25+ Jaar Ervaring */}
              <div className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-white mb-2 leading-none">
                  25+
                </div>
                <div className="text-white/90 text-base font-medium mb-1">
                  Jaar Ervaring
                </div>
                <div className="w-12 h-0.5 bg-white/60 mx-auto"></div>
              </div>

              {/* Separator */}
              <div className="hidden sm:block w-px h-20 bg-white/30"></div>

              {/* 100% Kwaliteitsgarantie */}
              <div className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-white mb-2 leading-none">
                  100%
                </div>
                <div className="text-white/90 text-base font-medium mb-1">
                  Kwaliteitsgarantie
                </div>
                <div className="w-12 h-0.5 bg-white/60 mx-auto"></div>
              </div>

              {/* Separator */}
              <div className="hidden sm:block w-px h-20 bg-white/30"></div>

              {/* 24/7 Service */}
              <div className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-white mb-2 leading-none">
                  24/7
                </div>
                <div className="text-white/90 text-base font-medium mb-1">
                  Service Beschikbaar
                </div>
                <div className="w-12 h-0.5 bg-white/60 mx-auto"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
