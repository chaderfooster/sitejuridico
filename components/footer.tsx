import { Scale } from "lucide-react";
import React from 'react';

export function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Scale className="h-8 w-8 text-[#C45C24]" />
              <span className="ml-2 text-xl font-bold text-white">
                Soares Lacerda Advogados
              </span>
            </div>
            <p className="text-sm">
              Defendendo seus direitos com excelência e dedicação desde 2008.
            </p>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Áreas de Atuação</h3>
            <ul className="space-y-2 text-sm">
              <li>Direito Previdenciário</li>
              <li>Direito Civil</li>
              <li>Direito do Consumidor</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Contato</h3>
            <ul className="space-y-2 text-sm">
              <li>contato@escritorio.com.br</li>
              <li>(11) 9999-9999</li>
              <li>309 R. Antônio João - Centro Norte, Cuiabá - MT</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Redes Sociais</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-500 transition-colors">
                LinkedIn
              </a>
              <a href="#" className="hover:text-blue-500 transition-colors">
                Instagram
              </a>
              <a href="#" className="hover:text-blue-500 transition-colors">
                Facebook
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-sm text-center">
          <p> 2024 Escritório de Advocacia. Todos os direitos reservados.</p>
          <p className="mt-2">
            OAB/SP 123.456 - Este site não constitui oferta ou prestação de serviços jurídicos.
          </p>
        </div>
      </div>
    </footer>
  );
}