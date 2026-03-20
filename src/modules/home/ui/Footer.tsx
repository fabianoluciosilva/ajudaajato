import Link from "next/link";
import { Phone, MapPin, Clock, CheckCircle2 } from "lucide-react";
import { WhatsAppButton } from "./WhatsAppButton"; // Importando o componente

const phoneNumber = "(21) 3529-7993";

export const Footer = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Coluna 1: Sobre */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Simples Solução TI
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Especialista em suporte de TI e terceirização para empresas no Rio de Janeiro,
              com SLA garantido, resposta rápida e atendimento 24/7.
            </p>
            <p className="mt-4 text-xs text-gray-500 font-mono">
              CNPJ: 14.339.202/0001-77
            </p>
          </div>

          {/* Coluna 2: Área de Atendimento */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">
              Área de Atendimento
            </h4>
            <div className="space-y-4 text-gray-400 text-sm">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-cyan-400 mt-1 shrink-0" />
                <span>
                  <strong className="text-white block mb-1">Capital & Grande Rio:</strong>
                  Rio de Janeiro, Niterói, Duque de Caxias, Nova Iguaçu.
                </span>
              </p>
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-cyan-400 mt-1 shrink-0" />
                <span>
                  <strong className="text-white block mb-1">Região dos Lagos:</strong>
                  Cabo Frio, Búzios, São Pedro da Aldeia e Arraial do Cabo.
                </span>
              </p>
              <p className="flex items-center gap-2 mt-4 pt-4 border-t border-slate-800">
                <Phone className="w-4 h-4 text-cyan-400" />
                {phoneNumber}
              </p>
            </div>
          </div>

          {/* Coluna 3: Disponibilidade */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">
              Disponibilidade 24/7
            </h4>
            <p className="text-gray-400">
              <Clock className="w-4 h-4 inline mr-2 text-cyan-400" />
              Suporte técnico empresarial e monitoramento contínuo.
            </p>
            <div className="mt-4 space-y-4"> {/* Adicionado space-y-4 aqui para espaçar a caixa e o botão */}
              <div className="flex items-center gap-2 text-green-400 bg-white/5 p-3 rounded-xl border border-white/10">
                <CheckCircle2 className="w-5 h-5 shrink-0" />
                <span className="text-sm font-semibold">
                  Resposta em até 5 minutos • SLA garantido
                </span>
              </div>
              
              {/* --- BOTÃO DO WHATSAPP NO FOOTER --- */}
              <WhatsAppButton 
                buttonText="Chamar no WhatsApp"
                message="Olá! Cheguei no final do site da Simples Solução e gostaria de falar com a equipe de atendimento comercial."
                className="w-full text-base py-3" // Classes extras para adaptar o botão ao espaço menor da coluna do footer
              />
            </div>
          </div>
        </div>

        {/* Rodapé Inferior */}
        <div className="border-t border-slate-800 pt-8 text-center text-gray-400">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p>&copy; 2026 Simples Solução TI. Todos os direitos reservados.</p>

            <div className="flex gap-4 text-sm">
              <Link
                href="/politica-de-privacidade"
                className="hover:text-white underline transition-colors"
              >
                Política de Privacidade
              </Link>
              <span className="text-slate-700">|</span>
              <p>Suporte de TI Empresarial • RJ e Região dos Lagos</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
