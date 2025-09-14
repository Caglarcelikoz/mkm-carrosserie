import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "MKM Carrosserie - Carrosseriebedrijf België",
    short_name: "MKM Carrosserie",
    description:
      "MKM Carrosserie - Vakmanschap in carrosseriewerken sinds 2023. Professionele carrosseriediensten voor particulieren en bedrijven.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#000000",
    icons: [
      {
        src: "/logo.png",
        sizes: "any",
        type: "image/png",
      },
    ],
    categories: ["business", "automotive", "services"],
    lang: "nl-BE",
    orientation: "portrait-primary",
  };
}
