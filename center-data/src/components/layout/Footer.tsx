import {
  Building2,
  Facebook,
  HeartHandshake,
  HelpCircle,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Scale,
  User,
} from "lucide-react";
import { Link } from "react-router-dom";

const quickLinks = [
  { name: "Inicio", path: "/" },
  { name: "Derechos laborales", path: "/right-laws" },
  { name: "Empresas inclusivas", path: "/services" },
  { name: "Nosotros", path: "/us" },
  { name: "Ayuda", path: "/help" },
];

const resources = [
  {
    name: "Inclusión laboral",
    icon: HeartHandshake,
  },
  {
    name: "Derechos laborales",
    icon: Scale,
  },
  {
    name: "Empresas aliadas",
    icon: Building2,
  },
  {
    name: "Asesoría y apoyo",
    icon: HelpCircle,
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-slate-950 text-white">
      {/* Decorative background */}
      <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-sky-500/20 blur-3xl" />
      <div className="absolute top-20 right-0 h-72 w-72 rounded-full bg-emerald-500/20 blur-3xl" />
      <div className="absolute -bottom-24 left-1/2 h-72 w-72 rounded-full bg-violet-500/20 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 pt-16 pb-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <Link to="/" className="inline-flex items-center gap-3 mb-5">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500 via-emerald-500 to-violet-500 shadow-lg">
                <HeartHandshake size={26} className="text-white" />
              </div>

              <div>
                <h2 className="text-xl font-extrabold tracking-tight">
                  Access To Work
                </h2>
                <p className="text-sm text-slate-400">
                  Inclusión laboral
                </p>
              </div>
            </Link>

            <p className="max-w-sm text-slate-300 leading-relaxed">
              Promovemos oportunidades laborales justas, accesibles e
              inclusivas para personas con discapacidad, conectando talento con
              empresas comprometidas.
            </p>

            <div className="mt-6 flex items-center gap-3">
              <a
                href="#"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-slate-300 transition hover:bg-sky-500 hover:text-white hover:scale-105 active:scale-95"
              >
                <Facebook size={19} />
              </a>

              <a
                href="#"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-slate-300 transition hover:bg-pink-500 hover:text-white hover:scale-105 active:scale-95"
              >
                <Instagram size={19} />
              </a>

              <a
                href="mailto:contacto@accesstowork.com"
                aria-label="Correo electrónico"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-slate-300 transition hover:bg-emerald-500 hover:text-white hover:scale-105 active:scale-95"
              >
                <Mail size={19} />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="mb-5 text-lg font-bold text-white">
              Enlaces rápidos
            </h3>

            <ul className="space-y-3">
              {quickLinks.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="inline-flex text-slate-300 transition hover:text-sky-300 hover:translate-x-1"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="mb-5 text-lg font-bold text-white">
              Recursos
            </h3>

            <ul className="space-y-3">
              {resources.map((item) => {
                const Icon = item.icon;

                return (
                  <li
                    key={item.name}
                    className="flex items-center gap-3 text-slate-300"
                  >
                    <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-white/10 text-emerald-300">
                      <Icon size={16} />
                    </span>
                    {item.name}
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-5 text-lg font-bold text-white">
              Contacto
            </h3>

            <ul className="space-y-4 text-slate-300">
              <li className="flex items-start gap-3">
                <Mail size={18} className="mt-1 text-sky-300" />
                <span>contacto@accesstowork.com</span>
              </li>

              <li className="flex items-start gap-3">
                <Phone size={18} className="mt-1 text-emerald-300" />
                <span>+52 998 000 0000</span>
              </li>

              <li className="flex items-start gap-3">
                <MapPin size={18} className="mt-1 text-violet-300" />
                <span>Cancún, Quintana Roo, México</span>
              </li>

              <li className="flex items-start gap-3">
                <User size={18} className="mt-1 text-amber-300" />
                <span>Atención y orientación inclusiva</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Inclusive message */}
        <div className="mt-12 rounded-3xl border border-white/10 bg-white/5 px-6 py-6 text-center backdrop-blur-md">
          <p className="text-lg font-semibold text-white">
            El talento no tiene barreras.
          </p>
          <p className="mt-2 text-slate-300">
            Construyamos juntos espacios laborales accesibles, humanos y llenos
            de oportunidades.
          </p>
        </div>

        {/* Bottom */}
        <div className="mt-8 flex flex-col gap-4 border-t border-white/10 pt-6 text-center text-sm text-slate-400 md:flex-row md:items-center md:justify-between md:text-left">
          <p>
            © {new Date().getFullYear()} Access To Work. Todos los derechos
            reservados.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link to="/help" className="transition hover:text-white">
              Ayuda
            </Link>
            <span className="hidden sm:inline text-slate-600">•</span>
            <Link to="/right-laws" className="transition hover:text-white">
              Derechos laborales
            </Link>
            <span className="hidden sm:inline text-slate-600">•</span>
            <Link to="/us" className="transition hover:text-white">
              Nosotros
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}