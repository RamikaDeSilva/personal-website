import { Mail, Github, Linkedin, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer
      id="contact"
      className="border-t bg-background/50 px-6 py-24 lg:px-8"
    >
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="mb-6 text-4xl font-bold tracking-tight text-foreground">
          Let&apos;s Connect
        </h2>

        <p className="mx-auto mb-12 max-w-2xl text-lg leading-relaxed text-foreground/80">
          I&apos;m always open to thoughtful conversations about AI, education
          technology, early-stage startups, or interesting problems worth
          solving. If you&apos;re building something real, let&apos;s talk.
        </p>

        <div className="mb-12 flex justify-center gap-6">
          <a
            href="mailto:ramikadesilva0@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/60 transition-colors hover:text-foreground"
            aria-label="Email"
          >
            <Mail className="h-6 w-6" />
          </a>
          <a
            href="https://github.com/RamikaDeSilva"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/60 transition-colors hover:text-foreground"
            aria-label="GitHub"
          >
            <Github className="h-6 w-6" />
          </a>
          <a
            href="https://linkedin.com/in/ramikadesilva"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/60 transition-colors hover:text-foreground"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-6 w-6" />
          </a>
          <a
            href="https://x.com/RamikaDeSilva_"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/60 transition-colors hover:text-foreground"
            aria-label="X"
          >
            <Twitter className="h-6 w-6" />
          </a>
        </div>

        <p className="text-sm text-muted-foreground">
          © 2024 Ramika De Silva. Built with intention, shipped with speed.
        </p>
      </div>
    </footer>
  );
}
