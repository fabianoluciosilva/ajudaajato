"use client";

import { useEffect } from "react";

export default function WhatsappRedirectPage() {
  // Configuração dos dados
  const phoneNumber = "552140421350";
  const message = "Olá! Gostaria de solicitar um diagnóstico técnico para a minha empresa. Vi a garantia de atendimento rápido no site e aguardo o contato.";
  
  // Gera a URL formatada corretamente com codificação de caracteres
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;

  useEffect(() => {
    // Aguarda 1.5 segundos para o GTM disparar a conversão e redireciona
    const timer = setTimeout(() => {
      window.location.href = whatsappUrl;
    }, 1500);

    return () => clearTimeout(timer);
  }, [whatsappUrl]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        padding: "20px",
        textAlign: "center",
        fontFamily: "system-ui, -apple-system, sans-serif",
      }}
    >
      <h2 style={{ fontSize: "1.25rem", marginBottom: "1rem", color: "#333" }}>
        Aguarde, estamos direcionando para o WhatsApp...
      </h2>
      <p style={{ color: "#666", fontSize: "0.9rem" }}>
        Caso não abra automaticamente,{" "}
        <a
          href={whatsappUrl}
          style={{ color: "#0070f3", textDecoration: "underline" }}
        >
          clique aqui
        </a>
        .
      </p>
    </div>
  );
}
