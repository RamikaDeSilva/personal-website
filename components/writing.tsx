"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { writingPosts } from "@/data/writing";

export function Writing() {
  const featuredPost = writingPosts.find((p) => p.featured);
  const otherPosts = writingPosts.filter((p) => !p.featured);
  const shouldReduceMotion = useReducedMotion();

  // Animation variants for heading + intro (fade only)
  const headingVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.25,
        ease: [0, 0, 0.58, 1] as const, // easeOut
      },
    },
  };

  // Animation variants for writing items (fade + slide-up)
  const itemVariants = {
    hidden: shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.28,
        ease: [0, 0, 0.58, 1] as const, // easeOut
      },
    },
  };

  return (
    <section
      id="writing"
      className="mx-auto max-w-4xl px-6 py-24 lg:px-8 lg:py-32"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={headingVariants}
      >
        <h2 className="mb-4 text-4xl font-bold tracking-tight text-foreground">
          Writing
        </h2>
        <p className="mb-12 text-lg text-muted-foreground">
          I write to clarify my thinking while building in public. Mostly lessons
          learned from shipping, failing, and iterating.
        </p>
      </motion.div>

      {/* Featured Post */}
      {featuredPost && (
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={itemVariants}
          transition={{
            duration: 0.28,
            ease: [0, 0, 0.58, 1] as const, // easeOut
            delay: 0, // First item, no delay
          }}
        >
          <Link href={`/writing/${featuredPost.slug}`}>
            <Card className="mb-8 cursor-pointer border bg-card p-6 shadow-sm transition-all duration-200 ease-out hover:-translate-y-0.5 hover:border-accent/50 hover:shadow-md">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <Badge
                    variant="secondary"
                    className="mb-3 bg-accent/10 text-accent hover:bg-accent/20"
                  >
                    Featured
                  </Badge>
                  <h3 className="mb-2 text-xl font-semibold text-accent hover:text-accent/80">
                    {featuredPost.title}
                  </h3>
                </div>
                <span className="ml-4 text-sm text-muted-foreground">
                  {featuredPost.date}
                </span>
              </div>
            </Card>
          </Link>
        </motion.div>
      )}

      {/* Other Posts */}
      <div className="space-y-6">
        {otherPosts.map((post, index) => (
          <motion.div
            key={post.id}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={itemVariants}
            transition={{
              duration: 0.28,
              ease: [0, 0, 0.58, 1] as const, // easeOut
              delay: (index + 1) * 0.08, // 80ms stagger, offset by 1 for featured post
            }}
          >
            <Link href={`/writing/${post.slug}`}>
              <Card className="cursor-pointer border bg-card p-6 shadow-sm transition-all duration-200 ease-out hover:-translate-y-0.5 hover:border-border/80 hover:shadow-md">
                <div className="flex items-start justify-between">
                  <h3 className="flex-1 text-lg font-medium text-accent hover:text-accent/80">
                    {post.title}
                  </h3>
                  <span className="ml-4 text-sm text-muted-foreground">
                    {post.date}
                  </span>
                </div>
              </Card>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
