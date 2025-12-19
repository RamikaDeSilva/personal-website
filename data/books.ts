export interface Book {
  id: string;
  title: string;
  author: string;
  takeaway: string;
  appliedTo: string;
  category: string;
}

export const books: Book[] = [
  {
    id: "ai-agents",
    title: "Principles of Building AI Agents",
    author: "Sam Bhagwat",
    takeaway:
      "Designing AI systems as modular, goal-driven agents rather than static features.",
    appliedTo: "AI product architecture",
    category: "Product & Strategy",
  },
  {
    id: "mom-test",
    title: "The Mom Test",
    author: "Rob Fitzpatrick",
    takeaway:
      "Good products come from good questions and honest user conversations.",
    appliedTo: "user interviews & validation",
    category: "Product & Strategy",
  },
  {
    id: "deep-work",
    title: "Deep Work",
    author: "Cal Newport",
    takeaway:
      "Sustained focus is a competitive advantage in a distracted world.",
    appliedTo: "daily routine",
    category: "Focus & Mental Models",
  },
  {
    id: "atomic-habits",
    title: "Atomic Habits",
    author: "James Clear",
    takeaway:
      "Small systems, repeated consistently, compound into meaningful change.",
    appliedTo: "habit-building & consistency",
    category: "Focus & Mental Models",
  },
  {
    id: "moonwalking-einstein",
    title: "Moonwalking with Einstein",
    author: "Joshua Foer",
    takeaway:
      "A look into memory, learning, and how much skill is shaped by training and systems—told through a compelling personal journey.",
    appliedTo: "memory & learning systems",
    category: "What Stuck With Me",
  },
];

export const bookCategories = [
  "Product & Strategy",
  "Focus & Mental Models",
  "What Stuck With Me",
];
