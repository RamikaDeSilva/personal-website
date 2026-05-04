"use client";

import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export function About() {
  return (
    <section
      id="about"
      className="mx-auto max-w-4xl px-6 py-24 lg:px-8 lg:py-32"
    >
      <h2 className="mb-12 text-4xl font-bold tracking-tight text-foreground">
        About
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-12 items-start">
        {/* Text content */}
        <div className="space-y-5 text-base leading-relaxed text-foreground/80 lg:text-lg">
          <p>
            I&apos;ve been building software since I was 13, starting with small
            side projects and gradually moving toward larger, production‑level
            applications. I&apos;m currently a third‑year Business and Computer
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

        {/* Robot */}
        <div className="flex items-center justify-center lg:justify-end">
          <div className="w-full max-w-[350px] lg:max-w-[400px] opacity-90">
            <DotLottieReact
              src="/robot.lottie"
              loop
              autoplay
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
