import { useState } from "react";
import {
  ArrowRight,
  Building2,
  HeartHandshake,
  Info,
  RotateCcw,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";

const companies = [
  {
    name: "Walmart",
    image:
      "https://images.seeklogo.com/logo-png/15/1/walmart-logo-png_seeklogo-151324.png",
    shortDescription:
      "Promueve la inclusión laboral mediante programas que buscan integrar a personas con discapacidad en diferentes áreas dentro de sus tiendas y centros de distribución.",
    moreInfo:
      "Además de sus iniciativas de contratación inclusiva, Walmart impulsa entornos accesibles y programas de sensibilización para fortalecer la diversidad dentro de sus equipos.",
    gradient: "from-sky-500 to-sky-700",
  },
  {
    name: "Bimbo",
    image:
      "https://i.pinimg.com/1200x/c7/4e/b9/c74eb98d5ef15cf7a466c24be061714f.jpg",
    shortDescription:
      "Grupo Bimbo promueve una cultura organizacional basada en el respeto, la diversidad y la igualdad de oportunidades para todos sus colaboradores.",
    moreInfo:
      "Su enfoque también contempla el bienestar laboral, la integración de talento diverso y la construcción de espacios de trabajo más humanos e incluyentes.",
    gradient: "from-amber-400 to-orange-500",
  },
  {
    name: "CEMEX",
    image: "https://i.ytimg.com/vi/KS_CYsyx_n0/maxresdefault.jpg",
    shortDescription:
      "CEMEX impulsa programas de inclusión laboral que fomentan el desarrollo profesional y la igualdad de oportunidades dentro de la industria.",
    moreInfo:
      "La empresa ha fortalecido políticas internas para promover liderazgo inclusivo, desarrollo equitativo y participación de perfiles diversos en sus operaciones.",
    gradient: "from-violet-500 to-purple-700",
  },
  {
    name: "Alsea",
    image: "https://t21.com.mx/wp-content/uploads/2023/08/Alsea.jpg",
    shortDescription:
      "Alsea, operador de diversas marcas de restaurantes, impulsa políticas de inclusión y diversidad en sus equipos de trabajo.",
    moreInfo:
      "También trabaja en cultura organizacional, formación y estrategias de integración para generar ambientes laborales más respetuosos y colaborativos.",
    gradient: "from-emerald-500 to-emerald-700",
  },
  {
    name: "AT&T",
    image: "https://pbs.twimg.com/media/Ds8gKZNW0AgwY3Y.jpg",
    shortDescription:
      "AT&T promueve un ambiente laboral inclusivo que reconoce la diversidad como un valor clave para la innovación y el crecimiento empresarial.",
    moreInfo:
      "Sus iniciativas suelen enfocarse en equidad, accesibilidad y representación, favoreciendo una cultura donde distintas perspectivas generan mejores resultados.",
    gradient: "from-blue-500 to-indigo-700",
  },
  {
    name: "Sodexo",
    image: "https://logowik.com/content/uploads/images/770_sodexo.jpg",
    shortDescription:
      "Sodexo promueve la inclusión laboral y la igualdad de oportunidades, impulsando programas que integran a personas con discapacidad en el ámbito laboral.",
    moreInfo:
      "Su visión también considera bienestar, pertenencia y creación de espacios accesibles donde cada persona pueda desarrollarse plenamente.",
    gradient: "from-rose-500 to-pink-700",
  },
];

export const CompaniesSection = () => {
  const [flippedCards, setFlippedCards] = useState<number[]>([]);

  const toggleCard = (index: number) => {
    setFlippedCards((prev) =>
      prev.includes(index)
        ? prev.filter((item) => item !== index)
        : [...prev, index]
    );
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-sky-50 to-emerald-50 py-24">
      <div className="absolute -left-28 top-20 h-72 w-72 rounded-full bg-sky-200/60 blur-3xl" />
      <div className="absolute -right-28 bottom-10 h-72 w-72 rounded-full bg-emerald-200/60 blur-3xl" />
      <div className="absolute left-1/2 top-1/3 h-64 w-64 -translate-x-1/2 rounded-full bg-violet-200/40 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-14 max-w-4xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-5 inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700"
          >
            <Building2 size={18} />
            Empresas que inspiran
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-extrabold text-slate-900 md:text-5xl"
          >
            Empresas comprometidas con la inclusión
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            viewport={{ once: true }}
            className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-slate-600"
          >
            Estas organizaciones representan ejemplos de cómo la diversidad, la
            accesibilidad y el respeto pueden formar parte de una cultura
            laboral más humana.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.5 }}
            viewport={{ once: true }}
            className="mt-6 inline-flex items-center gap-2 rounded-full border border-sky-100 bg-white px-4 py-2 text-sm font-medium text-slate-600 shadow-sm"
          >
            <Info size={16} className="text-sky-600" />
            Toca una tarjeta para ver más información
          </motion.div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {companies.map((company, index) => {
            const isFlipped = flippedCards.includes(index);

            return (
              <motion.button
                type="button"
                key={company.name}
                initial={{ opacity: 0, y: 38 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08, duration: 0.5 }}
                viewport={{ once: true }}
                onClick={() => toggleCard(index)}
                className="group text-left [perspective:1200px] focus:outline-none"
                aria-label={`Ver información de ${company.name}`}
              >
                <div
                  className={`relative h-[470px] w-full rounded-[2rem] transition-transform duration-700 [transform-style:preserve-3d] ${
                    isFlipped ? "[transform:rotateY(180deg)]" : ""
                  }`}
                >
                  {/* FRONT */}
                  <div className="absolute cursor-pointer inset-0 overflow-hidden rounded-[2rem] border border-white bg-white shadow-lg transition group-hover:shadow-2xl [backface-visibility:hidden]">
                    <div className="relative h-56 overflow-hidden bg-slate-100">
                      <img
                        src={company.image}
                        alt={company.name}
                        className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/65 via-slate-950/10 to-transparent" />

                      <div
                        className={`absolute bottom-5 left-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${company.gradient} text-white shadow-lg`}
                      >
                        <HeartHandshake size={30} />
                      </div>

                      <div className="absolute right-5 top-5 rounded-full bg-white/20 px-3 py-1 text-xs font-semibold text-white backdrop-blur-md border border-white/30">
                        Inclusiva
                      </div>
                    </div>

                    <div className="flex h-[246px] flex-col px-7 py-7">
                      <h3 className="mb-4 text-2xl font-extrabold text-slate-900">
                        {company.name}
                      </h3>

                      <p className="text-sm leading-relaxed text-slate-600">
                        {company.shortDescription}
                      </p>

                      <div className="mt-auto flex items-center justify-between pt-5">
                        <span className="inline-flex items-center gap-2 text-sm font-bold text-sky-700">
                          Ver más
                          <ArrowRight
                            size={17}
                            className="transition group-hover:translate-x-1"
                          />
                        </span>

                        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-sky-50 text-sky-600 transition group-hover:bg-sky-600 group-hover:text-white">
                          <RotateCcw size={17} />
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* BACK */}
                  <div
                    className={`absolute inset-0 overflow-hidden rounded-[2rem] bg-gradient-to-br ${company.gradient} px-7 py-8 text-white shadow-2xl [transform:rotateY(180deg)] [backface-visibility:hidden]`}
                  >
                    <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-white/20 blur-2xl" />
                    <div className="absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-white/15 blur-3xl" />

                    <div className="relative flex h-full flex-col">
                      <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/30 bg-white/20 backdrop-blur-md">
                        <Sparkles size={34} />
                      </div>

                      <p className="mb-2 text-sm font-semibold text-white/75">
                        Más sobre
                      </p>

                      <h3 className="mb-5 text-3xl font-extrabold">
                        {company.name}
                      </h3>

                      <p className="text-base leading-relaxed text-white/90">
                        {company.moreInfo}
                      </p>

                      <div className="mt-auto rounded-3xl border border-white/20 bg-white/15 p-4 backdrop-blur-md">
                        <p className="text-sm font-medium text-white/90">
                          La inclusión laboral se fortalece cuando las empresas
                          convierten sus valores en acciones reales.
                        </p>
                      </div>

                      <div className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-white">
                        Regresar
                        <RotateCcw size={17} />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.button>
            );
          })}
        </div>
      </div>
    </section>
  );
};