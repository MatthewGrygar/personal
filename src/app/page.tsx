import { LangProvider }  from "@/context/LangContext";
import { ClientInit }    from "@/components/ClientInit";
import { Navbar }        from "@/components/Navbar";
import { Hero }          from "@/components/Hero";
import { Ticker }        from "@/components/Ticker";
import { About }         from "@/components/About";
import { Experience }    from "@/components/Experience";
import { Projects }      from "@/components/Projects";
import { Skills }        from "@/components/Skills";
import { Contact }       from "@/components/Contact";
import { Footer }        from "@/components/Footer";

export default function Page() {
  return (
    <LangProvider>
      <div className="bggrid" />
      <div className="vignette" />
      <div className="grain" />
      <ClientInit />
      <Navbar />
      <main>
        <Hero />
        <Ticker />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </LangProvider>
  );
}
