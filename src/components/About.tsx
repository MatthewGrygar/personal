import { L, type Bi } from "./L";
import s from "./About.module.css";

const FIGS: { fig: Bi; short?: string; unit: Bi; text: Bi }[] = [
  { fig: { cs: "10", en: "10" }, unit: { cs: "let", en: "years" }, text: { cs: "u divadla mě naučilo profesionální komunikaci a vystupování.", en: "in theatre taught me professional communication and presenting." } },
  { fig: { cs: "130+", en: "130+" }, unit: { cs: "hráčů", en: "players" }, text: { cs: "se aktivně účastnilo turnajů v Grail Series, které jsem organizoval.", en: "took part in the Grail Series tournaments I organised." } },
  { fig: { cs: "300+", en: "300+" }, unit: { cs: "terminálů", en: "terminals" }, text: { cs: "výdejních boxů, u kterých jsem koordinoval provoz a řešil incidenty.", en: "of parcel lockers whose operation I coordinated." } },
  {
    fig: { cs: "550 000+", en: "550,000+" },
    short: "550k+",
    unit: { cs: "lidí", en: "people" },
    text: {
      cs: "prošlo Národním očkovacím centrem v době, kdy jsem pomáhal zajišťovat jeho IT provoz.",
      en: "passed through the National Vaccination Centre while I was helping run its IT operations.",
    },
  },
];

const AREAS: { rn: string; title: Bi; body: Bi }[] = [
  {
    rn: "I.",
    title: { cs: "Lidé a komunikace", en: "People and communication" },
    body: {
      cs: "Dokážu propojovat technické týmy, byznys i klienty. Jsem zvyklý komunikovat napříč odděleními, hledat společnou řeč a předávat složité informace srozumitelně. Věřím, že dobrá komunikace není jen o předávání informací, ale především o vzájemném porozumění a spolupráci.",
      en: "I connect technical teams, the business and clients. I’m used to communicating across departments, finding common ground and explaining complex things clearly. I believe good communication isn’t just about passing information on – above all it’s about mutual understanding and working together.",
    },
  },
  {
    rn: "II.",
    title: { cs: "Projekty a provoz", en: "Projects and operations" },
    body: {
      cs: "Umím převzít vedení řešení i ve chvílích, kdy jde o čas. Mám zkušenosti s řízením kritických provozních incidentů, koordinací týmů i projektů. Dokážu určit priority, propojit správné lidi a dovést řešení do konce. Zároveň se věnuji nastavování procesů a organizaci efektivního fungování podpory.",
      en: "I can take the lead when time is critical. I’ve managed critical operational incidents and coordinated teams and projects. I set priorities, bring the right people together and see the fix through to the end. I also set up processes and organise support so that it runs efficiently.",
    },
  },
  {
    rn: "III.",
    title: { cs: "Technologie a byznys", en: "Technology and business" },
    body: {
      cs: "Technologiím rozumím z praxe, ale zajímá mě i jejich skutečný přínos. Mám zkušenosti s enterprise prostředím, IBM technologiemi i IT provozem menších firem. Dokážu se zorientovat v technických souvislostech, pochopit potřeby organizace a hledat řešení, která fungují nejen technicky, ale i v každodenním provozu.",
      en: "I understand technology from hands-on work, but I care just as much about the value it actually brings. I’ve worked in enterprise environments, with IBM technologies and in IT operations for smaller companies. I can find my way around the technical context, understand what an organisation needs and look for solutions that work not only technically but also in everyday operations.",
    },
  },
];

export function About() {
  return (
    <section id="o-mne" className={s.about} aria-labelledby="h-o-mne">
      <div className={s.band}>
        <ul className={`wrap ${s.figs}`}>
          {FIGS.map((f, i) => (
            <li key={i}>
              <span className={s.fig}>
                {f.short ? (
                  <>
                    <span className={s.long}><L {...f.fig} /></span>
                    <span className={s.short} aria-hidden="true">{f.short}</span>
                  </>
                ) : f.fig.cs === f.fig.en ? f.fig.cs : <L {...f.fig} />} <span className={s.unit}><L {...f.unit} /></span>
              </span>
              <p><L {...f.text} /></p>
            </li>
          ))}
        </ul>
      </div>
      <div className={`wrap grid sec ${s.bring}`}>
        <h2 id="h-o-mne" className={`h2 ${s.left}`}><L cs="Vidím širší souvislosti a vím, kde začít." en="I see the bigger picture and know where to start." /></h2>
        <div className={s.matrix}>
          {AREAS.map((a) => (
            <article key={a.rn}>
              <h3><L {...a.title} /></h3>
              <div>
                <p><L {...a.body} /></p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
