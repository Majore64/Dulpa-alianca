
import React, { useEffect } from 'react';
import { PageType } from '../App';

interface AboutPageProps {
  onNavigate: (page: PageType, hash?: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Base URL e Path
  const baseUrl = "https://res.cloudinary.com/dsxketzvb/image/upload";
  const imagePath = "/v1768555596/IMG_4504_qdtzo6.jpg";
  
  // SrcSet responsivo com transformações Cloudinary
  const aboutPageMainImageSrcSet = `
    ${baseUrl}/w_400,f_auto,q_auto${imagePath} 400w,
    ${baseUrl}/w_800,f_auto,q_auto${imagePath} 800w,
    ${baseUrl}/w_1200,f_auto,q_auto${imagePath} 1200w
  `;

  const values = [
    {
      title: "Adaptabilidade Total",
      desc: "Compreendemos que cada cliente é único. Adaptamos os nossos serviços às necessidades específicas do seu negócio, seja uma startup, PME ou empresa consolidada.",
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" /></svg>
    },
    {
      title: "Atendimento Personalizado",
      desc: "Disponibilizamos soluções à medida, com acompanhamento próximo e dedicado. O seu sucesso é a nossa prioridade, e trabalhamos para construir relações duradouras.",
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
    },
    {
      title: "Inovação e Estratégia",
      desc: "A nossa filosofia de trabalho combina pensamento estratégico com as mais recentes ferramentas tecnológicas, garantindo eficiência e competitividade ao seu negócio.",
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
    }
  ];

  const teamMembers = [
    { 
      name: "Ana Machado", 
      role: "Economista\nContabilista Certificada\nRevisora Oficial de Contas", 
      desc: "Especialista em auditoria e consultoria financeira estratégica.",
      image: "https://res.cloudinary.com/dsxketzvb/image/upload/w_300,h_300,c_fill,g_face,f_auto,q_auto/v1769006623/PHOTO-2025-10-27-18-00-49_1_dlp6xe.jpg"
    },
    { 
      name: "Cristiana Fernandes", 
      role: "Técnica de Auditoria\nTécnica de Contabilidade\nMediadora de Seguros", 
      desc: "Focada em soluções integradas e gestão de pessoas.",
      image: null
    },
    { 
      name: "Fernando Saraiva", 
      role: "Economista\nContabilista Sénior", 
      desc: "Especializado em gestão contabilística e conformidade fiscal.",
      image: null
    }
  ];

  // Helper para obter as iniciais (ex: Fernando Saraiva -> FS)
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(part => part[0])
      .join('')
      .substring(0, 2)
      .toUpperCase();
  };

  return (
    <div className="bg-finacc-cream pt-24 pb-20 animate-fade-in">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 bg-white mb-20 lg:mb-32 border-b border-gray-100">
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-4xl">
            <p className="text-finacc-palm font-bold uppercase tracking-[0.4em] text-xs mb-8 sans-serif animate-fade-in-up opacity-0">A Nossa Essência</p>
            <h1 className="text-4xl lg:text-7xl font-medium text-finacc-evergreen mb-10 leading-tight font-serif animate-fade-in-up delay-100 opacity-0">
              Mais do que números,<br />somos a sua <span className="italic text-finacc-palm">Dupla Aliança</span>.
            </h1>
            <p className="text-xl lg:text-2xl text-gray-500 font-light max-w-3xl leading-relaxed sans-serif animate-fade-in-up delay-200 opacity-0">
              Desde 2003 a apoiar empresas em Guimarães com soluções integradas de contabilidade, fiscalidade e consultoria de elite.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-6 lg:px-12">
        {/* Quem Somos */}
        <section className="mb-32 lg:mb-40 flex flex-col lg:flex-row gap-16 lg:gap-24 items-center reveal">
          <div className="w-full lg:w-1/2 relative">
            <div className="absolute top-6 -left-6 w-full h-full border border-finacc-palm/20 z-0 rounded-sm"></div>
            <img 
              src={`${baseUrl}/w_800,f_auto,q_auto${imagePath}`}
              srcSet={aboutPageMainImageSrcSet}
              sizes="(max-width: 1024px) 100vw, 50vw"
              alt="Instalações do escritório de contabilidade Dupla Aliança em Guimarães" 
              width="800"
              height="600"
              className="relative z-10 shadow-elegant rounded-sm object-cover w-full aspect-[4/3] brightness-[1.02] contrast-[1.02]"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl lg:text-4xl font-medium text-finacc-evergreen mb-10 font-serif">Quem Somos</h2>
            <div className="space-y-8 text-gray-600 text-lg leading-loose font-light sans-serif text-justify hyphens-auto">
              <p>
                A <strong>Dupla Aliança Lda</strong> é uma empresa especializada em <span onClick={() => onNavigate('services')} className="text-finacc-palm hover:underline font-medium cursor-pointer focus:outline-none" role="button" tabIndex={0} onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && onNavigate('services')}>contabilidade, fiscalidade e recursos humanos</span>, dedicada a fornecer soluções financeiras personalizadas e estratégicas.
              </p>
              <p>
                O nosso compromisso assenta em três pilares fundamentais: qualidade irrepreensível nos serviços prestados, competência técnica da nossa equipa e confidencialidade absoluta na gestão da informação dos nossos clientes.
              </p>
              <p>
                Com experiência sólida no mercado, apoiamos empresas e particulares nas suas decisões financeiras mais importantes, garantindo segurança, conformidade legal e crescimento sustentável.
              </p>
            </div>
          </div>
        </section>

