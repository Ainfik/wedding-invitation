import { useEffect, useState } from "react";
import { useInView } from "../hooks/useInView";

export default function HeroText() {
  const targetDate = new Date("2026-03-29T00:00:00").getTime();

  const [timeLeft, setTimeLeft] = useState(getTimeLeft());
  const [ref, isInView] = useInView();

  function getTimeLeft() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    return {
      days: Math.floor(distance / (1000 * 60 * 60 * 24)),
      hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((distance / (1000 * 60)) % 60),
      seconds: Math.floor((distance / 1000) % 60),
    };
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section ref={ref} className="text-center px-6 py-16 text-black max-w-xl mx-auto">

      <p className={`tracking-[3px] text-sm ${isInView ? 'animate-fade-in animation-delay-100' : 'opacity-0'}`}>WE ARE</p>

      <h2 className={`text-3xl sm:text-4xl font-caveat mb-4 ${isInView ? 'animate-slide-in-left animation-delay-200' : 'opacity-0'}`}>GETTING MARRIED</h2>

      <p className={`text-sm sm:text-base text-gray-700 mb-8 px-4 ${isInView ? 'animate-fade-in-up animation-delay-300' : 'opacity-0'}`}>
        Dengan memohon ridha dan keberkahan Allah SWT, kami memulai perjalanan suci ini dalam satu ikatan janji.
        Semoga langkah kami senantiasa dipenuhi cinta, kesabaran, dan kebahagiaan sekaligus ketenteraman.
      </p>

      <div className={`bg-white/80 backdrop-blur-md p-4 rounded-2xl shadow-md flex justify-center gap-12 mb-6 ${isInView ? 'animate-scale-in animation-delay-400' : 'opacity-0'}`}>
        <div className="text-center">
          <p className="text-2xl font-semibold">{timeLeft.days}</p>
          <p className="text-xs uppercase tracking-widest">Days</p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-semibold">{timeLeft.hours}</p>
          <p className="text-xs uppercase tracking-widest">Hour</p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-semibold">{timeLeft.minutes}</p>
          <p className="text-xs uppercase tracking-widest">Mins</p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-semibold">{timeLeft.seconds}</p>
          <p className="text-xs uppercase tracking-widest">Sec</p>
        </div>
      </div>

      <button
        onClick={() => {
          const start = "20260329T080000";
          const end = "20260329T110000";
          const url = `https://www.google.com/calendar/render?action=TEMPLATE&text=Wedding+Fauzan+%26+Dede&dates=${start}/${end}&details=Undangan+Pernikahan&location=Indonesia`;
          window.open(url, "_blank");
        }}
        className="px-12 bg-[#8b5e3c] text-white font-semibold py-3 rounded-xl hover:scale-105 transition"
      >
        Save The Date
      </button>

    </section>
  );
}