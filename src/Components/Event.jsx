import { useInView } from "../hooks/useInView";
import { MapPin } from "lucide-react";

export default function Event() {
  const [ref, isInView] = useInView();

  return (
    <section ref={ref} className="px-6 py-12 text-center">

      <h3 className={`text-3xl font-playfair font-bold mb-10 ${isInView ? 'animate-fade-in-up animation-delay-100' : 'opacity-0'}`}>SAVE THE DATE</h3>

      <article className={`mx-auto max-w-md rounded-t-3xl rounded-t-[150px] overflow-hidden shadow-xl bg-[#8b5e3c] text-white ${isInView ? 'animate-slide-in-left animation-delay-200' : 'opacity-0'}`}>
        <div className="p-8 pt-10">
          <div className="flex justify-center gap-2 mb-4 text-xl">
            <span>♡</span>
            <span>♡</span>
            <span>♡</span>
          </div>
          <h4 className="text-3xl font-playfair font-bold mb-2">AKAD PERNIKAHAN</h4>
          <p className="text-sm uppercase tracking-widest mb-2">MINGGU</p>
          <p className="text-2xl font-semibold mb-1">29 | MARET | 2026</p>
          <p className="text-sm mb-4">Pukul 08:00 WIB</p>
        </div>
      </article>
      <div className={`bg-black/70 text-white font-playfair py-3 text-sm font-semibold ${isInView ? 'animate-fade-in animation-delay-300' : 'opacity-0'}`}>DEDE & FAOZAN</div>

      <article className={`mx-auto max-w-md overflow-hidden shadow-xl bg-[#8b5e3c] text-white ${isInView ? 'animate-slide-in-right animation-delay-400' : 'opacity-0'}`}>
        <div className="p-8 pt-10">
          <h4 className="text-2xl font-playfair font-bold mb-2">RESEPSI PERNIKAHAN</h4>
          <p className="text-sm uppercase tracking-widest mb-2">MINGGU</p>
          <p className="text-2xl font-semibold mb-1">29 | MARET | 2026</p>
          <p className="text-sm mb-4">Pukul 10:00 WIB - Selesai</p>
          <p className="text-sm mb-6">Jl. Lobongkok RT05/01, Desa Banjarmulya, Kecamatan Pemalang</p>
          <a
            href="https://maps.app.goo.gl/1Qwf2hCfPUhA9Kvx6"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm bg-[#5f422a] hover:bg-[#523a28] py-2 px-4 rounded-md transition"
          >
            <MapPin size={16} />
            Maps lokasi acara
          </a>
        </div>
      </article>
      <div className={`bg-black/70 text-white py-3 text-sm font-semibold mx-auto max-w-md mb-0 ${isInView ? 'animate-fade-in animation-delay-500' : 'opacity-0'}`}>DEDE & FAOZAN</div>

    </section>
  );
}