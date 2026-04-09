import { Link } from "react-router";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { SegmentationShowcase } from "../components/SegmentationShowcase";
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
        {/* Fixed ghost watermark — stays centered as user scrolls */}
        <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-[1]">
          <img src={logo} alt="" aria-hidden="true" className="w-[600px] md:w-[700px] max-w-full opacity-[0.05] select-none mix-blend-screen" />
        </div>

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-black via-gray-900 to-gray-800 py-20 md:py-13">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center gap-12">

              {/* Left — Text & CTAs */}
              <div className="flex-1 text-left">
                <p className="text-yellow-400 tracking-wide mb-4 uppercase text-sm">
                  AI & Data Consulting · Utah / Remote
                </p>
                <h1 className="text-4xl md:text-6xl mb-6 text-white">
                  We don't build for where you are, we build for where you're going.
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 mb-10">
                  From data ingestion and scalable databases to AI-powered analytics,
                  we turn your data into insights that drive real business value.
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

        {/* Services — Banner */}
        <section className="py-5 bg-black border-b border-gray-800">
          <div className="w-full px-4 sm:px-6 lg:px-8">
            <h2 className="text-center text-2xl md:text-3xl text-white mb-5">Services</h2>
            <div className="flex flex-col sm:flex-row justify-between gap-6">
              <Link to="/services#webdev" className="text-center group flex-1">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-gray-800 rounded-full mb-3 group-hover:bg-gray-700 transition-colors">
                  <Globe className="h-7 w-7 text-yellow-400" />
                </div>
                <h3 className="text-lg mb-1 text-white">Business Web Development</h3>
                <p className="text-gray-400 text-sm">
                  A website that actually converts visitors into clients.
                </p>
              </Link>
              <Link to="/services#database" className="text-center group flex-1">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-gray-800 rounded-full mb-3 group-hover:bg-gray-700 transition-colors">
                  <Database className="h-7 w-7 text-yellow-400" />
                </div>
                <h3 className="text-lg mb-1 text-white">Database Management</h3>
                <p className="text-gray-400 text-sm">
                  Faster queries, lower costs, zero downtime.
                </p>
              </Link>
              <Link to="/services#dashboards" className="text-center group flex-1">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-gray-800 rounded-full mb-3 group-hover:bg-gray-700 transition-colors">
                  <LayoutDashboard className="h-7 w-7 text-yellow-400" />
                </div>
                <h3 className="text-lg mb-1 text-white">Dashboards & Visualization</h3>
                <p className="text-gray-400 text-sm">
                  Real-time insights your whole team can act on.
                </p>
              </Link>
              <Link to="/services#agentic" className="text-center group flex-1">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-gray-800 rounded-full mb-3 group-hover:bg-gray-700 transition-colors">
                  <Bot className="h-7 w-7 text-yellow-400" />
                </div>
                <h3 className="text-lg mb-1 text-white">Agentic Workflow Design</h3>
                <p className="text-gray-400 text-sm">
                  AI systems that execute, not just predict.
                </p>
              </Link>
              <Link to="/services#analytics" className="text-center group flex-1">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-gray-800 rounded-full mb-3 group-hover:bg-gray-700 transition-colors">
                  <BrainCircuit className="h-7 w-7 text-yellow-400" />
                </div>
                <h3 className="text-lg mb-1 text-white">Advanced Analytics</h3>
                <p className="text-gray-400 text-sm">
                  Know what's happening and why it's happening.
                </p>
              </Link>
            </div>
          </div>
        </section>

        {/* ── End-to-End Solutions ─────────────────────────────────────────── */}
        <section className="py-20 bg-gray-900 border-t border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-yellow-400 text-3xl uppercase tracking-widest md:text-4xl mb-4 text-center">
              End-to-End Solutions
            </p>
            {/* Text row */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-12">
              <div>
                <h2 className="text-3xl md:text-4xl text-white mb-4 leading-tight">
                  We own the entire pipeline, from{" "}
                  <span className="text-blue-400">raw data to business intelligence</span>
                </h2>
                <p className="text-gray-400 text-lg">
                  Most vendors hand you one piece of the puzzle. We build the whole thing:
                  ingesting your scattered data, cleaning and modeling it, storing it in a
                  scalable database, and delivering it through dashboards your team actually uses.
                </p>
              </div>
              <div className="flex flex-col justify-between gap-6">
                <ul className="space-y-3">
                  {[
                    "No handoffs, no gaps. One team owns the full stack.",
                    "Raw files to production-ready database in days, not months",
                    "Dashboards that update automatically as new data arrives",
                  ].map(item => (
                    <li key={item} className="flex items-start gap-3 text-gray-300">
                      <CheckCircle className="h-5 w-5 text-blue-400 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/services#database"
                  className="inline-flex items-center gap-2 bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition-colors self-start"
                >
                  See Our Data Services
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
            {/* Full-width visualization */}
            <div className="flex flex-col items-center gap-2 w-full">
              <p className="text-white text-sm font-semibold">Data Pipeline Visualization</p>
              <div style={{ width: "100%", aspectRatio: "1100 / 580", borderRadius: 12, border: "1px solid #374151", background: "#0b1221", overflow: "hidden" }}>
                <iframe
                  src="/database-preview.html"
                  scrolling="no"
                  style={{ width: "100%", height: "100%", border: "none", display: "block" }}
                  title="Data Pipeline"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── Data That Works For You ──────────────────────────────────────────── */}
        <section className="py-20 bg-black border-t border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-yellow-400 text-3xl uppercase tracking-widest md:text-4xl mb-4 text-center">
              Data That Works For You
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Text LEFT */}
              <div>
                <h2 className="text-3xl md:text-4xl text-white mb-4 leading-tight">
                  Databases and dashboards built to{" "}
                  <span className="text-teal-400">drive decisions, not just store numbers</span>
                </h2>
                <p className="text-gray-400 text-lg mb-6">
                  Your data should answer questions the moment you ask them. We design and optimize
                  databases for query speed, build ETL pipelines that keep everything current, and
                  deliver dashboards your whole team can interpret and act on.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    "Query times cut by up to 10× with proper indexing and schema design",
                    "Automated pipelines that refresh your data without manual exports",
                    "One source of truth. No more conflicting spreadsheet versions.",
                  ].map(item => (
                    <li key={item} className="flex items-start gap-3 text-gray-300">
                      <CheckCircle className="h-5 w-5 text-teal-400 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/services#dashboards"
                  className="inline-flex items-center gap-2 bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition-colors"
                >
                  See Dashboards & Visualization
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
              {/* Viz RIGHT — KPI dashboard mockup */}
              <div className="flex flex-col items-center gap-2">
                <p className="text-white text-sm font-semibold">Live Dashboard Preview</p>
                <div className="w-full rounded-xl border border-gray-700 bg-[#0b1221] p-5" style={{ minHeight: 300 }}>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-white text-sm font-semibold">Business Overview</span>
                    <span className="text-xs text-teal-400 bg-teal-400/10 border border-teal-400/30 rounded px-2 py-0.5">● Live</span>
                  </div>
                  <div className="grid grid-cols-3 gap-3 mb-5">
                    {[
                      { label: "Revenue", value: "$2.4M", change: "+18%", color: "text-teal-400" },
                      { label: "Active Users", value: "8,471", change: "+6%", color: "text-blue-400" },
                      { label: "Conversion", value: "4.2%", change: "+1.1%", color: "text-yellow-400" },
                    ].map(kpi => (
                      <div key={kpi.label} className="bg-gray-800/60 rounded-lg p-3 border border-gray-700">
                        <p className="text-gray-500 text-xs mb-1">{kpi.label}</p>
                        <p className={`text-lg font-bold ${kpi.color}`}>{kpi.value}</p>
                        <p className="text-green-400 text-xs">{kpi.change} vs last month</p>
                      </div>
                    ))}
                  </div>
                  <div className="bg-gray-800/40 rounded-lg p-3 border border-gray-700">
                    <p className="text-gray-500 text-xs mb-2">Weekly Revenue Trend</p>
                    <div className="flex items-end gap-1.5 h-16">
                      {[40, 55, 48, 70, 62, 85, 78].map((h, i) => (
                        <div key={i} className="flex-1 bg-teal-400/80 rounded-t" style={{ height: `${h}%` }} />
                      ))}
                    </div>
                    <div className="flex justify-between mt-1">
                      {["Mon","Tue","Wed","Thu","Fri","Sat","Sun"].map(d => (
                        <span key={d} className="text-gray-600 text-xs">{d}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <SegmentationShowcase />

        {/* ── AI & LLM Integration ─────────────────────────────────────────────── */}
        <section className="py-20 bg-black border-t border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-yellow-400 text-3xl uppercase tracking-widest md:text-4xl mb-4 text-center">
              AI & LLM Integration
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Viz LEFT */}
              <div className="flex flex-col items-center gap-2">
                <p className="text-white text-sm font-semibold">Agentic Workflow Demo</p>
                <div className="w-full rounded-xl border border-gray-700 bg-[#0b1221] p-5 font-mono text-sm" style={{ minHeight: 300 }}>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="w-3 h-3 rounded-full bg-red-500" />
                    <span className="w-3 h-3 rounded-full bg-yellow-400" />
                    <span className="w-3 h-3 rounded-full bg-green-400" />
                    <span className="ml-2 text-gray-500 text-xs">agent_workflow.py</span>
                  </div>
                  <div className="space-y-3">
                    <div className="flex gap-3">
                      <span className="text-gray-500">User</span>
                      <span className="text-gray-300">"Summarize last week's support tickets and flag urgent issues."</span>
                    </div>
                    <div className="border-l-2 border-purple-500 pl-3 space-y-1.5">
                      <p className="text-purple-400">🤖 Agent — planning steps...</p>
                      <p className="text-gray-500 text-xs">→ tool_call: fetch_tickets(days=7)</p>
                      <p className="text-green-400 text-xs">✓ Retrieved 312 tickets</p>
                      <p className="text-gray-500 text-xs">→ tool_call: classify_urgency(tickets)</p>
                      <p className="text-green-400 text-xs">✓ 14 flagged as urgent</p>
                      <p className="text-gray-500 text-xs">→ tool_call: generate_summary()</p>
                      <p className="text-green-400 text-xs">✓ Summary ready</p>
                    </div>
                    <div className="bg-purple-900/30 border border-purple-700/50 rounded p-3">
                      <p className="text-purple-300 text-xs font-bold mb-1">Agent Output</p>
                      <p className="text-gray-300 text-xs">312 tickets reviewed. 14 urgent issues identified: 9 relate to payment failures, 5 to login errors. Recommend immediate escalation to engineering.</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Text RIGHT */}
              <div>
                <h2 className="text-3xl md:text-4xl text-white mb-4 leading-tight">
                  AI agents that{" "}
                  <span className="text-purple-400">execute multi-step tasks</span>{" "}
                  without supervision
                </h2>
                <p className="text-gray-400 text-lg mb-6">
                  LLMs alone answer questions. Our agentic workflows actually do the work,
                  pulling data, calling APIs, making decisions, and delivering results
                  automatically, so your team focuses on strategy instead of busywork.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    "Replace repetitive analyst tasks with autonomous agents",
                    "Integrate LLMs directly into your existing tools and APIs",
                    "Agents that adapt in real-time, not just follow a script",
                  ].map(item => (
                    <li key={item} className="flex items-start gap-3 text-gray-300">
                      <CheckCircle className="h-5 w-5 text-purple-400 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/services#agentic"
                  className="inline-flex items-center gap-2 bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition-colors"
                >
                  See Agentic Workflow Design
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── Advanced Analytics & ML ──────────────────────────────────────────── */}
        <section className="py-20 bg-gray-900 border-t border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-yellow-400 text-3xl uppercase tracking-widest md:text-4xl mb-4 text-center">
              Advanced Analytics & ML
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Viz LEFT — model results */}
              <div className="flex flex-col items-center gap-2">
                <p className="text-white text-sm font-semibold">Model Performance Dashboard</p>
                <div className="w-full rounded-xl border border-gray-700 bg-[#0b1221] p-5" style={{ minHeight: 300 }}>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-white text-sm font-semibold">Customer Churn Prediction</span>
                    <span className="text-xs text-violet-400 bg-violet-400/10 border border-violet-400/30 rounded px-2 py-0.5">ML Model v2.1</span>
                  </div>
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    {[
                      { label: "Accuracy",  value: "98.2%", color: "text-violet-400" },
                      { label: "Precision", value: "97.8%", color: "text-blue-400" },
                      { label: "Recall",    value: "98.5%", color: "text-green-400" },
                      { label: "F1 Score",  value: "98.1%", color: "text-yellow-400" },
                    ].map(m => (
                      <div key={m.label} className="bg-gray-800/60 rounded-lg p-3 border border-gray-700">
                        <p className="text-gray-500 text-xs mb-1">{m.label}</p>
                        <p className={`text-xl font-bold ${m.color}`}>{m.value}</p>
                      </div>
                    ))}
                  </div>
                  <div className="bg-gray-800/40 rounded-lg p-3 border border-gray-700">
                    <p className="text-gray-500 text-xs mb-2">Top Predictive Features</p>
                    {[
                      { label: "Days since last purchase", pct: 88 },
                      { label: "Support ticket frequency",  pct: 74 },
                      { label: "Monthly spend trend",       pct: 61 },
                      { label: "Login frequency",           pct: 45 },
                    ].map(f => (
                      <div key={f.label} className="flex items-center gap-3 mb-1.5">
                        <span className="text-gray-400 text-xs w-44 truncate">{f.label}</span>
                        <div className="flex-1 bg-gray-700 rounded h-1.5">
                          <div className="bg-violet-400 rounded h-1.5" style={{ width: `${f.pct}%` }} />
                        </div>
                        <span className="text-violet-400 text-xs w-8 text-right">{f.pct}%</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {/* Text RIGHT */}
              <div>
                <h2 className="text-3xl md:text-4xl text-white mb-4 leading-tight">
                  Predictive models that reveal{" "}
                  <span className="text-violet-400">what's truly driving your business</span>
                </h2>
                <p className="text-gray-400 text-lg mb-6">
                  Reporting tells you what happened. Our machine learning and causal inference
                  tells you why, and what will happen next. We build models that turn
                  historical data into forward-looking strategy.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    "98%+ accuracy ML models trained on your actual business data",
                    "Causal inference that isolates what truly moves the needle",
                    "Forecasts and recommendations your team can act on immediately",
                  ].map(item => (
                    <li key={item} className="flex items-start gap-3 text-gray-300">
                      <CheckCircle className="h-5 w-5 text-violet-400 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/services#analytics"
                  className="inline-flex items-center gap-2 bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition-colors"
                >
                  See Advanced Analytics
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        
        {/* CTA */}
        <section className="py-20 bg-black border-t border-yellow-400/20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl mb-4 text-white">
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-8 text-gray-300">
              Whether you know exactly what you need or aren't sure where to begin,
              book a free consultation and we'll map out the right solution for your business.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center bg-yellow-400 text-black px-8 py-4 rounded-lg hover:bg-yellow-500 transition-colors text-lg font-semibold"
            >
              Schedule a Free Consultation
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
