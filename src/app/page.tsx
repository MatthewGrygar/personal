import { About } from "@/components/About";
import { Bring } from "@/components/Bring";
import { Contact } from "@/components/Contact";
import { Experience } from "@/components/Experience";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { How } from "@/components/How";
import { L } from "@/components/L";
import { LangProvider } from "@/components/Lang";
import { Projects } from "@/components/Projects";
import { Theatre } from "@/components/Theatre";

export default function Page() {
  return (
    <LangProvider>
      <a className="skip" href="#obsah"><L cs="Přeskočit na obsah" en="Skip to content" /></a>
      <Header />
      <main id="obsah">
        <Hero />
        <About />
        <Bring />
        <Projects />
        <Experience />
        <Theatre />
        <How />
        <Contact />
      </main>
      <Footer />
    </LangProvider>
  );
}
