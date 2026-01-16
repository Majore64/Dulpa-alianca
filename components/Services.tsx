
import React from 'react';
import { PageType } from '../App';

interface ServicesProps {
  onNavigate: (page: PageType, hash?: string) => void;
}

const ServiceCard: React.FC<{ 
  id: string; 
  title: string; 
  desc: string; 
  icon: React.ReactNode; 
  delay: number;
  onClick: () => void;
}> = ({ id, title, desc, icon, delay, onClick }) => (
  <article 
    id={id}
    onClick={onClick}
    className="bg-white p-6 border-t-2 border-transparent hover:border-finacc-palm shadow-subtle hover:shadow-elegant transition-all duration-500 reveal h-full flex flex-col group rounded-sm cursor-pointer"
    style={{ transitionDelay: `${delay}ms` }}
  >
    <div className="w-10 h-10 bg-finacc-cream rounded-lg flex items-center justify-center text-finacc-evergreen mb-5 group-hover:bg-finacc-palm group-hover:text-finacc-evergreen transition-all duration-500">
      {icon}
    </div>
    <h3 className="text-lg lg:text-xl font-serif font-medium text-finacc-evergreen mb-3">{title}</h3>
    <p className="text-gray-600 mb-5 text-xs lg:text-sm leading-relaxed flex-grow font-light sans-serif">{desc}</p>
    
    <button className="inline-flex items-center gap-2 font-bold text-[9px] uppercase tracking-[0.2em] text-finacc-palm group-hover:text-finacc-evergreen transition-colors sans-serif mt-auto border-b border-transparent group-hover:border-finacc-evergreen pb-1 w-max">
      Saber Mais
      <svg className="w-3 h-3 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
    </button>
  </article>
);

export const Services: React.FC<ServicesProps> = ({ onNavigate }) => {
  const data = [
    { 
      id: "contabilidade", 
      title: "Contabilidade", 
      desc: "Serviços contabilísticos personalizados para empresas e particulares, com rigor técnico e acompanhamento contínuo das operações financeiras.", 
      icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg> 
    },
    { 
      id: "fiscalidade", 
      title: "Gestão Fiscal", 
      desc: "Cumprimento rigoroso de todas as obrigações legais e fiscais, otimização tributária e planeamento estratégico para maximizar benefícios.", 
      icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg> 
    },
    { 
      id: "rh", 
      title: "Recursos Humanos", 
      desc: "Gestão integrada de RH oferecendo soluções completas para as necessidades empresariais e proteção dos colaboradores.", 
      icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg> 
    },
    { 
      id: "consultoria", 
      title: "Consultoria Financeira", 
      desc: "Análise estratégica, planeamento de investimentos, avaliação de empresas e otimização de fluxos de caixa.", 
      icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" /></svg> 
    },
    { 
      id: "auditoria", 
      title: "Auditoria", 
      desc: "Validação independente e sistemática das suas demonstrações financeiras, garantindo fiabilidade e conformidade.", 
      icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg> 
    },
    { 
      id: "revisao-legal", 
      title: "Revisão Legal de Contas", 
      desc: "Cumprimento das obrigações legais, assegurando transparência e credibilidade das informações financeiras.", 
      icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" /></svg> 
    },
  ];

  return (
    <section className="py-12 lg:py-16 bg-finacc-cream relative">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 lg:mb-12 reveal">
          <div className="max-w-2xl">
            {/* Header semântico corrigido: H2 é o título principal da secção, o "O Que Fazemos" é visual */}
            <p className="text-finacc-palm font-bold uppercase tracking-[0.3em] text-[10px] mb-3 sans-serif">O Que Fazemos</p>
            <h2 className="text-2xl sm:text-3xl lg:text-3xl font-medium text-finacc-evergreen">Soluções Corporativas Integradas</h2>
          </div>
          <div className="hidden md:block w-16 h-0.5 bg-finacc-palm/30 mb-1"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {data.map((s, i) => (
            <ServiceCard 
              key={s.id} 
              {...s} 
              delay={i * 100} 
              onClick={() => onNavigate('services', s.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
