import {
  Baby,
  Activity,
  Smile,
  ShieldCheck,
  Stethoscope,
  Sparkles,
  ScanFace,
  Syringe,
  BadgePlus,
} from "lucide-react";

export default function Services() {
  const services = [
    { title: "Odontopediatria", icon: Baby },
    { title: "Ortopedia Funcional", icon: Activity },
    { title: "Ortodontia", icon: Smile },
    { title: "Implantodontia", icon: BadgePlus },
    { title: "Sedação Odontológica", icon: Syringe },
    { title: "Clínico Geral", icon: Stethoscope },
    { title: "Reabilitação e Estética", icon: Sparkles },
    { title: "Harmonização Orofacial", icon: ScanFace },
    { title: "Endodontia", icon: ShieldCheck },
  ];

  return (
    <section
      id="whychoose"
      className="relative overflow-hidden py-20 bg-gradient-to-br from-primary/10 via-white to-lightBlue/20"
    >
      {/* BACKGROUND BLURS */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-lightBlue/30 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-primary/20 blur-3xl" />
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-6 text-center">
        {/* HEADER */}
        <h2 className="text-3xl font-bold text-primary">Nossos serviços</h2>

        <p className="mx-auto mt-4 max-w-2xl text-lg text-primary/80">
          Tratamentos odontológicos completos para cuidar do seu sorriso com
          segurança, tecnologia e conforto.
        </p>

        {/* GRID */}
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {services.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="group relative rounded-2xl p-6 bg-white/80 backdrop-blur border border-lightBlue transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1"
              >
                {/* ICON */}
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-lightBlue/40 group-hover:bg-primary/10 transition">
                  <Icon size={26} className="text-primary" />
                </div>

                {/* TITLE */}
                <h3 className="mt-4 text-lg font-semibold text-primary">
                  {item.title}
                </h3>

                <div className="mt-4 h-px w-16 mx-auto bg-lightBlue/70" />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
