import pria from "../assets/pria.jpg";
import wanita from "../assets/wanita.jpg";
import { useInView } from "../hooks/useInView";

export default function BrideGroom() {
  const [ref, isInView] = useInView();

  return (
    <section ref={ref} className="px-6 py-12 text-center">

      <h3 className={`text-3xl font-caveat mb-4 ${isInView ? 'animate-fade-in-up animation-delay-100' : 'opacity-0'}`}>BRIDE & GROOM</h3>
      <p className={`text-sm sm:text-base text-gray-700 max-w-lg mx-auto mb-28 ${isInView ? 'animate-fade-in-up animation-delay-200' : 'opacity-0'}`}>
        Kami adalah sepasang manusia yang sedang berbahagia. Kami mengundang Bapak/Ibu/Saudara sekalian untuk menghadiri hari bahagia kami, ini adalah kami.
      </p>

      <div className="flex flex-col lg:flex-row justify-center items-center gap-8 max-w-4xl mx-auto">
        <div className={`bg-white/90 backdrop-blur-md rounded-3xl shadow-lg p-8 relative flex flex-col items-center w-full lg:w-80 ${isInView ? 'animate-slide-in-left animation-delay-300' : 'opacity-0'}`}>
          <div className={`absolute -top-20 ${isInView ? 'animate-scale-in animation-delay-400' : 'opacity-0'}`}>
            <img src={pria} alt="Pria" className="w-40 h-40 rounded-full object-cover object-top border-4 border-white shadow-lg" />
          </div>
          <div className="pt-24 w-full">
            <h4 className="font-playfair text-2xl font-bold">Ahmad Faozan Ilhami</h4>
            <p className="text-sm uppercase tracking-widest text-gray-500 mt-3">Anak pertama dari</p>
            <p className="text-sm font-semibold mt-2">Bpk. Bawon <br></br>&<br></br> Ibu Karimah</p>
          </div>
        </div>

        <div className={`bg-white/90 mt-28 backdrop-blur-md rounded-3xl shadow-lg p-8 relative flex flex-col items-center w-full lg:w-80 ${isInView ? 'animate-slide-in-right animation-delay-500' : 'opacity-0'}`}>
          <div className={`absolute -top-20 ${isInView ? 'animate-scale-in animation-delay-600' : 'opacity-0'}`}>
            <img src={wanita} alt="Wanita" className="w-40 h-40 rounded-full object-cover object-top border-4 border-white shadow-lg" />
          </div>
          <div className="pt-24 w-full">
            <h4 className="font-playfair text-2xl font-bold">Dede Rosita Agustina</h4>
            <p className="text-sm uppercase tracking-widest text-gray-500 mt-3">Anak pertama dari</p>
            <p className="text-sm font-semibold mt-2">Bpk. Sukron <br></br>&<br></br> Ibu Danisih</p>
          </div>
        </div>
      </div>

    </section>
  );
}