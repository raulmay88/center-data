import { motion } from "framer-motion";
import { Scale, ShieldCheck, Building2, AlertTriangle } from "lucide-react";

export const RightLawsPage = () => {
  return (
    <div className="w-full flex flex-col gap-24">

      {/* HERO */}
      <section className="bg-gray-900 text-white py-20 text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold mb-6"
        >
          Derechos laborales para personas con discapacidad
        </motion.h1>

        <p className="max-w-3xl mx-auto text-gray-300 text-lg">
          Las personas con discapacidad tienen derecho a trabajar en condiciones
          dignas, sin discriminación y con igualdad de oportunidades. En México
          y en el estado de Quintana Roo existen leyes que protegen estos
          derechos y promueven la inclusión laboral.
        </p>
      </section>

      {/* INTRO + IMAGE */}
      <section className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">

        {/* IMAGE */}
        <div className="w-full aspect-square rounded-xl overflow-hidden">
          <img
            src="https://img.freepik.com/foto-gratis/acercamiento-joven-empresario-que-realiza-pasantia_23-2149305375.jpg"
            alt="Inclusión laboral"
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
            Igualdad de oportunidades laborales
          </motion.h2>

          <p className="text-gray-600 text-lg mb-4">
            La legislación mexicana reconoce el derecho de todas las personas
            a acceder a un empleo digno. Esto incluye a las personas con
            discapacidad, quienes deben tener las mismas oportunidades para
            desarrollarse profesionalmente.
          </p>

          <p className="text-gray-600 text-lg">
            En Quintana Roo también se promueven políticas públicas para
            fomentar la inclusión laboral, buscando eliminar barreras físicas,
            sociales y culturales que dificultan el acceso al empleo.
          </p>
        </div>

      </section>

      {/* RIGHTS */}
      <section className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">

        <motion.div
          whileHover={{ y: -6 }}
          className="bg-white shadow-lg rounded-xl p-8 text-center"
        >
          <Scale className="text-blue-600 mx-auto mb-4" size={36} />

          <h3 className="text-xl font-semibold mb-3">
            Derecho a no ser discriminado
          </h3>

          <p className="text-gray-600">
            Ninguna persona puede ser rechazada para un empleo por motivo de
            discapacidad. La ley protege el derecho a ser evaluado por las
            habilidades y capacidades reales.
          </p>

        </motion.div>

        <motion.div
          whileHover={{ y: -6 }}
          className="bg-white shadow-lg rounded-xl p-8 text-center"
        >
          <Building2 className="text-blue-600 mx-auto mb-4" size={36} />

          <h3 className="text-xl font-semibold mb-3">
            Accesibilidad en el trabajo
          </h3>

          <p className="text-gray-600">
            Los centros laborales deben contar con condiciones accesibles
            que permitan a las personas con discapacidad desempeñar su
            trabajo de forma segura y eficiente.
          </p>

        </motion.div>

        <motion.div
          whileHover={{ y: -6 }}
          className="bg-white shadow-lg rounded-xl p-8 text-center"
        >
          <ShieldCheck className="text-blue-600 mx-auto mb-4" size={36} />

          <h3 className="text-xl font-semibold mb-3">
            Igualdad de salario
          </h3>

          <p className="text-gray-600">
            Las personas con discapacidad deben recibir el mismo salario
            que cualquier otro trabajador que realice el mismo trabajo.
          </p>

        </motion.div>

      </section>

      {/* LEGAL FRAMEWORK */}
      <section className="bg-gray-100 py-20">

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

          {/* TEXT */}
          <div>

            <h2 className="text-3xl font-bold mb-6">
              Marco legal en México y Quintana Roo
            </h2>

            <div className="space-y-6 text-gray-600 text-lg">

              <p>
                La <strong>Ley Federal del Trabajo</strong> establece que ninguna
                persona puede ser discriminada por motivos de discapacidad,
                promoviendo condiciones laborales justas e igualitarias.
              </p>

              <p>
                La <strong>Ley General para la Inclusión de las Personas con
                Discapacidad</strong> garantiza la participación plena de las
                personas con discapacidad en la vida laboral y social.
              </p>

              <p>
                En <strong>Quintana Roo</strong> también existe legislación
                estatal que promueve políticas públicas de inclusión,
                accesibilidad y oportunidades laborales para este sector
                de la población.
              </p>

            </div>

          </div>

          {/* IMAGE */}
          <div className="w-full aspect-square rounded-xl overflow-hidden">
            <img
              src="https://img.freepik.com/foto-gratis/mujer-irreconocible-pensando-oficina_23-2148377792.jpg"
              alt="Inclusión laboral"
              className="w-full h-full object-cover"
            />
          </div>

        </div>

      </section>

      {/* REPORT SECTION */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 px-6 items-center pb-20">

        {/* IMAGE */}
        <div className="w-full aspect-square rounded-xl overflow-hidden">
          <img
            src="https://img.freepik.com/foto-gratis/hombre-negocios-firmando-importantes-papeles-contrato_114579-12133.jpg"
            alt="Inclusión laboral"
            className="w-full h-full object-cover"
          />
        </div>


        {/* TEXT */}
        <div>

          <AlertTriangle className="text-red-500 mb-4" size={40} />

          <h2 className="text-3xl font-bold mb-4">
            ¿Qué hacer si sufres discriminación laboral?
          </h2>

          <p className="text-gray-600 text-lg mb-4">
            Si una persona enfrenta discriminación laboral debido a su
            discapacidad, puede presentar una denuncia ante el
            Consejo Nacional para Prevenir la Discriminación (CONAPRED)
            o acudir a instituciones laborales correspondientes.
          </p>

          <p className="text-gray-600 text-lg">
            En Quintana Roo también se puede acudir a instituciones
            estatales encargadas de promover la igualdad y proteger
            los derechos de las personas con discapacidad.
          </p>

        </div>

      </section>

    </div>
  );
}