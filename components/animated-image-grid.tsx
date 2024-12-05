"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Additional work environment images
const allWorkImages = [
  {
    url: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80",
    alt: "Advogada com tablet",
    className: "h-[300px]"
  },
  {
    url: "https://images.unsplash.com/photo-1575505586569-646b2ca898fc?auto=format&fit=crop&q=80",
    alt: "Vista do escritório",
    className: "h-[200px]"
  },
  {
    url: "https://images.unsplash.com/photo-1577415124269-fc1140a69e91?auto=format&fit=crop&q=80",
    alt: "Cidade vista da janela",
    className: "h-[200px]"
  },
  {
    url: "https://images.unsplash.com/photo-1568992687947-868a62a9f521?auto=format&fit=crop&q=80",
    alt: "Balança da justiça",
    className: "h-[300px]"
  },
  // Additional images
  {
    url: "https://images.unsplash.com/photo-1453906971074-ce568cccbc63?auto=format&fit=crop&q=80",
    alt: "Livros de direito",
    className: "h-[300px]"
  },
  {
    url: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80",
    alt: "Mesa de trabalho",
    className: "h-[200px]"
  },
  {
    url: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80",
    alt: "Reunião de advogados",
    className: "h-[200px]"
  },
  {
    url: "https://images.unsplash.com/photo-1479142506502-19b3a3b7ff33?auto=format&fit=crop&q=80",
    alt: "Prédio do escritório",
    className: "h-[300px]"
  }
];

export function AnimatedImageGrid() {
  const [currentImages, setCurrentImages] = useState(allWorkImages.slice(0, 4));
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentImages(prev => {
          const nextIndex = (allWorkImages.indexOf(prev[0]) + 4) % allWorkImages.length;
          return [...allWorkImages.slice(nextIndex, nextIndex + 4)];
        });
        setIsAnimating(false);
      }, 500);
    }, 5000); // Change images every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div 
      className="grid grid-cols-2 gap-4"
      animate={{ y: isAnimating ? [0, 40] : [40, 0] }}
      transition={{
        duration: 0.5,
        ease: "easeInOut"
      }}
    >
      <div className="space-y-4">
        <AnimatePresence mode="wait">
          {currentImages.slice(0, 2).map((image, index) => (
            <motion.div
              key={image.url}
              className="rounded-lg overflow-hidden shadow-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <img
                src={image.url}
                alt={image.alt}
                className={`w-full object-cover ${image.className}`}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      <div className="space-y-4 pt-8">
        <AnimatePresence mode="wait">
          {currentImages.slice(2).map((image, index) => (
            <motion.div
              key={image.url}
              className="rounded-lg overflow-hidden shadow-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <img
                src={image.url}
                alt={image.alt}
                className={`w-full object-cover ${image.className}`}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
