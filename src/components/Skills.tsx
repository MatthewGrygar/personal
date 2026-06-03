"use client";
import { useLang } from "@/context/LangContext";
import { i18n, t } from "@/data/site";

const CARDS = [
  {
    num: "01",
    title: { en: <>Risk & <span className="accent">Governance</span></>, cs: <>Risk & <span className="accent">Governance</span></> },
    desc: { en: "How an organisation stays alive when something breaks at 02:00.", cs: "Jak organizace přežije, když se něco pokazí ve 02:00." },
    rows: [
      ["Major incident coordination",   4, true],
      ["Operational risk awareness",    4, false],
      ["SLA & service governance",      4, false],
      ["Operational resilience",        4, false],
      ["Stakeholder communication",     4, false],
      ["Change management",             3, false],
      ["ITIL framework",                3, false],
      ["ISO 27001 / 27005",             3, false],
      ["RBAC / access governance",      3, false],
    ] as [string, number, boolean?][],
    footer: { en: "Years applied · <b>5+</b>", cs: "Let praxe · <b>5+</b>" },
  },
  {
    num: "02",
    title: { en: <>Engineering & <span className="accent">Operations</span></>, cs: <>Inženýrství & <span className="accent">Provoz</span></> },
    desc: { en: "The hands-on layer — the bits that fail and the bits that catch them.", cs: "Praktická vrstva — části, které selhávají, a části, které to zachytí." },
    rows: [
      ["Identity & Access Management",        4, true],
      ["IBM ITIM / ISVG",                     4, false],
      ["Incident management",                 4, false],
      ["Log analysis & forensics",            3, false],
      ["Monitoring (Grafana)",                3, false],
      ["SQL / IBM DB2",                       3, false],
      ["PowerShell / scripting",              3, false],
      ["Linux (Red Hat) / Windows Server",    3, false],
      ["Network infrastructure (VLAN, VPN)",  2, false],
    ] as [string, number, boolean?][],
    footer: { en: "Stack depth · <b>Mid–Senior</b>", cs: "Hloubka znalostí · <b>Mid–Senior</b>" },
  },
  {
    num: "03",
    title: { en: <>Tools & <span className="accent">Platforms</span></>, cs: <>Nástroje & <span className="accent">Platformy</span></> },
    desc: { en: "What lives in the toolbar. Comfortable in production.", cs: "Co je v toolbaru. V produkci jako doma." },
    rows: [
      ["JIRA — workflow, SLA, automation", 4, false],
      ["IBM LDAP / WebSphere (WAS)",       3, false],
      ["Confluence / documentation",       4, false],
      ["ServiceNow",                       3, false],
      ["Grafana — dashboards & alerting",  3, false],
      ["MS SQL Server",                    3, false],
      ["Git / version control",            3, false],
      ["Markdown / docs-as-code",          4, false],
    ] as [string, number, boolean?][],
    footer: { en: "Day-to-day · <b>Production</b>", cs: "Každodenní použití · <b>Produkce</b>" },
  },
];

export function Skills() {
  const { lang } = useLang();
  const sk = i18n.skills;

  const pillars = i18n.about.pillars.map((p) => {
    const parts = (t(p, lang) as string).split("|");
    return { num: parts[0], title: parts[1], desc: parts[2] };
  });

  return (
    <section className="section" id="skills">
      <div className="section-head">
        <div className="section-idx reveal">
          <span>04 / {t(i18n.nav.skills, lang)}</span>
          <span>— {lang === "cs" ? "3 oblasti" : "3 disciplines"}</span>
        </div>
        <h2 className="section-title reveal">
          {lang === "cs"
            ? <>Co přináším <em>k práci.</em></>
            : <>What I bring <em>to the table.</em></>}
        </h2>
      </div>

      <p className="skills-intro reveal">{t(sk.subheadline, lang)}</p>

      <div className="skills-matrix">
        {CARDS.map((c) => (
          <article className="skill-card reveal" key={c.num} data-hover>
            <div className="skill-card-head">
              <div className="skill-card-num"><span>— {c.num}</span></div>
              <h4>{c.title[lang as "en" | "cs"] ?? c.title.en}</h4>
              <p className="desc">{c.desc[lang as "en" | "cs"] ?? c.desc.en}</p>
            </div>
            <div className="skill-rows">
              {c.rows.map(([name, lvl, isCore], i) => (
                <div className="skill-row" key={i}>
                  <span className="skill-row-name">{name}</span>
                  <span className="skill-row-lvl" aria-label={`level ${lvl} of 4`}>
                    {[1, 2, 3, 4].map((n) => (
                      <span
                        key={n}
                        className={n <= (lvl as number) ? (isCore && n === (lvl as number) ? "on core" : "on") : ""}
                      />
                    ))}
                  </span>
                </div>
              ))}
            </div>
            <div className="skill-card-footer">
              <span className="yrs" dangerouslySetInnerHTML={{ __html: c.footer[lang as "en" | "cs"] ?? c.footer.en }} />
              <span>{lang === "cs" ? "+ roste" : "+ growing"}</span>
            </div>
          </article>
        ))}
      </div>

      {/* What I Bring */}
      <div className="wib-grid">
        {pillars.map((item) => (
          <div className="wib-card reveal" key={item.num} data-hover>
            <div className="wib-card-top">
              <span className="wib-card-num">{item.num}</span>
              <span className="wib-card-tag">
                {["P1 / Major", "Risk", "Operations", "Stakeholders", "Governance"][parseInt(item.num) - 1]}
              </span>
            </div>
            <div className="wib-card-title">{item.title}</div>
            <p className="wib-card-desc">{item.desc}</p>
          </div>
        ))}
      </div>

      <div className="direction-strip reveal">
        <span className="label">{lang === "cs" ? "Směřuji k" : "Heading toward"}</span>
        {sk.goals.map((g) => (
          <span className="item" key={t(g, "en")}>{t(g, lang)}</span>
        ))}
      </div>
    </section>
  );
}
