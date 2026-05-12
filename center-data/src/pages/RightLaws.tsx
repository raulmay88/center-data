import { motion } from "framer-motion";
import {
  AlertTriangle,
  BadgeCheck,
  Building2,
  FileText,
  HeartHandshake,
  Scale,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const rights = [
  {
    title: "Derecho a no ser discriminado",
    description:
      "Ninguna persona puede ser rechazada para un empleo por motivo de discapacidad. La evaluación debe basarse en habilidades, experiencia y capacidades reales.",
    icon: Scale,
    color: "sky",
    className: "from-sky-500 to-sky-700",
  },
  {
    title: "Accesibilidad en el trabajo",
    description:
      "Los centros laborales deben promover condiciones accesibles que permitan desempeñar las actividades de forma segura, digna y eficiente.",
    icon: Building2,
    color: "emerald",
    className: "from-emerald-500 to-emerald-700",
  },
  {
    title: "Igualdad de salario",
    description:
      "Las personas con discapacidad deben recibir el mismo salario que cualquier otro trabajador que realice funciones equivalentes.",
    icon: ShieldCheck,
    color: "violet",
    className: "from-violet-500 to-purple-700",
  },
];

const legalItems = [
  {
    title: "Ley Federal del Trabajo",
    description:
      "Establece que ninguna persona puede ser discriminada por motivos de discapacidad, promoviendo condiciones laborales justas, dignas e igualitarias.",
  },
  {
    title: "Ley General para la Inclusión de las Personas con Discapacidad",
    description:
      "Reconoce que las personas con discapacidad gozan de todos los derechos establecidos en el orden jurídico mexicano, impulsando su inclusión, igualdad de oportunidades, accesibilidad y participación plena en la sociedad.",
  },
  {
    title: "Ley Federal para Prevenir y Eliminar la Discriminación",
    description:
      "Busca prevenir y eliminar cualquier forma de discriminación, incluyendo aquella relacionada con la discapacidad, y promueve la igualdad de oportunidades y de trato.",
  },
  {
    title: "Legislación estatal en Quintana Roo",
    description:
      "Promueve políticas públicas de inclusión, accesibilidad y oportunidades laborales para personas con discapacidad dentro del estado.",
  },
];

export const RightLawsPage = () => {
  return (
    <div className="w-full overflow-hidden bg-gradient-to-b from-sky-50 via-white to-emerald-50">
      {/* HERO */}
      <section className="relative overflow-hidden px-6 py-24 text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-sky-700 via-emerald-700 to-violet-800" />
        <div className="absolute -top-28 -left-24 h-80 w-80 rounded-full bg-white/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-amber-300/20 blur-3xl" />

        <div className="relative mx-auto max-w-6xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/15 px-5 py-2 text-sm font-semibold backdrop-blur-md"
          >
            <Scale size={18} />
            Información para una inclusión laboral justa
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mx-auto mb-6 max-w-5xl text-4xl font-extrabold leading-tight md:text-6xl"
          >
            Derechos laborales para personas con discapacidad
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.7 }}
            className="mx-auto max-w-3xl text-lg leading-relaxed text-white/90 md:text-xl"
          >
            Todas las personas tienen derecho a trabajar en condiciones dignas,
            sin discriminación y con igualdad de oportunidades. La inclusión
            laboral empieza con información clara, respeto y accesibilidad.
          </motion.p>
        </div>
      </section>

      {/* INTRO */}
      <section className="mx-auto grid max-w-7xl items-center gap-14 px-6 py-24 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -35 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute -left-6 -top-6 h-32 w-32 rounded-full bg-amber-200/70 blur-3xl" />

          <div className="relative overflow-hidden rounded-[2rem] border border-white shadow-2xl">
            <img
              src="https://img.freepik.com/foto-gratis/acercamiento-joven-empresario-que-realiza-pasantia_23-2149305375.jpg"
              alt="Persona en un entorno laboral inclusivo"
              className="h-[420px] w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/55 via-transparent to-transparent" />

            <div className="absolute bottom-5 left-5 right-5 rounded-3xl border border-white/20 bg-white/15 p-5 text-white backdrop-blur-md">
              <p className="text-sm font-medium text-white/80">
                Principio central
              </p>
              <p className="mt-1 text-xl font-bold">
                El talento debe ser valorado sin barreras.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 35 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <span className="mb-5 inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700">
            <HeartHandshake size={18} />
            Igualdad de oportunidades
          </span>

          <h2 className="mb-6 text-3xl font-extrabold text-slate-900 md:text-5xl">
            Trabajar con dignidad también es un derecho
          </h2>

          <p className="mb-5 text-lg leading-relaxed text-slate-600">
            La legislación mexicana reconoce el derecho de todas las personas a
            acceder a un empleo digno. Esto incluye a las personas con
            discapacidad, quienes deben tener las mismas oportunidades para
            desarrollarse profesionalmente.
          </p>

          <p className="text-lg leading-relaxed text-slate-600">
            En Quintana Roo también se promueven políticas públicas para
            fomentar la inclusión laboral, buscando eliminar barreras físicas,
            sociales y culturales que dificultan el acceso al empleo.
          </p>
        </motion.div>
      </section>

      {/* RIGHTS */}
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
            Derechos esenciales
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-extrabold text-slate-900 md:text-5xl"
          >
            Lo que toda empresa debe respetar
          </motion.h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {rights.map((item, index) => {
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
                <div className={`h-2 bg-gradient-to-r ${item.className}`} />

                <div className="p-8 text-center">
                  <div
                    className={`mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${item.className} text-white shadow-lg transition group-hover:scale-105`}
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

      {/* LEGAL FRAMEWORK */}
      <section className="relative overflow-hidden bg-white py-24">
        <div className="absolute -left-28 top-10 h-72 w-72 rounded-full bg-sky-100 blur-3xl" />
        <div className="absolute -right-28 bottom-10 h-72 w-72 rounded-full bg-emerald-100 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
            viewport={{ once: true }}
          >
            <span className="mb-5 inline-flex items-center gap-2 rounded-full bg-violet-100 px-4 py-2 text-sm font-semibold text-violet-700">
              <FileText size={18} />
              Marco legal
            </span>

            <h2 className="mb-6 text-3xl font-extrabold text-slate-900 md:text-5xl">
              Leyes que respaldan la inclusión laboral
            </h2>

            <p className="mb-8 text-lg leading-relaxed text-slate-600">
              En México existen leyes que protegen la igualdad, la no
              discriminación, la accesibilidad y el derecho de las personas con
              discapacidad a participar plenamente en la vida laboral y social.
            </p>

            <div className="grid gap-5 sm:grid-cols-2">
              {legalItems.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="group relative overflow-hidden rounded-3xl border border-slate-100 bg-slate-50 p-5 shadow-sm transition hover:-translate-y-1 hover:bg-white hover:shadow-xl"
                >
                  <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-emerald-100 opacity-0 blur-2xl transition group-hover:opacity-100" />

                  <div className="relative">
                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-sky-600 text-sm font-extrabold text-white shadow-md">
                      {index + 1}
                    </div>

                    <h3 className="mb-2 text-lg font-bold text-slate-900">
                      {item.title}
                    </h3>

                    <p className="leading-relaxed text-slate-600">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -right-5 -top-5 h-32 w-32 rounded-full bg-violet-200/70 blur-3xl" />

            <div className="relative overflow-hidden rounded-[2rem] shadow-2xl">
              <img
                src="https://img.freepik.com/foto-gratis/mujer-irreconocible-pensando-oficina_23-2148377792.jpg"
                alt="Persona revisando información laboral"
                className="h-[520px] w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />

              <div className="absolute bottom-5 left-5 right-5 rounded-3xl border border-white/20 bg-white/15 p-5 text-white backdrop-blur-md">
                <p className="text-sm font-medium text-white/80">
                  Recordatorio importante
                </p>
                <p className="mt-1 text-xl font-bold">
                  La accesibilidad no es un favor, es parte de la igualdad.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* REPORT SECTION */}
      <section className="mx-auto grid max-w-7xl items-center gap-16 px-6 py-24 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -35 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.65 }}
          viewport={{ once: true }}
          className="relative order-2 md:order-1"
        >
          <div className="relative overflow-hidden rounded-[2rem] shadow-2xl">
            <img
              src="https://img.freepik.com/foto-gratis/hombre-negocios-firmando-importantes-papeles-contrato_114579-12133.jpg"
              alt="Persona firmando documentos laborales"
              className="h-[440px] w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 35 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.65 }}
          viewport={{ once: true }}
          className="order-1 rounded-[2rem] border border-red-100 bg-white p-8 shadow-xl md:order-2 md:p-10"
        >
          <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-red-100 text-red-600">
            <AlertTriangle size={36} />
          </div>

          <h2 className="mb-5 text-3xl font-extrabold text-slate-900 md:text-4xl">
            ¿Qué hacer si sufres discriminación laboral?
          </h2>

          <p className="mb-5 text-lg leading-relaxed text-slate-600">
            Si una persona enfrenta discriminación laboral debido a su
            discapacidad, puede presentar una denuncia ante el Consejo Nacional
            para Prevenir la Discriminación o acudir a las instituciones
            laborales correspondientes.
          </p>

          <p className="mb-7 text-lg leading-relaxed text-slate-600">
            En Quintana Roo también se puede acudir a instituciones estatales
            encargadas de promover la igualdad y proteger los derechos de las
            personas con discapacidad.
          </p>

          <div className="rounded-3xl bg-gradient-to-r from-red-50 to-amber-50 p-5">
            <p className="font-semibold text-slate-900">
              Guarda evidencia, documenta lo sucedido y busca orientación antes
              de iniciar el proceso correspondiente.
            </p>
          </div>
        </motion.div>
      </section>

      {/* FINAL CTA */}
      <section className="px-6 pb-24">
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-gradient-to-r from-sky-600 via-emerald-600 to-violet-600 px-6 py-16 text-center text-white shadow-2xl">
          <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-white/20 blur-3xl" />
          <div className="absolute -bottom-24 right-0 h-64 w-64 rounded-full bg-amber-300/30 blur-3xl" />

          <div className="relative">
            <Sparkles className="mx-auto mb-5" size={42} />

            <h2 className="mx-auto mb-5 max-w-3xl text-3xl font-extrabold md:text-5xl">
              La inclusión laboral comienza con información clara
            </h2>

            <p className="mx-auto max-w-3xl text-lg leading-relaxed text-white/90">
              Conocer los derechos laborales ayuda a construir empresas más
              humanas, accesibles y preparadas para valorar el talento de todas
              las personas.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};