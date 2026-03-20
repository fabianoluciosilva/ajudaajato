"use client";

import Link from "next/link";
import {
  ArrowLeftIcon,
  CheckCircleIcon,
  SmartphoneIcon,
  PhoneIcon,
  ClockIcon,
  AlertTriangleIcon,
} from "lucide-react";

const PHONE_E164 = "552135297993"; // WhatsApp (sem +)
const PHONE_TEL = "2135297993"; // Telefone

// Mensagem pré-configurada (lead novo + urgência)
const WHATSAPP_MESSAGE =
  "Olá! Acabei de enviar o formulário no site da Simples Solução TI. Ainda não sou cliente, mas estou com *urgência* para resolver um problema de TI na minha empresa. Pode me atender o quanto antes, por favor?";

const whatsappHref = `https://wa.me/${PHONE_E164}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE
)}`;

export const ThanksPage = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-slate-900">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-linear-to-br from-blue-900/95 via-slate-900/90 to-cyan-900/95 z-10" />
        <img
          className="w-full h-full object-cover opacity-40"
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=80"
          alt="Suporte técnico empresarial"
        />
      </div>

      {/* Conteúdo */}
      <div className="relative z-20 w-full max-w-3xl px-4 sm:px-6 lg:px-8 text-center py-10">
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 md:p-12 shadow-2xl">
          {/* Ícone */}
          <div className="inline-flex items-center justify-center w-20 h-20 bg-linear-to-br from-green-400 to-cyan-400 rounded-full mb-6 shadow-lg shadow-green-500/30">
            <CheckCircleIcon className="w-10 h-10 text-white" />
          </div>

          {/* Título */}
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Solicitação Recebida!
          </h1>

          {/* Subtítulo */}
          <p className="text-lg text-gray-200 mb-6 max-w-md mx-auto leading-relaxed">
            Sua solicitação foi enviada com sucesso. Um especialista vai te
            chamar em breve. Atendimento exclusivo para{" "}
            <strong className="text-cyan-400">empresas (CNPJ)</strong>.
          </p>

          {/* Selo de urgência */}
          <div className="mx-auto mb-8 max-w-xl bg-amber-500/10 border border-amber-500/30 rounded-2xl p-4 text-left">
            <div className="flex items-start gap-3">
              <AlertTriangleIcon className="w-5 h-5 text-amber-400 mt-0.5 shrink-0" />
              <div>
                <p className="text-white font-semibold">
                  Se o seu caso é urgente:
                </p>
                <p className="text-gray-200 text-sm leading-relaxed">
                  Clique no WhatsApp abaixo e envie a mensagem já pronta para
                  atendimento prioritário.
                </p>
              </div>
            </div>
          </div>

          {/* Bloco de Ação */}
          <div className="bg-white rounded-2xl p-6 md:p-8 mb-10 text-slate-900 shadow-xl border-t-4 border-cyan-500">
            <div className="flex items-center justify-center gap-2 mb-4 text-cyan-700 font-bold uppercase tracking-wider text-sm">
              <ClockIcon className="w-4 h-4" />
              Atendimento Prioritário
            </div>

            <h3 className="text-xl font-bold mb-6">
              Fale agora com um especialista:
            </h3>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {/* WhatsApp com mensagem pré-configurada */}
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-green-500 hover:bg-green-600 text-white font-bold transition-all hover:scale-105 shadow-md w-full"
              >
                <SmartphoneIcon className="w-5 h-5" />
                WhatsApp (Mensagem Pronta)
              </a>

              {/* Telefone */}
              <a
                href={`tel:${PHONE_TEL}`}
                className="flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold transition-all hover:scale-105 shadow-md w-full"
              >
                <PhoneIcon className="w-5 h-5" />
                (21) 3529-7993
              </a>
            </div>

            <p className="mt-4 text-[11px] text-gray-500 italic">
              Atendimento técnico corporativo • Não atendemos pessoa física
            </p>
          </div>

          {/* Voltar */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors text-sm font-medium"
          >
            <ArrowLeftIcon className="w-4 h-4" />
            Voltar para o site
          </Link>
        </div>
      </div>
    </div>
  );
};
