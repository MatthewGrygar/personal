import React from "react";
import { cn } from "@/lib/utils";

export function Card({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <div
      className={cn(
        // Matte frosted-glass card (elegant "sheen" hover – no jumpy movement)
        "glass-card relative overflow-hidden rounded-3xl transition-[box-shadow,border-color,background-color,transform] duration-300 will-change-transform hover:shadow-[0_26px_90px_rgba(18,18,18,0.12)] hover:border-[rgba(30,144,255,0.18)] hover:bg-[linear-gradient(135deg,rgba(255,255,255,0.52),rgba(255,255,255,0.22))] hover:scale-[1.005]",
        className
      )}
    >
      {children}
    </div>
  );
}
