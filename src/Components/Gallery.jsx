import g1 from "../assets/gl1.jpg";
import g2 from "../assets/gl2.jpg";
import g3 from "../assets/gl3.jpg";
import g4 from "../assets/gl4.jpg";
import g5 from "../assets/gl5.jpg";
import g6 from "../assets/gl6.jpg";
import { useInView } from "../hooks/useInView";

export default function Gallery() {
  const [ref, isInView] = useInView();

  return (
    <section ref={ref} className="px-6 py-12">

      <h3 className={`text-center font-playfair text-4xl uppercase tracking-wide mb-10 ${isInView ? 'animate-fade-in-up animation-delay-100' : 'opacity-0'}`}>
        Our Gallery
      </h3>

      <div className="grid grid-cols-2 gap-4 sm:gap-6">
        <div className={`rounded-2xl overflow-hidden shadow-lg ${isInView ? 'animate-scale-in animation-delay-200' : 'opacity-0'}`}>
          <img src={g1} alt="Gallery 1" className="w-full h-56 object-cover" />
        </div>
        <div className={`rounded-2xl overflow-hidden shadow-lg ${isInView ? 'animate-scale-in animation-delay-300' : 'opacity-0'}`}>
          <img src={g2} alt="Gallery 2" className="w-full h-56 object-cover" />
        </div>
        <div className={`rounded-2xl overflow-hidden shadow-lg ${isInView ? 'animate-scale-in animation-delay-400' : 'opacity-0'}`}>
          <img src={g3} alt="Gallery 3" className="w-full h-56 object-cover" />
        </div>
        <div className={`rounded-2xl overflow-hidden shadow-lg ${isInView ? 'animate-scale-in animation-delay-500' : 'opacity-0'}`}>
          <img src={g4} alt="Gallery 4" className="w-full h-56 object-cover" />
        </div>
        <div className={`rounded-2xl overflow-hidden shadow-lg ${isInView ? 'animate-scale-in animation-delay-600' : 'opacity-0'}`}>
          <img src={g5} alt="Gallery 5" className="w-full h-56 object-cover" />
        </div>
        <div className={`rounded-2xl overflow-hidden shadow-lg ${isInView ? 'animate-scale-in animation-delay-700' : 'opacity-0'}`}>
          <img src={g6} alt="Gallery 6" className="w-full h-56 object-cover" />
        </div>
      </div>

    </section>
  );
}