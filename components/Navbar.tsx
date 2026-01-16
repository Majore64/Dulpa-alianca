
import React, { useState, useEffect } from 'react';
import { PageType } from '../App';

interface NavbarProps {
  isScrolled: boolean;
  onNavigate: (page: PageType, hash?: string) => void;
  activePage: PageType;
  activeHash?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ isScrolled, onNavigate, activePage, activeHash }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // Evita animações de "glitch" no carregamento inicial
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleLinkClick = (page: PageType, hash?: string) => {
    onNavigate(page, hash);
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [mobileMenuOpen]);

  const navLinks: { name: string; page: PageType; hash?: string }[] = [
    { name: 'Início', page: 'home' },
    { name: 'Sobre', page: 'about' },
    { name: 'Serviços', page: 'services' },
    { name: 'Contactos', page: 'contact' },
  ];

  // Função auxiliar para verificar se o link está ativo
  const isLinkActive = (page: PageType, hash?: string) => {
    if (hash) {
      return activePage === page && activeHash === hash;
    }
    if (activePage === page) {
      if (!activeHash) return true;
      const isHashLinkedToOtherItem = navLinks.some(
        link => link.page === page && link.hash === activeHash
      );
      return !isHashLinkedToOtherItem;
    }
    return false;
  };

  const transitionClass = isMounted ? "transition-all duration-300 ease-in-out" : "";

  return (
    <nav className={`fixed w-full z-[100] top-0 flex justify-center ${transitionClass}`}>
      <div className={`${transitionClass} flex items-center justify-between px-6 md:px-12 ${
        isScrolled 
          ? 'w-full glass-nav shadow-sm py-2.5' // Reduzido de py-4
          : 'w-full bg-transparent py-4 lg:py-6' // Reduzido de py-6 lg:py-10
      }`}>
        
        {/* Logo */}
        <div className="flex-1 relative z-[110]">
          <button onClick={() => handleLinkClick('home')} className="flex flex-col items-start group">
            {/* Reduzido de text-2xl md:text-3xl para text-xl md:text-2xl */}
            <span className="text-xl md:text-2xl font-bold tracking-tight text-finacc-evergreen leading-none font-serif">
              Dupla<span className="text-finacc-palm italic">Aliança</span>
            </span>
          </button>
        </div>

        {/* Links Centrais (Desktop) */}
        <div className="hidden lg:flex items-center justify-center space-x-10">
          {navLinks.map((item) => {
            const active = isLinkActive(item.page, item.hash);
            return (
              <button 
                key={item.name}
                onClick={() => onNavigate(item.page, item.hash)}
                // Alterado de text-gray-500 para text-gray-700 para aumentar o contraste
                className={`relative group text-[11px] font-bold uppercase tracking-[0.25em] transition-colors sans-serif py-2 ${
                  active ? 'text-finacc-palm' : 'text-gray-700 hover:text-finacc-palm'
                }`}
              >
                {item.name}
                <span className={`absolute left-0 bottom-0 w-full h-0.5 bg-finacc-palm transform transition-transform duration-300 origin-left ${
                  active ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`}></span>
              </button>
            );
          })}
        </div>

        {/* Botão Lateral */}
        <div className="flex-1 flex justify-end relative z-[110]">
          <button 
            onClick={() => onNavigate('contact', 'formulario')}
            // Reduzido padding de px-8 py-3 para px-6 py-2
            className={`hidden md:inline-flex items-center justify-center px-6 py-2 border border-finacc-evergreen text-finacc-evergreen hover:bg-finacc-evergreen hover:text-white transition-all duration-300 text-[10px] font-bold uppercase tracking-widest ${isScrolled ? 'rounded-md' : 'rounded-none'}`}
          >
            Fale Connosco
          </button>
          
          <button 
            className="lg:hidden text-finacc-evergreen p-2 focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Fechar Menu" : "Abrir Menu"}
          >
            {mobileMenuOpen ? (
               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" /></svg>
            ) : (
              <div className="space-y-1.5">
                <span className="block w-6 h-0.5 bg-finacc-evergreen"></span>
                <span className="block w-6 h-0.5 bg-finacc-evergreen"></span>
                <span className="block w-4 h-0.5 bg-finacc-evergreen ml-auto"></span>
              </div>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-finacc-cream z-[100] transition-transform duration-500 ease-in-out lg:hidden ${mobileMenuOpen ? 'translate-y-0' : 'translate-y-full'}`}>
        <div className="p-8 flex flex-col h-full relative overflow-hidden pt-24">
          {/* Background decor */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-finacc-palm/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          
          <div className="flex flex-col space-y-6 text-center relative z-10">
            {navLinks.map(item => {
              const active = isLinkActive(item.page, item.hash);
              return (
                <button 
                  key={item.name} 
                  onClick={() => handleLinkClick(item.page, item.hash)} 
                  className={`text-2xl font-serif font-medium transition-colors py-2 ${
                    active ? 'text-finacc-palm' : 'text-finacc-evergreen hover:text-finacc-palm'
                  }`}
                >
                  {item.name}
                </button>
              );
            })}
            <div className="pt-8">
              <button 
                onClick={() => handleLinkClick('contact', 'formulario')}
                className="inline-block bg-finacc-evergreen text-white px-8 py-4 text-xs font-bold uppercase tracking-widest shadow-lg hover:bg-finacc-palm transition-colors w-full sm:w-auto"
              >
                Contactar Agora
              </button>
            </div>
          </div>
          
          {/* Increased contrast for accessibility */}
          <div className="mt-auto text-center text-gray-600 text-[10px] uppercase tracking-widest pb-4">
            Desde 2003 • Guimarães
          </div>
        </div>
      </div>
    </nav>
  );
};
