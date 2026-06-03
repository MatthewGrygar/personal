"use client";
import { useState } from "react";
import { useLang } from "@/context/LangContext";
import { i18n, t } from "@/data/site";

function ShieldIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2.5 L4 5.5 V12 C4 16.8 7.4 20.5 12 21.5 C16.6 20.5 20 16.8 20 12 V5.5 L12 2.5 Z" />
      <path d="M9 12 L11 14 L15.5 9.5" />
    </svg>
  );
}

export function Experience() {
  const { lang } = useLang();
  const [openIdx, setOpenIdx] = useState(-1);
  const items = i18n.experience.items;

  return (
    <section className="section" id="experience">
      <div className="section-head">
        <div className="section-idx reveal">
          <span>02 / {t(i18n.nav.experience, lang)}</span>
          <span>— {items.length} {lang === "cs" ? "záznamů · klikni pro rozbalení" : "entries · click to expand"}</span>
        </div>
        <h2 className="section-title reveal">
          {lang === "cs"
            ? <>Ostrý provoz — <em>kde selhání</em> není možnost.</>
            : <>Live operations — <em>where failure</em> is not an option.</>}
        </h2>
      </div>

      <div className="exp-list">
        {items.map((it, i) => {
          const open = openIdx === i;
          const isCurrent = (it.period as any).en?.toLowerCase().includes("present");
          const bullets = ((it.bullets as any)[lang] ?? it.bullets.en) as string[];
          const impacts = ((it.impacts as any)[lang] ?? it.impacts.en) as string[];
          const secureText = (it as any).security && (it as any).securityText
            ? t((it as any).securityText, lang) as string
            : null;

          return (
            <article
              key={i}
              className="exp-item reveal"
              data-open={open}
              data-hover
              onClick={(e) => {
                const prevOpen = openIdx;
                const next = open ? -1 : i;
                setOpenIdx(next);
                if (next !== -1) {
                  const el = e.currentTarget as HTMLElement;
                  const delay = (prevOpen !== -1 && prevOpen < next) ? 460 : 50;
                  setTimeout(() => {
                    const navH = (document.querySelector(".nav") as HTMLElement)?.offsetHeight ?? 80;
                    const y = el.getBoundingClientRect().top + window.scrollY - navH - 8;
                    window.scrollTo({ top: y, behavior: "smooth" });
                  }, delay);
                }
              }}
              aria-expanded={open}
            >
              <div className="exp-row">
                <div className="exp-watermark" aria-hidden="true">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={it.logo} alt="" />
                </div>
                <div className="exp-period">
                  <span>{t(it.period, lang)}</span>
                  {isCurrent && <span className="chip">CURRENT</span>}
                </div>
                <div className="exp-main">
                  <h3 className="exp-co">{it.company}</h3>
                  <div className="exp-role">{t(it.role, lang)}</div>
                </div>
                <div className="exp-arrow">＋</div>
              </div>

              <div className="exp-detail">
                <div className="exp-detail-inner">
                  <div className="exp-detail-content">
                    <div className="exp-detail-left">
                      <p className="exp-desc"><em>{t(it.description, lang)}</em></p>
                      <ul className="exp-bullets">
                        {bullets.map((b, j) => <li key={j}>{b}</li>)}
                      </ul>
                    </div>
                    <div className="exp-detail-right">
                      {secureText && (
                        <div className="exp-secure">
                          <div className="shield"><ShieldIcon /></div>
                          <div className="exp-secure-title">
                            {lang === "cs" ? "— Bezpečné prostředí" : "— Secure environment"}
                          </div>
                          <div className="exp-secure-note">{secureText}</div>
                        </div>
                      )}
                      <div className="exp-techlabel">
                        {lang === "cs" ? "— Technologie" : "— Technologies"}
                      </div>
                      <div className="exp-tags">
                        {it.tags.map((tag) => <span key={tag} className="tag">{tag}</span>)}
                      </div>
                      {impacts && impacts.length > 0 && (
                        <div className="exp-impacts">
                          <div className="exp-impacts-label">
                            {lang === "cs" ? "Klíčové výstupy" : "Key Impacts"}
                          </div>
                          <ul className="exp-impacts-list">
                            {impacts.map((imp, k) => <li key={k}>{imp}</li>)}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
