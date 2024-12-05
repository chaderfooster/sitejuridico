"use client";

import { motion } from "framer-motion";
import Image from 'next/image';

const workImages = [
  {
    url: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80",
    alt: "Advogada com tablet",
    className: "h-[504px]"
  },
  {
    url: "https://images.unsplash.com/photo-1575505586569-646b2ca898fc?auto=format&fit=crop&q=80",
    alt: "Vista do escritório",
    className: "h-[336px]"
  },
  {
    url: "https://images.unsplash.com/photo-1577415124269-fc1140a69e91?auto=format&fit=crop&q=80",
    alt: "Cidade vista da janela",
    className: "h-[336px]"
  },
  {
    url: "https://images.unsplash.com/photo-1568992687947-868a62a9f521?auto=format&fit=crop&q=80",
    alt: "Balança da justiça",
    className: "h-[504px]"
  },
  {
    url: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&q=80",
    alt: "Livros jurídicos",
    className: "h-[504px]"
  },
  {
    url: "https://images.unsplash.com/photo-1589391886645-d51941baf7fb?auto=format&fit=crop&q=80",
    alt: "Martelo do juiz",
    className: "h-[336px]"
  }
];

export function InfiniteScrollImages() {
  const images = workImages.map((image, index) => ({
    src: image.url,
    alt: image.alt,
  }));

  return (
    <div className="relative overflow-hidden w-full">
      <motion.div 
        className="flex"
        animate={{
          x: ['-100%', '0%'],
          transition: {
            x: {
              repeat: Infinity,
              repeatType: 'loop',
              duration: 20,
              ease: 'linear'
            }
          }
        }}
      >
        <div className="flex space-x-4 py-4">
          {images.map((image, index) => (
            <motion.div
              key={index}
              className="flex-shrink-0 w-64 h-48 overflow-hidden rounded-lg shadow-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={256}
                height={192}
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </div>
        <div className="flex space-x-4 py-4">
          {images.map((image, index) => (
            <motion.div
              key={index}
              className="flex-shrink-0 w-64 h-48 overflow-hidden rounded-lg shadow-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={256}
                height={192}
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
