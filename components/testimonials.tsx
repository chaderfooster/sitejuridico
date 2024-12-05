"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const testimonials = [
  {
    name: "Mariana Lopes",
    text: "Profissionais competentes e atenciosos. Resolveram meu caso com agilidade.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80",
    initials: "ML",
  },
  {
    name: "Carlos Pereira",
    text: "A equipe foi incrível e superou minhas expectativas. O atendimento foi rápido e eficiente.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80",
    initials: "CP",
  },
  {
    name: "Fernanda Costa",
    text: "Estou muito satisfeita com o resultado final. Recomendo a todos que precisam de um serviço de qualidade.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80",
    initials: "FC",
  },
];

export function Testimonials() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 15000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative max-w-md mx-auto bg-transparent p-6 rounded-lg">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center bg-transparent p-4 rounded-lg"
        >
          <Avatar className="w-[60px] h-[60px] mb-4">
            <AvatarImage src={testimonials[current].image} />
            <AvatarFallback>{testimonials[current].initials}</AvatarFallback>
          </Avatar>
          <p className="text-lg mb-3 text-gray-200">
            {testimonials[current].text}
          </p>
          <p className="text-sm text-white">- {testimonials[current].name}</p>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <div className="absolute inset-y-0 left-0 flex items-center">
        <button onClick={() => setCurrent((current - 1 + testimonials.length) % testimonials.length)} className="p-2 text-white">
          <FaChevronLeft />
        </button>
      </div>
      <div className="absolute inset-y-0 right-0 flex items-center">
        <button onClick={() => setCurrent((current + 1) % testimonials.length)} className="p-2 text-white">
          <FaChevronRight />
        </button>
      </div>

      {/* Navigation Dots */}
      <div className="flex justify-center gap-1 mt-3">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-1.5 h-1.5 rounded-full transition-all ${
              index === current ? "bg-gray-200 w-3" : "bg-gray-500"
            }`}
          />
        ))}
      </div>
    </div>
  );
}