export const siteContent = {
  brandName: "Lume",
  subtitle: "Odontologia integrada",
  email: "contato@teacherjade.com",
  phoneDisplay: "(87) 9667-7897",
  phoneDigits: "558796677897",
  defaultMessage: "Olá! Gostaria de agendar uma consulta",
  primaryCtaLabel: "Agendar consulta",
  primaryCtaMessage: "Olá! Gostaria de agendar uma consulta.",
};

export function getWhatsAppUrl(
  message = siteContent.defaultMessage,
  source = ""
) {
  const finalMessage = source ? `${message} (${source})` : message;

  return `https://wa.me/${siteContent.phoneDigits}?text=${encodeURIComponent(
    finalMessage
  )}`;
}

export const navItems = [
  { label: "Home", href: "#hero" },
  { label: "Sobre", href: "#about" },
  { label: "Depoimentos", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
  { label: "Contato", href: "#footer" },
];

export const faqData = [
  {
    question:
      "Meu filho(a) tem medo de dentista. Ele(a) vai conseguir ser atendido(a)?",
    answer:
      "Sim. Nosso atendimento é totalmente acolhedor e pensado para que a criança se sinta segura e tranquila durante toda a consulta.",
  },
  {
    question: "Posso acompanhar meu filho(a) durante a consulta?",
    answer:
      "Sim. Em atendimentos infantis, os pais ou responsáveis podem acompanhar para trazer mais conforto e segurança à criança.",
  },
  {
    question: "Com que idade a criança deve ir ao dentista?",
    answer:
      "O ideal é a primeira consulta ainda na infância, assim que os primeiros dentes nascem, para prevenção e acompanhamento do desenvolvimento.",
  },
  {
    question: "Qual a duração da consulta?",
    answer:
      "As consultas geralmente duram entre 30 minutos e 1 hora, dependendo do tipo de atendimento e da necessidade da criança.",
  },
  {
    question: "Vocês atendem urgências odontológicas infantis?",
    answer:
      "Sim. Em casos de dor ou urgência, priorizamos o atendimento o mais rápido possível para o conforto da criança.",
  },
  {
    question: "Como funciona o agendamento?",
    answer:
      "O agendamento pode ser feito pelo WhatsApp ou telefone, escolhendo o melhor horário disponível para a família.",
  },
];

export const testimonialTexts = [
  {
    name: "Mariana",
    role: "Mãe de paciente",
    quote:
      "Atendimento maravilhoso! Minha filha ficou super tranquila e saiu feliz da consulta. Ambiente acolhedor e muito cuidado com as crianças.",
  },
  {
    name: "Carlos",
    role: "Pai de paciente",
    quote:
      "Excelente experiência. Profissionais muito pacientes e atenciosos, conseguiram deixar meu filho calmo durante todo o atendimento.",
  },
  {
    name: "Juliana",
    role: "Mãe de paciente",
    quote:
      "A clínica é incrível! Minha filha tinha medo de dentista, mas agora vai sem medo nenhum. Muito carinho e atenção em cada detalhe.",
  },
  {
    name: "Roberto",
    role: "Pai de paciente",
    quote:
      "Equipe muito preparada para lidar com crianças. Atendimento leve, explicativo e com muita segurança para os pequenos.",
  },
  {
    name: "Fernanda",
    role: "Mãe de paciente",
    quote:
      "Minha filha adorou a experiência! Foi tudo muito divertido e cuidadoso, realmente transformaram a ida ao dentista em algo positivo.",
  },
  {
    name: "Lucas",
    role: "Pai de paciente",
    quote:
      "Profissionais excelentes, tratam as crianças com muita paciência e respeito. Estamos muito satisfeitos com o atendimento.",
  },
  {
    name: "Patrícia",
    role: "Mãe de paciente",
    quote:
      "Ambiente acolhedor e equipe muito gentil. Meu filho se sentiu seguro durante todo o atendimento, recomendo demais.",
  },
  {
    name: "André",
    role: "Pai de paciente",
    quote:
      "Ótima clínica infantil. Atendimento humanizado e muito cuidadoso com cada detalhe para deixar as crianças confortáveis.",
  },
];
