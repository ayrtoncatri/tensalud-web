import React from "react";

export default function MisionVision() {
  return (
    <div className="w-full flex flex-col gap-12 py-10">
      {/* Misión */}
      <div className="w-full">
        <div className="max-w-full mx-auto px-2">
          <div className="backdrop-blur-sm bg-white/70 rounded-2xl shadow-lg p-6 md:p-10">
            <section id="sobre-nosotros" className="flex flex-col md:flex-row items-center max-w-6xl mx-auto gap-8 px-4">
              <div className="flex-1">
                <img
                  src="/mision.jpg"
                  alt="Misión"
                  className="rounded-2xl w-full h-64 object-cover shadow"
                />
              </div>
              <div className="flex-1 bg-transparent rounded-2xl shadow-none p-8">
                <h2 className="text-white bg-[#2b6ebb] rounded-full text-2xl font-bold text-center py-2 mb-4">
                  Misión
                </h2>
                <p className="text-gray-700 text-lg">
                  Nuestra misión es mejorar la calidad de vida de nuestros pacientes, ofreciendo atenciones humanizadas y accesibles por parte de Paramedicos(TENS).
                  Nos comprometemos a brindar servicios de alta calidad a costos asequibles, centrando nuestro esfuerzo en el bienestar del paciente y adaptándonos a sus posibilidades económicas.
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
      {/* Visión */}
      <div className="w-full">
        <div className="max-w-full mx-auto px-2">
          <div className="backdrop-blur-sm bg-white/70 rounded-2xl shadow-lg p-6 md:p-10">
            <section className="flex flex-col md:flex-row-reverse items-center max-w-6xl mx-auto gap-8 px-4">
              <div className="flex-1">
                <img
                  src="/vision.jpg"
                  alt="Visión"
                  className="rounded-2xl w-full h-64 object-cover shadow"
                />
              </div>
              <div className="flex-1 bg-transparent rounded-2xl shadow-none p-8">
                <h2 className="text-white bg-[#2b6ebb] rounded-full text-2xl font-bold text-center py-2 mb-4">
                  Visión
                </h2>
                <p className="text-gray-700 text-lg">
                  Ser reconocidos como la empresa líder en atención domiciliaria realizada por Paramedicos(TENS), destacándonos por nuestra calidad humana,
                  accesibilidad y compromiso con el bienestar de nuestros pacientes. Aspiramos a ser la primera opción en cuidado domiciliario,
                  brindando servicios que mejoren la vida de las personas y contribuyan a una atención de salud más inclusiva y asequible.
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}