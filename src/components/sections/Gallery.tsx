"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ChevronLeft,
  ChevronRight,
  X,
  Car,
  Wrench,
  Paintbrush,
  Settings,
  Star,
  CheckCircle,
} from "lucide-react";

const galleryCategories = [
  {
    id: "all",
    name: "Alle Werkzaamheden",
    icon: Car,
  },
  {
    id: "schadeherstel",
    name: "Schadeherstel",
    icon: Wrench,
  },
  {
    id: "lakwerk",
    name: "Lakwerk",
    icon: Paintbrush,
  },
  {
    id: "carrosserie",
    name: "Carrosseriewerken",
    icon: Car,
  },
  {
    id: "onderhoud",
    name: "Onderhoud",
    icon: Settings,
  },
];

const galleryImages = [
  // Schadeherstel
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1549317336-206569e8475c?w=800&h=600&fit=crop",
    alt: "Auto schadeherstel voor",
    category: "schadeherstel",
    title: "Bumper reparatie",
    description: "Professionele bumper reparatie met originele onderdelen",
    beforeAfter: true,
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
    alt: "Deur reparatie werk",
    category: "schadeherstel",
    title: "Deur herstel",
    description: "Complete deur reparatie en lakwerk",
    beforeAfter: true,
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&h=600&fit=crop",
    alt: "Voorruit reparatie",
    category: "schadeherstel",
    title: "Voorruit vervanging",
    description: "Snelle voorruit vervanging met kwaliteitsgarantie",
    beforeAfter: false,
  },

  // Lakwerk
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1486754735734-325b5831c3ad?w=800&h=600&fit=crop",
    alt: "Auto lakwerk",
    category: "lakwerk",
    title: "Complete lakbeurt",
    description: "Hoogwaardige lakwerkzaamheden met moderne technieken",
    beforeAfter: true,
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1562141961-0b0b0b0b0b0b?w=800&h=600&fit=crop",
    alt: "Spot repair werk",
    category: "lakwerk",
    title: "Spot repair",
    description: "Precisie spot repair voor kleine beschadigingen",
    beforeAfter: true,
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop",
    alt: "Kleurmatching",
    category: "lakwerk",
    title: "Kleurmatching",
    description: "Perfecte kleurmatching met spectrometer",
    beforeAfter: false,
  },

  // Carrosseriewerken
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800&h=600&fit=crop",
    alt: "Carrosserie reparatie",
    category: "carrosserie",
    title: "Metaalbewerking",
    description: "Professionele metaalbewerking en lassen",
    beforeAfter: true,
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&h=600&fit=crop",
    alt: "Frame rechtzetten",
    category: "carrosserie",
    title: "Frame rechtzetten",
    description: "Precisie frame rechtzetten met moderne apparatuur",
    beforeAfter: true,
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=800&h=600&fit=crop",
    alt: "Constructie herstel",
    category: "carrosserie",
    title: "Constructie herstel",
    description: "Uitgebreide constructie herstelwerkzaamheden",
    beforeAfter: false,
  },

  // Onderhoud
  {
    id: 10,
    src: "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800&h=600&fit=crop",
    alt: "Motor onderhoud",
    category: "onderhoud",
    title: "Motor service",
    description: "Uitgebreide motor service en onderhoud",
    beforeAfter: false,
  },
  {
    id: 11,
    src: "https://images.unsplash.com/photo-1632823471565-1ecdf3d9a4e9?w=800&h=600&fit=crop",
    alt: "Remmen controle",
    category: "onderhoud",
    title: "Remmen controle",
    description: "Professionele remmen inspectie en service",
    beforeAfter: false,
  },
  {
    id: 12,
    src: "https://images.unsplash.com/photo-1642790105077-8a6775a3e8b9?w=800&h=600&fit=crop",
    alt: "Onderstel werk",
    category: "onderhoud",
    title: "Onderstel inspectie",
    description: "Complete onderstel inspectie en onderhoud",
    beforeAfter: false,
  },

  // Extra images voor meer variatie
  {
    id: 13,
    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
    alt: "Auto reparatie werkplaats",
    category: "schadeherstel",
    title: "Werkplaats",
    description: "Moderne werkplaats met professionele apparatuur",
    beforeAfter: false,
  },
  {
    id: 14,
    src: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&h=600&fit=crop",
    alt: "Auto detailing",
    category: "lakwerk",
    title: "Detailing",
    description: "Professionele auto detailing en polijsten",
    beforeAfter: false,
  },
  {
    id: 15,
    src: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&h=600&fit=crop",
    alt: "Kwaliteitscontrole",
    category: "carrosserie",
    title: "Kwaliteitscontrole",
    description: "Uitgebreide kwaliteitscontrole voor elke reparatie",
    beforeAfter: false,
  },
];

