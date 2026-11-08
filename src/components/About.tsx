import { L } from "./L";
import s from "./About.module.css";

const FIGS = [
  { fig: { cs: "10", en: "10" }, cs: "Divadlo: komunikace, improvizace, vystupování.", en: "Theatre: communication, improvisation, presenting." },
  { fig: { cs: "130+", en: "130+" }, cs: "Grail Series: organizace a rozvoj turnajů.", en: "Grail Series: running and growing the tournaments." },
  { fig: { cs: "300+", en: "300+" }, cs: "Produkce: podpora, incidenty, koordinace.", en: "Production: support, incidents, coordination." },
  { fig: { cs: "550 000", en: "550,000" }, cs: "Očkovací centrum: rozsah provozu, který IT podpora zajišťovala.", en: "Vaccination centre: the scale of operations the IT support covered." },
];

export function About() {
  const n = (t: string) => <span className={s.n}>{t}</span>;
  return (
    <section id="o-mne" className={`sec ${s.about}`} aria-labelledby="h-o-mne">
      <div className="wrap grid">
        <p className="no" aria-hidden="true">01</p>
        <div className={s.body}>
          <p className="meta kicker"><L cs="O mně" en="About" /></p>
          <h2 id="h-o-mne">
            <L
              cs={<>Propojuji lidi, technologie a nápady do funkčních výsledků. Stojí za tím {n("10 let")} na divadle, turnajová série se {n("130+ hráči")}, provoz s {n("300+ zařízeními")} a IT podpora Národního očkovacího centra, kterým prošlo přes {n("550 000")} klientů a návštěvníků.</>}
              en={<>I connect people, technology and ideas into results that work. Behind that: {n("10 years")} in theatre, a tournament series with {n("130+ players")}, operations across {n("300+ devices")} and IT support for the National Vaccination Centre, which served more than {n("550,000")} clients and visitors.</>}
            />
          </h2>
        </div>
        <ul className={s.figs}>
          {FIGS.map((f) => (
            <li key={f.cs}>
              <span className={s.fig} aria-hidden="true">{f.fig.cs === f.fig.en ? f.fig.cs : <L {...f.fig} />}</span>
              <p><L cs={f.cs} en={f.en} /></p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
