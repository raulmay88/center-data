import { motion } from "framer-motion";
import { Users, Target, HeartHandshake } from "lucide-react";

export const Us = () => {
  return (
    <div className="w-full flex flex-col gap-24">

      {/* HERO */}
      <section className="bg-gray-900 text-white py-20 text-center px-6">

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold mb-6"
        >
          Sobre nosotros
        </motion.h1>

        <p className="max-w-3xl mx-auto text-gray-300 text-lg">
          Access To Work es una plataforma comprometida con la inclusión
          laboral y la igualdad de oportunidades para las personas con
          discapacidad.
        </p>

      </section>


      {/* QUIENES SOMOS */}
      <section className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">

        {/* IMAGE */}
        <div className="aspect-square bg-gray-200 rounded-xl flex items-center justify-center">
          <img
                src="https://img.freepik.com/foto-gratis/guy-muestra-documento-nina-grupo-jovenes-autonomos-oficina-conversando-trabajando_146671-13569.jpg"
                alt="Inclusión laboral"
                className="w-full h-full object-cover"
              />
        </div>

        {/* TEXT */}
        <div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold mb-6"
          >
            ¿Quiénes somos?
          </motion.h2>

          <p className="text-gray-600 text-lg mb-4">
            Somos una iniciativa enfocada en promover la inclusión laboral
            y eliminar las barreras que enfrentan las personas con
            discapacidad al buscar empleo.
          </p>

          <p className="text-gray-600 text-lg">
            Nuestra plataforma busca conectar talento con empresas que
            valoran la diversidad, promoviendo entornos laborales más
            justos, accesibles y respetuosos.
          </p>

        </div>

      </section>


      {/* MISION Y VISION */}
      <section className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10">

        {/* MISION */}
        <div className="bg-white shadow-lg rounded-xl p-8 text-center">

          <Target className="text-blue-600 mx-auto mb-4" size={36} />

          <h3 className="text-xl font-semibold mb-3">
            Nuestra misión
          </h3>

          <p className="text-gray-600">
            Facilitar el acceso a oportunidades laborales inclusivas
            para personas con discapacidad, brindando información,
            herramientas y conexiones con empresas comprometidas
            con la diversidad.
          </p>

        </div>


        {/* VISION */}
        <div className="bg-white shadow-lg rounded-xl p-8 text-center">

          <Users className="text-blue-600 mx-auto mb-4" size={36} />

          <h3 className="text-xl font-semibold mb-3">
            Nuestra visión
          </h3>

          <p className="text-gray-600">
            Construir una sociedad donde todas las personas tengan
            las mismas oportunidades laborales, sin importar su
            condición física, promoviendo una cultura laboral
            inclusiva y equitativa.
          </p>

        </div>

      </section>


      {/* COMPROMISO */}
      <section className="bg-gray-100 py-20">

        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">

          {/* TEXT */}
          <div>

            <HeartHandshake className="text-blue-600 mb-4" size={36} />

            <h2 className="text-3xl font-bold mb-6">
              Nuestro compromiso
            </h2>

            <p className="text-gray-600 text-lg mb-4">
              Creemos que el talento no tiene barreras. Por ello
              trabajamos para crear un espacio donde las personas
              con discapacidad puedan encontrar oportunidades
              laborales justas y accesibles.
            </p>

            <p className="text-gray-600 text-lg">
              A través de nuestra plataforma buscamos fomentar
              una cultura laboral basada en el respeto, la inclusión
              y la igualdad de oportunidades.
            </p>

          </div>

          {/* IMAGE */}
          <div className="aspect-square bg-gray-200 rounded-xl flex items-center justify-center">
            <img
                src="https://img.freepik.com/foto-gratis/fuerza-personas-manos-exito-reunion_1150-1690.jpg"
                alt="Trabajo en equipo"
                className="w-full h-full object-cover"
              />
          </div>

        </div>

      </section>

    </div>
  );
};