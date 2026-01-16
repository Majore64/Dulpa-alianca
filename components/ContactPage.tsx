
import React, { useState, useEffect } from 'react';
import { PageType } from '../App';

interface ContactPageProps {
  onNavigate?: (page: PageType, hash?: string) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formState, setFormState] = useState({ name: '', email: '', phone: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const encode = (data: { [key: string]: string }) => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...formState })
    })
      .then((response) => {
        if (response.ok) {
          setIsSubmitting(false);
          setSubmitted(true);
          setFormState({ name: '', email: '', phone: '', message: '' });
        } else {
          throw new Error("Erro na submissão");
        }
      })
      .catch(error => {
        console.error(error);
        setIsSubmitting(false);
        alert("Erro ao enviar o pedido. Por favor, tente novamente.");
      });
  };

  const addressUrl = "https://www.google.com/maps/search/?api=1&query=Rua+Dom+Cristovao+de+Sao+Boaventura+44+Guimaraes";

  // Estilos simplificados e mais elegantes
  const cardClassName = "bg-gray-50 p-10 lg:p-12 hover:bg-white hover:shadow-elegant transition-all duration-500 group relative overflow-hidden rounded-sm h-full flex flex-col border border-gray-100 hover:border-transparent";
  const iconContainerClass = "w-16 h-16 bg-white text-finacc-palm rounded-full flex items-center justify-center mb-0 group-hover:bg-finacc-palm group-hover:text-white transition-colors duration-300 relative z-10 shadow-sm flex-shrink-0 border border-gray-100 group-hover:border-transparent";
  const titleClass = "font-bold text-finacc-evergreen text-xs uppercase tracking-widest mb-4 sans-serif transition-colors duration-300 relative z-10";
  const textClass = "text-gray-600 text-base font-light leading-loose sans-serif transition-colors duration-300 relative z-10";

  return (
    <div className="pt-24 animate-fade-in bg-white">
      {/* Header da Página - Mais espaço */}
      <header className="text-center py-24 lg:py-32 px-6 bg-finacc-cream border-b border-gray-100 mb-20">
        {/* H4 -> P */}
        <p className="text-finacc-palm font-bold uppercase tracking-[0.4em] text-xs mb-8 sans-serif animate-fade-in-up opacity-0">Fale Connosco</p>
        <h1 className="text-5xl lg:text-7xl font-medium text-finacc-evergreen mb-8 font-serif animate-fade-in-up delay-100 opacity-0">Contactos</h1>
        <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto font-light sans-serif leading-relaxed animate-fade-in-up delay-200 opacity-0">
          Estamos disponíveis para esclarecer todas as suas dúvidas e apresentar as melhores soluções para o seu negócio.
        </p>
      </header>

      <div className="container mx-auto px-6 lg:px-12 pb-32">
        
        {/* Grid de Informações de Contacto - Layout mais aberto */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-7xl mx-auto mb-32 reveal">
          
          {/* Morada */}
          <a href={addressUrl} target="_blank" rel="noopener noreferrer" className="block h-full">
            <div className={cardClassName}>
              <div className="flex items-start gap-8 relative z-10">
                <div className={iconContainerClass}>
                   <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </div>
                <div>
                  <h3 className={titleClass}>Morada do Escritório</h3>
                  <p className={textClass}>
                    Rua Dom Cristóvão de São Boaventura, nº44<br/>
                    RC Esq., 4810-261 Oliveira do Castelo<br/>
                    Guimarães, Portugal
                  </p>
                </div>
              </div>
            </div>
          </a>

          {/* Telefones */}
          <div className={cardClassName}>
            <div className="flex items-start gap-8 relative z-10">
              <div className={iconContainerClass}>
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              </div>
              <div className="w-full">
                <h3 className={titleClass}>Telefones</h3>
                <div className="flex flex-col gap-3">
                  <a href="tel:+351253517059" className={`${textClass} hover:text-finacc-palm hover:underline`}>
                    (+351) 253 517 059
                  </a>
                  <a href="tel:+351933345890" className={`${textClass} hover:text-finacc-palm hover:underline`}>
                    (+351) 933 345 890
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Emails */}
          <div className={cardClassName}>
            <div className="flex items-start gap-8 relative z-10">
              <div className={iconContainerClass}>
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              </div>
              <div className="w-full">
                <h3 className={titleClass}>Email</h3>
                <div className="flex flex-col gap-3">
                  <a href="mailto:geral@duplaalianca.pt" className={`${textClass} hover:text-finacc-palm hover:underline`}>geral@duplaalianca.pt</a>
                  <a href="mailto:ana.machado@duplaalianca.pt" className={`${textClass} hover:text-finacc-palm hover:underline`}>ana.machado@duplaalianca.pt</a>
                </div>
              </div>
            </div>
          </div>

          {/* Horário */}
          <div className={cardClassName}>
            <div className="flex items-start gap-8 relative z-10">
              <div className={iconContainerClass}>
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <div>
                <h3 className={titleClass}>Horário de Funcionamento</h3>
                <p className={`${textClass}`}>Segunda a Sexta-feira: 9:00 - 18:00</p>
                <p className={`${textClass} mt-2 opacity-60 text-sm`}>Encerrado aos fins de semana e feriados.</p>
              </div>
            </div>
          </div>

        </div>

        {/* Formulário - Mais padding e destaque */}
        <div id="formulario" className="max-w-5xl mx-auto scroll-mt-32">
          <div className="bg-finacc-evergreen p-12 lg:p-20 rounded-sm shadow-2xl relative overflow-hidden reveal">
            {/* Elementos decorativos de fundo */}
            <div className="absolute top-0 left-0 w-full h-2 bg-finacc-palm"></div>
            <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-finacc-palm/10 rounded-full blur-[80px]"></div>
            
            <div className="relative z-10">
              <div className="text-center mb-16">
                <h3 className="text-3xl lg:text-4xl font-serif font-medium text-white mb-6">Envie-nos uma Mensagem</h3>
                <p className="text-gray-300 font-light sans-serif text-lg">Preencha o formulário abaixo e entraremos em contacto consigo o mais breve possível.</p>
              </div>
              
              {submitted ? (
                <div className="text-center py-16 bg-white/5 rounded-sm border border-white/10">
                  <div className="w-20 h-20 bg-finacc-palm text-white rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg">
                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <h3 className="text-3xl font-serif font-medium text-white mb-6">Solicitação Recebida</h3>
                  <p className="text-gray-300 mb-10 font-light sans-serif text-lg">A equipa da Dupla Aliança analisará o seu pedido e entrará em contacto brevemente.</p>
                  <button onClick={() => setSubmitted(false)} className="text-finacc-palm font-bold hover:text-white transition-colors text-xs uppercase tracking-wider border-b border-finacc-palm pb-0.5">Enviar nova mensagem</button>
                </div>
              ) : (
                <form name="contact" method="POST" data-netlify="true" onSubmit={handleSubmit} className="space-y-8">
                  <input type="hidden" name="form-name" value="contact" />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="md:col-span-2">
                      <label htmlFor="name" className="block text-finacc-palm font-bold text-[10px] uppercase tracking-wider mb-3 px-1 sans-serif">Nome Completo / Empresa *</label>
                      <input type="text" id="name" name="name" required className="w-full bg-white/5 border border-white/10 focus:border-finacc-palm px-6 py-5 text-white text-base outline-none transition-all placeholder-white/30 font-light sans-serif rounded-sm focus:bg-white/10" placeholder="Ex: João Silva ou Empresa Lda." value={formState.name} onChange={(e) => setFormState({...formState, name: e.target.value})} />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-finacc-palm font-bold text-[10px] uppercase tracking-wider mb-3 px-1 sans-serif">Email *</label>
                      <input type="email" id="email" name="email" required className="w-full bg-white/5 border border-white/10 focus:border-finacc-palm px-6 py-5 text-white text-base outline-none transition-all placeholder-white/30 font-light sans-serif rounded-sm focus:bg-white/10" placeholder="email@exemplo.com" value={formState.email} onChange={(e) => setFormState({...formState, email: e.target.value})} />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-finacc-palm font-bold text-[10px] uppercase tracking-wider mb-3 px-1 sans-serif">Telefone *</label>
                      <input type="tel" id="phone" name="phone" required className="w-full bg-white/5 border border-white/10 focus:border-finacc-palm px-6 py-5 text-white text-base outline-none transition-all placeholder-white/30 font-light sans-serif rounded-sm focus:bg-white/10" placeholder="912 345 678" value={formState.phone} onChange={(e) => setFormState({...formState, phone: e.target.value})} />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-finacc-palm font-bold text-[10px] uppercase tracking-wider mb-3 px-1 sans-serif">Mensagem *</label>
                    <textarea id="message" name="message" required rows={5} className="w-full bg-white/5 border border-white/10 focus:border-finacc-palm px-6 py-5 text-white text-base outline-none transition-all resize-none placeholder-white/30 font-light sans-serif rounded-sm focus:bg-white/10" placeholder="Como podemos ajudar?" value={formState.message} onChange={(e) => setFormState({...formState, message: e.target.value})}></textarea>
                  </div>
                  <div className="pt-8 text-center">
                     <button type="submit" disabled={isSubmitting} className="w-full md:w-auto md:px-16 bg-finacc-palm text-white font-bold py-5 hover:bg-white hover:text-finacc-evergreen transition-all disabled:opacity-50 uppercase tracking-[0.2em] text-xs shadow-xl rounded-sm transform hover:-translate-y-1">
                      {isSubmitting ? 'A Enviar...' : 'Enviar Pedido'}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};
