"use client";
import { useLang } from "@/context/LangContext";
import { i18n, t } from "@/data/site";

export function Projects() {
  const { lang } = useLang();
  const items = i18n.projects.items;

  return (
    <section className="section" id="projects">
      <div className="section-head">
        <div className="section-idx reveal">
          <span>03 / {t(i18n.nav.projects, lang)}</span>
          <span>— {lang === "cs" ? "Vybrané projekty" : "Selected work"}</span>
        </div>
        <h2 className="section-title reveal">
          {lang === "cs"
            ? <>Vybrané projekty &amp; <em>osobní iniciativy.</em></>
            : <>Selected work &amp; <em>personal initiatives.</em></>}
        </h2>
      </div>

      <div className="projects-grid">
        {items.map((p, i) => {
          const num = String(i + 1).padStart(2, "0");
          const url = p.url;
          const displayUrl = url ? url.replace(/^https?:\/\//, "").replace(/\/$/, "") : null;

          return (
            <article className="project reveal" key={p.title} data-hover>
              <div className="proj-head">
                <span className="proj-num">→ {num}</span>
                {url && <span className="proj-arrow">↗</span>}
              </div>
              <div className="proj-tags">
                {p.tags.map((tag) => <span key={tag} className="tag">{tag}</span>)}
              </div>
              <h3 className="proj-title">{p.title}</h3>
              <p className="proj-desc">{t(p.description, lang)}</p>
              <div className="proj-impact">
                <span className="proj-impact-dot">+</span>
                <em>{t(p.highlight, lang)}</em>
              </div>
              {url && displayUrl && (
                <a
                  className="proj-link"
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {displayUrl} ↗
                </a>
              )}
            </article>
          );
        })}
      </div>
    </section>
  );
}
