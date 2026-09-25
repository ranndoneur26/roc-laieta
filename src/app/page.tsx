import { SiteNav } from "@/components/laieta/site-nav";
import { Hero } from "@/components/laieta/hero";
import { Manifest } from "@/components/laieta/manifest";
import { FusionDiagram } from "@/components/laieta/fusion-diagram";
import { Zeleste } from "@/components/laieta/zeleste";
import { Timeline } from "@/components/laieta/timeline";
import { BandExplorer } from "@/components/laieta/band-explorer";
import { PersonesIndispensables } from "@/components/laieta/persones-indispensables";
import { CartografiaMoviment } from "@/components/laieta/cartografia-moviment";
import { ObresClau } from "@/components/laieta/obres-clau";
import { Tracklist } from "@/components/laieta/tracklist";
import { Legacy } from "@/components/laieta/legacy";
import { Sources } from "@/components/laieta/sources";
import { SiteFooter } from "@/components/laieta/site-footer";

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col">
      <SiteNav />
      <main className="flex-1">
        <Hero />
        <Manifest />
        <FusionDiagram />
        <Zeleste />
        <Timeline />
        <BandExplorer />
        <PersonesIndispensables />
        <CartografiaMoviment />
        <ObresClau />
        <Tracklist />
        <Legacy />
        <Sources />
      </main>
      <SiteFooter />
    </div>
  );
}
