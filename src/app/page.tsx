import { Contact } from "@/components/Contact";
import { Experience } from "@/components/Experience";
import { Header } from "@/components/Header";
import { L } from "@/components/L";
import { LangProvider } from "@/components/Lang";
import { Motion } from "@/components/Motion";
import { About, Bring, Footer, Hero, How, Projects, Stage } from "@/components/Sections";

export default function Page() {
  return (
    <LangProvider>
      <a href="#obsah" className="skip"><L cs="Přeskočit na obsah" en="Skip to content" /></a>
      <Header />
      <main id="obsah">
        <Hero />
        <About />
        <Bring />
        <Projects />
        <Experience />
        <Stage />
        <How />
        <Contact />
      </main>
      <Footer />
      <Motion />
    </LangProvider>
  );
}
