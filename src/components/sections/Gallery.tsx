// TODO: Gallery component - Later toevoegen
// "use client";

// import { useState } from "react";
// import Image from "next/image";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";
// import {
//   ChevronLeft,
//   ChevronRight,
//   X,
//   Car,
//   Wrench,
//   Paintbrush,
//   Settings,
//   Star,
//   CheckCircle,
// } from "lucide-react";

// const galleryCategories = [
//   {
//     id: "all",
//     name: "Alle Werkzaamheden",
//     icon: Car,
//   },
//   {
//     id: "schadeherstel",
//     name: "Schadeherstel",
//     icon: Wrench,
//   },
//   {
//     id: "lakwerk",
//     name: "Lakwerk",
//     icon: Paintbrush,
//   },
//   {
//     id: "carrosserie",
//     name: "Carrosseriewerken",
//     icon: Car,
//   },
//   {
//     id: "onderhoud",
//     name: "Onderhoud",
//     icon: Settings,
//   },
// ];

// const galleryImages = [
//   // Schadeherstel
//   {
//     id: 1,
//     src: "/images/gallery/schadeherstel-1.jpg",
//     alt: "Schadeherstel voor behandeling",
//     category: "schadeherstel",
//     title: "Voor behandeling",
//     description: "Schade aan voorbumper en koplampen",
//   },
//   {
//     id: 2,
//     src: "/images/gallery/schadeherstel-2.jpg",
//     alt: "Schadeherstel na behandeling",
//     category: "schadeherstel",
//     title: "Na behandeling",
//     description: "Perfect herstel van alle schade",
//   },
//   {
//     id: 3,
//     src: "/images/gallery/schadeherstel-3.jpg",
//     alt: "Bumper reparatie",
//     category: "schadeherstel",
//     title: "Bumper reparatie",
//     description: "Professionele bumper reparatie",
//   },
//   // Lakwerk
//   {
//     id: 4,
//     src: "/images/gallery/lakwerk-1.jpg",
//     alt: "Lakwerk voor behandeling",
//     category: "lakwerk",
//     title: "Voor lakwerk",
//     description: "Voorbereiding voor lakwerk",
//   },
//   {
//     id: 5,
//     src: "/images/gallery/lakwerk-2.jpg",
//     alt: "Lakwerk na behandeling",
//     category: "lakwerk",
//     title: "Na lakwerk",
//     description: "Perfecte lakwerk afwerking",
//   },
//   {
//     id: 6,
//     src: "/images/gallery/lakwerk-3.jpg",
//     alt: "Spuitcabine werk",
//     category: "lakwerk",
//     title: "Spuitcabine",
//     description: "Professionele spuitcabine werk",
//   },
//   // Carrosseriewerken
//   {
//     id: 7,
//     src: "/images/gallery/carrosserie-1.jpg",
//     alt: "Carrosserie reparatie",
//     category: "carrosserie",
//     title: "Carrosserie reparatie",
//     description: "Vakmanschap in carrosseriewerken",
//   },
//   {
//     id: 8,
//     src: "/images/gallery/carrosserie-2.jpg",
//     alt: "Deur reparatie",
//     category: "carrosserie",
//     title: "Deur reparatie",
//     description: "Precisie werk aan deuren",
//   },
//   {
//     id: 9,
//     src: "/images/gallery/carrosserie-3.jpg",
//     alt: "Koffer reparatie",
//     category: "carrosserie",
//     title: "Koffer reparatie",
//     description: "Expertise in koffer reparatie",
//   },
//   // Onderhoud
//   {
//     id: 10,
//     src: "/images/gallery/onderhoud-1.jpg",
//     alt: "Onderhoud werkplaats",
//     category: "onderhoud",
//     title: "Onderhoud werkplaats",
//     description: "Moderne onderhoud faciliteiten",
//   },
//   {
//     id: 11,
//     src: "/images/gallery/onderhoud-2.jpg",
//     alt: "Preventief onderhoud",
//     category: "onderhoud",
//     title: "Preventief onderhoud",
//     description: "Regelmatig onderhoud voor optimale prestaties",
//   },
//   {
//     id: 12,
//     src: "/images/gallery/onderhoud-3.jpg",
//     alt: "Onderhoud controle",
//     category: "onderhoud",
//     title: "Onderhoud controle",
//     description: "Grondige controle en onderhoud",
//   },
// ];

// export function Gallery() {
//   const [selectedCategory, setSelectedCategory] = useState("all");
//   const [selectedImage, setSelectedImage] = useState<number | null>(null);
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   const filteredImages =
//     selectedCategory === "all"
//       ? galleryImages
//       : galleryImages.filter((image) => image.category === selectedCategory);

//   const openLightbox = (index: number) => {
//     setSelectedImage(index);
//     setCurrentImageIndex(index);
//   };

//   const closeLightbox = () => {
//     setSelectedImage(null);
//   };

//   const nextImage = () => {
//     const nextIndex = (currentImageIndex + 1) % filteredImages.length;
//     setCurrentImageIndex(nextIndex);
//   };