        {/* Valores */}
        <section className="mb-32 lg:mb-40 reveal">
          {/* CORREÇÃO AQUI: items-end alterado para items-start md:items-end */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 border-b border-gray-200 pb-8">
            <h2 className="text-3xl lg:text-4xl font-medium text-finacc-evergreen font-serif mb-4 md:mb-0">Os Nossos Valores</h2>
            <p className="text-gray-500 sans-serif text-sm tracking-wide">Porque Escolher a Dupla Aliança?</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12 mb-20">
            {values.map((v, i) => (
              <div key={i} className={`bg-white p-10 border border-transparent hover:border-finacc-palm/30 shadow-subtle hover:shadow-elegant hover:-translate-y-2 transition-all duration-500 group relative overflow-hidden rounded-sm reveal delay-${i * 100 + 100}`}>
                <div className="absolute top-0 right-0 w-24 h-24 bg-finacc-palm/5 rounded-bl-full -mr-12 -mt-12 transition-transform group-hover:scale-150 duration-700"></div>

                <div className="w-14 h-14 bg-finacc-cream text-finacc-palm rounded-full flex items-center justify-center mb-8 group-hover:bg-finacc-palm group-hover:text-white transition-colors duration-300 relative z-10 shadow-sm">
                  {v.icon}
                </div>
                <h3 className="text-xl lg:text-2xl font-medium text-finacc-evergreen mb-5 font-serif transition-colors duration-300 relative z-10">{v.title}</h3>
                <p className="text-gray-500 text-base leading-relaxed font-light sans-serif transition-colors duration-300 relative z-10 text-justify hyphens-auto">{v.desc}</p>
              </div>
            ))}
          </div>

          {/* Citação Schopenhauer */}
          <div className="bg-white p-12 lg:p-20 border border-gray-100 shadow-sm relative overflow-hidden rounded-sm reveal">
            <div className="absolute top-0 right-0 w-40 h-40 bg-finacc-palm/5 rounded-bl-[100px]"></div>
            <div className="flex flex-col lg:flex-row gap-12 items-start relative z-10">
              <div className="text-finacc-palm opacity-80">
                 <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21L14.017 18C14.017 16.054 15.192 14.791 17.479 13.714C16.891 13.914 16.326 14.004 15.823 14.004C13.204 14.004 11 11.758 11 8.987C11 6.233 13.155 4 15.823 4C18.491 4 20.647 6.233 20.647 8.987C20.647 13.684 17.309 18.397 14.017 21ZM4.017 21L4.017 18C4.017 16.054 5.192 14.791 7.479 13.714C6.891 13.914 6.326 14.004 5.823 14.004C3.204 14.004 1 11.758 1 8.987C1 6.233 3.155 4 5.823 4C8.491 4 10.647 6.233 10.647 8.987C10.647 13.684 7.309 18.397 4.017 21Z"/></svg>
              </div>
              <div className="flex-1">
                <blockquote className="mb-8">
                  <p className="text-2xl lg:text-4xl font-serif text-finacc-evergreen italic leading-relaxed mb-8">
                    "A tarefa não é tanto ver aquilo que ninguém viu, mas pensar o que ainda ninguém pensou sobre aquilo que todo mundo vê."
                  </p>
                  <footer className="flex items-center gap-4">
                    <div className="h-px w-16 bg-finacc-palm"></div>
                    <cite className="text-finacc-palm font-bold uppercase tracking-widest text-xs sans-serif not-italic">Arthur Schopenhauer</cite>
                  </footer>
                </blockquote>
                <p className="text-gray-600 font-light leading-relaxed sans-serif max-w-2xl border-l-2 border-gray-100 pl-8 py-2 text-lg text-justify hyphens-auto">
                  Esta filosofia inspira a nossa abordagem: olhamos para os desafios dos nossos clientes com uma perspetiva inovadora.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Equipa */}
        <section className="bg-finacc-evergreen p-12 lg:p-24 text-white relative overflow-hidden mb-32 rounded-sm reveal">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
          
