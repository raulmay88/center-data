import Carousel from "../components/common/carousel/Carousel";
import { images } from "../components/common/carousel/Images";

import {
  Building2,
  HeartHandshake,
  Scale,
  ShieldCheck,
  Sparkles,
  UsersRound,
} from "lucide-react";
import { motion } from "framer-motion";

export const Home = () => {
  return (
    <div className="w-full flex flex-col overflow-hidden bg-gradient-to-b from-sky-50 via-white to-emerald-50">
      {/* HERO SECTION */}
      <section className="relative w-full">
        <Carousel images={images} autoPlayInterval={5000} />

        {/* Overlay del contenido */}
        <div className="absolute inset-0 z-20 pointer-events-none flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="pointer-events-auto text-center text-white px-6 max-w-5xl"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full bg-white/20 px-5 py-2 text-sm md:text-base font-medium backdrop-blur-md border border-white/30 mb-6 shadow-lg"
            >
              <Sparkles size={18} />
              Inclusión laboral para todos
            </motion.span>

            <h1 className="text-md md:text-6xl font-extrabold mb-6 leading-tight">
              Discriminación laboral hacia las personas con discapacidad
            </h1>

            <p className="max-w-3xl mx-auto text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
              Impulsamos la inclusión laboral y conectamos talento con
              oportunidades justas, accesibles y humanas para personas con
              discapacidad.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#mision"
                className="rounded-full bg-white text-sky-700 px-7 py-3 font-semibold shadow-lg transition hover:bg-sky-50 hover:scale-105 active:scale-95"
              >
                Conocer más
              </a>

              <a
                href="#impacto"
                className="rounded-full bg-emerald-500/90 text-white px-7 py-3 font-semibold shadow-lg backdrop-blur-md border border-white/20 transition hover:bg-emerald-400 hover:scale-105 active:scale-95"
              >
                Ver impacto
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* INTRO */}
      <section className="relative max-w-6xl mx-auto px-6 py-24 text-center">
        <div className="absolute -top-10 left-10 w-28 h-28 bg-amber-200/50 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-10 w-32 h-32 bg-emerald-200/60 rounded-full blur-3xl" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-emerald-100 text-emerald-700 px-4 py-2 text-sm font-semibold mb-5">
            <HeartHandshake size={18} />
            Oportunidades sin barreras
          </span>

          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6">
            Objetivo general
          </h2>

          <p className="text-slate-600 max-w-3xl mx-auto text-lg leading-relaxed">
            Analizar la discriminación que enfrentan las personas con discapacidad para acceder a un empleo formal, identificando sus causas, consecuencias y las soluciones existentes
          </p>
        </motion.div>
      </section>

      {/* PROBLEM / MISSION */}
      <section
        id="mision"
        className="relative max-w-7xl mx-auto px-6 pb-24"
      >
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-xl border border-sky-100 p-8 md:p-10"
          >
            <span className="inline-flex items-center rounded-full bg-sky-100 text-sky-700 px-4 py-2 text-sm font-semibold mb-5">
              Nuestra razón de ser
            </span>

            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">
              ¿Por qué existe Access To Work?
            </h2>

            <p className="text-slate-600 text-lg leading-relaxed mb-5">
              Muchas personas con discapacidad enfrentan barreras para acceder
              a un empleo digno. En muchos casos, la discriminación laboral se
              manifiesta cuando se les niegan oportunidades debido a prejuicios
              o estereotipos, sin considerar sus verdaderas capacidades y
              talentos.
            </p>

            <p className="text-slate-600 text-lg leading-relaxed">
              Además, la falta de accesibilidad, la escasa adaptación de los
              espacios laborales y la desinformación de algunos empleadores
              siguen siendo obstáculos importantes. Access To Work nace para
              cambiar esta realidad.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 gap-5"
          >
            <div className="rounded-3xl bg-gradient-to-br from-sky-500 to-sky-700 text-white p-7 shadow-xl">
              <UsersRound size={38} className="mb-5" />
              <h3 className="text-2xl font-bold mb-3">Talento visible</h3>
              <p className="text-white/90 leading-relaxed">
                Promovemos que las capacidades de cada persona sean reconocidas
                por encima de cualquier barrera.
              </p>
            </div>

            <div className="rounded-3xl bg-gradient-to-br from-emerald-500 to-emerald-700 text-white p-7 shadow-xl sm:mt-10">
              <Building2 size={38} className="mb-5" />
              <h3 className="text-2xl font-bold mb-3">Empresas conscientes</h3>
              <p className="text-white/90 leading-relaxed">
                Acercamos información y recursos para construir espacios de
                trabajo más humanos y accesibles.
              </p>
            </div>

            <div className="rounded-3xl bg-gradient-to-br from-amber-400 to-orange-500 text-white p-7 shadow-xl">
              <Scale size={38} className="mb-5" />
              <h3 className="text-2xl font-bold mb-3">Igualdad real</h3>
              <p className="text-white/90 leading-relaxed">
                Impulsamos oportunidades laborales justas, dignas y libres de
                discriminación.
              </p>
            </div>

            <div className="rounded-3xl bg-gradient-to-br from-violet-500 to-purple-700 text-white p-7 shadow-xl sm:mt-10">
              <ShieldCheck size={38} className="mb-5" />
              <h3 className="text-2xl font-bold mb-3">Acompañamiento</h3>
              <p className="text-white/90 leading-relaxed">
                Brindamos orientación para facilitar el acceso al empleo y el
                desarrollo profesional.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="text-center mb-14">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-flex items-center rounded-full bg-violet-100 text-violet-700 px-4 py-2 text-sm font-semibold mb-5"
          >
            Cómo apoyamos
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-extrabold text-slate-900"
          >
            Recursos para una inclusión laboral efectiva
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            whileHover={{ y: -8 }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="group bg-white shadow-lg hover:shadow-2xl rounded-3xl p-8 text-center border border-sky-100 transition"
          >
            <div className="w-16 h-16 mx-auto mb-5 rounded-2xl bg-sky-100 flex items-center justify-center group-hover:bg-sky-600 transition">
              <Building2
                className="text-sky-600 group-hover:text-white transition"
                size={34}
              />
            </div>

            <h3 className="text-xl font-bold text-slate-900 mb-3">
              Empresas aliadas
            </h3>

            <p className="text-slate-600 leading-relaxed">
              Conectamos personas con discapacidad con empresas comprometidas
              con la diversidad, la accesibilidad y la inclusión laboral.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -8 }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            viewport={{ once: true }}
            className="group bg-white shadow-lg hover:shadow-2xl rounded-3xl p-8 text-center border border-emerald-100 transition"
          >
            <div className="w-16 h-16 mx-auto mb-5 rounded-2xl bg-emerald-100 flex items-center justify-center group-hover:bg-emerald-600 transition">
              <Scale
                className="text-emerald-600 group-hover:text-white transition"
                size={34}
              />
            </div>

            <h3 className="text-xl font-bold text-slate-900 mb-3">
              Derechos laborales
            </h3>

            <p className="text-slate-600 leading-relaxed">
              Información clara sobre derechos laborales para promover entornos
              de trabajo justos, respetuosos e inclusivos.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -8 }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            viewport={{ once: true }}
            className="group bg-white shadow-lg hover:shadow-2xl rounded-3xl p-8 text-center border border-amber-100 transition"
          >
            <div className="w-16 h-16 mx-auto mb-5 rounded-2xl bg-amber-100 flex items-center justify-center group-hover:bg-amber-500 transition">
              <ShieldCheck
                className="text-amber-500 group-hover:text-white transition"
                size={34}
              />
            </div>

            <h3 className="text-xl font-bold text-slate-900 mb-3">
              Asesoría y apoyo
            </h3>

            <p className="text-slate-600 leading-relaxed">
              Brindamos herramientas, orientación y recursos para facilitar el
              acceso al empleo y el desarrollo profesional.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="relative py-24 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-sky-600 via-emerald-600 to-violet-600" />
        <div className="absolute -top-24 -left-24 w-72 h-72 bg-white/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-amber-300/30 rounded-full blur-3xl" />

        <div className="relative max-w-5xl mx-auto text-center px-6">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-extrabold mb-6"
          >
            Construyamos un futuro laboral más inclusivo
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-lg md:text-xl text-white/90 leading-relaxed"
          >
            Access To Work busca conectar personas con discapacidad con
            oportunidades laborales reales, promoviendo la igualdad de
            oportunidades y fomentando empresas comprometidas con la inclusión.
            Juntos podemos construir un entorno laboral donde el talento sea lo
            que realmente importe.
          </motion.p>
        </div>
      </section>

      {/* IMPACT */}
      <section id="impacto" className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="inline-flex items-center rounded-full bg-amber-100 text-amber-700 px-4 py-2 text-sm font-semibold mb-5">
              Impacto positivo
            </span>

            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900">
              Pequeñas acciones, grandes cambios
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="rounded-3xl bg-sky-50 border border-sky-100 p-8 shadow-sm"
            >
              <h3 className="text-5xl font-extrabold text-sky-600">+200</h3>
              <p className="text-slate-600 mt-3 text-lg">
                Personas beneficiadas
              </p>
            </motion.div>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              viewport={{ once: true }}
              className="rounded-3xl bg-emerald-50 border border-emerald-100 p-8 shadow-sm"
            >
              <h3 className="text-5xl font-extrabold text-emerald-600">
                +50
              </h3>
              <p className="text-slate-600 mt-3 text-lg">
                Empresas aliadas
              </p>
            </motion.div>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              viewport={{ once: true }}
              className="rounded-3xl bg-violet-50 border border-violet-100 p-8 shadow-sm"
            >
              <h3 className="text-5xl font-extrabold text-violet-600">
                100%
              </h3>
              <p className="text-slate-600 mt-3 text-lg">
                Compromiso con la inclusión
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};