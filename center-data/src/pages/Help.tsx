import { motion } from "framer-motion";
import { Phone, ShieldAlert, FileText, HelpCircle } from "lucide-react";

export const Help = () => {
  return (
    <div className="w-full flex flex-col gap-24">

      {/* HERO */}
      <section className="bg-gray-900 text-white py-20 text-center px-6">

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold mb-6"
        >
          Ayuda y orientación
        </motion.h1>

        <p className="max-w-3xl mx-auto text-gray-300 text-lg">
          Si has sufrido discriminación laboral o necesitas orientación
          sobre tus derechos, existen instituciones en México y en
          Quintana Roo que pueden ayudarte.
        </p>

      </section>


      {/* INTRO */}
      <section className="max-w-6xl mx-auto px-6 text-center">

        <h2 className="text-3xl font-bold mb-6">
          ¿Qué hacer si sufres discriminación laboral?
        </h2>

        <p className="text-gray-600 text-lg max-w-3xl mx-auto">
          Si una empresa te negó un empleo, te despidió o te trató de manera
          injusta debido a tu discapacidad, puedes denunciar estos hechos
          ante instituciones que protegen los derechos laborales y humanos
          en México.
        </p>

      </section>


      {/* STEPS */}
      <section className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">

        <div className="bg-white shadow-lg rounded-xl p-8 text-center">

          <FileText className="text-blue-600 mx-auto mb-4" size={36} />

          <h3 className="font-semibold text-lg mb-3">
            Reúne evidencia
          </h3>

          <p className="text-gray-600">
            Guarda correos electrónicos, mensajes, documentos o cualquier
            prueba que pueda demostrar la discriminación.
          </p>

        </div>


        <div className="bg-white shadow-lg rounded-xl p-8 text-center">

          <ShieldAlert className="text-blue-600 mx-auto mb-4" size={36} />

          <h3 className="font-semibold text-lg mb-3">
            Presenta una denuncia
          </h3>

          <p className="text-gray-600">
            Puedes acudir a organismos oficiales que investigan casos
            de discriminación laboral y violación de derechos humanos.
          </p>

        </div>


        <div className="bg-white shadow-lg rounded-xl p-8 text-center">

          <HelpCircle className="text-blue-600 mx-auto mb-4" size={36} />

          <h3 className="font-semibold text-lg mb-3">
            Busca orientación
          </h3>

          <p className="text-gray-600">
            Las instituciones pueden brindarte asesoría gratuita
            sobre cómo proceder y qué derechos te protegen.
          </p>

        </div>

      </section>


      {/* ORGANIZATIONS */}
      <section className="bg-gray-100 py-20">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-center mb-12">
            Instituciones que pueden ayudarte
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">


            {/* CONAPRED */}
            <div className="bg-white rounded-xl shadow p-6">

              <h3 className="font-semibold text-lg mb-2">
                CONAPRED
              </h3>

              <p className="text-gray-600 text-sm mb-4">
                Consejo Nacional para Prevenir la Discriminación.
                Atiende denuncias relacionadas con discriminación
                en México.
              </p>

              <a
                href="https://conectate.conapred.gob.mx/"
                target="_blank"
                className="text-blue-600 text-sm font-medium"
              >
                Visitar sitio
              </a>

            </div>


            {/* STPS */}
            <div className="bg-white rounded-xl shadow p-6">

              <h3 className="font-semibold text-lg mb-2">
                Secretaría del Trabajo
              </h3>

              <p className="text-gray-600 text-sm mb-4">
                Brinda asesoría laboral y atención a conflictos
                relacionados con el empleo.
              </p>

              <a
                href="https://www.gob.mx/stps"
                target="_blank"
                className="text-blue-600 text-sm font-medium"
              >
                Visitar sitio
              </a>

            </div>


            {/* CNDH */}
            <div className="bg-white rounded-xl shadow p-6">

              <h3 className="font-semibold text-lg mb-2">
                Comisión Nacional de los Derechos Humanos
              </h3>

              <p className="text-gray-600 text-sm mb-4">
                Atiende violaciones a los derechos humanos
                en todo el país.
              </p>

              <a
                href="https://www.cndh.org.mx"
                target="_blank"
                className="text-blue-600 text-sm font-medium"
              >
                Visitar sitio
              </a>

            </div>


            {/* QROO Derechos Humanos */}
            <div className="bg-white rounded-xl shadow p-6">

              <h3 className="font-semibold text-lg mb-2">
                Derechos Humanos Quintana Roo
              </h3>

              <p className="text-gray-600 text-sm mb-4">
                Institución estatal que protege los derechos
                humanos de las personas en Quintana Roo.
              </p>

              <a
                href="https://derechoshumanos.qroo.gob.mx/"
                target="_blank"
                className="text-blue-600 text-sm font-medium"
              >
                Visitar sitio
              </a>

            </div>


            {/* DIF */}
            <div className="bg-white rounded-xl shadow p-6">

              <h3 className="font-semibold text-lg mb-2">
                DIF Quintana Roo
              </h3>

              <p className="text-gray-600 text-sm mb-4">
                Ofrece apoyo social y programas para personas
                con discapacidad en el estado.
              </p>

              <a
                href="https://dif.qroo.gob.mx/"
                target="_blank"
                className="text-blue-600 text-sm font-medium"
              >
                Visitar sitio
              </a>

            </div>

          </div>

        </div>

      </section>

      {/* HELP LINE */}
      <section className="max-w-5xl mx-auto text-center px-6 pb-20">

        <Phone className="mx-auto text-blue-600 mb-4" size={40} />

        <h2 className="text-3xl font-bold mb-4">
          Línea de ayuda y orientación
        </h2>

        <p className="text-gray-600 text-lg mb-6">
          Si necesitas orientación o deseas reportar un caso de discriminación
          relacionado con discapacidad, puedes comunicarte con la línea
          de atención ciudadana del CONADIS.
        </p>

        <div className="bg-blue-50 border border-blue-200 rounded-xl p-8">

          <p className="text-gray-700 mb-2">
            Número gratuito de atención ciudadana
          </p>

          <p className="text-3xl font-bold text-blue-700 mb-4">
            01 800 007 3705
          </p>

          <a
            href="tel:018000073705"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition"
          >
            Llamar ahora
          </a>

        </div>

      </section>

    </div>
  );
};