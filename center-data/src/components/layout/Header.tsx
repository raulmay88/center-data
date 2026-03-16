import { Link, useLocation } from "react-router-dom";
import {
  Home,
  Building2,
  Scale,
  HelpCircle,
  User,
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

  return (
    <header className="w-full sticky top-0 z-50 bg-black border-b border-gray-800">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <Link
          to="/"
          className="text-white font-bold text-xl tracking-wide flex items-center gap-2"
        >
          Access To Work
        </Link>

        {/* Menu */}
        <nav className="flex items-center gap-6">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;

            return (
              <Link
                key={item.name}
                to={item.path}
                className={`flex items-center gap-2 text-sm font-medium transition-all duration-200
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