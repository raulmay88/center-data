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
];

export default function Header() {
	const location = useLocation();
	const [open, setOpen] = useState(false);

	const isHelpActive = location.pathname === "/help";

	return (
		<header className="w-full sticky top-0 z-50 border-b border-sky-100/80 bg-white/85 backdrop-blur-xl shadow-sm">
			<div className="max-w-7xl mx-auto flex items-center justify-between px-5 md:px-6 py-4">
				{/* Logo */}
				<Link
					to="/"
					onClick={() => setOpen(false)}
					className="group flex items-center gap-3 cursor-pointer"
				>
					<div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-sky-500 via-emerald-500 to-violet-500 flex items-center justify-center shadow-md transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 group-active:scale-95">
						<HeartHandshake className="text-white" size={24} />
					</div>

					<div className="flex flex-col leading-tight">
						<span className="text-slate-900 font-extrabold text-lg md:text-xl tracking-tight transition-colors duration-300 group-hover:text-sky-700">
							Access To Work
						</span>

						<span className="hidden sm:block text-xs font-medium text-slate-500">
							Inclusión laboral
						</span>
					</div>
				</Link>

				{/* Desktop Menu */}
				<nav className="hidden lg:flex items-center gap-1 rounded-full bg-slate-50/90 border border-slate-100 p-1.5 shadow-inner">
					{menuItems.map((item) => {
						const Icon = item.icon;
						const isActive = location.pathname === item.path;

						return (
							<Link
								key={item.name}
								to={item.path}
								className={`group relative flex items-center gap-2 overflow-hidden rounded-full px-4 py-2.5 text-sm font-semibold cursor-pointer transition-all duration-300 active:scale-95 ${
									isActive
										? "bg-white text-sky-700 shadow-md"
										: "text-slate-600 hover:-translate-y-0.5 hover:text-sky-700 hover:shadow-md"
								}`}
							>
								{/* Fondo animado en hover */}
								<span
									className={`absolute inset-0 rounded-full transition-all duration-300 ${
										isActive
											? "bg-gradient-to-r from-sky-50 to-emerald-50 opacity-100"
											: "bg-gradient-to-r from-sky-50 via-emerald-50 to-violet-50 opacity-0 group-hover:opacity-100"
									}`}
								/>

								{/* Brillo suave */}
								<span className="absolute inset-y-0 -left-10 w-10 rotate-12 bg-white/60 opacity-0 blur-sm transition-all duration-500 group-hover:left-full group-hover:opacity-100" />

								<span
									className={`relative flex h-7 w-7 items-center justify-center rounded-full transition-all duration-300 ${
										isActive
											? "bg-emerald-100 text-emerald-600"
											: "bg-transparent text-slate-400 group-hover:bg-white group-hover:text-emerald-600 group-hover:shadow-sm group-hover:scale-110"
									}`}
								>
									<Icon
										size={16}
										className="transition-transform duration-300 group-hover:-translate-y-0.5"
									/>
								</span>

								<span className="relative z-10">{item.name}</span>

								{/* Línea inferior animada */}
								<span
									className={`absolute bottom-1 left-1/2 h-1 -translate-x-1/2 rounded-full bg-gradient-to-r from-sky-500 to-emerald-500 transition-all duration-300 ${
										isActive
											? "w-8 opacity-100"
											: "w-0 opacity-0 group-hover:w-8 group-hover:opacity-100"
									}`}
								/>
							</Link>
						);
					})}
				</nav>

				{/* Desktop Help Button */}
				<div className="hidden lg:flex items-center">
					<Link
						to="/help"
						className={`group relative inline-flex items-center gap-2 overflow-hidden rounded-full px-5 py-2.5 text-sm font-bold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl active:scale-95 ${
							isHelpActive
								? "bg-gradient-to-r from-violet-600 to-sky-600"
								: "bg-gradient-to-r from-sky-600 to-emerald-600"
						}`}
					>
						<span className="absolute inset-y-0 -left-12 w-12 rotate-12 bg-white/30 opacity-0 blur-sm transition-all duration-500 group-hover:left-full group-hover:opacity-100" />

						<HelpCircle
							size={18}
							className="relative z-10 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110"
						/>

						<span className="relative z-10">Ayuda</span>
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
								className={`group relative flex items-center gap-3 overflow-hidden rounded-2xl px-4 py-3 text-sm font-semibold cursor-pointer transition-all duration-300 active:scale-95 ${
									isActive
										? "bg-gradient-to-r from-sky-50 to-emerald-50 text-sky-700 border border-sky-100"
										: "text-slate-600 hover:translate-x-1 hover:bg-slate-50 hover:text-sky-700"
								}`}
							>
								<span className="absolute inset-0 bg-gradient-to-r from-sky-50 via-emerald-50 to-violet-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

								<div
									className={`relative z-10 w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-300 ${
										isActive
											? "bg-white text-emerald-600 shadow-sm"
											: "bg-slate-100 text-slate-500 group-hover:bg-white group-hover:text-emerald-600 group-hover:scale-105 group-hover:shadow-sm"
									}`}
								>
									<Icon size={18} />
								</div>

								<span className="relative z-10">{item.name}</span>
							</Link>
						);
					})}

					<Link
						to="/help"
						onClick={() => setOpen(false)}
						className={`group relative mt-3 flex items-center justify-center gap-2 overflow-hidden rounded-2xl px-5 py-3 text-sm font-bold text-white shadow-md transition-all duration-300 hover:shadow-xl active:scale-95 ${
							isHelpActive
								? "bg-gradient-to-r from-violet-600 to-sky-600"
								: "bg-gradient-to-r from-sky-600 via-emerald-600 to-violet-600"
						}`}
					>
						<span className="absolute inset-y-0 -left-12 w-12 rotate-12 bg-white/30 opacity-0 blur-sm transition-all duration-500 group-hover:left-full group-hover:opacity-100" />

						<HelpCircle
							size={18}
							className="relative z-10 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110"
						/>

						<span className="relative z-10">Ayuda</span>
					</Link>
				</nav>
			</div>
		</header>
	);
}