import { Metadata } from "next";
import AdvocaciaClient from "./AdvocaciaClient";

// Configuração de SEO (Server Side)
export const metadata: Metadata = {
  title: "TI para Advogados RJ | Suporte PJe, Token OAB | Simples Solução",
  description: "Suporte especializado em PJe, e-SAJ, Token OAB e Certificado Digital para advogados no Rio de Janeiro. Resolva erros de Java e peticionamento. Atendimento emergencial.",
  alternates: {
    canonical: 'https://rj.simplessolucao.com.br/advocacia'
  },
  openGraph: {
    title: "TI para Advogados - Especialistas PJe e Token OAB",
    description: "Suporte PJe, Token OAB, e-SAJ. Nunca perca prazos por problemas técnicos.",
    url: 'https://rj.simplessolucao.com.br/advocacia',
    siteName: 'Simples Solução TI',
    locale: 'pt_BR',
    type: 'website',
    images: [{
      url: 'https://rj.simplessolucao.com.br/og-advocacia.jpg',
      width: 1200,
      height: 630,
      alt: 'Suporte TI Especializado para Advogados'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    title: "TI Especializada em Advocacia RJ",
    description: "Suporte PJe e Certificado Digital",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    }
  }
};

export default function Page() {
  return <AdvocaciaClient />;
}
