import { motion } from "framer-motion";
import {
  BadgeCheck,
  Building2,
  Handshake,
  HeartHandshake,
  Lightbulb,
  Scale,
  ShieldCheck,
  Sparkles,
  UsersRound,
} from "lucide-react";
import { CompaniesSection } from "./CompaniesSection";
import { TikTokSection } from "./TikTokSection";

const benefits = [
  {
    title: "Diversidad en el equipo",
    description:
      "Los equipos diversos aportan diferentes perspectivas, ideas y soluciones que fortalecen la innovación dentro de las empresas.",
    image:
      "https://www.expoknews.com/wp-content/uploads/2025/08/PORTADAS-ABANDONO-INCLUSIOM.jpg",
    icon: UsersRound,
    gradient: "from-sky-500 to-sky-700",
  },
  {
    title: "Cultura organizacional positiva",
    description:
      "Las empresas inclusivas fomentan el respeto, la empatía y el trabajo colaborativo entre todos los colaboradores.",
    image:
      "https://dtlatina.com/wp-content/uploads/2024/10/Imagen-principal-blog-84.png",
    icon: HeartHandshake,
    gradient: "from-emerald-500 to-emerald-700",
  },
  {
    title: "Oportunidades laborales justas",
    description:
      "Promueven procesos de contratación basados en el talento y las capacidades de cada persona, sin discriminación.",
    image:
      "https://blog.babelteam.com/wp-content/uploads/2024/01/cultura-organizacional-inclusiva-00.jpg",
    icon: Scale,
    gradient: "from-violet-500 to-purple-700",
  },
];

const inclusiveActions = [
  {
    title: "Contratación justa",
    description:
      "Evalúa a las personas por sus habilidades, experiencia y potencial, no por prejuicios o estereotipos.",
    icon: BadgeCheck,
  },
  {
    title: "Accesibilidad real",
    description:
      "Adapta espacios, procesos, herramientas y comunicación para que todas las personas puedan participar.",
    icon: Building2,
  },
  {
    title: "Ambiente respetuoso",
    description:
      "Promueve una cultura libre de discriminación, con empatía, escucha activa y colaboración.",
    icon: ShieldCheck,
  },
  {
    title: "Crecimiento profesional",
    description:
      "Brinda oportunidades de capacitación, desarrollo y promoción interna en igualdad de condiciones.",
    icon: Lightbulb,
  },
];

