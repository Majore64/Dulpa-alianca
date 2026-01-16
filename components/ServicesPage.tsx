
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
}> = ({ id, title, description, items, number, imageUrl, isEven = false, onNavigate }) => {

  // Construção do SRCSET para responsividade usando a URL do Cloudinary fornecida
  // Assumindo formato padrão do Cloudinary: /image/upload/v...
  // Injetamos transformações w_ antes do /v
  const parts = imageUrl.split('/upload/');
  const baseUrl = parts[0] + '/upload';
  const restUrl = parts[1];
  
  const srcSet = `
    ${baseUrl}/w_400,f_auto,q_auto/${restUrl} 400w,
    ${baseUrl}/w_800,f_auto,q_auto/${restUrl} 800w,
    ${baseUrl}/w_1200,f_auto,q_auto/${restUrl} 1200w
  `;
  
  // Imagem principal com limite de largura para evitar carregamento excessivo
  const mainSrc = `${baseUrl}/w_800,f_auto,q_auto/${restUrl}`;

  return (
    // Aumentado padding vertical para py-28 lg:py-40
    <div id={id} className={`py-28 lg:py-40 scroll-mt-28 reveal ${isEven ? 'bg-[#FDFCF8]' : 'bg-white'}`}>
      <div className="container mx-auto px-6 lg:px-12">
        <div className={`flex flex-col ${isEven ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-16 lg:gap-32 items-center`}>
          
          {/* Lado do Conteúdo (Texto e Lista) */}
          <div className="w-full lg:w-1/2">
            <div className="flex items-center gap-6 mb-8">
              <span className="text-finacc-palm font-serif text-6xl opacity-10 font-bold">
                {number}
              </span>
              <div className="h-px w-24 bg-finacc-evergreen/10"></div>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-medium text-finacc-evergreen font-serif mb-8">{title}</h2>
            
            <p className="text-xl text-gray-600 font-light mb-12 leading-loose sans-serif max-w-xl">
              {description}
            </p>

            <div className="space-y-6 mb-14">
              {items.map((item, idx) => (
                <div key={idx} className="flex items-start gap-5 group">
                  <div className="w-1.5 h-1.5 bg-finacc-palm mt-2.5 rounded-full group-hover:scale-150 transition-transform flex-shrink-0 opacity-60"></div>
                  <span className="text-gray-700 font-light sans-serif text-lg">{item}</span>
                </div>
              ))}
            </div>
            
            <div>
              <button 
                onClick={() => onNavigate('contact', 'formulario')}
                className="inline-flex items-center gap-3 text-finacc-evergreen font-bold uppercase tracking-widest text-xs border-b-2 border-finacc-evergreen/20 pb-2 hover:text-finacc-palm hover:border-finacc-palm transition-all sans-serif pt-2"
              >
                Pedir Proposta Personalizada
              </button>
            </div>
          </div>

          {/* Lado da Imagem (Visual) */}
          <div className="w-full lg:w-1/2">
            <div className="relative p-4">
              {/* Moldura mais subtil e afastada */}
              <div className={`absolute top-0 -right-0 w-full h-full border border-finacc-evergreen/5 z-0 ${isEven ? 'left-0' : '-right-0'}`}></div>
              {/* Lazy loading aplicado para performance e srcset para responsividade */}
              <img 
                  src={mainSrc}
                  srcSet={srcSet}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  alt={`Serviço de ${title} prestado pela Dupla Aliança em Guimarães`} 
                  width="600"
                  height="400"
                  className="relative z-10 w-full h-full object-cover aspect-[16/11] shadow-2xl grayscale-[5%] hover:grayscale-0 transition-all duration-1000 rounded-sm"
                  loading="lazy"
                  decoding="async"
                />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

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
      {/* Header - Aumentado padding */}
      <header className="text-center py-20 lg:py-28 px-6 bg-finacc-cream border-b border-gray-100">
        {/* H4 -> P */}
        <p className="text-finacc-palm font-bold uppercase tracking-[0.4em] text-xs mb-8 sans-serif animate-fade-in-up opacity-0">O Que Fazemos</p>
        <h1 className="text-5xl lg:text-7xl font-medium text-finacc-evergreen mb-8 font-serif animate-fade-in-up delay-100 opacity-0">Nossos Serviços</h1>
        <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto font-light sans-serif leading-relaxed animate-fade-in-up delay-200 opacity-0">
          Expandimos a nossa oferta para proporcionar um apoio ainda mais abrangente, garantindo a solidez e o crescimento estratégico do seu negócio.
        </p>
      </header>

      {/* Navegação Rápida - Mais espaço */}
      <nav className="z-40 bg-white/95 backdrop-blur-md border-b border-gray-100 py-6 mb-4 overflow-x-auto sticky top-[72px] lg:static animate-fade-in delay-300 opacity-0">
        <div className="container mx-auto px-6 flex gap-8 md:gap-16 justify-start md:justify-center min-w-max">
          {navLinks.map(link => (
            <a 
              key={link.id}
              href={`#${link.id}`} 
              onClick={(e) => { e.preventDefault(); document.getElementById(link.id)?.scrollIntoView({behavior: 'smooth'}); }} 
              className="relative group text-xs font-bold text-gray-400 hover:text-finacc-palm uppercase tracking-widest transition-colors sans-serif whitespace-nowrap py-2"
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

      <div className="bg-finacc-evergreen text-white text-center py-32 reveal">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl lg:text-5xl font-medium mb-8 font-serif text-white">Precisa de uma solução à medida?</h2>
          <p className="mb-12 max-w-2xl mx-auto text-gray-300 font-light sans-serif text-xl leading-relaxed">
            Cada empresa é única. Agende uma reunião connosco para analisarmos as suas necessidades específicas.
          </p>
          <button 
            onClick={() => onNavigate('contact', 'formulario')}
            className="bg-finacc-palm text-white px-12 py-5 font-bold uppercase tracking-widest hover:bg-white hover:text-finacc-evergreen transition-all shadow-xl text-xs rounded-sm transform hover:-translate-y-1"
          >
            Falar com Especialista
          </button>
        </div>
      </div>
    </div>
  );
};
