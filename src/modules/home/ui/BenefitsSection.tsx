import {
  MessageSquareIcon,
  ShieldIcon,
  TrendingDownIcon,
  TargetIcon,
  Building2Icon,
  UsersIcon,
  HandshakeIcon,
  Settings2Icon,
  ServerIcon,
  LockIcon,
} from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { WhatsAppButton } from "./WhatsAppButton"; // Importando o componente

const serviceGroups = [
  {
    id: "empresas",
    title: "Empresas no RJ",
    subtitle: "Terceirização completa com SLA garantido",
    icon: Building2Icon,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    benefits: [
      {
        icon: HandshakeIcon,
        title: "Terceirização de TI",
        description:
          "Gestão completa sem custos de TI interno. Equipe dedicada, SLA e suporte 24/7.",
        color: "from-blue-600 to-indigo-700",
      },
      {
        icon: ServerIcon,
        title: "Infraestrutura e Redes",
        description:
          "Projetos de rede, servidores e nuvem com alta disponibilidade e segurança.",
        color: "from-indigo-500 to-blue-500",
      },
      {
        icon: Settings2Icon,
        title: "Consultoria Estratégica",
        description:
          "Planejamento tecnológico para crescimento, segurança e redução de custos.",
        color: "from-slate-600 to-slate-800",
      },
    ],
  },
  {
    id: "seguranca",
    title: "Segurança da Informação",
    subtitle: "Proteção completa contra ameaças digitais",
    icon: ShieldIcon,
    color: "text-emerald-600",
    bgColor: "bg-emerald-50",
    benefits: [
      {
        icon: LockIcon,
        title: "Proteção Contra Ataques",
        description:
          "Firewall, antivírus corporativo e monitoramento contra ransomware e invasões.",
        color: "from-emerald-600 to-green-600",
      },
      {
        icon: ShieldIcon,
        title: "Backup e Continuidade",
        description:
          "Backup automático, recuperação de desastres e continuidade operacional.",
        color: "from-green-500 to-emerald-500",
      },
      {
        icon: MessageSquareIcon,
        title: "Resposta em até 5 Min",
        description:
          "Atendimento técnico imediato para incidentes críticos e emergências.",
        color: "from-blue-500 to-cyan-500",
      },
    ],
  },
  {
    id: "produtividade",
    title: "Suporte Técnico Empresarial",
    subtitle: "Menos falhas, mais performance",
    icon: TrendingDownIcon,
    color: "text-orange-600",
    bgColor: "bg-orange-50",
    benefits: [
      {
        icon: UsersIcon,
        title: "Suporte Especializado",
        description:
          "Atendimento direto com técnicos experientes em ambientes corporativos.",
        color: "from-orange-500 to-red-500",
      },
      {
        icon: TrendingDownIcon,
        title: "Redução de Custos",
        description:
          "Reduza gastos com TI e evite paradas com gestão preventiva.",
        color: "from-purple-500 to-pink-500",
      },
      {
        icon: TargetIcon,
        title: "Foco no Seu Negócio",
        description:
          "Delegue sua TI e concentre-se no crescimento da sua empresa.",
        color: "from-teal-500 to-cyan-500",
      },
    ],
  },
];

export const BenefitsSection = () => {
  return (
    <section
      id="benefits-section"
      className="py-20 bg-slate-50 scroll-mt-20"
      style={{ contentVisibility: "auto", containIntrinsicSize: "800px" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Soluções Especializadas <span className="text-blue-600">B2B</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Atendimento exclusivo para empresas no Rio de Janeiro e Região dos Lagos.
          </p>
        </div>

        <div className="space-y-20">
          {serviceGroups.map((group) => (
            <div key={group.id} id={group.id} className="scroll-mt-24">
              <div className="flex items-center gap-4 mb-8 border-b border-gray-200 pb-4">
                <div className={`p-3 rounded-xl ${group.bgColor}`}>
                  <group.icon className={`w-8 h-8 ${group.color}`} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {group.title}
                  </h3>
                  <p className="text-gray-500">{group.subtitle}</p>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {group.benefits.map((benefit) => {
                  const Icon = benefit.icon;
                  return (
                    <Card
                      key={benefit.title}
                      className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md overflow-hidden bg-white"
                    >
                      <CardContent className="p-8">
                        <div
                          className={`w-12 h-12 bg-linear-to-br ${benefit.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg`}
                        >
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <h4 className="text-xl font-bold text-gray-900 mb-3">
                          {benefit.title}
                        </h4>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {benefit.description}
                        </p>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* BOTÃO FIXO DO WHATSAPP NO FINAL DA SEÇÃO DE BENEFÍCIOS */}
        <div className="mt-16 text-center">
          <WhatsAppButton 
            buttonText="Falar com um Consultor de TI"
            message="Olá! Estava vendo as soluções e serviços no site da Simples Solução e gostaria de falar com um consultor sobre as necessidades da minha empresa."
          />
        </div>

      </div>
    </section>
  );
};
