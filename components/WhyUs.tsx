
import React from 'react';

const Feature: React.FC<{ title: string; description: string; index: number }> = ({ title, description, index }) => (
  <div 
    className="flex gap-6 reveal opacity-0"
    style={{ transitionDelay: `${index * 150}ms` }}
  >
    <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-finacc-palm/20 text-finacc-palm flex items-center justify-center border border-finacc-palm/30 transition-all hover:bg-finacc-palm hover:text-white group shadow-lg">
      <svg className="w-7 h-7 transition-transform group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
    </div>
    <div>
      <h3 className="text-xl font-bold text-white mb-2 tracking-tight">{title}</h3>
      <p className="text-gray-300 leading-relaxed text-sm font-medium">{description}</p>
    </div>
  </div>
);

export const WhyUs: React.FC = () => {
  return (
    <section className="py-24 lg:py-32 overflow-hidden bg-finacc-evergreen">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            {/* Header fix: H4 -> P */}
            <p className="text-finacc-palm font-bold uppercase tracking-[0.4em] text-[10px] mb-6 reveal opacity-0">Diferenciais Dupla Aliança</p>
            {/* Header fix: H2 is correct here */}
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 reveal opacity-0 [transition-delay:100ms] leading-tight tracking-tight">
              Excelência e proximidade <br/><span className="playfair italic font-normal text-finacc-palm">desde 2003</span>
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-14">
              <Feature 
                index={1}
                title="Experiência" 
                description="Mais de 20 anos de atuação sólida no mercado de Guimarães e Braga."
              />
              <Feature 
                index={2}
                title="Multidisciplinar" 
                description="Equipa especializada em Contabilidade, Fiscalidade e Recursos Humanos."
              />
              <Feature 
                index={3}
                title="Localização" 
                description="Escritórios acessíveis em Azurém, junto ao polo universitário."
              />
              <Feature 
                index={4}
                title="Personalização" 
                description="Acompanhamento próximo de cada cliente, seja pequena ou média empresa."
              />
            </div>
          </div>

          <div className="w-full lg:w-1/2 order-1 lg:order-2 reveal opacity-0">
            <div className="relative group">
              <div className="absolute -inset-10 bg-finacc-palm/10 rounded-full blur-3xl opacity-50 group-hover:opacity-100 transition-opacity"></div>
              <img 
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=1000&fm=webp" 
                alt="Reunião de consultoria estratégica da Dupla Aliança" 
                width="800"
                height="600"
                className="rounded-[3rem] shadow-2xl relative z-10 w-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700 brightness-90 hover:brightness-100 border border-white/5"
                loading="lazy"
                decoding="async"
              />
              {/* Badge Flutuante */}
              <div className="absolute top-10 -right-10 bg-finacc-palm text-white p-8 rounded-[2rem] shadow-2xl z-20 hidden xl:block">
                <div className="text-center">
                  <div className="text-4xl font-black tracking-tighter">100%</div>
                  <div className="text-[10px] uppercase font-bold tracking-[0.2em] opacity-80">Dedicados</div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};
