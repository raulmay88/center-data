import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import {
  Home,
  Building2,
  Scale,
  HelpCircle,
  User,
  Menu,
  X,
  HeartHandshake,
} from "lucide-react";

const menuItems = [
  { name: "Inicio", path: "/", icon: Home },
  { name: "Derechos laborales", path: "/right-laws", icon: Scale },
  { name: "Empresas inclusivas", path: "/services", icon: Building2 },
  { name: "Nosotros", path: "/us", icon: User },
  { name: "Ayuda", path: "/help", icon: HelpCircle },
];

export default function Header() {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full sticky top-0 z-50 border-b border-sky-100/80 bg-white/85 backdrop-blur-xl shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-5 md:px-6 py-4">
        {/* Logo */}
        <Link
          to="/"
          onClick={() => setOpen(false)}
          className="group flex items-center gap-3 cursor-pointer"
        >
          <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-sky-500 via-emerald-500 to-violet-500 flex items-center justify-center shadow-md transition group-hover:scale-105 group-active:scale-95">
            <HeartHandshake className="text-white" size={24} />
          </div>

          <div className="flex flex-col leading-tight">
            <span className="text-slate-900 font-extrabold text-lg md:text-xl tracking-tight group-hover:text-sky-700 transition-colors">
              Access To Work
            </span>
            <span className="hidden sm:block text-xs font-medium text-slate-500">
              Inclusión laboral
            </span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-2 rounded-full bg-slate-50 border border-slate-100 p-1">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;

            return (
              <Link
                key={item.name}
                to={item.path}
                className={`relative flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-full cursor-pointer transition-all duration-200 active:scale-95 ${
                  isActive
                    ? "bg-white text-sky-700 shadow-sm"
                    : "text-slate-600 hover:text-sky-700 hover:bg-white"
                }`}
              >
                <Icon
                  size={17}
                  className={`transition-colors ${
                    isActive ? "text-emerald-600" : "text-slate-400"
                  }`}
                />
                {item.name}

                {isActive && (
                  <span className="absolute -bottom-1 left-1/2 h-1 w-8 -translate-x-1/2 rounded-full bg-gradient-to-r from-sky-500 to-emerald-500" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center">
          <Link
            to="/help"
            className="rounded-full bg-gradient-to-r from-sky-600 to-emerald-600 px-5 py-2.5 text-sm font-bold text-white shadow-md transition hover:shadow-lg hover:scale-105 active:scale-95"
          >
            Solicitar apoyo
          </Link>
        </div>

        {/* Mobile Button */}
        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          className="lg:hidden text-slate-700 p-2 rounded-xl cursor-pointer bg-slate-100 hover:bg-sky-100 hover:text-sky-700 active:scale-95 transition-all duration-200"
        >
          <div
            className={`transition-transform duration-300 ${
              open ? "rotate-90 scale-110" : ""
            }`}
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden bg-white/95 backdrop-blur-xl border-t border-sky-100 transition-all duration-300 overflow-hidden ${
          open ? "max-h-[520px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col px-5 py-4 gap-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;

            return (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setOpen(false)}
                className={`flex items-center gap-3 text-sm font-semibold px-4 py-3 rounded-2xl cursor-pointer transition-all duration-200 active:scale-95 ${
                  isActive
                    ? "bg-gradient-to-r from-sky-50 to-emerald-50 text-sky-700 border border-sky-100"
                    : "text-slate-600 hover:bg-slate-50 hover:text-sky-700 hover:translate-x-1"
                }`}
              >
                <div
                  className={`w-9 h-9 rounded-xl flex items-center justify-center transition ${
                    isActive
                      ? "bg-white text-emerald-600 shadow-sm"
                      : "bg-slate-100 text-slate-500"
                  }`}
                >
                  <Icon size={18} />
                </div>

                {item.name}
              </Link>
            );
          })}

          <Link
            to="/help"
            onClick={() => setOpen(false)}
            className="mt-3 text-center rounded-2xl bg-gradient-to-r from-sky-600 via-emerald-600 to-violet-600 px-5 py-3 text-sm font-bold text-white shadow-md transition active:scale-95"
          >
            Solicitar apoyo
          </Link>
        </nav>
      </div>
    </header>
  );
}