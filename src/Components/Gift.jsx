import { useState } from "react";
import mandiriLogo from "../assets/mandiri.png";
import seabankLogo from "../assets/seabank.png";
import { useInView } from "../hooks/useInView";

const accounts = [
  {
    bank: "Mandiri",
    number: "1390029604869",
    owner: "Dede Rosita Agustina",
    logo: mandiriLogo,
  },
  {
    bank: "SeaBank",
    number: "901902582362",
    owner: "Ahmad Faosan Ilhami",
    logo: seabankLogo,
  },
];

const delayClasses = [
  "animation-delay-300",
  "animation-delay-400",
];

export default function Gift() {
  const [copied, setCopied] = useState("");
  const [ref, isInView] = useInView();

  const handleCopy = async (value) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(value);
      setTimeout(() => setCopied(""), 2000);
    } catch (error) {
      console.error("Copy failed", error);
      setCopied("error");
      setTimeout(() => setCopied(""), 2000);
    }
  };

  return (
    <section ref={ref} className="px-6 py-12 text-center">

      <h3 className={`text-4xl font-playfair uppercase mb-8 tracking-wide ${isInView ? 'animate-fade-in-up animation-delay-100' : 'opacity-0'}`}>Titip Hadiah</h3>

      <p className={`max-w-xl mx-auto text-sm text-gray-700 mb-8 px-2 ${isInView ? 'animate-fade-in-up animation-delay-200' : 'opacity-0'}`}>
        Doa restu Bapak/Ibu sekalian merupakan karunia yang sangat berarti bagi kami.
        Dan jika memberi merupakan ungkapan tanda kasih, Bapak/Ibu dapat memberikan kado secara cashless.
      </p>

      <div className="space-y-8 max-w-lg mx-auto">
        {accounts.map((account, index) => (
          <div key={account.number} className={`relative bg-white/90 border border-gray-200 rounded-[30px] shadow-xl px-8 py-4 text-left overflow-hidden ${isInView ? `animate-slide-in-left ${delayClasses[index]}` : 'opacity-0'}`}>
            <div className="absolute inset-0 bg-[rgba(0,0,0,0.05)]" />
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <img src={account.logo} alt={`${account.bank} logo`} className="h-10 object-contain" />
                  <p className="text-lg font-semibold">Bank {account.bank}</p>
                </div>
              </div>

              <div className="bg-white/80 rounded-xl p-4 mb-4">
                <p className="text-2xl font-bold tracking-widest">{account.number}</p>
              </div>
              <p className="text-sm text-gray-600 mb-8">a.n {account.owner}</p>

              <button
                onClick={() => handleCopy(account.number)}
                className="absolute right-4 bottom-4 bg-black/70 hover:bg-black/80 text-white text-xs uppercase px-4 py-2 rounded-lg"
              >
                Copy Code
              </button>

              {copied === account.number && (
                <div className="mt-4 text-green-600 font-semibold">Nomor rekening berhasil disalin</div>
              )}
              {copied === "error" && (
                <div className="mt-4 text-red-600 font-semibold">Gagal menyalin. Coba lagi.</div>
              )}
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}