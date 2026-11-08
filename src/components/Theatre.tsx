import { BiImage } from "./BiImage";
import { L } from "./L";
import s from "./Theatre.module.css";

export function Theatre() {
  return (
    <section id="divadlo" className={`sec ${s.theatre}`} aria-labelledby="h-div">
      <div className={`wrap grid ${s.grid}`}>
        <figure className={s.fig}>
          <div className={s.frame}>
            <BiImage
              src="/images/reading.jpg"
              fill
              sizes="(max-width: 960px) 100vw, 50vw"
              alt={{
                cs: "Matthew čte nahlas z knihy před publikem, za ním na zdi černobílé grafiky",
                en: "Matthew reading aloud from a book in front of an audience, black-and-white prints on the wall behind him",
              }}
            />
          </div>
          <figcaption><L cs="Čtení před publikem." en="Reading to an audience." /></figcaption>
        </figure>
        <div className={s.text}>
          <h2 id="h-div">
            <L
              cs={<>Deset let na jevišti.<br /><em>Každý den užitečné i mimo něj.</em></>}
              en={<>Ten years on stage.<br /><em>Useful every day off it, too.</em></>}
            />
          </h2>
          <p>
            <L
              cs="Divadlo mě naučilo pracovat s pozorností, reagovat na nečekané situace a předat myšlenku tak, aby jí lidé rozuměli. Neberu ho jako odbočku od své profesní dráhy, ale jako jednu z věcí, které ze mě dělají lepšího komunikátora, prezentujícího a spolupracovníka."
              en="Theatre taught me to hold attention, react to the unexpected and get an idea across so people understand it. I don’t see it as a detour from my career. It’s one of the things that make me a better communicator, presenter and collaborator."
            />
          </p>
        </div>
      </div>
    </section>
  );
}
