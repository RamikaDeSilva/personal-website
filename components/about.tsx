export function About() {
  return (
    <section
      id="about"
      className="mx-auto max-w-4xl px-6 py-24 lg:px-8 lg:py-32"
    >
      <h2 className="mb-12 text-4xl font-bold tracking-tight text-foreground">
        About
      </h2>

      <div className="space-y-6 text-lg leading-relaxed text-foreground/80">
        <p>
          I&apos;ve been interested in building things with code since I was 13.
          What started as curiosity and small side projects grew into working
          through college, early-stage startups, and now building my own
          products. I&apos;m currently a second-year Business and Computer
          Science (BUCS) student at UBC, and I&apos;ve learned that the hardest
          part isn&apos;t writing code—it&apos;s figuring out what to build and
          who you&apos;re building it for.
        </p>

        <p>
          My approach is to learn early from real users and iterate based on
          what they actually do. I care about clean, well-structured software,
          but I care even more about building things that create real value. To
          me, good engineering lives at the intersection of strong technical
          foundations, user understanding, and business context.
        </p>

        <p>
          <span className="font-semibold text-foreground">Core belief:</span>{" "}
          The best products are built by combining solid engineering with clear
          thinking about people and markets. Shipping early, learning quickly,
          and staying close to users beats building in isolation.
        </p>

        <p>
          Outside of building, I&apos;m interested in how software can
          personalize learning at scale and how small teams can move faster by
          staying focused and close to their users.
        </p>
      </div>
    </section>
  );
}
