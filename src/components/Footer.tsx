import { L } from "./L";
import { EMAIL, LINKEDIN } from "./site";
import s from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={s.footer}>
      <div className="wrap">
        <div className={s.top}>
          <p className={s.claim}><L cs="Nápady jsou skvělé. Ještě lepší je dostat je do života." en="Ideas are great. Getting them out into the world is even better." /></p>
          <div className={s.links}>
            <a className="u" href={`mailto:${EMAIL}`}>{EMAIL}</a>
            <a className="arrowlink" href={LINKEDIN} target="_blank" rel="noopener">
              <span className="u">LinkedIn</span>
              <span className="ar" aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
        <p className={s.big}>Matthew Grygar</p>
        <div className={s.bot}>
          <span>© {new Date().getFullYear()} Matthew Grygar, <L cs="Praha" en="Prague" /></span>
          <a className="arrowlink" href="#top"><L cs="Zpět nahoru ↑" en="Back to top ↑" /></a>
        </div>
      </div>
    </footer>
  );
}
