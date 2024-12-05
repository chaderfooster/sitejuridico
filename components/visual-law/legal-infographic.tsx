"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Users, Clock, CheckCircle } from "lucide-react";

export function LegalInfographic() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    {
      icon: Shield,
      value: "98%",
      label: "Taxa de Sucesso",
    },
    {
      icon: Users,
      value: "1000+",
      label: "Clientes Atendidos",
    },
    {
      icon: Clock,
      value: "15+",
      label: "Anos de Experiência",
    },
    {
      icon: CheckCircle,
      value: "5000+",
      label: "Casos Resolvidos",
    },
  ];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6 }}
      className="grid grid-cols-2 md:grid-cols-4 gap-6"
    >
      {stats.map((stat) => (
        <Card key={stat.label} className="text-center">
          <CardContent className="pt-6">
            <motion.div
              initial={{ scale: 0 }}
              animate={inView ? { scale: 1 } : { scale: 0 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
            >
              <stat.icon className="h-10 w-10 mx-auto text-blue-600 mb-4" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold text-blue-600 mb-1">
                {stat.value}
              </h3>
              <p className="text-sm text-gray-600">{stat.label}</p>
            </motion.div>
          </CardContent>
        </Card>
      ))}
    </motion.div>
  );
}