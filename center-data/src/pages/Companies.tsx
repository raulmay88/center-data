import { motion } from "framer-motion";
import { CompaniesSection } from "./CompaniesSection";

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
            Una empresa inclusiva, de acuerdo con la Procuraduría Federal de la Defensa del Trabajo y la Secretaría del Trabajo y Previsión Social, 
            es aquella que garantiza igualdad de oportunidades y un entorno laboral libre de discriminación, donde todas las personas pueden acceder a un empleo, 
            mantenerse en él y desarrollarse profesionalmente. Además, promueve el respeto a la diversidad, condiciones de trabajo dignas y la integración de grupos 
            que enfrentan barreras, asegurando que todos sean valorados y tengan las mismas posibilidades de crecimiento.
          </p>

          <p className="text-gray-600 text-lg">
            Estas organizaciones implementan políticas de accesibilidad,
            diversidad y respeto, creando entornos laborales donde cada
            persona puede aportar sus habilidades y talento.
          </p>

        </div>

      </section>

      {/* BENEFITS */}
    <section className="max-w-7xl mx-auto px-6">
      <div className="grid md:grid-cols-3 gap-10">
        
        <motion.div
          whileHover={{ y: -6 }}
          className="bg-white shadow-lg rounded-xl overflow-hidden text-center"
        >
          <div className="w-full h-56 overflow-hidden">
            <img
              src="https://www.expoknews.com/wp-content/uploads/2025/08/PORTADAS-ABANDONO-INCLUSIOM.jpg"
              alt="Diversidad en el equipo"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="p-8">
            <h3 className="text-xl font-semibold mb-3">
              Diversidad en el equipo
            </h3>

            <p className="text-gray-600">
              Los equipos diversos aportan diferentes perspectivas,
              ideas y soluciones que fortalecen la innovación dentro
              de las empresas.
            </p>
          </div>
        </motion.div>

        <motion.div
          whileHover={{ y: -6 }}
          className="bg-white shadow-lg rounded-xl overflow-hidden text-center"
        >
          <div className="w-full h-56 overflow-hidden">
            <img
              src="https://dtlatina.com/wp-content/uploads/2024/10/Imagen-principal-blog-84.png"
              alt="Cultura organizacional positiva"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="p-8">
            <h3 className="text-xl font-semibold mb-3">
              Cultura organizacional positiva
            </h3>

            <p className="text-gray-600">
              Las empresas inclusivas fomentan el respeto, la empatía
              y el trabajo colaborativo entre todos los colaboradores.
            </p>
          </div>
        </motion.div>

        <motion.div
          whileHover={{ y: -6 }}
          className="bg-white shadow-lg rounded-xl overflow-hidden text-center"
        >
          <div className="w-full h-56 overflow-hidden">
            <img
              src="https://blog.babelteam.com/wp-content/uploads/2024/01/cultura-organizacional-inclusiva-00.jpg"
              alt="Oportunidades laborales justas"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="p-8">
            <h3 className="text-xl font-semibold mb-3">
              Oportunidades laborales justas
            </h3>

            <p className="text-gray-600">
              Promueven procesos de contratación basados en el talento
              y las capacidades de cada persona, sin discriminación.
            </p>
          </div>
        </motion.div>

      </div>
    </section>


      {/* COMPANIES LIST */}
    <CompaniesSection />

    </div>
  );
};