export const Companies = () => {
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
            <Building2 size={18} />
            Empresas que abren oportunidades
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mx-auto mb-6 max-w-5xl text-4xl font-extrabold leading-tight md:text-6xl"
          >
            Empresas inclusivas
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.7 }}
            className="mx-auto max-w-3xl text-lg leading-relaxed text-white/90 md:text-xl"
          >
            Una empresa inclusiva reconoce el valor de la diversidad y crea
            espacios laborales accesibles donde todas las personas pueden
            desarrollar su talento, crecer y participar en igualdad de
            condiciones.
          </motion.p>
        </div>
      </section>

      {/* INTRO */}
      <section className="mx-auto grid max-w-7xl items-center gap-14 px-6 py-24 lg:grid-cols-2">
        {/* VIDEO / TIKTOK */}
        <motion.div
          initial={{ opacity: 0, x: -35 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute -left-6 -top-6 h-32 w-32 rounded-full bg-amber-200/70 blur-3xl" />
          <div className="absolute -bottom-6 right-6 h-36 w-36 rounded-full bg-sky-200/70 blur-3xl" />

          <div className="relative rounded-[2rem] border border-white bg-white p-4 shadow-2xl">
            <TikTokSection />
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
            <HeartHandshake size={18} />
            Inclusión con acciones reales
          </span>

          <h2 className="mb-6 text-3xl font-extrabold text-slate-900 md:text-5xl">
            ¿Qué es una empresa inclusiva?
          </h2>

          <p className="mb-5 text-lg leading-relaxed text-slate-600">
            Una empresa inclusiva es aquella que garantiza igualdad de
            oportunidades y un entorno laboral libre de discriminación, donde
            todas las personas pueden acceder a un empleo, mantenerse en él y
            desarrollarse profesionalmente.
          </p>

          <p className="mb-8 text-lg leading-relaxed text-slate-600">
            Además, promueve el respeto a la diversidad, condiciones de trabajo
            dignas y la integración de grupos que enfrentan barreras,
            asegurando que todos sean valorados y tengan las mismas
            posibilidades de crecimiento.
          </p>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl border border-sky-100 bg-white p-5 shadow-sm">
              <Sparkles className="mb-3 text-sky-600" size={28} />
              <h3 className="mb-2 font-bold text-slate-900">
                Valora el talento
              </h3>
              <p className="text-sm leading-relaxed text-slate-600">
                Reconoce las habilidades de cada persona por encima de las
                barreras.
              </p>
            </div>

            <div className="rounded-3xl border border-emerald-100 bg-white p-5 shadow-sm">
              <Handshake className="mb-3 text-emerald-600" size={28} />
              <h3 className="mb-2 font-bold text-slate-900">
                Construye confianza
              </h3>
              <p className="text-sm leading-relaxed text-slate-600">
                Genera espacios de respeto, colaboración y participación.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* BENEFITS */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="mb-14 text-center">
          <motion.span
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-5 inline-flex items-center gap-2 rounded-full bg-sky-100 px-4 py-2 text-sm font-semibold text-sky-700"
          >
            <BadgeCheck size={18} />
            Beneficios de la inclusión
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mx-auto max-w-4xl text-3xl font-extrabold text-slate-900 md:text-5xl"
          >
            La inclusión fortalece a las personas y también a las empresas
          </motion.h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {benefits.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                whileHover={{ y: -8 }}
                initial={{ opacity: 0, y: 38 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15, duration: 0.55 }}
                viewport={{ once: true }}
                className="group overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-lg transition hover:shadow-2xl"
              >
                <div className="relative h-60 w-full overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent" />

                  <div
                    className={`absolute bottom-5 left-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${item.gradient} text-white shadow-lg`}
                  >
                    <Icon size={30} />
                  </div>
                </div>

                <div className="p-8">
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

      {/* HOW TO BECOME INCLUSIVE */}
      <section className="relative overflow-hidden bg-white py-24">
        <div className="absolute -left-28 top-10 h-72 w-72 rounded-full bg-sky-100 blur-3xl" />
        <div className="absolute -right-28 bottom-10 h-72 w-72 rounded-full bg-emerald-100 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6">
          <div className="mb-14 text-center">
            <motion.span
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="mb-5 inline-flex items-center gap-2 rounded-full bg-violet-100 px-4 py-2 text-sm font-semibold text-violet-700"
            >
              <ShieldCheck size={18} />
              Acciones clave
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mx-auto max-w-4xl text-3xl font-extrabold text-slate-900 md:text-5xl"
            >
              ¿Cómo puede una empresa ser más inclusiva?
            </motion.h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {inclusiveActions.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="rounded-3xl border border-slate-100 bg-slate-50 p-6 shadow-sm transition hover:-translate-y-1 hover:bg-white hover:shadow-xl"
                >
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500 to-emerald-500 text-white shadow-md">
                    <Icon size={28} />
                  </div>

                  <h3 className="mb-3 text-lg font-bold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="leading-relaxed text-slate-600">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-6 py-24">
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-gradient-to-r from-sky-600 via-emerald-600 to-violet-600 px-6 py-16 text-center text-white shadow-2xl">
          <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-white/20 blur-3xl" />
          <div className="absolute -bottom-24 right-0 h-64 w-64 rounded-full bg-amber-300/30 blur-3xl" />

          <div className="relative">
            <Building2 className="mx-auto mb-5" size={44} />

            <h2 className="mx-auto mb-5 max-w-3xl text-3xl font-extrabold md:text-5xl">
              Una empresa inclusiva no solo contrata, también transforma
            </h2>

            <p className="mx-auto max-w-3xl text-lg leading-relaxed text-white/90">
              Promover la inclusión laboral ayuda a construir equipos más
              humanos, diversos y preparados para responder a los retos del
              presente.
            </p>
          </div>
        </div>
      </section>

      {/* COMPANIES LIST */}
      <section className="pb-24">
        <CompaniesSection />
      </section>
    </div>
  );
};