import hellenPhoto from "../assets/Hellen.jpeg";
import backgroundAbout from "../assets/backgroundAbout.PNG";

export default function About() {
  return (
    <section
      id="about"
      className="py-20 relative font-sans overflow-hidden"
      style={{
        backgroundImage: `url(${backgroundAbout})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-white/85" />

      <div className="relative mx-auto grid w-full max-w-6xl gap-12 px-6 md:grid-cols-2 md:items-center">
        <div className="overflow-hidden rounded-3xl shadow-xl border border-lightBlue bg-white">
          <img
            src={hellenPhoto}
            alt="Dra. Hellen Dias - Clínica Odontológica"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="font-sans">
          <h2 className="text-4xl font-bold tracking-tight text-primary">
            Sobre a profissional
          </h2>

          <p className="mt-6 text-lg leading-relaxed font-medium text-primary">
            A Dra. Hellen Dias é a responsável técnica pela clínica e atua com
            foco em um atendimento odontológico humanizado e especializado. Com
            atendimento voltado ao público infantil, proporciona um cuidado
            acolhedor, leve e seguro para as crianças.
          </p>

          <div className="mt-8 space-y-5">
            <div className="flex items-start gap-3">
              <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-purple" />
              <p className="text-primary font-medium leading-relaxed">
                Cirurgiã-dentista formada pela ASCES-UNITA.
              </p>
            </div>

            <div className="flex items-start gap-3">
              <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-purple" />
              <p className="text-primary font-medium leading-relaxed">
                Especialista em Odontopediatria e no atendimento a Pessoas com
                Deficiência (PcD).
              </p>
            </div>

            <div className="flex items-start gap-3">
              <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-purple" />
              <p className="text-primary font-medium leading-relaxed">
                Habilitada em sedação, proporcionando mais conforto e
                tranquilidade nos procedimentos.
              </p>
            </div>

            <div className="flex items-start gap-3">
              <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-purple" />
              <p className="text-primary font-medium leading-relaxed">
                Capacitação em Ortopedia Funcional dos Maxilares.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
