import { Metadata } from "next";
import { Gallery } from "@/components/sections/Gallery";

export const metadata: Metadata = {
  title: "Galerij - MKM Carrosserie",
  description: "Bekijk ons werk! Voor en na foto's van carrosseriewerken, schadeherstel, lakwerk en meer. Kwaliteitswerk met 25+ jaar ervaring.",
};

export default function GalleryPage() {
  return <Gallery />;
}


