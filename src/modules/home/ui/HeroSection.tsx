"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { SendIcon, ZapIcon } from "lucide-react";
import { WhatsAppButton } from "./WhatsAppButton"; // Importando o nosso componente

const stats = [
  { number: "+20", label: "Anos de Experiência" },
  { number: "+100", label: "Empresas Atendidas" },
  { number: "5min", label: "Resposta Garantida" },
  { number: "24/7", label: "Suporte Empresarial" },
  { number: "99.9%", label: "Disponibilidade" },
];

export const HomeHeroSection = () => {
  return (
    <section
      id="home-hero-section"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-linear-to-br from-blue-900/95 via-slate-900/90 to-cyan-900/95 z-10" />

        <div className="hidden md:block absolute inset-0">
          <Image
            src="/imagem2.webp"
            alt="Suporte de TI para empresas no Rio de Janeiro e Região dos Lagos"
            fill
            priority
            quality={70}
            sizes="(min-width: 768px) 100vw, 0vw"
            className="object-cover"
          />
        </div>
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-2 mb-8 mt-12 md:mt-0">
          <ZapIcon className="w-4 h-4 text-yellow-400" />
          <span className="text-white text-sm font-medium">
            Atendimento corporativo no RJ • Resposta em até 5 minutos
          </span>
        </div>

        {/* H1 OTIMIZADO PARA ADS: keyword + local + intenção */}
        <h1 className="mb-6 text-3xl md:text-5xl font-bold text-white leading-tight">
          Suporte de TI para Empresas no Rio de Janeiro
          <span className="block mt-2 bg-linear-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Terceirização e Gestão de TI com SLA
          </span>
        </h1>

        {/* Parágrafo com os termos exatos (natural e sem spam) */}
        <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-4xl mx-auto leading-relaxed">
          Somos uma{" "}
          <strong className="text-cyan-400">
            empresa de TI especializada em atendimento corporativo
          </strong>
          , com{" "}
          <strong>terceirização de TI com suporte empresarial</strong> e{" "}
          <strong>gestão de TI para empresas com SLA</strong>.
          <br />
          Atendemos Grande Rio, Niterói, Baixada e Região dos Lagos.
        </p>

        {/* BLOCO “SEO-SAFE” (Acessível, não escondido por display:none) */}
        <p className="sr-only">
          Suporte de TI para empresas no Rio de Janeiro. Empresa de TI
          especializada em atendimento corporativo. Terceirização de TI com
          suporte empresarial. Gestão de TI para empresas com SLA.
        </p>

        {/* --- ÁREA DE BOTÕES DE CONVERSÃO --- */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          
          {/* Botão Primário: WhatsApp (Urgência) */}
          <WhatsAppButton 
            buttonText="Falar com Especialista Agora"
            message="Olá! Estou no site da Simples Solução e preciso de suporte de TI para a minha empresa. Podemos falar?"
            className="w-full sm:w-auto" // Garante que fique bonito no celular
          />

          {/* Botão Secundário: Formulário (Assíncrono) */}
          <Link
            id="botao-formulario"
            className="flex items-center gap-2 px-8 py-4 text-lg font-bold text-white group rounded-xl transition-all duration-300 border-2 border-white/20 hover:border-cyan-400 hover:text-cyan-400 shadow-lg hover:shadow-cyan-400/20 bg-white/5 backdrop-blur-sm hover:bg-white/10 w-full sm:w-auto justify-center"
            href="/#contact-section"
          >
            <SendIcon className="mr-2 h-5 w-5" />
            Solicitar Orçamento
          </Link>
        </div>
        {/* --- FIM DA ÁREA DE BOTÕES --- */}

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300"
            >
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                {stat.number}
              </div>
              <div className="text-gray-300 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-white/60 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HomeHeroSection;
