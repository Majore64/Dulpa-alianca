
import React from 'react';
import { PageType } from '../App';

interface FooterProps {
  onOpenPrivacy: () => void;
  onNavigate: (page: PageType, hash?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPrivacy, onNavigate }) => {
  return (
    <footer className="bg-finacc-evergreen text-white pt-16 pb-12 border-t border-finacc-palm/20">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          
          {/* Coluna 1: Marca, Morada e Redes Sociais */}
          <div className="col-span-1 md:col-span-1">
            <button onClick={() => onNavigate('home')} className="text-xl font-bold mb-6 block text-left outline-none group tracking-tight font-serif">
              Dupla<span className="text-finacc-palm italic">Aliança</span>
            </button>
            <address className="not-italic text-gray-400 mb-8 leading-relaxed space-y-1.5 text-xs sans-serif font-light">
              <p className="font-bold text-white mb-1.5">Sede</p>
              <p>Rua Dom Cristóvão de São Boaventura, nº44</p>
              <p>RC Esq., 4810-261 Oliveira do Castelo</p>
              <p>Guimarães, Portugal</p>
            </address>

            {/* Redes Sociais */}
            <div className="flex gap-4">
              {/* Facebook */}
              <a href="https://www.facebook.com/duplAlianca" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-finacc-palm hover:border-finacc-palm transition-all group" aria-label="Facebook">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                </svg>
              </a>
              
              {/* Instagram */}
              <a href="https://www.instagram.com/duplalianca/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-finacc-palm hover:border-finacc-palm transition-all group" aria-label="Instagram">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>
          
          {/* Coluna 2: Navegação */}
          <div>
            {/* H4 changed to H3 for hierarchy, color changed to white for contrast */}
            <h3 className="text-xs font-bold mb-6 text-white uppercase tracking-widest sans-serif">Navegação</h3>
            <ul className="space-y-3 text-gray-300 font-light text-xs sans-serif">
              <li><button onClick={() => onNavigate('home')} className="hover:text-white transition-colors text-left py-1 block w-full">Página Inicial</button></li>
              <li><button onClick={() => onNavigate('about')} className="hover:text-white transition-colors text-left py-1 block w-full">Sobre Nós</button></li>
              <li><button onClick={() => onNavigate('services')} className="hover:text-white transition-colors text-left py-1 block w-full">Nossos Serviços</button></li>
              <li><button onClick={() => onNavigate('home', 'testemunhos')} className="hover:text-white transition-colors text-left py-1 block w-full">Testemunhos</button></li>
              <li><button onClick={() => onNavigate('contact')} className="hover:text-white transition-colors py-1 block w-full text-left">Contactos</button></li>
            </ul>
          </div>
          
          {/* Coluna 3: Especialidades (Completa com 6 items) */}
          <div>
            {/* H4 changed to H3 for hierarchy, color changed to white for contrast */}
            <h3 className="text-xs font-bold mb-6 text-white uppercase tracking-widest sans-serif">Especialidades</h3>
            <ul className="space-y-3 text-gray-300 font-light text-xs sans-serif">
              <li><button onClick={() => onNavigate('services', 'contabilidade')} className="hover:text-white transition-colors text-left py-1 block w-full">Contabilidade</button></li>
              <li><button onClick={() => onNavigate('services', 'fiscalidade')} className="hover:text-white transition-colors text-left py-1 block w-full">Gestão Fiscal</button></li>
              <li><button onClick={() => onNavigate('services', 'rh')} className="hover:text-white transition-colors text-left py-1 block w-full">Recursos Humanos</button></li>
              <li><button onClick={() => onNavigate('services', 'consultoria')} className="hover:text-white transition-colors text-left py-1 block w-full">Consultoria Financeira</button></li>
              <li><button onClick={() => onNavigate('services', 'auditoria')} className="hover:text-white transition-colors text-left py-1 block w-full">Auditoria</button></li>
              <li><button onClick={() => onNavigate('services', 'revisao-legal')} className="hover:text-white transition-colors text-left py-1 block w-full">Revisão Legal de Contas</button></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-gray-400 text-[10px] uppercase tracking-widest font-medium sans-serif">
          <p className="mb-4 md:mb-0">© {new Date().getFullYear()} Dupla Aliança Lda.</p>
          <div className="flex space-x-4">
            <button onClick={onOpenPrivacy} className="hover:text-white transition-colors">Política de Privacidade</button>
            <span className="text-white/10">|</span>
            <span>Desde 2003</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
