import { BiImage } from "./BiImage";
import { L, NewTab } from "./L";
import { LINKEDIN } from "./site";
import { Stop } from "./Stop";
import s from "./Hero.module.css";

export function Hero() {
  return (
    <div className={s.hero} id="top">
      <div className={s.rule} data-hero-rule aria-hidden="true" />
      <div className={`wrap grid ${s.grid}`}>
        <div className={s.text}>
          <p className={`${s.meta} meta`}><span><L cs="Portfolio · Praha" en="Portfolio · Prague" /></span></p>
          <h1 className={s.headline}>
            <span data-l="cs">
              <span className={s.ln}>Rozumím technologiím</span>
              <span className={`${s.ln} ${s.it}`}>i lidem<Stop /></span>
            </span>
            <span data-l="en">
              <span className={s.ln}>I understand technology</span>
              <span className={`${s.ln} ${s.it}`}>and people<Stop /></span>
            </span>
          </h1>
          <div className={`${s.settle} ${s.desk}`}>
            <p className={s.lead}>
              <L
                cs="Nejvíc přináším tam, kde je potřeba spojit technické porozumění se schopností vést lidi i projekty. Nápady převádím do jasných plánů a plány do funkčních řešení."
                en="I add the most where technical understanding has to meet the ability to lead people and projects. I turn ideas into clear plans, and plans into working solutions."
              />
            </p>
            <p className={s.status}>
              <L cs="Otevřený novým příležitostem" en="Open to new opportunities" />
              <span className={s.statusPlace}><L cs="Praha · hybrid i remote" en="Prague · hybrid or remote" /></span>
            </p>
            <div className={s.dir}>
              <p className="meta"><L cs="Kam směřuji:" en="Where I’m heading:" /></p>
              <ul className={s.dirList}>
                <li><L cs="Projektové a provozní řízení" en="Project and operations management" /></li>
                <li>Account management</li>
                <li>Business / Service ownership</li>
                <li><L cs="IT a digitální služby" en="IT and digital services" /></li>
              </ul>
            </div>
            <div className={`ctas ${s.ctas}`}>
              <a className="btn" href="#kontakt">
                <L cs="Ozvěte se mi" en="Get in touch" />
                <span className="ar" aria-hidden="true">→</span>
              </a>
              <a className="btn ghost" href={LINKEDIN} target="_blank" rel="noopener">
                <span>LinkedIn<NewTab /></span>
                <span className="ar" aria-hidden="true">↗</span>
              </a>
              <a className="btn ghost" href="/cv-matthew-grygar.pdf" download="Matthew-Grygar-CV.pdf">
                <L cs="Stáhnout životopis" en="Download CV" />
                <span className="ar" aria-hidden="true">↓</span>
              </a>
              <a className="arrowlink" href="#zkusenosti">
                <span className="u"><L cs="Moje zkušenosti" en="My experience" /></span>
                <span className="ar" aria-hidden="true">↓</span>
              </a>
            </div>
          </div>
        </div>
        <figure className={s.photo}>
          <div className={s.frame}>
            <BiImage
              src="/images/portrait.jpg"
              fill
              priority
              sizes="(max-width: 960px) 100vw, 44vw"
              alt={{
                cs: "Černobílý portrét Matthewa Grygara v brýlích a černém obleku, sedí na kovové židli, předkloněný se sepjatýma rukama a dívá se do objektivu",
                en: "Black-and-white portrait of Matthew Grygar in glasses and a black suit, sitting on a tubular steel chair, leaning forward with hands clasped, looking into the camera",
              }}
            />
          </div>
        </figure>
      </div>
    </div>
  );
}
