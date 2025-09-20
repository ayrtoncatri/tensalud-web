"use client";
import React, { useState } from "react";

export default function WhatsappButton() {
  const [showPopup, setShowPopup] = useState(false);
  const [buzz, setBuzz] = useState(false);

  const togglePopup = () => setShowPopup((v) => !v);

  const openChat = () => {
    const phoneNumber = "56938937851";
    const message = encodeURIComponent("Hola, me gustaría obtener más información.");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  // Efecto buzz
  const handleBuzz = () => {
    setBuzz(true);
    setTimeout(() => setBuzz(false), 1000);
  };

  return (
    <>
      <div
        id="contacto"
        className={`fixed bottom-5 right-5 z-[9999] bg-white rounded-full w-[60px] h-[60px] flex items-center justify-center cursor-pointer shadow-lg transition hover:opacity-70 ${buzz ? "animate-buzz" : ""}`}
        onClick={() => {
          togglePopup();
          handleBuzz();
        }}
      >
        <img src="/whatsapp.webp" alt="WhatsApp" className="w-[60px] h-[60px]" />
      </div>
      {/* Popup */}
      <div
        className={`fixed bottom-24 right-5 w-[300px] bg-white rounded-lg shadow-lg z-[10000] transition-all ${
          showPopup ? "opacity-100 visible translate-y-0" : "opacity-0 invisible translate-y-4"
        }`}
      >
        <div className="flex items-center justify-between bg-[#25D366] text-white rounded-t-lg px-4 py-2">
          <div className="flex items-center gap-2">
            <img src="/whatsapp.webp" alt="WhatsApp" className="w-6 h-6" />
            <span>WhatsApp</span>
          </div>
          <button className="text-2xl" onClick={togglePopup}>&times;</button>
        </div>
        <div className="p-4 text-center">
          <p className="mb-4">¿Contacto?</p>
          <button
            className="bg-[#25D366] text-white px-4 py-2 rounded hover:bg-[#1da851] transition"
            onClick={openChat}
          >
            Abrir chat
          </button>
        </div>
      </div>
      {/* Animación buzz */}
      <style jsx global>{`
        @keyframes buzz {
          10% { transform: translateX(3px) rotate(2deg);}
          20% { transform: translateX(-3px) rotate(-2deg);}
          30% { transform: translateX(3px) rotate(2deg);}
          40% { transform: translateX(-3px) rotate(-2deg);}
          50% { transform: translateX(2px) rotate(1deg);}
          60% { transform: translateX(-2px) rotate(-1deg);}
          70% { transform: translateX(2px) rotate(1deg);}
          80% { transform: translateX(-2px) rotate(-1deg);}
          90% { transform: translateX(1px) rotate(0);}
          100% { transform: translateX(-1px) rotate(0);}
        }
        .animate-buzz {
          animation: buzz 1s ease;
        }
      `}</style>
    </>
  );
}