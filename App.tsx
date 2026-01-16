
import React, { useState, useEffect, useLayoutEffect, useRef } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';
import { PrivacyPolicyPage } from './components/PrivacyPolicyPage';
import { BackToTop } from './components/BackToTop';
import { AboutPage } from './components/AboutPage';
import { ServicesPage } from './components/ServicesPage';
import { ContactPage } from './components/ContactPage';

export type PageType = 'home' | 'about' | 'services' | 'privacy' | 'contact';

const App: React.FC = () => {
  // Inicializa o estado verificando imediatamente a posição do scroll.
  const [scrolled, setScrolled] = useState(() => 
    typeof window !== 'undefined' ? window.scrollY > 50 : false
  );
  
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const [activeHash, setActiveHash] = useState<string | undefined>(undefined);
  
  // Referência para guardar a página anterior e decidir o tipo de scroll
  const prevPageRef = useRef<PageType>(currentPage);

  // SEO DINÂMICO: Atualiza o título e a descrição da página
  useEffect(() => {
    let title = "Dupla Aliança | Contabilidade e Auditoria em Guimarães";
    let description = "Gabinete de Contabilidade em Guimarães. Especialistas em Contabilidade, Fiscalidade, Recursos Humanos, Auditoria e Revisão Legal de Contas. Desde 2003.";

    switch (currentPage) {
      case 'about':
        title = "Sobre Nós - Dupla Aliança | Contabilidade";
        description = "Conheça a equipa da Dupla Aliança. Economistas e Contabilistas Certificados em Guimarães dedicados ao sucesso da sua empresa.";
        break;
      case 'services':
        title = "Nossos Serviços - Contabilidade, Fiscalidade e RH";
        description = "Serviços completos: Contabilidade, Gestão Fiscal, Recursos Humanos, Consultoria e Auditoria. Soluções à medida do seu negócio.";
        break;
      case 'contact':
        title = "Contactos - Dupla Aliança | Agende uma Reunião";
        description = "Entre em contacto connosco. Estamos situados em Guimarães, perto da Universidade do Minho (Azurém). Tel: 253 517 059.";
        break;
      case 'privacy':
        title = "Política de Privacidade - Dupla Aliança";
        break;
      case 'home':
      default:
        // Mantém os valores padrão
        break;
    }

    document.title = title;
    
    // Atualiza a meta tag de descrição
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', description);
    }
  }, [currentPage]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    // Configuração do IntersectionObserver para animações de scroll
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          // Parar de observar após animar para melhor performance e evitar "re-animação"
          observer.unobserve(entry.target);
        }
      });
    }, { 
      threshold: 0.1, // Dispara quando 10% do elemento está visível
      rootMargin: '0px 0px -50px 0px' // Um pouco antes do fim da tela para efeito visual melhor
    });

    // Usa requestAnimationFrame para garantir que o DOM está pronto sem atraso artificial
    const rafId = requestAnimationFrame(() => {
      const reveals = document.querySelectorAll('.reveal');
      reveals.forEach(el => observer.observe(el));
    });

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
      cancelAnimationFrame(rafId);
    };
  }, [currentPage]); // Re-executa sempre que a página muda

  // useLayoutEffect corre síncronamente após as mutações do DOM mas antes do browser "pintar" o ecrã.
  useLayoutEffect(() => {
    const isPageChange = currentPage !== prevPageRef.current;
    
    if (isPageChange) {
      // Se mudou de página
      if (activeHash) {
        // Pequeno timeout para garantir que a nova página renderizou antes do scroll
        setTimeout(() => {
          const element = document.getElementById(activeHash);
          if (element) {
            element.scrollIntoView({ behavior: 'auto', block: 'start' });
          }
        }, 10);
      } else {
        window.scrollTo(0, 0);
      }
    } else {
      // Se estamos na mesma página e apenas mudou o hash
      if (activeHash) {
        const element = document.getElementById(activeHash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    }

    prevPageRef.current = currentPage;
  }, [currentPage, activeHash]);

  const navigateTo = (page: PageType, hash?: string) => {
    setCurrentPage(page);
    setActiveHash(hash);
  };

  return (
    <div className="min-h-screen flex flex-col relative bg-white">
      <Navbar 
        isScrolled={scrolled} 
        onNavigate={navigateTo}
        activePage={currentPage}
        activeHash={activeHash}
      />
      
      <main className="flex-grow">
        {currentPage === 'home' && (
          <>
            <div id="inicio" className="bg-white">
              <Hero onNavigate={navigateTo} />
            </div>

            {/* Serviços Resumido - Movido para cima */}
            <div id="servicos-resumo" className="reveal bg-white">
              <Services onNavigate={navigateTo} />
            </div>
            
            {/* Testemunhos - Movido para depois de Serviços */}
            <div id="testemunhos" className="reveal bg-gray-50 border-t border-b border-gray-100">
              <Testimonials />
            </div>

            {/* Sobre Resumido - Movido para depois de Testemunhos */}
            <div id="sobre-resumo" className="reveal bg-[#FDFCF8] border-b border-gray-100">
              <About onNavigate={navigateTo} />
            </div>

            {/* CTA Final da Home */}
            <div className="reveal bg-finacc-cream py-20 lg:py-28 relative overflow-hidden">
               {/* Decoração de fundo */}
               <div className="absolute top-0 right-0 w-64 h-64 bg-finacc-palm/5 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3"></div>
               <div className="absolute bottom-0 left-0 w-64 h-64 bg-finacc-evergreen/5 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3"></div>

               <div className="container mx-auto px-6 lg:px-12 relative z-10 text-center">
                  <h2 className="text-3xl lg:text-5xl font-medium text-finacc-evergreen mb-6 font-serif leading-tight">
                    Vamos construir o futuro <br className="hidden md:block" /> da sua empresa?
                  </h2>
                  <p className="mb-10 max-w-2xl mx-auto text-gray-600 font-light sans-serif text-lg leading-relaxed">
                    Não deixe para amanhã a otimização que o seu negócio precisa hoje. Estamos prontos para ser o seu parceiro estratégico.
                  </p>
                  <button 
                    onClick={() => navigateTo('contact', 'formulario')}
                    className="bg-finacc-palm text-white px-12 py-5 font-bold uppercase tracking-widest hover:bg-finacc-evergreen transition-all shadow-xl text-xs rounded-sm transform hover:-translate-y-1"
                  >
                    Fale Connosco
                  </button>
               </div>
            </div>
          </>
        )}

        {currentPage === 'about' && <AboutPage onNavigate={navigateTo} />}
        {currentPage === 'services' && <ServicesPage onNavigate={navigateTo} />}
        {currentPage === 'privacy' && <PrivacyPolicyPage onNavigate={navigateTo} />}
        {currentPage === 'contact' && <ContactPage onNavigate={navigateTo} />}
      </main>
      
      <Footer 
        onOpenPrivacy={() => navigateTo('privacy')} 
        onNavigate={navigateTo} 
      />
      
      {/* Botão flutuante mobile */}
      <div className="fixed bottom-6 right-6 z-40 md:hidden animate-fade-in [animation-delay:1s]">
        <button 
          onClick={() => navigateTo('contact', 'formulario')}
          title="Contacte-nos agora"
          className="bg-finacc-palm text-white w-14 h-14 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform cursor-pointer"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        </button>
      </div>

      <BackToTop />
    </div>
  );
};

export default App;
