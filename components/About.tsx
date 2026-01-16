
import React from 'react';
import { PageType } from '../App';

interface AboutProps {
  onNavigate: (page: PageType, hash?: string) => void;
}

export const About: React.FC<AboutProps> = ({ onNavigate }) => {
  // Imagem atualizada
  const aboutImageUrl = "https://res.cloudinary.com/dsxketzvb/image/upload/v1768561909/Imagem1_xruavv.png";

  return (
    <section className="py-12 lg:py-16 bg-finacc-cream border-t border-gray-200">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">
          
          <div className="w-full lg:w-5/12 reveal">
            <div className="relative">
              <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-finacc-palm opacity-50"></div>
              <img 
                src={aboutImageUrl}
                alt="Equipa Dupla Aliança" 
                className="relative z-10 w-full shadow-elegant object-cover aspect-[4/3] rounded-sm grayscale-[10%]"
                loading="lazy"
              />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-finacc-palm/10 -z-10 rounded-full blur-xl"></div>
            </div>
          </div>
          
          <div className="w-full lg:w-7/12 reveal pt-2 lg:pt-0">
            <h4 className="text-finacc-palm font-bold uppercase tracking-[0.3em] text-[10px] mb-3 sans-serif">Quem Somos</h4>
            <h2 className="text-2xl sm:text-3xl lg:text-3xl font-medium text-finacc-evergreen mb-6 leading-tight">
              O Seu Parceiro Estratégico para o <span className="italic text-finacc-palm">Crescimento Sustentável</span>.
            </h2>
            
            <div className="space-y-4 text-gray-700 text-sm sm:text-base leading-relaxed font-light mb-8 border-l-2 border-finacc-palm/20 pl-6">
              <p>
                A <strong>Dupla Aliança Lda</strong> é especialista em contabilidade, fiscalidade e recursos humanos, dedicada a fornecer soluções financeiras personalizadas e estratégicas.
              </p>
              <p>
                O nosso compromisso assenta na qualidade irrepreensível, competência técnica e confidencialidade absoluta, garantindo segurança e crescimento sustentável para a sua empresa.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full border border-finacc-palm text-finacc-palm flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="font-serif italic font-bold text-sm">01</span>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-finacc-evergreen mb-1 sans-serif uppercase tracking-wide">Competência Técnica</h4>
                  <p className="text-xs text-gray-600 leading-relaxed">Equipa qualificada para apoiar nas decisões mais importantes.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full border border-finacc-palm text-finacc-palm flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="font-serif italic font-bold text-sm">02</span>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-finacc-evergreen mb-1 sans-serif uppercase tracking-wide">Confidencialidade</h4>
                  <p className="text-xs text-gray-600 leading-relaxed">Gestão segura e rigorosa da informação do seu negócio.</p>
                </div>
              </div>
            </div>

            <button 
              onClick={() => onNavigate('about')} 
              className="inline-block border-b border-finacc-evergreen pb-1 text-finacc-evergreen font-bold text-[10px] uppercase tracking-widest hover:text-finacc-palm hover:border-finacc-palm transition-all"
            >
              Saber mais sobre nós &rarr;
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
