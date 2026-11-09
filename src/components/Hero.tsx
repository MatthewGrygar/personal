import { BiImage } from "./BiImage";
import { L, NewTab } from "./L";
import { LINKEDIN } from "./site";
import { Stop } from "./Stop";
import s from "./Hero.module.css";

export function Hero() {
  return (
    <div className={s.hero} id="top">
      {/* the header switches to its full-width rule once this sentinel scrolls away */}
      <div className={s.rule} data-hero-rule aria-hidden="true" />
      <div className="wrap">
        <div className={`grid ${s.grid}`}>
          <div className={s.text}>
            <h1 className={s.name}>
              <span className={s.ln}>Matthew</span>
              <span className={s.ln}>Grygar</span>
            </h1>
            <div className={s.settle}>
            <p className={s.tagline}>
              <L cs={<>Rozumím technologiím i lidem<Stop /></>} en={<>I understand technology and people<Stop /></>} />
            </p>
            <p className={s.lead}>
              <L
                cs="Nejvíc přináším tam, kde je potřeba spojit technické porozumění se schopností vést lidi i projekty. Nápady převádím do jasných plánů a plány do funkčních řešení."
                en="I add the most where technical understanding has to meet the ability to lead people and projects. I turn ideas into clear plans, and plans into working solutions."
              />
            </p>
            <p className={s.status}>
              <strong><L cs="Otevřený novým příležitostem" en="Open to new opportunities" /></strong>
              <span className={s.place}><L cs="Praha" en="Prague" /> · <L cs="hybrid i remote" en="hybrid or remote" /></span>
            </p>
            <div className={s.dir}>
              <p className={s.dirLabel}><L cs="Kam směřuji:" en="Where I’m heading:" /></p>
              <ul className={s.dirList}>
                <li><L cs="Projektové a provozní řízení" en="Project and operations management" /></li>
                <li>Account management</li>
                <li>Business / Service ownership</li>
                <li><L cs="IT a digitální služby" en="IT and digital services" /></li>
              </ul>
            </div>
            <div className={`ctas ${s.ctas}`}>
              <div className={s.btns}>
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
              </div>
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
                sizes="(max-width: 860px) 100vw, 40vw"
                alt={{
                  cs: "Černobílý portrét Matthewa Grygara v brýlích a černém obleku, sedí na kovové židli, předkloněný se sepjatýma rukama a dívá se do objektivu",
                  en: "Black-and-white portrait of Matthew Grygar in glasses and a black suit, sitting on a tubular steel chair, leaning forward with hands clasped, looking into the camera",
                }}
              />
            </div>
          </figure>
        </div>
      </div>
    </div>
  );
}
