import foto from "../assets/page2.jpg";

export default function Opening() {
  return (
    <div className="h-screen w-full relative overflow-hidden">

      {/* BACKGROUND */}
      <img
        src={foto}
        alt="couple"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* OVERLAY 20% */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* TEXT */}
      <div className="absolute top-[80px] md:top-[100px] left-1/2 -translate-x-1/2 text-center text-black">

        <h2 
          style={{ fontFamily: "Caveat, cursive" }} 
          className="text-4xl animate-fade-in-up animation-delay-100"
        >
          Our Wedding Day
        </h2>

        <p 
          style={{ fontFamily: "Caveat, cursive" }} 
          className="font-caveat text-3xl tracking-wide animate-slide-in-left animation-delay-200"
        >
          Faozan
        </p>
        
        <p 
          style={{ fontFamily: "Caveat, cursive" }} 
          className="font-caveat text-3xl animate-fade-in animation-delay-300"
        >
          &
        </p>
        
        <p 
          style={{ fontFamily: "Caveat, cursive" }} 
          className="font-caveat text-3xl animate-slide-in-right animation-delay-400"
        >
          Dede
        </p>

      </div>
    </div>
  );
}