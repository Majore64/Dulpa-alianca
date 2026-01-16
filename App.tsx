
import React, { useState, useEffect, useLayoutEffect, useRef, lazy, Suspense } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';

// Otimização: Lazy loading para componentes abaixo da dobra (Remove JS desnecessário do bundle inicial)
const About = lazy(() => import('./components/About').then(module => ({ default: module.About })));
const Services = lazy(() => import('./components/Services').then(module => ({ default: module.Services })));
const Testimonials = lazy(() => import('./components/Testimonials').then(module => ({ default: module.Testimonials })));
const Footer = lazy(() => import('./components/Footer').then(module => ({ default: module.Footer })));
const PrivacyPolicyPage = lazy(() => import('./components/PrivacyPolicyPage').then(module => ({ default: module.PrivacyPolicyPage })));
const BackToTop = lazy(() => import('./components/BackToTop').then(module => ({ default: module.BackToTop })));
const AboutPage = lazy(() => import('./components/AboutPage').then(module => ({ default: module.AboutPage })));
const ServicesPage = lazy(() => import('./components/ServicesPage').then(module => ({ default: module.ServicesPage })));
const ContactPage = lazy(() => import('./components/ContactPage').then(module => ({ default: module.ContactPage })));

export type PageType = 'home' | 'about' | 'services' | 'privacy' | 'contact';

// Componente Visual de Carregamento (Puro)
const LoadingFallback = () => (
  <div className="min-h-[60vh] flex items-center justify-center bg-white">
    <div className="flex flex-col items-center gap-3 animate-fade-in">
      <div className="w-8 h-8 border-2 border-finacc-palm border-t-transparent rounded-full animate-spin"></div>
    </div>
  </div>
);

// Wrapper para animação suave de entrada de página
const PageFade: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);

  useLayoutEffect(() => {
    // Pequeno delay para garantir que a classe inicial (opacity: 0) foi aplicada antes de trocar para active
    const timer = requestAnimationFrame(() => {
        setIsVisible(true);
    });
    return () => cancelAnimationFrame(timer);
  }, []);

  return (
    <div className={`page-fade ${isVisible ? 'active' : ''}`}>
      {children}
    </div>
  );
};

// Wrapper Inteligente para Suspense
// Só mostra o fallback se o carregamento demorar mais de 300ms.
// Caso contrário, não mostra nada (evitando o flash branco).
const SuspenseWithDelayedFallback: React.FC<{ children: React.ReactNode; fallback: React.ReactNode }> = ({ children, fallback }) => {
  const [showFallback, setShowFallback] = useState(false);

  useEffect(() => {
    // Reseta o estado ao montar (navegação)
    setShowFallback(false);
    const timer = setTimeout(() => {
      setShowFallback(true);
    }, 300); // 300ms de delay

    return () => clearTimeout(timer);
  }, []);

  return <Suspense fallback={showFallback ? fallback : null}>{children}</Suspense>;
};

// Configuração de Rotas para SEO e Navegação
const PAGE_ROUTES: Record<PageType, string> = {
  'home': '/',
  'about': '/sobre-nos',
  'services': '/servicos',
  'contact': '/contactos',
  'privacy': '/politica-privacidade'
};

