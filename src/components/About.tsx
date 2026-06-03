"use client";
import { useLang } from "@/context/LangContext";
import { i18n, t } from "@/data/site";

export function About() {
  const { lang } = useLang();
  const ab = i18n.about;

  const bodyParagraphs = (t(ab.body, lang) as string).split("\n\n");
  const directionParts = (t(ab.direction, lang) as string).split("\n");

  return (
    <section className="section" id="about">
      <div className="section-head">
        <div className="section-idx reveal">
          <span>01 / {t(i18n.nav.about, lang)}</span>
          <span>— {t(ab.pillarsTitle, lang)}</span>
        </div>
        <h2 className="section-title reveal">
          {lang === "cs"
            ? <>Stabilita <em>pod tlakem.</em></>
            : <>Stability <em>under pressure.</em></>}
        </h2>
      </div>

      <div className="about-grid">
        <div className="about-left">
          <p className="about-lead reveal-left">{bodyParagraphs[0]}</p>
          <div className="about-body reveal-left">
            {bodyParagraphs.slice(1).map((p, i) => <p key={i}>{p}</p>)}
          </div>
          <div className="about-badge reveal-left">
            <span className="pulse" />
            <span>
              <span className="accent">{t(ab.currently.label, lang)}:</span>{" "}
              {t(ab.currently.value, lang)}
            </span>
          </div>
        </div>

        <div className="about-right">
          <div className="toolbox-label reveal-right">— {t(ab.toolboxTitle, lang)}</div>
          <div className="tag-cloud reveal-right">
            {ab.toolbox.map((tool) => (
              <span key={tool} className="tag" data-hover>{tool}</span>
            ))}
          </div>
          <div className="about-direction reveal-right">
            <div className="about-direction-label">
              {lang === "cs" ? "Dlouhodobý směr" : "Long-term direction"}
            </div>
            <p>
              {directionParts.map((part, i) => (
                <span key={i}>{part}{i < directionParts.length - 1 && <br />}</span>
              ))}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
