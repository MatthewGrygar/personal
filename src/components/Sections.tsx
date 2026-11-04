import { BiImage } from "./BiImage";
import { L, NewTab, type Bi } from "./L";
import { EMAIL, LINKEDIN } from "./site";

/* ── Hero ─────────────────────────────────────────────────── */

const H1 = {
  cs: ["Rozumím technologiím.", "Umím mluvit s lidmi.", "A věci dotahuju."],
  en: ["I understand technology.", "I connect with people.", "And I get things done."],
};

export function Hero() {
  return (
    <div id="top" className="hero" data-hero>
      <div className="hero-in">
        <div className="hero-txt">
          <p className="hero-eye">
            <span className="hero-eye-line" data-intro="line" aria-hidden="true" />
            <span data-intro="eye"><L cs="MATTHEW GRYGAR · PRAHA" en="MATTHEW GRYGAR · PRAGUE" /></span>
          </p>
          <h1>
            {(["cs", "en"] as const).map((l) => (
              <span key={l} data-l={l}>
                {H1[l].map((line) => (
                  <span key={line} className="hero-line"><span data-intro="h">{line}</span></span>
                ))}
              </span>
            ))}
          </h1>
          <p className="hero-lead" data-intro="rest">
            <L
              cs="Propojuji technické porozumění, kreativní myšlení a schopnost rozhýbat lidi i projekty. Pomáhám převést složité potřeby do jasného plánu, funkčního řešení a výsledku, kterému rozumí tým i zákazník."
              en="I bring technical understanding, creative thinking and the ability to move people and projects forward, turning complex needs into clear plans, practical solutions and results that make sense to both teams and customers."
            />
          </p>
          <div className="hero-dir" data-intro="rest">
            <p className="hero-dir-label"><L cs="Kam směřuji" en="Where I’m heading" /></p>
            <ul>
              <li><L cs="Projektové a provozní řízení" en="Project and operations management" /></li>
              <li className="dot" aria-hidden="true">·</li>
              <li>Account management</li>
              <li className="dot" aria-hidden="true">·</li>
              <li>Business / Service ownership</li>
              <li className="dot" aria-hidden="true">·</li>
              <li><L cs="IT a digitální služby" en="IT and digital services" /></li>
            </ul>
            <p className="hero-dir-loc"><L cs="Praha, hybrid i remote. Otevřený novým příležitostem." en="Prague, hybrid or remote. Open to new opportunities." /></p>
          </div>
          <div className="hero-cta" data-intro="rest">
            <a href="#kontakt" className="btn"><L cs="Pojďme něco posunout" en="Let’s move something forward" /></a>
            <a href="#projekty"><L cs="Prohlédnout projekty" en="Explore my work" /></a>
          </div>
        </div>
        <div className="hero-pcol">
          <figure className="hero-fig" data-intro="fig" data-hero-fig>
            <BiImage
              src="/images/matthew-grygar-portrait.png"
              width={1229}
              height={1536}
              priority
              sizes="(min-width: 980px) 42vw, (min-width: 560px) 520px, 100vw"
              alt={{
                cs: "Černobílý portrét Matthewa Grygara v černém obleku, sedí bos na kovové židli, předkloněný se sepjatýma rukama",
                en: "Black-and-white portrait of Matthew Grygar in a black suit, sitting barefoot on a tubular steel chair, leaning forward with hands clasped",
              }}
            />
          </figure>
          <p className="hero-claim" data-intro="rest">
            <L cs="„Nápady jsou skvělé. Ještě lepší je dostat je do života.“" en="“Ideas are great. Getting them out into the world is even better.”" />
          </p>
        </div>
      </div>
    </div>
  );
}

/* ── About / proof numbers ────────────────────────────────── */

