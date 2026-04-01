import { Link } from "react-router";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
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
} from "lucide-react";

export function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 via-indigo-50 to-white py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-blue-600 tracking-wide mb-4 uppercase text-sm">
                AI & Data Consulting · Utah / Remote
              </p>
              <h1 className="text-4xl md:text-6xl mb-6 text-gray-900">
                Turn Your Data Into Decisions That Drive Revenue
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto">
                From scalable databases to autonomous AI agents, we build the
                full data stack so you can stop guessing and start acting.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors text-lg"
                >
                  Schedule a Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center justify-center bg-white text-blue-600 border-2 border-blue-600 px-8 py-4 rounded-lg hover:bg-blue-50 transition-colors text-lg"
                >
                  See How We Work
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Bar */}
        <section className="py-12 bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-blue-100 rounded-full mb-3">
                  <TrendingUp className="h-7 w-7 text-blue-600" />
                </div>
                <h3 className="text-xl mb-1 text-gray-900">98% Model Accuracy</h3>
                <p className="text-gray-500 text-sm">
                  Production ML models delivering measurable, auditable results.
                </p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-blue-100 rounded-full mb-3">
                  <Shield className="h-7 w-7 text-blue-600" />
                </div>
                <h3 className="text-xl mb-1 text-gray-900">Enterprise-Grade Pipelines</h3>
                <p className="text-gray-500 text-sm">
                  Secure, scalable data infrastructure built for regulated industries.
                </p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-blue-100 rounded-full mb-3">
                  <Zap className="h-7 w-7 text-blue-600" />
                </div>
                <h3 className="text-xl mb-1 text-gray-900">Autonomous AI Workflows</h3>
                <p className="text-gray-500 text-sm">
                  LLM agents that plan, execute, and deliver ROI without babysitting.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services — 4 Cards */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl text-gray-900 mb-3">
                What We Build For You
              </h2>
              <p className="text-lg text-gray-500 max-w-2xl mx-auto">
                Five focused services that take you from idea to production.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ServiceCard
                icon={<Globe className="h-6 w-6 text-blue-600" />}
                title="Business Web Development"
                outcome="A website that actually converts visitors into clients"
                description="High-performance websites and web apps built with React, Next.js, and Tailwind CSS — SEO-optimized and designed to grow your business."
                keywords={["React", "Next.js", "TypeScript", "Tailwind CSS"]}
                link="/services#webdev"
              />
              <ServiceCard
                icon={<Database className="h-6 w-6 text-blue-600" />}
                title="Database Management & Optimization"
                outcome="Faster queries, lower costs, zero downtime"
                description="We design, migrate, and tune databases on Databricks, PostgreSQL, and Snowflake — so your data is always fast, reliable, and ready to scale."
                keywords={["Databricks", "PostgreSQL", "Snowflake", "PySpark ETL"]}
                link="/services#database"
              />
              <ServiceCard
                icon={<LayoutDashboard className="h-6 w-6 text-blue-600" />}
                title="Dashboards & Visualization"
                outcome="Real-time insights your whole team can act on"
                description="Interactive Tableau, Power BI, and R Shiny dashboards that turn complex data into clear decisions — no data science degree required."
                keywords={["Tableau", "Power BI", "R Shiny", "Real-Time Dashboards"]}
                link="/services#dashboards"
              />
              <ServiceCard
                icon={<Bot className="h-6 w-6 text-blue-600" />}
                title="Agentic Workflow Design"
                outcome="AI systems that execute, not just predict"
                description="Autonomous LLM agents built with LangGraph that plan multi-step tasks, call tools, and adapt in real-time — replacing manual processes at scale."
                keywords={["LangGraph", "LLM Orchestration", "Autonomous Agents"]}
                link="/services#agentic"
              />
              <ServiceCard
                icon={<BrainCircuit className="h-6 w-6 text-blue-600" />}
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
        <section className="py-14 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl mb-2">Not sure where to start?</h2>
              <p className="text-blue-100 text-lg">
                Book a free 30-minute consultation and we'll map the fastest path to ROI.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors text-lg whitespace-nowrap flex-shrink-0"
            >
              Let's Talk
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </section>

        {/* Case Studies */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl text-gray-900 mb-3">
                Proven Results
              </h2>
              <p className="text-lg text-gray-500 max-w-2xl mx-auto">
                Real projects, real metrics — see how we've delivered impact.
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

        {/* About / Credibility Strip */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl text-gray-900 mb-4">
              Built by an Engineer, Not a Sales Team
            </h2>
            <p className="text-lg text-gray-600 mb-6 max-w-3xl mx-auto">
              Pantera Claw is led by Chris James (M.S. Applied AI) — with hands-on
              experience shipping ML models, PySpark pipelines, and agentic systems
              in enterprise and government environments.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {[
                "M.S. Applied Artificial Intelligence",
                "LangGraph & LangChain",
                "Databricks & PySpark",
                "Causal Inference",
                "Computer Vision",
              ].map((tag) => (
                <span
                  key={tag}
                  className="bg-white border border-gray-200 text-gray-700 px-4 py-1.5 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex items-center justify-center text-gray-500 text-sm gap-1.5">
              <MapPin className="h-4 w-4" />
              <span>Based in Utah · Serving clients nationwide</span>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl mb-4">
              Ready to Put Your Data to Work?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Let's build the systems that turn your data into a competitive advantage.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors text-lg"
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
      className="group bg-white p-6 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all"
    >
      <div className="flex items-center gap-3 mb-3">
        <div className="flex-shrink-0 w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center group-hover:bg-blue-100 transition-colors">
          {icon}
        </div>
        <h3 className="text-lg text-gray-900">{title}</h3>
      </div>
      <p className="text-blue-600 text-sm mb-2 flex items-center gap-1.5">
        <CheckCircle className="h-3.5 w-3.5" />
        {outcome}
      </p>
      <p className="text-gray-600 text-sm mb-4">{description}</p>
      <div className="flex flex-wrap gap-2">
        {keywords.map((kw) => (
          <span
            key={kw}
            className="bg-gray-50 text-gray-500 px-2.5 py-0.5 rounded text-xs"
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
    <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 hover:border-blue-300 transition-colors">
      <div className="flex items-baseline gap-2 mb-4">
        <span className="text-4xl text-blue-600">{metric}</span>
        <span className="text-gray-500 text-sm">{metricLabel}</span>
      </div>
      <h3 className="text-xl mb-2 text-gray-900">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      <Link
        to={link}
        className="inline-flex items-center text-blue-600 hover:text-blue-700"
      >
        Read Case Study
        <ArrowRight className="ml-2 h-4 w-4" />
      </Link>
    </div>
  );
}

export default Home;
