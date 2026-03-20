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

      {/* Primeira dobra — foco em conversão */}
      <HomeHeroSection />

      {/* Benefícios e diferenciais — alinhados às campanhas */}
      <BenefitsSection />

      {/* Gatilho de risco — sem exagero, focado em B2B */}
      <AlertSection />

      {/* Agitação de Dor e Comparativo - O salvador da pátria */}
      <ComparisonSection />

      {/* Prova social */}
      <TestimonialsSection />

      {/* Garantia — redução de fricção */}
      <section
        id="guarantee-section"
        className="py-20 bg-white scroll-mt-24"
        style={{ contentVisibility: "auto", containIntrinsicSize: "400px" }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-linear-to-br from-green-50 to-emerald-50 rounded-3xl p-12 border-4 border-green-500 shadow-2xl">
            <Shield className="w-20 h-20 text-green-600 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Garantia Blindada de Satisfação
            </h2>
            <h3 className="text-2xl font-bold text-green-600 mb-4">
              30 Dias Sem Risco
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Se você não estiver <span className="font-bold">100% satisfeito</span> com nossos
              serviços em até 30 dias, devolvemos seu investimento.{" "}
              <span className="font-bold">
                Sem perguntas. Sem burocracia.
              </span>
            </p>
            <p className="text-xl font-semibold text-gray-800 mb-8">
              Essa é nossa confiança na qualidade do nosso trabalho.
            </p>

            {/* BOTÃO FIXO DO WHATSAPP USANDO O COMPONENTE */}
            <WhatsAppButton 
              buttonText="Falar com um Especialista Agora"
              message="Olá! Vi a garantia de 30 dias no site e gostaria de entender como a Simples Solução pode assumir a TI da minha empresa."
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
