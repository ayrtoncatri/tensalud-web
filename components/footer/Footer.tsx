import React from "react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#0a141d] text-white font-montserrat">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 py-12 px-4">
        {/* Logo */}
        <div className="flex justify-center items-center">
          <a href="#">
            <img src="/logo2.png" alt="logo tens and health" className="w-[150px]" />
          </a>
        </div>
        {/* Sobre nosotros */}
        <div>
          <h2 className="text-white mb-6 text-xl font-bold">SOBRE NOSOTROS</h2>
          <p className="text-[#efefef] mb-2">
            Somos un equipo de profesionales de la salud preocupados de entregar tratamiento y atención de calidad a nuestros adultos mayores y adulto joven en la comodidad&nbsp;de&nbsp;su&nbsp;hogar
          </p>
        </div>
        {/* Redes sociales */}
        <div>
          <h2 className="text-white mb-6 text-xl font-bold">SIGUENOS</h2>
          <div className="flex space-x-3">
            <a href="#" className="w-[45px] h-[45px] flex items-center justify-center bg-[#0d2033] text-white rounded transition hover:text-cyan-300" aria-label="Facebook">
              <i className="fab fa-facebook-f text-xl"></i>
            </a>
            <a href="#" className="w-[45px] h-[45px] flex items-center justify-center bg-[#0d2033] text-white rounded transition hover:text-cyan-300" aria-label="Instagram">
              <i className="fab fa-instagram text-xl"></i>
            </a>
            <a href="#" className="w-[45px] h-[45px] flex items-center justify-center bg-[#0d2033] text-white rounded transition hover:text-cyan-300" aria-label="Twitter">
              <i className="fab fa-twitter text-xl"></i>
            </a>
            <a href="#" className="w-[45px] h-[45px] flex items-center justify-center bg-[#0d2033] text-white rounded transition hover:text-cyan-300" aria-label="YouTube">
              <i className="fab fa-youtube text-xl"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="bg-[#0a1a2a] py-3 text-center">
        <small className="text-white text-base">
          &copy; 2024 <b>TensAndHealth</b> - Todos los Derechos Reservados
        </small>
      </div>
    </footer>
  );
}