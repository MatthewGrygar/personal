import { L, NewTab } from "./L";
import { EMAIL, LINKEDIN } from "./site";
import s from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={s.footer}>
      <div className={`wrap ${s.inner}`}>
        <span>© {new Date().getFullYear()} Matthew Grygar, <L cs="Praha" en="Prague" /> · <L cs="IČO" en="Company ID" /> 21162956</span>
        <div className={s.links}>
          <a className="u" href={`mailto:${EMAIL}`}>{EMAIL}</a>
          <a className="u" href={LINKEDIN} target="_blank" rel="noopener">LinkedIn ↗<NewTab /></a>
          <a className="u" href="#top"><L cs="Zpět nahoru ↑" en="Back to top ↑" /></a>
        </div>
      </div>
    </footer>
  );
}
