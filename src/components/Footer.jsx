import logo from "../assets/logo-lume.JPEG";
import { siteContent } from "../content/site";

export default function Footer() {
  return (
    <footer id="footer" className="bg-zinc-900 text-zinc-300">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 py-12 md:grid-cols-2 md:items-start">
        {/* LOGO + DESCRIÇÃO */}
        <div>
          <img src={logo} alt={siteContent.brandName} className="h-10 w-auto" />

          <h3 className="mt-3 text-2xl font-bold text-white">
            {siteContent.brandName}
          </h3>

          <p className="mt-3 text-sm text-zinc-400">
            Um cuidado especial para transformar a ida ao dentista em uma
            experiência tranquila e feliz.
          </p>
        </div>

        {/* CONTATO + LOCALIZAÇÃO */}
        <div className="space-y-6">
          {/* CONTATO */}
          <div>
            <h4 className="font-semibold text-white">Contato</h4>
            <p className="mt-2 text-sm">WhatsApp: {siteContent.phoneDisplay}</p>
            <p className="text-sm text-zinc-400">{siteContent.email}</p>
          </div>

          {/* LOCALIZAÇÃO */}
          <div>
            <h4 className="font-semibold text-white">Localização</h4>

            <p className="mt-2 text-sm text-zinc-400">
              EPIC Tower | Caruaru Shopping
              <br />
              5º andar, sala 514
              <br />
              Av. Adjar da Silva Casé, 800 - Indianópolis
              <br />
              Caruaru - PE, 55024-740
            </p>

            {/* MAPA */}
            <div className="mt-4 overflow-hidden rounded-xl border border-zinc-700">
              <iframe
                title="Localização Clínica Lume"
                src="https://www.google.com/maps?q=EPIC%20Tower%20Caruaru%20Shopping%20Av.%20Adjar%20da%20Silva%20Cas%C3%A9%20800%20Caruaru%20PE&output=embed"
                width="100%"
                height="200"
                loading="lazy"
                className="w-full"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-zinc-700 py-4 text-center text-sm text-zinc-500">
        <p>© 2026 {siteContent.brandName}. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
