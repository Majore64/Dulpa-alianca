
import React from 'react';
import { PageType } from '../App';

interface ServicesPageProps {
  onNavigate: (page: PageType, hash?: string) => void;
}

const ServiceSection: React.FC<{ 
  id: string; 
  title: string; 
  description: string; 
  items: string[];
  number: string;
  imageUrl: string;
  isEven?: boolean;
  onNavigate: (page: PageType, hash?: string) => void;
}> = ({ id, title, description, items, number, imageUrl, isEven = false, onNavigate }) => (
  <div id={id} className={`py-20 lg:py-24 scroll-mt-28 reveal ${isEven ? 'bg-finacc-cream' : 'bg-white'}`}>
    <div className="container mx-auto px-6 lg:px-12">
      <div className={`flex flex-col ${isEven ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-24 items-center`}>
        
        {/* Lado do Conteúdo (Texto e Lista) */}
        <div className="w-full lg:w-1/2">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-finacc-palm font-serif text-5xl opacity-20 font-bold">
               {number}
            </span>
            <div className="h-px w-16 bg-finacc-evergreen/20"></div>
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-medium text-finacc-evergreen font-serif mb-6">{title}</h2>
          
          <p className="text-lg text-gray-600 font-light mb-8 leading-relaxed sans-serif">
            {description}
          </p>

          <div className="space-y-4 mb-10">
            {items.map((item, idx) => (
              <div key={idx} className="flex items-start gap-4 group">
                <div className="w-1.5 h-1.5 bg-finacc-palm mt-2.5 rounded-full group-hover:scale-150 transition-transform flex-shrink-0"></div>
                <span className="text-gray-700 font-light sans-serif text-base">{item}</span>
              </div>
            ))}
          </div>
          
          <div>
            <button 
              onClick={() => onNavigate('contact', 'formulario')}
              className="inline-flex items-center gap-3 text-finacc-evergreen font-bold uppercase tracking-widest text-xs border-b border-finacc-evergreen pb-1 hover:text-finacc-palm hover:border-finacc-palm transition-colors sans-serif"
            >
              Pedir Proposta
            </button>
          </div>
        </div>

        {/* Lado da Imagem (Visual) */}
        <div className="w-full lg:w-1/2">
          <div className="relative">
             <div className={`absolute top-4 -right-4 w-full h-full border border-finacc-evergreen/10 z-0 ${isEven ? 'left-4' : '-right-4'}`}></div>
             <img 
                src={imageUrl} 
                alt={title} 
                className="relative z-10 w-full h-full object-cover aspect-[16/10] shadow-lg grayscale-[15%] hover:grayscale-0 transition-all duration-700 rounded-sm"
                loading="lazy"
              />
          </div>
        </div>

      </div>
    </div>
  </div>
);

