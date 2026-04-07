import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Zap, Target, Shield, Cpu, Globe, Database, Bot, Smartphone } from "lucide-react";
import logo from "../../imports/Pantera_Claw.png";

export function About() {
  return (
    <div className="min-h-screen flex flex-col bg-black">
      <Header />

      <main className="flex-1">
        {/* Fixed ghost watermark — stays centered as user scrolls */}
        <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-[1]">
          <img src={logo} alt="" aria-hidden="true" className="w-[600px] md:w-[700px] max-w-full opacity-[0.05] select-none mix-blend-screen" />
        </div>

        {/* Hero — Brand Story */}
        <section className="relative bg-gradient-to-br from-black via-gray-900 to-gray-800 py-20 overflow-hidden">
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-yellow-400 tracking-wide uppercase text-sm mb-4">Our Story</p>
            <h1 className="text-4xl md:text-5xl text-white mb-6">
              Built to Strike. Engineered to Perform.
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The panther doesn't hesitate. It moves with precision, adapts to any environment,
              and strikes with purpose. That's the standard we hold ourselves to at Pantera Claw —
              and it's the standard we bring to every business we work with.
            </p>
          </div>
        </section>

        {/* The Name & Symbol */}
        <section className="py-16 bg-black">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <img src={logo} alt="Pantera Claw logo" className="w-full max-w-sm mx-auto h-auto object-contain" />
              </div>
              <div>
                <h2 className="text-3xl text-white mb-6">Why the Panther?</h2>
                <p className="text-gray-300 text-lg mb-4">
                  In nature, the panther is the apex predator of adaptability — thriving in jungles,
                  mountains, and urban landscapes alike. In business, that translates to one thing:
                  <span className="text-yellow-400"> the ability to evolve faster than the competition.</span>
                </p>
                <p className="text-gray-300 text-lg mb-4">
                  At Pantera Claw, we combine that predatory precision with cutting-edge technology.
                  The claw represents our ability to cut through complexity — outdated systems,
                  inefficient workflows, and missed opportunities — and replace them with solutions
                  that are fast, sharp, and built to last.
                </p>
                <p className="text-gray-300 text-lg">
                  We don't just build software. We help businesses hunt smarter.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="py-16 bg-gray-900 border-y border-yellow-400/20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl text-white mb-6">Our Mission</h2>
            <p className="text-xl text-gray-300 mb-6">
              Enterprise-grade technology has historically been out of reach for small and
              mid-size businesses — too expensive, too complex, too slow to deploy.
            </p>
            <p className="text-xl text-yellow-400">
              Pantera Claw exists to change that.
            </p>
            <p className="text-xl text-gray-300 mt-6">
              We bring the same caliber of AI systems, data infrastructure, and digital solutions
              used by the world's largest organizations — and we make them accessible, affordable,
              and actionable for businesses ready to grow.
            </p>
          </div>
        </section>

        {/* What We Do */}
        <section className="py-16 bg-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl text-white mb-3">How We Help Businesses Win</h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                We integrate the technologies that define the next decade of business —
                so you're not catching up, you're setting the pace.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

              <div className="bg-gray-900 border border-gray-700 hover:border-yellow-400 transition-colors rounded-xl p-8">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center mr-4">
                    <Globe className="h-6 w-6 text-yellow-400" />
                  </div>
                  <h3 className="text-xl text-white">Web Development</h3>
                </div>
                <p className="text-gray-300">
                  Fast, modern, SEO-optimized websites and web applications built with React
                  and the latest frameworks. Your digital storefront should work as hard as you do —
                  converting visitors into clients around the clock.
                </p>
              </div>

              <div className="bg-gray-900 border border-gray-700 hover:border-yellow-400 transition-colors rounded-xl p-8">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center mr-4">
                    <Database className="h-6 w-6 text-yellow-400" />
                  </div>
                  <h3 className="text-xl text-white">Database Management</h3>
                </div>
                <p className="text-gray-300">
                  Your data is your most valuable asset — we make sure you can actually use it.
                  We design, optimize, and manage databases on PostgreSQL, Databricks, and Snowflake
                  so your systems are fast, reliable, and scalable.
                </p>
              </div>

              <div className="bg-gray-900 border border-gray-700 hover:border-yellow-400 transition-colors rounded-xl p-8">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center mr-4">
                    <Smartphone className="h-6 w-6 text-yellow-400" />
                  </div>
                  <h3 className="text-xl text-white">App Development</h3>
                </div>
                <p className="text-gray-300">
                  From internal tools to customer-facing applications, we build software that
                  solves real business problems. Clean interfaces, reliable performance, and
                  built to scale with your growth.
                </p>
              </div>

              <div className="bg-gray-900 border border-gray-700 hover:border-yellow-400 transition-colors rounded-xl p-8">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center mr-4">
                    <Bot className="h-6 w-6 text-yellow-400" />
                  </div>
                  <h3 className="text-xl text-white">AI Integration</h3>
                </div>
                <p className="text-gray-300">
                  AI isn't the future — it's right now. We integrate autonomous agents,
                  machine learning models, and intelligent workflows directly into your
                  existing business operations so you can do more with less.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* Brand Values */}
        <section className="py-16 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl text-white mb-3">The Pantera Claw Standard</h2>
              <p className="text-gray-400 text-lg">Four principles that drive everything we build.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-6">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-gray-800 rounded-full mb-4">
                  <Zap className="h-7 w-7 text-yellow-400" />
                </div>
                <h3 className="text-white text-lg mb-2">Agility</h3>
                <p className="text-gray-400 text-sm">We move fast, adapt faster, and deliver without dragging our feet.</p>
              </div>
              <div className="text-center p-6">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-gray-800 rounded-full mb-4">
                  <Target className="h-7 w-7 text-yellow-400" />
                </div>
                <h3 className="text-white text-lg mb-2">Precision</h3>
                <p className="text-gray-400 text-sm">Every solution is purpose-built for your specific problem — no bloat, no fluff.</p>
              </div>
              <div className="text-center p-6">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-gray-800 rounded-full mb-4">
                  <Shield className="h-7 w-7 text-yellow-400" />
                </div>
                <h3 className="text-white text-lg mb-2">Reliability</h3>
                <p className="text-gray-400 text-sm">We build systems that hold up under pressure — tested, scalable, and battle-ready.</p>
              </div>
              <div className="text-center p-6">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-gray-800 rounded-full mb-4">
                  <Cpu className="h-7 w-7 text-yellow-400" />
                </div>
                <h3 className="text-white text-lg mb-2">Innovation</h3>
                <p className="text-gray-400 text-sm">We stay on the cutting edge so our clients are always ahead of the curve.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-black border-t border-yellow-400/20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl text-white mb-4">Ready to Work With Us?</h2>
            <p className="text-gray-300 text-lg mb-8">
              Let's talk about where your business is headed and how we can help you get there faster.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center bg-yellow-400 text-black px-8 py-4 rounded-lg hover:bg-yellow-500 transition-colors text-lg font-semibold"
            >
              Schedule a Free Consultation
            </a>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
