import { lazy } from "react";
import type { ComponentType } from "react";

// ── Post metadata type ─────────────────────────────────────────────────────────
export interface PostImage {
  url: string;        // full Unsplash CDN URL  e.g. https://images.unsplash.com/photo-ID?w=1200&q=80
  alt: string;        // descriptive alt text for accessibility
  credit?: string;    // photographer name (for attribution)
  creditUrl?: string; // link to photographer's Unsplash profile
}

export interface PostMeta {
  slug: string;
  title: string;
  date: string;
  readTime: string;
  excerpt: string;
  category: string;
  tags: string[];
  heroImage?: PostImage;
  featured?: boolean;
}

// ── Lazy-loaded post components ────────────────────────────────────────────────
// The blog agent adds one entry here per new post.
export const POST_COMPONENTS: Record<string, React.LazyExoticComponent<ComponentType>> = {
  "how-to-know-if-your-business-needs-analytics": lazy(
    () => import("./how-to-know-if-your-business-needs-analytics")
  ),
};

// ── Post metadata list (newest first) ─────────────────────────────────────────
// The blog agent prepends one entry here per new post.
export const POST_META: PostMeta[] = [
  {
    slug: "how-to-know-if-your-business-needs-analytics",
    title: "How to Know If Your Business Needs Analytics",
    date: "2026-04-10",
    readTime: "7 min read",
    excerpt:
      "Most business owners know data matters — but how do you know when it's time to bring in professional help? Here are five clear signs your business is ready for analytics.",
    category: "Business Strategy",
    tags: ["analytics", "small business", "data strategy", "business intelligence"],
    heroImage: {
      url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80",
      alt: "Business analytics dashboard showing charts and data visualizations on a monitor",
      credit: "Luke Chesser",
      creditUrl: "https://unsplash.com/@lukechesser",
    },
    featured: true,
  },
];
