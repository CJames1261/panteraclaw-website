import { Link } from "react-router";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import logo from "../../imports/Pantera_Claw.png";
import {
  ArrowRight,
  CheckCircle,
  Globe,
  Database,
  LayoutDashboard,
  Bot,
  BrainCircuit,
  TrendingUp,
  Shield,
  Zap,
  MapPin,
  BarChart3,
  Smartphone,
} from "lucide-react";

export function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-black">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-black via-gray-900 to-gray-800 py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center gap-12">

              {/* Left — Text & CTAs */}
              <div className="flex-1 text-left">
                <p className="text-yellow-400 tracking-wide mb-4 uppercase text-sm">
                  AI & Data Consulting · Utah / Remote
                </p>
                <h1 className="text-4xl md:text-6xl mb-6 text-white">
                  Turn Your Data Into Decisions That Drive Revenue
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 mb-10">
                  From scalable databases to autonomous AI agents, we build the
                  full data stack so you can stop guessing and start acting.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center bg-yellow-400 text-black px-8 py-4 rounded-lg hover:bg-yellow-500 transition-colors text-lg font-semibold"
                  >
                    Schedule a Free Consultation
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                  <Link
                    to="/services"
                    className="inline-flex items-center justify-center bg-transparent text-yellow-400 border-2 border-yellow-400 px-8 py-4 rounded-lg hover:bg-yellow-400/10 transition-colors text-lg"
                  >
                    See How We Work
                  </Link>
                </div>
              </div>

              {/* Right — Logo */}
              <div className="flex-1 flex items-center justify-center">
                <img
                  src={logo}
                  alt="Pantera Claw"
                  className="w-full h-auto object-fill"
                />
              </div>

            </div>
          </div>
        </section>

        {/* Trust Bar */}
        <section className="py-12 bg-black border-b border-gray-800">
          <div className="w-full px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row justify-between gap-6">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-gray-800 rounded-full mb-3">
                  <Globe className="h-7 w-7 text-yellow-400" />
                </div>
                <h3 className="text-lg mb-1 text-white">End-to-End Solutions</h3>
                <p className="text-gray-400 text-sm">
                  From web and app development to data infrastructure — we handle the full stack.
                </p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-gray-800 rounded-full mb-3">
                  <Zap className="h-7 w-7 text-yellow-400" />
                </div>
                <h3 className="text-lg mb-1 text-white">AI & LLM Integration</h3>
                <p className="text-gray-400 text-sm">
                  Bring the power of large language models and intelligent agents into your workflows.
                </p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-gray-800 rounded-full mb-3">
                  <Database className="h-7 w-7 text-yellow-400" />
                </div>
                <h3 className="text-lg mb-1 text-white">Data That Works For You</h3>
                <p className="text-gray-400 text-sm">
                  Databases, pipelines, and dashboards built to drive real decisions — not just store numbers.
                </p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-gray-800 rounded-full mb-3">
                  <TrendingUp className="h-7 w-7 text-yellow-400" />
                </div>
                <h3 className="text-lg mb-1 text-white">Advanced Analytics & ML</h3>
                <p className="text-gray-400 text-sm">
                  Predictive models and causal inference that reveal what's truly driving your business.
                </p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-gray-800 rounded-full mb-3">
                  <Shield className="h-7 w-7 text-yellow-400" />
                </div>
                <h3 className="text-lg mb-1 text-white">Built to Scale</h3>
                <p className="text-gray-400 text-sm">
                  Enterprise-grade systems designed to grow with your business without breaking down.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services — 4 Cards */}
        <section className="relative py-20 bg-gray-900 overflow-hidden">
          {/* Ghost watermark logo */}
          <div className="absolute inset-0 pointer-events-none">
            <img
              src={logo}
              alt=""
              aria-hidden="true"
              className="w-full h-full object-cover opacity-[0.15] select-none"
            />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl text-white mb-3">
                What We Build For You
              </h2>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                Five focused services that take you from idea to production.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ServiceCard
                icon={<Globe className="h-6 w-6 text-yellow-400" />}
                title="Business Web Development"
                outcome="A website that actually converts visitors into clients"
                description="High-performance websites and web apps built with React, Next.js, and Tailwind CSS — SEO-optimized and designed to grow your business."
                keywords={["React", "Next.js", "TypeScript", "Tailwind CSS"]}
                link="/services#webdev"
              />
              <ServiceCard
                icon={<Database className="h-6 w-6 text-yellow-400" />}
                title="Database Management & Optimization"
                outcome="Faster queries, lower costs, zero downtime"
                description="We design, migrate, and tune databases on Databricks, PostgreSQL, and Snowflake — so your data is always fast, reliable, and ready to scale."
                keywords={["Databricks", "PostgreSQL", "Snowflake", "PySpark ETL"]}
                link="/services#database"
              />
              <ServiceCard
                icon={<LayoutDashboard className="h-6 w-6 text-yellow-400" />}
                title="Dashboards & Visualization"
                outcome="Real-time insights your whole team can act on"
                description="Interactive Tableau, Power BI, and R Shiny dashboards that turn complex data into clear decisions — no data science degree required."
                keywords={["Tableau", "Power BI", "R Shiny", "Real-Time Dashboards"]}
                link="/services#dashboards"
              />
              <ServiceCard
                icon={<Bot className="h-6 w-6 text-yellow-400" />}
                title="Agentic Workflow Design"
                outcome="AI systems that execute, not just predict"
                description="Autonomous LLM agents built with LangGraph that plan multi-step tasks, call tools, and adapt in real-time — replacing manual processes at scale."
                keywords={["LangGraph", "LLM Orchestration", "Autonomous Agents"]}
                link="/services#agentic"
              />
              <ServiceCard
                icon={<BrainCircuit className="h-6 w-6 text-yellow-400" />}
                title="Advanced Analytics"
                outcome="Know what's happening and why it's happening"
                description="From 98%-accuracy ML models to causal inference that quantifies the true impact of your decisions — analytics that drives strategy, not just reports."
                keywords={["Causal Inference", "Machine Learning", "Predictive Analytics"]}
                link="/services#analytics"
              />
            </div>
          </div>
        </section>

        {/* Mid-Section CTA */}
        <section className="py-14 bg-gray-900 border-y border-yellow-400/20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl mb-2 text-white">Not sure where to start?</h2>
              <p className="text-gray-300 text-lg">
                Book a free 30-minute consultation and we'll map the fastest path to ROI.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center bg-yellow-400 text-black px-8 py-4 rounded-lg hover:bg-yellow-500 transition-colors text-lg whitespace-nowrap flex-shrink-0 font-semibold"
            >
              Let's Talk
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </section>

        {/* Case Studies */}
        <section className="py-20 bg-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl text-white mb-3">
                Case Studies
              </h2>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                Technical demos and proof of concepts showing what we can build for you.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <CaseStudyCard
                metric="98%"
                metricLabel="Classification Accuracy"
                title="Drone Sound Classification"
                description="Advanced audio classification using MFCCs and Mel spectrograms, achieving 98% accuracy in real-time drone identification."
                link="/case-study/drone-classification"
              />
              <CaseStudyCard
                metric="10×"
                metricLabel="Faster Data Access"
                title="NLP-to-SQL for the Enterprise"
                description="GPU-accelerated application enabling non-technical users to query complex databases using natural language — no SQL required."
                link="/case-study/nlp-sql"
              />
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-gray-900 border-t border-yellow-400/20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl mb-4 text-white">
              Ready to Put Your Data to Work?
            </h2>
            <p className="text-xl mb-8 text-gray-300">
              Let's build the systems that turn your data into a competitive advantage.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center bg-yellow-400 text-black px-8 py-4 rounded-lg hover:bg-yellow-500 transition-colors text-lg font-semibold"
            >
              Schedule Your Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />

      {/* Schema.org Markup */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "name": "Pantera Claw",
          "url": "https://panteraclaw.com",
          "description":
            "AI and data consulting — databases, dashboards, agentic workflows, and advanced analytics.",
          "areaServed": [
            { "@type": "State", "name": "Utah" },
            { "@type": "Country", "name": "United States" },
          ],
          "serviceType": [
            "Database Management & Optimization",
            "Dashboard & Visualization Development",
            "Agentic Workflow Design",
            "Advanced Analytics & Causal Inference",
          ],
        })}
      </script>
    </div>
  );
}