const PROOF: { num: Bi; label: Bi; note: Bi }[] = [
  { num: { cs: "10 let", en: "10 yrs" }, label: { cs: "divadla", en: "in theatre" }, note: { cs: "Komunikace, improvizace a jistota před publikem.", en: "Communication, improvisation and confidence in front of people." } },
  { num: { cs: "130+", en: "130+" }, label: { cs: "hráčů v Grail Series", en: "players in Grail Series" }, note: { cs: "Turnajová série, kterou jsem vybudoval a vedu.", en: "A tournament series I built and run." } },
  { num: { cs: "300+", en: "300+" }, label: { cs: "zařízení v produkci", en: "devices in production" }, note: { cs: "Aplikační podpora a závažné incidenty v OX Point.", en: "Application support and major incidents at OX Point." } },
  { num: { cs: "550 000+", en: "550,000+" }, label: { cs: "lidí obsloužených NOC", en: "people served by the NVC" }, note: { cs: "Národní očkovací centrum, IT provoz během 131 dnů.", en: "National Vaccination Centre, IT operations over 131 days." } },
];

export function About() {
  return (
    <section id="o-mne" className="sec about" aria-labelledby="h-o-mne">
      <div className="about-in">
        <p className="kicker"><L cs="O mně" en="About" /></p>
        <div className="about-row">
          <h2 id="h-o-mne" className="h2"><L cs="Propojuji lidi, technologie a nápady do funkčních výsledků." en="I connect people, technology and ideas into results that work." /></h2>
          <p><L cs="Za tím stojí deset let na divadle, vlastní komunitní projekty a práce v provozu, kde na spolehlivosti opravdu záleží." en="Behind that are ten years in theatre, community projects of my own and operations work where reliability really matters." /></p>
        </div>
        <dl className="proof">
          {PROOF.map((p, i) => (
            <div key={i}>
              <dt><L {...p.label} /></dt>
              <dd className="num">{p.num.cs === p.num.en ? p.num.cs : <L {...p.num} />}</dd>
              <dd className="note"><L {...p.note} /></dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

/* ── What I bring ─────────────────────────────────────────── */

const BRING: { n: string; title: Bi; body: Bi; tags: Bi }[] = [
  {
    n: "I.",
    title: { cs: "Lidé a komunikace", en: "People and communication" },
    body: {
      cs: "Deset let divadelní zkušenosti mi dalo jistotu při vystupování, schopnost improvizovat a cit pro to, co druhá strana potřebuje slyšet. V práci to využívám při komunikaci se zákazníky, kolegy, specialisty i vedením — zvlášť když je potřeba rychle vysvětlit situaci a najít společný postup.",
      en: "Ten years of theatre gave me confidence in front of people, the ability to improvise and a feel for what the other side needs to hear. I use it with customers, colleagues, specialists and management, especially when a situation needs explaining fast and everyone needs a shared way forward.",
    },
    tags: { cs: "Komunikace se zákazníky, prezentace, facilitace, stakeholdeři, improvizace.", en: "Customer communication, presenting, facilitation, stakeholders, improvisation." },
  },
  {
    n: "II.",
    title: { cs: "Projekty a provoz", en: "Projects and operations" },
    body: {
      cs: "Umím převzít nejasné zadání, rozdělit ho na zvládnutelné části, určit priority a koordinovat práci až k předání výsledku. Mám zkušenosti s incidenty, změnami, procesy, požadavky i organizací akcí od prvního nápadu po realizaci.",
      en: "I can take on a vague brief, break it into manageable parts, set priorities and coordinate the work through to handover. I’ve worked with incidents, changes, processes and requests, and organised events from the first idea to the day itself.",
    },
    tags: { cs: "Koordinace projektů, incidenty a změny, prioritizace, procesy, organizace.", en: "Project coordination, incidents and changes, prioritisation, processes, organisation." },
  },
  {
    n: "III.",
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
    <section id="co-prinasim" className="sec bring" aria-labelledby="h-co">
      <div className="bring-in">
        <div className="bring-side">
          <div className="bring-sticky">
            <p className="kicker"><L cs="Co přináším" en="What I bring" /></p>
            <h2 id="h-co" className="h2"><L cs="Umím vidět celek — a zároveň pohnout konkrétní věcí." en="I see the whole picture, and I can still move the one thing that needs moving." /></h2>
            <p>
              <L
                cs="Nejvíc užitečný jsem na rozhraní lidí, procesů a technologií. Dokážu pochopit technický problém, přeložit ho do srozumitelného jazyka, sladit další kroky a hlídat, aby se věci opravdu posunuly."
                en="I’m most useful where people, processes and technology meet. I can get to the bottom of a technical problem, put it into plain language, align everyone on the next steps and make sure things actually move."
              />
            </p>
          </div>
        </div>
        <div className="bring-list">
          {BRING.map((b) => (
            <article key={b.n} data-reveal="0">
              <h3><span className="roman" aria-hidden="true">{b.n}</span><span><L {...b.title} /></span></h3>
              <p className="body"><L {...b.body} /></p>
              <p className="tags"><L {...b.tags} /></p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Selected work ────────────────────────────────────────── */

type Project = { tags: Bi; title: Bi; quote: Bi; link?: { href: string; label: string }; brief: Bi; role: Bi; outcome: Bi };

const PROJECTS: Project[] = [
  {
    tags: { cs: "Komunita · organizace · partnerství", en: "Community · organisation · partnerships" },
    title: { cs: "Grail Series", en: "Grail Series" },
    quote: { cs: "Od nápadu k pravidelnému projektu, na který se lidé vracejí.", en: "From an idea to a regular event people keep coming back to." },
    link: { href: "https://grailseries.cz/", label: "grailseries.cz" },
    brief: { cs: "Vytvořit turnajovou sérii pro českou komunitu Duel Commanderu.", en: "Create a tournament series for the Czech Duel Commander community." },
    role: { cs: "Koncept a identita, komunikace, spolupráce s partnery a produkce jednotlivých akcí.", en: "Concept and identity, communication, partner relationships and producing each event." },
    outcome: { cs: "Komunita více než 130 unikátních hráčů.", en: "A community of more than 130 unique players." },
  },
  {
    tags: { cs: "Digitální produkt · data · komunita", en: "Digital product · data · community" },
    title: { cs: "MtG DC ELO Ranking System", en: "MtG DC ELO Ranking System" },
    quote: { cs: "Produkt od konceptu po provoz.", en: "A product taken from concept to production." },
    link: { href: "https://elo.grailseries.cz/cz/", label: "elo.grailseries.cz" },
    brief: { cs: "Dát hráčům způsob, jak sledovat svůj dlouhodobý vývoj.", en: "Give players a way to follow their progress over time." },
    role: { cs: "Návrh produktu, práce s daty, frontend a systém hodnocení ELO.", en: "Product design, data work, the frontend and the ELO rating system." },
    outcome: { cs: "Webová aplikace, kterou používá 430+ hráčů.", en: "A web app used by 430+ players." },
  },
  {
    tags: { cs: "Koordinace · stabilita · komunikace", en: "Coordination · stability · communication" },
    title: { cs: "Provoz a incidenty v kritických službách", en: "Operations and incidents in critical services" },
    quote: { cs: "Když je tlak největší, záleží na jasných rolích a srozumitelné komunikaci.", en: "When the pressure is highest, clear roles and plain communication matter most." },
    brief: { cs: "Obnovit služby s vysokým dopadem na uživatele — státní digitální služby i produkční zařízení.", en: "Restore high-impact services, from national digital services to devices in production." },
    role: { cs: "Koordinace řešení závažných incidentů a propojení specialistů z různých týmů.", en: "Coordinating the response to major incidents and bringing specialists from different teams together." },
    outcome: { cs: "Řízené obnovy služeb s jasným průběhem a informovanými uživateli.", en: "Managed service recoveries with a clear process and informed users." },
  },
  {
    tags: { cs: "Provoz · týmová koordinace · služba ve velkém měřítku", en: "Operations · team coordination · service at scale" },
    title: { cs: "Národní očkovací centrum", en: "National Vaccination Centre" },
    quote: { cs: "IT podpora provozu služby, kterou využily stovky tisíc lidí.", en: "IT support for a service used by hundreds of thousands of people." },
    brief: { cs: "Zajistit každodenní IT provoz centra v O2 universu během 131 dnů krizového režimu.", en: "Keep the centre’s IT running every day at O2 universum through 131 days of crisis operation." },
    role: { cs: "Infrastruktura, incidenty, databáze, testování změn a koordinace směn malého IT týmu.", en: "Infrastructure, incidents, the database, testing changes and coordinating shifts for a small IT team." },
    outcome: { cs: "Provoz centra, které obsloužilo více než 550 000 lidí.", en: "Operations for a centre that served more than 550,000 people." },
  },
  {
    tags: { cs: "Procesy · SLA · přehlednost", en: "Processes · SLA · clarity" },
    title: { cs: "JIRA a model provozní podpory", en: "JIRA and an operational support model" },
    quote: { cs: "Jasnější odpovědnosti. Měřitelný průběh. Lepší přehled.", en: "Clearer ownership. Measurable progress. A better overview." },
    brief: { cs: "Dát požadavkům i incidentům srozumitelný průběh od nahlášení po vyřešení.", en: "Give every request and incident a clear path from report to resolution." },
    role: { cs: "Návrh struktury projektu v JIRA: závažnosti, SLA parametry, workflow a eskalační cesty.", en: "Designing the JIRA project structure: severity levels, SLA parameters, workflow and escalation paths." },
    outcome: { cs: "Proces, ve kterém je vidět, kdo co řeší a v jakém stavu.", en: "A process that shows who is handling what, and where it stands." },
  },
];

export function Projects() {
  return (
    <section id="projekty" className="sec proj" aria-labelledby="h-proj">
      <div className="proj-in">
        <p className="kicker kicker--dark"><L cs="Vybrané projekty" en="Selected work" /></p>
        <h2 id="h-proj" className="h2"><L cs="Nejlépe mě vystihuje práce, která se opravdu stala." en="The work that actually happened says the most about me." /></h2>
        <p className="proj-lead">
          <L
            cs="Od produkčního provozu přes digitální nástroje až po komunitní akce. Každý projekt ukazuje jinou část toho, jak přemýšlím a pracuji."
            en="From production operations to digital tools and community events. Each project shows a different side of how I think and work."
          />
        </p>
        <ol className="proj-list">
          {PROJECTS.map((p, i) => (
            <li key={i} className="proj-item" data-reveal="0">
              <span className="proj-n" aria-hidden="true">{i + 1}</span>
              <div className="proj-head">
                <p className="proj-tags"><L {...p.tags} /></p>
                <h3>{p.title.cs === p.title.en ? p.title.cs : <L {...p.title} />}</h3>
                <p className="proj-quote"><L {...p.quote} /></p>
                {p.link && (
                  <a className="proj-link" href={p.link.href} target="_blank" rel="noopener">
                    {p.link.label} ↗<NewTab />
                  </a>
                )}
              </div>
              <div className="proj-facts">
                <div className="proj-fact"><p className="k"><L cs="Zadání" en="Brief" /></p><p className="v"><L {...p.brief} /></p></div>
                <div className="proj-fact"><p className="k"><L cs="Moje role" en="My role" /></p><p className="v"><L {...p.role} /></p></div>
                <div className="proj-fact is-outcome"><p className="k"><L cs="Výsledek" en="Outcome" /></p><p className="v"><L {...p.outcome} /></p></div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ── Theatre ──────────────────────────────────────────────── */

export function Stage() {
  return (
    <section id="divadlo" className="sec stage" aria-labelledby="h-div">
      <div className="stage-in">
        <figure className="stage-fig">
          <BiImage
            src="/images/matthew-cteni.png"
            width={1122}
            height={1402}
            sizes="(min-width: 900px) 540px, 100vw"
            alt={{
              cs: "Matthew čte nahlas z knihy před publikem, za ním na zdi černobílé grafiky",
              en: "Matthew reading aloud from a book in front of an audience, black-and-white prints on the wall behind him",
            }}
          />
          <figcaption>
            <span><L cs="Čtení před publikem." en="Reading to an audience." /></span>
            <em><L cs="10 let na jevišti" en="10 years on stage" /></em>
          </figcaption>
        </figure>
        <div className="stage-txt">
          <p className="kicker"><L cs="Mimo technický svět" en="Beyond tech" /></p>
          <h2 id="h-div" className="h2">
            <L
              cs={<>Deset let na jevišti.<br /><em>Každý den užitečné i mimo něj.</em></>}
              en={<>Ten years on stage.<br /><em>Useful every day off it, too.</em></>}
            />
          </h2>
          <p>
            <L
              cs="Divadlo mě naučilo pracovat s pozorností, reagovat na nečekané situace a předat myšlenku tak, aby jí lidé rozuměli. Neberu ho jako odbočku od své profesní dráhy, ale jako jednu z věcí, které ze mě dělají lepšího komunikátora, prezentujícího a spolupracovníka."
              en="Theatre taught me to hold attention, react to the unexpected and get an idea across so people understand it. I don’t see it as a detour from my career. It’s one of the things that make me a better communicator, presenter and collaborator."
            />
          </p>
        </div>
      </div>
    </section>
  );
}

/* ── How I work ───────────────────────────────────────────── */

const POINTS: Bi[] = [
  { cs: "Kreativně hledám možnosti, ale nápady ověřuji v praxi.", en: "I look for options creatively, but I test ideas in practice." },
  { cs: "Dokážu zůstat klidný a srozumitelný i pod tlakem.", en: "I stay calm and clear under pressure." },
  { cs: "Přirozeně propojuji lidi s různým odborným jazykem.", en: "I naturally connect people who speak different professional languages." },
  { cs: "Umím převzít odpovědnost za další krok, i když ještě není jasné celé řešení.", en: "I can own the next step even before the whole solution is clear." },
];

export function How() {
  return (
    <section id="jak-pracuji" className="sec" aria-labelledby="h-jak">
      <div className="how-in">
        <p className="kicker"><L cs="Jak pracuji" en="How I work" /></p>
        <h2 id="h-jak" className="h2"><L cs="Když je situace složitá, začnu tím, že ji zpřehledním." en="When things get complicated, I start by making them clear." /></h2>
        <div className="how-lead-row">
          <p>
            <L
              cs="Můj přirozený postup je jednoduchý: analyzovat, stabilizovat, komunikovat a vylepšit. Nejdřív zjistím, co se skutečně děje a koho se to týká. Pak pomůžu určit priority, domluvit lidi na dalším kroku a dotáhnout řešení. Nakonec hledám, co změnit, aby příště šlo všechno lépe."
              en="My natural approach is simple: analyse, stabilise, communicate, improve. First I find out what’s really going on and who it affects. Then I help set priorities, get people to agree on the next step and see the solution through. Finally I look for what to change so it goes better next time."
            />
          </p>
        </div>
        <p className="how-steps">
          <span data-reveal="0"><L cs="Analyzovat" en="Analyse" /> <span className="arr" aria-hidden="true">→</span></span>
          <span data-reveal="3"><L cs="stabilizovat" en="stabilise" /> <span className="arr" aria-hidden="true">→</span></span>
          <span data-reveal="6"><L cs="komunikovat" en="communicate" /> <span className="arr" aria-hidden="true">→</span></span>
          <span data-reveal="9" className="last"><L cs="vylepšit." en="improve." /></span>
        </p>
        <ul className="how-points">
          {POINTS.map((p, i) => <li key={i}><L {...p} /></li>)}
        </ul>
      </div>
    </section>
  );
}

/* ── Footer ───────────────────────────────────────────────── */

export function Footer() {
  return (
    <footer className="ftr">
      <div className="ftr-in">
        <div className="ftr-top">
          <p className="ftr-quote"><L cs="Nápady jsou skvělé. Ještě lepší je dostat je do života." en="Ideas are great. Getting them out into the world is even better." /></p>
          <div className="ftr-links">
            <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
            <a href={LINKEDIN} target="_blank" rel="noopener">LinkedIn ↗<NewTab /></a>
          </div>
        </div>
        <p className="ftr-name" aria-hidden="true">Matthew Grygar</p>
        <div className="ftr-bot">
          <span>© {new Date().getFullYear()} Matthew Grygar, <L cs="Praha" en="Prague" /></span>
          <a href="#top"><L cs="Zpět nahoru ↑" en="Back to top ↑" /></a>
        </div>
      </div>
    </footer>
  );
}
