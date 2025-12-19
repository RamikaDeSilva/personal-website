export interface Project {
  id: string;
  title: string;
  description: string;
  impact: string;
  tags: string[];
  featured?: boolean;
  image?: string;
}

export const projects: Project[] = [
  {
    id: "fluencia",
    title: "Fluencia",
    description:
      "AI-powered language learning platform that adapts to individual learning patterns. Uses spaced repetition and contextual immersion to help learners achieve conversational fluency faster.",
    impact:
      "12,000+ active learners across 8 languages • 89% learner retention after 3 months",
    tags: ["React", "Python", "OpenAI", "PostgreSQL", "Vercel"],
    featured: true,
    image: "/projects/fluencia.png",
  },
  {
    id: "devmerge-cli",
    title: "DevMerge CLI",
    description:
      "Open-source CLI that automates Git workflows and deployment pipelines.",
    impact: "3,200+ GitHub stars • Used by teams at Stripe and Vercel",
    tags: ["TypeScript", "Node.js", "Docker"],
    image: "/projects/devmerge.png",
  },
  {
    id: "codereview-ai",
    title: "CodeReview AI",
    description:
      "Chrome extension using GPT-4 to suggest improvements during pull request reviews.",
    impact: "Saved 200+ hours of review time for early adopters",
    tags: ["TypeScript", "OpenAI API", "Chrome Extension"],
    image: "/projects/codereview.png",
  },
  {
    id: "momentum-board",
    title: "Momentum Board",
    description: "Minimalist productivity dashboard for makers who ship daily.",
    impact: "Featured on Product Hunt • 500+ daily active users",
    tags: ["React", "Firebase", "Tailwind"],
    image: "/projects/momentum.png",
  },
];