function ServiceCard({
  icon,
  title,
  outcome,
  description,
  keywords,
  link,
}: {
  icon: React.ReactNode;
  title: string;
  outcome: string;
  description: string;
  keywords: string[];
  link: string;
}) {
  return (
    <Link
      to={link}
      className="group bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-yellow-400 hover:shadow-lg transition-all"
    >
      <div className="flex items-center gap-3 mb-3">
        <div className="flex-shrink-0 w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center group-hover:bg-gray-600 transition-colors">
          {icon}
        </div>
        <h3 className="text-lg text-white">{title}</h3>
      </div>
      <p className="text-yellow-400 text-sm mb-2 flex items-center gap-1.5">
        <CheckCircle className="h-3.5 w-3.5" />
        {outcome}
      </p>
      <p className="text-gray-400 text-sm mb-4">{description}</p>
      <div className="flex flex-wrap gap-2">
        {keywords.map((kw) => (
          <span
            key={kw}
            className="bg-gray-700 text-white px-2.5 py-0.5 rounded text-xs"
          >
            {kw}
          </span>
        ))}
      </div>
    </Link>
  );
}

function CaseStudyCard({
  metric,
  metricLabel,
  title,
  description,
  link,
}: {
  metric: string;
  metricLabel: string;
  title: string;
  description: string;
  link: string;
}) {
  return (
    <div className="bg-gray-800 p-8 rounded-xl border border-gray-700 hover:border-yellow-400 transition-colors">
      <div className="flex items-baseline gap-2 mb-4">
        <span className="text-4xl text-yellow-400">{metric}</span>
        <span className="text-gray-400 text-sm">{metricLabel}</span>
      </div>
      <h3 className="text-xl mb-2 text-white">{title}</h3>
      <p className="text-gray-400 mb-6">{description}</p>
      <Link
        to={link}
        className="inline-flex items-center text-yellow-400 hover:text-yellow-500"
      >
        Read Case Study
        <ArrowRight className="ml-2 h-4 w-4" />
      </Link>
    </div>
  );
}

export default Home;
