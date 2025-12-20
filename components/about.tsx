import Image from "next/image";

export function About() {
  return (
    <section
      id="about"
      className="mx-auto max-w-4xl px-6 py-24 lg:px-8 lg:py-32"
    >
      <h2 className="mb-12 text-4xl font-bold tracking-tight text-foreground">
        About
      </h2>

      <div className="flex flex-col items-center gap-8 lg:flex-row lg:items-start lg:gap-12">
        {/* Circular headshot image */}
        <div className="flex-shrink-0">
          <div className="relative h-48 w-48 overflow-hidden rounded-full border-2 border-border">
            <Image
              src="/headshot.png"
              alt="Ramika De Silva"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Text content */}
        <div className="space-y-6 text-lg leading-relaxed text-foreground/80">
          <p>
            I&apos;ve been writing code for 7 years—starting with side projects in
            college, then working at early-stage startups, and now building my
            own products. I&apos;ve learned that the hardest part isn&apos;t writing
            code—it&apos;s figuring out what to build and who to build it for.
          </p>

          <p>
            My approach: ship early, talk to users, iterate based on what they
            actually do (not what they say). I care about craft, but I care more
            about solving real problems. Code is a tool for creating leverage,
            not an end in itself.
          </p>

          <p>
            <span className="font-semibold text-foreground">Core belief:</span>{" "}
            Most people overthink and undership. The best way to validate an idea is to put
            something real in front of users and see if they come back. Everything else is theory.
          </p>

          <p>
            Outside of building, I&apos;m fascinated by AI&apos;s potential to personalize education at scale, spaced
            repetition systems, and how independent builders can compete with venture-backed
            companies by moving faster and staying closer to their users.
          </p>
        </div>
      </div>
    </section>
  );
}
