import { Link } from "react-router-dom";
import { AlertTriangle, ArrowLeft, HelpCircle, Home, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export const NotFound = () => {
  return (
    <div className="relative min-h-[75vh] overflow-hidden bg-gradient-to-b from-sky-50 via-white to-emerald-50 px-6 py-20 flex items-center justify-center">
      <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-sky-200/60 blur-3xl" />
      <div className="absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-emerald-200/60 blur-3xl" />
      <div className="absolute left-1/2 top-1/3 h-64 w-64 -translate-x-1/2 rounded-full bg-violet-200/40 blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 35, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="relative w-full max-w-3xl text-center"
      >
        <div className="rounded-[2rem] border border-white bg-white/85 p-8 shadow-2xl backdrop-blur-xl md:p-12">
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-amber-400 to-orange-500 text-white shadow-lg">
            <AlertTriangle size={42} />
          </div>

          <span className="mb-5 inline-flex items-center gap-2 rounded-full bg-sky-100 px-4 py-2 text-sm font-semibold text-sky-700">
            <Sparkles size={17} />
            Ups, parece que tomamos otra ruta
          </span>

          <h1 className="mb-4 text-7xl font-extrabold tracking-tight text-slate-900 md:text-8xl">
            404
          </h1>

          <h2 className="mb-4 text-2xl font-extrabold text-slate-900 md:text-4xl">
            Página no encontrada
          </h2>

          <p className="mx-auto mb-8 max-w-xl text-lg leading-relaxed text-slate-600">
            Lo sentimos, la página que estás buscando no existe, fue movida o
            la dirección no es correcta.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-sky-600 to-emerald-600 px-7 py-3 font-bold text-white shadow-md transition hover:scale-105 hover:shadow-lg active:scale-95"
            >
              <Home size={18} />
              Volver al inicio
            </Link>

            <Link
              to="/help"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-sky-100 bg-white px-7 py-3 font-bold text-slate-700 shadow-sm transition hover:bg-sky-50 hover:text-sky-700 hover:scale-105 active:scale-95"
            >
              <HelpCircle size={18} />
              Ir a ayuda
            </Link>
          </div>
        </div>

        <Link
          to="/"
          className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-slate-500 transition hover:text-sky-700"
        >
          <ArrowLeft size={16} />
          Regresar a una página segura
        </Link>
      </motion.div>
    </div>
  );
};