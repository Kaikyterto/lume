import { useState } from "react";
import { faqData } from "../content/site";

function FaqItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="py-5 border-b border-lightBlue/60">
      <button
        type="button"
        className="flex w-full items-center justify-between text-left group"
        onClick={() => setIsOpen((value) => !value)}
      >
        <h3 className="text-lg font-semibold text-primary group-hover:text-[#7c648b] transition">
          {question}
        </h3>

        <span className="ml-4 flex h-8 w-8 items-center justify-center rounded-full bg-lightBlue/40 text-primary text-xl font-bold transition group-hover:bg-lightBlue/70">
          {isOpen ? "−" : "+"}
        </span>
      </button>

      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen
            ? "grid-rows-[1fr] opacity-100 mt-3"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="text-primary/80 leading-relaxed">{answer}</p>
        </div>
      </div>
    </div>
  );
}

export default function Faq() {
  return (
    <section id="faq" className="py-20 bg-cream/40">
      <div className="mx-auto w-full max-w-4xl px-6">
        {/* TÍTULO */}
        <h2 className="text-center text-3xl font-bold text-primary">
          Perguntas frequentes
        </h2>

        {/* CONTAINER */}
        <div className="mt-10 rounded-2xl bg-white px-6 py-2 border border-lightBlue shadow-md">
          {faqData.map((item) => (
            <FaqItem
              key={item.question}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
