import { useState } from "react";
import Cover from "./Components/Cover";
import Opening from "./Components/Opening";
import WeddingPage from "./Components/WeddingPage";
import AudioPlayer from "./Components/AudioPlayer";

export default function App() {
  const [open, setOpen] = useState(false);

  return !open ? (
    <Cover onOpen={() => setOpen(true)} />
  ) : (
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory">
      <AudioPlayer />
      
      <div className="snap-start">
        <Opening />
      </div>

      <div className="snap-start">
        <WeddingPage />
      </div>

    </div>
  );
}