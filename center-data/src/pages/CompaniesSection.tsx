import { useState } from "react";

const companies = [
  {
    name: "Walmart",
    image:
      "https://images.seeklogo.com/logo-png/15/1/walmart-logo-png_seeklogo-151324.png",
    shortDescription:
      "Promueve la inclusión laboral mediante programas que buscan integrar a personas con discapacidad en diferentes áreas dentro de sus tiendas y centros de distribución.",
    moreInfo:
      "Además de sus iniciativas de contratación inclusiva, Walmart impulsa entornos accesibles y programas de sensibilización para fortalecer la diversidad dentro de sus equipos.",
  },
  {
    name: "Bimbo",
    image:
      "https://i.pinimg.com/1200x/c7/4e/b9/c74eb98d5ef15cf7a466c24be061714f.jpg",
    shortDescription:
      "Grupo Bimbo promueve una cultura organizacional basada en el respeto, la diversidad y la igualdad de oportunidades para todos sus colaboradores.",
    moreInfo:
      "Su enfoque también contempla el bienestar laboral, la integración de talento diverso y la construcción de espacios de trabajo más humanos e incluyentes.",
  },
  {
    name: "CEMEX",
    image:
      "https://i.ytimg.com/vi/KS_CYsyx_n0/maxresdefault.jpg",
    shortDescription:
      "CEMEX impulsa programas de inclusión laboral que fomentan el desarrollo profesional y la igualdad de oportunidades dentro de la industria.",
    moreInfo:
      "La empresa ha fortalecido políticas internas para promover liderazgo inclusivo, desarrollo equitativo y participación de perfiles diversos en sus operaciones.",
  },
  {
    name: "Alsea",
    image:
      "https://t21.com.mx/wp-content/uploads/2023/08/Alsea.jpg",
    shortDescription:
      "Alsea, operador de diversas marcas de restaurantes, impulsa políticas de inclusión y diversidad en sus equipos de trabajo.",
    moreInfo:
      "También trabaja en cultura organizacional, formación y estrategias de integración para generar ambientes laborales más respetuosos y colaborativos.",
  },
  {
    name: "AT&T",
    image:
      "https://pbs.twimg.com/media/Ds8gKZNW0AgwY3Y.jpg",
    shortDescription:
      "AT&T promueve un ambiente laboral inclusivo que reconoce la diversidad como un valor clave para la innovación y el crecimiento empresarial.",
    moreInfo:
      "Sus iniciativas suelen enfocarse en equidad, accesibilidad y representación, favoreciendo una cultura donde distintas perspectivas generan mejores resultados.",
  },
  {
    name: "Sodexo",
    image:
      "https://logowik.com/content/uploads/images/770_sodexo.jpg",
    shortDescription:
      "Sodexo promueve la inclusión laboral y la igualdad de oportunidades, impulsando programas que integran a personas con discapacidad en el ámbito laboral.",
    moreInfo:
      "Su visión también considera bienestar, pertenencia y creación de espacios accesibles donde cada persona pueda desarrollarse plenamente.",
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
    <section className="bg-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Empresas comprometidas con la inclusión
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {companies.map((company, index) => {
            const isFlipped = flippedCards.includes(index);

            return (
              <div
                key={company.name}
                className="group [perspective:1200px] cursor-pointer"
                onClick={() => toggleCard(index)}
              >
                <div
                  className={`relative h-[450px] w-full rounded-2xl transition-transform duration-700 [transform-style:preserve-3d] ${
                    isFlipped ? "[transform:rotateY(180deg)]" : ""
                  }`}
                >
                  {/* FRONT */}
                  <div className="absolute inset-0 bg-white rounded-2xl shadow-lg overflow-hidden [backface-visibility:hidden]">
                    <div className="h-56 bg-gray-100 flex items-center justify-center overflow-hidden">
                      <img
                        src={company.image}
                        alt={company.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="px-6 pt-7 pb-8 text-center">
                      <h3 className="text-xl font-bold text-gray-900 mb-4">
                        {company.name}
                      </h3>

                      <p className="text-gray-600 text-sm leading-relaxed">
                        {company.shortDescription}
                      </p>
                    </div>
                  </div>

                  {/* BACK */}
                  <div className="absolute inset-0 bg-gray-900 text-white rounded-2xl shadow-lg px-6 py-8 flex flex-col justify-center items-center text-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
                    <h3 className="text-2xl font-bold mb-5">
                      {company.name}
                    </h3>

                    <p className="text-gray-200 text-sm leading-relaxed max-w-[90%]">
                      {company.moreInfo}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};