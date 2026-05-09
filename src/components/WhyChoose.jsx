import {
  Baby,
  Bone,
  Smile,
  ShieldPlus,
  Stethoscope,
  Sparkles,
  ScanFace,
} from "lucide-react";

export default function Services() {
  const services = [
    { title: "Odontopediatria", icon: Baby },
    { title: "Ortopedia Funcional", icon: Bone },
    { title: "Ortodontia", icon: Smile },
    { title: "Sedação Odontológica", icon: ShieldPlus },
    { title: "Clínico Geral", icon: Stethoscope },
    { title: "Reabilitação e Estética", icon: Sparkles },
    { title: "Harmonização Orofacial", icon: ScanFace },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="mx-auto w-full max-w-6xl px-6 text-center">
        <h2 className="text-3xl font-bold text-primary">Nossos serviços</h2>

        <p className="mx-auto mt-4 max-w-2xl text-lg text-primary/80">
          Tratamentos odontológicos completos para cuidar do seu sorriso com
          segurança, tecnologia e conforto.
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {services.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="relative rounded-2xl p-6 bg-cream/40 border border-lightBlue transition-transform duration-300"
                style={{
                  transformStyle: "preserve-3d",
                  perspective: "1000px",
                  boxShadow: "0 10px 25px rgba(46,111,133,0.12)",
                }}
                onMouseMove={(e) => {
                  e.currentTarget.style.transform =
                    "rotateX(6deg) rotateY(-6deg) scale(1.02)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform =
                    "rotateX(0deg) rotateY(0deg) scale(1)";
                }}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="p-3 rounded-full bg-lightBlue/40">
                    <Icon size={28} className="text-primary" />
                  </div>

                  <h3 className="mt-4 text-lg font-semibold text-primary">
                    {item.title}
                  </h3>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
