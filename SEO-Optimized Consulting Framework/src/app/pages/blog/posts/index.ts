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
  "customer-segmentation-how-to-stop-sending-the-same-email-to-everyone": lazy(
    () => import("./customer-segmentation-how-to-stop-sending-the-same-email-to-everyone")
  ),
  "how-ai-can-automate-your-most-repetitive-business-tasks": lazy(
    () => import("./how-ai-can-automate-your-most-repetitive-business-tasks")
  ),
  "what-is-etl-and-why-should-nontechnical-business-owners-care": lazy(
    () => import("./what-is-etl-and-why-should-nontechnical-business-owners-care")
  ),
  "the-difference-between-a-report-and-a-dashboard-and-why-it-matters": lazy(
    () => import("./the-difference-between-a-report-and-a-dashboard-and-why-it-matters")
  ),
  "5-signs-your-business-is-leaving-money-on-the-table-with-its-data": lazy(
    () => import("./5-signs-your-business-is-leaving-money-on-the-table-with-its-data")
  ),
  "what-is-a-kpi-dashboard-and-does-your-business-need-one": lazy(
    () => import("./what-is-a-kpi-dashboard-and-does-your-business-need-one")
  ),
  "how-to-know-if-your-business-is-ready-for-a-data-analyst": lazy(
    () => import("./how-to-know-if-your-business-is-ready-for-a-data-analyst")
  ),
  "how-to-know-if-your-business-needs-analytics": lazy(
    () => import("./how-to-know-if-your-business-needs-analytics")
  ),
};

// ── Post metadata list (newest first) ─────────────────────────────────────────
// The blog agent prepends one entry here per new post.
export const POST_META: PostMeta[] = [
  {
    slug: "customer-segmentation-how-to-stop-sending-the-same-email-to-everyone",
    title: "Customer Segmentation: How to Stop Sending the Same Email to Everyone",
    date: "2026-05-11",
    readTime: "7 min read",
    excerpt: "Sending identical messages to your entire customer base is leaving money on the table. Learn how customer segmentation powered by data can transform your marketing from generic broadcasts into personalized conversations that drive real results.",
    category: "Business Strategy",
    tags: ["customer segmentation", "email marketing", "personalization", "data strategy", "marketing analytics"],
    heroImage: {
      url: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&q=80",
      alt: "Colorful data visualization showing different customer segments represented as distinct groups",
      credit: "Carlos Muza",
      creditUrl: "https://unsplash.com/@kmuza",
    },
  },
  {
    slug: "how-ai-can-automate-your-most-repetitive-business-tasks",
    title: "How AI Can Automate Your Most Repetitive Business Tasks",
    date: "2026-05-11",
    readTime: "5 min read",
    excerpt: "Every team has a long tail of small repetitive tasks that drain hours every week. Modern AI is now cheap enough and reliable enough to clear most of them off the plate. Learn which tasks to automate first, how to spot good candidates, and how to pick a starting project that pays for itself within a month.",
    category: "AI & Automation",
    tags: ["AI automation", "business automation", "machine learning", "workflow automation"],
    heroImage: {
      url: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1200&q=80",
      alt: "Small white humanoid robot reaching out, representing practical AI assistance for business tasks",
      credit: "Franck",
      creditUrl: "https://unsplash.com/@franckinjapan",
    },
  },
  {
    slug: "what-is-etl-and-why-should-nontechnical-business-owners-care",
    title: "What Is ETL and Why Should Non Technical Business Owners Care?",
    date: "2026-05-04",
    readTime: "7 min read",
    excerpt: "ETL stands for Extract, Transform, and Load. It is the backbone of modern data management, enabling businesses to consolidate information from multiple sources into actionable insights. Understanding ETL empowers business owners to make data driven decisions with confidence.",
    category: "Data Engineering",
    tags: ["ETL", "data management", "business intelligence", "data integration", "data quality"],
    heroImage: {
      url: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&q=80",
      alt: "Modern data center with illuminated server racks representing data infrastructure",
      credit: "Taylor Vick",
      creditUrl: "https://unsplash.com/@tvick",
    },
  },
  {
    slug: "the-difference-between-a-report-and-a-dashboard-and-why-it-matters",
    title: "The Difference Between a Report and a Dashboard — And Why It Matters",
    date: "2026-04-27",
    readTime: "7 min read",
    excerpt: "Reports and dashboards serve fundamentally different purposes in your data strategy. Understanding when to use each can transform how your organization makes data driven decisions and gains competitive advantage.",
    category: "Analytics",
    tags: ["business intelligence", "data visualization", "reporting", "dashboards"],
    heroImage: {
      url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80",
      alt: "Modern analytics dashboard displayed on a computer monitor showing various charts and data visualizations",
      credit: "Luke Chesser",
      creditUrl: "https://unsplash.com/@lukechesser",
    },
  },
  {
    slug: "5-signs-your-business-is-leaving-money-on-the-table-with-its-data",
    title: "5 Signs Your Business Is Leaving Money on the Table with Its Data",
    date: "2026-04-20",
    readTime: "7 min read",
    excerpt: "Many businesses sit on goldmines of data without realizing its potential value. Discover the five warning signs that your organization is missing revenue opportunities hidden in your existing data assets and learn how to turn things around.",
    category: "Business Strategy",
    tags: ["data strategy", "business intelligence", "revenue optimization", "data management", "competitive advantage"],
    heroImage: {
      url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80",
      alt: "Business analytics dashboard displaying charts and graphs on a modern computer screen",
      credit: "Luke Chesser",
      creditUrl: "https://unsplash.com/@lukechesser",
    },
  },
  {
    slug: "what-is-a-kpi-dashboard-and-does-your-business-need-one",
    title: "What Is a KPI Dashboard and Does Your Business Need One?",
    date: "2026-04-13",
    readTime: "6 min read",
    excerpt: "A KPI dashboard transforms scattered metrics into a unified view of business performance. Learn what makes an effective dashboard, when your organization is ready for one, and how to get started building a solution that drives data driven decisions.",
    category: "Analytics",
    tags: ["KPI dashboards", "business intelligence", "data visualization", "performance metrics"],
    heroImage: {
      url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80",
      alt: "Modern analytics dashboard displayed on a large monitor showing charts and performance metrics",
      credit: "Luke Chesser",
      creditUrl: "https://unsplash.com/@lukechesser",
    },
  },
  {
    slug: "how-to-know-if-your-business-is-ready-for-a-data-analyst",
    title: "How to Know If Your Business Is Ready for a Data Analyst",
    date: "2026-04-11",
    readTime: "7 min read",
    excerpt: "Hiring a data analyst can transform your business, but timing matters. Learn the key signs that indicate your organization is ready to bring on dedicated data talent and how to prepare for a successful hire.",
    category: "Business Strategy",
    tags: ["data analyst", "hiring", "business growth", "data strategy"],
    heroImage: {
      url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80",
      alt: "Business professional reviewing data charts and analytics on a computer screen",
      credit: "Luke Chesser",
      creditUrl: "https://unsplash.com/@lukechesser",
    },
  },
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
