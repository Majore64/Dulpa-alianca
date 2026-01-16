
import React, { useEffect } from 'react';
import { PageType } from '../App';

// We need to update the props to include onNavigate if we want functional breadcrumbs here
interface PrivacyPolicyPageProps {
  onNavigate?: (page: PageType, hash?: string) => void;
}

export const PrivacyPolicyPage: React.FC<PrivacyPolicyPageProps> = ({ onNavigate }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white pt-24 pb-32 animate-fade-in">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl pt-12">
        <header className="mb-20 border-b border-gray-100 pb-10">
          <h1 className="text-4xl md:text-6xl font-medium text-finacc-evergreen mb-6 font-serif">Política de Privacidade</h1>
          <p className="text-gray-500 text-xl font-light sans-serif">Dupla Aliança - Contabilidade e Fiscalidade</p>
        </header>

        <div className="text-gray-600 space-y-12 leading-loose font-light sans-serif text-lg">
          
          <p className="text-xl leading-relaxed">
            O site <span className="font-semibold text-finacc-evergreen">duplaalianca.pt</span> respeita a sua privacidade e compromete-se a proteger os dados pessoais que nos fornece. Esta política descreve como recolhemos, usamos e protegemos as suas informações.
          </p>

          <section>
            <h2 className="text-lg font-bold text-finacc-evergreen mb-6 uppercase tracking-wider sans-serif border-l-4 border-finacc-palm pl-4">1. Dados que recolhemos</h2>
            <p className="mb-4">Quando preenche o formulário de contacto no nosso website, podemos recolher os seguintes dados pessoais:</p>
            <ul className="list-disc pl-6 space-y-3 marker:text-finacc-palm">
              <li>Nome completo</li>
              <li>Endereço de correio eletrónico (email)</li>
              <li>Número de telefone</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-finacc-evergreen mb-6 uppercase tracking-wider sans-serif border-l-4 border-finacc-palm pl-4">2. Finalidade dos dados</h2>
            <p className="mb-4">Os dados recolhidos são utilizados exclusivamente para as seguintes finalidades:</p>
            <ul className="list-disc pl-6 space-y-3 marker:text-finacc-palm">
              <li>Responder às suas questões ou pedidos de orçamento</li>
              <li>Fornecer informações detalhadas sobre os nossos serviços</li>
              <li>Agendamento de reuniões</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-finacc-evergreen mb-6 uppercase tracking-wider sans-serif border-l-4 border-finacc-palm pl-4">3. Partilha de dados</h2>
            <p>Os seus dados pessoais não são vendidos, alugados, cedidos ou partilhados com terceiros para fins de marketing. A partilha de dados ocorrerá apenas quando estritamente necessário para o cumprimento de obrigações legais.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-finacc-evergreen mb-6 uppercase tracking-wider sans-serif border-l-4 border-finacc-palm pl-4">4. Segurança</h2>
            <p>Adotamos medidas técnicas e organizativas adequadas para proteger os seus dados contra acessos não autorizados, alterações, divulgação ou destruição não autorizada.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-finacc-evergreen mb-6 uppercase tracking-wider sans-serif border-l-4 border-finacc-palm pl-4">5. Direitos do utilizador</h2>
            <p className="mb-4">De acordo com o RGPD, tem o direito de:</p>
            <ul className="list-disc pl-6 space-y-3 marker:text-finacc-palm">
              <li>Solicitar o acesso aos seus dados pessoais</li>
              <li>Solicitar a retificação de dados incorretos</li>
              <li>Solicitar a eliminação dos seus dados ("direito a ser esquecido")</li>
              <li>Retirar o seu consentimento a qualquer momento</li>
            </ul>
            <p className="mt-6">
              Para exercer estes direitos, por favor contacte-nos através do email: <a href="mailto:geral@duplaalianca.pt" className="text-finacc-palm hover:underline font-medium">geral@duplaalianca.pt</a>
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-finacc-evergreen mb-6 uppercase tracking-wider sans-serif border-l-4 border-finacc-palm pl-4">6. Contacto</h2>
            <p className="mb-2">Se tiver alguma dúvida sobre a nossa política de privacidade ou sobre a forma como os seus dados são tratados, não hesite em contactar-nos:</p>
            <div className="bg-finacc-cream p-6 rounded-sm inline-block mt-4">
               <p className="font-bold text-finacc-evergreen text-sm uppercase tracking-wide mb-1">Responsável pelo Tratamento de Dados</p>
               <p>Dupla Aliança Lda</p>
               <p>Email: <a href="mailto:geral@duplaalianca.pt" className="text-finacc-palm hover:underline">geral@duplaalianca.pt</a></p>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
};
