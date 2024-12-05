"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, MessageCircle, Phone, Mail, Clock } from "lucide-react";
import { WhatsappButton } from "@/components/whatsapp-button";
import { PracticeAreas } from "@/components/practice-areas";
import { Testimonials } from "@/components/testimonials";
import { ContactForm } from "@/components/contact-form";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer"; 
import { ProcessTimeline } from "@/components/visual-law/process-timeline";
import { LegalInfographic } from "@/components/visual-law/legal-infographic";
import { InfiniteScrollImages } from "@/components/infinite-scroll-images";
import { Navbar } from "@/components/navbar";
import { FaClock, FaComments, FaPhone, FaBriefcase, FaLaptop, FaCreditCard, FaBalanceScale, FaBuilding, FaShieldAlt, FaUserShield, FaCheckCircle, FaTrophy, FaChartLine, FaUserFriends } from 'react-icons/fa';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

function LegalServicesSection() {
  const openWhatsApp = () => {
    const phoneNumber = '5565999999999'; // Substitua pelo número real da empresa
    const message = 'Olá, gostaria de consultar sobre serviços jurídicos.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <motion.section 
      className="bg-white py-4 px-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center">
        <motion.div 
          className="relative overflow-hidden rounded-xl shadow-lg"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <Image 
            src="/images/legal-services/gettyimages-1292362577-2048x2048.jpg" 
            alt="Serviços Jurídicos em Cuiabá" 
            width={1024}
            height={1024}
            className="w-full h-full object-cover transition-transform duration-300"
          />
        </motion.div>
        
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Serviços Jurídicos Estratégicos</h2>
          <p className="text-gray-600 mb-4">Soluções jurídicas precisas e personalizadas para cada desafio legal.</p>
          
          <div className="space-y-3">
            {[
              { title: "Consultoria Estratégica", description: "Análise jurídica detalhada e orientação personalizada." },
              { title: "Representação Legal", description: "Defesa robusta e eficiente em todas as instâncias." },
              { title: "Resolução de Conflitos", description: "Mediação e negociação com foco em resultados." }
            ].map((service, index) => (
              <motion.div 
                key={index}
                className="border-l-4 border-[#C45C24] pl-4 py-1 transition-colors hover:bg-gray-50"
                whileHover={{ x: 10 }}
              >
                <h3 className="text-lg font-semibold text-gray-900">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </motion.div>
            ))}
          </div>
          
          <motion.button 
            onClick={openWhatsApp}
            className="bg-[#C45C24] text-white px-6 py-2 rounded-full hover:bg-[#A34B1D] transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Consulte Nossos Especialistas
          </motion.button>
        </div>
      </div>
    </motion.section>
  );
}

