import { fontsDocumentals, fontsEnLinia } from "@/lib/laieta-data";
import { SectionHeading } from "./section-heading";
import {
  ExternalLink,
  BookOpen,
  Newspaper,
  Library,
  Globe,
  FileText,
} from "lucide-react";

export function Sources() {
  return (
    <section id="fonts" className="relative scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          index="12"
          kicker="Fonts"
          title="Fonts documentals consolidades"
          description="Atès que el PDF pujat no es va trobar a la carpeta d'upload, el contingut s'ha reconstruït i enriquit a partir d'aquestes fonts primàries, secundàries i recursos en línia."
        />

        {/* Primàries */}
        <div className="mt-12">
          <h3 className="flex items-center gap-2 font-mono text-[0.7rem] uppercase tracking-[0.25em] text-primary">
            <BookOpen className="h-4 w-4" /> Fonts primàries
          </h3>
          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {fontsDocumentals.primaries.map((f) => (
              <div
                key={f.titol}
                className="group relative overflow-hidden rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/10 to-transparent p-5"
              >
                <span className="absolute inset-x-0 top-0 h-1 bg-primary" />
                <p className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-primary/80">
                  {f.tipus}
                </p>
                <p className="mt-3 text-display text-lg leading-tight text-foreground">
                  {f.titol}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Secundàries */}
        <div className="mt-10">
          <h3 className="flex items-center gap-2 font-mono text-[0.7rem] uppercase tracking-[0.25em] text-primary">
            <Newspaper className="h-4 w-4" /> Fonts secundàries representatives
          </h3>
          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {fontsDocumentals.secondaries.map((f) => (
              <div
                key={f.titol}
                className="group flex flex-col rounded-2xl border border-border/60 bg-gradient-to-br from-secondary/40 to-transparent p-5 transition hover:border-foreground/30"
              >
                <div className="flex items-center gap-2">
                  <Library className="h-4 w-4 text-primary/80" />
                  <span className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-muted-foreground">
                    {f.tipus}
                  </span>
                </div>
                <p className="mt-3 text-display text-lg leading-tight text-foreground">
                  {f.titol}
                </p>
                {f.autor ? (
                  <p className="mt-1 text-xs text-primary/90">{f.autor}</p>
                ) : null}
                {f.detall ? (
                  <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                    {f.detall}
                  </p>
                ) : null}
              </div>
            ))}
          </div>
        </div>

        {/* En línia */}
        <div className="mt-10">
          <h3 className="flex items-center gap-2 font-mono text-[0.7rem] uppercase tracking-[0.25em] text-primary">
            <Globe className="h-4 w-4" /> Recursos en línia
          </h3>
          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {fontsEnLinia.map((f) => (
              <a
                key={f.url}
                href={f.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col rounded-2xl border border-border/60 bg-gradient-to-br from-secondary/40 to-transparent p-5 transition hover:-translate-y-1 hover:border-primary/50"
              >
                <div className="flex items-start justify-between">
                  <FileText className="h-5 w-5 text-primary" />
                  <ExternalLink className="h-4 w-4 text-muted-foreground/50 transition group-hover:text-primary" />
                </div>
                <p className="mt-4 text-display text-lg leading-tight text-foreground">
                  {f.nom}
                </p>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  {f.descripcio}
                </p>
                <p className="mt-auto pt-4 truncate font-mono text-[0.6rem] uppercase tracking-wider text-muted-foreground/70">
                  {f.url.replace(/^https?:\/\//, "")}
                </p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
