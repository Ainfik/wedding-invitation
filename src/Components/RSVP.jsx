import { useState } from "react";
import { useInView } from "../hooks/useInView";

export default function RSVP() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [entries, setEntries] = useState([]);
  const [ref, isInView] = useInView();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!name.trim() || !message.trim()) return;

    setEntries((prev) => [{ name: name.trim(), message: message.trim(), id: Date.now() }, ...prev]);
    setName("");
    setMessage("");
  };

  return (
    <section ref={ref} className="px-6 py-12">
      <div className="mx-auto max-w-lg">
        <h3 className={`text-center font-playfair text-4xl uppercase mb-10 ${isInView ? 'animate-fade-in-up animation-delay-100' : 'opacity-0'}`}>Ucapan</h3>

        <div className={`bg-[#8b5e3c]/80 backdrop-blur-sm border border-[#8b5e3c] rounded-3xl p-6 mb-6 ${isInView ? 'animate-slide-in-left animation-delay-200' : 'opacity-0'}`}>
          <label className="block text-white mb-2 text-sm">Nama</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            className="w-full mb-5 p-3 rounded-xl shadow-inner border border-white/30"
            placeholder="Masukkan nama"
          />

          <label className="block text-white mb-2 text-sm">Ucapan</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full h-36 p-3 rounded-xl shadow-inner border border-white/30 resize-none"
            placeholder="Tulis ucapan Anda..."
          />

          <button
            onClick={handleSubmit}
            className="mt-6 w-full bg-black/70 text-white py-3 rounded-xl shadow-lg hover:opacity-90 transition"
          >
            Kirim
          </button>
        </div>

        <div className={`bg-white/85 border border-gray-200 rounded-3xl p-4 max-h-[380px] overflow-y-auto ${isInView ? 'animate-slide-in-right animation-delay-300' : 'opacity-0'}`}>
          <h4 className="text-center font-playfair text-2xl mb-4 text-[#8b5e3c]">Ucapan Tamu</h4>
          {entries.length === 0 ? (
            <p className="text-center text-gray-500">Belum ada ucapan. Ayo isi form di atas!</p>
          ) : (
            <div className="space-y-3">
              {entries.map((entry) => (
                <div key={entry.id} className={`bg-[#f9f8f6] rounded-xl p-3 shadow-sm ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}>
                  <p className="font-semibold text-[#8b5e3c]">{entry.name}</p>
                  <p className="text-sm text-gray-700 mt-1">{entry.message}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}