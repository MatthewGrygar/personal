import { L, type Bi } from "./L";
import s from "./About.module.css";

const FIGS: { fig: Bi; unit: Bi; text: Bi }[] = [
  { fig: { cs: "10", en: "10" }, unit: { cs: "let", en: "years" }, text: { cs: "Divadlo: komunikace, improvizace, vystupování.", en: "Theatre: communication, improvisation, presenting." } },
  { fig: { cs: "130+", en: "130+" }, unit: { cs: "hráčů", en: "players" }, text: { cs: "Grail Series: organizace a rozvoj turnajů.", en: "Grail Series: running and growing the tournaments." } },
  { fig: { cs: "300+", en: "300+" }, unit: { cs: "zařízení", en: "devices" }, text: { cs: "Produkce: podpora, incidenty, koordinace.", en: "Production: support, incidents, coordination." } },
  {
    fig: { cs: "550 000+", en: "550,000+" },
    unit: { cs: "lidí", en: "people" },
    text: {
      cs: "Národní očkovací centrum: tolik lidí centrem prošlo. Pomáhal jsem zajišťovat jeho IT provoz.",
      en: "National Vaccination Centre: that’s how many people it served. I helped run its IT operations.",
    },
  },
];

const AREAS: { rn: string; title: Bi; body: Bi; tags: Bi }[] = [
  {
    rn: "I.",
    title: { cs: "Lidé a komunikace", en: "People and communication" },
    body: {
      cs: "Divadlo mě naučilo pracovat s pozorností, reagovat na nečekané situace a předat myšlenku tak, aby jí lidé rozuměli. Díky tomu se považuji za lepšího komunikátora, prezentujícího i spolupracovníka.",
      en: "Theatre taught me to hold attention, react to the unexpected and get an idea across so people understand it. It has made me a better communicator, presenter and collaborator.",
    },
    tags: {
      cs: "Komunikace napříč odděleními i směrem ke klientům, prezentace, profesionalita.",
      en: "Communication across departments and with clients, presenting, professionalism.",
    },
  },
  {
    rn: "II.",
    title: { cs: "Projekty a provoz", en: "Projects and operations" },
    body: {
      cs: "Umím převzít nejasné zadání, rozdělit ho na zvládnutelné části, určit priority a koordinovat práci až k předání výsledku. Mám zkušenosti s incidenty, změnami, procesy, požadavky i organizací akcí od prvního nápadu po realizaci.",
      en: "I can take on a vague brief, break it into manageable parts, set priorities and coordinate the work through to handover. I’ve worked with incidents, changes, processes and requests, and organised events from the first idea to the day itself.",
    },
    tags: { cs: "Koordinace projektů, incidenty a změny, prioritizace, procesy, organizace.", en: "Project coordination, incidents and changes, prioritisation, processes, organisation." },
  },
  {
    rn: "III.",
    title: { cs: "Technologie a byznys", en: "Technology and business" },
    body: {
      cs: "Technické zkušenosti mi pomáhají rozumět dopadům rozhodnutí a klást dobré otázky. Pracoval jsem s IAM, produkčními systémy, podporou aplikací i digitálními projekty. Díky tomu dokážu propojovat technické týmy s lidmi, kteří potřebují službu používat nebo rozvíjet.",
      en: "My technical background helps me understand the impact of decisions and ask the right questions. I’ve worked with IAM, production systems, application support and digital projects, which lets me connect technical teams with the people who need to use or develop a service.",
    },
    tags: { cs: "IT provoz, IAM / IdM, digitální služby, analýza potřeb, rizika a spolehlivost.", en: "IT operations, IAM / IdM, digital services, needs analysis, risk and reliability." },
  },
];

export function About() {
  return (
    <section id="o-mne" className={s.about} aria-labelledby="h-o-mne">
      <div className={s.band}>
        <ul className={`wrap ${s.figs}`}>
          {FIGS.map((f, i) => (
            <li key={i}>
              <span className={s.fig}>{f.fig.cs === f.fig.en ? f.fig.cs : <L {...f.fig} />}</span>
              <span className={s.unit}><L {...f.unit} /></span>
              <p><L {...f.text} /></p>
            </li>
          ))}
        </ul>
      </div>
      <div className={`wrap grid sec ${s.bring}`}>
        <h2 id="h-o-mne" className={`h2 ${s.left}`}><L cs="Umím vidět celek — a zároveň pohnout konkrétní věcí." en="I see the whole picture, and I can still move the one thing that needs moving." /></h2>
        <div className={s.matrix}>
          {AREAS.map((a) => (
            <article key={a.rn}>
              <h3><L {...a.title} /></h3>
              <div>
                <p><L {...a.body} /></p>
                <p className={s.tags}><L {...a.tags} /></p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
