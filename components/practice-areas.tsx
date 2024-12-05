import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Scale, Heart, ShieldCheck } from "lucide-react";

interface ModalContent {
  title: string;
  content: string[];
}

export function PracticeAreas() {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState<ModalContent | null>(null);

  const areas = [
    {
      title: "Direito Previdenciário",
      icon: ShieldCheck,
      description:
        "Aposentadorias, pensões, auxílios e benefícios do INSS. Análise especializada do seu caso.",
    },
    {
      title: "Direito Civil",
      icon: Scale,
      description:
        "Contratos, responsabilidade civil, direito de família e sucessões. Soluções jurídicas personalizadas.",
    },
    {
      title: "Direito do Consumidor",
      icon: Heart,
      description:
        "Defesa dos seus direitos nas relações de consumo. Resolução de conflitos com fornecedores.",
    },
  ];

  const handleCardClick = (title: string) => {
    switch (title) {
      case "Direito Previdenciário":
        setModalContent({
          title: "Direito Previdenciário",
          content: [
            "Consulta: Análise especializada do seu caso de aposentadoria ou benefício do INSS.",
            "Documentação: Preparação de todos os documentos necessários para o processo.",
            "Requerimento: Submissão do pedido e acompanhamento do processo junto ao INSS.",
            "Resultado: Garantia de que você receberá todos os benefícios a que tem direito."
          ]
        });
        break;
      case "Direito Civil":
        setModalContent({
          title: "Direito Civil",
          content: [
            "Contratos: Elaboração e revisão de contratos para garantir seus direitos.",
            "Responsabilidade Civil: Ações de indenização por danos materiais e morais.",
            "Família e Sucessões: Planejamento sucessório e resolução de conflitos familiares.",
            "Direitos Reais: Assessoria em questões de propriedade e posse."
          ]
        });
        break;
      case "Direito do Consumidor":
        setModalContent({
          title: "Direito do Consumidor",
          content: [
            "Defesa: Proteção contra práticas abusivas e ilegais de fornecedores.",
            "Ações Judiciais: Propositura de ações para garantir seus direitos como consumidor.",
            "Conciliação: Mediação de conflitos para soluções rápidas e eficazes.",
            "Consultoria: Orientação sobre direitos e deveres nas relações de consumo."
          ]
        });
        break;
      default:
        setModalContent(null);
    }
    setShowModal(true);
  };

  return (
    <div className="grid md:grid-cols-3 gap-8">
      {areas.map((area) => (
        <Card 
          key={area.title} 
          className="text-center transform transition-transform duration-300 hover:scale-105 hover:shadow-lg"
          onClick={() => handleCardClick(area.title)}
        >
          <CardHeader>
            <area.icon className="h-12 w-12 mx-auto text-blue-600 mb-4" />
            <CardTitle>{area.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">{area.description}</p>
          </CardContent>
        </Card>
      ))}

      {showModal && modalContent && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center backdrop-blur-sm"
          onClick={() => setShowModal(false)}
        >
          <motion.div 
            initial={{ opacity: 0, y: -50 }} 
            animate={{ opacity: 1, y: 0 }} 
            className="bg-white p-6 rounded-lg max-w-3xl w-full"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
          >
            <h2 className="text-2xl font-bold mb-4">{modalContent.title}</h2>
            <ul className="list-decimal pl-5 space-y-2">
              {modalContent.content.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <button 
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition"
              onClick={() => setShowModal(false)}
            >
              Fechar
            </button>
          </motion.div>
        </div>
      )}
    </div>
  );
}