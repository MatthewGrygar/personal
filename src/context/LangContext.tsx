"use client";
import { createContext, useContext, useState, useEffect, type ReactNode } from "react";
import type { Lang } from "@/data/site";

const LangContext = createContext<{ lang: Lang; setLang: (l: Lang) => void }>({
  lang: "en",
  setLang: () => {},
});

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");
  useEffect(() => {
    const b = navigator.language.toLowerCase();
    if (b.startsWith("cs") || b.startsWith("sk")) setLang("cs");
  }, []);
  return <LangContext.Provider value={{ lang, setLang }}>{children}</LangContext.Provider>;
}

export function useLang() {
  return useContext(LangContext);
}
