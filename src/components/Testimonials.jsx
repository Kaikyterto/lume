import { useEffect, useState } from "react";
import { testimonialTexts } from "../content/site";

export default function Testimonials() {
  const [activeTextIndex, setActiveTextIndex] = useState(0);

  useEffect(() => {
    if (testimonialTexts.length <= 1) return;

    const intervalId = setInterval(() => {
      setActiveTextIndex((current) => (current + 1) % testimonialTexts.length);
    }, 4500);

    return () => clearInterval(intervalId);
  }, []);

  const goToNextText = () => {
    setActiveTextIndex((current) => (current + 1) % testimonialTexts.length);
  };

  const goToPrevText = () => {
    setActiveTextIndex((current) =>
      current === 0 ? testimonialTexts.length - 1 : current - 1
    );
  };

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="mx-auto w-full max-w-6xl px-6">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-primary">
            Depoimentos de clientes
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-primary/80">
            Sorrisos transformados com cuidado, tecnologia e acompanhamento
            próximo em cada etapa do tratamento.
          </p>
        </div>

        {/* Carousel */}
        <div className="mt-14">
          <div className="relative overflow-hidden rounded-2xl border border-lightBlue shadow-md">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${activeTextIndex * 100}%)` }}
            >
              {testimonialTexts.map((item) => (
                <article
                  key={`${item.name}-${item.role}`}
                  className="min-w-full p-6 md:p-8 bg-cream"
                >
                  <p className="text-lg leading-relaxed md:text-xl text-primary">
                    "{item.quote}"
                  </p>

                  <div className="mt-6 h-px w-full bg-lightBlue" />

                  <p className="mt-4 text-base font-semibold text-primary">
                    {item.name}
                  </p>

                  <p className="mt-1 text-sm text-purple">{item.role}</p>
                </article>
              ))}
            </div>
          </div>

          {/* Controls */}
          {testimonialTexts.length > 1 && (
            <div className="mt-5 flex items-center justify-center gap-3">
              <button
                onClick={goToPrevText}
                className="rounded-full px-4 py-2 text-sm font-semibold transition bg-white border border-lightBlue text-primary hover:bg-lightBlue/30"
              >
                Anterior
              </button>

              {/* Dots */}
              <div className="flex items-center gap-2">
                {testimonialTexts.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTextIndex(index)}
                    className="h-2.5 w-2.5 rounded-full transition"
                    style={{
                      backgroundColor:
                        index === activeTextIndex ? "#2e6f85" : "#bbd5e0",
                    }}
                  />
                ))}
              </div>

              <button
                onClick={goToNextText}
                className="rounded-full px-4 py-2 text-sm font-semibold transition bg-white border border-lightBlue text-primary hover:bg-lightBlue/30"
              >
                Próximo
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
