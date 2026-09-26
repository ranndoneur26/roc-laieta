"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { recopilatori } from "@/lib/laieta-data";
import { SectionHeading } from "./section-heading";
import { Disc3, ListMusic, Clock, Play, Pause } from "lucide-react";
import { cn } from "@/lib/utils";

export function Tracklist() {
  const [active, setActive] = useState<number | null>(1);
  const [playing, setPlaying] = useState(false);
  const track = recopilatori.tracks.find((t) => t.pos === active);

  return (
    <section id="recopilatori" className="relative scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          index="10"
          kicker="Recopilatori"
          title="Música Laietana. Zeleste"
          description={recopilatori.descripcio}
        />

        {/* meta row */}
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1.5 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-primary">
            <Disc3 className="h-3.5 w-3.5" /> {recopilatori.segell} · {recopilatori.any}
          </span>
          <span className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-secondary/40 px-3 py-1.5 font-mono text-[0.65rem] uppercase tracking-[0.15em] text-muted-foreground">
            <ListMusic className="h-3.5 w-3.5" /> {recopilatori.cancons} cançons
          </span>
          <span className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-secondary/40 px-3 py-1.5 font-mono text-[0.65rem] uppercase tracking-[0.15em] text-muted-foreground">
            <Clock className="h-3.5 w-3.5" /> {recopilatori.durada}
          </span>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          {/* vinyl + now playing */}
          <div className="flex flex-col items-center justify-center gap-6 rounded-2xl border border-border/60 bg-gradient-to-br from-secondary/40 to-transparent p-8">
            <div className="relative aspect-square w-[240px]">
              <div
                className={cn(
                  "vinyl-grooves relative h-full w-full rounded-full border border-primary/20 bg-secondary/60",
                  playing && "animate-spin-vinyl",
                )}
              >
                <div className="absolute left-1/2 top-1/2 flex h-[42%] w-[42%] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border-4 border-background bg-primary text-center">
                  <p className="text-display text-[0.7rem] leading-none text-primary-foreground">
                    MÚSICA
                  </p>
                  <p className="text-display text-[0.7rem] leading-none text-primary-foreground">
                    LAIETANA
                  </p>
                  <p className="mt-0.5 font-mono text-[0.45rem] uppercase tracking-[0.15em] text-primary-foreground/80">
                    Zeleste
                  </p>
                </div>
              </div>
            </div>

            {/* now playing */}
            <div className="w-full min-h-[96px] rounded-xl border border-border/60 bg-background/60 p-4">
              <AnimatePresence mode="wait">
                {track ? (
                  <motion.div
                    key={track.pos}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    className="flex items-center gap-3"
                  >
                    <button
                      onClick={() => setPlaying((p) => !p)}
                      aria-label={playing ? "Pausa" : "Reproduueix"}
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground transition hover:bg-primary/90"
                    >
                      {playing ? (
                        <Pause className="h-5 w-5" />
                      ) : (
                        <Play className="ml-0.5 h-5 w-5" />
                      )}
                    </button>
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-display text-lg text-foreground">
                        {track.titol}
                      </p>
                      <p className="truncate text-xs text-muted-foreground">
                        {track.artista}
                      </p>
                    </div>
                    {/* equalizer */}
                    {playing ? (
                      <div className="flex h-8 items-end gap-0.5">
                        {[0, 1, 2, 3, 4].map((b) => (
                          <span
                            key={b}
                            className="w-1 origin-bottom rounded-full bg-primary"
                            style={{
                              height: "100%",
                              animation: `equalizer 0.8s ease-in-out ${b * 0.12}s infinite`,
                            }}
                          />
                        ))}
                      </div>
                    ) : (
                      <span className="font-mono text-[0.6rem] uppercase tracking-wider text-muted-foreground">
                        Pista {String(track.pos).padStart(2, "0")}
                      </span>
                    )}
                  </motion.div>
                ) : (
                  <p className="py-6 text-center text-xs text-muted-foreground">
                    Selecciona una pista de la llista.
                  </p>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* track list */}
          <div className="rounded-2xl border border-border/60 bg-secondary/20">
            <div className="flex items-center justify-between border-b border-border/60 px-5 py-3">
              <p className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground">
                Pista · Títol · Artista
              </p>
              <p className="font-mono text-[0.6rem] uppercase tracking-wider text-muted-foreground">
                {recopilatori.tracks.length} de {recopilatori.cancons}
              </p>
            </div>
            <ol className="max-h-[460px] divide-y divide-border/40 overflow-y-auto scroll-warm">
              {recopilatori.tracks.map((t) => {
                const isActive = active === t.pos;
                return (
                  <li key={t.pos}>
                    <button
                      onClick={() => {
                        setActive(t.pos);
                        setPlaying(true);
                      }}
                      className={cn(
                        "group flex w-full items-center gap-3 px-4 py-3 text-left transition sm:px-5",
                        isActive
                          ? "bg-primary/10"
                          : "hover:bg-secondary/50",
                      )}
                    >
                      <span
                        className={cn(
                          "flex h-7 w-7 shrink-0 items-center justify-center rounded-full font-mono text-xs",
                          isActive
                            ? "bg-primary text-primary-foreground"
                            : "bg-secondary text-muted-foreground group-hover:text-foreground",
                        )}
                      >
                        {isActive && playing ? (
                          <span className="flex h-3 items-end gap-0.5">
                            <span className="w-0.5 animate-pulse-soft bg-primary-foreground" style={{ height: "60%" }} />
                            <span className="w-0.5 animate-pulse-soft bg-primary-foreground" style={{ height: "100%", animationDelay: "0.2s" }} />
                            <span className="w-0.5 animate-pulse-soft bg-primary-foreground" style={{ height: "40%", animationDelay: "0.4s" }} />
                          </span>
                        ) : (
                          String(t.pos).padStart(2, "0")
                        )}
                      </span>
                      <div className="min-w-0 flex-1">
                        <p
                          className={cn(
                            "truncate text-sm font-medium",
                            isActive ? "text-primary" : "text-foreground",
                          )}
                        >
                          {t.titol}
                        </p>
                        <p className="truncate text-xs text-muted-foreground">
                          {t.artista}
                        </p>
                      </div>
                      <span className="shrink-0 font-mono text-[0.65rem] text-muted-foreground">
                        {t.durada}
                      </span>
                      {isActive ? (
                        <Disc3
                          className={cn(
                            "h-4 w-4 shrink-0 text-primary",
                            playing && "animate-spin-vinyl",
                          )}
                        />
                      ) : (
                        <Play className="h-3.5 w-3.5 shrink-0 text-muted-foreground/0 transition group-hover:text-muted-foreground" />
                      )}
                    </button>
                  </li>
                );
              })}
            </ol>
            <p className="border-t border-border/60 px-5 py-3 text-[0.7rem] text-muted-foreground">
              Llistat complet de les {recopilatori.cancons} cançons (2 discs).
              Demostració interactiva sense àudio real.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