function ProcessSection() {
  const processSteps = [
    { 
      title: "Consulta Inicial", 
      description: "Análise detalhada do seu caso e necessidades específicas.",
      icon: <FaComments className="text-[#C45C24] text-3xl" />
    },
    { 
      title: "Estratégia Jurídica", 
      description: "Desenvolvimento de uma abordagem personalizada e eficiente.",
      icon: <FaBriefcase className="text-[#C45C24] text-3xl" />
    },
    { 
      title: "Execução", 
      description: "Implementação precisa da estratégia jurídica definida.",
      icon: <FaLaptop className="text-[#C45C24] text-3xl" />
    },
    { 
      title: "Acompanhamento", 
      description: "Suporte contínuo e atualização sobre o andamento do caso.",
      icon: <FaClock className="text-[#C45C24] text-3xl" />
    }
  ];

  return (
    <motion.section 
      className="bg-gray-50 py-16 px-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Como Funciona Nosso Processo
        </h2>
        
        <div className="grid md:grid-cols-4 gap-6">
          {processSteps.map((step, index) => (
            <motion.div 
              key={index}
              className="bg-white p-6 rounded-xl shadow-md text-center transition-all"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 20px rgba(0,0,0,0.1)"
              }}
            >
              <div className="mb-4 flex justify-center">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {step.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

function PracticeAreasSection() {
  const practiceAreas = [
    { 
      title: "Direito Civil", 
      description: "Resolução de conflitos e proteção de interesses pessoais e patrimoniais.",
      icon: <FaBalanceScale className="text-[#C45C24] text-3xl" />
    },
    { 
      title: "Direito de Família", 
      description: "Assessoria jurídica em questões familiares e relacionamentos.",
      icon: <FaUserFriends className="text-[#C45C24] text-3xl" />
    },
    { 
      title: "Direito do Consumidor", 
      description: "Defesa dos direitos e interesses dos consumidores.",
      icon: <FaShieldAlt className="text-[#C45C24] text-3xl" />
    },
    { 
      title: "Direito Previdenciário", 
      description: "Consultoria e representação em questões previdenciárias.",
      icon: <FaUserShield className="text-[#C45C24] text-3xl" />
    }
  ];

  return (
    <motion.section 
      id="areas-de-atuacao"
      className="bg-white py-16 px-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Nossas Áreas de Atuação
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {practiceAreas.map((area, index) => (
            <motion.div 
              key={index}
              className="bg-gray-50 p-6 rounded-xl text-center transition-all group"
              whileHover={{ 
                scale: 1.05,
                backgroundColor: "#f9f9f9"
              }}
            >
              <div className="mb-4 flex justify-center">
                {area.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-[#C45C24] transition-colors">
                {area.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {area.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

function ExperienceNumbersSection() {
  const experienceStats = [
    { 
      number: "+200", 
      label: "Casos Estudados",
      icon: <FaCheckCircle className="text-[#C45C24] text-4xl" />
    },
    { 
      number: "+10", 
      label: "Anos de Experiência",
      icon: <FaTrophy className="text-[#C45C24] text-4xl" />
    },
    { 
      number: "+95%", 
      label: "Taxa de Sucesso",
      icon: <FaChartLine className="text-[#C45C24] text-4xl" />
    },
    { 
      number: "+140", 
      label: "Clientes Atendidos",
      icon: <FaUserFriends className="text-[#C45C24] text-4xl" />
    }
  ];

  return (
    <motion.section 
      className="bg-gray-100 py-16 px-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Nossa Experiência em Números
        </h2>
        
        <div className="grid md:grid-cols-4 gap-8">
          {experienceStats.map((stat, index) => (
            <motion.div 
              key={index}
              className="bg-white p-6 rounded-xl shadow-md text-center transition-all group"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 20px rgba(0,0,0,0.1)"
              }}
            >
              <div className="mb-4 flex justify-center">
                {stat.icon}
              </div>
              <h3 className="text-4xl font-bold text-[#C45C24] mb-2 group-hover:text-opacity-80 transition-colors">
                {stat.number}
              </h3>
              <p className="text-gray-600 text-sm">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

function FrequentQuestionsSection() {
  const frequentQuestions = [
    {
      icon: <FaComments className="text-[#C45C24] text-2xl" />, 
      question: "Quais são as áreas de atuação do escritório?",
      answer: "Atuamos em direito civil, família, consumidor e previdenciário, oferecendo soluções jurídicas completas e personalizadas."
    },
    {
      icon: <FaPhone className="text-[#C45C24] text-2xl" />, 
      question: "Como posso agendar uma consulta?",
      answer: "Você pode agendar uma consulta através do WhatsApp, telefone ou formulário de contato em nosso site."
    },
    {
      icon: <FaBriefcase className="text-[#C45C24] text-2xl" />, 
      question: "Oferecem serviços para empresas?",
      answer: "Sim, prestamos assessoria jurídica completa para empresas, incluindo consultoria estratégica e representação legal."
    },
    {
      icon: <FaLaptop className="text-[#C45C24] text-2xl" />, 
      question: "Atendem de forma online e presencial?",
      answer: "Oferecemos atendimento online e presencial para melhor atender às necessidades dos nossos clientes."
    }
  ];

  return (
    <motion.section 
      id="principais-duvidas"
      className="bg-white py-16 px-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Principais Dúvidas
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {frequentQuestions.map((item, index) => (
            <motion.div 
              key={index}
              className="bg-gray-50 p-6 rounded-xl group cursor-pointer"
              whileHover={{ 
                scale: 1.03,
                backgroundColor: "#f5f5f5"
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex items-start mb-4">
                <div className="mr-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-[#C45C24] transition-colors">
                  {item.question}
                </h3>
              </div>
              <p className="text-gray-600 text-sm">
                {item.answer}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

function AboutUsSection() {
  return (
    <motion.section 
      className="py-16 bg-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Nossa História
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Fundado com a missão de oferecer serviços jurídicos excepcionais, nosso escritório combina expertise técnica com um compromisso inabalável com a justiça e os interesses de nossos clientes.
            </p>
            
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { 
                  icon: <FaClock className="text-[#C45C24] text-3xl" />, 
                  title: "Agilidade", 
                  description: "Respostas rápidas e eficientes" 
                },
                { 
                  icon: <FaBalanceScale className="text-[#C45C24] text-3xl" />, 
                  title: "Precisão", 
                  description: "Análise jurídica detalhada" 
                }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  className="bg-gray-50 p-4 rounded-xl transition-all"
                  whileHover={{ 
                    scale: 1.05,
                    backgroundColor: "#f9f9f9"
                  }}
                >
                  <div className="flex items-center mb-2">
                    {item.icon}
                    <h3 className="text-lg font-semibold ml-3 text-gray-900">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 text-sm">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <Image 
              src="/images/legal-services/photo-1589829545856-d10d557cf95f.jpg" 
              alt="Escritório de Advocacia" 
              width={1024}
              height={1024}
              className="w-full h-[500px] object-cover rounded-xl shadow-lg transition-transform group-hover:scale-105"
            />
            <motion.div 
              className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity rounded-xl"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
            >
              <p className="text-white text-lg text-center px-4">
                Comprometidos com a excelência jurídica desde 2008
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

function TestimonialsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-3xl font-bold mb-6 text-center"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          O Que Nossos Clientes Dizem
        </motion.h2>
        <motion.div 
          className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-6"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { 
              opacity: 1,
              transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2
              }
            }
          }}
        >
          {[
            {
              name: "Mariana Lopes",
              rating: 5,
              text: "Escritório excepcional! Atendimento profissional e resultados surpreendentes. Resolveram meu caso com eficiência e dedicação.",
              date: "há 2 semanas",
              avatar: "https://randomuser.me/api/portraits/women/83.jpg"
            },
            {
              name: "Carlos Pereira",
              rating: 5,
              text: "Serviço jurídico de alta qualidade. Advogados extremamente competentes e prestativos. Superaram todas as minhas expectativas.",
              date: "há 1 mês",
              avatar: "https://randomuser.me/api/portraits/men/79.jpg"
            },
            {
              name: "Fernanda Costa",
              rating: 5,
              text: "Muito bom atendimento, profissionais muito atenciosos. Resolveram minha questão judicial de forma rápida e eficiente.",
              date: "há 3 semanas",
              avatar: "https://randomuser.me/api/portraits/women/67.jpg"
            }
          ].map((review, index) => (
            <motion.div 
              key={index} 
              className="bg-white shadow-lg rounded-lg p-6 max-w-md w-full border border-gray-200"
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { 
                  opacity: 1, 
                  x: 0,
                  transition: { 
                    duration: 0.6,
                    type: "spring",
                    stiffness: 100
                  }
                }
              }}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="flex items-center mb-4">
                <Image 
                  src={review.avatar} 
                  alt={review.name} 
                  width={48}
                  height={48}
                  className="w-12 h-12 rounded-full mr-4"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 260, 
                    damping: 20 
                  }}
                />
                <div>
                  <div className="flex items-center">
                    <h3 className="text-lg font-semibold ml-4">{review.name}</h3>
                    <div className="flex text-yellow-400">
                      {[...Array(review.rating)].map((_, i) => (
                        <motion.svg 
                          key={i} 
                          className="w-5 h-5" 
                          fill="currentColor" 
                          viewBox="0 0 24 24"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ 
                            delay: i * 0.1,
                            type: "spring", 
                            stiffness: 300, 
                            damping: 10 
                          }}
                        >
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                        </motion.svg>
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-gray-500">{review.date}</p>
                </div>
              </div>
              <motion.p 
                className="text-gray-700 italic"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                "{review.text}"
              </motion.p>
              <motion.div 
                className="mt-4 flex items-center text-sm text-gray-500"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              >
                <svg 
                  className="w-5 h-5 mr-2 text-green-500" 
                  fill="currentColor" 
                  viewBox="0 0 20 20"
                >
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Avaliação verificada
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <motion.section 
      id="contact-section"
      className="bg-gray-50 py-16 px-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Entre em Contato
            </h2>
            <p className="text-gray-600 mb-8">
              Estamos prontos para ajudar. Preencha o formulário ou use nossos canais de comunicação.
            </p>
            
            <div className="space-y-4">
              {[
                { 
                  icon: <MapPin className="text-[#C45C24] text-2xl" />, 
                  text: "309 R. Antônio João - Centro Norte, Cuiabá - MT" 
                },
                { 
                  icon: <Phone className="text-[#C45C24] text-2xl" />, 
                  text: "(11) 9999-9999" 
                },
                { 
                  icon: <Mail className="text-[#C45C24] text-2xl" />, 
                  text: "contato@escritorio.com.br" 
                }
              ].map((contact, index) => (
                <motion.div 
                  key={index}
                  className="flex items-center space-x-4 bg-gray-50 p-3 rounded-lg transition-all"
                  whileHover={{ 
                    x: 10,
                    backgroundColor: "#f5f5f5"
                  }}
                >
                  {contact.icon}
                  <span className="text-gray-700">
                    {contact.text}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const scrollToContact = () => {
    console.log('Botão Comece Agora clicado');
    const contactSection = document.getElementById('contact-section');
    if (contactSection) {
      console.log('Seção de contato encontrada');
      contactSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    } else {
      console.error('Seção de contato não encontrada');
    }
  };

  const openBudgetModal = () => {
    setIsModalOpen(true);
  };

  const closeBudgetModal = () => {
    setIsModalOpen(false);
  };

  const openWhatsApp = () => {
    const phoneNumber = '5565999999999'; // Substitua pelo número real da empresa
    const message = 'Olá, gostaria de agendar uma consulta jurídica.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <>
      <section className="container mx-auto flex flex-col items-center justify-center min-h-[70vh] px-6 py-16 bg-white text-center">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold text-gray-900">Serviços Jurídicos Especializados para Proteger Seus Direitos e Interesses</h1>
          <p className="mt-4 text-gray-700">Nossa equipe dedicada de advogados está comprometida em oferecer soluções jurídicas personalizadas com integridade, precisão e estratégias focadas em resultados.</p>
          <div className="mt-6 flex justify-center space-x-4">
            <motion.button 
              onClick={scrollToContact}
              className="bg-[#1A202C] text-white px-4 py-2 rounded-full"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Comece Agora
            </motion.button>
            <motion.button 
              onClick={openBudgetModal}
              className="border border-gray-400 text-gray-900 px-4 py-2 rounded-full"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Solicite uma Consulta Conosco
            </motion.button>
          </div>
        </div>
      </section>

      {isModalOpen && (
        <motion.div 
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div 
            className="bg-white rounded-xl shadow-2xl max-w-md w-full p-8"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Consulta e Orçamento Jurídico</h2>
            <p className="text-gray-700 mb-4">
              Na Soares Lacerda Advogados, realizamos uma consulta inicial para avaliar sua situação jurídica. 
              Após essa análise preliminar, apresentaremos um orçamento detalhado e transparente.
            </p>
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3">
                <svg className="w-6 h-6 text-[#C45C24]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
                <span className="text-gray-700">Consulta inicial detalhada</span>
              </div>
              <div className="flex items-center space-x-3">
                <svg className="w-6 h-6 text-[#C45C24]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
                <span className="text-gray-700">Orçamento personalizado</span>
              </div>
              <div className="flex items-center space-x-3">
                <svg className="w-6 h-6 text-[#C45C24]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
                <span className="text-gray-700">Transparência nos honorários</span>
              </div>
            </div>
            <div className="flex space-x-4">
              <motion.button 
                onClick={closeBudgetModal}
                className="flex-1 bg-gray-200 text-gray-800 py-2 rounded-full"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Fechar
              </motion.button>
              <motion.button 
                onClick={openWhatsApp}
                className="flex-1 bg-[#C45C24] text-white py-2 rounded-full"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Agendar Consulta
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-white relative">
      <div className="absolute inset-0 bg-white opacity-50 blur-lg animate-pulse"></div>
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <LegalServicesSection />
        <ProcessSection />
        <PracticeAreasSection />
        <ExperienceNumbersSection />
        <FrequentQuestionsSection />
        
        {/* Sobre Nós */}
        <AboutUsSection />

        {/* Depoimentos */}
        <TestimonialsSection />

        {/* Contato */}
        <ContactSection />

        <Footer />
        
        {/* Fixed WhatsApp Button */}
        <div className="fixed bottom-6 right-6 z-50">
          <WhatsappButton variant="default" size="lg" />
        </div>
      </div>
    </div>
  );
}