import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Suspense } from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

// Importe o componente de scripts
import { ThirdPartyScripts } from "@/components/ThirdPartyScripts";

const geistSans = Geist({
  variable: "--font-geist-sans",
  display: "swap",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  display: "swap",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  applicationName: "Ajuda Ajato",

  // Title atualizado para conversão e gatilho de urgência
  title: "Ajuda Ajato | Suporte Técnico Remoto Rápido e Sem Fidelidade",

  description:
    "Pare de depender de favores. Suporte de TI 100% remoto para seu computador e rede. Atendimento imediato para profissionais em home office em todo o Brasil.",

  // Keywords expandidas para o público avulso e home office
  keywords: [
    "suporte técnico remoto",
    "consertar pc online",
    "suporte de TI home office",
    "técnico de informática online",
    "ajuda ajato",
    "manutenção de computador remoto",
    "pc lento como resolver",
    "suporte ti sem contrato",
    "assistência técnica remota",
    "configurar impressora remoto",
  ],

  authors: [{ name: "Ajuda Ajato" }],
  creator: "Ajuda Ajato",

  robots: {
    index: true,
    follow: true,
  },

  // Canonical URL apontando para o domínio oficial
  alternates: {
    canonical: "https://www.ajudaajato.com.br/",
  },

  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://www.ajudaajato.com.br",
    siteName: "Ajuda Ajato",
    title: "Ajuda Ajato | Suporte Técnico Remoto",
    description:
      "Problemas no computador? Resolvemos na hora, 100% online. Preço fixo, sem visitas e sem mensalidade.",
    images: [
      {
        // Apontando para a sua logo azul
        url: "https://www.ajudaajato.com.br/azul.png",
        width: 1200,
        height: 630,
        alt: "Ajuda Ajato - Suporte Remoto",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Ajuda Ajato | Suporte Remoto Imediato",
    description:
      "Suporte de TI 100% online para profissionais em home office. Resolvemos seu problema agora.",
    images: ["https://www.ajudaajato.com.br/azul.png"],
  },
};

// Schema otimizado para serviço de atuação nacional (Brasil)
const schemaOrganization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Ajuda Ajato",
  description:
    "Suporte técnico de TI 100% remoto para pessoas físicas e profissionais liberais.",
  url: "https://www.ajudaajato.com.br",
  logo: "https://www.ajudaajato.com.br/azul.png",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+55-21-94042-1350",
    contactType: "customer service",
    areaServed: "BR",
    availableLanguage: "Portuguese"
  },
  makesOffer: [
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Suporte Técnico Remoto",
        description: "Resolução de lentidão, remoção de vírus e configuração de sistemas remotamente."
      }
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-50 min-h-screen min-w-full text-gray-900`}
      >
        {/* GTM noscript */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${process.env.NEXT_PUBLIC_GTM_ID}`}
            height="0"
            width="0"
            className="none hidden"
          />
        </noscript>

        {/* Schema de Organização Nacional */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemaOrganization),
          }}
        />

        <ThemeProvider
          attribute="class"
          defaultTheme="light" // Alterado para light para combinar com a identidade visual da Ajuda Ajato
          enableSystem
          disableTransitionOnChange
        >
          <Suspense>{children}</Suspense>
        </ThemeProvider>

        <ThirdPartyScripts />

        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
