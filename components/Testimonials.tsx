
import React, { useState, useRef } from 'react';

// Removida a prop 'img'
const TestimonialCard: React.FC<{ quote: string; author: string; role: string }> = ({ quote, author, role }) => (
  <div className="bg-finacc-hunter p-8 border border-white/5 flex flex-col h-full mx-auto w-full snap-center relative group hover:bg-white/5 transition-colors duration-500 rounded-sm">
    <div className="absolute top-6 right-6 text-finacc-palm opacity-20 text-6xl font-serif leading-none">"</div>
    
    {/* Layout ajustado sem imagem */}
    <div className="mb-6">
        <h3 className="font-bold text-white text-lg tracking-wide font-serif leading-tight">{author}</h3>
        <p className="text-finacc-palm text-[10px] font-bold uppercase tracking-widest mt-1 sans-serif opacity-80 leading-tight">{role}</p>
    </div>
    
    <p className="text-gray-200 font-light leading-relaxed flex-grow text-lg italic mb-8 relative z-10 font-serif opacity-90">
      {quote}
    </p>
    
    <div className="flex text-finacc-palm gap-1 mt-auto pt-6 border-t border-white/5">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className="w-3 h-3 fill-current" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  </div>
);

export const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  
  // Removida a propriedade 'img' dos dados
  const testimonials = [
    {
      quote: "A Dupla Aliança é um parceiro fundamental. A gestão de RH e contabilidade é impecável, permitindo-nos focar apenas na produção.",
      author: "Armindo Pinto",
      role: "Gerente, Indústria Fabricação Plásticos"
    },
    {
      quote: "Competência e profissionalismo extremo. Ajudaram-me a estruturar a minha empresa desde o primeiro dia com conselhos valiosos.",
      author: "Miguel Fernandes",
      role: "Agenciamento Têxtil"
    },
    {
      quote: "Rigorosos nos prazos e muito claros na explicação das obrigações fiscais. Sinto que a minha empresa está segura.",
      author: "Pedro Alves",
      role: "Empresário Têxtil"
    }
  ];

  const handleScroll = () => {
    if (scrollRef.current && window.innerWidth < 1024) {
      const scrollLeft = scrollRef.current.scrollLeft;
      const width = scrollRef.current.offsetWidth;
      const newIndex = Math.round(scrollLeft / width);
      if (newIndex !== activeIndex) {
        setActiveIndex(newIndex);
      }
    }
  };

  const scrollToSlide = (index: number) => {
    if (scrollRef.current) {
      const width = scrollRef.current.offsetWidth;
      scrollRef.current.scrollTo({
        left: width * index,
        behavior: 'smooth'
      });
    }
    setActiveIndex(index);
  };

  return (
    <section className="py-12 lg:py-20 bg-finacc-evergreen relative">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 lg:mb-16 reveal">
          <div>
            <p className="text-finacc-palm font-bold uppercase tracking-[0.4em] text-[10px] mb-3 sans-serif">Depoimentos</p>
            <h2 className="text-3xl lg:text-4xl font-medium text-white tracking-tight">A voz dos nossos <span className="italic text-finacc-palm font-serif">Parceiros</span></h2>
          </div>
          <div className="hidden md:flex gap-3">
             <button aria-label="Anterior" onClick={() => scrollToSlide(Math.max(0, activeIndex - 1))} className="p-3 border border-white/10 text-white hover:bg-finacc-palm hover:border-finacc-palm transition-all rounded-full"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg></button>
             <button aria-label="Próximo" onClick={() => scrollToSlide(Math.min(testimonials.length - 1, activeIndex + 1))} className="p-3 border border-white/10 text-white hover:bg-finacc-palm hover:border-finacc-palm transition-all rounded-full"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg></button>
          </div>
        </div>

        <div className="hidden lg:grid grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <TestimonialCard key={idx} {...t} />
          ))}
        </div>

        {/* Versão Mobile */}
        <div className="lg:hidden relative">
          <div 
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide gap-4 pb-8"
            style={{ 
              scrollbarWidth: 'none', 
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch' 
            }}
          >
            {testimonials.map((t, idx) => (
              <div key={idx} className="w-[85vw] flex-shrink-0 snap-center">
                <TestimonialCard {...t} />
              </div>
            ))}
          </div>
          
          <div className="flex justify-center gap-2 mt-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => scrollToSlide(idx)}
                aria-label={`Ir para testemunho ${idx + 1}`}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  activeIndex === idx ? 'w-8 bg-finacc-palm' : 'w-2 bg-white/20'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{ __html: `
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}} />
    </section>
  );
};