export function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState<
    (typeof galleryImages)[0] | null
  >(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const filteredImages =
    selectedCategory === "all"
      ? galleryImages
      : galleryImages.filter((img) => img.category === selectedCategory);

  const openLightbox = (image: (typeof galleryImages)[0], index: number) => {
    setSelectedImage(image);
    setCurrentImageIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction: "prev" | "next") => {
    const newIndex =
      direction === "prev"
        ? (currentImageIndex - 1 + filteredImages.length) %
          filteredImages.length
        : (currentImageIndex + 1) % filteredImages.length;

    setCurrentImageIndex(newIndex);
    setSelectedImage(filteredImages[newIndex]);
  };

  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="py-12 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-5xl lg:text-6xl font-bold">Onze Galerij</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Bekijk ons werk! Voor en na foto's van carrosseriewerken,
              schadeherstel, lakwerk en meer. Kwaliteitswerk met 25+ jaar
              ervaring.
            </p>
            <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span>Alle werkzaamheden uitgevoerd door ervaren vakmensen</span>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-background border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {galleryCategories.map((category) => {
              const Icon = category.icon;
              return (
                <Button
                  key={category.id}
                  variant={
                    selectedCategory === category.id ? "default" : "outline"
                  }
                  onClick={() => setSelectedCategory(category.id)}
                  className="flex items-center space-x-2"
                >
                  <Icon className="h-4 w-4" />
                  <span>{category.name}</span>
                </Button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12 pb-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredImages.map((image, index) => (
              <Card
                key={image.id}
                className="group cursor-pointer hover:shadow-lg transition-all duration-300 border-2"
                onClick={() => openLightbox(image, index)}
              >
                <div className="relative h-64 overflow-hidden rounded-t-lg">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {image.beforeAfter && (
                    <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
                      <CheckCircle className="h-4 w-4" />
                      <span>Voor/Naa</span>
                    </div>
                  )}
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{image.title}</h3>
                  <p className="text-muted-foreground">{image.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <div className="text-center py-20">
              <p className="text-xl text-muted-foreground">
                Geen afbeeldingen gevonden voor deze categorie.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            {/* Close Button */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white"
              onClick={closeLightbox}
            >
              <X className="h-6 w-6" />
            </Button>

            {/* Navigation Buttons */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white"
              onClick={() => navigateImage("prev")}
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white"
              onClick={() => navigateImage("next")}
            >
              <ChevronRight className="h-6 w-6" />
            </Button>

            {/* Image */}
            <div className="relative">
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                width={800}
                height={600}
                className="rounded-lg max-h-[80vh] object-contain"
              />

              {/* Image Info */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {selectedImage.title}
                </h3>
                <p className="text-white/90">{selectedImage.description}</p>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-white/70">
                    {currentImageIndex + 1} van {filteredImages.length}
                  </span>
                  {selectedImage.beforeAfter && (
                    <div className="flex items-center space-x-1 text-green-400">
                      <CheckCircle className="h-4 w-4" />
                      <span className="text-sm">Voor/Naa werk</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
