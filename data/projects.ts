export interface Project {
  id: string;
  title: string;
  description: string;
  impact: string;
  tags: string[];
  featured?: boolean;
  image?: string;
  hackathon?: string;
  link?: string;
}

export const projects: Project[] = [
  {
    id: "my500",
    title: "my500",
    description:
      "AI language platform with Next.js App Router, React Native (Expo), and Postgres, serving LLM-generated story arcs and practice kits.",
    impact:
      "Monorepo with Zod API contracts, RevenueCat entitlements, and Redis rate-limiting on LLM endpoints",
    tags: ["Next.js", "React Native", "PostgreSQL", "Zod"],
    featured: true,
    image: "/projects/lumela.png",
    link: "https://lumela.app",
  },
  {
    id: "aegis",
    title: "Aegis Agent",
    description:
      "Autonomous red-team AI agent that analyzes GitHub pull requests for database vulnerabilities, then posts remediation summaries on the PR.",
    impact:
      "LangGraph state machine driving sqlmap and nuclei scanners via async tool pipelines",
    tags: ["Python", "LangGraph", "OpenAI", "sqlmap", "nuclei"],
    featured: true,
    hackathon: "Built at Cursor Hackathon '26",
  },
  {
    id: "trakl",
    title: "Trakl",
    description:
      "AI study planner that generates personalized schedules with adaptive roadmaps and progress tracking.",
    impact: "Improved study consistency by ~30% during pilot",
    tags: ["FastAPI", "PostgreSQL", "OpenAI", "Vue"],
    hackathon: "Built at HackMIT '25 (Massachusetts Institute of Technology)",
    image: "/projects/trakl.png",
    link: "https://github.com/RamikaDeSilva/trakl-HackMIT-25",
  },
  {
    id: "weblink",
    title: "WebLink",
    description:
      "Chrome extension that clusters saved links using semantic similarity into an interactive knowledge graph.",
    impact: "Semantic clustering via cosine similarity + embeddings",
    tags: ["TypeScript", "React", "OpenAI", "Supabase"],
    hackathon: "Built at CalHacks '25 (UC Berkeley)",
    image: "/projects/weblink.png",
    link: "https://github.com/dakshshahani/weblink",
  },
];
