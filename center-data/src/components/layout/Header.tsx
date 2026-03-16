import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import {
  Home,
  Building2,
  Scale,
  HelpCircle,
  User,
  Menu,
  X
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
    <header className="w-full sticky top-0 z-50 bg-black border-b border-gray-800">

      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <Link
          to="/"
          className="text-white font-bold text-xl tracking-wide cursor-pointer
          hover:text-blue-400 transition-colors duration-200"
        >
          Access To Work
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-6">

          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;

            return (
              <Link
                key={item.name}
                to={item.path}
                className={`flex items-center gap-2 text-sm font-medium 
                px-2 py-1 rounded-md cursor-pointer
                transition-all duration-200
                hover:bg-gray-800
                hover:scale-105
                active:scale-95
                ${
                  isActive
                    ? "text-blue-400"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                <Icon size={18} />
                {item.name}
              </Link>
            );
          })}

        </nav>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white p-2 rounded-lg cursor-pointer
          hover:bg-gray-800
          active:scale-95
          transition-all duration-200"
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
        className={`md:hidden bg-black border-t border-gray-800
        transition-all duration-300 overflow-hidden
        ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
      >

        <nav className="flex flex-col px-6 py-4 gap-2">

          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;

            return (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setOpen(false)}
                className={`flex items-center gap-3 text-sm font-medium
                px-3 py-2 rounded-md cursor-pointer
                transition-all duration-200
                hover:bg-gray-800
                hover:translate-x-1
                active:scale-95
                ${
                  isActive
                    ? "text-blue-400"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                <Icon size={18} />
                {item.name}
              </Link>
            );
          })}

        </nav>

      </div>

    </header>
  );
}