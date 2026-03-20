import { CheckCircle2, XCircle } from "lucide-react";
import { WhatsAppButton } from "./WhatsAppButton";

const comparisonData = [
  {
    title: "Tempo de Espera",
    bad: "Você precisa se adaptar aos horários do técnico ou esperar o 'sobrinho' ter tempo livre no fim de semana.",
    good: "Atendimento imediato. Você chama, contrata e o técnico já acessa sua máquina para resolver na hora.",
  },
  {
    title: "Conforto e Logística",
    bad: "Ter que desconectar todos os cabos, colocar o PC no carro e levar até uma assistência técnica física.",
    good: "100% Remoto. Você não precisa sair da cadeira. Nós consertamos tudo pela internet, de forma segura.",
  },
  {
    title: "Relação Profissional",
    bad: "Ficar devendo favores para conhecidos ou ficar sem graça de cobrar se o problema voltar a acontecer.",
    good: "Relação transparente. Você paga um valor fixo justo, recebe o serviço profissional e tem garantia.",
  },
  {
    title: "Privacidade",
    bad: "Deixar seu computador dias na loja, correndo risco de ter seus arquivos e fotos pessoais bisbilhotados.",
    good: "Você acompanha tudo na sua tela. O técnico acessa, resolve e você vê exatamente o que está sendo feito.",
  },
];

export const ComparisonSection = () => {
  return (
    <section className="py-20 bg-slate-50 border-t border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Pare de sofrer com assistências demoradas.
          </h2>
          <p className="text-lg text-gray-600">
            Veja a diferença entre depender da sorte e ter a{" "}
            <span className="font-semibold text-blue-600">
              Ajuda Ajato
            </span>{" "}
            resolvendo a sua vida.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Coluna Assistência Comum / Favores */}
          <div className="bg-white rounded-2xl shadow-sm border border-red-100 overflow-hidden">
            <div className="bg-red-50 py-6 text-center border-b border-red-100">
              <h3 className="text-xl font-bold text-red-800">
                ❌ Tentar sozinho ou pedir favor
              </h3>
            </div>
            <div className="p-6 md:p-8 space-y-8">
              {comparisonData.map((item, index) => (
                <div key={index} className="flex gap-4">
                  <XCircle className="w-6 h-6 text-red-500 shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {item.bad}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Coluna Ajuda Ajato */}
          <div className="bg-white rounded-2xl shadow-xl border-2 border-blue-500 overflow-hidden transform lg:-translate-y-2 transition-transform duration-300">
            <div className="bg-blue-600 py-6 text-center">
              <h3 className="text-xl font-bold text-white">
                ✅ Com a Ajuda Ajato
              </h3>
            </div>
            <div className="p-6 md:p-8 space-y-8 bg-blue-50/30">
              {comparisonData.map((item, index) => (
                <div key={index} className="flex gap-4">
                  <CheckCircle2 className="w-6 h-6 text-blue-600 shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      {item.title}
                    </h4>
                    <p className="text-gray-700 text-sm leading-relaxed font-medium">
                      {item.good}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <WhatsAppButton 
            buttonText="Quero um Atendimento Profissional"
            message="Olá! Vi o comparativo no site e quero parar de depender de favores para consertar meu PC. Como funciona a Ajuda Ajato?"
          />
        </div>

      </div>
    </section>
  );
};
