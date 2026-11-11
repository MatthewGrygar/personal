import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Experience } from "@/components/Experience";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { L } from "@/components/L";
import NameDock from "@/components/NameDock";
import { LangProvider } from "@/components/Lang";
import { Projects } from "@/components/Projects";

export default function Page() {
  return (
    <LangProvider>
      <a className="skip" href="#obsah"><L cs="Přeskočit na obsah" en="Skip to content" /></a>
      <Header />
      <main id="obsah">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <NameDock />
    </LangProvider>
  );
}
