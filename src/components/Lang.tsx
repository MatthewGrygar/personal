"use client";
import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "cs" | "en";

const META = {
  cs: {
    title: "Matthew Grygar — projekty, provoz a technologie · Praha",
    description:
      "Matthew Grygar, Praha. Propojuji lidi, technologie a nápady do funkčních výsledků — projektové a provozní řízení, klientská spolupráce, IT a digitální služby.",
  },
  en: {
    title: "Matthew Grygar — projects, operations & technology · Prague",
    description:
      "Matthew Grygar, Prague. I connect people, technology and ideas into results that work: project and operations management, client work, IT and digital services.",
  },
};

const LangContext = createContext<{ lang: Lang; setLang: (l: Lang) => void }>({ lang: "cs", setLang: () => {} });

export function LangProvider({ children }: { children: ReactNode }) {
  // null until mounted: the boot script in layout already set <html class="en">, and we must not
  // overwrite it (or the stored choice) with the server default before reading it back.
  const [lang, setLang] = useState<Lang | null>(null);

  useEffect(() => {
    setLang(document.documentElement.classList.contains("en") ? "en" : "cs");
  }, []);

  useEffect(() => {
    if (!lang) return;
    const html = document.documentElement;
    html.classList.toggle("en", lang === "en");
    html.lang = lang;
    const applyMeta = () => {
      if (document.title !== META[lang].title) document.title = META[lang].title;
      document.querySelector('meta[name="description"]')?.setAttribute("content", META[lang].description);
    };
    applyMeta();
    try {
      localStorage.setItem("mg-lang", lang);
    } catch {}
    // Next.js streams metadata in after hydration and would reset the title to the Czech default.
    const mo = new MutationObserver(applyMeta);
    mo.observe(document.head, { childList: true, subtree: true, characterData: true });
    return () => mo.disconnect();
  }, [lang]);

  return <LangContext.Provider value={{ lang: lang ?? "cs", setLang }}>{children}</LangContext.Provider>;
}

export const useLang = () => useContext(LangContext);
