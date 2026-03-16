import Carousel from "../components/common/carousel/Carousel";
import { images } from "../components/common/carousel/Images";

import { Building2, Scale, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

export const Home = () => {
  return (
    <div className="w-full flex flex-col gap-24">

      {/* HERO SECTION */}
      <section className="relative w-full">

        <Carousel images={images} autoPlayInterval={5000} />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white px-6"
          >
            <h1 className="text-5xl font-bold mb-6">
              Access To Work
            </h1>

            <p className="max-w-2xl mx-auto text-lg text-gray-200 mb-8">
              Impulsamos la inclusión laboral y conectamos talento con
              oportunidades justas y accesibles para personas con discapacidad.
            </p>

          </motion.div>
        </div>
      </section>

      {/* INTRO */}
      <section className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-gray-900 mb-6"
        >
          Un espacio para oportunidades inclusivas
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="text-gray-600 max-w-3xl mx-auto text-lg"
        >
          Somos una plataforma comprometida con la inclusión laboral y la
          igualdad de oportunidades. Nuestro objetivo es crear un espacio
          donde las personas con discapacidad puedan encontrar asesoría,
          recursos y oportunidades de empleo accesibles y justas.
        </motion.p>
      </section>

      {/* SERVICES */}
      <section className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">

        <motion.div
          whileHover={{ y: -8 }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-white shadow-lg rounded-xl p-8 text-center"
        >
          <Building2 className="text-blue-600 mx-auto mb-4" size={36} />

          <h3 className="text-xl font-semibold mb-3">
            Empresas aliadas
          </h3>

          <p className="text-gray-600">
            Conectamos personas con discapacidad con empresas comprometidas
            con la diversidad y la inclusión laboral.
          </p>
        </motion.div>

        <motion.div
          whileHover={{ y: -8 }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-white shadow-lg rounded-xl p-8 text-center"
        >
          <Scale className="text-blue-600 mx-auto mb-4" size={36} />

          <h3 className="text-xl font-semibold mb-3">
            Derechos laborales
          </h3>

          <p className="text-gray-600">
            Información clara sobre derechos laborales para promover
            entornos de trabajo justos e inclusivos.
          </p>
        </motion.div>

        <motion.div
          whileHover={{ y: -8 }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-white shadow-lg rounded-xl p-8 text-center"
        >
          <ShieldCheck className="text-blue-600 mx-auto mb-4" size={36} />

          <h3 className="text-xl font-semibold mb-3">
            Asesoría y apoyo
          </h3>

          <p className="text-gray-600">
            Brindamos herramientas, orientación y recursos para facilitar
            el acceso al empleo y el desarrollo profesional.
          </p>
        </motion.div>

      </section>

      {/* IMPACT */}
      <section className="bg-gray-100 py-20">
            <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10 text-center">

                <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                >
                <h3 className="text-4xl font-bold text-blue-600">+200</h3>
                <p className="text-gray-600 mt-2">
                    Personas beneficiadas
                </p>
                </motion.div>

                <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                viewport={{ once: true }}
                >
                <h3 className="text-4xl font-bold text-blue-600">+50</h3>
                <p className="text-gray-600 mt-2">
                    Empresas aliadas
                </p>
                </motion.div>

                <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                viewport={{ once: true }}
                >
                <h3 className="text-4xl font-bold text-blue-600">100%</h3>
                <p className="text-gray-600 mt-2">
                    Compromiso con la inclusión
                </p>
                </motion.div>

            </div>
            </section>
    </div>
  );
};