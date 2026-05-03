export interface ExperienceItem {
  id: string;
  company: string;
  title: string;
  location: string;
  dateRange: string;
  tagline?: string;
  bullets: string[];
  skillTags: string[];
}

export interface TechnicalSkillCategory {
  category: string;
  items: string[];
}

export const experience: ExperienceItem[] = [
  {
    id: "nwplus",
    company: "nwPlus",
    title: "GTM Engineer (Incoming)",
    location: "Vancouver, BC",
    dateRange: "May 2026–Present",
    bullets: [
      "Selected to lead technical sponsorship initiatives, focusing on automating business development workflows and partner data analytics for the 2026–2027 cycle.",
    ],
    skillTags: ["GTM", "Automation", "Partner analytics", "Business development"],
  },
  {
    id: "synexus",
    company: "Synexus Labs",
    title: "Software Engineering Intern",
    location: "San Francisco, California",
    dateRange: "Oct 2025–Feb 2026",
    tagline: "LangChain, prompt templating, Python",
    bullets: [
      "Refactored AI debugging assistant software to use LangChain, replacing direct OpenAI SDK calls to enable provider-agnostic LLM integration for dependency inversion.",
      "Implemented LangChain PromptTemplates and Chains to standardize debugging workflows and reduce response variability across repeated analyses.",
      "Designed an extensible LLM analysis pipeline supporting in-memory conversation memory for contextual follow-up debugging without external databases.",
      "Authored a technical design document evaluating LangChain abstractions and architecture tradeoffs to align stakeholders and guide implementation.",
    ],
    skillTags: ["LangChain", "Python", "OpenAI", "Prompt engineering", "LLM pipelines"],
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
      "C++",
      "SQL (PostgreSQL)",
      "HTML/CSS",
    ],
  },
  {
    category: "AI & Data",
    items: [
      "LangChain",
      "OpenAI SDK",
      "Prompt Engineering",
      "Vector Databases (pgvector)",
      "RAG Architecture",
    ],
  },
  {
    category: "Frameworks / Libraries",
    items: [
      "Next.js",
      "React",
      "FastAPI",
      "Node.js",
      "Prisma",
      "Zustand",
      "Tailwind CSS",
      "Cytoscape.js",
    ],
  },
  {
    category: "Tools / Infrastructure",
    items: [
      "Git",
      "GitHub",
      "Vercel",
      "Supabase",
      "Redis",
      "Postman",
      "Slack API",
    ],
  },
];
