import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { writingPosts } from "@/data/writing";

export function Writing() {
  const featuredPost = writingPosts.find((p) => p.featured);
  const otherPosts = writingPosts.filter((p) => !p.featured);

  return (
    <section
      id="writing"
      className="mx-auto max-w-4xl px-6 py-24 lg:px-8 lg:py-32"
    >
      <h2 className="mb-4 text-4xl font-bold tracking-tight text-foreground">
        Writing
      </h2>
      <p className="mb-12 text-lg text-muted-foreground">
        I write to clarify my thinking while building in public. Mostly lessons
        learned from shipping, failing, and iterating.
      </p>

      {/* Featured Post */}
      {featuredPost && (
        <Card className="mb-8 border bg-card p-6 shadow-sm">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <Badge
                variant="secondary"
                className="mb-3 bg-accent/10 text-accent hover:bg-accent/20"
              >
                Featured
              </Badge>
              <h3 className="mb-2 text-xl font-semibold text-accent hover:text-accent/80">
                <a href={`#${featuredPost.id}`}>{featuredPost.title}</a>
              </h3>
            </div>
            <span className="ml-4 text-sm text-muted-foreground">
              {featuredPost.date}
            </span>
          </div>
        </Card>
      )}

      {/* Other Posts */}
      <div className="space-y-6">
        {otherPosts.map((post) => (
          <Card
            key={post.id}
            className="border bg-card p-6 shadow-sm transition-colors hover:border-accent/20"
          >
            <div className="flex items-start justify-between">
              <h3 className="flex-1 text-lg font-medium text-accent hover:text-accent/80">
                <a href={`#${post.id}`}>{post.title}</a>
              </h3>
              <span className="ml-4 text-sm text-muted-foreground">
                {post.date}
              </span>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
