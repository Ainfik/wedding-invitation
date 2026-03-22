import { useEffect, useState } from "react";
import bg from "../assets/background.png"; // ✅ IMPORT BACKGROUND

export default function Cover({ onOpen }) {
  const [guest, setGuest] = useState("Tamu Undangan");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const name = params.get("to");

    if (name) {
      setGuest(decodeURIComponent(name.replace(/\+/g, " ")));
    }
  }, []);

  return (
    <div className="h-screen w-full relative flex items-center justify-center overflow-hidden">
      
      {/* BACKGROUND */}
      <img
        src={bg}
        alt="bg"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* CARD */}
      <div className="relative z-10 text-center text-white  max-w-sm w-full animate-scale-in">

        {/* TEXT ATAS */}
        <p className="text-xs tracking-[3px] uppercase font-playfair mb-4 animate-fade-in animation-delay-100">
          WE INVITED YOU TO CELEBRATE OUR WEDDING
        </p>

        {/* NAMA */}
        <h1 className="text-5xl font-italianno leading-tight animate-slide-in-left animation-delay-200">
          Faozan
        </h1>

        <p className="font-playfair my-2 animate-fade-in animation-delay-300">&</p>

        <h1 className="text-5xl font-italianno leading-tight mb-6 animate-slide-in-right animation-delay-400">
          Dede
        </h1>

        {/* TAMU */}
        <p className="text-sm font-playfair animate-fade-in-up animation-delay-500">Kepada Yth:</p>
        <h2 className="text-lg font-semibold font-playfair mb-6 animate-fade-in-up animation-delay-600">
          {guest}
        </h2>

        {/* BUTTON */}
        <button
  onClick={onOpen}
  className="bg-[#8b5e3c] px-6 py-3 rounded-xl hover:scale-105 transition animate-fade-in-up animation-delay-700"
>
  Buka Undangan
</button>

      </div>
    </div>
  );
}
