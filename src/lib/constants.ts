export const SITE_CONFIG = {
  name: "MKM Carrosserie",
  description:
    "Met een ervaren team dat al jaren vakmanschap bewijst staan we klaar om uw carrosseriewerken met zorg en kwaliteit uit te voeren. Samen bouwen en herstellen we met vertrouwen!",
  url: "https://mkmcarrosserie.be",
  email: "info@mkmcarrosserie.be",
  phone: "+32 484 81 89 83",
  address: "Toekomstlaan 13, 3600 Genk",
  openingHours: {
    weekdays: "09:00 - 17:00",
    saturday: "Op afspraak",
    sunday: "Gesloten",
  },
} as const;

export const NAVIGATION = [
  { name: "Home", href: "/" },
  { name: "Diensten", href: "/services" },
  { name: "Contact", href: "/contact" },
] as const;

export const SERVICES = [
  {
    title: "Schadeherstel",
    description:
      "Professioneel herstel van alle soorten schade aan uw voertuig.",
    icon: "wrench",
  },
  {
    title: "Lakwerk",
    description: "Hoogwaardige lakwerkzaamheden voor een perfecte afwerking.",
    icon: "paintbrush",
  },
  {
    title: "Carrosseriewerken",
    description:
      "Vakmanschap in alle carrosseriewerken met aandacht voor detail.",
    icon: "car",
  },
  {
    title: "Onderhoud",
    description:
      "Preventief onderhoud om uw voertuig in topconditie te houden.",
    icon: "settings",
  },
] as const;
