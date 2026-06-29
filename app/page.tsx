import GameProvider from "./components/game/GameProvider";
import Hud from "./components/game/Hud";
import Confetti from "./components/game/Confetti";
import CustomCursor from "./components/fx/CustomCursor";
import Preloader from "./components/fx/Preloader";
import Navbar from "./components/ui/Navbar";
import BackToTop from "./components/ui/BackToTop";
import Hero from "./components/sections/Hero";
import TreeExperience from "./components/sections/TreeExperience";
import About from "./components/sections/About";
import SkillTree from "./components/sections/SkillTree";
import MissionLog from "./components/sections/MissionLog";
import Projects from "./components/sections/Projects";
import Community from "./components/sections/Community";
import Dashboard from "./components/sections/Dashboard";
import CareerStats from "./components/sections/CareerStats";
import Services from "./components/sections/Services";
import Premium from "./components/sections/Premium";
import Studio from "./components/sections/Studio";
import Ventures from "./components/sections/Ventures";
import Testimonials from "./components/sections/Testimonials";
import Media from "./components/sections/Media";
import Audiobooks from "./components/sections/Audiobooks";
import Contact from "./components/sections/Contact";
import Footer from "./components/sections/Footer";

export default function Home() {
  return (
    <GameProvider>
      <Preloader />
      <CustomCursor />
      <Confetti />
      <Navbar />
      <Hud />

      <main className="mx-auto w-full max-w-6xl px-6">
        <Hero />
        <TreeExperience />
        <About />
        <SkillTree />
        <MissionLog />
        <Projects />
        <Dashboard />
        <CareerStats />
        <Ventures />
        <Community />
        <Testimonials />
        <Media />
        <Audiobooks />
        <Services />
        <Premium />
        <Studio />
        <Contact />
      </main>

      <Footer />
      <BackToTop />
    </GameProvider>
  );
}
