"use client";

import { motion } from "framer-motion";
import { Scale } from "lucide-react";

export function ScaleOfJustice() {
  return (
    <motion.div
      initial={{ scale: 0.5, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
        duration: 1.5
      }}
      className="relative"
    >
      <Scale className="h-16 w-16 text-blue-600" />
      <motion.div
        animate={{
          rotate: [0, 5, -5, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-0 left-0 w-full h-full"
      >
        <div className="w-full h-full" />
      </motion.div>
    </motion.div>
  );
}