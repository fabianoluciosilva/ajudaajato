import { CheckCircle2, XCircle } from "lucide-react";
import { WhatsAppButton } from "./WhatsAppButton"; // Importando o componente

const comparisonData = [
  {
    title: "1. Tempo de Resposta",
    bad: "Você abre um chamado e reza. Demoram horas ou dias para responder, enquanto sua empresa perde dinheiro.",
    good: "Resposta em até 5 minutos. O seu problema começa a ser resolvido na hora, com SLA formalizado.",
  },
  {
    title: "2. Prevenção vs. Apagar Incêndios",
    bad: "Só aparecem e mexem em algo depois que o servidor já caiu ou a rede parou de funcionar.",
    good: "Monitoramento 24/7. Corrigimos pequenas falhas preventivamente, antes que afetem sua operação.",
  },
  {
    title: "3. Quedas de Internet e Rede",
    bad: "Se a operadora de internet falha, o escritório inteiro fica sem rede e o trabalho para completamente.",
    good: "Alta Disponibilidade. Configuramos roteadores com redundância. Se um link cair, o outro assume na hora.",
  },
  {
    title: "4. Organização e Transparência",
    bad: "Pedidos soltos pelo WhatsApp do técnico, sem histórico e sem controle das suas licenças.",
    good: "Gestão Corporativa. Portal de Help Desk, registro de visitas e gestão exata do seu parque tecnológico.",
  },
  {
    title: "5. Nível Técnico da Equipe",
    bad: "Profissionais juniores ou dependência de um 'faz-tudo' que não domina infraestruturas complexas.",
    good: "+20 anos de experiência. Equipe sênior especialista em ambientes corporativos e servidores.",
  },
];

export const ComparisonSection = () => {
  return (
    <section className="py-20 bg-slate-50 border-t border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Chega de dores de cabeça com a sua TI.
          </h2>
          <p className="text-lg text-gray-600">
            Veja a diferença entre continuar com um suporte amador e ter a{" "}
            <span className="font-semibold text-blue-600">
              Simples Solução TI
            </span>{" "}
            como parceira estratégica do seu negócio.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Coluna TI Comum */}
          <div className="bg-white rounded-2xl shadow-sm border border-red-100 overflow-hidden">
            <div className="bg-red-50 py-6 text-center border-b border-red-100">
              <h3 className="text-xl font-bold text-red-800">
                ❌ O Suporte de TI Comum
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

          {/* Coluna Simples Solução TI */}
          <div className="bg-white rounded-2xl shadow-xl border-2 border-blue-500 overflow-hidden transform lg:-translate-y-2 transition-transform duration-300">
            <div className="bg-blue-600 py-6 text-center">
              <h3 className="text-xl font-bold text-white">
                ✅ A Simples Solução TI
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

        {/* --- INÍCIO DO BOTÃO DE WHATSAPP --- */}
        <div className="mt-16 text-center">
          <WhatsAppButton 
            buttonText="Quero uma TI Profissional"
            message="Olá! Vi o comparativo no site da Simples Solução e quero parar de apagar incêndios na TI da minha empresa. Podemos conversar?"
          />
        </div>
        {/* --- FIM DO BOTÃO DE WHATSAPP --- */}

      </div>
    </section>
  );
};
