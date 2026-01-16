
import React, { useEffect } from 'react';

export const PrivacyPolicyPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white pt-32 pb-20 animate-fade-in">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <header className="mb-12 border-b border-gray-100 pb-8">
          <h1 className="text-3xl md:text-5xl font-medium text-finacc-evergreen mb-4 font-serif">Política de Privacidade</h1>
          <p className="text-gray-500 text-lg font-light sans-serif">Dupla Aliança - Contabilidade e Fiscalidade</p>
        </header>

        <div className="prose prose-lg max-w-none text-gray-600 space-y-10 leading-relaxed font-light sans-serif">
          
          <p className="text-lg">
            O site <span className="font-semibold text-finacc-evergreen">duplaalianca.pt</span> respeita a sua privacidade e compromete-se a proteger os dados pessoais que nos fornece.
          </p>

          <section>
            <h2 className="text-xl font-bold text-finacc-evergreen mb-4 uppercase tracking-wider text-sm sans-serif">1. Dados que recolhemos</h2>
            <p className="mb-4">Quando preenche o formulário de contacto, podemos recolher:</p>
            <ul className="list-disc pl-5 space-y-2 marker:text-finacc-palm">
              <li>Nome</li>
              <li>Email</li>
              <li>Telefone</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-finacc-evergreen mb-4 uppercase tracking-wider text-sm sans-serif">2. Finalidade dos dados</h2>
            <p className="mb-4">Os dados recolhidos são usados apenas para:</p>
            <ul className="list-disc pl-5 space-y-2 marker:text-finacc-palm">
              <li>Responder às suas questões</li>
              <li>Fornecer informações sobre os nossos serviços</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-finacc-evergreen mb-4 uppercase tracking-wider text-sm sans-serif">3. Partilha de dados</h2>
            <p>Os seus dados não são vendidos, cedidos ou partilhados com terceiros, exceto quando legalmente exigido.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-finacc-evergreen mb-4 uppercase tracking-wider text-sm sans-serif">4. Segurança</h2>
            <p>Adotamos medidas técnicas e organizativas para proteger os seus dados contra acessos não autorizados, alterações ou perda.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-finacc-evergreen mb-4 uppercase tracking-wider text-sm sans-serif">5. Direitos do utilizador</h2>
            <p className="mb-4">Tem direito a:</p>
            <ul className="list-disc pl-5 space-y-2 marker:text-finacc-palm">
              <li>Aceder aos seus dados</li>
              <li>Solicitar a correção ou eliminação dos seus dados</li>
              <li>Retirar o seu consentimento a qualquer momento</li>
            </ul>
            <p className="mt-4">
              Para exercer estes direitos, contacte-nos através do email: <a href="mailto:geral@duplaalianca.pt" className="text-finacc-palm hover:underline font-medium">geral@duplaalianca.pt</a>
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-finacc-evergreen mb-4 uppercase tracking-wider text-sm sans-serif">6. Contacto</h2>
            <p className="mb-2">Se tiver alguma dúvida sobre a forma como os seus dados são tratados, contacte-nos:</p>
            <p className="font-medium text-finacc-evergreen">
              Email: <a href="mailto:geral@duplaalianca.pt" className="text-finacc-palm hover:underline">geral@duplaalianca.pt</a>
            </p>
          </section>

        </div>
      </div>
    </div>
  );
};
