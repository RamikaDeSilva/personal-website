export interface ExperienceItem {
  id: string;
  company: string;
  title: string;
  location: string;
  dateRange: string;
  tagline?: string;
  bullets: string[];
  skillTags: string[];
  logo?: string;
  logoFit?: "contain" | "cover";
}

export interface TechnicalSkillCategory {
  category: string;
  items: string[];
}

export const experience: ExperienceItem[] = [
  {
    id: "huawei",
    company: "Huawei",
    title: "AI Software Engineer Intern",
    location: "Waterloo, ON",
    dateRange: "Sept 2026–Dec 2026",
    tagline: "Python, TypeScript, multi-agent systems",
    bullets: [
      "Building an AI-native operator runtime in Python and TypeScript to convert natural language specifications into structured task graphs and executable multi-agent workflows.",
      "Developing multi-agent orchestration systems coordinating planner, builder, reviewer, and research agents across heterogeneous execution surfaces and model fleets.",
      "Engineering evidence-gated verification pipelines, benchmark reproduction suites, and execution trace monitors to validate AI-generated artifacts for correctness and reproducibility.",
    ],
    skillTags: ["Python", "TypeScript", "Multi-agent systems", "Verification"],
    logo: "/logos/huawei.png",
  },
  {
    id: "nwplus",
    company: "nwPlus",
    title: "GTM Engineer",
    location: "Vancouver, BC",
    dateRange: "May 2025–Present",
    bullets: [
      "Engaged 1,000+ prospective partners and contributed to a $10K+ sponsorship pipeline by architecting automated GTM data pipelines and outbound sequences using n8n and Apollo.io.",
    ],
    skillTags: ["GTM", "n8n", "Apollo.io", "Automation"],
    logo: "/logos/nwplus.png",
    logoFit: "cover",
  },
  {
    id: "synexus",
    company: "Synexus Labs",
    title: "Software Engineer Intern",
    location: "San Francisco, California",
    dateRange: "Oct 2025–Feb 2026",
    tagline: "LangChain, prompt templating, Python",
    bullets: [
      "Led the transition from OpenAI SDKs to provider-agnostic frameworks, using a Dependency Inversion Design Pattern, improving performance and latency across multiple LLM providers with Python.",
      "Improved benchmark outputs 20% by implementing LangChain prompt templates, chains, and in-memory conversation memory to standardize debugging workflows and reduce response variability across repeated analyses.",
      "Authored comprehensive technical design documents for LangChain agentic architectures using object-oriented principles to align stakeholders and guide production-ready deployments.",
    ],
    skillTags: ["LangChain", "Python", "OpenAI", "Prompt engineering", "LLM pipelines"],
    logo: "/logos/synexus.png",
  },
];

export const technicalSkills: TechnicalSkillCategory[] = [
  {
    category: "Languages",
    items: [
      "Python",
      "TypeScript",
      "JavaScript",
      "Java",
      "SQL (PostgreSQL)",
      "HTML/CSS (SASS)",
    ],
  },
  {
    category: "AI & Machine Learning",
    items: [
      "LangChain",
      "LangGraph",
      "OpenAI SDK",
      "RAG Architecture",
      "Vector Databases",
      "Prompt Engineering",
    ],
  },
  {
    category: "Frameworks & Libraries",
    items: [
      "React",
      "React Native",
      "Next.js",
      "Node.js",
      "FastAPI",
      "Prisma",
      "Tailwind CSS",
      "Zustand",
    ],
  },
  {
    category: "Tools & Infrastructure",
    items: [
      "Git",
      "Docker",
      "Kubernetes",
      "CI/CD",
      "Redis",
      "Supabase",
      "Vercel",
      "n8n",
      "Sentry",
      "Cursor",
    ],
  },
];
