import Link from "next/link";
import { Phone, MapPin, Clock, CheckCircle2 } from "lucide-react";
import { WhatsAppButton } from "./WhatsAppButton";

const phoneNumber = "(21) 94042-1350";

export const Footer = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          
          {/* Coluna 1: Sobre a Empresa */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Ajuda Ajato
            </h3>
            <p className="text-gray-400 leading-relaxed text-sm">
              Sua assistência técnica particular de TI, 100% online. Especialistas em suporte rápido para profissionais liberais, home office e pequenas empresas que precisam de agilidade sem amarras de contratos.
            </p>
          </div>

          {/* Coluna 2: Atendimento e Cobertura */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">
              Atendimento Remoto
            </h4>
            <div className="space-y-4 text-gray-400 text-sm">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-blue-400 mt-1 shrink-0" />
                <span>
                  <strong className="text-white block mb-1">Todo o Brasil:</strong>
                  Atendimento online via AnyDesk/RustDesk. Resolvemos seu problema onde você estiver.
                </span>
              </p>
              
              <p className="flex items-center gap-2 mt-4 pt-4 border-t border-slate-800">
                <Phone className="w-4 h-4 text-blue-400" />
                {phoneNumber}
              </p>
              
              <p className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-blue-400" />
                Suporte ágil. Você chama, a gente atende.
              </p>
            </div>
          </div>

          {/* Coluna 3: CTA Final */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">
              Garantia de Solução
            </h4>
            
            <div className="mt-4 space-y-4">
              <div className="flex items-center gap-2 text-green-400 bg-white/5 p-3 rounded-xl border border-white/10">
                <CheckCircle2 className="w-5 h-5 shrink-0" />
                <span className="text-sm font-semibold">
                  Se não consertarmos, você não paga.
                </span>
              </div>
              
              <WhatsAppButton 
                buttonText="Falar no WhatsApp"
                message="Olá! Estou no rodapé do site da Ajuda Ajato e preciso tirar uma dúvida técnica."
                className="w-full text-base py-3" 
              />
            </div>
          </div>
        </div>

        {/* Rodapé Inferior */}
        <div className="border-t border-slate-800 pt-8 text-center text-gray-400">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* CORREÇÃO AQUI: Ano fixo para evitar erro de prerender no Next.js */}
            <p className="text-sm">&copy; 2026 Ajuda Ajato. Todos os direitos reservados.</p>

            <div className="flex gap-4 text-sm">
              <Link
                href="/politica-de-privacidade"
                className="hover:text-white underline transition-colors"
              >
                Política de Privacidade
              </Link>
              <span className="text-slate-700 hidden md:inline">|</span>
              <p className="hidden md:block">Suporte Técnico Remoto de Informática</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
