import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Link } from "react-router";
import {
  ArrowRight, FlaskConical, AudioLines, Users, Info,
  Globe, Database, LayoutDashboard, Bot, TrendingUp, CheckCircle,
} from "lucide-react";
import logo from "../../imports/Pantera_Claw.png";

const highlights = [
  "Identify hidden customer groups and who to target",
  "Detect equipment faults or security threats from sound alone",
  "Turn raw data into clear, actionable business profiles",
  "AI that finds patterns your team doesn't have time to look for",
  "99%+ accuracy, results you can actually act on",
  "Real examples built on real data, not theory",
];

const services = [
  {
    id: "web",
    icon: <Globe className="h-5 w-5 text-yellow-400" />,
    label: "Web Development",
    projects: [],
  },
  {
    id: "database",
    icon: <Database className="h-5 w-5 text-yellow-400" />,
    label: "Database Management",
    projects: [],
  },
  {
    id: "dashboards",
    icon: <LayoutDashboard className="h-5 w-5 text-yellow-400" />,
    label: "Dashboards & Reporting",
    projects: [],
  },
  {
    id: "ai",
    icon: <Bot className="h-5 w-5 text-yellow-400" />,
    label: "AI & Agentic Workflows",
    projects: [],
  },
  {
    id: "analytics",
    icon: <TrendingUp className="h-5 w-5 text-yellow-400" />,
    label: "Advanced Analytics",
    projects: [
      {
        icon: <AudioLines className="h-6 w-6 text-yellow-400" />,
        title: "Sound Classification",
        desc: "Trained an AI model to listen to audio and identify exactly what it's hearing, with 99% accuracy. In your business, it could detect equipment faults, production line issues, or security threats from sound alone.",
        value: "If a problem in your operation makes a sound, AI can be trained to hear it, catching issues before they become costly.",
        link: "/case-study/drone-classification",
      },
      {
        icon: <Users className="h-6 w-6 text-yellow-400" />,
        title: "Customer Profiling",
        desc: "Used AI to analyze 530,000+ customer records and automatically discovered 5 distinct buyer types, each with its own behavior and recommended marketing strategy.",
        value: "Stop sending the same message to everyone. We find the hidden groups in your customer data so you can market smarter and increase revenue per customer.",
        link: "/case-study/customer-segmentation",
      },
    ],
  },
];

export function Projects() {
  return (
    <div className="min-h-screen flex flex-col bg-black">
      <Header />

      <main className="flex-1">

        {/* Fixed ghost watermark — stays centered as user scrolls */}
        <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-[1]">
          <img
            src={logo}
            alt=""
            aria-hidden="true"
            className="w-[600px] md:w-[700px] max-w-full opacity-[0.05] select-none mix-blend-screen"
          />
        </div>

        {/* Hero */}
        <section className="relative bg-gradient-to-br from-black to-gray-900 py-16 overflow-hidden">
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-yellow-400 tracking-wide uppercase text-sm mb-4">Solutions Lab</p>
            <h1 className="text-4xl md:text-5xl text-white mb-6">
              Real Problems. Real Results.
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Each project below is a working proof of concept built on real data,
              showing exactly what we can build and tailor for your business.
            </p>
          </div>
        </section>

        {/* Disclaimer */}
        <div className="bg-gray-900 border-b border-yellow-400/20 py-3">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-start gap-2 text-gray-400 text-sm">
              <Info className="h-4 w-4 text-yellow-400 flex-shrink-0 mt-0.5" />
              <p>
                These are <strong className="text-white">independent proof of concepts</strong> built on
                public datasets, not client work. They demonstrate the types of solutions
                we deliver for real organizations.
              </p>
            </div>
          </div>
        </div>

        {/* Highlights — quick scan */}
        <section className="py-12 bg-black border-b border-gray-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-gray-400 text-sm uppercase tracking-wide mb-6">
              What you'll find in the lab
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {highlights.map((h) => (
                <div key={h} className="flex items-start gap-2.5">
                  <CheckCircle className="h-4 w-4 text-yellow-400 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-300 text-sm">{h}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Sections */}
        <section className="py-16 bg-black">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
            {services.map(({ id, icon, label, projects }) => (
              <div key={id}>
                {/* Section header */}
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-800">
                  <div className="w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center flex-shrink-0">
                    {icon}
                  </div>
                  <h2 className="text-xl text-white font-semibold">{label}</h2>
                  {projects.length === 0 && (
                    <span className="ml-auto text-xs text-gray-600 border border-gray-800 px-3 py-1 rounded-full">
                      Coming soon
                    </span>
                  )}
                </div>

                {/* Projects */}
                {projects.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {projects.map(({ icon: pIcon, title, desc, value, link }) => (
                      <div
                        key={title}
                        className="bg-gray-900 border border-gray-700 hover:border-yellow-400 transition-colors rounded-xl p-6 flex flex-col"
                      >
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center flex-shrink-0">
                            {pIcon}
                          </div>
                          <h3 className="text-lg text-white font-semibold">{title}</h3>
                        </div>
                        <p className="text-gray-300 text-sm mb-4 flex-1">{desc}</p>
                        <div className="bg-gray-800 rounded-lg p-3 mb-5">
                          <p className="text-gray-500 text-xs mb-1">What this means for your business:</p>
                          <p className="text-gray-300 text-sm">{value}</p>
                        </div>
                        <Link
                          to={link}
                          className="inline-flex items-center text-yellow-400 hover:text-yellow-500 transition-colors text-sm font-medium"
                        >
                          View Full Project
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-600 text-sm italic">
                    Projects for this service are in progress. Check back soon.
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gray-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-black border border-yellow-400/30 rounded-2xl p-10 text-center">
              <FlaskConical className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
              <h2 className="text-3xl text-white mb-4">Don't See Your Use Case?</h2>
              <p className="text-gray-300 text-lg mb-8 max-w-xl mx-auto">
                These are just examples. Every solution we build is designed around
                your specific business problem and data. Let's talk about what's possible.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center bg-yellow-400 text-black px-8 py-4 rounded-lg hover:bg-yellow-500 transition-colors text-lg font-semibold"
              >
                Let's Discuss Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
