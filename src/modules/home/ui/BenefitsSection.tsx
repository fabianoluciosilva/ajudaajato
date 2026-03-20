import {
  Monitor,
  Wifi,
  Settings,
  ShieldAlert,
  Printer,
  FileDigit
} from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { WhatsAppButton } from "./WhatsAppButton";

// Os serviços de prateleira com preços pré-definidos
const servicesList = [
  {
    icon: Monitor,
    title: "Computador Lento ou Travando",
    description: "Limpeza de sistema, remoção de vírus e otimização completa para sua máquina voltar a ficar rápida.",
    price: "R$ 69,90",
    waMessage: "Olá! Vi no site o serviço de 'Computador Lento ou Travando' por R$ 69,90. Podem me atender agora?"
  },
  {
    icon: Wifi,
    title: "Problemas de Internet e Rede",
    description: "Computador não conecta no Wi-Fi ou rede caindo toda hora? Nós reconfiguramos para você trabalhar em paz.",
    price: "R$ 69,90",
    waMessage: "Olá! Vi no site o serviço de 'Problemas de Internet' por R$ 69,90. Preciso de suporte urgente."
  },
  {
    icon: Printer,
    title: "Instalação de Impressoras",
    description: "Comprou uma impressora nova e não consegue instalar? Configuramos ela no seu PC e na sua rede Wi-Fi.",
    price: "R$ 69,90",
    waMessage: "Olá! Vi no site o serviço de 'Instalação de Impressora' por R$ 69,90. Gostaria de agendar o acesso."
  },
  {
    icon: FileDigit,
    title: "Certificados Digitais (e-CPF/e-CNPJ)",
    description: "Instalação e configuração de certificados A1 e A3 para emissão de notas e acessos do governo.",
    price: "R$ 69,90",
    waMessage: "Olá! Vi no site o serviço de 'Certificado Digital' por R$ 69,90. Podem instalar para mim?"
  },
  {
    icon: Settings,
    title: "Instalação de Softwares",
    description: "Pacote Office, leitores de PDF, sistemas do governo (IRPF) e programas específicos da sua profissão.",
    price: "R$ 69,90",
    waMessage: "Olá! Vi no site o serviço de 'Instalação de Softwares' por R$ 69,90. Preciso instalar um programa."
  },
  {
    icon: ShieldAlert,
    title: "Outros Problemas / Casos Complexos",
    description: "Tela azul, erro no Windows que não deixa iniciar ou demandas específicas? Fale conosco para avaliarmos.",
    price: "Sob Orçamento",
    waMessage: "Olá! Meu problema é um pouco mais complexo e não está na lista. Podem me passar um orçamento?"
  }
];

export const BenefitsSection = () => {
  return (
    <section
      id="servicos"
      className="py-20 bg-slate-50 scroll-mt-20"
      style={{ contentVisibility: "auto", containIntrinsicSize: "800px" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Serviços com Preço Fixo e Sem Surpresas
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Escolha seu problema abaixo. Você já sabe quanto vai pagar antes mesmo de falar com o técnico. Sem visitas, sem taxas escondidas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border border-gray-100 shadow-sm overflow-hidden bg-white flex flex-col h-full"
              >
                <CardContent className="p-6 md:p-8 flex flex-col h-full">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                  
                  <h4 className="text-xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h4>
                  
                  <p className="text-gray-600 text-sm leading-relaxed flex-grow mb-6">
                    {service.description}
                  </p>
                  
                  <div className="border-t border-gray-100 pt-6 mt-auto">
                    <span className="text-sm text-gray-500 block mb-1">Valor por acesso:</span>
                    <span className="text-2xl font-bold text-gray-900 block mb-6">{service.price}</span>
                    
                    <WhatsAppButton 
                      buttonText="Contratar Serviço"
                      message={service.waMessage}
                      className="w-full text-sm py-3 px-4 shadow-none border border-transparent hover:border-green-500"
                    />
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
