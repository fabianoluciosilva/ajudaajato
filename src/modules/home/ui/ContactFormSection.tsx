"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

// Estendendo a interface Window para que o TypeScript reconheça o dataLayer do GTM
declare global {
  interface Window {
    dataLayer: Record<string, any>[];
  }
}

export const ContactFormSection = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    // AJUSTE 7: Disparar evento de conversão para o GTM/Google Ads
    // antes do redirecionamento para /obrigado
    if (typeof window !== "undefined" && window.dataLayer) {
      window.dataLayer.push({
        event: "conversion_formulario",
        button_location: "contact_form",
      });
    }

    // Simulação de envio (substitua por API futuramente)
    setTimeout(() => {
      setLoading(false);
      router.push("/obrigado");
    }, 1500);
  };

  return (
    <section id="contact-section" className="py-20 bg-slate-900 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Solicite Suporte de TI Empresarial
        </h2>

        <p className="text-gray-300 mb-10">
          Atendimento corporativo com SLA e resposta rápida.{" "}
          Exclusivo para empresas no Rio de Janeiro.
        </p>

        <form
          onSubmit={handleSubmit}
          className="bg-slate-800 p-8 rounded-3xl shadow-xl space-y-6 text-left"
        >
          <div>
            <label className="block mb-1 text-sm font-medium">Nome</label>
            <input
              type="text"
              required
              placeholder="Seu nome"
              className="w-full px-4 py-3 rounded-xl bg-slate-700 border border-slate-600 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium">E-mail</label>
            <input
              type="email"
              required
              placeholder="seu@email.com"
              className="w-full px-4 py-3 rounded-xl bg-slate-700 border border-slate-600 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium">
              Telefone / WhatsApp
            </label>
            <input
              type="tel"
              required
              placeholder="(21) 9XXXX-XXXX"
              className="w-full px-4 py-3 rounded-xl bg-slate-700 border border-slate-600 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium">
              Como podemos ajudar?
            </label>
            <textarea
              rows={4}
              required
              placeholder="Descreva sua necessidade de TI"
              className="w-full px-4 py-3 rounded-xl bg-slate-700 border border-slate-600 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-4 rounded-xl transition disabled:opacity-50"
          >
            {loading ? "Enviando..." : "Quero Orçamento em 5 Minutos"}
          </button>

          <p className="text-xs text-gray-400 text-center mt-2">
            Atendimento exclusivo para empresas • Não atendemos pessoa física
          </p>
        </form>
      </div>
    </section>
  );
};
