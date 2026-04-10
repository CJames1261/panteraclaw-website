import { Link } from "react-router";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Shield, FileText, Cookie, Bot, Lock, Accessibility, AlertTriangle, Scale } from "lucide-react";

const legalDocs = [
  {
    icon: Shield,
    title: "Privacy Policy",
    description: "How we collect, use, and protect your personal information. Covers CCPA, GDPR, and data subject rights.",
    href: "/legal/privacy",
    tag: "Required",
    tagColor: "text-yellow-400 bg-yellow-400/10",
  },
  {
    icon: FileText,
    title: "Terms of Service",
    description: "The rules governing use of our website and services, including liability, IP ownership, and acceptable use.",
    href: "/legal/terms",
    tag: "Required",
    tagColor: "text-yellow-400 bg-yellow-400/10",
  },
  {
    icon: Cookie,
    title: "Cookie Policy",
    description: "What cookies and tracking technologies we use, why, and how to control them.",
    href: "/legal/cookies",
    tag: "Required",
    tagColor: "text-yellow-400 bg-yellow-400/10",
  },
  {
    icon: Bot,
    title: "AI Use Policy",
    description: "How PanteraClaw uses AI in its services, permitted and prohibited uses, and human oversight requirements.",
    href: "/legal/ai-policy",
    tag: "AI Services",
    tagColor: "text-blue-400 bg-blue-400/10",
  },
  {
    icon: Lock,
    title: "Security Statement",
    description: "Our technical and organizational security measures, incident response process, and shared security responsibilities.",
    href: "/legal/security",
    tag: "Trust",
    tagColor: "text-green-400 bg-green-400/10",
  },
  {
    icon: Accessibility,
    title: "Accessibility Statement",
    description: "Our commitment to WCAG 2.1 AA accessibility, known limitations, and how to report issues.",
    href: "/legal/accessibility",
    tag: "Compliance",
    tagColor: "text-purple-400 bg-purple-400/10",
  },
];

export function Legal() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gray-900 border-b border-gray-800 py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-4">
              <Scale className="h-6 w-6 text-yellow-400" />
              <span className="text-yellow-400 text-sm font-medium uppercase tracking-widest">Legal</span>
            </div>
            <h1 className="text-4xl font-bold text-white mb-4">Legal Center</h1>
            <p className="text-gray-400 text-lg max-w-2xl">
              Transparency matters. Everything governing how we operate, how we handle your data, and how we deliver AI services is documented here.
            </p>
            <p className="text-gray-600 text-sm mt-4">
              All documents are drafts pending attorney review. They represent our current best practices and intentions.
            </p>
          </div>
        </section>

        {/* Document Grid */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">

            {/* Disclaimers — featured full-width card */}
            <Link
              to="/legal/disclaimers"
              className="group flex items-center justify-between gap-6 w-full bg-orange-300/5 border border-orange-300/40 rounded-xl p-6 hover:bg-orange-300/10 hover:border-orange-300/70 transition-all"
            >
              <div className="flex items-center gap-5">
                <div className="p-3 bg-orange-300/10 rounded-lg group-hover:bg-orange-300/20 transition-colors shrink-0">
                  <AlertTriangle className="h-6 w-6 text-orange-300" />
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <h2 className="text-white font-semibold text-lg group-hover:text-orange-300 transition-colors">
                      Disclaimers
                    </h2>
                    <span className="text-xs font-medium px-2 py-0.5 rounded-full text-orange-300 bg-orange-300/10">
                      Read First
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    General, data, AI results, professional services, financial advisor, trademark, and copyright
                    disclaimers governing all content and services on this website.
                  </p>
                </div>
              </div>
              <span className="text-orange-300 text-sm font-medium whitespace-nowrap shrink-0 hidden sm:block">
                View →
              </span>
            </Link>

            {/* Remaining docs grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {legalDocs.map((doc) => {
                const Icon = doc.icon;
                return (
                  <Link
                    key={doc.href}
                    to={doc.href}
                    className="group bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-yellow-400/40 hover:bg-gray-900/80 transition-all"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="p-2 bg-gray-800 rounded-lg group-hover:bg-gray-700 transition-colors">
                        <Icon className="h-5 w-5 text-yellow-400" />
                      </div>
                      <span className={`text-xs font-medium px-2 py-1 rounded-full ${doc.tagColor}`}>
                        {doc.tag}
                      </span>
                    </div>
                    <h2 className="text-white font-semibold mb-2 group-hover:text-yellow-400 transition-colors">
                      {doc.title}
                    </h2>
                    <p className="text-gray-400 text-sm leading-relaxed">{doc.description}</p>
                  </Link>
                );
              })}
            </div>

          </div>
        </section>

        {/* Contact Strip */}
        <section className="bg-gray-900 border-t border-gray-800 py-10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="text-white font-medium">Questions about our legal policies?</p>
              <p className="text-gray-400 text-sm">We're happy to clarify anything before you engage.</p>
            </div>
            <Link
              to="/contact"
              className="px-5 py-2.5 bg-yellow-400 text-black font-semibold text-sm rounded-lg hover:bg-yellow-300 transition-colors whitespace-nowrap"
            >
              Contact Us
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
