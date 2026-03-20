import Image from "next/image";
import { StarIcon } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    company: "Equipe Savior",
    logo: "/feedback-savior.webp",
    text: "A Simples Solução TI transformou completamente nossa infraestrutura de TI. Hoje temos mais estabilidade, segurança e produtividade no dia a dia.",
    rating: 5,
  },
  {
    company: "Profit Contabilidade",
    logo: "/feedback-profit.webp",
    text: "O suporte é rápido, profissional e realmente resolve. Reduzimos falhas, ganhamos performance e hoje temos tranquilidade com nossa TI.",
    rating: 5,
  },
  {
    company: "Grupo PLL",
    logo: "/feedback-pll.webp",
    text: "Parceria estratégica essencial para nossa expansão. Infraestrutura segura, atendimento humano e respostas rápidas sempre que precisamos.",
    rating: 5,
  },
];

export const TestimonialsSection = () => {
  return (
    <section
      id="testimonials-section"
      className="py-20 bg-linear-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden scroll-mt-24"
      style={{ contentVisibility: "auto", containIntrinsicSize: "500px" }}
    >
      {/* Background decorativo — não afeta LCP */}
      <div className="absolute inset-0 opacity-10 hidden md:block pointer-events-none">
        <Image
          src="/imagem1.webp"
          alt="Ambiente corporativo moderno"
          fill
          sizes="(min-width: 768px) 100vw, 0vw"
          className="object-cover"
          priority={false}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Empresas que Confiam na Simples Solução TI
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Mais de 100 empresas no Rio de Janeiro já aumentaram sua segurança,
            produtividade e estabilidade com nossas soluções de TI.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-[1.02]"
            >
              <CardContent className="p-8">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <StarIcon
                      key={i}
                      className="w-5 h-5 fill-yellow-400 text-yellow-400"
                      aria-hidden="true"
                    />
                  ))}
                </div>

                <p className="text-gray-100 mb-6 leading-relaxed italic">
                  “{testimonial.text}”
                </p>

                <div className="border-t border-white/20 pt-4 flex flex-col items-start gap-2">
                  <div className="relative h-10 w-32">
                    <Image
                      src={testimonial.logo}
                      alt={`Logo da empresa ${testimonial.company}`}
                      fill
                      className="object-contain object-left"
                      sizes="150px"
                    />
                  </div>

                  <p className="text-sm text-gray-300 font-medium">
                    {testimonial.company}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
