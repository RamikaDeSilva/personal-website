import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section id="home" className="mx-auto max-w-4xl px-6 py-32 lg:px-8">
      <h1 className="mb-8 text-5xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
        Jordan Martinez
      </h1>

      <p className="mb-10 text-xl text-muted-foreground sm:text-2xl">
        Building AI tools for language learning
      </p>

      <div className="mb-12 space-y-4 text-lg leading-relaxed text-foreground/80">
        <p>
          Currently founder of{" "}
          <a
            href="https://fluencia.app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent underline decoration-accent/30 transition-colors hover:decoration-accent"
          >
            Fluencia
          </a>
          —an AI-powered platform helping people achieve conversational fluency
          in new languages.
        </p>

        <p>
          I believe in shipping fast, learning from real users, and building
          tools that create measurable impact.
        </p>
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
