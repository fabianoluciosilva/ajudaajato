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

const servicesList = [
  {
    icon: Monitor,
    title: "Computador Lento ou Travando",
    description: "Limpeza do sistema, remoção de vírus e otimização para sua máquina voltar a ser rápida.",
    waMessage: "Olá! Meu computador está muito lento. Gostaria de saber como funciona o suporte e consultar o valor."
  },
  {
    icon: Wifi,
    title: "Problemas de Internet e Rede",
    description: "Computador não conecta no Wi-Fi ou a rede cai toda hora? Nós reconfiguramos para você.",
    waMessage: "Olá! Estou com problemas na internet/rede. Gostaria de consultar o valor do atendimento."
  },
  {
    icon: Printer,
    title: "Instalação de Impressoras",
    description: "Configuramos sua impressora nova no seu PC e também na sua rede Wi-Fi.",
    waMessage: "Olá! Preciso de ajuda para instalar e configurar uma impressora. Podem me passar o valor?"
  },
  {
    icon: FileDigit,
    title: "Certificados Digitais",
    description: "Instalação e configuração de certificados A1 e A3 (e-CPF/e-CNPJ) para emissão de notas.",
    waMessage: "Olá! Preciso de ajuda com a instalação de um Certificado Digital. Qual é o valor do serviço?"
  },
  {
    icon: Settings,
    title: "Instalação de Softwares",
    description: "Pacote Office, sistemas do governo (IRPF), leitores de PDF e programas específicos.",
    waMessage: "Olá! Preciso instalar alguns programas/softwares. Como funciona o orçamento?"
  },
  {
    icon: ShieldAlert,
    title: "Outros Serviços / Casos Complexos",
    description: "Tela azul, erro no Windows, não inicia ou tem outra demanda? Fale conosco para avaliarmos.",
    waMessage: "Olá! Tenho um problema que não está na lista ou mais complexo. Podemos conversar para um orçamento?"
  }
];

export const BenefitsSection = () => {
  return (
    <section
      id="servicos"
      className="py-16 bg-slate-50 scroll-mt-20"
      style={{ contentVisibility: "auto", containIntrinsicSize: "800px" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nossos Serviços de Atendimento Remoto
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Identifique seu problema abaixo e chame no WhatsApp. Avaliamos a situação na hora e passamos o orçamento antes de qualquer acesso.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesList.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 border border-gray-100 shadow-sm bg-white flex flex-col h-full"
              >
                {/* Reduzi o padding de p-8 para p-5 para ficar mais compacto */}
                <CardContent className="p-5 flex flex-col h-full">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-600 transition-colors shrink-0">
                      <Icon className="w-5 h-5 text-blue-600 group-hover:text-white transition-colors" />
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 leading-tight">
                      {service.title}
                    </h4>
                  </div>
                  
                  <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
                    {service.description}
                  </p>
                  
                  <div className="mt-auto pt-4 border-t border-gray-100">
                    <WhatsAppButton 
                      buttonText="Consultar Valor"
                      message={service.waMessage}
                      className="w-full text-sm py-2.5 px-4 shadow-none bg-blue-50 text-blue-700 hover:bg-blue-600 hover:text-white border-none"
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
