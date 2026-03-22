import bg from "../assets/background.png";
import pria from "../assets/pria.jpg";
import wanita from "../assets/wanita.jpg";

import HeroText from "./HeroText";
import BrideGroom from "./BrideGroom";
import Event from "./Event";
import Gallery from "./Gallery";
import Gift from "./Gift";
import RSVP from "./RSVP";
import Footer from "./Footer";

export default function WeddingPage() {
  return (
    <div className="relative w-full min-h-screen text-[#3b2f2f]">

      {/* BACKGROUND GLOBAL */}
      <img
        src={bg}
        alt="background"
        className="fixed inset-0 w-full h-full object-cover -z-10"
      />

      {/* OVERLAY GLOBAL */}
      <div className="fixed inset-0 bg-white/80 -z-10"></div>

      {/* CONTENT */}
      <div className="relative z-10">
        <HeroText />
        <BrideGroom />
        <Event />
        <Gallery />
        <Gift />
        <RSVP />
        <Footer />
      </div>

    </div>
  );
}