"use client";
import React, { useEffect, useRef } from "react";

const slides = [
  {
    image: "/carusel1.jpg",
    text: "Instalación y cambio de sonda nasogástrica",
  },
  {
    image: "/carusel2.jpg",
    text: "Oxigenoterapia",
  },
  {
    image: "/carousel.jpg",
    text: "Baño en cama",
  },
  {
    image: "/carusel4.jpg",
    text: "Curaciones avanzadas",
  },
];

export default function Carousel() {
  const sliderRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      if (sliderRef.current) {
        current = (current + 1) % slides.length;
        sliderRef.current.style.transform = `translateX(-${current * 100}%)`;
      }
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[500px] overflow-hidden mt-5 z-[1]">
      <ul
        ref={sliderRef}
        className="flex w-[400%] transition-transform duration-700 ease-in-out h-full"
        style={{ willChange: "transform" }}
      >
        {slides.map((slide, idx) => (
          <li key={idx} className="w-full h-full list-none relative">
            <img
              src={slide.image}
              alt={slide.text}
              className="w-full h-full object-cover brightness-[.5] contrast-[.8]"
            />
            <div className="absolute top-1/2 left-0 w-full flex justify-center items-center text-center px-10 md:px-64 -translate-y-1/2">
              <h2 className="text-white text-3xl md:text-5xl font-bold drop-shadow-lg">{slide.text}</h2>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}