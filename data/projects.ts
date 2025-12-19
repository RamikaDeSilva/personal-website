export interface Project {
  id: string;
  title: string;
  description: string;
  impact: string;
  tags: string[];
  featured?: boolean;
  image?: string;
  hackathon?: string;
}

export const projects: Project[] = [
  {
    id: "lumela",
    title: "Lumela",
    description:
      "Story-driven language learning app that personalizes lessons to the learner's interests and cultural context.",
    impact: "In progress • building MVP + waitlist",
    tags: ["React Native", "Python", "OpenAI", "PostgreSQL"],
    featured: true,
    image: "/projects/lumela.png",
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
  },
];
