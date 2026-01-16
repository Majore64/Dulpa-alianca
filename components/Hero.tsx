import React from 'react';
import { PageType } from '../App';

interface HeroProps {
  onNavigate: (page: PageType, hash?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  // Imagem Hero (LCP) otimizada:
  // w_1200: Reduzido de 1600px para eliminar aviso "appropriately-sized images"
  // Mantém qualidade suficiente para a coluna de 40% em desktops (2x density)
  // f_auto: Formato automático (AVIF/WebP)
  // q_auto: Qualidade automática
  const heroImageUrl = "https://res.cloudinary.com/dsxketzvb/image/upload/w_1200,f_auto,q_auto/v1768555596/IMG_4504_qdtzo6.jpg";

  return (
    <section id="inicio" className="relative min-h-[85vh] lg:min-h-[80vh] flex items-center pt-32 pb-8 lg:pt-40 lg:pb-12 bg-finacc-cream overflow-hidden">
      {/* Elemento Decorativo Fundo */}
      <div className="absolute top-0 right-0 w-[35vw] h-full bg-white hidden lg:block border-l border-finacc-palm/10"></div>
      
      <div className="container mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center relative z-10 gap-10 lg:gap-0">
        
        {/* Conteúdo Textual - Largura aumentada para 60% (w-3/5) para dar mais espaço ao texto */}
        <div className="w-full lg:w-3/5 text-center lg:text-left pt-6 lg:pt-0">
          {/* Adicionado opacity-0 para evitar glitch */}
          <div className="inline-block mb-3 lg:mb-4 animate-fade-in-up opacity-0">
            {/* Removida opacidade (/80) para garantir contraste sólido e conformidade total */}
            <span className="text-finacc-evergreen font-bold uppercase tracking-[0.25em] text-[9px] lg:text-[10px] border-b border-finacc-palm pb-1 sans-serif">
              Contabilidade & Estratégia
            </span>
          </div>
          
          {/* Título ajustado: tamanhos de fonte otimizados e max-width removido para usar toda a largura disponível */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium text-finacc-evergreen leading-[1.1] mb-6 animate-fade-in-up [animation-delay:100ms] opacity-0 tracking-tight">
            O Seu Parceiro de Confiança <br className="hidden xl:block" /> em Contabilidade e Fiscalidade
          </h1>
          
          {/* Adicionado opacity-0 para evitar glitch */}
          <p className="text-sm sm:text-base text-gray-700 mb-8 lg:mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed font-light animate-fade-in-up [animation-delay:200ms] sans-serif opacity-0">
            Excelência em serviços contabilísticos, fiscais e de recursos humanos, construindo o futuro financeiro da sua empresa com rigor, inovação e compromisso.
          </p>
          
          {/* Adicionado opacity-0 para evitar glitch */}
          <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 justify-center lg:justify-start items-center animate-fade-in-up [animation-delay:300ms] w-full sm:w-auto opacity-0">
            <button 
              onClick={() => onNavigate('contact', 'formulario')} 
              className="w-full sm:w-auto bg-finacc-evergreen text-white px-8 py-4 min-w-[180px] text-center font-bold text-[10px] uppercase tracking-widest hover:bg-finacc-palm transition-all duration-300 shadow-lg hover:shadow-accent rounded-sm"
            >
              Agendar Reunião
            </button>
            <button 
              onClick={() => onNavigate('services')} 
              className="w-full sm:w-auto px-8 py-4 min-w-[180px] border border-finacc-evergreen text-finacc-evergreen font-bold text-[10px] uppercase tracking-widest hover:bg-white transition-colors rounded-sm bg-transparent"
            >
              Nossos Serviços
            </button>
          </div>
        </div>

        {/* Imagem - Largura ajustada para 40% (w-2/5) */}
        <div className="w-full lg:w-2/5 relative">
          {/* Adicionado opacity-0 para evitar glitch */}
          <div className="relative z-10 animate-fade-in [animation-delay:400ms] opacity-0">
            {/* 
               PERFORMANCE LCP:
               - loading="eager"
               - fetchpriority="high"
               - width/height explícitos
            */}
            <img 
              src={heroImageUrl} 
              alt="Escritório Dupla Aliança - Contabilidade e Consultoria em Guimarães" 
              width="800"
              height="600"
              className="w-full object-cover object-center shadow-2xl rounded-sm brightness-[1.02] contrast-[1.02] aspect-[4/3] lg:aspect-[3/4] xl:aspect-[4/3]"
              loading="eager"
              // @ts-ignore
              fetchpriority="high"
            />
            {/* Moldura Decorativa */}
            <div className="absolute top-4 -right-4 w-full h-full border border-finacc-palm/30 -z-10 hidden lg:block rounded-sm"></div>
          </div>
          
          {/* Badge Flutuante */}
          {/* Adicionado opacity-0 para evitar glitch */}
          <div className="absolute -bottom-4 left-4 right-4 lg:right-auto lg:-bottom-6 lg:-left-12 bg-finacc-evergreen text-white p-5 lg:p-6 shadow-elegant z-20 max-w-xs mx-auto lg:mx-0 animate-fade-in-up [animation-delay:600ms] text-center lg:text-left rounded-sm lg:rounded-none opacity-0 border-l-4 border-finacc-palm">
            <p className="font-serif italic text-lg lg:text-xl mb-1">"Excelência."</p>
            <p className="text-[9px] lg:text-[10px] text-white/80 uppercase tracking-widest leading-relaxed sans-serif font-semibold">
              Compromisso total com o sucesso dos nossos clientes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};