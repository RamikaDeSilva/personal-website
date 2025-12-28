import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="mx-auto max-w-4xl px-6 py-32 lg:px-8">
      <h1 className="mb-8 text-5xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
        Ramika De Silva
      </h1>

      <p className="mb-10 text-xl text-muted-foreground sm:text-2xl">
        Exploring the intersection of business and technology to build impactful software
      </p>

      <div className="mb-12 space-y-4 text-lg leading-relaxed text-foreground/80">
        <p>
          I&apos;m currently building{" "}
          <a
            href="https://lumela.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-accent underline decoration-accent/30 transition-colors hover:decoration-accent"
          >
            Lumela
            <ExternalLink className="h-4 w-4" />
          </a>
          , a story-driven language learning platform that turns language practice into a narrative that feels personal, familiar, and human—grounded in real experiences.
        </p>

        <p>
          I believe in shipping fast, learning from real users, and building
          tools that create measurable impact.
        </p>
      </div>

      <div className="mb-5 flex items-center gap-3">
        <span className="h-2 w-2 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.6)]"></span>
        <p className="text-sm font-medium text-muted-foreground">Vancouver, BC · UBC</p>
      </div>

      <div className="flex flex-col gap-4 sm:flex-row">
        <Button asChild size="lg" className="rounded-md">
          <Link href="#projects">View Projects</Link>
        </Button>
        <Button asChild variant="outline" size="lg" className="rounded-md">
          <Link href="#contact">Get in Touch</Link>
        </Button>
      </div>
    </section>
  );
}
