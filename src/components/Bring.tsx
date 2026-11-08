import { L, type Bi } from "./L";
import s from "./Bring.module.css";

const AREAS: { rn: string; title: Bi; body: Bi; tags: Bi }[] = [
  {
    rn: "I.",
    title: { cs: "Lidé a komunikace", en: "People and communication" },
    body: {
      cs: "Deset let divadelní zkušenosti mi dalo jistotu při vystupování, schopnost improvizovat a cit pro to, co druhá strana potřebuje slyšet. V práci to využívám při komunikaci se zákazníky, kolegy, specialisty i vedením — zvlášť když je potřeba rychle vysvětlit situaci a najít společný postup.",
      en: "Ten years of theatre gave me confidence in front of people, the ability to improvise and a feel for what the other side needs to hear. I use it with customers, colleagues, specialists and management, especially when a situation needs explaining fast and everyone needs a shared way forward.",
    },
    tags: { cs: "Komunikace se zákazníky, prezentace, facilitace, stakeholdeři, improvizace.", en: "Customer communication, presenting, facilitation, stakeholders, improvisation." },
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

export function Bring() {
  return (
    <section id="co-prinasim" className={`sec ${s.bring}`} aria-labelledby="h-co">
      <div className="wrap grid">
        <div className={s.left}>
          <p className="no" aria-hidden="true">02</p>
          <p className="meta kicker"><L cs="Co přináším" en="What I bring" /></p>
          <h2 id="h-co" className="h2"><L cs="Umím vidět celek — a zároveň pohnout konkrétní věcí." en="I see the whole picture, and I can still move the one thing that needs moving." /></h2>
          <p className={s.leftLead}>
            <L
              cs="Nejvíc užitečný jsem na rozhraní lidí, procesů a technologií. Dokážu pochopit technický problém, přeložit ho do srozumitelného jazyka, sladit další kroky a hlídat, aby se věci opravdu posunuly."
              en="I’m most useful where people, processes and technology meet. I can get to the bottom of a technical problem, put it into plain language, align everyone on the next steps and make sure things actually move."
            />
          </p>
        </div>
        <div className={s.matrix}>
          {AREAS.map((a) => (
            <article key={a.rn}>
              <span className={s.rn} aria-hidden="true">{a.rn}</span>
              <div>
                <h3><L {...a.title} /></h3>
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
