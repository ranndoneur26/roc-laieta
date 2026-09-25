"use client";

import { useState } from "react";
import { X, Info } from "lucide-react";

export function FontDisclaimer() {
  const [open, setOpen] = useState(true);
  if (!open) return null;
  return (
    <div className="relative z-50 border-b border-amber-400/30 bg-gradient-to-r from-amber-500/10 via-amber-400/10 to-amber-500/10 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-start gap-3 px-4 py-3 sm:px-6">
        <Info className="mt-0.5 h-4 w-4 shrink-0 text-amber-300" />
        <p className="text-[0.8rem] leading-relaxed text-amber-100/90 sm:text-sm">
          <span className="font-semibold text-amber-200">Avís:</span> el fitxer
          pujat <code className="rounded bg-black/30 px-1 py-0.5 font-mono text-[0.7rem]">rock_laieta_revisat.pdf</code>{" "}
          no s&apos;ha trobat a la carpeta d&apos;upload. El contingut
          d&apos;aquesta app s&apos;ha reconstruït a partir de fonts públiques
          autoritzades (Viquipèdia, Cualia, El Punt Avui…). Torna a pujar el PDF
          perquè n&apos;aliniem el contingut exacte.
        </p>
        <button
          onClick={() => setOpen(false)}
          aria-label="Tanca l'avís"
          className="ml-auto shrink-0 rounded-md p-1 text-amber-200/70 transition hover:bg-white/10 hover:text-amber-100"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