          <div className="relative z-10">
            <div className="mb-16 max-w-3xl">
              <p className="text-finacc-palm font-bold uppercase tracking-[0.2em] text-xs mb-6 sans-serif">Equipa</p>
              <h2 className="text-3xl lg:text-5xl font-serif mb-8 text-white">A Nossa Equipa de Especialistas</h2>
              <p className="text-gray-300 leading-relaxed font-light sans-serif text-xl max-w-2xl text-justify hyphens-auto">
                Profissionais qualificados e experientes, dedicados a oferecer o melhor serviço aos nossos clientes.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {/* Cards de Equipa */}
              {teamMembers.map((member, idx) => (
                <div key={idx} className={`bg-white/5 p-10 border border-white/10 hover:bg-white/10 hover:border-white/20 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 rounded-sm group flex flex-col h-full reveal delay-${(idx + 1) * 100}`}>
                  
                  {/* Se existir imagem, mostra a foto. Se não, mostra iniciais num círculo para manter layout consistente */}
                  {member.image ? (
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-24 h-24 rounded-full object-cover mb-6 border-2 border-finacc-palm/20 shadow-lg"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-24 h-24 rounded-full bg-white/5 border-2 border-finacc-palm/20 flex items-center justify-center mb-6 shadow-lg group-hover:border-finacc-palm/40 transition-colors">
                      <span className="text-2xl font-serif text-finacc-palm font-bold tracking-wider">
                        {getInitials(member.name)}
                      </span>
                    </div>
                  )}

                  <h3 className="text-2xl font-medium text-white mb-6 font-serif">{member.name}</h3>
                  <div className="mb-6 flex-grow">
                    <p className="text-finacc-palm text-xs font-bold uppercase tracking-widest leading-loose sans-serif whitespace-pre-line">
                      {member.role}
                    </p>
                  </div>
                  <div className="h-px w-8 bg-white/10 mb-6 group-hover:w-16 transition-all duration-500"></div>
                  <p className="text-gray-400 text-sm font-light leading-relaxed sans-serif group-hover:text-gray-300 transition-colors text-justify hyphens-auto">
                    {member.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="bg-white py-24 px-6 lg:px-12 text-center border-t border-gray-100 reveal">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-5xl font-medium text-finacc-evergreen mb-8 font-serif">Pronto para dar o próximo passo?</h2>
            <p className="text-gray-500 mb-12 text-lg lg:text-xl font-light sans-serif leading-relaxed">
              Agende uma reunião connosco e descubra como podemos otimizar a gestão da sua empresa com transparência e rigor.
            </p>
            <button 
              onClick={() => onNavigate('contact', 'formulario')} 
              className="bg-finacc-palm text-white px-12 py-5 font-bold uppercase tracking-widest hover:bg-finacc-evergreen transition-all shadow-xl text-xs rounded-sm transform hover:-translate-y-1"
            >
              Fale Connosco Agora
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};
