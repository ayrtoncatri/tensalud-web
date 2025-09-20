import React from "react";

const servicios = [
  {
    img: "/servicio1.jpg",
    title: "Enfermería domiciliaria",
    items: [
      "Intalación y cambio de sonda nasogástrica",
      "Intalación y cambio de sonda foley",
      "Curaciones avanzadas",
      "Vía EV",
      "Administración de medicamentos",
      "Inyecciones intramuscular",
    ],
  },
  {
    img: "/kine.jpg",
    title: "Kinesiología",
    items: [
      "Oxigenoterapia",
      "Nebulizaciones",
      "Ejercicios respiratorios",
      "Aspiración de secreciones",
    ],
  },
  {
    img: "/confort.jpg",
    title: "Aseo y confort",
    items: [
      "Baño en cama",
      "Cambio de disco y colostomía",
      "Bolsa colostomía",
    ],
  },
];

export default function ServiciosOfrecidos({ onSaberMas }: { onSaberMas?: () => void }) {
  return (
    <section className="w-full py-10" id="servicios">
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-extrabold bg-[#09417d]/80 text-white py-6 rounded-lg inline-block px-8 tracking-wide shadow">
          SERVICIOS OFRECIDOS
        </h1>
      </div>
      {/* Fondo blanco difuminado a todo el ancho */}
      <div className="w-full">
        <div className="max-w-full mx-auto px-2">
          <div className="backdrop-blur-sm bg-white/70 rounded-2xl shadow-lg p-6 md:p-10">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
              {servicios.map((serv, idx) => (
                <article
                  key={serv.title}
                  className="rounded-xl shadow flex flex-col overflow-hidden border border-gray-200 bg-transparent"
                >
                  <div className="w-full h-48 bg-gray-200 flex items-center justify-center">
                    <img
                      src={serv.img}
                      alt={serv.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col flex-1 p-6">
                    <h2 className="text-white bg-[#2b6ebb] rounded-full text-xl font-bold text-center py-2 mb-2">
                      {serv.title}
                    </h2>
                    <span className="block text-gray-400 text-center mb-2 font-semibold">
                      Procedimientos
                    </span>
                    <ul className="text-black text-base font-semibold list-disc pl-5 mb-4">
                      {serv.items.map((item) => (
                        <li key={item} className="mb-1">{item}</li>
                      ))}
                    </ul>
                    <div className="mt-auto text-center">
                      <button
                        className="bg-[#2b6ebb] text-white rounded-full px-8 py-2 font-bold shadow hover:bg-[#09417d] transition"
                        onClick={onSaberMas}
                      >
                        Saber más
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}