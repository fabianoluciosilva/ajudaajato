"use client";

import Image from "next/image";
import Link from "next/link";
import { Inter, Outfit } from "next/font/google";

// Fontes
const inter = Inter({ subsets: ["latin"], weight: ["400", "600"], display: "swap", variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], weight: ["300", "400", "700"], display: "swap", variable: "--font-outfit" });

export const metadata = {
  title: "Suporte PJe e TI para Advogados no RJ | Token OAB e Certificado Digital",
  description:
    "Suporte PJe, Token OAB, Certificado Digital e TI para Advogados no Rio de Janeiro. Atendimento imediato para erros de Java, peticionamento e tribunais digitais.",
};

export default function AdvocaciaClient() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "name": "Suporte PJe e TI para Advogados RJ | Simples Solução TI",
        "description":
          "Suporte técnico especializado para advogados no Rio de Janeiro. Solução imediata para Token OAB, Certificado Digital, PJe, Shodo, e tribunais digitais.",
        "image": "https://rj.simplessolucao.com.br/simplessolucao-logo.webp",
        "@id": "https://rj.simplessolucao.com.br/advocacia",
        "url": "https://rj.simplessolucao.com.br/advocacia",
        "telephone": "+55-21-3529-7993",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Rio de Janeiro",
          "addressRegion": "RJ",
          "addressCountry": "BR",
        },
        "areaServed": [
          "Rio de Janeiro",
          "Niterói",
          "Duque de Caxias",
          "Nova Iguaçu",
          "Cabo Frio",
          "Búzios",
        ],
      },
      {
        "@type": "Service",
        "name": "Suporte PJe e TI para Advogados",
        "areaServed": "Rio de Janeiro",
        "provider": {
          "@type": "LocalBusiness",
          "name": "Simples Solução TI",
        },
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Início", "item": "https://rj.simplessolucao.com.br" },
          { "@type": "ListItem", "position": 2, "name": "Advocacia", "item": "https://rj.simplessolucao.com.br/advocacia" },
        ],
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Meu token OAB não é reconhecido no PJe. Vocês resolvem?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Sim. Configuramos drivers de tokens A1 e A3, hierarquias de certificação e compatibilidade com TJRJ, TRT, JFRJ e demais tribunais.",
            },
          },
          {
            "@type": "Question",
            "name": "Vocês resolvem erro de Java no PJe Office ou Shodo?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Sim. Mantemos Java, navegadores e plugins nas versões homologadas pelos tribunais para garantir funcionamento pleno.",
            },
          },
          {
            "@type": "Question",
            "name": "Vocês atendem advogados em home office?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Sim. Configuramos VPN segura e acesso remoto para que você trabalhe de qualquer lugar com total segurança.",
            },
          },
        ],
      },
    ],
  };

  return (
    <div className={`advocacia-page ${inter.variable} ${outfit.variable}`}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <style jsx global>{`
        :root {
          --primary: #003366;
          --accent: #00a8e8;
          --dark: #1e1e1e;
          --gray: #f4f7f9;
          --text: #444;
          --border: #e1e8ed;
          --font-main: ${inter.style.fontFamily};
          --font-heading: ${outfit.style.fontFamily};
          --footer-bg: #0f172a;
          --footer-border: #1e293b;
          --footer-text: #94a3b8;
          --footer-title: #ffffff;
          --footer-cyan: #22d3ee;
        }

        html, body { height: 100%; margin: 0; padding: 0; overflow-x: hidden; }

        .advocacia-page {
          font-family: var(--font-main), sans-serif;
          color: var(--text);
          line-height: 1.8;
          background-color: #fff;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }

        .breadcrumb {
          padding: 10px 0;
          font-size: 0.9rem;
          color: #666;
          background: #f8f9fa;
          border-bottom: 1px solid var(--border);
        }
        .breadcrumb a { color: var(--primary); text-decoration: none; font-weight: 600; }
        .breadcrumb a:hover { text-decoration: underline; }
        .breadcrumb span { color: #999; margin: 0 5px; }

        .advocacia-page h1, .advocacia-page h2, .advocacia-page h3 {
          font-family: var(--font-heading), sans-serif;
          color: var(--primary);
        }

        .container {
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 25px;
          width: 100%;
          box-sizing: border-box;
        }

        header {
          padding: 20px 0;
          border-bottom: 4px solid var(--accent);
          background: #fff;
          text-align: center;
        }

        .logo-container {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          height: 80px;
        }

        .intro {
          padding: 70px 0 50px;
          text-align: left;
        }

        .intro h1 {
          font-size: 2.6rem;
          margin-bottom: 20px;
          line-height: 1.2;
        }

        .intro h2 {
          font-size: 1.5rem;
          margin-bottom: 20px;
          color: var(--primary);
        }

        .highlight { color: var(--accent); }

        .intro p {
          font-size: 1.1rem;
          margin-bottom: 20px;
          max-width: 900px;
        }

        .cta-primary {
          display: inline-block;
          background: var(--accent);
          color: #fff;
          padding: 14px 28px;
          border-radius: 6px;
          font-weight: 700;
          text-decoration: none;
          margin-top: 20px;
        }
        .cta-primary:hover { background: #008ac4; }

        .services {
          padding: 60px 0;
          background: #fff;
        }

        .services h2 {
          text-align: center;
          margin-bottom: 40px;
        }

        .services ul {
          max-width: 800px;
          margin: 0 auto;
          list-style: none;
          padding: 0;
        }

        .services li {
          padding: 12px 0;
          border-bottom: 1px solid var(--border);
          font-weight: 600;
        }

        .comparison {
          padding: 60px 0;
          background: var(--gray);
        }
        .comparison h2 {
          text-align: center;
          margin-bottom: 40px;
        }

        .table-responsive {
          width: 100%;
          overflow-x: auto;
          -webkit-overflow-scrolling: touch;
          border-radius: 10px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.05);
          background: white;
        }

        table {
          width: 100%;
          min-width: 600px;
          border-collapse: collapse;
          background: white;
        }
        th, td {
          padding: 20px;
          text-align: left;
          border-bottom: 1px solid var(--border);
        }
        th {
          background: var(--primary);
          color: white;
          text-transform: uppercase;
          font-size: 0.85rem;
          letter-spacing: 1px;
        }
        .problem {
          color: #c0392b;
          font-weight: 600;
          background: #fff8f8;
          width: 45%;
        }
        .solution {
          color: #27ae60;
          font-weight: 600;
          background: #f8fffb;
        }

        .cases {
          padding: 80px 0;
        }
        .cases h2 {
          margin-bottom: 20px;
          text-align: center;
        }

        .cases p {
          text-align: center;
          max-width: 800px;
          margin: 0 auto 40px;
        }

        .grid-cases {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 30px;
        }

        .case-card {
          background: white;
          border: 1px solid var(--border);
          padding: 30px;
          border-radius: 8px;
          transition: 0.3s;
        }
        .case-card:hover {
          border-color: var(--accent);
          transform: translateY(-5px);
        }

        .tag {
          display: inline-block;
          background: var(--gray);
          color: var(--primary);
          padding: 4px 12px;
          border-radius: 4px;
          font-size: 0.75rem;
          font-weight: 700;
          margin-bottom: 15px;
          text-transform: uppercase;
        }

        .expertise {
          padding: 60px 0;
          background: var(--primary);
          color: white;
          text-align: center;
        }
        .expertise h2 { color: white; margin-bottom: 20px; }

        .systems-list {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 15px;
          margin-top: 30px;
        }

        .system-tag {
          border: 1px solid rgba(255,255,255,0.3);
          padding: 8px 20px;
          border-radius: 4px;
          font-size: 0.9rem;
          background: rgba(255,255,255,0.1);
        }

        .reflexion {
          padding: 80px 0;
          text-align: center;
          background: #fff;
        }

        .reflexion blockquote {
          font-size: 1.5rem;
          font-style: italic;
          color: #333;
          max-width: 800px;
          margin: 0 auto;
          position: relative;
        }

        .reflexion blockquote::before {
          content: '"';
          font-size: 5rem;
          color: var(--accent);
          position: absolute;
          left: -40px;
          top: -40px;
          opacity: 0.3;
        }

        .faq-section {
          padding: 60px 0;
          background-color: var(--gray);
        }

        .faq-section h2 {
          text-align: center;
          margin-bottom: 40px;
        }

        .faq-item {
          background: white;
          padding: 25px;
          margin-bottom: 20px;
          border-radius: 8px;
          border: 1px solid var(--border);
        }

        .faq-item h3 {
          font-size: 1.1rem;
          margin-bottom: 10px;
          color: var(--primary);
        }

        .faq-item p {
          margin: 0;
          font-size: 1rem;
          color: #555;
        }

        .new-footer {
          background-color: var(--footer-bg);
          border-top: 1px solid var(--footer-border);
          padding: 48px 0 24px;
          color: var(--footer-text);
          margin-top: auto;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 32px;
          margin-bottom: 32px;
        }

        .footer-col h3, .footer-col h4 {
          font-weight: 700;
          color: var(--footer-title);
          margin-bottom: 16px;
          margin-top: 0;
        }

        .footer-p {
          margin-bottom: 16px;
          line-height: 1.6;
        }

        .footer-small {
          font-size: 0.75rem;
          font-family: monospace;
          color: #64748b;
        }

        .footer-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 0.875rem;
          margin-bottom: 12px;
        }

        .footer-bottom {
          border-top: 1px solid var(--footer-border);
          padding-top: 32px;
          text-align: center;
          font-size: 0.875rem;
          color: #64748b;
        }

        @media (min-width: 768px) {
          .intro h1 { font-size: 2.2rem; }
          .footer-grid { grid-template-columns: repeat(3, 1fr); }
        }
      `}</style>

      {/* HEADER */}
      <header>
        <div className="container">
          <div className="logo-container">
            <Image
              src="/simplessolucao-logo.webp"
              alt="Simples Solução TI"
              width={250}
              height={80}
              priority
              style={{ width: "auto", height: "auto", maxHeight: "80px", objectFit: "contain" }}
            />
          </div>
        </div>
      </header>

      {/* BREADCRUMB */}
      <nav aria-label="Breadcrumb" className="breadcrumb">
        <div className="container">
          <Link href="/">Início</Link><span>/</span><span style={{ color: "var(--text)" }}>Advocacia</span>
        </div>
      </nav>

      {/* HERO */}
      <section className="intro">
        <div className="container">
          <h1>
            Suporte PJe e TI para Advogados no RJ — <span className="highlight">Token OAB, Certificado Digital e Tribunais</span>
          </h1>
          <h2>
            Fim dos erros de Java, travamentos e problemas de assinatura digital no seu peticionamento.
          </h2>
          <p>
            Atuamos exclusivamente com <strong>suporte de TI para advogados e escritórios jurídicos no Rio de Janeiro</strong>, garantindo
            funcionamento perfeito do PJe, Shodo, e-Proc, certificados digitais e sistemas dos tribunais (TJRJ, TRT, JFRJ).
          </p>
          <Link href="#contato" className="cta-primary">
            Solicitar diagnóstico gratuito de TI jurídico
          </Link>
        </div>
      </section>

      {/* SERVIÇOS */}
      <section className="services">
        <div className="container">
          <h2>Serviços de TI para Advogados</h2>
          <ul>
            <li>Suporte PJe e peticionamento eletrônico</li>
            <li>Configuração de Token OAB e Certificado Digital</li>
            <li>Correção de erros de Java, plugins e navegadores</li>
            <li>Terceirização de TI para escritórios jurídicos</li>
            <li>Backup corporativo e proteção contra ransomware</li>
            <li>Acesso remoto seguro (VPN)</li>
          </ul>
        </div>
      </section>

      {/* COMPARAÇÃO */}
      <section className="comparison">
        <div className="container">
          <h2>Problemas Jurídicos vs. Simples Solução TI</h2>
          <div className="table-responsive">
            <table>
              <thead>
                <tr>
                  <th scope="col">Problemas Comuns</th>
                  <th scope="col">Como a Simples Solução TI Resolve</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="problem">Token não reconhecido na hora de assinar.</td>
                  <td className="solution">Configuração avançada de certificados A1/A3 e drivers homologados.</td>
                </tr>
                <tr>
                  <td className="problem">Erro de Java no PJe Office ou Shodo.</td>
                  <td className="solution">Padronização do ambiente conforme exigência dos tribunais.</td>
                </tr>
                <tr>
                  <td className="problem">Medo de perder arquivos e processos.</td>
                  <td className="solution">Backup criptografado automático e redundante.</td>
                </tr>
                <tr>
                  <td className="problem">Internet lenta prejudicando peticionamento.</td>
                  <td className="solution">Otimização de rede para tráfego jurídico prioritário.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CASES */}
      <section className="cases">
        <div className="container">
          <h2>Resultados para Escritórios Jurídicos</h2>
          <p>
            Advogados e bancas no RJ confiam na Simples Solução TI para manter seus sistemas estáveis, seguros e operacionais.
          </p>
          <div className="grid-cases">
            <div className="case-card">
              <span className="tag">Alta Performance</span>
              <h3>Peticionamento sem travamentos</h3>
              <p>Ambientes configurados para assinar e enviar petições em segundos, sem erros técnicos.</p>
            </div>
            <div className="case-card">
              <span className="tag">Mobilidade</span>
              <h3>Seu escritório onde você estiver</h3>
              <p>Acesso remoto seguro a processos, contratos e sistemas internos via VPN corporativa.</p>
            </div>
            <div className="case-card">
              <span className="tag">Segurança</span>
              <h3>Proteção total de dados jurídicos</h3>
              <p>Blindagem contra ransomware, vazamentos e perda de informações sensíveis.</p>
            </div>
            <div className="case-card">
              <span className="tag">Atendimento Imediato</span>
              <h3>Suporte técnico sem “tecnês”</h3>
              <p>Falamos sua língua e resolvemos rápido, inclusive via WhatsApp.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SISTEMAS */}
      <section className="expertise">
        <div className="container">
          <h2>Expertise em Tribunais Digitais</h2>
          <div className="systems-list">
            <div className="system-tag">PJe (Processo Judicial Eletrônico)</div>
            <div className="system-tag">e-Proc / Projudi</div>
            <div className="system-tag">Certificado Digital (Token/Cartão)</div>
            <div className="system-tag">PJe-Calc</div>
            <div className="system-tag">Shodo / PJe Office</div>
            <div className="system-tag">TJRJ / TRT / JFRJ</div>
          </div>
        </div>
      </section>

      {/* REFLEXÃO */}
      <section className="reflexion">
        <div className="container">
          <blockquote>
            "O advogado cuida do direito. Nós garantimos que a tecnologia não atrapalhe a justiça."
          </blockquote>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq-section">
        <div className="container">
          <h2>Perguntas Frequentes</h2>

          <div className="faq-item">
            <h3>Meu token OAB não é reconhecido no PJe. Vocês resolvem?</h3>
            <p>
              Sim. Configuramos drivers de tokens A1 e A3, hierarquias de certificação e compatibilidade com TJRJ, TRT, JFRJ e demais tribunais.
            </p>
          </div>

          <div className="faq-item">
            <h3>Vocês resolvem erro de Java no PJe Office ou Shodo?</h3>
            <p>
              Sim. Mantemos Java, navegadores e plugins nas versões homologadas pelos tribunais para garantir funcionamento pleno.
            </p>
          </div>

          <div className="faq-item">
            <h3>Vocês atendem advogados em home office?</h3>
            <p>
              Sim. Configuramos VPN segura e acesso remoto para que você trabalhe de qualquer lugar com total segurança.
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="new-footer" id="contato">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-col">
              <h3>Simples Solução TI</h3>
              <p className="footer-p">
                Especialistas em suporte de TI para advocacias no Rio de Janeiro.
              </p>
              <p className="footer-small">CNPJ: 14.339.202/0001-77</p>
            </div>
            <div className="footer-col">
              <h4>Contato</h4>
              <div className="footer-item">(21) 3529-7993</div>
            </div>
            <div className="footer-col">
              <h4>Disponibilidade</h4>
              <div className="footer-item">Atendimento imediato</div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2026 Simples Solução TI.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
