import { Navbar }     from "@/components/Navbar";
import { Hero }       from "@/components/Hero";
import { About }      from "@/components/About";
import { Experience } from "@/components/Experience";
import { Projects }   from "@/components/Projects";
import { Contact }    from "@/components/Contact";
import { Footer }     from "@/components/Footer";
import { Reveal }     from "@/components/Reveal";

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Reveal><About /></Reveal>
        <Reveal><Experience /></Reveal>
        <Reveal><Projects /></Reveal>
        <Reveal><Contact /></Reveal>
      </main>
      <Footer />
    </>
  );
}
