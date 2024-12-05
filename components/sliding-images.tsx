"use client";

import Image from "next/image";

const legalImages = [
  {
    src: "/images/legal-services/photo-1589829545856-d10d557cf95f.jpg",
    alt: "Escritório de advocacia",
  },
  {
    src: "/images/legal-services/legal-background.jpg",
    alt: "Livros jurídicos",
  },
  {
    src: "/images/legal-services/gettyimages-1292362577-2048x2048.jpg",
    alt: "Reunião de negócios",
  }
];

export function SlidingImages() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
      {legalImages.map((image, index) => (
        <div 
          key={image.src} 
          className="relative w-full aspect-video"
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            priority={index < 2}
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover"
            quality={40}
          />
        </div>
      ))}
    </div>
  );
}