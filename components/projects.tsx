"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { projects, type Project } from "@/data/projects";
import { cn } from "@/lib/utils";

function ProjectCard({
  project,
  featured = false,
}: {
  project: Project;
  featured?: boolean;
}) {
  const hasLink = Boolean(project.link);

  return (
    <Card
      className={cn(
        "h-full bg-card shadow-sm transition-all duration-200 ease-out",
        featured
          ? "border-accent/40 p-8"
          : "border p-6",
        hasLink &&
          "cursor-pointer hover:-translate-y-0.5 hover:shadow-md will-change-transform",
        featured && hasLink && "hover:border-accent/50",
        !featured && hasLink && "hover:border-border/80"
      )}
    >
      {featured && (
        <Badge
          variant="secondary"
          className="mb-4 bg-accent/10 text-accent hover:bg-accent/20"
        >
          Featured
        </Badge>
      )}
      <h3
        className={cn(
          "mb-1 font-semibold text-foreground",
          featured ? "text-2xl" : "text-xl"
        )}
      >
        {project.title}
      </h3>
      {project.hackathon && (
        <p className="mb-3 text-xs text-muted-foreground">{project.hackathon}</p>
      )}
      <p
        className={cn(
          "mb-3 line-clamp-2 leading-relaxed text-foreground/80",
          featured ? "text-base" : "text-sm"
        )}
      >
        {project.description}
      </p>
      <p
        className={cn(
          "mb-4 font-medium text-accent",
          featured ? "mb-5 text-sm" : "text-xs"
        )}
      >
        {project.impact}
      </p>
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <Badge key={tag} variant="secondary" className="bg-secondary text-xs">
            {tag}
          </Badge>
        ))}
      </div>
    </Card>
  );
}

function ProjectCardWrapper({ project }: { project: Project }) {
  const card = (
    <ProjectCard project={project} featured={project.featured} />
  );

  if (project.link) {
    return (
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="block h-full"
      >
        {card}
      </a>
    );
  }

  return <div className="block h-full">{card}</div>;
}

export function Projects() {
  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);
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

  const featuredCardVariants = {
    hidden: shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.32,
        ease: [0, 0, 0.58, 1] as const,
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
        ease: [0, 0, 0.58, 1] as const,
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
        viewport={{ once: true, amount: 0.1 }}
        variants={headingVariants}
      >
        <h2 className="mb-3 text-4xl font-bold tracking-tight text-foreground">
          Proof of Work
        </h2>
        <p className="text-lg text-muted-foreground">
          From idea to shipped builds with measurable progress and learning
        </p>
      </motion.div>

      <div className="mb-12 grid gap-6 md:grid-cols-2">
        {featuredProjects.map((project, index) => (
          <motion.div
            key={project.id}
            className="h-full"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={featuredCardVariants}
            transition={{
              duration: 0.32,
              ease: [0, 0, 0.58, 1] as const,
              delay: shouldReduceMotion ? 0 : 0.1 + index * 0.09,
            }}
          >
            <ProjectCardWrapper project={project} />
          </motion.div>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {otherProjects.map((project, index) => (
          <motion.div
            key={project.id}
            className="h-full"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={projectCardVariants}
            transition={{
              duration: 0.32,
              ease: [0, 0, 0.58, 1] as const,
              delay: index * 0.09,
            }}
          >
            <ProjectCardWrapper project={project} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
