"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const logoVariants = {
    initial: { 
      rotateX: 0,
      scale: 1
    },
    hover: { 
      rotateX: [0, 20, -20, 0],
      scale: [1, 1.05, 0.95, 1],
      transition: {
        duration: 0.6,
        ease: "easeInOut"
      }
    }
  };

  const scrollToSection = useCallback((sectionId?: string) => {
    if (sectionId) {
      const section = document.querySelector(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
        setIsMenuOpen(false);
      }
    }
  }, []);

  const menuItems = [
    { 
      label: "Home", 
      href: "#top",
      type: "link"
    },
    { 
      label: "Áreas de Atuação", 
      sectionId: "#areas-de-atuacao",
      type: "section"
    },
    { 
      label: "Sobre", 
      sectionId: "#principais-duvidas",
      type: "section"
    },
    { 
      label: "Contato", 
      href: "https://wa.me/5511999999999",
      type: "link"
    }
  ];

  return (
    <motion.nav 
      className="fixed top-0 left-0 w-full bg-white shadow-sm z-50"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <motion.div 
          className="flex items-center"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <Link href="/" className="flex items-center">
            <motion.span 
              className="text-xl font-serif font-bold text-gray-900"
              variants={logoVariants}
              initial="initial"
              whileHover="hover"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              Soares Lacerda Advogados
            </motion.span>
          </Link>
        </motion.div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          {menuItems.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              {item.type === 'link' ? (
                <Link 
                  href={item.href || '#'}
                  className="text-gray-700 hover:text-[#C45C24] transition-colors font-medium"
                >
                  {item.label}
                </Link>
              ) : (
                <button 
                  onClick={() => scrollToSection(item.sectionId)}
                  className="text-gray-700 hover:text-[#C45C24] transition-colors font-medium"
                >
                  {item.label}
                </button>
              )}
            </motion.div>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <motion.button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileTap={{ scale: 0.9 }}
            className="text-gray-700"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              className="absolute top-full left-0 w-full bg-white shadow-lg md:hidden"
            >
              <div className="flex flex-col items-center py-4 space-y-4">
                {menuItems.map((item, index) => (
                  <motion.div
                    key={index}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="w-full text-center"
                  >
                    {item.type === 'link' ? (
                      <Link 
                        href={item.href || '#'}
                        className="block text-gray-700 hover:text-[#C45C24] transition-colors font-medium py-2"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <button 
                        onClick={() => scrollToSection(item.sectionId)}
                        className="w-full text-gray-700 hover:text-[#C45C24] transition-colors font-medium py-2"
                      >
                        {item.label}
                      </button>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
