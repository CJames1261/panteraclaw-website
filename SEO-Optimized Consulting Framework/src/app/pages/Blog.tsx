import { Link } from "react-router";
import { Helmet } from "react-helmet-async";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { POST_META } from "./blog/posts/index";
import logo from "../../imports/Pantera_Claw.webp";
import readingPanther from "../../imports/reading_panther.webp";

export function Blog() {
  const featured = POST_META.find(p => p.featured) ?? POST_META[0];
  const rest = POST_META.filter(p => p.slug !== featured?.slug);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Helmet>
        <title>Blog | Pantera Claw</title>
        <meta name="description" content="Practical guides on data analytics, AI, and business intelligence — written for business owners and technical teams. Learn how to make smarter decisions with your data." />
      </Helmet>

      <Header />

      {/* Ghost watermark */}
      <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-[1]">
        <img src={logo} alt="" aria-hidden="true" loading="lazy" decoding="async" className="w-[600px] md:w-[700px] max-w-full opacity-[0.05] select-none mix-blend-screen" />
      </div>

      <main className="flex-1">

        {/* ── Hero ──────────────────────────────────────────────────────────── */}
        <section className="bg-gray-900 border-b border-gray-800 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-start gap-8">
              <div>
                <p className="text-yellow-400 text-sm uppercase tracking-widest font-semibold mb-3">
                  Insights & Articles
                </p>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                  The Pantera Claw Blog
                </h1>
                <p className="text-gray-400 text-lg max-w-2xl">
                  Practical guides on data analytics, AI, and business intelligence —
                  written for business owners and technical teams alike.
                </p>
              </div>
              <img
                src={readingPanther}
                alt="Pantera Claw reading"
                className="hidden md:block h-40 lg:h-52 w-auto object-contain flex-shrink-0 drop-shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* ── Posts ─────────────────────────────────────────────────────────── */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            {POST_META.length === 0 ? (
              <div className="text-center py-24 text-gray-500">
                <p className="text-lg">No posts yet — check back soon.</p>
              </div>
            ) : (
              <>
                {/* Featured post */}
                {featured && (
                  <div className="mb-16">
                    <p className="text-xs uppercase tracking-widest text-yellow-400 font-semibold mb-5">
                      Featured Post
                    </p>
                    <Link
                      to={`/blog/${featured.slug}`}
                      className="group block bg-gray-900 border border-gray-800 hover:border-yellow-400/50 rounded-2xl p-8 md:p-10 transition-all duration-200 hover:bg-gray-900/80"
                    >
                      <div className="flex flex-wrap items-center gap-3 mb-4">
                        <span className="text-xs font-semibold px-3 py-1 rounded-full bg-yellow-400/10 text-yellow-400 border border-yellow-400/30 uppercase tracking-wider">
                          {featured.category}
                        </span>
                        <span className="flex items-center gap-1.5 text-xs text-gray-400">
                          <Calendar className="h-3 w-3" />
                          {new Date(featured.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
                        </span>
                        <span className="flex items-center gap-1.5 text-xs text-gray-400">
                          <Clock className="h-3 w-3" />{featured.readTime}
                        </span>
                      </div>
                      <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 group-hover:text-yellow-400 transition-colors leading-tight">
                        {featured.title}
                      </h2>
                      <p className="text-gray-400 text-base mb-5 max-w-3xl leading-relaxed">
                        {featured.excerpt}
                      </p>
                      <span className="inline-flex items-center gap-2 text-yellow-400 text-sm font-semibold">
                        Read Article
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </Link>
                  </div>
                )}

                {/* All other posts grid */}
                {rest.length > 0 && (
                  <>
                    <p className="text-xs uppercase tracking-widest text-gray-500 font-semibold mb-6">
                      All Posts
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      {rest.map(post => (
                        <Link
                          key={post.slug}
                          to={`/blog/${post.slug}`}
                          className="group flex flex-col bg-gray-900 border border-gray-800 hover:border-yellow-400/40 rounded-xl p-6 transition-all duration-200"
                        >
                          <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-yellow-400/10 text-yellow-400 border border-yellow-400/20 uppercase tracking-wider self-start mb-4">
                            {post.category}
                          </span>
                          <h3 className="text-white font-semibold text-lg leading-snug mb-3 group-hover:text-yellow-400 transition-colors flex-1">
                            {post.title}
                          </h3>
                          <p className="text-gray-400 text-sm mb-5 line-clamp-3 leading-relaxed">
                            {post.excerpt}
                          </p>
                          <div className="flex items-center justify-between text-xs text-gray-500 pt-4 border-t border-gray-800 mt-auto">
                            <span className="flex items-center gap-1.5">
                              <Calendar className="h-3 w-3" />
                              {new Date(post.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                            </span>
                            <span className="flex items-center gap-1.5">
                              <Clock className="h-3 w-3" />{post.readTime}
                            </span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </>
                )}
              </>
            )}
          </div>
        </section>

        {/* ── Newsletter / CTA strip ─────────────────────────────────────────── */}
        <section className="bg-gray-900 border-t border-gray-800 py-14">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-3">Want insights delivered to your inbox?</h2>
            <p className="text-gray-400 mb-6">
              We publish practical guides on data, AI, and analytics every week.
              Reach out and we'll keep you in the loop.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition-colors text-sm"
            >
              Get in Touch
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
