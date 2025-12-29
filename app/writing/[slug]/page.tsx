import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { writingPosts } from "@/data/writing";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return writingPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const post = writingPosts.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: `${post.title} | Ramika De Silva`,
    description: post.subtitle || post.title,
  };
}

export default async function WritingPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = writingPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background">
      <article className="mx-auto max-w-3xl px-6 py-12 lg:px-8 lg:py-16">
        {/* Back to Writing Link - Top */}
        <Link
          href="/#writing"
          className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Writing
        </Link>

        {/* Article Header */}
        <header className="mb-12">
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            {post.title}
          </h1>

          {post.subtitle && (
            <p className="mb-6 text-xl text-foreground/70">{post.subtitle}</p>
          )}

          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <time dateTime={post.date}>{post.date}</time>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>
        </header>

        {/* Article Content */}
        <div className="prose prose-neutral dark:prose-invert max-w-none">
          {post.content.map((block, index) => {
            switch (block.type) {
              case "heading":
                return (
                  <h2
                    key={index}
                    className="mb-4 mt-12 text-2xl font-bold tracking-tight text-foreground first:mt-0"
                  >
                    {block.content}
                  </h2>
                );

              case "quote":
                return (
                  <blockquote
                    key={index}
                    className="my-8 border-l-4 border-accent/50 pl-6 italic text-foreground/80"
                  >
                    {block.content}
                  </blockquote>
                );

              case "paragraph":
              default:
                return (
                  <p
                    key={index}
                    className="mb-6 text-base leading-relaxed text-foreground/80"
                  >
                    {block.content}
                  </p>
                );
            }
          })}
        </div>

        {/* Back to Writing Link - Bottom */}
        <div className="mt-16 border-t pt-8">
          <Link
            href="/#writing"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Writing
          </Link>
        </div>
      </article>
    </div>
  );
}



