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
  applicationName: "Simples Solução TI",

  // AJUSTE 1: Title atualizado para priorizar "empresa de TI no RJ"
  title: "Empresa de TI no RJ | Suporte e Terceirização | Simples Solução TI",

  description:
    "Empresa de TI no RJ especializada em suporte técnico, terceirização de TI e gestão com SLA. Atendimento empresarial rápido no Rio de Janeiro.",

  // AJUSTE 2: Keywords expandidas com termos que geram cliques nos anúncios
  keywords: [
    "suporte de TI",
    "suporte de TI para empresas",
    "suporte de TI RJ",
    "empresa de TI no Rio de Janeiro",
    "empresa de TI RJ",
    "empresa de TI no RJ",
    "terceirização de TI",
    "gestão de TI empresarial",
    "suporte técnico corporativo",
    "TI para empresas RJ",
    "MSP Rio de Janeiro",
    "manutenção de servidores",
    "consultoria de TI RJ",
  ],

  authors: [{ name: "Simples Solução TI" }],
  creator: "Simples Solução TI",

  robots: {
    index: true,
    follow: true,
  },

  // AJUSTE 4: Canonical URL adicionada
  alternates: {
    canonical: "https://rj.simplessolucao.com.br/",
  },

  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://rj.simplessolucao.com.br",
    siteName: "Simples Solução TI",
    title: "Empresa de TI no RJ | Suporte e Terceirização | Simples Solução TI",
    description:
      "Empresa de TI no RJ especializada em suporte corporativo, terceirização e gestão de TI com SLA. Atendemos Grande Rio, Niterói e Lagos.",
    images: [
      {
        // AJUSTE 3: Uniformizado para .webp (era .jpg aqui e .webp no Twitter)
        url: "https://rj.simplessolucao.com.br/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Simples Solução TI - Empresa de TI no Rio de Janeiro",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Empresa de TI no RJ | Suporte e Terceirização | Simples Solução TI",
    description:
      "Empresa de TI no RJ com suporte técnico empresarial, terceirização de TI e atendimento com SLA no Rio de Janeiro.",
    images: ["https://rj.simplessolucao.com.br/og-image.webp"],
  },
};

// AJUSTE 6: Schema LocalBusiness para relevância local no Google
const schemaLocalBusiness = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Simples Solução TI",
  description:
    "Empresa de TI no RJ especializada em suporte corporativo, terceirização e gestão de TI com SLA.",
  url: "https://rj.simplessolucao.com.br",
  telephone: "+55-21-3529-7993",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Rio de Janeiro",
    addressRegion: "RJ",
    addressCountry: "BR",
  },
  areaServed: [
    "Rio de Janeiro",
    "Niterói",
    "Duque de Caxias",
    "Nova Iguaçu",
    "Cabo Frio",
    "Búzios",
  ],
  serviceType: [
    "Suporte de TI",
    "Terceirização de TI",
    "Gestão de TI",
    "Help Desk",
    "Manutenção de Servidores",
    "Consultoria de TI",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        {/* AJUSTE 5: Meta tags de geolocalização */}
        <meta name="geo.region" content="BR-RJ" />
        <meta name="geo.placename" content="Rio de Janeiro" />
        <meta name="geo.position" content="-22.9068;-43.1729" />
      </head>

      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-zinc-50 dark:bg-black min-h-screen min-w-full`}
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

        {/* AJUSTE 6: Schema LocalBusiness */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemaLocalBusiness),
          }}
        />

        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Suspense>{children}</Suspense>
        </ThemeProvider>

        {/* Componente que gerencia o carregamento de scripts externos */}
        <ThirdPartyScripts />

        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