//   const prevImage = () => {
//     const prevIndex =
//       currentImageIndex === 0
//         ? filteredImages.length - 1
//         : currentImageIndex - 1;
//     setCurrentImageIndex(prevIndex);
//   };

//   const handleKeyDown = (e: React.KeyboardEvent) => {
//     if (e.key === "Escape") closeLightbox();
//     if (e.key === "ArrowRight") nextImage();
//     if (e.key === "ArrowLeft") prevImage();
//   };

//   return (
//     <section className="py-16 bg-gray-50">
//       <div className="container mx-auto px-4">
//         {/* Header */}
//         <div className="text-center mb-12">
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
//             Onze Werkzaamheden
//           </h2>
//           <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//             Bekijk onze uitgevoerde projecten en laat u inspireren door ons
//             vakmanschap in carrosseriewerken.
//           </p>
//         </div>

//         {/* Category Filter */}
//         <div className="flex flex-wrap justify-center gap-4 mb-12">
//           {galleryCategories.map((category) => {
//             const Icon = category.icon;
//             return (
//               <Button
//                 key={category.id}
//                 variant={selectedCategory === category.id ? "default" : "outline"}
//                 onClick={() => setSelectedCategory(category.id)}
//                 className="flex items-center gap-2 px-6 py-3"
//               >
//                 <Icon className="h-4 w-4" />
//                 {category.name}
//               </Button>
//             );
//           })}
//         </div>

//         {/* Gallery Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {filteredImages.map((image, index) => (
//             <Card
//               key={image.id}
//               className="group cursor-pointer overflow-hidden hover:shadow-lg transition-all duration-300"
//               onClick={() => openLightbox(index)}
//             >
//               <div className="relative aspect-video overflow-hidden">
//                 <Image
//                   src={image.src}
//                   alt={image.alt}
//                   fill
//                   className="object-cover group-hover:scale-105 transition-transform duration-300"
//                 />
//                 <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
//                   <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                     <div className="bg-white/90 backdrop-blur-sm rounded-full p-3">
//                       <Star className="h-6 w-6 text-primary" />
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <CardContent className="p-4">
//                 <h3 className="font-semibold text-gray-900 mb-2">
//                   {image.title}
//                 </h3>
//                 <p className="text-sm text-gray-600">{image.description}</p>
//               </CardContent>
//             </Card>
//           ))}
//         </div>

//         {/* Lightbox */}
//         {selectedImage !== null && (
//           <div
//             className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
//             onClick={closeLightbox}
//             onKeyDown={handleKeyDown}
//             tabIndex={0}
//           >
//             <div className="relative max-w-4xl max-h-full">
//               <Button
//                 variant="ghost"
//                 size="icon"
//                 className="absolute top-4 right-4 z-10 bg-white/20 hover:bg-white/30 text-white"
//                 onClick={closeLightbox}
//               >
//                 <X className="h-6 w-6" />
//               </Button>

//               <Button
//                 variant="ghost"
//                 size="icon"
//                 className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 text-white"
//                 onClick={prevImage}
//               >
//                 <ChevronLeft className="h-6 w-6" />
//               </Button>

//               <Button
//                 variant="ghost"
//                 size="icon"
//                 className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 text-white"
//                 onClick={nextImage}
//               >
//                 <ChevronRight className="h-6 w-6" />
//               </Button>

//               <div className="relative aspect-video max-h-[80vh]">
//                 <Image
//                   src={filteredImages[currentImageIndex].src}
//                   alt={filteredImages[currentImageIndex].alt}
//                   fill
//                   className="object-contain"
//                 />
//               </div>

//               <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-4">
//                 <h3 className="font-semibold text-gray-900 mb-2">
//                   {filteredImages[currentImageIndex].title}
//                 </h3>
//                 <p className="text-sm text-gray-600">
//                   {filteredImages[currentImageIndex].description}
//                 </p>
//               </div>
//             </div>
//           </div>
//         )}

//         {/* Trust Indicators */}
//         <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
//           <div className="text-center">
//             <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
//               <CheckCircle className="h-8 w-8 text-primary" />
//             </div>
//             <h3 className="text-xl font-semibold text-gray-900 mb-2">
//               Kwaliteitsgarantie
//             </h3>
//             <p className="text-gray-600">
//               Al onze werkzaamheden worden uitgevoerd met de hoogste
//               kwaliteitsstandaarden.
//             </p>
//           </div>

//           <div className="text-center">
//             <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
//               <Star className="h-8 w-8 text-primary" />
//             </div>
//             <h3 className="text-xl font-semibold text-gray-900 mb-2">
//               Ervaren Team
//             </h3>
//             <p className="text-gray-600">
//               Ons team heeft jarenlange ervaring in alle aspecten van
//               carrosseriewerken.
//             </p>
//           </div>

//           <div className="text-center">
//             <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
//               <Settings className="h-8 w-8 text-primary" />
//             </div>
//             <h3 className="text-xl font-semibold text-gray-900 mb-2">
//               Moderne Apparatuur
//             </h3>
//             <p className="text-gray-600">
//               We gebruiken de nieuwste technologie en apparatuur voor optimale
//               resultaten.
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
