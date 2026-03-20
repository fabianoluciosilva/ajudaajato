import { Shield } from "lucide-react";

import { Navbar } from "@/modules/home/ui/Navbar";
import { HomeHeroSection } from "@/modules/home/ui/HeroSection";
import { BenefitsSection } from "@/modules/home/ui/BenefitsSection";
import { AlertSection } from "@/modules/home/ui/AlertSection";
import { ComparisonSection } from "@/modules/home/ui/ComparisonSection";
import { TestimonialsSection } from "@/modules/home/ui/TestimonialsSection";
import { ContactFormSection } from "@/modules/home/ui/ContactFormSection";
import { Footer } from "@/modules/home/ui/Footer";

// IMPORTAÇÃO CORRIGIDA - Buscando o componente na mesma pasta
import { WhatsAppButton } from "./WhatsAppButton"; 

export const HomePage = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 via-white to-blue-50">
      <Navbar />

      {/* Primeira dobra — Foco em urgência e fim dos "favores" */}
      <HomeHeroSection />

      {/* Benefícios — 100% Remoto, Rápido e Sem Visitas */}
      <BenefitsSection />

      {/* Gatilho de risco — O custo de ficar parado e depender dos outros */}
      <AlertSection />

      {/* Comparativo — Esperar o "sobrinho" vs. Chamar a Ajuda Ajato */}
      <ComparisonSection />

      {/* Prova social */}
      <TestimonialsSection />

      {/* Garantia — Foco no atendimento avulso (Risco Zero) */}
      <section
        id="guarantee-section"
        className="py-20 bg-white scroll-mt-24"
        style={{ contentVisibility: "auto", containIntrinsicSize: "400px" }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-linear-to-br from-blue-50 to-sky-50 rounded-3xl p-12 border-4 border-blue-500 shadow-2xl">
            <Shield className="w-20 h-20 text-blue-600 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Risco Zero: Problema Resolvido ou Seu Dinheiro de Volta
            </h2>
            <h3 className="text-2xl font-bold text-blue-600 mb-4">
              Garantia de Solução Imediata
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Se nossos especialistas não conseguirem resolver o seu problema remotamente, <span className="font-bold">devolvemos 100% do valor pago</span> imediatamente.{" "}
              <span className="font-bold">
                Sem letras miúdas. Sem enrolação.
              </span>
            </p>
            <p className="text-xl font-semibold text-gray-800 mb-8">
              Você só paga pelo que realmente funciona. Essa é a nossa promessa.
            </p>

            {/* BOTÃO FIXO DO WHATSAPP USANDO O COMPONENTE */}
            <WhatsAppButton 
              buttonText="Solicitar Atendimento Seguro Agora"
              message="Olá! Preciso de suporte urgente e vi a garantia de Risco Zero no site. Como funciona?"
            />

          </div>
        </div>
      </section>

      {/* Formulário — conversão direta */}
      <ContactFormSection />

      <Footer />
    </div>
  );
};

export default HomePage;
