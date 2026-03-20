import { StarIcon, UserCircle2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Maria Silva",
    role: "Consultora",
    text: "Atendimento excepcional! Resolveram meu problema em menos de 20 minutos. Recomendo para todos que precisam de suporte técnico rápido.",
    rating: 5,
  },
  {
    name: "João Santos",
    role: "Desenvolvedor Home Office",
    text: "Meu computador estava muito lento e eles otimizaram completamente. Agora está funcionando como novo. Serviço totalmente transparente e profissional!",
    rating: 5,
  },
  {
    name: "Ana Costa",
    role: "Profissional de Saúde",
    text: "Precisava configurar minha impressora em rede e eles fizeram tudo remotamente, eu não precisei mexer em nada. Muito conveniente e eficiente!",
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            O que dizem sobre a Ajuda Ajato
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Mais de 800 profissionais em todo o Brasil já voltaram a trabalhar rapidamente graças ao nosso suporte remoto.
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

                <p className="text-gray-100 mb-6 leading-relaxed italic min-h-[100px]">
                  “{testimonial.text}”
                </p>

                <div className="border-t border-white/20 pt-4 flex items-center gap-3">
                  <UserCircle2 className="w-10 h-10 text-blue-300" />
                  <div>
                    <p className="text-white font-bold">{testimonial.name}</p>
                    <p className="text-sm text-blue-300 font-medium">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
