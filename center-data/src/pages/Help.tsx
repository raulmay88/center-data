import { motion } from "framer-motion";
import {
  AlertTriangle,
  ArrowRight,
  Building2,
  ExternalLink,
  FileText,
  HandHeart,
  HelpCircle,
  Mail,
  Phone,
  Scale,
  ShieldAlert,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const steps = [
  {
    title: "Reúne evidencia",
    description:
      "Guarda correos electrónicos, mensajes, documentos, capturas o cualquier prueba que pueda demostrar la discriminación.",
    icon: FileText,
    gradient: "from-sky-500 to-sky-700",
  },
  {
    title: "Presenta una denuncia",
    description:
      "Puedes acudir a organismos oficiales que investigan casos de discriminación laboral y violación de derechos humanos.",
    icon: ShieldAlert,
    gradient: "from-amber-400 to-orange-500",
  },
  {
    title: "Busca orientación",
    description:
      "Las instituciones pueden brindarte asesoría gratuita sobre cómo proceder y qué derechos te protegen.",
    icon: HelpCircle,
    gradient: "from-emerald-500 to-emerald-700",
  },
];

const organizations = [
  {
    name: "CONAPRED",
    description:
      "Consejo Nacional para Prevenir la Discriminación. Atiende denuncias relacionadas con discriminación en México.",
    url: "https://conectate.conapred.gob.mx/",
    icon: ShieldCheck,
    gradient: "from-sky-500 to-sky-700",
  },
  {
    name: "Secretaría del Trabajo",
    description:
      "Brinda asesoría laboral y atención a conflictos relacionados con el empleo.",
    url: "https://www.gob.mx/stps",
    icon: Building2,
    gradient: "from-emerald-500 to-emerald-700",
  },
  {
    name: "Comisión Nacional de los Derechos Humanos",
    description:
      "Atiende violaciones a los derechos humanos en todo el país.",
    url: "https://www.cndh.org.mx",
    icon: Scale,
    gradient: "from-violet-500 to-purple-700",
  },
  {
    name: "Derechos Humanos Quintana Roo",
    description:
      "Institución estatal que protege los derechos humanos de las personas en Quintana Roo.",
    url: "https://derechoshumanos.qroo.gob.mx/",
    icon: HandHeart,
    gradient: "from-amber-400 to-orange-500",
  },
  {
    name: "DIF Quintana Roo",
    description:
      "Ofrece apoyo social y programas para personas con discapacidad en el estado.",
    url: "https://dif.qroo.gob.mx/",
    icon: HelpCircle,
    gradient: "from-rose-500 to-pink-700",
  },
];

export const Help = () => {
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
            <HelpCircle size={18} />
            Orientación y apoyo
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mx-auto mb-6 max-w-5xl text-4xl font-extrabold leading-tight md:text-6xl"
          >
            Ayuda y orientación
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.7 }}
            className="mx-auto max-w-3xl text-lg leading-relaxed text-white/90 md:text-xl"
          >
            Si has sufrido discriminación laboral o necesitas orientación sobre
            tus derechos, existen instituciones en México y Quintana Roo que
            pueden ayudarte.
          </motion.p>
        </div>
      </section>

      {/* INTRO */}
      <section className="mx-auto max-w-6xl px-6 py-24 text-center">
        <motion.span
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-5 inline-flex items-center gap-2 rounded-full bg-red-100 px-4 py-2 text-sm font-semibold text-red-700"
        >
          <AlertTriangle size={18} />
          Actúa con información
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto mb-6 max-w-4xl text-3xl font-extrabold text-slate-900 md:text-5xl"
        >
          ¿Qué hacer si sufres discriminación laboral?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-lg leading-relaxed text-slate-600"
        >
          Si una empresa te negó un empleo, te despidió o te trató de manera
          injusta debido a tu discapacidad, puedes denunciar estos hechos ante
          instituciones que protegen los derechos laborales y humanos en México.
        </motion.p>
      </section>

      {/* STEPS */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={step.title}
                whileHover={{ y: -8 }}
                initial={{ opacity: 0, y: 38 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15, duration: 0.55 }}
                viewport={{ once: true }}
                className="group overflow-hidden rounded-[2rem] border border-slate-100 bg-white shadow-lg transition hover:shadow-2xl"
              >
                <div className={`h-2 bg-gradient-to-r ${step.gradient}`} />

                <div className="p-8 text-center">
                  <div
                    className={`mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${step.gradient} text-white shadow-lg transition group-hover:scale-105`}
                  >
                    <Icon size={34} />
                  </div>

                  <span className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-sm font-bold text-slate-700">
                    {index + 1}
                  </span>

                  <h3 className="mb-3 text-xl font-bold text-slate-900">
                    {step.title}
                  </h3>

                  <p className="leading-relaxed text-slate-600">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* IMPORTANT NOTE */}
      <section className="px-6 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 34 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
          viewport={{ once: true }}
          className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] border border-amber-100 bg-gradient-to-r from-amber-50 to-orange-50 p-8 shadow-lg md:p-10"
        >
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-amber-200/60 blur-3xl" />

          <div className="relative grid gap-6 md:grid-cols-[auto_1fr] md:items-start">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-100 text-amber-700">
              <AlertTriangle size={34} />
            </div>

            <div>
              <h2 className="mb-3 text-2xl font-extrabold text-slate-900 md:text-3xl">
                Antes de denunciar, organiza tu información
              </h2>

              <p className="text-lg leading-relaxed text-slate-700">
                Es recomendable anotar fechas, nombres, lugares, mensajes y
                cualquier evidencia relacionada con el caso. Esto puede ayudarte
                a explicar mejor lo ocurrido cuando solicites orientación.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ORGANIZATIONS */}
      <section className="relative overflow-hidden bg-white py-24">
        <div className="absolute -left-28 top-10 h-72 w-72 rounded-full bg-sky-100 blur-3xl" />
        <div className="absolute -right-28 bottom-10 h-72 w-72 rounded-full bg-emerald-100 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6">
          <div className="mx-auto mb-14 max-w-4xl text-center">
            <motion.span
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="mb-5 inline-flex items-center gap-2 rounded-full bg-sky-100 px-4 py-2 text-sm font-semibold text-sky-700"
            >
              <ShieldCheck size={18} />
              Instituciones de apoyo
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl font-extrabold text-slate-900 md:text-5xl"
            >
              Instituciones que pueden ayudarte
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.6 }}
              viewport={{ once: true }}
              className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-slate-600"
            >
              Puedes acercarte a organismos oficiales para recibir orientación,
              levantar reportes o conocer los pasos adecuados según tu caso.
            </motion.p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {organizations.map((organization, index) => {
              const Icon = organization.icon;

              return (
                <motion.div
                  key={organization.name}
                  initial={{ opacity: 0, y: 34 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="group overflow-hidden rounded-[2rem] border border-slate-100 bg-slate-50 shadow-sm transition hover:-translate-y-1 hover:bg-white hover:shadow-xl"
                >
                  <div
                    className={`h-2 bg-gradient-to-r ${organization.gradient}`}
                  />

                  <div className="p-7">
                    <div
                      className={`mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${organization.gradient} text-white shadow-md transition group-hover:scale-105`}
                    >
                      <Icon size={28} />
                    </div>

                    <h3 className="mb-3 text-xl font-extrabold text-slate-900">
                      {organization.name}
                    </h3>

                    <p className="mb-6 text-sm leading-relaxed text-slate-600">
                      {organization.description}
                    </p>

                    <a
                      href={organization.url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-bold text-sky-700 shadow-sm transition hover:bg-sky-600 hover:text-white"
                    >
                      Visitar sitio
                      <ExternalLink size={16} />
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* HELP LINE */}
      <section className="px-6 py-24">
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-gradient-to-r from-sky-600 via-emerald-600 to-violet-600 px-6 py-16 text-center text-white shadow-2xl">
          <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-white/20 blur-3xl" />
          <div className="absolute -bottom-24 right-0 h-64 w-64 rounded-full bg-amber-300/30 blur-3xl" />

          <div className="relative mx-auto max-w-4xl">
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-3xl border border-white/30 bg-white/20 backdrop-blur-md">
              <Phone size={42} />
            </div>

            <motion.h2
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-5 text-3xl font-extrabold md:text-5xl"
            >
              Línea de ayuda y orientación
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.6 }}
              viewport={{ once: true }}
              className="mx-auto mb-8 max-w-3xl text-lg leading-relaxed text-white/90"
            >
              Si necesitas orientación o deseas reportar un caso de
              discriminación relacionado con discapacidad, puedes comunicarte
              con la línea de atención ciudadana del CONADIS.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.25, duration: 0.55 }}
              viewport={{ once: true }}
              className="mx-auto max-w-xl rounded-[2rem] border border-white/25 bg-white/15 p-8 backdrop-blur-md"
            >
              <p className="mb-2 text-white/80">
                Número gratuito de atención ciudadana
              </p>

              <p className="mb-6 text-4xl font-extrabold text-white md:text-5xl">
                01 800 007 3705
              </p>

              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <a
                  href="tel:018000073705"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3 font-bold text-sky-700 shadow-lg transition hover:bg-sky-50 hover:scale-105 active:scale-95"
                >
                  <Phone size={18} />
                  Llamar ahora
                </a>

                <a
                  href="mailto:contacto@accesstowork.com"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-7 py-3 font-bold text-white backdrop-blur-md transition hover:bg-white/20 hover:scale-105 active:scale-95"
                >
                  <Mail size={18} />
                  Enviar correo
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FINAL MESSAGE */}
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-5xl rounded-[2rem] border border-sky-100 bg-white p-8 text-center shadow-lg md:p-10">
          <Sparkles className="mx-auto mb-5 text-emerald-600" size={42} />

          <h2 className="mb-4 text-2xl font-extrabold text-slate-900 md:text-4xl">
            Pedir ayuda también es defender tus derechos
          </h2>

          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-slate-600">
            La orientación adecuada puede ayudarte a tomar mejores decisiones,
            conocer tus opciones y avanzar con mayor seguridad.
          </p>

          <a
            href="#"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-600 to-emerald-600 px-7 py-3 font-bold text-white shadow-md transition hover:scale-105 hover:shadow-lg active:scale-95"
          >
            Conocer más recursos
            <ArrowRight size={18} />
          </a>
        </div>
      </section>
    </div>
  );
};