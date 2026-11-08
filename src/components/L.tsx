import type { ReactNode } from "react";

export type Bi = { cs: ReactNode; en: ReactNode };

/** Renders both languages; CSS on <html class="en"> shows the active one. */
export function L({ cs, en }: Bi) {
  return (
    <>
      <span data-l="cs">{cs}</span>
      <span data-l="en">{en}</span>
    </>
  );
}

export function NewTab() {
  return <L cs={<span className="sr">(otevře se v novém okně)</span>} en={<span className="sr">(opens in a new tab)</span>} />;
}
