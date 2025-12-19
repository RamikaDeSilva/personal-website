export interface ContentBlock {
  type: "paragraph" | "heading" | "quote";
  content: string;
}

export interface WritingPost {
  id: string;
  slug: string;
  title: string;
  subtitle?: string;
  date: string;
  readTime: string;
  featured?: boolean;
  content: ContentBlock[];
}

export const writingPosts: WritingPost[] = [
  {
    id: "ai-language-app",
    slug: "ai-language-app",
    title: "Why I Built an AI Language App Instead of Another SaaS Tool",
    subtitle: "Choosing impact over trends in product development",
    date: "March 15, 2024",
    readTime: "5 min read",
    featured: true,
    content: [
      {
        type: "paragraph",
        content:
          "Everyone in tech is racing to build the next viral SaaS tool. Another productivity app, another no-code builder, another AI wrapper promising to revolutionize workflows. But when I looked at the landscape, I kept asking: what problem am I actually solving?",
      },
      {
        type: "paragraph",
        content:
          "Instead of chasing trends, I built something deeply personal—an AI-powered language learning app. Not because it's trendy, but because I've experienced the frustration of traditional language learning tools firsthand.",
      },
      {
        type: "heading",
        content: "The Real Problem",
      },
      {
        type: "paragraph",
        content:
          "Traditional language apps feel like school: rigid lessons, arbitrary gamification, and zero connection to real-world conversations. You complete hundreds of exercises but freeze when trying to order coffee in another country.",
      },
      {
        type: "paragraph",
        content:
          "I wanted to build something that felt like talking to a patient native speaker—someone who could adapt to your level, correct you naturally, and keep conversations engaging.",
      },
      {
        type: "heading",
        content: "Why AI Actually Makes Sense Here",
      },
      {
        type: "paragraph",
        content:
          "AI isn't just a buzzword wrapper for this use case—it fundamentally changes what's possible. A good AI tutor can provide instant feedback, adapt difficulty on the fly, and create infinitely varied practice scenarios.",
      },
      {
        type: "quote",
        content:
          "The best language learning happens through conversation, not flashcards. AI finally makes personalized conversation practice scalable.",
      },
      {
        type: "paragraph",
        content:
          "But the key was not overbuilding. I didn't need a massive feature set. I needed one thing done exceptionally well: natural, adaptive conversation practice.",
      },
      {
        type: "heading",
        content: "Lessons Learned",
      },
      {
        type: "paragraph",
        content:
          "Building something you personally need keeps you honest. You can't fake enthusiasm when you're your own user. Every feature decision becomes clearer because you feel the pain of bad choices immediately.",
      },
      {
        type: "paragraph",
        content:
          "The AI language app has users now—real people practicing daily. It's not a unicorn, but it solves a real problem. And that matters more than chasing the next SaaS trend.",
      },
    ],
  },
  {
    id: "12-projects",
    slug: "12-projects",
    title: "Shipping 12 Projects in 12 Months: What I Learned",
    subtitle: "A year of rapid experimentation and brutal lessons",
    date: "February 8, 2024",
    readTime: "7 min read",
    content: [
      {
        type: "paragraph",
        content:
          "A year ago, I set an ambitious goal: ship 12 projects in 12 months. Not just ideas or prototypes—actual products that real people could use. Some succeeded. Most failed. All taught me something.",
      },
      {
        type: "heading",
        content: "The Wins",
      },
      {
        type: "paragraph",
        content:
          "Three projects found real users. One generated revenue. Two got featured in small communities. The success rate was low, but the learning rate was exponential.",
      },
      {
        type: "paragraph",
        content:
          "Speed became my superpower. I learned to validate ideas in days instead of months. I stopped overthinking architecture and started shipping MVPs that embarrassed me—but worked.",
      },
      {
        type: "heading",
        content: "The Failures",
      },
      {
        type: "paragraph",
        content:
          "Nine projects didn't get traction. Some were technically solid but solved problems nobody had. Others targeted the right problem but missed on execution. A few were just bad ideas.",
      },
      {
        type: "quote",
        content:
          "Failure isn't the opposite of success—it's the admission price. Ship fast, fail fast, learn faster.",
      },
      {
        type: "paragraph",
        content:
          "The hardest lesson: knowing when to quit. I wasted weeks trying to revive projects that were DOA. Learning to kill your darlings quickly is a skill that only comes from painful experience.",
      },
      {
        type: "heading",
        content: "What Actually Mattered",
      },
      {
        type: "paragraph",
        content:
          "Distribution beats product quality at the start. A mediocre product in front of the right audience will outperform a perfect product nobody sees. I learned to build distribution into the product from day one.",
      },
      {
        type: "paragraph",
        content:
          "Feedback loops accelerate everything. Every project that succeeded had tight feedback loops—daily user conversations, analytics that actually mattered, clear success metrics.",
      },
      {
        type: "paragraph",
        content:
          "Would I do it again? Absolutely. The volume of experimentation compressed years of learning into months. If you're stuck overthinking your next project, try timeboxing. Set a deadline, ship something, and learn from real users.",
      },
    ],
  },
  {
    id: "perfect-architecture",
    slug: "perfect-architecture",
    title: "Stop Chasing Perfect Architecture—Start Shipping",
    subtitle: "Why over-engineering kills more startups than bad code",
    date: "January 22, 2024",
    readTime: "4 min read",
    content: [
      {
        type: "paragraph",
        content:
          "I spent three months architecting a 'scalable, maintainable, future-proof' system for my first startup. Clean architecture. Microservices. The works. We launched to crickets. Zero users. Perfect code, zero value.",
      },
      {
        type: "paragraph",
        content:
          "The problem wasn't the architecture—it was the priorities. I optimized for problems I didn't have instead of solving problems users actually faced.",
      },
      {
        type: "heading",
        content: "The Trap of Perfect Architecture",
      },
      {
        type: "paragraph",
        content:
          "Engineers love elegant systems. We debate microservices vs monoliths, argue about folder structures, and refactor before we've validated the core idea. It feels productive, but it's procrastination disguised as engineering rigor.",
      },
      {
        type: "quote",
        content:
          "Perfect architecture is optimizing for a future that might never come. Ship the messy MVP and let real users tell you what to build next.",
      },
      {
        type: "heading",
        content: "What Actually Works",
      },
      {
        type: "paragraph",
        content:
          "Start with the simplest thing that could possibly work. A monolith is fine. Duplicated code is fine. Manual processes are fine. These aren't technical debt—they're smart trade-offs when you're validating an idea.",
      },
      {
        type: "paragraph",
        content:
          "Refactor under pressure from real users, not imagined scale. When you have 100 users complaining about slow page loads, you'll know exactly what to optimize. Until then, it's guesswork.",
      },
      {
        type: "heading",
        content: "The Real Measure",
      },
      {
        type: "paragraph",
        content:
          "Good architecture enables fast iteration, not perfect code. If your system lets you ship a new feature in hours instead of days, you're winning. If you're spending weeks debating patterns before writing a line of user-facing code, you've lost.",
      },
      {
        type: "paragraph",
        content:
          "Now I optimize for speed of learning. Every technical decision is evaluated by one question: does this help me learn what users want faster? If not, I ship the hack and move on.",
      },
    ],
  },
  {
    id: "building-alone",
    slug: "building-alone",
    title: "The Conservatism Principle",
    subtitle: "How being cautious about gains and losses shapes everything from accounting to algorithms to anxiety",
    date: "November 5, 2025",
    readTime: "4 min read",
    content: [
      {
        type: "paragraph",
        content:
          "The Conservatism Principle is the idea that we are strong about confirming our losses while also hesitant to confirm gains. I was first introduced to this concept in Financial Accounting (COMM 293) but realize that its surprisingly in a lot of fields!",
      },
      {
        type: "heading",
        content: "Computer Science Connection",
      },
      {
        type: "paragraph",
        content:
          "In computer science, runtimes are essential towards determining what is the best fit for a specific application or problem - what algorithms and data structures should I use?",
      },
      {
        type: "paragraph",
        content:
          "Big-O notation...",
      },
      {
        type: "paragraph",
        content:
          "I thought that it was funny how we always use the upper bound regardless of how rare reaching that bound is - I mean, if a runtime is roughly constant 99.99% of the time, using an upper bound much higher seems inaccurate no?",
      },
      {
        type: "paragraph",
        content:
          "But we can't afford that small chance. That small chance is what shuts down companies when they least expect. The Prudence Principle is used here not just to be extra cautious, but have your applications ready for the worst-case scenario - the question is, can you take that loss? If not, you better come up with something better!",
      },
      {
        type: "heading",
        content: "Life Connection and Takeaways",
      },
      {
        type: "paragraph",
        content:
          "Beyond the classroom, the Prudence Principle helps with calming anxiety too - at least for me. Before finals, I often panic, worrying I'll fail, and discover I'm not cut out for this field.",
      },
      {
        type: "paragraph",
        content:
          "Stop. Lets apply the Prudence Principle and imagine the worst-case scenario.",
      },
      {
        type: "paragraph",
        content:
          "I fail that exam. I get a zero on it. The TA's laugh as they mark my paper.",
      },
      {
        type: "paragraph",
        content:
          "Wow, that stings.",
      },
      {
        type: "paragraph",
        content:
          "But realistically, is it all that bad? Will I remember this in 5 years? Will I lose every SINGLE opportunity because of this one exam - nope.",
      },
      {
        type: "paragraph",
        content:
          "The Prudence Principle shines in places like this, rationalizing your situation and making you realize, its really not that bad - the Earth will keep spinning. I hope you can apply it as well, its been great for calming my mind :)",
      },
      {
        type: "paragraph",
        content:
          "Cheers,",
      },
      {
        type: "paragraph",
        content:
          "Ramika De Silva",
      },
    ],
  },
];
