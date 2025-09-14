import { Metadata } from "next";
import { ServicesDetail } from "@/components/sections/ServicesDetail";

export const metadata: Metadata = {
  title: "Onze Diensten - MKM Carrosserie",
  description:
    "Ontdek onze uitgebreide carrosseriediensten: schadeherstel, lakwerk, carrosseriewerken en onderhoud. Professionele service met 25+ jaar ervaring.",
};

export default function ServicesPage() {
  return <ServicesDetail />;
}


