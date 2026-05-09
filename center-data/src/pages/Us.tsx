import { motion } from "framer-motion";
import {
  BadgeCheck,
  Eye,
  HeartHandshake,
  Lightbulb,
  Sparkles,
  Target,
  Users,
  UsersRound,
} from "lucide-react";

const values = [
  {
    title: "Inclusión",
    description:
      "Creemos en espacios donde todas las personas puedan participar, aportar y desarrollarse.",
    icon: HeartHandshake,
    gradient: "from-sky-500 to-sky-700",
  },
  {
    title: "Igualdad",
    description:
      "Promovemos oportunidades laborales justas, dignas y accesibles para todas las personas.",
    icon: BadgeCheck,
    gradient: "from-emerald-500 to-emerald-700",
  },
  {
    title: "Respeto",
    description:
      "Impulsamos una cultura laboral basada en empatía, escucha y valoración del talento.",
    icon: UsersRound,
    gradient: "from-violet-500 to-purple-700",
  },
];

export const Us = () => {
  return (
    <div className="w-full overflow-hidden bg-gradient-to-b from-sky-50 via-white to-emerald-50">
      {/* HERO */}
      <section className="relative overflow-hidden px-6 py-24 text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-sky-700 via-emerald-700 to-violet-800" />
        <div className="absolute -left-24 -top-28 h-80 w-80 rounded-full bg-white/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-amber-300/20 blur-3xl" />

        <div className="relative mx-auto max-w-6xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/15 px-5 py-2 text-sm font-semibold backdrop-blur-md"
          >
            <HeartHandshake size={18} />
            Conoce nuestra causa
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mx-auto mb-6 max-w-5xl text-4xl font-extrabold leading-tight md:text-6xl"
          >
            Sobre nosotros
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.7 }}
            className="mx-auto max-w-3xl text-lg leading-relaxed text-white/90 md:text-xl"
          >
            Access To Work es una plataforma comprometida con la inclusión
            laboral, la igualdad de oportunidades y la construcción de espacios
            de trabajo más humanos para personas con discapacidad.
          </motion.p>
        </div>
      </section>

      {/* QUIENES SOMOS */}
      <section className="mx-auto grid max-w-7xl items-center gap-14 px-6 py-24 lg:grid-cols-2">
        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -35 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute -left-6 -top-6 h-32 w-32 rounded-full bg-amber-200/70 blur-3xl" />
          <div className="absolute -bottom-6 right-6 h-36 w-36 rounded-full bg-sky-200/70 blur-3xl" />

          <div className="relative overflow-hidden rounded-[2rem] border border-white shadow-2xl">
            <img
              src="https://img.freepik.com/foto-gratis/guy-muestra-documento-nina-grupo-jovenes-autonomos-oficina-conversando-trabajando_146671-13569.jpg"
              alt="Equipo colaborando en un entorno laboral inclusivo"
              className="h-[430px] w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />

            <div className="absolute bottom-5 left-5 right-5 rounded-3xl border border-white/20 bg-white/15 p-5 text-white backdrop-blur-md">
              <p className="text-sm font-medium text-white/80">
                Nuestra esencia
              </p>
              <p className="mt-1 text-xl font-bold">
                Conectar talento con oportunidades reales.
              </p>
            </div>
          </div>
        </motion.div>

        {/* TEXT */}
        <motion.div
          initial={{ opacity: 0, x: 35 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <span className="mb-5 inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700">
            <Sparkles size={18} />
            Quiénes somos
          </span>

          <h2 className="mb-6 text-3xl font-extrabold text-slate-900 md:text-5xl">
            Trabajamos por una inclusión laboral más humana
          </h2>

          <p className="mb-5 text-lg leading-relaxed text-slate-600">
            Somos una iniciativa enfocada en promover la inclusión laboral y
            eliminar las barreras que enfrentan las personas con discapacidad
            al buscar empleo.
          </p>

          <p className="mb-8 text-lg leading-relaxed text-slate-600">
            Nuestra plataforma busca conectar talento con empresas que valoran
            la diversidad, promoviendo entornos laborales más justos,
            accesibles y respetuosos.
          </p>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl border border-sky-100 bg-white p-5 shadow-sm">
              <Users className="mb-3 text-sky-600" size={30} />
              <h3 className="mb-2 font-bold text-slate-900">
                Personas primero
              </h3>
              <p className="text-sm leading-relaxed text-slate-600">
                Creemos que cada persona merece ser valorada por su talento,
                experiencia y potencial.
              </p>
            </div>

            <div className="rounded-3xl border border-emerald-100 bg-white p-5 shadow-sm">
              <Lightbulb className="mb-3 text-emerald-600" size={30} />
              <h3 className="mb-2 font-bold text-slate-900">
                Cambio positivo
              </h3>
              <p className="text-sm leading-relaxed text-slate-600">
                Impulsamos información y herramientas para transformar la
                cultura laboral.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* MISION Y VISION */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="mb-14 text-center">
          <motion.span
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-5 inline-flex items-center gap-2 rounded-full bg-sky-100 px-4 py-2 text-sm font-semibold text-sky-700"
          >
            <Target size={18} />
            Lo que nos mueve
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mx-auto max-w-4xl text-3xl font-extrabold text-slate-900 md:text-5xl"
          >
            Nuestra misión y visión
          </motion.h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {/* MISION */}
          <motion.div
            whileHover={{ y: -8 }}
            initial={{ opacity: 0, y: 38 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            viewport={{ once: true }}
            className="group overflow-hidden rounded-[2rem] border border-sky-100 bg-white shadow-lg transition hover:shadow-2xl"
          >
            <div className="h-2 bg-gradient-to-r from-sky-500 to-emerald-500" />

            <div className="p-8 md:p-10">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500 to-sky-700 text-white shadow-lg transition group-hover:scale-105">
                <Target size={34} />
              </div>

              <h3 className="mb-4 text-2xl font-extrabold text-slate-900">
                Nuestra misión
              </h3>

              <p className="text-lg leading-relaxed text-slate-600">
                Facilitar el acceso a oportunidades laborales inclusivas para
                personas con discapacidad, brindando información, herramientas
                y conexiones con empresas comprometidas con la diversidad.
              </p>
            </div>
          </motion.div>

          {/* VISION */}
          <motion.div
            whileHover={{ y: -8 }}
            initial={{ opacity: 0, y: 38 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.55 }}
            viewport={{ once: true }}
            className="group overflow-hidden rounded-[2rem] border border-emerald-100 bg-white shadow-lg transition hover:shadow-2xl"
          >
            <div className="h-2 bg-gradient-to-r from-emerald-500 to-violet-500" />

            <div className="p-8 md:p-10">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-700 text-white shadow-lg transition group-hover:scale-105">
                <Eye size={34} />
              </div>

              <h3 className="mb-4 text-2xl font-extrabold text-slate-900">
                Nuestra visión
              </h3>

              <p className="text-lg leading-relaxed text-slate-600">
                Construir una sociedad donde todas las personas tengan las
                mismas oportunidades laborales, promoviendo una cultura
                inclusiva, accesible y equitativa dentro de las empresas.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* COMPROMISO */}
      <section className="relative overflow-hidden bg-white py-24">
        <div className="absolute -left-28 top-10 h-72 w-72 rounded-full bg-sky-100 blur-3xl" />
        <div className="absolute -right-28 bottom-10 h-72 w-72 rounded-full bg-emerald-100 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">
          {/* TEXT */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65 }}
            viewport={{ once: true }}
          >
            <span className="mb-5 inline-flex items-center gap-2 rounded-full bg-violet-100 px-4 py-2 text-sm font-semibold text-violet-700">
              <HeartHandshake size={18} />
              Nuestro compromiso
            </span>

            <h2 className="mb-6 text-3xl font-extrabold text-slate-900 md:text-5xl">
              El talento no tiene barreras
            </h2>

            <p className="mb-5 text-lg leading-relaxed text-slate-600">
              Creemos que el talento no tiene barreras. Por ello trabajamos
              para crear un espacio donde las personas con discapacidad puedan
              encontrar oportunidades laborales justas, dignas y accesibles.
            </p>

            <p className="mb-8 text-lg leading-relaxed text-slate-600">
              A través de nuestra plataforma buscamos fomentar una cultura
              laboral basada en el respeto, la inclusión y la igualdad de
              oportunidades.
            </p>

            <div className="rounded-3xl bg-gradient-to-r from-sky-50 to-emerald-50 p-6 border border-sky-100">
              <p className="text-lg font-semibold text-slate-900">
                Queremos que más empresas vean la inclusión no solo como una
                responsabilidad, sino como una oportunidad para crecer mejor.
              </p>
            </div>
          </motion.div>

          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -right-5 -top-5 h-32 w-32 rounded-full bg-violet-200/70 blur-3xl" />

            <div className="relative overflow-hidden rounded-[2rem] shadow-2xl">
              <img
                src="https://img.freepik.com/foto-gratis/fuerza-personas-manos-exito-reunion_1150-1690.jpg"
                alt="Trabajo en equipo e inclusión laboral"
                className="h-[440px] w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />

              <div className="absolute bottom-5 left-5 right-5 rounded-3xl border border-white/20 bg-white/15 p-5 text-white backdrop-blur-md">
                <p className="text-sm font-medium text-white/80">
                  Compromiso compartido
                </p>
                <p className="mt-1 text-xl font-bold">
                  La inclusión se construye en equipo.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* VALORES */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-14 text-center">
          <motion.span
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-5 inline-flex items-center gap-2 rounded-full bg-amber-100 px-4 py-2 text-sm font-semibold text-amber-700"
          >
            <Sparkles size={18} />
            Nuestros valores
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mx-auto max-w-4xl text-3xl font-extrabold text-slate-900 md:text-5xl"
          >
            Principios que guían nuestro trabajo
          </motion.h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {values.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                whileHover={{ y: -8 }}
                initial={{ opacity: 0, y: 38 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.12, duration: 0.55 }}
                viewport={{ once: true }}
                className="group overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-lg transition hover:shadow-2xl"
              >
                <div className={`h-2 bg-gradient-to-r ${item.gradient}`} />

                <div className="p-8 text-center">
                  <div
                    className={`mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${item.gradient} text-white shadow-lg transition group-hover:scale-105`}
                  >
                    <Icon size={34} />
                  </div>

                  <h3 className="mb-3 text-xl font-bold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="leading-relaxed text-slate-600">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-6 pb-24">
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-gradient-to-r from-sky-600 via-emerald-600 to-violet-600 px-6 py-16 text-center text-white shadow-2xl">
          <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-white/20 blur-3xl" />
          <div className="absolute -bottom-24 right-0 h-64 w-64 rounded-full bg-amber-300/30 blur-3xl" />

          <div className="relative">
            <HeartHandshake className="mx-auto mb-5" size={44} />

            <h2 className="mx-auto mb-5 max-w-3xl text-3xl font-extrabold md:text-5xl">
              Juntos podemos abrir más oportunidades
            </h2>

            <p className="mx-auto max-w-3xl text-lg leading-relaxed text-white/90">
              Cada acción cuenta para crear espacios laborales más accesibles,
              respetuosos e inclusivos para todas las personas.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};