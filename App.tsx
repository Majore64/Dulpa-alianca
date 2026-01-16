
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

// Componente de carregamento mínimo para evitar layout shift brusco
const LoadingFallback = () => <div className="min-h-[50vh] flex items-center justify-center"><div className="w-8 h-8 border-2 border-finacc-palm border-t-transparent rounded-full animate-spin"></div></div>;

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
  // Garante que funciona mesmo se window não estiver definido (SSR safe, embora seja SPA)
  if (typeof window === 'undefined') return 'home';
  
  const path = window.location.pathname.replace(/\/$/, '') || '/';
  const entry = Object.entries(PAGE_ROUTES).find(([_, route]) => route === path);
  return entry ? (entry[0] as PageType) : 'home';
};

const App: React.FC = () => {
  // Inicializa o estado verificando imediatamente a posição do scroll.
  const [scrolled, setScrolled] = useState(() => 
    typeof window !== 'undefined' ? window.scrollY > 50 : false
  );
  
  // Inicialização baseada na URL (Suporte a Deep Linking)
  // Passamos a função diretamente para o useState para lazy initialization
  const [currentPage, setCurrentPage] = useState<PageType>(getPageFromUrl);
  
  // Captura hash inicial se existir
  const [activeHash, setActiveHash] = useState<string | undefined>(() => {
    return typeof window !== 'undefined' ? (window.location.hash.slice(1) || undefined) : undefined;
  });
  
  // Referência para guardar a página anterior
  const prevPageRef = useRef<PageType>(currentPage);
  // Referência para identificar navegação via Back/Forward do browser
  const isPopState = useRef(false);
  // Referência para o container principal para o MutationObserver
  const mainRef = useRef<HTMLElement>(null);

  // Listener para Back/Forward do browser (PopState)
  useEffect(() => {
    const handlePopState = () => {
      isPopState.current = true;
      setCurrentPage(getPageFromUrl());
      setActiveHash(window.location.hash.slice(1) || undefined);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // SEO DINÂMICO: Atualiza o título, descrição e canonical da página
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

    // Atualiza a tag canonical
    const canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink) {
      const baseUrl = 'http://www.duplaalianca.pt';
      const path = PAGE_ROUTES[currentPage] === '/' ? '' : PAGE_ROUTES[currentPage];
      canonicalLink.setAttribute('href', `${baseUrl}${path}`);
    }
  }, [currentPage]);

  // CORREÇÃO CRÍTICA: IntersectionObserver + MutationObserver
  // Isto garante que as animações 'reveal' funcionam mesmo com Lazy Loading
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, { 
      threshold: 0.1, 
      rootMargin: '0px 0px -50px 0px' 
    });

    // Função que procura elementos .reveal e anexa o observer
    const scanAndObserve = () => {
      const reveals = document.querySelectorAll('.reveal');
      reveals.forEach(el => observer.observe(el));
    };

    // 1. Executa scan inicial
    const rafId = requestAnimationFrame(scanAndObserve);

    // 2. Configura MutationObserver para detetar quando o Suspense resolve e injeta conteúdo
    let mutationObserver: MutationObserver | null = null;
    
    if (mainRef.current) {
      mutationObserver = new MutationObserver((mutations) => {
        // Se houve adição de nós (conteúdo lazy carregou), fazemos scan novamente
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
  }, [currentPage]); // Re-executa sempre que a página muda para re-ligar os observers ao novo conteúdo

  // useLayoutEffect para gestão do Scroll e Navegação
  useLayoutEffect(() => {
    // Se a navegação foi via Back/Forward, deixa o browser gerir o scroll restoration nativo
    if (isPopState.current) {
      isPopState.current = false;
      prevPageRef.current = currentPage;
      return;
    }

    const isPageChange = currentPage !== prevPageRef.current;
    
    // Função helper para tentar scrollar para o hash (com retry para lazy load)
    const tryScrollToHash = (hash: string, attempts = 0) => {
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else if (attempts < 20) {
        // Tenta novamente a cada 100ms se o elemento não existir (max 2 seg)
        // Isto resolve o problema de links para secções dentro de componentes lazy
        setTimeout(() => tryScrollToHash(hash, attempts + 1), 100);
      }
    };
    
    if (isPageChange) {
      // Se mudou de página
      if (activeHash) {
        tryScrollToHash(activeHash);
      } else {
        window.scrollTo(0, 0);
      }
    } else {
      // Se estamos na mesma página e apenas mudou o hash
      if (activeHash) {
        tryScrollToHash(activeHash);
      }
    }

    prevPageRef.current = currentPage;
  }, [currentPage, activeHash]);

  // Função central de navegação com suporte a History API
  const navigateTo = (page: PageType, hash?: string) => {
    const route = PAGE_ROUTES[page];
    const url = hash ? `${route}#${hash}` : route;
    
    // Atualiza a URL sem recarregar a página
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
      
      {/* Adicionada ref ao main para o MutationObserver vigiar Lazy Loading */}
      <main className="flex-grow" ref={mainRef}>
        <Suspense fallback={<LoadingFallback />}>
          {currentPage === 'home' && (
            <>
              {/* Hero é mantido como importação direta (eager) pois está acima da dobra */}
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
        </Suspense>
      </main>
      
      <Suspense fallback={null}>
        <Footer 
          onOpenPrivacy={() => navigateTo('privacy')} 
          onNavigate={navigateTo} 
        />
      </Suspense>
      
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

      <Suspense fallback={null}>
        <BackToTop />
      </Suspense>
    </div>
  );
};

export default App;
