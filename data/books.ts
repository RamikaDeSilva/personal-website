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
    id: "zero-to-one",
    title: "Zero to One",
    author: "Peter Thiel",
    takeaway:
      "Building something 10x better matters more than incremental improvements. Monopolies create lasting value.",
    appliedTo: "product strategy",
    category: "Product & Strategy",
  },
  {
    id: "lean-startup",
    title: "The Lean Startup",
    author: "Eric Ries",
    takeaway:
      "Ship fast, measure what matters, learn from real users. Avoid building in a vacuum.",
    appliedTo: "MVP decisions",
    category: "Product & Strategy",
  },
  {
    id: "deep-work",
    title: "Deep Work",
    author: "Cal Newport",
    takeaway:
      "Sustained focus is the competitive advantage. Distraction is the default—deep work requires discipline.",
    appliedTo: "daily routine",
    category: "Focus & Essentialism",
  },
  {
    id: "essentialism",
    title: "Essentialism",
    author: "Greg McKeown",
    takeaway:
      "Do fewer things, better. Say no to good opportunities to make room for great ones.",
    appliedTo: "prioritization",
    category: "Focus & Essentialism",
  },
  {
    id: "almanack",
    title: "The Almanack of Naval Ravikant",
    author: "Eric Jorgenson",
    takeaway:
      "Code, media, and capital are forms of leverage. Your output should scale without scaling your time.",
    appliedTo: "career design",
    category: "Leverage & Career",
  },
];

export const bookCategories = [
  "Product & Strategy",
  "Focus & Essentialism",
  "Leverage & Career",
];
