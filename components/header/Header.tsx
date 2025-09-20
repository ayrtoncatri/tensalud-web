"use client";
import React, { useState, useEffect } from "react";

export default function Header({ onContactClicked }: { onContactClicked?: () => void }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleContactClick = () => {
    if (onContactClicked) onContactClicked();
    setIsMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-[1000] transition-colors duration-300 ${
          isScrolled ? "bg-white/80 shadow" : "bg-[#f5f5f5]"
        }`}
        id="header"
      >
        <div className="flex justify-between items-center px-6 h-[100px]">
          {/* Logo + TENSANDHEALTH */}
          <div className="flex items-center">
            <img src="/logo2.png" alt="logo" className="max-w-[100px] mr-6" />
            <span className="text-3xl md:text-4xl font-bold text-[#003a56] tracking-wide">
              TENSAND
              <span className="text-[#00b488]">HEALTH</span>
            </span>
          </div>
          {/* Menú hamburguesa */}
          <button
            className="md:hidden block"
            onClick={() => setIsMenuOpen((v) => !v)}
            aria-label="Abrir menú"
          >
            <img src="/menu3.png" alt="menu" className="w-10" />
          </button>
        </div>
        {/* Menú principal */}
        <nav
          className={`bg-[#2b6ebb] w-full transition-all duration-300 ${
            isMenuOpen ? "block" : "hidden md:block"
          }`}
        >
          <ul className="flex flex-col md:flex-row justify-center items-center md:h-[60px] gap-4 md:gap-10">
            <li>
              <a href="#" className="text-white font-bold py-4 px-2 hover:text-red-500 transition">Inicio</a>
            </li>
            <li>
              <a href="#servicios" className="text-white font-bold py-4 px-2 hover:text-red-500 transition">Servicios</a>
            </li>
            <li>
              <a href="#sobre-nosotros" className="text-white font-bold py-4 px-2 hover:text-red-500 transition">Sobre nosotros</a>
            </li>
            <li>
              <a
                href="#contacto"
                className="text-white font-bold py-4 px-2 hover:text-red-500 transition"
                onClick={handleContactClick}
              >
                Contacto
              </a>
            </li>
          </ul>
        </nav>
      </header>
      {/* Overlay para menú móvil */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-[999] transition-opacity duration-300 ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        } md:hidden`}
        onClick={() => setIsMenuOpen(false)}
      />
      {/* Espaciador para el header fijo */}
      <div className="h-[160px] md:h-[160px]" />
    </>
  );
}