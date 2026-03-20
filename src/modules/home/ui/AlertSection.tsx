import { AlertTriangle } from "lucide-react";
import { WhatsAppButton } from "./WhatsAppButton"; // Importando o novo componente

export const AlertSection = () => {
  return (
    <section
      id="alert-section"
      className="py-20 bg-red-50"
      style={{ contentVisibility: "auto", containIntrinsicSize: "400px" }}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-white border-4 border-red-500 rounded-3xl p-12 shadow-2xl">
          <AlertTriangle className="w-20 h-20 text-red-600 mx-auto mb-6" />

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Sua Empresa Está Protegida?
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Falhas de TI, ataques cibernéticos e lentidão nos sistemas geram
            prejuízos financeiros, paralisações e riscos legais para sua empresa.
          </p>

          <p className="text-xl font-semibold text-red-600 mb-8">
            Evite perdas e garanta a continuidade do seu negócio.
          </p>

          {/* BOTÃO FIXO DO WHATSAPP USANDO O COMPONENTE */}
          <WhatsAppButton 
            buttonText="Proteger Minha Empresa Agora"
            message="Olá! Estou no site da Simples Solução e preciso proteger os dados e a TI da minha empresa antes que seja tarde. Podemos conversar?"
          />
          
        </div>
      </div>
    </section>
  );
};
