"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { experience, technicalSkills } from "@/data/experience";
import { cn } from "@/lib/utils";

export function Experience() {
  const shouldReduceMotion = useReducedMotion();

  const headingVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.25,
        ease: [0, 0, 0.58, 1] as const,
      },
    },
  };

  const listContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.09,
        delayChildren: shouldReduceMotion ? 0 : 0.05,
      },
    },
  };

  const cardVariants = {
    hidden: shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 14 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.32,
        ease: [0, 0, 0.58, 1] as const,
      },
    },
  };

  const skillsBlockVariants = {
    hidden: shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.28,
        ease: [0, 0, 0.58, 1] as const,
        delay: shouldReduceMotion ? 0 : 0.12,
      },
    },
  };

  return (
    <section
      id="experience"
      className="scroll-mt-24 mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32"
    >
      <motion.div
        className="mb-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={headingVariants}
      >
        <h2 className="mb-3 text-4xl font-bold tracking-tight text-foreground">
          Experience
        </h2>
        <p className="text-lg text-muted-foreground">
          Roles and internships across software engineering, applied AI, and
          go-to-market systems.
        </p>
      </motion.div>

      <motion.div
        className="space-y-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={listContainerVariants}
      >
        {experience.map((item) => (
          <motion.div key={item.id} variants={cardVariants}>
            <Card className="border bg-card p-6 shadow-sm md:p-8">
              <div className="mb-4 flex items-start gap-4">
                {item.logo && (
                  <div
                    className={cn(
                      "flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-md border",
                      item.logoFit === "cover"
                        ? "bg-[#2C2544]"
                        : "bg-white p-1.5"
                    )}
                  >
                    <Image
                      src={item.logo}
                      alt={`${item.company} logo`}
                      width={48}
                      height={48}
                      className={cn(
                        "h-full w-full",
                        item.logoFit === "cover"
                          ? "object-cover"
                          : "object-contain"
                      )}
                    />
                  </div>
                )}
                <div className="min-w-0 flex-1">
                  <h3 className="text-xl font-semibold tracking-tight text-foreground md:text-2xl">
                    {item.company}
                  </h3>
                  <p className="mt-1 text-lg font-medium text-foreground">
                    {item.title}
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {item.dateRange} · {item.location}
                  </p>
                  {item.tagline && (
                    <p className="mt-2 text-sm text-muted-foreground">
                      {item.tagline}
                    </p>
                  )}
                </div>
              </div>

              <ul className="mb-6 list-disc space-y-2 pl-5 text-base leading-relaxed text-foreground/80">
                {item.bullets.map((bullet, index) => (
                  <li key={`${item.id}-${index}`}>{bullet}</li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {item.skillTags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="secondary"
                    className="bg-secondary text-xs"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className="mt-14"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={skillsBlockVariants}
      >
        <h3 className="mb-6 text-2xl font-semibold tracking-tight text-foreground">
          Technical skills
        </h3>
        <div className="space-y-6">
          {technicalSkills.map((group) => (
            <div key={group.category}>
              <p className="mb-2 text-sm font-medium text-muted-foreground">
                {group.category}
              </p>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <Badge
                    key={skill}
                    variant="outline"
                    className="text-xs font-normal text-foreground/80"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
