
import React from 'react';
import { PageType } from '../App';

interface HeroProps {
  onNavigate: (page: PageType, hash?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  // Imagem atualizada do Cloudinary
  const heroImageUrl = "https://res.cloudinary.com/dsxketzvb/image/upload/v1768555596/IMG_4504_qdtzo6.jpg";

  return (
    <section id="inicio" className="relative min-h-[85vh] lg:min-h-[80vh] flex items-center pt-32 pb-8 lg:pt-40 lg:pb-12 bg-finacc-cream overflow-hidden">
      {/* Elemento Decorativo Fundo */}
      <div className="absolute top-0 right-0 w-[40vw] h-full bg-white hidden lg:block border-l border-finacc-palm/10"></div>
      
      <div className="container mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center relative z-10">
        
        {/* Conteúdo Textual - Escala reduzida */}
        <div className="w-full lg:w-1/2 text-center lg:text-left pt-6 lg:pt-0 pr-0 lg:pr-12">
          {/* Adicionado opacity-0 para evitar glitch */}
          <div className="inline-block mb-3 lg:mb-4 animate-fade-in-up opacity-0">
            <span className="text-finacc-palm font-bold uppercase tracking-[0.25em] text-[9px] lg:text-[10px] border-b border-finacc-palm pb-1 sans-serif">
              Contabilidade & Estratégia
            </span>
          </div>
          
          {/* Adicionado opacity-0 para evitar glitch */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium text-finacc-evergreen leading-[1.1] mb-5 lg:mb-6 animate-fade-in-up [animation-delay:100ms] opacity-0">
            O Seu Parceiro de Confiança em Contabilidade e Fiscalidade
          </h1>
          
          {/* Adicionado opacity-0 para evitar glitch */}
          <p className="text-sm sm:text-base text-gray-700 mb-8 lg:mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed font-light animate-fade-in-up [animation-delay:200ms] sans-serif opacity-0">
            Excelência em serviços contabilísticos, fiscais e de recursos humanos, construindo o futuro financeiro da sua empresa com rigor, inovação e compromisso.
          </p>
          
          {/* Adicionado opacity-0 para evitar glitch */}
          <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 justify-center lg:justify-start items-center animate-fade-in-up [animation-delay:300ms] w-full sm:w-auto opacity-0">
            <button 
              onClick={() => onNavigate('home', 'contacto')} 
              className="w-full sm:w-auto bg-finacc-evergreen text-white px-6 py-3 min-w-[160px] text-center font-bold text-[10px] uppercase tracking-widest hover:bg-finacc-palm transition-all duration-300 shadow-lg hover:shadow-accent rounded-sm"
            >
              Agendar Reunião
            </button>
            <button 
              onClick={() => onNavigate('services')} 
              className="w-full sm:w-auto px-6 py-3 min-w-[160px] border border-finacc-evergreen text-finacc-evergreen font-bold text-[10px] uppercase tracking-widest hover:bg-white transition-colors rounded-sm bg-transparent"
            >
              Nossos Serviços
            </button>
          </div>
        </div>

        {/* Imagem */}
        <div className="w-full lg:w-1/2 mt-8 lg:mt-0 relative">
          {/* Adicionado opacity-0 para evitar glitch */}
          <div className="relative z-10 animate-fade-in [animation-delay:400ms] opacity-0">
            {/* 
               Formatos ajustados: 
               - object-cover e object-center
               - Aspect ratio 16/10 em desktop para ser mais "panorâmico" e menos alto
            */}
            <img 
              src={heroImageUrl} 
              alt="Escritório Dupla Aliança" 
              className="w-full object-cover object-center shadow-2xl rounded-sm brightness-[1.02] contrast-[1.02] aspect-[4/3] lg:aspect-[16/10]"
              loading="eager"
            />
            {/* Moldura Decorativa */}
            <div className="absolute top-4 -right-4 w-full h-full border border-finacc-palm/30 -z-10 hidden lg:block rounded-sm"></div>
          </div>
          
          {/* Badge Flutuante - Mais pequeno */}
          {/* Adicionado opacity-0 para evitar glitch */}
          <div className="absolute -bottom-4 left-4 right-4 lg:right-auto lg:-bottom-6 lg:-left-6 bg-finacc-evergreen text-white p-4 lg:p-5 shadow-elegant z-20 max-w-xs mx-auto lg:mx-0 animate-fade-in-up [animation-delay:600ms] text-center lg:text-left rounded-sm lg:rounded-none opacity-0">
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
