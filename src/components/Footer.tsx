"use client";

import React from "react";
import { profile } from "@/data/site";
import type { Lang } from "@/data/site";

export function Footer({ lang }: { lang: Lang }) {
  return (
    <footer
      className="pl-20 py-8 px-12 flex flex-wrap items-center justify-between gap-4"
      style={{
        background: "rgba(13,27,42,0.85)",
        borderTop: "1px solid rgba(20,46,72,0.96)",
      }}
    >
      <p className="font-mono-custom text-xs uppercase tracking-widest" style={{ color: "var(--ink)" }}>
        © {new Date().getFullYear()} {profile.name}
      </p>
      <p className="font-mono-custom text-xs" style={{ color: "var(--gold)", letterSpacing: "0.08em" }}>
        IT Risk · Systems · Crisis
      </p>
    </footer>
  );
}
