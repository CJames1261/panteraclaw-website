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
  "how-databricks-snowflake-and-postgresql-compare-for-enterprise-data": lazy(
    () => import("./how-databricks-snowflake-and-postgresql-compare-for-enterprise-data")
  ),
  "langgraph-and-agentic-workflows-a-technical-deep-dive": lazy(
    () => import("./langgraph-and-agentic-workflows-a-technical-deep-dive")
  ),
  "what-is-causal-inference-and-why-it-beats-correlation-for-business-decisions": lazy(
    () => import("./what-is-causal-inference-and-why-it-beats-correlation-for-business-decisions")
  ),
  "how-to-measure-the-roi-of-a-data-analytics-project": lazy(
    () => import("./how-to-measure-the-roi-of-a-data-analytics-project")
  ),
  "why-your-excel-spreadsheets-are-slowing-your-business-down": lazy(
    () => import("./why-your-excel-spreadsheets-are-slowing-your-business-down")
  ),
  "agentic-ai-explained-for-business-owners-no-jargon": lazy(
    () => import("./agentic-ai-explained-for-business-owners-no-jargon")
  ),
  "how-to-choose-the-right-database-for-your-growing-business": lazy(
    () => import("./how-to-choose-the-right-database-for-your-growing-business")
  ),
  "what-is-business-intelligence-and-how-much-does-it-cost": lazy(
    () => import("./what-is-business-intelligence-and-how-much-does-it-cost")
  ),
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
    slug: "how-databricks-snowflake-and-postgresql-compare-for-enterprise-data",
    title: "How Databricks, Snowflake, and PostgreSQL Compare for Enterprise Data",
    date: "2026-07-06",
    readTime: "7 min read",
    excerpt: "Choosing the right data platform is critical for enterprise success. We break down how Databricks, Snowflake, and PostgreSQL compare across performance, cost, and use cases to help you make an informed decision.",
    category: "Data Engineering",
    tags: ["data platforms", "Databricks", "Snowflake", "PostgreSQL", "enterprise architecture"],
    heroImage: {
      url: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&q=80",
      alt: "Modern data center with rows of illuminated servers representing enterprise data infrastructure",
      credit: "Taylor Vick",
      creditUrl: "https://unsplash.com/@tvick",
    },
  },
  {
    slug: "langgraph-and-agentic-workflows-a-technical-deep-dive",
    title: "LangGraph and Agentic Workflows: A Technical Deep Dive for Modern Data Teams",
    date: "2026-06-29",
    readTime: "8 min read",
    excerpt: "Explore how LangGraph enables sophisticated agentic workflows that go beyond simple chatbots. Learn the architecture, key concepts, and practical applications that give organizations a competitive advantage in AI automation.",
    category: "AI & Automation",
    tags: ["LangGraph", "agentic workflows", "AI automation", "LLM orchestration", "data engineering"],
    heroImage: {
      url: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&q=80",
      alt: "Abstract network of interconnected nodes representing AI workflow systems",
      credit: "Alina Grubnyak",
      creditUrl: "https://unsplash.com/@alinnnaaaa",
    },
  },
  {
    slug: "what-is-causal-inference-and-why-it-beats-correlation-for-business-decisions",
    title: "What Is Causal Inference and Why It Beats Correlation for Business Decisions",
    date: "2026-06-22",
    readTime: "7 min read",
    excerpt: "Understanding the difference between correlation and causation can transform how your business makes strategic decisions. Learn why causal inference methods give you the confidence to act, not just observe.",
    category: "Analytics",
    tags: ["causal inference", "data analytics", "business intelligence", "decision making", "statistical analysis"],
    heroImage: {
      url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80",
      alt: "Data visualization dashboard showing interconnected metrics and analytics",
      credit: "Luke Chesser",
      creditUrl: "https://unsplash.com/@lukechesser",
    },
  },
  {
    slug: "how-to-measure-the-roi-of-a-data-analytics-project",
    title: "How to Measure the ROI of a Data Analytics Project: A Practical Guide for Business Leaders",
    date: "2026-06-15",
    readTime: "7 min read",
    excerpt: "Understanding the return on investment for your data analytics initiatives is essential for making informed decisions about future projects. Learn how to quantify the value of your analytics investments using proven frameworks and metrics that speak to stakeholders at every level.",
    category: "Business Strategy",
    tags: ["ROI measurement", "data analytics", "business value", "analytics strategy"],
    heroImage: {
      url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80",
      alt: "Business analytics dashboard displaying charts and metrics on a computer screen",
      credit: "Luke Chesser",
      creditUrl: "https://unsplash.com/@lukechesser",
    },
  },
  {
    slug: "why-your-excel-spreadsheets-are-slowing-your-business-down",
    title: "Why Your Excel Spreadsheets Are Slowing Your Business Down",
    date: "2026-06-08",
    readTime: "7 min read",
    excerpt: "Excel helped build your business, but it may now be holding you back. Learn why spreadsheet dependency creates bottlenecks and how modern data management solutions can unlock faster, more informed decision making.",
    category: "Business Strategy",
    tags: ["data management", "business efficiency", "digital transformation", "spreadsheet alternatives"],
    heroImage: {
      url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80",
      alt: "Business professional analyzing data on multiple screens showing charts and spreadsheets",
      credit: "Carlos Muza",
      creditUrl: "https://unsplash.com/@kmuza",
    },
  },
  {
    slug: "agentic-ai-explained-for-business-owners-no-jargon",
    title: "Agentic AI Explained for Business Owners: What It Actually Means for Your Company",
    date: "2026-06-01",
    readTime: "7 min read",
    excerpt: "Agentic AI is reshaping how businesses operate by enabling software that can think, plan, and act independently. Learn what this technology actually does, why it matters for your bottom line, and how to evaluate whether your organization is ready to adopt it.",
    category: "AI & Automation",
    tags: ["agentic AI", "business automation", "AI strategy", "digital transformation"],
    heroImage: {
      url: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&q=80",
      alt: "Abstract visualization of artificial intelligence networks and connected nodes",
      credit: "Steve Johnson",
      creditUrl: "https://unsplash.com/@steve_j",
    },
  },
  {
    slug: "how-to-choose-the-right-database-for-your-growing-business",
    title: "How to Choose the Right Database for Your Growing Business",
    date: "2026-05-25",
    readTime: "7 min read",
    excerpt: "Selecting the right database is a critical decision that impacts your company's scalability, performance, and ability to make data driven decisions. This guide walks you through the key factors to consider when evaluating database options for your growing organization.",
    category: "Data Engineering",
    tags: ["database selection", "data management", "scalability", "business growth"],
    heroImage: {
      url: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=1200&q=80",
      alt: "Server room with rows of database servers illuminated by blue lights",
      credit: "Taylor Vick",
      creditUrl: "https://unsplash.com/@tvick",
    },
  },
  {
    slug: "what-is-business-intelligence-and-how-much-does-it-cost",
    title: "What Is Business Intelligence and How Much Does It Cost?",
    date: "2026-05-18",
    readTime: "7 min read",
    excerpt: "Business intelligence transforms raw data into actionable insights that drive smarter decisions. Learn what BI actually involves, what pricing looks like for different solutions, and how to determine the right investment level for your organization.",
    category: "Business Strategy",
    tags: ["business intelligence", "BI costs", "data analytics", "reporting tools"],
    heroImage: {
      url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80",
      alt: "Modern dashboard displaying business analytics charts and graphs on a computer monitor",
      credit: "Luke Chesser",
      creditUrl: "https://unsplash.com/@lukechesser",
    },
  },
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
