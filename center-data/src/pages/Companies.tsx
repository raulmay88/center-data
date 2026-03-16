import { motion } from "framer-motion";
import { Building2, Users, Briefcase } from "lucide-react";

export const Companies = () => {
  return (
    <div className="w-full flex flex-col gap-24">

      {/* HERO */}
      <section className="bg-gray-900 text-white py-20 text-center px-6">

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold mb-6"
        >
          Empresas inclusivas
        </motion.h1>

        <p className="max-w-3xl mx-auto text-gray-300 text-lg">
          Las empresas inclusivas reconocen el valor de la diversidad y
          promueven espacios laborales accesibles donde todas las personas
          tienen la oportunidad de desarrollar su talento y crecer
          profesionalmente.
        </p>

      </section>


      {/* INTRO */}
      <section className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">

        {/* IMAGE */}
        <div className="w-full aspect-square rounded-xl overflow-hidden">
          <img
            src="https://img.freepik.com/foto-gratis/vista-lateral-personas-que-trabajan-oficina_23-2149759020.jpg"
            alt="Empresa inclusiva"
            className="w-full h-full object-cover"
          />
        </div>

        {/* TEXT */}
        <div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold text-gray-900 mb-6"
          >
            ¿Qué es una empresa inclusiva?
          </motion.h2>

          <p className="text-gray-600 text-lg mb-4">
            Una empresa inclusiva es aquella que promueve la igualdad de
            oportunidades para todas las personas, incluyendo aquellas
            con discapacidad.
          </p>

          <p className="text-gray-600 text-lg">
            Estas organizaciones implementan políticas de accesibilidad,
            diversidad y respeto, creando entornos laborales donde cada
            persona puede aportar sus habilidades y talento.
          </p>

        </div>

      </section>


      {/* BENEFITS */}
      <section className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">

        <motion.div
          whileHover={{ y: -6 }}
          className="bg-white shadow-lg rounded-xl p-8 text-center"
        >
          <Users className="text-blue-600 mx-auto mb-4" size={36} />

          <h3 className="text-xl font-semibold mb-3">
            Diversidad en el equipo
          </h3>

          <p className="text-gray-600">
            Los equipos diversos aportan diferentes perspectivas,
            ideas y soluciones que fortalecen la innovación dentro
            de las empresas.
          </p>

        </motion.div>


        <motion.div
          whileHover={{ y: -6 }}
          className="bg-white shadow-lg rounded-xl p-8 text-center"
        >
          <Building2 className="text-blue-600 mx-auto mb-4" size={36} />

          <h3 className="text-xl font-semibold mb-3">
            Cultura organizacional positiva
          </h3>

          <p className="text-gray-600">
            Las empresas inclusivas fomentan el respeto, la empatía
            y el trabajo colaborativo entre todos los colaboradores.
          </p>

        </motion.div>


        <motion.div
          whileHover={{ y: -6 }}
          className="bg-white shadow-lg rounded-xl p-8 text-center"
        >
          <Briefcase className="text-blue-600 mx-auto mb-4" size={36} />

          <h3 className="text-xl font-semibold mb-3">
            Oportunidades laborales justas
          </h3>

          <p className="text-gray-600">
            Promueven procesos de contratación basados en el talento
            y las capacidades de cada persona, sin discriminación.
          </p>

        </motion.div>

      </section>


      {/* COMPANIES LIST */}
    <section className="bg-gray-100 py-20">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-3xl font-bold text-center mb-12">
          Empresas comprometidas con la inclusión
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          {/* Walmart */}
          <div className="bg-white rounded-xl shadow overflow-hidden">

            <div className="aspect-square bg-gray-200 flex items-center justify-center">
              <img
                src="https://images.seeklogo.com/logo-png/15/1/walmart-logo-png_seeklogo-151324.png"
                alt="Logo Walmart"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-6 text-center">
              <h3 className="font-semibold text-lg">
                Walmart
              </h3>

              <p className="text-gray-600 text-sm mt-2">
                Promueve la inclusión laboral mediante programas que buscan
                integrar a personas con discapacidad en diferentes áreas
                dentro de sus tiendas y centros de distribución.
              </p>
            </div>

          </div>


          {/* Bimbo */}
          <div className="bg-white rounded-xl shadow overflow-hidden">

            <div className="aspect-square bg-gray-200 flex items-center justify-center">
              <img
                src="https://i.pinimg.com/1200x/c7/4e/b9/c74eb98d5ef15cf7a466c24be061714f.jpg"
                alt="Logo Bimbo"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-6 text-center">
              <h3 className="font-semibold text-lg">
                Bimbo
              </h3>

              <p className="text-gray-600 text-sm mt-2">
                Grupo Bimbo promueve una cultura organizacional basada
                en el respeto, la diversidad y la igualdad de oportunidades
                para todos sus colaboradores.
              </p>
            </div>

          </div>


          {/* CEMEX */}
          <div className="bg-white rounded-xl shadow overflow-hidden">

            <div className="aspect-square bg-gray-200 flex items-center justify-center">
              <img
                src="https://i.ytimg.com/vi/KS_CYsyx_n0/maxresdefault.jpg"
                alt="Logo Cemex"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-6 text-center">
              <h3 className="font-semibold text-lg">
                CEMEX
              </h3>

              <p className="text-gray-600 text-sm mt-2">
                CEMEX impulsa programas de inclusión laboral que fomentan
                el desarrollo profesional y la igualdad de oportunidades
                dentro de la industria.
              </p>
            </div>

          </div>


          {/* Alsea */}
          <div className="bg-white rounded-xl shadow overflow-hidden">

            <div className="aspect-square bg-gray-200 flex items-center justify-center">
              <img
                src="https://t21.com.mx/wp-content/uploads/2023/08/Alsea.jpg"
                alt="Logo Alsea"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-6 text-center">
              <h3 className="font-semibold text-lg">
                Alsea
              </h3>

              <p className="text-gray-600 text-sm mt-2">
                Alsea, operador de diversas marcas de restaurantes,
                impulsa políticas de inclusión y diversidad en sus
                equipos de trabajo.
              </p>
            </div>

          </div>


          {/* AT&T */}
          <div className="bg-white rounded-xl shadow overflow-hidden">

            <div className="aspect-square bg-gray-200 flex items-center justify-center">
              <img
                src="https://pbs.twimg.com/media/Ds8gKZNW0AgwY3Y.jpg"
                alt="Logo At&t"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-6 text-center">
              <h3 className="font-semibold text-lg">
                AT&T
              </h3>

              <p className="text-gray-600 text-sm mt-2">
                AT&T promueve un ambiente laboral inclusivo que reconoce
                la diversidad como un valor clave para la innovación y
                el crecimiento empresarial.
              </p>
            </div>

          </div>


          {/* Sodexo */}
          <div className="bg-white rounded-xl shadow overflow-hidden">

            <div className="aspect-square bg-gray-200 flex items-center justify-center">
              <img
                src="https://logowik.com/content/uploads/images/770_sodexo.jpg"
                alt="Logo Sodexo"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-6 text-center">
              <h3 className="font-semibold text-lg">
                Sodexo
              </h3>

              <p className="text-gray-600 text-sm mt-2">
                Sodexo promueve la inclusión laboral y la igualdad de
                oportunidades, impulsando programas que integran a
                personas con discapacidad en el ámbito laboral.
              </p>
            </div>

          </div>

        </div>

      </div>

    </section>

    </div>
  );
};