"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

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

    if (typeof window !== "undefined" && window.dataLayer) {
      window.dataLayer.push({
        event: "conversion_formulario",
        button_location: "contact_form",
      });
    }

    // Lembrete: Futuramente, integre isso com o Make, n8n ou Formspree para receber por e-mail/WhatsApp
    setTimeout(() => {
      setLoading(false);
      router.push("/obrigado");
    }, 1500);
  };

  return (
    <section id="contact-section" className="py-20 bg-slate-900 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Prefere enviar uma mensagem?
        </h2>

        <p className="text-gray-300 mb-10 text-lg">
          Descreva seu problema abaixo. Nossa equipe analisará a situação e retornará com o orçamento e as instruções para o acesso remoto.
        </p>

        <form
          onSubmit={handleSubmit}
          className="bg-slate-800 p-8 rounded-3xl shadow-xl space-y-6 text-left"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-1 text-sm font-medium">Seu Nome</label>
              <input
                type="text"
                required
                placeholder="Ex: João da Silva"
                className="w-full px-4 py-3 rounded-xl bg-slate-700 border border-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow"
              />
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium">Telefone / WhatsApp</label>
              <input
                type="tel"
                required
                placeholder="(DDD) 9XXXX-XXXX"
                className="w-full px-4 py-3 rounded-xl bg-slate-700 border border-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow"
              />
            </div>
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium">E-mail</label>
            <input
              type="email"
              required
              placeholder="seu.email@exemplo.com"
              className="w-full px-4 py-3 rounded-xl bg-slate-700 border border-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium">
              Descreva o problema (Seja o mais detalhista possível)
            </label>
            <textarea
              rows={4}
              required
              placeholder="Ex: Meu computador está muito lento e a internet fica caindo toda hora..."
              className="w-full px-4 py-3 rounded-xl bg-slate-700 border border-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl transition disabled:opacity-50 text-lg"
          >
            {loading ? "Processando..." : "Solicitar Orçamento Gratuito"}
          </button>

          <p className="text-sm text-gray-400 text-center mt-4">
            Seu problema é muito urgente? <a href="https://wa.me/5521940421350" target="_blank" rel="noopener" className="text-blue-400 hover:underline">Chame direto no WhatsApp.</a>
          </p>
        </form>
      </div>
    </section>
  );
};
