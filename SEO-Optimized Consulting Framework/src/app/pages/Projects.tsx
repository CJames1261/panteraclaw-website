import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Link } from "react-router";
import { ArrowRight, FlaskConical, AudioLines, Database, Info } from "lucide-react";

export function Projects() {
  return (
    <div className="min-h-screen flex flex-col bg-black">
      <Header />

      <main className="flex-1">

        {/* Hero */}
        <section className="bg-gradient-to-br from-black to-gray-900 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-yellow-400 tracking-wide uppercase text-sm mb-4">Portfolio</p>
            <h1 className="text-4xl md:text-5xl text-white mb-6">
              Solutions Lab
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Technical demonstrations and proof of concepts built to showcase
              what's possible. Each one represents a real solution we can
              build and tailor specifically for your business.
            </p>
          </div>
        </section>

        {/* Disclaimer Banner */}
        <section className="bg-gray-900 border-y border-yellow-400/20 py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-start gap-3 text-gray-300 text-sm">
              <Info className="h-5 w-5 text-yellow-400 flex-shrink-0 mt-0.5" />
              <p>
                These are <strong className="text-white">independent technical projects</strong> built as
                examples and proof of concepts — not client work. They are designed to demonstrate
                real-world capabilities and the kinds of solutions we can deliver for your organization.
              </p>
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-16 bg-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

              {/* Project 1 — Drone Classification */}
              <div className="bg-gray-900 border border-gray-700 hover:border-yellow-400 transition-colors rounded-xl overflow-hidden">
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center">
                      <AudioLines className="h-6 w-6 text-yellow-400" />
                    </div>
                    <div>
                      <span className="text-xs text-yellow-400 uppercase tracking-wide">Proof of Concept · Machine Learning</span>
                      <h2 className="text-xl text-white">Drone Sound Classification</h2>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-6">
                    A production-grade audio classification model that identifies drones in real-time
                    using MFCCs and Mel spectrograms. Built to demonstrate how machine learning can
                    be applied to sound recognition problems — adaptable to security, industrial,
                    or environmental monitoring use cases.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {["Python", "TensorFlow", "Audio ML", "Signal Processing", "MFCCs"].map((tag) => (
                      <span key={tag} className="bg-gray-800 text-white px-3 py-1 rounded-full text-xs">{tag}</span>
                    ))}
                  </div>
                  <div className="bg-gray-800 rounded-lg p-4 mb-6">
                    <p className="text-sm text-gray-400 mb-1">What this demonstrates for your business:</p>
                    <p className="text-gray-300 text-sm">
                      High-accuracy classification models can be built for <strong className="text-white">any domain</strong> —
                      fraud detection, quality control, predictive maintenance, or custom detection systems tailored to your industry.
                    </p>
                  </div>
                  <Link
                    to="/case-study/drone-classification"
                    className="inline-flex items-center text-yellow-400 hover:text-yellow-500 transition-colors"
                  >
                    View Full Project
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>

              {/* Project 2 — NLP to SQL */}
              <div className="bg-gray-900 border border-gray-700 hover:border-yellow-400 transition-colors rounded-xl overflow-hidden">
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center">
                      <Database className="h-6 w-6 text-yellow-400" />
                    </div>
                    <div>
                      <span className="text-xs text-yellow-400 uppercase tracking-wide">Proof of Concept · AI & LLM</span>
                      <h2 className="text-xl text-white">NLP-to-SQL for the Enterprise</h2>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-6">
                    A GPU-accelerated application that lets non-technical users query complex databases
                    using plain English. No SQL knowledge required — just ask a question and get instant
                    results. Built to demonstrate how LLMs can bridge the gap between business users
                    and raw data.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {["Python", "LLM", "SQL", "NLP", "GPU Acceleration"].map((tag) => (
                      <span key={tag} className="bg-gray-800 text-white px-3 py-1 rounded-full text-xs">{tag}</span>
                    ))}
                  </div>
                  <div className="bg-gray-800 rounded-lg p-4 mb-6">
                    <p className="text-sm text-gray-400 mb-1">What this demonstrates for your business:</p>
                    <p className="text-gray-300 text-sm">
                      Your team can access data <strong className="text-white">without needing a data analyst</strong> for every question.
                      This same approach can be integrated into your existing databases and business intelligence tools.
                    </p>
                  </div>
                  <Link
                    to="/case-study/nlp-sql"
                    className="inline-flex items-center text-yellow-400 hover:text-yellow-500 transition-colors"
                  >
                    View Full Project
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gray-900 border-t border-yellow-400/20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <FlaskConical className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
            <h2 className="text-3xl text-white mb-4">See What We Can Build for You</h2>
            <p className="text-gray-300 text-lg mb-8">
              These projects are just a sample of what's possible. Every solution we build
              is tailored specifically to your business needs and goals.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center bg-yellow-400 text-black px-8 py-4 rounded-lg hover:bg-yellow-500 transition-colors text-lg font-semibold"
            >
              Let's Discuss Your Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