export const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate }) => {
  const navLinks = [
    { id: 'contabilidade', label: 'Contabilidade' },
    { id: 'fiscalidade', label: 'Fiscalidade' },
    { id: 'rh', label: 'RH' },
    { id: 'consultoria', label: 'Consultoria' },
    { id: 'auditoria', label: 'Auditoria' },
    { id: 'revisao-legal', label: 'Revisão Legal' },
  ];

  return (
    <div className="pt-24 animate-fade-in bg-white">
      <header className="text-center py-20 px-6 bg-finacc-cream border-b border-gray-200">
        <h4 className="text-finacc-palm font-bold uppercase tracking-[0.4em] text-xs mb-6 sans-serif animate-fade-in-up opacity-0">O Que Fazemos</h4>
        <h1 className="text-4xl lg:text-6xl font-medium text-finacc-evergreen mb-6 font-serif animate-fade-in-up delay-100 opacity-0">Nossos Serviços</h1>
        <p className="text-xl text-gray-600 max-w-4xl mx-auto font-light sans-serif leading-relaxed animate-fade-in-up delay-200 opacity-0">
          Expandimos a nossa oferta para proporcionar um apoio ainda mais abrangente, garantindo a solidez e o crescimento estratégico do seu negócio.
        </p>
      </header>

      {/* Navegação Rápida Interna - Sticky + Z-Index fix */}
      <nav className="z-40 bg-white/95 backdrop-blur-md border-b border-gray-100 py-4 mb-4 overflow-x-auto sticky top-[72px] lg:static animate-fade-in delay-300 opacity-0">
        <div className="container mx-auto px-6 flex gap-8 md:gap-12 justify-start md:justify-center min-w-max">
          {navLinks.map(link => (
            <a 
              key={link.id}
              href={`#${link.id}`} 
              onClick={(e) => { e.preventDefault(); document.getElementById(link.id)?.scrollIntoView({behavior: 'smooth'}); }} 
              className="relative group text-xs font-bold text-gray-500 hover:text-finacc-palm uppercase tracking-widest transition-colors sans-serif whitespace-nowrap py-2"
            >
              {link.label}
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-finacc-palm transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </a>
          ))}
        </div>
      </nav>

      <ServiceSection 
        id="contabilidade"
        number="01"
        title="Contabilidade"
        description="Serviços contabilísticos personalizados para empresas e particulares, com rigor técnico e acompanhamento contínuo das operações financeiras."
        imageUrl="https://res.cloudinary.com/dsxketzvb/image/upload/v1768573606/business-desk-with-keyboard-report-graph-chart-pen-tablet-white-table_u5du52.jpg"
        items={[
          "Execução de contabilidade geral e analítica",
          "Preparação de demonstrações financeiras mensais e anuais",
          "Recuperação de contabilidades e regularização de escrita",
          "Acompanhamento e apoio à gestão corrente"
        ]}
        onNavigate={onNavigate}
      />

      <ServiceSection 
        id="fiscalidade"
        number="02"
        title="Gestão Fiscal"
        description="Cumprimento rigoroso de todas as obrigações legais e fiscais, otimização tributária e planeamento estratégico para maximizar benefícios."
        imageUrl="https://res.cloudinary.com/dsxketzvb/image/upload/v1768573609/finances-saving-economy-concept-female-accountant-banker-use-calculator_fwyr9l.jpg"
        isEven={true}
        items={[
          "Planeamento e otimização fiscal (IRC, IRS, IVA)",
          "Gestão de benefícios fiscais e incentivos ao investimento",
          "Preços de transferência e fiscalidade internacional",
          "Acompanhamento de inspeções tributárias"
        ]}
        onNavigate={onNavigate}
      />

      <ServiceSection 
        id="rh"
        number="03"
        title="Recursos Humanos"
        description="Gestão integrada de RH oferecendo soluções completas para as necessidades empresariais e proteção dos colaboradores."
        imageUrl="https://res.cloudinary.com/dsxketzvb/image/upload/v1768573615/top-view-females-shaking-hands_hqfirg.jpg"
        items={[
          "Processamento salarial e gestão administrativa de pessoal",
          "Cumprimento de obrigações perante a Segurança Social e AT",
          "Gestão contratual e mapas de pessoal",
          "Apoio na legislação laboral e conformidade legal"
        ]}
        onNavigate={onNavigate}
      />

      <ServiceSection 
        id="consultoria"
        number="04"
        title="Consultoria Financeira"
        description="Análise estratégica, planeamento de investimentos, avaliação de empresas e otimização de fluxos de caixa para decisões financeiras informadas e rentáveis."
        imageUrl="https://res.cloudinary.com/dsxketzvb/image/upload/v1768573613/teamwork-scene-close-up_jklnrp.jpg"
        isEven={true}
        items={[
          "Elaboração de Planos de Negócio e Estudos de Viabilidade",
          "Avaliação de empresas e projetos de investimento",
          "Reestruturação financeira e otimização de tesouraria",
          "Apoio a candidaturas de fundos comunitários"
        ]}
        onNavigate={onNavigate}
      />

      <ServiceSection 
        id="auditoria"
        number="05"
        title="Auditoria"
        description="Validação independente e sistemática das suas demonstrações financeiras, garantindo a sua fiabilidade e conformidade com as normas contabilísticas nacionais e internacionais."
        imageUrl="https://res.cloudinary.com/dsxketzvb/image/upload/v1768573609/office-account-results-corporate-paper-explaining_zvrsvc.jpg"
        items={[
          "Auditoria às demonstrações financeiras",
          "Revisão dos sistemas de controlo interno",
          "Auditorias específicas e de procedimentos acordados",
          "Verificação da conformidade legal e normativa"
        ]}
        onNavigate={onNavigate}
      />

       <ServiceSection 
        id="revisao-legal"
        number="06"
        title="Revisão Legal de Contas"
        description="Cumprimento das obrigações legais de revisão de contas, assegurando a transparência e a credibilidade das suas informações financeiras perante todas as partes interessadas."
        imageUrl="https://res.cloudinary.com/dsxketzvb/image/upload/v1768573609/businessman-using-calculator_i4auos.jpg"
        isEven={true}
        items={[
          "Certificação legal das contas anuais",
          "Emissão de pareceres do Revisor Oficial de Contas",
          "Garantia de transparência para stakeholders e banca",
          "Verificação da regularidade fiscal e contabilística"
        ]}
        onNavigate={onNavigate}
      />

      <div className="bg-finacc-evergreen text-white text-center py-20 reveal">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl lg:text-4xl font-medium mb-6 font-serif text-white">Precisa de uma solução à medida?</h2>
          <p className="mb-10 max-w-2xl mx-auto text-gray-300 font-light sans-serif text-lg">
            Cada empresa é única. Agende uma reunião connosco para analisarmos as suas necessidades específicas.
          </p>
          <button 
            onClick={() => onNavigate('contact', 'formulario')}
            className="bg-finacc-palm text-white px-10 py-4 font-bold uppercase tracking-widest hover:bg-white hover:text-finacc-evergreen transition-all shadow-lg text-xs"
          >
            Falar com Especialista
          </button>
        </div>
      </div>
    </div>
  );
};
