export interface WritingPost {
  id: string;
  title: string;
  date: string;
  featured?: boolean;
}

export const writingPosts: WritingPost[] = [
  {
    id: "ai-language-app",
    title: "Why I Built an AI Language App Instead of Another SaaS Tool",
    date: "Mar 2024",
    featured: true,
  },
  {
    id: "12-projects",
    title: "Shipping 12 Projects in 12 Months: What I Learned",
    date: "Feb 2024",
  },
  {
    id: "perfect-architecture",
    title: "Stop Chasing Perfect Architecture—Start Shipping",
    date: "Jan 2024",
  },
  {
    id: "building-alone",
    title: "The Unglamorous Truth About Building Startups Alone",
    date: "Dec 2023",
  },
];
