"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/data/projects";

export function Projects() {
  const featuredProject = projects.find((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);
  const shouldReduceMotion = useReducedMotion();

  // Animation variants
  const headingVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.25,
        ease: [0, 0, 0.58, 1] as const, // easeOut
      },
    },
  };

  const featuredCardVariants = {
    hidden: shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.32,
        ease: [0, 0, 0.58, 1] as const, // easeOut
        delay: 0.1,
      },
    },
  };

  const projectCardVariants = {
    hidden: shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 14 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.32,
        ease: [0, 0, 0.58, 1] as const, // easeOut
      },
    },
  };

  return (
    <section
      id="projects"
      className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32"
    >
      <motion.div
        className="mb-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={headingVariants}
      >
        <h2 className="mb-3 text-4xl font-bold tracking-tight text-foreground">
          Proof of Work
        </h2>
        <p className="text-lg text-muted-foreground">
          Projects that have reached real users and created measurable outcomes.
        </p>
      </motion.div>

      {/* Featured Project */}
      {featuredProject && (
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={featuredCardVariants}
        >
          <Card className="mb-12 border-accent/40 bg-card p-8 shadow-sm transition-all duration-200 ease-out hover:-translate-y-0.5 hover:border-accent/50 hover:shadow-md">
            <div className="mb-4">
              <Badge
                variant="secondary"
                className="mb-4 bg-accent/10 text-accent hover:bg-accent/20"
              >
                Featured
              </Badge>
              <h3 className="mb-1 text-2xl font-semibold text-foreground">
                {featuredProject.title}
              </h3>
              {featuredProject.hackathon && (
                <p className="mb-3 text-xs text-muted-foreground">
                  {featuredProject.hackathon}
                </p>
              )}
              <p className="mb-3 line-clamp-2 text-base leading-relaxed text-foreground/80">
                {featuredProject.description}
              </p>
              <p className="mb-5 text-sm font-medium text-accent">
                {featuredProject.impact}
              </p>
              <div className="flex flex-wrap gap-2">
                {featuredProject.tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="secondary"
                    className="bg-secondary text-xs"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </Card>
        </motion.div>
      )}

      {/* Other Projects Grid */}
      <div className="grid gap-6 md:grid-cols-2">
        {otherProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={projectCardVariants}
            transition={{
              duration: 0.32,
              ease: [0, 0, 0.58, 1] as const, // easeOut
              delay: index * 0.09, // 90ms stagger
            }}
          >
            <Card className="border bg-card p-6 shadow-sm transition-all duration-200 ease-out hover:-translate-y-0.5 hover:border-border/80 hover:shadow-md">
              <h3 className="mb-1 text-xl font-semibold text-foreground">
                {project.title}
              </h3>
              {project.hackathon && (
                <p className="mb-3 text-xs text-muted-foreground">
                  {project.hackathon}
                </p>
              )}
              <p className="mb-3 line-clamp-2 text-sm leading-relaxed text-foreground/80">
                {project.description}
              </p>
              <p className="mb-4 text-xs font-medium text-accent">
                {project.impact}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
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
      </div>
    </section>
  );
}
