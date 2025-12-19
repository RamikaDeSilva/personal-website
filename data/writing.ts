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
    title: "Why I'm Building a Language Learning App instead of a B2B SaaS",
    subtitle: "Choosing passion over popularity in product development",
    date: "December 19, 2025",
    readTime: "4 min read",
    featured: true,
    content: [
      {
        type: "quote",
        content:
          "\"You're doing B2C? You're cooked bud.\"",
      },
      {
        type: "paragraph",
        content:
          "Are words that no one has said to me directly - but run through my head often. Open LinkedIn, TikTok, X, and everyone is opening a B2B SaaS.",
      },
      {
        type: "paragraph",
        content:
          "Dropping out? Thats the norm nowadays.",
      },
      {
        type: "paragraph",
        content:
          "B2B (Business-to-Business) models where you sell to other organisations are the popular choice for these new founders - easier marketing, network reach, and larger lump sums per sale. B2C (Business-to-Consumer) on the other hand is seen as the devils choice. Marketing hell, retention nightmares, the competition from the giants - negativity surrounds the sales model.",
      },
      {
        type: "paragraph",
        content:
          "Why am I doing this then?",
      },
      {
        type: "heading",
        content: "The Problem",
      },
      {
        type: "paragraph",
        content:
          "Ever since I was young, I've always been fascinated with languages. From watching shows without subtitles to surprising locals in your community, speaking a language isn't just a jumble of words - its a gateway to beautiful cultures around us.",
      },
      {
        type: "paragraph",
        content:
          "That being said, its been a tough battle.",
      },
      {
        type: "paragraph",
        content:
          "School doesn't focus on fluency, instead prioritizing grammar rules that even locals don't know of to teach students. Apps currently available are focused more on milking their customers for cash instead of learning. Expensive subscriptions and a focus on addiction over true learning are the norm sadly.",
      },
      {
        type: "paragraph",
        content:
          "Every path seems to fall short - is there anything that can be done?",
      },
      {
        type: "heading",
        content: "Lumela - The new Path Forward",
      },
      {
        type: "paragraph",
        content:
          "Lumela strives to solve this frustration many new learners experience. Instead of focusing on drills and memorizing grammar rules, Lumela will make language learning about you: a conversation about your experiences and what your interests are. Through story-driven modes of learning, you'll learn and remember details far better than from an exam or flashcard relevant towards your life. I know this is a short snippet but the opportunities to learn are truly endless!",
      },
      {
        type: "paragraph",
        content:
          "Exciting things are coming up for us - check us out at Lumela.app :)",
      },
      {
        type: "heading",
        content: "Takeaways",
      },
      {
        type: "paragraph",
        content:
          "B2C is hard. Its exhausting and as a solo founder, I know that this process is not going to be easy. But Im excited: excited beyond belief. Because I see Lumela as something bigger than balance sheets and income statements, but an app that can help bring the world, our cultures, and experiences just that tad-bit closer together :)",
      },
      {
        type: "paragraph",
        content:
          "best,",
      },
      {
        type: "paragraph",
        content:
          "Ramika",
      },
    ],
  },
  {
    id: "12-projects",
    slug: "12-projects",
    title: "Is the end of SEO near?",
    subtitle: "From searching to prompting: how AI is reshaping discovery",
    date: "December 13, 2025",
    readTime: "2 min read",
    content: [
      {
        type: "paragraph",
        content:
          "Is the end of SEO near? Instead of googling book and show recommendations, im asking AI what best suits my tastes and goals - I'm not the only one, many of my friends are as well switching from searching to prompting.",
      },
      {
        type: "paragraph",
        content:
          "Makes you wonder..",
      },
      {
        type: "paragraph",
        content:
          "Maybe the future isn't purely SEO anymore or being at the top of an Amazon search, but LLM Engine Optimization?",
      },
      {
        type: "paragraph",
        content:
          "Then again, considering that AI is searching, SEO maybe might not be as disconnected as it appears from the user's point of view any thoughts or am I going crazy here?",
      },
      {
        type: "paragraph",
        content:
          "Cheers,",
      },
      {
        type: "paragraph",
        content:
          "Ramika",
      },
    ],
  },
  {
    id: "perfect-architecture",
    slug: "perfect-architecture",
    title: "Never Make Assumptions",
    subtitle: "The Third Agreement that could be holding you back from your goals",
    date: "December 11, 2025",
    readTime: "2 min read",
    content: [
      {
        type: "paragraph",
        content:
          "In the Four Agreements by Don Miguel Ruiz, he highlights the danger of a single process we do daily - assuming.",
      },
      {
        type: "paragraph",
        content:
          "Assumptions are by definition a conclusion that you are not fully confident in - therefore he advises that listening to them is extremely dangerous.",
      },
      {
        type: "paragraph",
        content:
          "It seems pretty self-explanatory and a given but sit back and ask yourself, are YOU making assumptions?",
      },
      {
        type: "paragraph",
        content:
          "- You aren't qualified for that SWE internship role?",
      },
      {
        type: "paragraph",
        content:
          "- You aren't ready for that university final?",
      },
      {
        type: "paragraph",
        content:
          "- You assuming your Startup will fail before go-to-market?",
      },
      {
        type: "paragraph",
        content:
          "those are a few of my assumptions - and writing them down makes you realize how dangerous they are: to yourself but also your goals and objectives. As he highlights in his books, assumptions cloud our vision, hiding away what the truth is telling us.",
      },
      {
        type: "paragraph",
        content:
          "what are your assumptions?",
      },
      {
        type: "paragraph",
        content:
          "Cheers,",
      },
      {
        type: "paragraph",
        content:
          "Ramika",
      },
    ],
  },
  {
    id: "building-alone",
    slug: "building-alone",
    title: "The Prudence Principle",
    subtitle: "How being cautious about gains and losses shapes everything from accounting to algorithms to anxiety",
    date: "November 5, 2025",
    readTime: "4 min read",
    content: [
      {
        type: "paragraph",
        content:
          "The Prudence Principle is the idea that we are strong about confirming our losses while also hesitant to confirm gains. I was first introduced to this concept in Financial Accounting (COMM 293) but realize that its surprisingly in a lot of fields!",
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
          "Ramika",
      },
    ],
  },
];
