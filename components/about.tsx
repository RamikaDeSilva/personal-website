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
            I&apos;ve been building software since I was 13, starting with small
            side projects and gradually moving toward larger, production‑level
            applications. I&apos;m currently a second‑year Business and Computer
            Science (BUCS) student at UBC, where my work sits at the intersection
            of software engineering, systems design, and applied AI.
          </p>

          <p>
            Most of my experience comes from building full‑stack web applications
            and AI‑enabled systems end to end. I work primarily with React,
            TypeScript, Next.js (App Router), PostgreSQL, and Prisma, and
            I&apos;ve built backend APIs and data pipelines using Node.js,
            FastAPI, and Java‑based systems. On the AI side, I&apos;ve integrated
            LLMs, embeddings, and vector databases to support personalization,
            semantic search, and content generation in real user‑facing products.
          </p>

          <p>
            I&apos;m especially interested in how modern web architecture,
            relational data models, and applied AI techniques come together in
            production systems. I enjoy working close to the codebase, iterating
            on real features, and improving reliability, performance, and
            scalability over time.
          </p>

          <p>
            Outside of work, I enjoy learning new languages 💬 and playing
            electric guitar 🎸
          </p>
        </div>
      </div>
    </section>
  );
}
