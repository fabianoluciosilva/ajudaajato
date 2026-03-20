import { Copyright } from "@/components/Copyright";

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-xl overflow-hidden">
        <header className="px-8 pt-10 pb-6 text-center border-b border-gray-100">
          <img
            src="/simplessolucao-logo.webp"
            alt="Logo Simples Solução TI"
            className="h-auto w-48 md:w-64 mx-auto mb-6"
          />
          <h1 className="text-3xl font-bold text-gray-800 uppercase tracking-tight">
            Política de Privacidade
          </h1>
          <p className="text-blue-700 font-semibold mt-2">Simples Solução TI</p>
        </header>

        <main className="p-8 md:p-12 text-gray-700 leading-relaxed">
          <p className="mb-6 text-justify">
            A sua privacidade é de extrema importância para nós. Esta Política
            de Privacidade descreve como coletamos, usamos, divulgamos e
            protegemos as informações pessoais que você fornece ao utilizar o
            site da
            <a
              href="https://www.simplessolucao.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline ml-1"
            >
              Simples Solução TI
            </a>
            .
          </p>

          <p className="mb-8 text-justify italic border-l-4 border-gray-200 pl-4 bg-gray-50 py-2">
            Ao utilizar o website, você concorda com as práticas descritas nesta
            Política de Privacidade. Por favor, leia atentamente antes de
            fornecer qualquer informação.
          </p>

          <section className="space-y-8">
            <div>
              <h2 className="text-xl font-bold text-gray-800 border-l-4 border-blue-700 pl-3 mb-4">
                Coleta de Informações Pessoais
              </h2>
              <p className="text-justify">
                Quando você visita o nosso site, podemos coletar informações
                pessoais que você declara nos fornecer, como nome, endereço de
                e-mail e número de telefone. Essas informações podem ser
                solicitadas quando você preenche formulários de contato, assina
                boletins informativos ou solicita informações sobre nossos
                produtos e serviços.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-800 border-l-4 border-blue-700 pl-3 mb-4">
                Uso de Informações Pessoais
              </h2>
              <p className="mb-4">
                As informações coletadas são utilizadas para:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li>Fornecer e personalizar os serviços solicitados;</li>
                <li>
                  Enviar informações sobre produtos e serviços de seu interesse;
                </li>
                <li>Responder a verificação de suporte ou atendimento;</li>
                <li>Melhorar a experiência do usuário em nosso site;</li>
                <li>Cumprir com obrigações legais.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-800 border-l-4 border-blue-700 pl-3 mb-4">
                Divulgação de Informações
              </h2>
              <p className="mb-4">
                Não vendemos ou alugamos suas informações. A divulgação só
                ocorre:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li>Com seu consentimento expresso;</li>
                <li>Para fornecer serviços solicitados por você;</li>
                <li>Quando exigido por lei.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-800 border-l-4 border-blue-700 pl-3 mb-4">
                Segurança e Cookies
              </h2>
              <p className="mb-4 text-justify">
                Implementamos medidas de segurança para proteger seus dados,
                embora nenhum método na internet seja 100% seguro. Utilizamos
                cookies para melhorar sua navegação (coletando IP, navegador e
                páginas visitadas). Você pode desativar os cookies nas
                configurações do seu navegador.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-800 border-l-4 border-blue-700 pl-3 mb-4">
                Alterações na Política
              </h2>
              <p className="text-justify">
                Reservamos o direito de modificar esta política a qualquer
                momento. Recomendamos a revisão periódica desta página para se
                manter informado.
              </p>
            </div>
          </section>
        </main>

        <footer className="bg-gray-50 py-6 px-8 text-center text-sm text-gray-500 border-t border-gray-100">
          <Copyright />
        </footer>
      </div>
    </div>
  );
}
