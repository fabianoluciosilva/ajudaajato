"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ZapIcon, MonitorSmartphone } from "lucide-react";
import { WhatsAppButton } from "./WhatsAppButton"; // Importando o nosso componente

// Estatísticas adaptadas para o modelo avulso / pessoa física
const stats = [
  { number: "100%", label: "Atendimento Remoto" },
  { number: "+800", label: "Problemas Resolvidos" },
  { number: "Imediato", label: "Tempo de Resposta" },
  { number: "Risco Zero", label: "Garantia de Solução" },
  { number: "Zero", label: "Mensalidades" },
];

export const HomeHeroSection = () => {
  return (
    <section
      id="home-hero-section"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        {/* Mantivemos um fundo escuro elegante, combinando com a nova identidade azul */}
        <div className="absolute inset-0 bg-linear-to-br from-blue-900/95 via-slate-900/90 to-sky-900/95 z-10" />

        <div className="hidden md:block absolute inset-0">
          {/* Lembre-se de colocar uma imagem de alguém trabalhando feliz em casa no formato webp */}
          <Image
            src="/imagem-home-office.webp" 
            alt="Profissional trabalhando em home office com computador funcionando perfeitamente"
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
            Atendimento para todo o Brasil • Resolução em minutos
          </span>
        </div>

        {/* H1 FOCADO NA DOR DO CLIENTE */}
        <h1 className="mb-6 text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
          Seu computador parou no meio do <br className="hidden md:block" />
          <span className="bg-linear-to-r from-sky-400 to-blue-400 bg-clip-text text-transparent">
            expediente de trabalho?
          </span>
        </h1>

        {/* Parágrafo tocando na ferida: sobrinho, TI da empresa e visitas */}
        <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-4xl mx-auto leading-relaxed">
          Chega de pedir favores para o sobrinho ou esperar dias pela boa vontade do TI da empresa.{" "}
          <strong className="text-sky-400">
            Resolvemos seu problema de informática na hora, 100% online.
          </strong>{" "}
          Sem técnicos estranhos na sua casa e sem pagar mensalidades.
        </p>

        {/* BLOCO “SEO-SAFE” - Palavras-chave para o Google Ads */}
        <p className="sr-only">
          Suporte técnico remoto para home office. Consertar PC online. Assistência técnica de computador à distância. Configuração de rede, impressora e remoção de vírus. Técnico de informática imediato.
        </p>

        {/* --- ÁREA DE BOTÕES DE CONVERSÃO --- */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          
          {/* Botão Primário: Urgência Total */}
          <WhatsAppButton 
            buttonText="Socorro Imediato via WhatsApp"
            message="Urgente: Olá! Meu computador está com problema e não consigo trabalhar. Preciso de suporte remoto agora!"
            className="w-full sm:w-auto text-lg px-8 py-4" 
          />

          {/* Botão Secundário: Redireciona para os preços/serviços */}
          <Link
            id="botao-servicos"
            className="flex items-center gap-2 px-8 py-4 text-lg font-bold text-white group rounded-xl transition-all duration-300 border-2 border-white/20 hover:border-sky-400 hover:text-sky-400 shadow-lg hover:shadow-sky-400/20 bg-white/5 backdrop-blur-sm hover:bg-white/10 w-full sm:w-auto justify-center"
            href="/#servicos"
          >
            <MonitorSmartphone className="mr-2 h-5 w-5" />
            Ver Serviços e Valores
          </Link>
        </div>
        {/* --- FIM DA ÁREA DE BOTÕES --- */}

        {/* Grade de Estatísticas */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300"
            >
              <div className="text-2xl md:text-3xl font-bold text-white mb-2">
                {stat.number}
              </div>
              <div className="text-gray-300 text-sm md:text-base leading-tight">{stat.label}</div>
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
