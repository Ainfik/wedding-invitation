import foto from "../assets/page2.JPG";
import { useInView } from "../hooks/useInView";

export default function Footer() {
  const [ref, isInView] = useInView();

  return (
    <footer ref={ref} className="h-screen w-full relative overflow-hidden">

      <img
        src={foto}
        alt="couple"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-transparent"></div>

      <div className="absolute inset-0 flex flex-col items-center text-center px-6" style={{ paddingTop: "10px" }}>
        <div className="text-center">
          <p style={{ fontFamily: "Caveat, cursive" }} className={`font-caveat text-3xl text-black ${isInView ? 'animate-slide-in-left animation-delay-100' : 'opacity-0'}`}>Faozan</p>
          <p style={{ fontFamily: "Caveat, cursive" }} className={`font-caveat text-3xl text-black ${isInView ? 'animate-fade-in animation-delay-200' : 'opacity-0'}`}>&</p>
          <p style={{ fontFamily: "Caveat, cursive" }} className={`font-caveat text-3xl text-black ${isInView ? 'animate-slide-in-right animation-delay-300' : 'opacity-0'}`}>Dede</p>

          <h2 style={{ fontFamily: "Caveat, cursive" }} className={`font-caveat text-6xl md:text-7xl text-black mt-2 ${isInView ? 'animate-fade-in-up animation-delay-400' : 'opacity-0'}`}>Terimakasih</h2>
        </div>

        <div className={`mt-auto mb-10 max-w-xl relative w-full ${isInView ? 'animate-fade-in-up animation-delay-500' : 'opacity-0'}`}>
          <div className="absolute inset-0 bg-black/50 rounded-3xl" />
          <div className="relative z-10 p-6">
            <p className="text-sm text-white font-caveat">
              Atas doa, cinta, dan kehadiran Bapak/Ibu/Saudara sekalian di hari bahagia kami.
              Semoga kebersamaan ini membawa berkah dan bahagia selamanya.
            </p>
            <p className="text-xs text-white font-caveat mt-4">© 2026 Faozan & Dede | Undangan Digital</p>
          </div>
        </div>
      </div>

    </footer>
  );
}