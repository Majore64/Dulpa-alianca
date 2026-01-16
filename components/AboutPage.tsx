
import React, { useEffect } from 'react';
import { PageType } from '../App';

interface AboutPageProps {
  onNavigate: (page: PageType, hash?: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Imagem atualizada para a secção Quem Somos
  const aboutPageMainImage = "https://res.cloudinary.com/dsxketzvb/image/upload/v1768555596/IMG_4504_qdtzo6.jpg";

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

  return (
    <div className="bg-finacc-cream pt-24 pb-20 animate-fade-in">
      {/* Hero Section */}
      <section className="relative py-20 bg-white mb-20 border-b border-gray-100">
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-4xl">
            <h4 className="text-finacc-palm font-bold uppercase tracking-[0.4em] text-xs mb-6 sans-serif animate-fade-in-up opacity-0">A Nossa Essência</h4>
            <h1 className="text-4xl lg:text-6xl font-medium text-finacc-evergreen mb-8 leading-tight font-serif animate-fade-in-up delay-100 opacity-0">
              Mais do que números,<br />somos a sua <span className="italic text-finacc-palm">Dupla Aliança</span>.
            </h1>
            <p className="text-xl text-gray-500 font-light max-w-2xl leading-relaxed sans-serif animate-fade-in-up delay-200 opacity-0">
              Desde 2003 a apoiar empresas em Guimarães com soluções integradas de contabilidade, fiscalidade e consultoria de elite.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-6 lg:px-12">
        {/* Quem Somos */}
        <section className="mb-24 flex flex-col lg:flex-row gap-16 items-start reveal">
          <div className="w-full lg:w-1/2 relative">
            <div className="absolute top-4 -left-4 w-full h-full border border-finacc-palm/30 z-0"></div>
            <img 
              src={aboutPageMainImage} 
              alt="Escritório Dupla Aliança" 
              className="relative z-10 shadow-elegant rounded-sm object-cover w-full aspect-[4/3] brightness-[1.02] contrast-[1.02]"
            />
          </div>
          <div className="w-full lg:w-1/2 pt-8">
            <h2 className="text-3xl font-medium text-finacc-evergreen mb-8 font-serif">Quem Somos</h2>
            <div className="space-y-6 text-gray-600 text-lg leading-relaxed font-light sans-serif">
              <p>
                A <strong>Dupla Aliança Lda</strong> é uma empresa especializada em contabilidade, fiscalidade e recursos humanos, dedicada a fornecer soluções financeiras personalizadas e estratégicas.
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
        <section className="mb-24 reveal">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-gray-200 pb-6">
            <h2 className="text-3xl font-medium text-finacc-evergreen font-serif">Os Nossos Valores</h2>
            <p className="text-gray-500 sans-serif text-sm">Porque Escolher a Dupla Aliança?</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {values.map((v, i) => (
              <div key={i} className={`bg-white p-8 border-t-2 border-finacc-palm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group hover:bg-finacc-evergreen relative overflow-hidden rounded-sm reveal delay-${i * 100 + 100}`}>
                {/* Elemento decorativo no hover */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-white/5 rounded-bl-full -mr-10 -mt-10 transition-transform group-hover:scale-150 duration-700"></div>

                <div className="w-12 h-12 bg-finacc-cream text-finacc-palm rounded-full flex items-center justify-center mb-6 group-hover:bg-finacc-palm group-hover:text-white transition-colors duration-300 relative z-10 shadow-sm">
                  {v.icon}
                </div>
                <h3 className="text-xl font-medium text-finacc-evergreen mb-4 font-serif group-hover:text-white transition-colors duration-300 relative z-10">{v.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed font-light sans-serif group-hover:text-gray-300 transition-colors duration-300 relative z-10">{v.desc}</p>
              </div>
            ))}
          </div>

          {/* Citação Schopenhauer */}
          <div className="bg-white p-10 lg:p-14 border border-gray-100 shadow-sm relative overflow-hidden rounded-sm reveal">
            <div className="absolute top-0 right-0 w-32 h-32 bg-finacc-palm/10 rounded-bl-[100px]"></div>
            <div className="flex flex-col lg:flex-row gap-10 items-start relative z-10">
              {/* Ícone com cor sólida e sem transparência baixa para destacar no fundo cinza/branco */}
              <div className="text-finacc-palm">
                 <svg className="w-16 h-16 drop-shadow-sm" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21L14.017 18C14.017 16.054 15.192 14.791 17.479 13.714C16.891 13.914 16.326 14.004 15.823 14.004C13.204 14.004 11 11.758 11 8.987C11 6.233 13.155 4 15.823 4C18.491 4 20.647 6.233 20.647 8.987C20.647 13.684 17.309 18.397 14.017 21ZM4.017 21L4.017 18C4.017 16.054 5.192 14.791 7.479 13.714C6.891 13.914 6.326 14.004 5.823 14.004C3.204 14.004 1 11.758 1 8.987C1 6.233 3.155 4 5.823 4C8.491 4 10.647 6.233 10.647 8.987C10.647 13.684 7.309 18.397 4.017 21Z"/></svg>
              </div>
              <div className="flex-1">
                <blockquote className="mb-6">
                  <p className="text-2xl lg:text-3xl font-serif text-finacc-evergreen italic leading-relaxed mb-6">
                    "A tarefa não é tanto ver aquilo que ninguém viu, mas pensar o que ainda ninguém pensou sobre aquilo que todo mundo vê."
                  </p>
                  <footer className="flex items-center gap-4">
                    <div className="h-px w-12 bg-finacc-palm"></div>
                    <cite className="text-finacc-palm font-bold uppercase tracking-widest text-xs sans-serif not-italic">Arthur Schopenhauer</cite>
                  </footer>
                </blockquote>
                <p className="text-gray-600 font-light leading-relaxed sans-serif max-w-2xl border-l-2 border-gray-100 pl-6 py-2">
                  Esta filosofia inspira a nossa abordagem: olhamos para os desafios dos nossos clientes com uma perspetiva inovadora, encontrando soluções criativas onde outros veem apenas problemas convencionais.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Equipa */}
        <section className="bg-finacc-evergreen p-10 lg:p-20 text-white relative overflow-hidden mb-24 rounded-sm reveal">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
          
          <div className="relative z-10">
            <div className="mb-12 max-w-3xl">
              <h4 className="text-finacc-palm font-bold uppercase tracking-[0.2em] text-xs mb-6 sans-serif">Equipa</h4>
              {/* ADICIONADO text-white PARA SOBREPOR O ESTILO GLOBAL H2 */}
              <h2 className="text-3xl lg:text-4xl font-serif mb-6 text-white">A Nossa Equipa de Especialistas</h2>
              <p className="text-gray-300 leading-relaxed font-light sans-serif text-lg">
                Profissionais qualificados e experientes, dedicados a oferecer o melhor serviço aos nossos clientes.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Ana Machado */}
              <div className="bg-white/5 p-8 border border-white/10 hover:bg-white/10 hover:border-white/20 hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 rounded-sm group flex flex-col h-full reveal delay-100">
                <h3 className="text-xl font-medium text-white mb-4 font-serif">Ana Machado</h3>
                <div className="mb-4 flex-grow">
                  <p className="text-finacc-palm text-[10px] font-bold uppercase tracking-wider leading-relaxed sans-serif">
                    Economista<br/>Contabilista Certificada<br/>Revisora Oficial de Contas
                  </p>
                </div>
                <div className="h-px w-8 bg-white/10 mb-4 group-hover:w-16 transition-all duration-500"></div>
                <p className="text-gray-400 text-sm font-light leading-relaxed sans-serif group-hover:text-gray-300 transition-colors">
                  Especialista em auditoria e consultoria financeira estratégica.
                </p>
              </div>

              {/* Cristiana Fernandes */}
              <div className="bg-white/5 p-8 border border-white/10 hover:bg-white/10 hover:border-white/20 hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 rounded-sm group flex flex-col h-full reveal delay-200">
                <h3 className="text-xl font-medium text-white mb-4 font-serif">Cristiana Fernandes</h3>
                <div className="mb-4 flex-grow">
                  <p className="text-finacc-palm text-[10px] font-bold uppercase tracking-wider leading-relaxed sans-serif">
                    Técnica de Auditoria<br/>Técnica de Contabilidade<br/>Mediadora de Seguros
                  </p>
                </div>
                <div className="h-px w-8 bg-white/10 mb-4 group-hover:w-16 transition-all duration-500"></div>
                <p className="text-gray-400 text-sm font-light leading-relaxed sans-serif group-hover:text-gray-300 transition-colors">
                  Focada em soluções integradas e gestão de pessoas.
                </p>
              </div>

              {/* Fernando Saraiva */}
              <div className="bg-white/5 p-8 border border-white/10 hover:bg-white/10 hover:border-white/20 hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 rounded-sm group flex flex-col h-full reveal delay-300">
                <h3 className="text-xl font-medium text-white mb-4 font-serif">Fernando Saraiva</h3>
                <div className="mb-4 flex-grow">
                  <p className="text-finacc-palm text-[10px] font-bold uppercase tracking-wider leading-relaxed sans-serif">
                    Economista (RI)<br/>Contabilista Sénior
                  </p>
                </div>
                <div className="h-px w-8 bg-white/10 mb-4 group-hover:w-16 transition-all duration-500"></div>
                <p className="text-gray-400 text-sm font-light leading-relaxed sans-serif group-hover:text-gray-300 transition-colors">
                  Especializado em gestão contabilística e conformidade fiscal.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="bg-white p-16 text-center border border-gray-100 shadow-sm relative overflow-hidden reveal">
          <div className="relative z-10">
            <h2 className="text-3xl font-medium text-finacc-evergreen mb-6 font-serif">Pronto para dar o próximo passo?</h2>
            <p className="text-gray-500 mb-10 max-w-2xl mx-auto font-light sans-serif">
              Agende uma reunião connosco e descubra como podemos otimizar a gestão da sua empresa.
            </p>
            <button 
              onClick={() => onNavigate('home', 'contacto')} 
              className="bg-finacc-palm text-white px-10 py-4 font-bold uppercase tracking-widest hover:bg-finacc-evergreen transition-all shadow-lg text-xs transform hover:-translate-y-1"
            >
              Fale Connosco Agora
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};
