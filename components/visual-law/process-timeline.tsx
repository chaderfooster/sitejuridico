"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card, CardContent } from "@/components/ui/card";
import { Scale, FileText, UserCheck, Award } from "lucide-react";

export function ProcessTimeline() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const steps = [
    {
      icon: FileText,
      title: "Análise Inicial",
      description: "Avaliação detalhada do seu caso",
    },
    {
      icon: Scale,
      title: "Processo Legal",
      description: "Desenvolvimento da estratégia jurídica",
    },
    {
      icon: UserCheck,
      title: "Acompanhamento",
      description: "Monitoramento constante do processo",
    },
    {
      icon: Award,
      title: "Resolução",
      description: "Conclusão bem-sucedida do caso",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="grid grid-cols-1 md:grid-cols-4 gap-4"
    >
      {steps.map((step, index) => (
        <motion.div key={step.title} variants={itemVariants}>
          <Card className="relative h-full">
            {index < steps.length - 1 && (
              <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-blue-600 z-10" />
            )}
            <CardContent className="pt-6 text-center">
              <step.icon className="h-10 w-10 mx-auto text-blue-600 mb-4" />
              <h3 className="font-semibold mb-2">{step.title}</h3>
              <p className="text-sm text-gray-600">{step.description}</p>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </motion.div>
  );
}