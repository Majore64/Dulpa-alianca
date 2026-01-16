
import React, { useState } from 'react';

export const Contact: React.FC = () => {
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
        setIsSubmitting(false);
        alert("Erro ao enviar o pedido. Por favor, tente novamente.");
      });
  };

  const addressUrl = "https://www.google.com/maps/search/?api=1&query=Rua+Dom+Cristovao+de+Sao+Boaventura+44+Guimaraes";

  // Estilo base do card partilhado para consistência com a página About (Valores)
  const cardClassName = "bg-white p-6 border-t-2 border-finacc-palm hover:bg-finacc-evergreen hover:-translate-y-2 hover:shadow-2xl transition-all duration-500 group relative overflow-hidden rounded-sm h-full flex flex-col";
  const decorClassName = "absolute top-0 right-0 w-16 h-16 bg-white/5 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-150 duration-700";
  const iconContainerClass = "w-12 h-12 bg-finacc-cream text-finacc-palm rounded-full flex items-center justify-center mb-0 group-hover:bg-finacc-palm group-hover:text-white transition-colors duration-300 relative z-10 shadow-sm flex-shrink-0";
  const titleClass = "font-bold text-finacc-evergreen text-[10px] uppercase tracking-wider mb-2 sans-serif group-hover:text-white transition-colors duration-300 relative z-10";
  const textClass = "text-gray-600 text-xs font-light leading-relaxed sans-serif group-hover:text-gray-300 transition-colors duration-300 relative z-10";

  return (
    <section id="contacto" className="py-16 lg:py-24 bg-finacc-cream">
      <div className="container mx-auto px-6 lg:px-12">
        
        {/* Cabeçalho Centrado */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h4 className="text-finacc-palm font-bold uppercase tracking-[0.3em] text-[10px] mb-3 sans-serif">Contactos</h4>
          <h3 className="text-3xl sm:text-4xl font-medium text-finacc-evergreen mb-6 font-serif leading-tight">Estamos à sua espera</h3>
          <p className="text-gray-600 font-light text-sm sans-serif leading-relaxed mb-10">
            Estamos disponíveis para esclarecer todas as suas dúvidas e apresentar as melhores soluções para o seu negócio.
          </p>
          
          {/* Destaque Intermédio: Retangular e Sólido */}
          <div className="inline-flex items-center gap-6 px-10 py-6 bg-white border-l-4 border-l-finacc-palm border-y border-r border-gray-100 rounded-sm shadow-subtle mx-auto transition-all hover:shadow-elegant hover:-translate-y-1">
            <span className="flex h-3 w-3 relative flex-shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-finacc-palm opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-finacc-palm"></span>
            </span>
            <span className="text-finacc-evergreen font-medium text-sm tracking-wide text-left leading-relaxed">
              Disponibilidade para consultas personalizadas e acompanhamento dedicado durante todo o horário comercial.
            </span>
          </div>
        </div>

        {/* Grid de Informações de Contacto (EM CIMA) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-16">
          
          {/* Morada */}
          <a href={addressUrl} target="_blank" rel="noopener noreferrer" className="block h-full">
            <div className={cardClassName}>
              <div className={decorClassName}></div>
              <div className="flex items-start gap-5 relative z-10">
                <div className={iconContainerClass}>
                   <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </div>
                <div>
                  <h4 className={titleClass}>Morada do Escritório</h4>
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
            <div className={decorClassName}></div>
            <div className="flex items-start gap-5 relative z-10">
              <div className={iconContainerClass}>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              </div>
              <div className="w-full">
                <h4 className={titleClass}>Telefones</h4>
                <div className="flex flex-col gap-1">
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
            <div className={decorClassName}></div>
            <div className="flex items-start gap-5 relative z-10">
              <div className={iconContainerClass}>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              </div>
              <div className="w-full">
                <h4 className={titleClass}>Email</h4>
                <div className="flex flex-col gap-1">
                  <a href="mailto:geral@duplaalianca.pt" className={`${textClass} hover:text-finacc-palm hover:underline`}>geral@duplaalianca.pt</a>
                  <a href="mailto:ana.machado@duplaalianca.pt" className={`${textClass} hover:text-finacc-palm hover:underline`}>ana.machado@duplaalianca.pt</a>
                </div>
              </div>
            </div>
          </div>

          {/* Horário */}
          <div className={cardClassName}>
            <div className={decorClassName}></div>
            <div className="flex items-start gap-5 relative z-10">
              <div className={iconContainerClass}>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <div>
                <h4 className={titleClass}>Horário de Funcionamento</h4>
                <p className={`${textClass}`}>Segunda a Sexta-feira: 9:00 - 18:00</p>
              </div>
            </div>
          </div>

        </div>

        {/* Formulário (EM BAIXO) */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-white p-8 lg:p-12 shadow-elegant border border-gray-100 rounded-sm relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-finacc-palm text-white px-6 py-2 uppercase tracking-widest text-[10px] font-bold shadow-lg">
              Envie-nos uma mensagem
            </div>
            
            {submitted ? (
              <div className="text-center py-10">
                <div className="w-16 h-16 bg-finacc-cream text-finacc-palm rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                </div>
                <h3 className="text-2xl font-serif font-medium text-finacc-evergreen mb-4">Solicitação Recebida</h3>
                <p className="text-gray-500 mb-8 font-light sans-serif text-sm">A equipa da Dupla Aliança analisará o seu pedido e entrará em contacto brevemente.</p>
                <button onClick={() => setSubmitted(false)} className="text-finacc-palm font-bold hover:text-finacc-evergreen transition-colors text-[10px] uppercase tracking-wider border-b border-finacc-palm pb-0.5">Enviar nova mensagem</button>
              </div>
            ) : (
              <form name="contact" method="POST" data-netlify="true" onSubmit={handleSubmit} className="space-y-6 mt-4">
                <input type="hidden" name="form-name" value="contact" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="md:col-span-2">
                    <label htmlFor="name" className="block text-finacc-evergreen font-bold text-[9px] uppercase tracking-wider mb-2 px-1 sans-serif">Nome Completo / Empresa *</label>
                    <input type="text" id="name" name="name" required className="w-full bg-finacc-cream border border-transparent focus:border-finacc-palm px-4 py-3.5 text-gray-800 text-sm outline-none transition-all placeholder-gray-400 font-light sans-serif rounded-sm focus:bg-white" placeholder="Ex: João Silva ou Empresa Lda." value={formState.name} onChange={(e) => setFormState({...formState, name: e.target.value})} />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-finacc-evergreen font-bold text-[9px] uppercase tracking-wider mb-2 px-1 sans-serif">Email *</label>
                    <input type="email" id="email" name="email" required className="w-full bg-finacc-cream border border-transparent focus:border-finacc-palm px-4 py-3.5 text-gray-800 text-sm outline-none transition-all placeholder-gray-400 font-light sans-serif rounded-sm focus:bg-white" placeholder="email@exemplo.com" value={formState.email} onChange={(e) => setFormState({...formState, email: e.target.value})} />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-finacc-evergreen font-bold text-[9px] uppercase tracking-wider mb-2 px-1 sans-serif">Telefone *</label>
                    <input type="tel" id="phone" name="phone" required className="w-full bg-finacc-cream border border-transparent focus:border-finacc-palm px-4 py-3.5 text-gray-800 text-sm outline-none transition-all placeholder-gray-400 font-light sans-serif rounded-sm focus:bg-white" placeholder="912 345 678" value={formState.phone} onChange={(e) => setFormState({...formState, phone: e.target.value})} />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-finacc-evergreen font-bold text-[9px] uppercase tracking-wider mb-2 px-1 sans-serif">Mensagem *</label>
                  <textarea id="message" name="message" required rows={5} className="w-full bg-finacc-cream border border-transparent focus:border-finacc-palm px-4 py-3.5 text-gray-800 text-sm outline-none transition-all resize-none placeholder-gray-400 font-light sans-serif rounded-sm focus:bg-white" placeholder="Como podemos ajudar?" value={formState.message} onChange={(e) => setFormState({...formState, message: e.target.value})}></textarea>
                </div>
                <div className="pt-2 text-center">
                   <button type="submit" disabled={isSubmitting} className="w-full md:w-auto md:px-12 bg-finacc-evergreen text-white font-bold py-4 hover:bg-finacc-palm transition-all disabled:bg-gray-300 uppercase tracking-[0.2em] text-[10px] shadow-lg rounded-sm transform hover:-translate-y-0.5">
                    {isSubmitting ? 'A Enviar...' : 'Enviar Pedido'}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
        
      </div>
    </section>
  );
};
