"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fusio } from "@/lib/laieta-data";
import { SectionHeading } from "./section-heading";
import { cn } from "@/lib/utils";

export function FusionDiagram() {
  const [activeId, setActiveId] = useState(fusio[0].id);
  const active = fusio.find((f) => f.id === activeId)!;

  const radius = 42; // % of container for node placement

  return (
    <section id="fusio" className="relative scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          index="03"
          kicker="Fusió"
          title="De què està fet el so laietà?"
          description="No fou un estil, sinó una fusió. Toca cada ingredient per veure com s'encreuaven les tradicions que van fer possible l'Ona laietana."
        />

        <div className="mt-12 grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          {/* diagram */}
          <div className="relative mx-auto aspect-square w-full max-w-[560px]">
            {/* concentric guide rings */}
            <div className="vinyl-grooves absolute inset-0 rounded-full border border-border/40 bg-secondary/20" />
            <div className="absolute inset-[12%] rounded-full border border-border/30" />
            <div className="absolute inset-[28%] rounded-full border border-border/20" />

            {/* center node */}
            <div className="absolute left-1/2 top-1/2 z-20 flex h-[26%] w-[26%] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-primary/40 bg-background text-center shadow-[0_0_60px_-15px] shadow-primary/50">
              <div className="px-2">
                <p className="text-display text-xl leading-none text-primary glow-amber">
                  ROCK
                </p>
                <p className="text-display text-xl leading-none text-primary glow-amber">
                  LAIETA
                </p>
                <p className="mt-1 font-mono text-[0.5rem] uppercase tracking-[0.2em] text-muted-foreground">
                  Ona laietana
                </p>
              </div>
            </div>

            {/* ingredient nodes */}
            {fusio.map((f, i) => {
              const angle = (i / fusio.length) * Math.PI * 2 - Math.PI / 2;
              const x = 50 + Math.cos(angle) * radius;
              const y = 50 + Math.sin(angle) * radius;
              const isActive = f.id === activeId;
              return (
                <button
                  key={f.id}
                  onClick={() => setActiveId(f.id)}
                  style={{ left: `${x}%`, top: `${y}%`, color: f.color }}
                  className={cn(
                    "group absolute z-10 flex h-[22%] w-[22%] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border bg-background/90 p-1 text-center backdrop-blur transition-all",
                    isActive
                      ? "scale-110 border-current shadow-[0_0_40px_-8px] "
                      : "border-border/60 hover:scale-105 hover:border-current",
                  )}
                  aria-pressed={isActive}
                >
                  <span
                    className="absolute inset-0 rounded-full opacity-10 transition group-hover:opacity-25"
                    style={{ background: f.color }}
                  />
                  <span className="relative font-mono text-[0.6rem] font-semibold uppercase leading-tight tracking-tight text-foreground">
                    {f.nom}
                  </span>
                </button>
              );
            })}

            {/* connector lines (svg overlay) */}
            <svg
              className="absolute inset-0 h-full w-full"
              viewBox="0 0 100 100"
              fill="none"
              aria-hidden
            >
              {fusio.map((f, i) => {
                const angle = (i / fusio.length) * Math.PI * 2 - Math.PI / 2;
                const x = 50 + Math.cos(angle) * radius;
                const y = 50 + Math.sin(angle) * radius;
                return (
                  <line
                    key={f.id}
                    x1="50"
                    y1="50"
                    x2={x}
                    y2={y}
                    stroke={activeId === f.id ? f.color : "currentColor"}
                    strokeOpacity={activeId === f.id ? 0.6 : 0.12}
                    strokeWidth={activeId === f.id ? 0.6 : 0.4}
                    className="text-primary"
                  />
                );
              })}
            </svg>
          </div>

          {/* detail panel */}
          <div className="relative min-h-[280px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3 }}
                className="rounded-2xl border border-border/60 bg-gradient-to-br from-secondary/50 to-transparent p-6 sm:p-8"
                style={{ boxShadow: `inset 0 0 0 1px ${active.color}22` }}
              >
                <span
                  className="inline-flex items-center gap-2 rounded-full px-3 py-1 font-mono text-[0.65rem] uppercase tracking-[0.2em]"
                  style={{ background: `${active.color}22`, color: active.color }}
                >
                  Ingredient
                </span>
                <h3 className="mt-4 text-display text-3xl text-foreground sm:text-4xl">
                  {active.nom}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {active.descripcio}
                </p>
                <div className="mt-6">
                  <p className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground">
                    Referents
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {active.referents.map((r) => (
                      <span
                        key={r}
                        className="rounded-full border border-border/60 bg-background/60 px-3 py-1 text-xs text-foreground/80"
                      >
                        {r}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* quick selector chips for mobile/touch */}
            <div className="mt-5 flex flex-wrap gap-2">
              {fusio.map((f) => (
                <button
                  key={f.id}
                  onClick={() => setActiveId(f.id)}
                  className={cn(
                    "rounded-full border px-3 py-1 text-[0.7rem] font-medium transition",
                    activeId === f.id
                      ? "border-transparent text-background"
                      : "border-border/60 text-muted-foreground hover:text-foreground",
                  )}
                  style={
                    activeId === f.id
                      ? { background: f.color }
                      : undefined
                  }
                >
                  {f.nom}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
