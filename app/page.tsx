import HexCanvas from "@/components/HexCanvas";
import ScrollFX from "@/components/ScrollFX";
import NavRail from "@/components/sections/NavRail";
import PlayerCard from "@/components/sections/PlayerCard";
import About from "@/components/sections/About";
import Missions from "@/components/sections/Missions";
import Stats from "@/components/sections/Stats";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <div className="bg-wrap">
      <HexCanvas />
      <div className="scan-overlay" aria-hidden="true">
        <div className="scan-line" />
      </div>

      <NavRail />

      <main className="main">
        <PlayerCard />
        <About />
        <Missions />
        <Stats />
        <Contact />
        <Footer />
      </main>

      <ScrollFX />
    </div>
  );
}
