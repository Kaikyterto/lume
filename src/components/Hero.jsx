import { getWhatsAppUrl, siteContent } from "../content/site";
import logo from "../assets/logo-lume.JPEG";

export default function Hero() {
  const scheduleLink = getWhatsAppUrl("Olá! Gostaria de agendar uma consulta.");

  return (
    <section
      id="hero"
      className="relative overflow-hidden py-24 font-sans bg-gradient-to-br from-primary/20 via-white to-lightBlue/20"
    >
      <div
        className="absolute inset-0 z-0 pointer-events-none overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-lightBlue/30 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-primary/20 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col-reverse items-center gap-12 px-6 md:grid md:grid-cols-2 md:items-center">
        {/* TEXTO */}
        <div>
          <h1 className="mt-6 text-4xl font-extrabold leading-tight md:text-5xl text-purple">
            Seu sorriso merece o melhor cuidado
          </h1>

          <p className="mt-6 text-lg text-slate-700">
            Odontologia integrada com tecnologia de ponta e atendimento
            humanizado. Cuidamos da sua saúde bucal com excelência, conforto e
            carinho.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={scheduleLink}
              className="rounded-full px-6 py-3 font-semibold transition hover:scale-105 bg-purple text-white hover:bg-primary"
            >
              Agendar Consulta
            </a>

            <a
              href="#whychoose"
              className="rounded-full px-6 py-3 font-semibold border-2 border-purple text-purple hover:bg-purple/10 transition"
            >
              Nossos Serviços
            </a>
          </div>
        </div>

        {/* LOGO / CARD VISUAL */}
        <div className="flex justify-center">
          <div className="bg-white rounded-3xl shadow-xl p-10 w-full max-w-md border border-lightBlue flex items-center justify-center">
            <img src={logo} alt="Lume Odontologia" className="w-64 h-auto" />
          </div>
        </div>
      </div>
    </section>
  );
}
