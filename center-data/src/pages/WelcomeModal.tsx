import { useEffect, useState } from "react";
import { HeartHandshake, Sparkles, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function WelcomeModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const hasSeenWelcome = localStorage.getItem("accessToWorkWelcomeSeen");

    if (!hasSeenWelcome) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 700);

      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    const openWelcomeModal = () => {
      setIsOpen(true);
    };

    window.addEventListener("openWelcomeModal", openWelcomeModal);

    return () => {
      window.removeEventListener("openWelcomeModal", openWelcomeModal);
    };
  }, []);

  const closeModal = () => {
    localStorage.setItem("accessToWorkWelcomeSeen", "true");
    setIsOpen(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[999] flex items-center justify-center bg-slate-950/60 px-6 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 35, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 25, scale: 0.96 }}
            transition={{ duration: 0.35 }}
            className="relative w-full max-w-xl overflow-hidden rounded-[2rem] bg-white shadow-2xl"
          >
            <div className="absolute -left-20 -top-20 h-56 w-56 rounded-full bg-sky-200/70 blur-3xl" />
            <div className="absolute -bottom-20 -right-20 h-56 w-56 rounded-full bg-emerald-200/70 blur-3xl" />

            <button
              type="button"
              onClick={closeModal}
              aria-label="Cerrar mensaje"
              className="absolute right-5 top-5 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition hover:bg-slate-200 hover:text-slate-900 active:scale-95"
            >
              <X size={20} />
            </button>

            <div className="relative px-7 py-10 text-center md:px-10">
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-sky-500 via-emerald-500 to-violet-500 text-white shadow-lg">
                <HeartHandshake size={42} />
              </div>

              <span className="mb-5 inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700">
                <Sparkles size={17} />
                Bienvenido a Access To Work
              </span>

              <h2 className="mb-4 text-3xl font-extrabold text-slate-900 md:text-4xl">
                Un espacio para la inclusión laboral
              </h2>

              <p className="mx-auto mb-7 max-w-md text-lg leading-relaxed text-slate-600">
                Este sitio busca informar, orientar y promover oportunidades
                laborales justas y accesibles para personas con discapacidad.
              </p>

              <div className="rounded-3xl border border-sky-100 bg-gradient-to-r from-sky-50 to-emerald-50 p-5 text-left">
                <p className="text-sm font-semibold text-slate-900">
                  Aquí encontrarás información sobre:
                </p>

                <ul className="mt-3 space-y-2 text-sm text-slate-600">
                  <li>• Derechos laborales</li>
                  <li>• Empresas inclusivas</li>
                  <li>• Orientación y ayuda</li>
                  <li>• Recursos para promover la igualdad de oportunidades</li>
                </ul>
              </div>

              <button
                type="button"
                onClick={closeModal}
                className="mt-8 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-sky-600 to-emerald-600 px-8 py-3 font-bold text-white shadow-md transition hover:scale-105 hover:shadow-lg active:scale-95"
              >
                Entendido
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}