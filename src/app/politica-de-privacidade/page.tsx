import { Copyright } from "@/components/Copyright";

export default function Page() {
  return (
    <div className="min-h-screen bg-slate-50 py-10 px-4">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-xl overflow-hidden border border-gray-100">
        <header className="px-8 pt-10 pb-6 text-center border-b border-gray-100">
          <img
            src="/azul.png"
            alt="Logo Ajuda Ajato"
            className="h-auto w-48 md:w-64 mx-auto mb-6 object-contain"
          />
          <h1 className="text-3xl font-bold text-gray-900 uppercase tracking-tight">
            Política de Privacidade
          </h1>
          <p className="text-blue-600 font-semibold mt-2">Ajuda Ajato</p>
        </header>

        <main className="p-8 md:p-12 text-gray-700 leading-relaxed">
          <p className="mb-6 text-justify">
            A sua privacidade é de extrema importância para nós. Esta Política
            de Privacidade descreve como coletamos, usamos, divulgamos e
            protegemos as informações pessoais que você fornece ao utilizar o
            site da
            <a
              href="https://www.ajudaajato.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 hover:underline ml-1 font-medium"
            >
              Ajuda Ajato
            </a>
            .
          </p>

          <p className="mb-8 text-justify italic border-l-4 border-blue-200 pl-4 bg-blue-50/50 py-3 rounded-r-lg">
            Ao utilizar o website, você concorda com as práticas descritas nesta
            Política de Privacidade. Por favor, leia atentamente antes de
            fornecer qualquer informação.
          </p>

          <section className="space-y-8">
            <div>
              <h2 className="text-xl font-bold text-gray-900 border-l-4 border-blue-600 pl-3 mb-4">
                Coleta de Informações Pessoais
              </h2>
              <p className="text-justify">
                Quando você visita o nosso site, podemos coletar informações
                pessoais que você declara nos fornecer, como nome, endereço de
                e-mail e número de telefone/WhatsApp. Essas informações podem ser
                solicitadas quando você preenche formulários de contato, aciona
                nosso suporte via WhatsApp ou solicita informações sobre nossos
                serviços remotos.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 border-l-4 border-blue-600 pl-3 mb-4">
                Uso de Informações Pessoais
              </h2>
              <p className="mb-4">
                As informações coletadas são utilizadas para:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-2 text-gray-600">
                <li>Fornecer os serviços de suporte técnico solicitados;</li>
                <li>Enviar orçamentos e informações sobre seu atendimento;</li>
                <li>Responder a chamados de suporte ou dúvidas;</li>
                <li>Melhorar a experiência do usuário em nosso site;</li>
                <li>Cumprir com obrigações legais e fiscais.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 border-l-4 border-blue-600 pl-3 mb-4">
                Divulgação de Informações
              </h2>
              <p className="mb-4">
                Não vendemos ou alugamos suas informações. A divulgação só
                ocorre:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-2 text-gray-600">
                <li>Com seu consentimento expresso;</li>
                <li>Para fornecer os serviços remotos solicitados por você;</li>
                <li>Quando exigido por lei.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 border-l-4 border-blue-600 pl-3 mb-4">
                Segurança e Acesso Remoto
              </h2>
              <p className="mb-4 text-justify">
                Implementamos medidas de segurança rígidas para proteger seus dados. 
                Durante os atendimentos remotos, você acompanha todo o processo em sua tela. 
                Utilizamos cookies em nosso site para melhorar sua navegação (coletando IP, 
                navegador e páginas visitadas para fins de métricas e anúncios). Você pode 
                desativar os cookies nas configurações do seu navegador a qualquer momento.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 border-l-4 border-blue-600 pl-3 mb-4">
                Alterações na Política
              </h2>
              <p className="text-justify">
                Reservamos o direito de modificar esta política a qualquer
                momento. Recomendamos a revisão periódica desta página para se
                manter informado sobre como protegemos suas informações.
              </p>
            </div>
          </section>
        </main>

        <footer className="bg-slate-50 py-6 px-8 text-center text-sm text-gray-500 border-t border-gray-100">
          <Copyright />
        </footer>
      </div>
    </div>
  );
}