// Função auxiliar para determinar a página atual baseada na URL
const getPageFromUrl = (): PageType => {
  if (typeof window === 'undefined') return 'home';
  
  const path = window.location.pathname.replace(/\/$/, '') || '/';
  const entry = Object.entries(PAGE_ROUTES).find(([_, route]) => route === path);
  return entry ? (entry[0] as PageType) : 'home';
};

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(() => 
    typeof window !== 'undefined' ? window.scrollY > 50 : false
  );
  
  const [currentPage, setCurrentPage] = useState<PageType>(getPageFromUrl);
  
  const [activeHash, setActiveHash] = useState<string | undefined>(() => {
    return typeof window !== 'undefined' ? (window.location.hash.slice(1) || undefined) : undefined;
  });
  
  const prevPageRef = useRef<PageType>(currentPage);
  const isPopState = useRef(false);
  const mainRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handlePopState = () => {
      isPopState.current = true;
      setCurrentPage(getPageFromUrl());
      setActiveHash(window.location.hash.slice(1) || undefined);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

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
        description = "Entre em contacto connosco. Estamos situados em Guimarães. Tel: 253 553 163 | Tlm: 938 163 691.";
        break;
      case 'privacy':
        title = "Política de Privacidade - Dupla Aliança";
        break;
      case 'home':
      default:
        break;
    }

    document.title = title;
    
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', description);
    }

    const canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink) {
      const baseUrl = 'http://www.duplaalianca.pt';
      const path = PAGE_ROUTES[currentPage] === '/' ? '' : PAGE_ROUTES[currentPage];
      canonicalLink.setAttribute('href', `${baseUrl}${path}`);
    }
  }, [currentPage]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const target = entry.target as HTMLElement;
          // Performance: Verifica se já foi observado para evitar re-processamento
          // Utiliza dataset para manter o estado no DOM
          if (!target.dataset.observed) {
            target.classList.add('active');
            target.dataset.observed = 'true';
            observer.unobserve(target);
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, { 
      threshold: 0.1, 
      rootMargin: '0px 0px -50px 0px' 
    });

    const scanAndObserve = () => {
      const reveals = document.querySelectorAll('.reveal');
      reveals.forEach(el => observer.observe(el));
    };

    const rafId = requestAnimationFrame(scanAndObserve);

    let mutationObserver: MutationObserver | null = null;
    
    if (mainRef.current) {
      mutationObserver = new MutationObserver((mutations) => {
        const hasAddedNodes = mutations.some(m => m.addedNodes.length > 0);
        if (hasAddedNodes) {
          scanAndObserve();
        }
      });
      
      mutationObserver.observe(mainRef.current, { childList: true, subtree: true });
    }

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
      if (mutationObserver) mutationObserver.disconnect();
      cancelAnimationFrame(rafId);
    };
  }, [currentPage]);

  useLayoutEffect(() => {
    if (isPopState.current) {
      isPopState.current = false;
      prevPageRef.current = currentPage;
      return;
    }

    const isPageChange = currentPage !== prevPageRef.current;
    
    const tryScrollToHash = (hash: string, attempts = 0) => {
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else if (attempts < 20) {
        setTimeout(() => tryScrollToHash(hash, attempts + 1), 100);
      }
    };
    
    if (isPageChange) {
      if (activeHash) {
        tryScrollToHash(activeHash);
      } else {
        window.scrollTo(0, 0);
      }
    } else {
      if (activeHash) {
        tryScrollToHash(activeHash);
      }
    }

    prevPageRef.current = currentPage;
  }, [currentPage, activeHash]);

  const navigateTo = (page: PageType, hash?: string) => {
    const route = PAGE_ROUTES[page];
    const url = hash ? `${route}#${hash}` : route;
    
    if (window.location.pathname + window.location.hash !== url) {
        window.history.pushState({}, '', url);
    }

    setCurrentPage(page);
    setActiveHash(hash);
    isPopState.current = false; 
  };

  return (
    <div className="min-h-screen flex flex-col relative bg-white">
      <Navbar 
        isScrolled={scrolled} 
        onNavigate={navigateTo}
        activePage={currentPage}
        activeHash={activeHash}
      />
      
      <main className="flex-grow" ref={mainRef}>
        {/* Key é crucial aqui: força o componente a remontar e reiniciar o timer ao mudar de página */}
        <SuspenseWithDelayedFallback key={currentPage} fallback={<LoadingFallback />}>
          <PageFade>
            {currentPage === 'home' && (
              <div className="animate-fade-in">
                <div id="inicio" className="bg-white">
                  <Hero onNavigate={navigateTo} />
                </div>

                <div id="servicos-resumo" className="reveal bg-white">
                  <Services onNavigate={navigateTo} />
                </div>
                
                <div id="testemunhos" className="reveal bg-gray-50 border-t border-b border-gray-100">
                  <Testimonials />
                </div>

                <div id="sobre-resumo" className="reveal bg-[#FDFCF8] border-b border-gray-100">
                  <About onNavigate={navigateTo} />
                </div>

                <div className="reveal bg-finacc-cream py-20 lg:py-28 relative overflow-hidden">
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
              </div>
            )}

            {currentPage === 'about' && <AboutPage onNavigate={navigateTo} />}
            {currentPage === 'services' && <ServicesPage onNavigate={navigateTo} />}
            {currentPage === 'privacy' && <PrivacyPolicyPage onNavigate={navigateTo} />}
            {currentPage === 'contact' && <ContactPage onNavigate={navigateTo} />}
          </PageFade>
        </SuspenseWithDelayedFallback>
      </main>
      
      <SuspenseWithDelayedFallback fallback={null}>
        <Footer 
          onOpenPrivacy={() => navigateTo('privacy')} 
          onNavigate={navigateTo} 
        />
      </SuspenseWithDelayedFallback>
      
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

      <SuspenseWithDelayedFallback fallback={null}>
        <BackToTop />
      </SuspenseWithDelayedFallback>
    </div>
  );
};

export default App;
