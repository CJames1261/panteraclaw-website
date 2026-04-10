import { Link } from "react-router";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import type { PostMeta } from "../pages/blog/posts/index";

interface BlogLayoutProps {
  meta: PostMeta;
  children: React.ReactNode;
}

export function BlogLayout({ meta, children }: BlogLayoutProps) {
  const formattedDate = new Date(meta.date).toLocaleDateString("en-US", {
    year: "numeric", month: "long", day: "numeric",
  });

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Helmet>
        <title>{meta.title} | Pantera Claw</title>
        <meta name="description" content={meta.excerpt} />
      </Helmet>

      <Header />

      <main className="flex-1">
        {/* Article header band */}
        <div className="bg-gray-900 border-b border-gray-800 py-10">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-xs text-gray-500 mb-6">
              <Link to="/" className="hover:text-yellow-400 transition-colors">Home</Link>
              <span>/</span>
              <Link to="/blog" className="hover:text-yellow-400 transition-colors">Blog</Link>
              <span>/</span>
              <span className="text-gray-400 truncate max-w-[200px]">{meta.title}</span>
            </nav>

            {/* Category + date + read time */}
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-yellow-400/10 text-yellow-400 border border-yellow-400/30 uppercase tracking-wider">
                {meta.category}
              </span>
              <span className="flex items-center gap-1.5 text-xs text-gray-400">
                <Calendar className="h-3 w-3" />{formattedDate}
              </span>
              <span className="flex items-center gap-1.5 text-xs text-gray-400">
                <Clock className="h-3 w-3" />{meta.readTime}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-6">
              {meta.title}
            </h1>

            {/* Author */}
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-yellow-400/15 border border-yellow-400/40 flex items-center justify-center text-yellow-400 text-xs font-bold shrink-0">
                PC
              </div>
              <div>
                <p className="text-sm text-white font-medium">Pantera Claw</p>
                <p className="text-xs text-gray-400">AI & Data Consulting</p>
              </div>
            </div>
          </div>
        </div>

        {/* Hero image */}
        {meta.heroImage && (
          <div className="w-full max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
            <figure className="relative rounded-xl overflow-hidden border border-gray-800">
              <img
                src={meta.heroImage.url}
                alt={meta.heroImage.alt}
                className="w-full h-64 md:h-80 object-cover"
                loading="eager"
              />
              {meta.heroImage.credit && (
                <figcaption className="absolute bottom-0 right-0 bg-black/60 text-gray-400 text-xs px-2 py-1 rounded-tl">
                  Photo by{" "}
                  {meta.heroImage.creditUrl ? (
                    <a
                      href={meta.heroImage.creditUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline hover:text-white transition-colors"
                    >
                      {meta.heroImage.credit}
                    </a>
                  ) : (
                    meta.heroImage.credit
                  )}{" "}
                  on{" "}
                  <a
                    href="https://unsplash.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-white transition-colors"
                  >
                    Unsplash
                  </a>
                </figcaption>
              )}
            </figure>
          </div>
        )}

        {/* Article body */}
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="
            text-gray-300 leading-relaxed
            [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-white [&_h2]:mt-12 [&_h2]:mb-5
            [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:text-yellow-400 [&_h3]:mt-8 [&_h3]:mb-3
            [&_p]:text-gray-300 [&_p]:leading-relaxed [&_p]:my-5 [&_p]:text-base
            [&_ul]:my-5 [&_ul]:space-y-2 [&_ul]:list-disc [&_ul]:pl-6
            [&_ol]:my-5 [&_ol]:space-y-2 [&_ol]:list-decimal [&_ol]:pl-6
            [&_li]:text-gray-300 [&_li]:leading-relaxed [&_li]:text-base
            [&_strong]:text-white [&_strong]:font-semibold
            [&_a]:text-yellow-400 [&_a]:underline-offset-2 hover:[&_a]:underline
            [&_blockquote]:border-l-4 [&_blockquote]:border-yellow-400/50 [&_blockquote]:pl-5 [&_blockquote]:my-8 [&_blockquote]:text-gray-400 [&_blockquote]:italic [&_blockquote]:text-lg
            [&_hr]:border-gray-800 [&_hr]:my-10
            [&_img]:rounded-xl [&_img]:w-full [&_img]:my-8 [&_img]:border [&_img]:border-gray-800 [&_img]:object-cover
            [&_figure]:my-8 [&_figcaption]:text-xs [&_figcaption]:text-gray-500 [&_figcaption]:text-center [&_figcaption]:mt-2
          ">
            {children}
          </div>

          {/* Tags */}
          {meta.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-10 pt-8 border-t border-gray-800">
              {meta.tags.map(tag => (
                <span
                  key={tag}
                  className="flex items-center gap-1.5 text-xs px-3 py-1 bg-gray-900 text-gray-400 rounded-full border border-gray-700"
                >
                  <Tag className="h-3 w-3" />{tag}
                </span>
              ))}
            </div>
          )}

          {/* CTA */}
          <div className="mt-12 p-8 rounded-2xl bg-yellow-400/5 border border-yellow-400/20 text-center">
            <p className="text-white font-bold text-xl mb-2">Ready to put your data to work?</p>
            <p className="text-gray-400 text-sm mb-6 max-w-md mx-auto">
              Talk to us about adding analytics, dashboards, or AI to your business — no jargon, no obligation.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition-colors text-sm"
            >
              Schedule a Free Consultation
            </Link>
          </div>

          {/* Back to blog */}
          <div className="mt-10">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-yellow-400 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Blog
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
