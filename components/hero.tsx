"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import Image from "next/image";

export function Hero() {
  return (
    <section id="home" className="mx-auto max-w-4xl px-6 pt-16 pb-32 md:py-32 lg:px-8">
      {/* Mobile-only profile picture - centered above heading */}
      <div className="mb-12 flex justify-center md:hidden">
        <div className="relative h-64 w-64 shrink-0">
          <Image
            src="/profile-about.png"
            alt="Ramika De Silva"
            fill
            className="object-cover rounded-2xl"
            priority
          />
        </div>
      </div>

      {/* Desktop: 2-column layout with text on left, profile picture on right */}
      <div className="md:flex md:gap-16 lg:gap-20 md:items-center">
        {/* Left column: text content */}
        <div className="flex-1">
          <h1 className="mb-8 text-5xl font-bold tracking-tight text-foreground whitespace-nowrap sm:text-6xl md:text-6xl lg:text-7xl">
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
              , a full‑stack language learning platform built with Next.js (App Router), React, TypeScript, PostgreSQL, and Prisma, integrating OpenAI GPT‑4, embeddings, and pgvector for personalized, story‑driven learning.
            </p>

            <p>
              I focus on building server‑rendered applications, RESTful APIs, relational data models, and production AI workflows, with attention to performance, reliability, and scalability.
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
        </div>

        {/* Right column: profile picture (desktop only) */}
        <div className="hidden md:flex md:items-center md:justify-center flex-shrink-0">
          <div className="relative h-96 w-96">
            <Image
              src="/profile-about.png"
              alt="Ramika De Silva"
              fill
              className="object-cover rounded-2xl"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
