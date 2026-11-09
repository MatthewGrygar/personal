import { BiImage } from "./BiImage";
import { L, NewTab } from "./L";
import { LINKEDIN } from "./site";
import { Stop } from "./Stop";
import s from "./Hero.module.css";

const Down = () => (
  <svg aria-hidden="true" width="13" height="13" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="square"><path d="M9 2v13M4 10l5 5 5-5" /></svg>
);
const Out = () => (
  <svg aria-hidden="true" width="13" height="13" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="square"><path d="M5 13L13 5M6 5h7v7" /></svg>
);

export function Hero() {
  return (
    <div className={s.hero} id="top">
      {/* the header switches to its full-width rule once this sentinel scrolls away */}
      <div className={s.rule} data-hero-rule aria-hidden="true" />
      <div className={`wrap ${s.main}`}>
        <div className={s.text}>
          <h1 className={s.name}>
            <span className={s.ln}>Matthew</span>
            <span className={s.ln}>Grygar</span>
          </h1>
          <div className={s.settle}>
            <div className={s.intro}>
              <p className={s.tagline}>
                <L cs={<>Rozumím technologiím i lidem<Stop /></>} en={<>I understand technology and people<Stop /></>} />
              </p>
              <p className={s.lead}>
                <L
                  cs="Nejvíc přináším tam, kde je potřeba spojit technické porozumění se schopností vést lidi i projekty. Nápady převádím do jasných plánů a plány do funkčních řešení."
                  en="I add the most where technical understanding has to meet the ability to lead people and projects. I turn ideas into clear plans, and plans into working solutions."
                />
              </p>
            </div>
            <div className={s.facts}>
              <p className={s.status}>
                <strong><L cs="Otevřený novým příležitostem" en="Open to new opportunities" /></strong>
                <span className={s.place}><L cs="Praha · Hybrid i remote" en="Prague · Hybrid or remote" /></span>
              </p>
              <p className="sr"><L cs="Kam směřuji:" en="Where I’m heading:" /></p>
              <ul className={s.dirList}>
                <li><L cs="Projektové a provozní řízení" en="Project and operations management" /></li>
                <li>Account management</li>
                <li>Business / Service ownership</li>
                <li><L cs="IT a digitální služby" en="IT and digital services" /></li>
              </ul>
            </div>
            <div className={s.ctas}>
              <div className={s.btns}>
                <a className="btn" href="#kontakt"><L cs="Ozvěte se mi" en="Get in touch" /></a>
                <a className="btn ghost" href="#zkusenosti"><L cs="Moje zkušenosti" en="My experience" /></a>
              </div>
              <div className={s.small}>
                <a href="/cv-matthew-grygar.pdf" download="Matthew-Grygar-CV.pdf">
                  <L cs="Stáhnout životopis" en="Download CV" /> <Down />
                </a>
                <a href={LINKEDIN} target="_blank" rel="noopener">
                  LinkedIn <Out /><NewTab />
                </a>
              </div>
            </div>
          </div>
        </div>
        <figure className={s.photo}>
          <div className={s.frame}>
            <BiImage
              src="/images/portrait.jpg"
              fill
              priority
              sizes="(max-width: 860px) 100vw, 466px"
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
