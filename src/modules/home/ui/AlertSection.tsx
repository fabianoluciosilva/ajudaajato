import { Clock } from "lucide-react";
import { WhatsAppButton } from "./WhatsAppButton";

export const AlertSection = () => {
  return (
    <section
      id="alert-section"
      className="py-20 bg-red-50"
      style={{ contentVisibility: "auto", containIntrinsicSize: "400px" }}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-white border-4 border-red-500 rounded-3xl p-12 shadow-2xl">
          {/* Trocamos o ícone para um relógio, simbolizando a perda de tempo */}
          <Clock className="w-20 h-20 text-red-600 mx-auto mb-6" />

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Quanto custa um dia inteiro de trabalho perdido?
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Ficar tentando consertar o computador sozinho pelo YouTube ou esperando a disponibilidade de um conhecido só gera estresse e atrasa seus prazos.
          </p>

          <p className="text-xl font-semibold text-red-600 mb-8">
            Cada hora com o equipamento parado é dinheiro que você deixa de ganhar.
          </p>

          <WhatsAppButton 
            buttonText="Resolver Meu Problema Agora"
            message="Olá! Estou perdendo tempo de trabalho com problemas no meu computador e preciso de ajuda imediata."
          />
          
        </div>
      </div>
    </section>
  );
};
