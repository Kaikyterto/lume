import { useState } from "react";
import logo from "../assets/11 2.PNG";
import { getWhatsAppUrl, navItems, siteContent } from "../content/site";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const startNowLink = getWhatsAppUrl(siteContent.primaryCtaMessage);

  return (
    <nav className="sticky top-0 z-40 w-full font-sans backdrop-blur bg-purple border-b-2 border-lightBlue">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        {/* LOGO */}
        <a href="#hero" className="flex items-center gap-3">
          <img src={logo} alt="Logo" className="h-12 w-auto" />
        </a>

        {/* MENU DESKTOP */}
        <div className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-medium text-lightBlue transition hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* CTA DESKTOP */}
        <div className="hidden md:block">
          <a
            href={startNowLink}
            className="rounded-full bg-lightBlue px-5 py-2 font-semibold text-white transition hover:bg-cream hover:text-lightBlue"
          >
            {siteContent.primaryCtaLabel}
          </a>
        </div>

        {/* BOTÃO MOBILE */}
        <button
          type="button"
          className="rounded-lg p-2 text-lightBlue md:hidden"
          onClick={() => setIsOpen((v) => !v)}
        >
          <svg
            className="h-7 w-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* MENU MOBILE */}
      {isOpen && (
        <div className="border-t border-slate-100 bg-white px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="font-medium text-lightBlue"
              >
                {item.label}
              </a>
            ))}

            <a
              href={startNowLink}
              className="rounded-full bg-lightBlue px-5 py-3 text-center font-semibold text-white"
            >
              {siteContent.primaryCtaLabel}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
