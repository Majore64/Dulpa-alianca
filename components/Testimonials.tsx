
import React, { useState, useEffect, useRef } from 'react';

const TestimonialCard: React.FC<{ quote: string; author: string; role: string; img: string }> = ({ quote, author, role, img }) => (
  <div className="bg-finacc-hunter p-6 border border-white/5 flex flex-col h-full mx-auto w-full snap-center relative group hover:bg-white/5 transition-colors duration-500 rounded-sm">
    <div className="absolute top-4 right-4 text-finacc-palm opacity-20 text-4xl font-serif leading-none">"</div>
    
    <div className="flex items-center mb-5">
      <div className="relative flex-shrink-0">
        <img src={img} alt={author} className="w-10 h-10 rounded-full mr-4 border border-finacc-palm/50 object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all" />
      </div>
      <div>
        <h4 className="font-bold text-white text-sm tracking-wide font-serif leading-tight">{author}</h4>
        <p className="text-finacc-palm text-[9px] font-bold uppercase tracking-widest mt-0.5 sans-serif opacity-80 leading-tight">{role}</p>
      </div>
    </div>
    
    <p className="text-gray-200 font-light leading-relaxed flex-grow text-base italic mb-6 relative z-10 font-serif">
      {quote}
    </p>
    
    <div className="flex text-finacc-palm gap-1 mt-auto pt-5 border-t border-white/5">
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
  
  const testimonials = [
    {
      quote: "A Dupla Aliança é um parceiro fundamental. A gestão de RH e contabilidade é impecável, permitindo-nos focar apenas na produção.",
      author: "Carlos Fernandes",
      role: "Gerente, Indústria Têxtil",
      img: "https://i.pravatar.cc/150?u=carlos"
    },
    {
      quote: "Competência e profissionalismo extremo. Ajudaram-me a estruturar a minha empresa desde o primeiro dia com conselhos valiosos.",
      author: "Sofia Martins",
      role: "Arquitetura & Design",
      img: "https://i.pravatar.cc/150?u=sofia"
    },
    {
      quote: "Rigorosos nos prazos e muito claros na explicação das obrigações fiscais. Sinto que a minha empresa está segura.",
      author: "Pedro Gomes",
      role: "Empresário Restauração",
      img: "https://i.pravatar.cc/150?u=pedro"
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
    <section className="py-12 lg:py-16 bg-finacc-evergreen relative">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-8 lg:mb-12 reveal">
          <div>
            <h4 className="text-finacc-palm font-bold uppercase tracking-[0.4em] text-[10px] mb-2 sans-serif">Depoimentos</h4>
            <h2 className="text-2xl lg:text-3xl font-medium text-white tracking-tight">A voz dos nossos <span className="italic text-finacc-palm font-serif">Parceiros</span></h2>
          </div>
          <div className="hidden md:flex gap-2">
             <button onClick={() => scrollToSlide(Math.max(0, activeIndex - 1))} className="p-2 border border-white/10 text-white hover:bg-finacc-palm hover:border-finacc-palm transition-all rounded-full"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg></button>
             <button onClick={() => scrollToSlide(Math.min(testimonials.length - 1, activeIndex + 1))} className="p-2 border border-white/10 text-white hover:bg-finacc-palm hover:border-finacc-palm transition-all rounded-full"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg></button>
          </div>
        </div>

        <div className="hidden lg:grid grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <TestimonialCard key={idx} {...t} />
          ))}
        </div>

        {/* Versão Mobile */}
        <div className="lg:hidden relative">
          <div 
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide gap-4 pb-6"
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
          
          <div className="flex justify-center gap-2 mt-0">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => scrollToSlide(idx)}
                aria-label={`Ir para testemunho ${idx + 1}`}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  activeIndex === idx ? 'w-6 bg-finacc-palm' : 'w-1.5 bg-white/20'
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
