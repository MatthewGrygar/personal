import { BiImage } from "./BiImage";
import { L } from "./L";
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
              <span className={s.ln}>Rozumím technologiím.</span>
              <span className={s.ln}>Umím mluvit s lidmi.</span>
              <span className={`${s.ln} ${s.it}`}>A věci dotahuju<Stop /></span>
            </span>
            <span data-l="en">
              <span className={s.ln}>I understand technology.</span>
              <span className={s.ln}>I connect with people.</span>
              <span className={`${s.ln} ${s.it}`}>And I get things done<Stop /></span>
            </span>
          </h1>
          <div className={`${s.settle} ${s.desk}`}>
            <p className={s.lead}>
              <L
                cs="Propojuji technické porozumění, kreativní myšlení a schopnost rozhýbat lidi i projekty. Pomáhám převést složité potřeby do jasného plánu, funkčního řešení a výsledku, kterému rozumí tým i zákazník."
                en="I bring technical understanding, creative thinking and the ability to move people and projects forward, turning complex needs into clear plans, practical solutions and results that make sense to both teams and customers."
              />
            </p>
            <div className={s.dir}>
              <p className="meta"><L cs="Kam směřuji:" en="Where I’m heading:" /></p>
              <p>
                <L
                  cs="Projektové a provozní řízení · Account management · Business / Service ownership · IT a digitální služby"
                  en="Project and operations management · Account management · Business / Service ownership · IT and digital services"
                />
              </p>
              <p><L cs="Praha, hybrid i remote. Otevřený novým příležitostem." en="Prague, hybrid or remote. Open to new opportunities." /></p>
            </div>
            <div className="ctas">
              <a className="btn" href="#kontakt">
                <L cs="Pojďme něco posunout" en="Let’s move something forward" />
                <span className="ar" aria-hidden="true">→</span>
              </a>
              <a className="arrowlink" href="#projekty">
                <span className="u"><L cs="Prohlédnout projekty" en="Explore my work" /></span>
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
                cs: "Černobílý portrét Matthewa Grygara v černém obleku, sedí bos na kovové židli, předkloněný se sepjatýma rukama",
                en: "Black-and-white portrait of Matthew Grygar in a black suit, sitting barefoot on a tubular steel chair, leaning forward with hands clasped",
              }}
            />
          </div>
          <figcaption className={s.settle}>
            <span className="meta" aria-hidden="true">—</span>
            <p><L cs="Nápady jsou skvělé. Ještě lepší je dostat je do života." en="Ideas are great. Getting them out into the world is even better." /></p>
          </figcaption>
        </figure>
      </div>
    </div>
  );
}
