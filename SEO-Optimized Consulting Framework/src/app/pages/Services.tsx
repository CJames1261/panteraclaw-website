import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Link } from "react-router";
import {
  Database,
  ChevronDown,
  ChevronRight,
  ArrowRight,
  CheckCircle,
  Server,
  Code,
  Layers,
  Bot,
  BrainCircuit,
  BarChart3,
  Cpu,
  Shield,
  Monitor,
  Workflow,
  Zap,
  ShieldCheck,
  Search,
  Sparkles,
  LayoutDashboard,
  Eye,
  LineChart,
  Users,
  TrendingUp,
  Target,
  FlaskConical,
  AudioLines,
  HelpCircle,
  ThumbsUp,
  ThumbsDown,
  Activity,
  Globe,
  Palette,
  Smartphone,
  Gauge,
  X,
} from "lucide-react";
import { useState } from "react";

import logo from "../../imports/Pantera_Claw.webp";
import segImg1 from "../../imports/image.png";
import segImg2 from "../../imports/image-2.png";
import segImg3 from "../../imports/image-3.png";
import segImg4 from "../../imports/image-1.png";
import shinyImg1 from "../../imports/image-4.png";
import shinyImg2 from "../../imports/image-5.png";
import tableauImg1 from "../../imports/image-7.png";
import tableauImg2 from "../../imports/image-8.png";
import powerbiImg1 from "../../imports/image-9.png";
import powerbiImg2 from "../../imports/image-10.png";

interface PlatformCardProps {
  name: string;
  icon: React.ReactNode;
  languages: string[];
  description: string;
  children?: React.ReactNode;
}

function PlatformCard({ name, icon, languages, description, children }: PlatformCardProps) {
  return (
    <div className="bg-gray-900 border border-gray-700 rounded-lg p-6 hover:shadow-lg hover:border-yellow-400 transition-all">
      <div className="flex items-center mb-3">
        {icon}
        <h4 className="text-lg ml-3 text-white">{name}</h4>
      </div>
      <p className="text-gray-400 text-sm mb-4">{description}</p>
      <div className="flex flex-wrap gap-2">
        {languages.map((lang) => (
          <span
            key={lang}
            className="bg-gray-800 text-white px-3 py-1 rounded-full text-xs"
          >
            {lang}
          </span>
        ))}
      </div>
      {children}
    </div>
  );
}

function ShinyExamples() {
  const [showExamples, setShowExamples] = useState(false);
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);
  return (
    <div className="mt-4 border-t border-gray-800 pt-4">
      <button
        onClick={() => setShowExamples(!showExamples)}
        className="flex items-center text-sm text-emerald-400 hover:text-emerald-300 transition-colors cursor-pointer"
      >
        <LineChart className="h-4 w-4 mr-1.5" />
        {showExamples ? "Hide" : "View"} Dashboard Examples
        {showExamples ? <ChevronDown className="h-4 w-4 ml-1" /> : <ChevronRight className="h-4 w-4 ml-1" />}
      </button>
      {showExamples && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
          <div className="rounded-lg overflow-hidden border border-gray-700 shadow-sm cursor-pointer hover:shadow-md transition-shadow" onClick={() => setLightboxImg(shinyImg1)}>
            <img src={shinyImg1} alt="R Shiny interactive dashboard example" className="w-full h-auto" />
          </div>
          <div className="rounded-lg overflow-hidden border border-gray-700 shadow-sm cursor-pointer hover:shadow-md transition-shadow" onClick={() => setLightboxImg(shinyImg2)}>
            <img src={shinyImg2} alt="R Shiny statistical visualization example" className="w-full h-auto" />
          </div>
        </div>
      )}
      {lightboxImg && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
          onClick={() => setLightboxImg(null)}
        >
          <button
            onClick={() => setLightboxImg(null)}
            className="absolute top-4 right-4 text-white bg-black/50 hover:bg-black/70 rounded-full p-2 transition-colors cursor-pointer"
          >
            <X className="h-6 w-6" />
          </button>
          <img
            src={lightboxImg}
            alt="R Shiny dashboard example enlarged"
            className="max-w-full max-h-[90vh] rounded-xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}

function PowerBIExamples() {
  const [showExamples, setShowExamples] = useState(false);
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);
  return (
    <div className="mt-4 border-t border-gray-800 pt-4">
      <button
        onClick={() => setShowExamples(!showExamples)}
        className="flex items-center text-sm text-amber-600 hover:text-amber-700 transition-colors cursor-pointer"
      >
        <LayoutDashboard className="h-4 w-4 mr-1.5" />
        {showExamples ? "Hide" : "View"} Dashboard Examples
        {showExamples ? <ChevronDown className="h-4 w-4 ml-1" /> : <ChevronRight className="h-4 w-4 ml-1" />}
      </button>
      {showExamples && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
          <div className="rounded-lg overflow-hidden border border-gray-700 shadow-sm cursor-pointer hover:shadow-md transition-shadow" onClick={() => setLightboxImg(powerbiImg1)}>
            <img src={powerbiImg1} alt="Power BI dashboard example" className="w-full h-auto" />
          </div>
          <div className="rounded-lg overflow-hidden border border-gray-700 shadow-sm cursor-pointer hover:shadow-md transition-shadow" onClick={() => setLightboxImg(powerbiImg2)}>
            <img src={powerbiImg2} alt="Power BI visualization example" className="w-full h-auto" />
          </div>
        </div>
      )}
      {lightboxImg && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
          onClick={() => setLightboxImg(null)}
        >
          <button
            onClick={() => setLightboxImg(null)}
            className="absolute top-4 right-4 text-white bg-black/50 hover:bg-black/70 rounded-full p-2 transition-colors cursor-pointer"
          >
            <X className="h-6 w-6" />
          </button>
          <img
            src={lightboxImg}
            alt="Power BI dashboard example enlarged"
            className="max-w-full max-h-[90vh] rounded-xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}

function TableauExamples() {
  const [showExamples, setShowExamples] = useState(false);
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);
  return (
    <div className="mt-4 border-t border-gray-800 pt-4">
      <button
        onClick={() => setShowExamples(!showExamples)}
        className="flex items-center text-sm text-yellow-400 hover:text-yellow-500 transition-colors cursor-pointer"
      >
        <BarChart3 className="h-4 w-4 mr-1.5" />
        {showExamples ? "Hide" : "View"} Dashboard Examples
        {showExamples ? <ChevronDown className="h-4 w-4 ml-1" /> : <ChevronRight className="h-4 w-4 ml-1" />}
      </button>
      {showExamples && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
          <div className="rounded-lg overflow-hidden border border-gray-700 shadow-sm cursor-pointer hover:shadow-md transition-shadow" onClick={() => setLightboxImg(tableauImg1)}>
            <img src={tableauImg1} alt="Tableau dashboard example" className="w-full h-auto" />
          </div>
          <div className="rounded-lg overflow-hidden border border-gray-700 shadow-sm cursor-pointer hover:shadow-md transition-shadow" onClick={() => setLightboxImg(tableauImg2)}>
            <img src={tableauImg2} alt="Tableau visualization example" className="w-full h-auto" />
          </div>
        </div>
      )}
      {lightboxImg && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
          onClick={() => setLightboxImg(null)}
        >
          <button
            onClick={() => setLightboxImg(null)}
            className="absolute top-4 right-4 text-white bg-black/50 hover:bg-black/70 rounded-full p-2 transition-colors cursor-pointer"
          >
            <X className="h-6 w-6" />
          </button>
          <img
            src={lightboxImg}
            alt="Tableau dashboard example enlarged"
            className="max-w-full max-h-[90vh] rounded-xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}

interface SkillPillProps {
  skills: string[];
}

function SkillGrid({ skills }: SkillPillProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
      {skills.map((skill) => (
        <div
          key={skill}
          className="flex items-center bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 hover:border-yellow-400 transition-colors"
        >
          <CheckCircle className="h-4 w-4 text-yellow-400 mr-3 flex-shrink-0" />
          <span className="text-gray-100 text-sm">{skill}</span>
        </div>
      ))}
    </div>
  );
}

interface ComparisonPlatform {
  name: string;
  color: string;
  icon: React.ReactNode;
  pros: string[];
  cons: string[];
}

function PlatformComparison({ platforms, ruleOfThumb }: { platforms: ComparisonPlatform[]; ruleOfThumb?: string }) {
  const [isOpen, setIsOpen] = useState(false);

  const colorMap: Record<string, { bg: string; border: string }> = {
    blue: { bg: "bg-gray-800", border: "border-yellow-400/30" },
    amber: { bg: "bg-gray-800", border: "border-yellow-500/30" },
    emerald: { bg: "bg-gray-800", border: "border-emerald-500/30" },
    orange: { bg: "bg-gray-800", border: "border-orange-500/30" },
    cyan: { bg: "bg-gray-800", border: "border-cyan-500/30" },
  };

  return (
    <div className="mt-5 mb-10">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center gap-2 text-sm text-gray-300 hover:text-yellow-400 transition-colors group cursor-pointer"
      >
        <HelpCircle className="h-4 w-4 text-gray-400 group-hover:text-yellow-400 transition-colors" />
        <span className="underline decoration-dotted underline-offset-4">Which tool is best for me?</span>
        {isOpen ? (
          <ChevronDown className="h-3.5 w-3.5" />
        ) : (
          <ChevronRight className="h-3.5 w-3.5" />
        )}
      </button>

      {isOpen && (
        <div className="mt-5">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {platforms.map((platform) => {
              const colors = colorMap[platform.color];
              return (
                <div
                  key={platform.name}
                  className={`${colors.bg} ${colors.border} border rounded-xl p-5`}
                >
                  <div className="flex items-center gap-2 mb-4">
                    {platform.icon}
                    <h4 className="text-white">{platform.name}</h4>
                  </div>

                  {/* Pros */}
                  <div className="mb-4">
                    <div className="flex items-center gap-1.5 mb-2">
                      <ThumbsUp className="h-3.5 w-3.5 text-green-600" />
                      <span className="text-xs text-green-700 tracking-wide uppercase">Pros</span>
                    </div>
                    <ul className="space-y-1.5">
                      {platform.pros.map((pro) => (
                        <li key={pro} className="flex items-start text-sm text-gray-300">
                          <CheckCircle className="h-3.5 w-3.5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          {pro}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Cons */}
                  <div>
                    <div className="flex items-center gap-1.5 mb-2">
                      <ThumbsDown className="h-3.5 w-3.5 text-red-500" />
                      <span className="text-xs text-red-600 tracking-wide uppercase">Cons</span>
                    </div>
                    <ul className="space-y-1.5">
                      {platform.cons.map((con) => (
                        <li key={con} className="flex items-start text-sm text-gray-300">
                          <span className="text-red-400 mr-2 mt-0.5 flex-shrink-0 text-xs">✕</span>
                          {con}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

interface ServiceModuleProps {
  id: string;
  icon: React.ReactNode;
  title: string;
  tagline: string;
  description: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

function ServiceModule({
  id,
  icon,
  title,
  tagline,
  description,
  children,
  defaultOpen = false,
}: ServiceModuleProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <section id={id} className="scroll-mt-20">
      <div
        className="bg-gray-900 border border-gray-700 rounded-xl overflow-hidden hover:shadow-md transition-shadow cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        {/* Module Header - always visible */}
        <div className="p-6 md:p-8">
          <div className="flex items-start justify-between">
            <div className="flex items-start flex-1">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-gray-800 rounded-xl mr-5 flex-shrink-0">
                {icon}
              </div>
              <div className="flex-1">
                <h2 className="text-2xl md:text-3xl text-white mb-1">{title}</h2>
                <p className="text-yellow-400 mb-3">{tagline}</p>
                <p className="text-gray-300 max-w-3xl">{description}</p>
              </div>
            </div>
            <button
              className="ml-4 mt-2 p-2 text-gray-300 hover:text-yellow-400 transition-colors flex-shrink-0"
              aria-label={isOpen ? "Collapse" : "Expand"}
            >
              {isOpen ? (
                <ChevronDown className="h-6 w-6" />
              ) : (
                <ChevronRight className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Module Content - expandable */}
        {isOpen && (
          <div className="border-t border-gray-700 p-6 md:p-8 bg-black" onClick={(e) => e.stopPropagation()}>
            {children}
          </div>
        )}
      </div>
    </section>
  );
}

export function Services() {
  return (
    <div className="min-h-screen flex flex-col bg-black">
      <Header />

      <main className="flex-1">
        {/* Fixed ghost watermark — stays centered as user scrolls */}
        <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-[1]">
          <img src={logo} alt="" aria-hidden="true" className="w-[600px] md:w-[700px] max-w-full opacity-[0.05] select-none mix-blend-screen" />
        </div>

        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-black to-gray-900 py-16 md:py-20 overflow-hidden">
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl text-center mb-6 text-white">
              AI Consulting Services
            </h1>
            <p className="text-xl text-center text-gray-300 max-w-3xl mx-auto mb-8">
              From autonomous agents to causal models, we deliver AI solutions that are
              production-ready, compliant, and built for measurable impact.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a href="#webdev" className="bg-gray-800 text-gray-300 border border-gray-700 px-4 py-2 rounded-lg hover:border-yellow-400 hover:text-yellow-400 transition-colors text-sm">
                Business Web Development
              </a>
              <a href="#database" className="bg-gray-800 text-gray-300 border border-gray-700 px-4 py-2 rounded-lg hover:border-yellow-400 hover:text-yellow-400 transition-colors text-sm">
                Database Management
              </a>
              <a href="#dashboards" className="bg-gray-800 text-gray-300 border border-gray-700 px-4 py-2 rounded-lg hover:border-yellow-400 hover:text-yellow-400 transition-colors text-sm">
                Dashboards & Visualization
              </a>
              <a href="#agentic" className="bg-gray-800 text-gray-300 border border-gray-700 px-4 py-2 rounded-lg hover:border-yellow-400 hover:text-yellow-400 transition-colors text-sm">
                Agentic Workflow Design
              </a>
              <a href="#analytics" className="bg-gray-800 text-gray-300 border border-gray-700 px-4 py-2 rounded-lg hover:border-yellow-400 hover:text-yellow-400 transition-colors text-sm">
                Advanced Analytics
              </a>
            </div>
          </div>
        </section>

        {/* Service Modules */}
        <section className="py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">

            {/* ── Service 0: Business Web Development ── */}
            <ServiceModule
              id="webdev"
              icon={<Globe className="h-7 w-7 text-yellow-400" />}
              title="Business Web Development"
              tagline="High-converting websites and web apps built with the same technology powering Silicon Valley"
              description="Your website is your hardest-working salesperson. It should look the part. We design and build fast, responsive, SEO-optimized websites and web applications using modern frameworks like React and Next.js, tailored for businesses that want to convert visitors into customers."
              defaultOpen={false}
            >
              {/* Key Differentiators */}
              <div className="mb-10 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-800 border border-violet-500/30 rounded-lg p-6">
                  <div className="flex items-center mb-2">
                    <Gauge className="h-5 w-5 text-violet-400 mr-2" />
                    <span className="text-violet-400 text-xs tracking-wide uppercase">Key Differentiator</span>
                  </div>
                  <h4 className="text-lg text-white mb-2">Performance-First Architecture</h4>
                  <p className="text-gray-300 text-sm">
                    Every site we build scores 90+ on Google Lighthouse out of the box. Faster load times mean higher search rankings and lower bounce rates. Speed isn't an afterthought; it's the foundation.
                  </p>
                </div>
                <div className="bg-gray-800 border border-emerald-500/30 rounded-lg p-6">
                  <div className="flex items-center mb-2">
                    <Search className="h-5 w-5 text-emerald-400 mr-2" />
                    <span className="text-emerald-400 text-xs tracking-wide uppercase">Key Differentiator</span>
                  </div>
                  <h4 className="text-lg text-white mb-2">SEO & AI-Search Optimized</h4>
                  <p className="text-gray-300 text-sm">
                    Built for both Google and the next generation of AI search engines. Structured data, semantic HTML, and content architecture designed so both humans and LLMs understand exactly what you offer.
                  </p>
                </div>
              </div>

              {/* What We Build */}
              <div className="mb-10">
                <h3 className="text-xl text-white mb-2 flex items-center">
                  <Target className="h-5 w-5 text-yellow-400 mr-2" />
                  What We Build
                </h3>
                <p className="text-gray-400 mb-6 text-sm">Websites and web apps designed to grow your business.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gray-900 border border-gray-700 rounded-lg p-6">
                    <div className="flex items-center mb-3">
                      <div className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center mr-3">
                        <Globe className="h-5 w-5 text-yellow-400" />
                      </div>
                      <div>
                        <h4 className="text-white">Business & Consulting Websites</h4>
                        <p className="text-gray-400 text-xs">Convert visitors into clients</p>
                      </div>
                    </div>
                    <ul className="space-y-2 text-sm text-gray-300">
                      <li className="flex items-start"><CheckCircle className="h-4 w-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />Landing pages optimized for lead generation</li>
                      <li className="flex items-start"><CheckCircle className="h-4 w-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />Service showcase with strategic CTA placement</li>
                      <li className="flex items-start"><CheckCircle className="h-4 w-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />Case study & portfolio sections</li>
                      <li className="flex items-start"><CheckCircle className="h-4 w-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />Contact forms & scheduling integration</li>
                    </ul>
                  </div>

                  <div className="bg-gray-900 border border-gray-700 rounded-lg p-6">
                    <div className="flex items-center mb-3">
                      <div className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center mr-3">
                        <Layers className="h-5 w-5 text-purple-400" />
                      </div>
                      <div>
                        <h4 className="text-white">Web Applications</h4>
                        <p className="text-gray-400 text-xs">Interactive tools your team & customers use daily</p>
                      </div>
                    </div>
                    <ul className="space-y-2 text-sm text-gray-300">
                      <li className="flex items-start"><CheckCircle className="h-4 w-4 text-purple-500 mr-2 mt-0.5 flex-shrink-0" />Internal dashboards & admin panels</li>
                      <li className="flex items-start"><CheckCircle className="h-4 w-4 text-purple-500 mr-2 mt-0.5 flex-shrink-0" />Client portals & self-service tools</li>
                      <li className="flex items-start"><CheckCircle className="h-4 w-4 text-purple-500 mr-2 mt-0.5 flex-shrink-0" />Data-driven apps with API integrations</li>
                      <li className="flex items-start"><CheckCircle className="h-4 w-4 text-purple-500 mr-2 mt-0.5 flex-shrink-0" />AI-powered features & chatbot interfaces</li>
                    </ul>
                  </div>

                  <div className="bg-gray-900 border border-gray-700 rounded-lg p-6">
                    <div className="flex items-center mb-3">
                      <div className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center mr-3">
                        <Smartphone className="h-5 w-5 text-green-400" />
                      </div>
                      <div>
                        <h4 className="text-white">Responsive & Mobile-First</h4>
                        <p className="text-gray-400 text-xs">Perfect on every screen size</p>
                      </div>
                    </div>
                    <ul className="space-y-2 text-sm text-gray-300">
                      <li className="flex items-start"><CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />Mobile-first design methodology</li>
                      <li className="flex items-start"><CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />Tablet & desktop breakpoint optimization</li>
                      <li className="flex items-start"><CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />Touch-friendly interactions & navigation</li>
                      <li className="flex items-start"><CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />Progressive Web App (PWA) capabilities</li>
                    </ul>
                  </div>

                  <div className="bg-gray-900 border border-gray-700 rounded-lg p-6">
                    <div className="flex items-center mb-3">
                      <div className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center mr-3">
                        <Palette className="h-5 w-5 text-amber-400" />
                      </div>
                      <div>
                        <h4 className="text-white">Design & Branding</h4>
                        <p className="text-gray-400 text-xs">Look as good as you perform</p>
                      </div>
                    </div>
                    <ul className="space-y-2 text-sm text-gray-300">
                      <li className="flex items-start"><CheckCircle className="h-4 w-4 text-amber-500 mr-2 mt-0.5 flex-shrink-0" />Custom UI/UX design aligned to your brand</li>
                      <li className="flex items-start"><CheckCircle className="h-4 w-4 text-amber-500 mr-2 mt-0.5 flex-shrink-0" />Figma-to-code design implementation</li>
                      <li className="flex items-start"><CheckCircle className="h-4 w-4 text-amber-500 mr-2 mt-0.5 flex-shrink-0" />Micro-animations & modern interactions</li>
                      <li className="flex items-start"><CheckCircle className="h-4 w-4 text-amber-500 mr-2 mt-0.5 flex-shrink-0" />Dark mode & accessibility (WCAG) compliance</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Technology Stack */}
              <div className="mb-10">
                <h3 className="text-xl text-white mb-5 flex items-center">
                  <Code className="h-5 w-5 text-yellow-400 mr-2" />
                  Technology Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "Supabase", "PostgreSQL", "Vercel", "Figma", "HTML5 / CSS3", "REST APIs", "GraphQL", "Git", "CI/CD"].map((tech) => (
                    <span key={tech} className="bg-gray-900 border border-gray-700 text-gray-200 px-4 py-2 rounded-lg text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Technical Proof */}
              <div className="bg-gray-800 border-l-4 border-yellow-400 p-6 rounded-r-lg mb-8">
                <h4 className="text-lg text-white mb-2">Built With What We Sell</h4>
                <p className="text-gray-300">
                  This very website, <strong>PanteraClaw.com</strong>, is built with React, TypeScript, and Tailwind CSS, demonstrating the same modern tech stack, responsive design, and SEO-optimized architecture we deliver to every client. What you're browsing right now is our proof of work.
                </p>
              </div>

              {/* Mid-Section CTA */}
              <div className="bg-gray-800 border border-yellow-400/30 rounded-xl p-8 text-center">
                <h4 className="text-xl text-white mb-2">Need a website that actually converts?</h4>
                <p className="text-gray-300 mb-5 text-sm max-w-xl mx-auto">
                  Whether it's a consulting site, a web app, or a complete redesign, let's build something that works as hard as you do.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center bg-yellow-400 text-black px-6 py-3 rounded-lg hover:bg-yellow-300 transition-colors text-sm"
                >
                  Discuss Your Web Project
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </ServiceModule>

            {/* ── Service 1: Database Management ── */}
            <ServiceModule
              id="database"
              icon={<Database className="h-7 w-7 text-yellow-400" />}
              title="Database Management, Creation & Optimization"
              tagline="Enterprise-grade data infrastructure across leading cloud platforms"
              description="Build scalable, secure database systems that meet the most demanding requirements. We specialize in performance tuning, pipeline optimization, and enterprise-grade data architecture across Databricks, PostgreSQL, and Snowflake."
              defaultOpen={false}
            >
              {/* Platforms */}
              <div className="mb-8">
                <h3 className="text-xl text-white mb-5 flex items-center">
                  <Server className="h-5 w-5 text-yellow-400 mr-2" />
                  Platforms
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <PlatformCard
                    name="Databricks"
                    icon={<Layers className="h-6 w-6 text-orange-500" />}
                    languages={["PySpark", "SQL", "Python"]}
                    description="Unified analytics platform for large-scale data engineering and ML workloads. Enterprise-grade ETL pipelines processing terabytes of data with full auditability."
                  />
                  <PlatformCard
                    name="PostgreSQL"
                    icon={<Database className="h-6 w-6 text-blue-500" />}
                    languages={["SQL", "PostgreSQL", "Python"]}
                    description="Enterprise relational database management with advanced query optimization, stored procedures, and row-level security."
                  />
                  <PlatformCard
                    name="Snowflake"
                    icon={<Server className="h-6 w-6 text-cyan-500" />}
                    languages={["SQL", "SnowSQL", "Python"]}
                    description="Cloud-native data warehouse architecture with elastic scaling, data sharing, and zero-copy cloning capabilities."
                  />
                  <PlatformCard
                    name="Oracle"
                    icon={<Database className="h-6 w-6 text-red-500" />}
                    languages={["SQL", "PL/SQL", "Python"]}
                    description="Industry-standard enterprise database trusted by large organizations worldwide. Robust support for complex transactions, high availability, and mission-critical workloads."
                  />
                </div>
                <PlatformComparison
                  platforms={[
                    {
                      name: "Databricks",
                      color: "orange",
                      icon: <Layers className="h-5 w-5 text-orange-600" />,
                      pros: [
                        "Best for big data and machine learning workloads",
                        "Native PySpark and Python support",
                        "Excellent for real-time and streaming data",
                      ],
                      cons: [
                        "Expensive for small-scale use cases",
                        "Steeper learning curve for non-technical users",
                        "Overkill if you don't need ML or big data",
                      ],
                    },
                    {
                      name: "PostgreSQL",
                      color: "blue",
                      icon: <Database className="h-5 w-5 text-blue-500" />,
                      pros: [
                        "Free and open source",
                        "Extremely reliable and battle-tested",
                        "Great for transactional, day-to-day operations",
                      ],
                      cons: [
                        "Not built for massive scale or distributed data",
                        "Manual tuning required as data grows",
                        "No built-in cloud data warehouse features",
                      ],
                    },
                    {
                      name: "Snowflake",
                      color: "cyan",
                      icon: <Server className="h-5 w-5 text-cyan-600" />,
                      pros: [
                        "Purpose-built cloud data warehouse",
                        "Scales up and down automatically",
                        "Easy to share data across teams and organizations",
                      ],
                      cons: [
                        "Can get costly fast as query volume grows",
                        "Requires cloud dependency (no on-premise)",
                        "Less flexible for custom ML workflows",
                      ],
                    },
                    {
                      name: "Oracle",
                      color: "orange",
                      icon: <Database className="h-5 w-5 text-red-500" />,
                      pros: [
                        "Industry gold standard for enterprise reliability",
                        "Exceptional support for complex transactions",
                        "High availability and disaster recovery built-in",
                      ],
                      cons: [
                        "High licensing costs compared to open-source alternatives",
                        "Complex setup and administration",
                        "Can be overkill for small to mid-size businesses",
                      ],
                    },
                  ]}
                  ruleOfThumb="Small business or app? PostgreSQL. Analytics at scale? Snowflake. ML and big data? Databricks. Large enterprise with complex transactions and compliance needs? Oracle."
                />
              </div>

              {/* Cross-Platform Skills */}
              <div>
                <h3 className="text-xl text-white mb-5 flex items-center">
                  <Code className="h-5 w-5 text-yellow-400 mr-2" />
                  Cross-Platform Skills
                </h3>
                <SkillGrid
                  skills={[
                    "Data Modeling",
                    "ETL / ELT Pipelines",
                    "Query Optimization",
                    "Schema Design",
                    "Data Migration",
                    "Indexing Strategy",
                    "Stored Procedures",
                    "Performance Tuning",
                    "Access Control",
                    "Backup & Recovery",
                    "Data Auditing",
                    "Cloud Integration",
                  ]}
                />
              </div>

              {/* Technical Proof */}
              <div className="mt-8 bg-gray-800 border-l-4 border-yellow-400 p-6 rounded-r-lg">
                <h4 className="text-lg text-white mb-2">Technical Proof</h4>
                <p className="text-gray-300">
                  Optimized <strong>PySpark ETL pipelines</strong> in Databricks for Department of
                  Defense compliance, handling terabytes of sensitive data with full auditability
                  and security. Delivered measurable performance improvements across query execution
                  and pipeline throughput.
                </p>
              </div>
            </ServiceModule>

            {/* ── Service 2: Dashboard & Visualization Development ── */}
            <ServiceModule
              id="dashboards"
              icon={<LayoutDashboard className="h-7 w-7 text-yellow-400" />}
              title="Dashboard & Visualization Development"
              tagline="Turn complex data into clear decisions your entire organization can act on"
              description="Your data is only as valuable as the decisions it drives. We build interactive dashboards and visualization systems that surface the right metrics, at the right time, for the right people, from C-suite strategy views to operational monitoring."
            >
              {/* Key Differentiators */}
              <div className="mb-10 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-800 border border-indigo-500/30 rounded-lg p-6">
                  <div className="flex items-center mb-2">
                    <Sparkles className="h-5 w-5 text-indigo-400 mr-2" />
                    <span className="text-indigo-400 text-xs tracking-wide uppercase">Key Differentiator</span>
                  </div>
                  <h4 className="text-lg text-white mb-2">AI-Powered Cost Prediction Dashboards</h4>
                  <p className="text-gray-300 text-sm">
                    Go beyond historical reporting. Our dashboards integrate predictive models that forecast costs, flag anomalies, and recommend actions, turning passive charts into active decision tools.
                  </p>
                </div>
                <div className="bg-gray-800 border border-rose-500/30 rounded-lg p-6">
                  <div className="flex items-center mb-2">
                    <LineChart className="h-5 w-5 text-rose-400 mr-2" />
                    <span className="text-rose-400 text-xs tracking-wide uppercase">Key Differentiator</span>
                  </div>
                  <h4 className="text-lg text-white mb-2">Causal Analysis Visualizations</h4>
                  <p className="text-gray-300 text-sm">
                    Most dashboards show what happened. Ours show why it happened and what to do next, combining R Shiny with causal inference to identify the true drivers behind your KPIs.
                  </p>
                </div>
              </div>

              {/* Platforms */}
              <div className="mb-10">
                <h3 className="text-xl text-white mb-5 flex items-center">
                  <Monitor className="h-5 w-5 text-yellow-400 mr-2" />
                  Platforms
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <PlatformCard
                    name="Tableau"
                    icon={<BarChart3 className="h-6 w-6 text-blue-500" />}
                    languages={["Tableau Desktop", "Tableau Prep", "Calculated Fields & LOD Expressions"]}
                    description="Enterprise-standard visual analytics with interactive drill-downs, stakeholder-ready presentations, and seamless data source integration."
                  >
                    <TableauExamples />
                  </PlatformCard>
                  <PlatformCard
                    name="Power BI"
                    icon={<LayoutDashboard className="h-6 w-6 text-amber-500" />}
                    languages={["DAX", "Power Query (M Language)", "Power BI Desktop"]}
                    description="Microsoft-ecosystem dashboards with advanced data modeling, row-level security, and enterprise gateway publishing."
                  >
                    <PowerBIExamples />
                  </PlatformCard>
                  <PlatformCard
                    name="R Shiny"
                    icon={<LineChart className="h-6 w-6 text-emerald-500" />}
                    languages={["R", "ggplot2", "Plotly (R)", "RStudio"]}
                    description="Custom statistical applications with reactive UIs, ideal for causal analysis dashboards, predictive analytics, and research-grade visualizations."
                  >
                    <ShinyExamples />
                  </PlatformCard>
                </div>

                <PlatformComparison
                  platforms={[
                    {
                      name: "Tableau",
                      color: "blue",
                      icon: <BarChart3 className="h-5 w-5 text-yellow-400" />,
                      pros: [
                        "Drag-and-drop, fastest time to dashboard",
                        "Best for executive & stakeholder presentations",
                        "100+ native data source connectors",
                      ],
                      cons: [
                        "~$70/mo per Creator license",
                        "Limited UI customization, locked to Tableau's look",
                        "Weak for statistical or causal analysis",
                      ],
                    },
                    {
                      name: "Power BI",
                      color: "amber",
                      icon: <LayoutDashboard className="h-5 w-5 text-amber-600" />,
                      pros: [
                        "Lowest cost, ~$10/mo Pro license",
                        "Deep Microsoft 365 integration (Excel, Teams, SharePoint)",
                        "Row-level security built in",
                      ],
                      cons: [
                        "Still requires monthly licensing for collaboration",
                        "Limited UI customization vs code-based tools",
                        "Struggles with very large datasets",
                      ],
                    },
                    {
                      name: "R Shiny",
                      color: "emerald",
                      icon: <LineChart className="h-5 w-5 text-emerald-400" />,
                      pros: [
                        "Fully customizable UI, pixel-level control",
                        "No per-user licensing costs (open source)",
                        "Native support for statistical & causal analysis",
                      ],
                      cons: [
                        "Requires R programming knowledge to maintain",
                        "Longer initial build time vs drag-and-drop",
                        "Hosting requires a server setup",
                      ],
                    },
                  ]}
                  ruleOfThumb="Need beautiful stakeholder reports fast? Tableau. Already in Microsoft 365? Power BI. Need full customization or statistical analysis? R Shiny."
                />
              </div>

              {/* What Your Dashboards Will Deliver */}
              <div className="mb-10">
                <h3 className="text-xl text-white mb-2 flex items-center">
                  <Eye className="h-5 w-5 text-yellow-400 mr-2" />
                  What Your Dashboards Will Deliver
                </h3>
                <p className="text-gray-400 mb-6 text-sm">Capabilities grouped by the decisions they enable.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Cluster 1: Drive Strategic Decisions */}
                  <div className="bg-gray-900 border border-gray-700 rounded-lg p-6">
                    <div className="flex items-center mb-3">
                      <div className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center mr-3">
                        <BarChart3 className="h-5 w-5 text-yellow-400" />
                      </div>
                      <div>
                        <h4 className="text-white">Drive Strategic Decisions</h4>
                        <p className="text-gray-400 text-xs">From data to boardroom confidence</p>
                      </div>
                    </div>
                    <ul className="space-y-2 text-sm text-gray-300">
                      <li className="flex items-start"><CheckCircle className="h-4 w-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />KPI Design & Metric Framework</li>
                      <li className="flex items-start"><CheckCircle className="h-4 w-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />Policy & Decision Support Dashboards</li>
                      <li className="flex items-start"><CheckCircle className="h-4 w-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />Cost Prediction Dashboards</li>
                      <li className="flex items-start"><CheckCircle className="h-4 w-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />Stakeholder-Facing Presentation</li>
                    </ul>
                  </div>

                  {/* Cluster 2: Detect & Respond in Real Time */}
                  <div className="bg-gray-900 border border-gray-700 rounded-lg p-6">
                    <div className="flex items-center mb-3">
                      <div className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center mr-3">
                        <Zap className="h-5 w-5 text-red-400" />
                      </div>
                      <div>
                        <h4 className="text-white">Detect & Respond in Real Time</h4>
                        <p className="text-gray-400 text-xs">Spot problems before they scale</p>
                      </div>
                    </div>
                    <ul className="space-y-2 text-sm text-gray-300">
                      <li className="flex items-start"><CheckCircle className="h-4 w-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />Real-Time Data Feeds</li>
                      <li className="flex items-start"><CheckCircle className="h-4 w-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />Anomaly Detection Visualization</li>
                      <li className="flex items-start"><CheckCircle className="h-4 w-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />KPI Tracking & Monitoring</li>
                      <li className="flex items-start"><CheckCircle className="h-4 w-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />Drill-Down & Filter Logic</li>
                    </ul>
                  </div>

                  {/* Cluster 3: Understand Root Causes */}
                  <div className="bg-gray-900 border border-gray-700 rounded-lg p-6">
                    <div className="flex items-center mb-3">
                      <div className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center mr-3">
                        <Search className="h-5 w-5 text-violet-400" />
                      </div>
                      <div>
                        <h4 className="text-white">Understand Root Causes</h4>
                        <p className="text-gray-400 text-xs">Move from "what" to "why"</p>
                      </div>
                    </div>
                    <ul className="space-y-2 text-sm text-gray-300">
                      <li className="flex items-start"><CheckCircle className="h-4 w-4 text-violet-500 mr-2 mt-0.5 flex-shrink-0" />Causal Analysis Dashboards</li>
                      <li className="flex items-start"><CheckCircle className="h-4 w-4 text-violet-500 mr-2 mt-0.5 flex-shrink-0" />KPI Driver Identification</li>
                      <li className="flex items-start"><CheckCircle className="h-4 w-4 text-violet-500 mr-2 mt-0.5 flex-shrink-0" />Predictive Analytics Integration</li>
                      <li className="flex items-start"><CheckCircle className="h-4 w-4 text-violet-500 mr-2 mt-0.5 flex-shrink-0" />Custom Statistical Visualizations</li>
                    </ul>
                  </div>

                  {/* Cluster 4: Ship & Scale with Confidence */}
                  <div className="bg-gray-900 border border-gray-700 rounded-lg p-6">
                    <div className="flex items-center mb-3">
                      <div className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center mr-3">
                        <Users className="h-5 w-5 text-green-400" />
                      </div>
                      <div>
                        <h4 className="text-white">Ship & Scale with Confidence</h4>
                        <p className="text-gray-400 text-xs">Dashboards your team will actually use</p>
                      </div>
                    </div>
                    <ul className="space-y-2 text-sm text-gray-300">
                      <li className="flex items-start"><CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />ETL Integration (Tableau Prep / PySpark / SQL)</li>
                      <li className="flex items-start"><CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />Accessibility & UX Design</li>
                      <li className="flex items-start"><CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />Data Source Integration</li>
                      <li className="flex items-start"><CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />Documentation & Handoff</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Technical Proof */}
              <div className="bg-gray-800 border-l-4 border-yellow-400 p-6 rounded-r-lg mb-8">
                <h4 className="text-lg text-white mb-2">Technical Proof</h4>
                <p className="text-gray-300">
                  Built <strong>cost prediction dashboards</strong> in Tableau for Air Force leadership, integrating PySpark ETL pipelines with interactive drill-downs that enabled data-driven budget decisions. Developed <strong>causal analysis dashboards</strong> in R Shiny that identified the true drivers behind retention KPIs, directly informing policy changes.
                </p>
              </div>

              {/* Mid-Section CTA */}
              <div className="bg-gray-800 border border-yellow-400/30 rounded-xl p-8 text-center">
                <h4 className="text-xl text-white mb-2">Need a dashboard that drives action, not just reports?</h4>
                <p className="text-gray-300 mb-5 text-sm max-w-xl mx-auto">
                  From executive KPI views to real-time anomaly detection, let's build the visualization layer your data deserves.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center bg-yellow-400 text-black px-6 py-3 rounded-lg hover:bg-yellow-300 transition-colors text-sm"
                >
                  Discuss Your Dashboard Needs
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </ServiceModule>

            {/* ── Service 3: Agentic Workflow Design ── */}
            <ServiceModule
              id="agentic"
              icon={<Bot className="h-7 w-7 text-yellow-400" />}
              title="Agentic Workflow Design"
              tagline="Autonomous LLM systems that plan, execute, and adapt in real-time"
              description="Build AI systems that act autonomously—planning, executing, and adapting in real-time. From cloud-hosted multi-agent orchestration to secure, air-gapped local deployments, we architect intelligent workflows that transform how your organization operates."
            >
              {/* Key Differentiators */}
              <div className="mb-10 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-800 border border-emerald-500/30 rounded-lg p-6">
                  <div className="flex items-center mb-2">
                    <Sparkles className="h-5 w-5 text-emerald-400 mr-2" />
                    <span className="text-emerald-400 text-xs tracking-wide uppercase">Key Differentiator</span>
                  </div>
                  <h4 className="text-lg text-white mb-2">Natural Language to SQL</h4>
                  <p className="text-gray-300 text-sm">
                    Let your team query databases in plain English. Our NLP-to-SQL agents translate business questions into optimized queries, no SQL knowledge required, instant insights delivered.
                  </p>
                </div>
                <div className="bg-gray-800 border border-amber-500/30 rounded-lg p-6">
                  <div className="flex items-center mb-2">
                    <Shield className="h-5 w-5 text-amber-400 mr-2" />
                    <span className="text-amber-400 text-xs tracking-wide uppercase">Key Differentiator</span>
                  </div>
                  <h4 className="text-lg text-white mb-2">Air-Gapped & Classified Deployments</h4>
                  <p className="text-gray-300 text-sm">
                    Full AI capabilities without internet connectivity. We deploy secure, self-contained agent systems for environments where data can never leave the building.
                  </p>
                </div>
              </div>

              {/* Frameworks */}
              <div className="mb-10">
                <h3 className="text-xl text-white mb-5 flex items-center">
                  <Workflow className="h-5 w-5 text-yellow-400 mr-2" />
                  Frameworks
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <PlatformCard
                    name="LangGraph"
                    icon={<Workflow className="h-6 w-6 text-emerald-500" />}
                    languages={["State Machine Design", "Multi-Agent Orchestration", "Human-in-the-Loop Workflows", "NLP-to-SQL Agents"]}
                    description="Production-grade state machine workflows for complex multi-step agent systems with built-in persistence and fault tolerance."
                  />
                  <PlatformCard
                    name="LangChain"
                    icon={<Layers className="h-6 w-6 text-violet-500" />}
                    languages={["Chain Composition", "Tool Integration", "RAG Pipelines"]}
                    description="Modular chain architectures for composable LLM applications with seamless tool and retrieval integration."
                  />
                  <PlatformCard
                    name="CrewAI / AutoGen"
                    icon={<Bot className="h-6 w-6 text-amber-500" />}
                    languages={["Role-Based Agent Design", "Task Delegation", "Collaborative Problem Solving"]}
                    description="Multi-agent collaboration frameworks where specialized AI agents work together to solve complex problems autonomously."
                  />
                </div>
              </div>

              {/* What Your Agents Will Do — Outcome-Oriented Clusters */}
              <div className="mb-10">
                <h3 className="text-xl text-white mb-2 flex items-center">
                  <BrainCircuit className="h-5 w-5 text-yellow-400 mr-2" />
                  What Your Agents Will Do
                </h3>
                <p className="text-gray-400 mb-6 text-sm">Capabilities grouped by the business outcomes they deliver.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Cluster 1: Automate Complex Workflows */}
                  <div className="bg-gray-900 border border-gray-700 rounded-lg p-6">
                    <div className="flex items-center mb-3">
                      <div className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center mr-3">
                        <Zap className="h-5 w-5 text-yellow-400" />
                      </div>
                      <div>
                        <h4 className="text-white">Automate Complex Workflows</h4>
                        <p className="text-gray-400 text-xs">Eliminate manual bottlenecks</p>
                      </div>
                    </div>
                    <ul className="space-y-2 text-sm text-gray-300">
                      <li className="flex items-start"><CheckCircle className="h-4 w-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />Autonomous Decision-Making</li>
                      <li className="flex items-start"><CheckCircle className="h-4 w-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />Tool & API Orchestration</li>
                      <li className="flex items-start"><CheckCircle className="h-4 w-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />Multi-Model Routing</li>
                      <li className="flex items-start"><CheckCircle className="h-4 w-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />Streaming & Real-Time Response</li>
                    </ul>
                  </div>

                  {/* Cluster 2: Ensure Production Reliability */}
                  <div className="bg-gray-900 border border-gray-700 rounded-lg p-6">
                    <div className="flex items-center mb-3">
                      <div className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center mr-3">
                        <ShieldCheck className="h-5 w-5 text-green-400" />
                      </div>
                      <div>
                        <h4 className="text-white">Ensure Production Reliability</h4>
                        <p className="text-gray-400 text-xs">Ship AI you can trust at scale</p>
                      </div>
                    </div>
                    <ul className="space-y-2 text-sm text-gray-300">
                      <li className="flex items-start"><CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />Error Recovery & Fallback Logic</li>
                      <li className="flex items-start"><CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />Guardrails & Output Validation</li>
                      <li className="flex items-start"><CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />Evaluation & Testing Pipelines</li>
                      <li className="flex items-start"><CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />Production Monitoring & Observability</li>
                    </ul>
                  </div>

                  {/* Cluster 3: Unlock Data & Knowledge */}
                  <div className="bg-gray-900 border border-gray-700 rounded-lg p-6">
                    <div className="flex items-center mb-3">
                      <div className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center mr-3">
                        <Search className="h-5 w-5 text-violet-400" />
                      </div>
                      <div>
                        <h4 className="text-white">Unlock Data & Knowledge</h4>
                        <p className="text-gray-400 text-xs">Turn raw data into instant answers</p>
                      </div>
                    </div>
                    <ul className="space-y-2 text-sm text-gray-300">
                      <li className="flex items-start"><CheckCircle className="h-4 w-4 text-violet-500 mr-2 mt-0.5 flex-shrink-0" />Retrieval-Augmented Generation (RAG)</li>
                      <li className="flex items-start"><CheckCircle className="h-4 w-4 text-violet-500 mr-2 mt-0.5 flex-shrink-0" />Natural Language to SQL (NLP-to-SQL)</li>
                      <li className="flex items-start"><CheckCircle className="h-4 w-4 text-violet-500 mr-2 mt-0.5 flex-shrink-0" />Automated Report Generation</li>
                      <li className="flex items-start"><CheckCircle className="h-4 w-4 text-violet-500 mr-2 mt-0.5 flex-shrink-0" />Metric Analysis & Insight Discovery</li>
                    </ul>
                  </div>

                  {/* Cluster 4: Optimize Agent Performance */}
                  <div className="bg-gray-900 border border-gray-700 rounded-lg p-6">
                    <div className="flex items-center mb-3">
                      <div className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center mr-3">
                        <Cpu className="h-5 w-5 text-amber-400" />
                      </div>
                      <div>
                        <h4 className="text-white">Optimize Agent Performance</h4>
                        <p className="text-gray-400 text-xs">Faster, smarter, more cost-efficient</p>
                      </div>
                    </div>
                    <ul className="space-y-2 text-sm text-gray-300">
                      <li className="flex items-start"><CheckCircle className="h-4 w-4 text-amber-500 mr-2 mt-0.5 flex-shrink-0" />Prompt Engineering & Optimization</li>
                      <li className="flex items-start"><CheckCircle className="h-4 w-4 text-amber-500 mr-2 mt-0.5 flex-shrink-0" />Agent Memory & State Management</li>
                      <li className="flex items-start"><CheckCircle className="h-4 w-4 text-amber-500 mr-2 mt-0.5 flex-shrink-0" />Context Window Management</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Local Agent & Server Setup */}
              <div className="mb-10">
                <h3 className="text-xl text-white mb-5 flex items-center">
                  <Shield className="h-5 w-5 text-yellow-400 mr-2" />
                  Local Agent & Server Setup
                </h3>
                <p className="text-gray-400 mb-6 max-w-3xl">
                  Not everything belongs in the cloud. We build secure, on-premise AI systems for organizations that need full control over their data and models.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gray-900 border border-gray-700 rounded-lg p-6 hover:shadow-lg hover:border-yellow-400 transition-all">
                    <div className="flex items-center mb-3">
                      <Cpu className="h-6 w-6 text-blue-500" />
                      <h4 className="text-lg ml-3 text-white">Local LLM Deployment</h4>
                    </div>
                    <p className="text-gray-400 text-sm mb-4">
                      Run powerful language models entirely on your own hardware, no API calls, no data leaving your network.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {["Ollama", "GGUF / Quantized Models", "HuggingFace Model Integration"].map((t) => (
                        <span key={t} className="bg-gray-800 text-white px-3 py-1 rounded-full text-xs">{t}</span>
                      ))}
                    </div>
                  </div>

                  <div className="bg-gray-900 border border-gray-700 rounded-lg p-6 hover:shadow-lg hover:border-yellow-400 transition-all">
                    <div className="flex items-center mb-3">
                      <Cpu className="h-6 w-6 text-green-500" />
                      <h4 className="text-lg ml-3 text-white">GPU-Accelerated Inference</h4>
                    </div>
                    <p className="text-gray-400 text-sm mb-4">
                      Maximize throughput and minimize latency with optimized GPU configurations for real-time AI inference.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {["CUDA Programming", "GPU Server Configuration"].map((t) => (
                        <span key={t} className="bg-gray-800 text-white px-3 py-1 rounded-full text-xs">{t}</span>
                      ))}
                    </div>
                  </div>

                  <div className="bg-gray-900 border border-gray-700 rounded-lg p-6 hover:shadow-lg hover:border-yellow-400 transition-all">
                    <div className="flex items-center mb-3">
                      <Monitor className="h-6 w-6 text-indigo-500" />
                      <h4 className="text-lg ml-3 text-white">Local Server Hosting</h4>
                    </div>
                    <p className="text-gray-400 text-sm mb-4">
                      Custom server environments purpose-built for hosting AI agents, dashboards, and internal tools.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {["Python-Based Server Setup", "FastAPI", "Flask", "Streamlit"].map((t) => (
                        <span key={t} className="bg-gray-800 text-white px-3 py-1 rounded-full text-xs">{t}</span>
                      ))}
                    </div>
                  </div>

                  <div className="bg-gray-900 border border-gray-700 rounded-lg p-6 hover:shadow-lg hover:border-yellow-400 transition-all">
                    <div className="flex items-center mb-3">
                      <Shield className="h-6 w-6 text-red-500" />
                      <h4 className="text-lg ml-3 text-white">Local Agent Frameworks</h4>
                    </div>
                    <p className="text-gray-400 text-sm mb-4">
                      Deploy intelligent agents in air-gapped and classified environments where data sovereignty is non-negotiable.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {["Secure Air-Gapped Deployments", "On-Premise LLM Integration", "Private Data Query Systems"].map((t) => (
                        <span key={t} className="bg-gray-800 text-white px-3 py-1 rounded-full text-xs">{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Technical Proof */}
              <div className="bg-gray-800 border-l-4 border-yellow-400 p-6 rounded-r-lg mb-8">
                <h4 className="text-lg text-white mb-2">Technical Proof</h4>
                <p className="text-gray-300">
                  Integrated LLMs into Air Force systems using <strong>LangChain/LangGraph</strong>,
                  enabling automated decision-making and workflow orchestration across
                  mission-critical operations. Built <strong>NLP-to-SQL agents</strong> that translate
                  natural language queries into optimized database operations, and deployed
                  <strong> secure local inference servers</strong> for classified environments.
                </p>
              </div>

              {/* Mid-Section CTA */}
              <div className="bg-gray-800 border border-yellow-400/30 rounded-xl p-8 text-center">
                <h4 className="text-xl text-white mb-2">Ready to put AI agents to work for your organization?</h4>
                <p className="text-gray-300 mb-5 text-sm max-w-xl mx-auto">
                  Whether you need cloud-hosted orchestration or a fully air-gapped local deployment, let's design the right agentic architecture for your use case.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center bg-yellow-400 text-black px-6 py-3 rounded-lg hover:bg-yellow-300 transition-colors text-sm"
                >
                  Discuss Your Agentic Workflow Needs
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </ServiceModule>

            {/* ── Service 4: Advanced Analytics ── */}
            <ServiceModule
              id="analytics"
              icon={<BrainCircuit className="h-7 w-7 text-yellow-400" />}
              title="Advanced Analytics"
              tagline="From 98% accuracy ML models to causal policy analysis that drives multi-million dollar decisions"
              description="We build, validate, and deploy the full spectrum of analytical solutions, including ML model development for classification, regression, and sound recognition alongside rigorous causal inference methods that move beyond correlation to answer why things happen and what to do about it."
            >
              {/* Key Differentiators */}
              <div className="mb-10 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-800 border border-cyan-500/30 rounded-lg p-6">
                  <div className="flex items-center mb-2">
                    <AudioLines className="h-5 w-5 text-cyan-400 mr-2" />
                    <span className="text-cyan-400 text-xs tracking-wide uppercase">Key Differentiator</span>
                  </div>
                  <h4 className="text-lg text-white mb-2">98% Drone Sound Classification</h4>
                  <p className="text-gray-300 text-sm">
                    Built a production-grade audio classification model using MFCCs and Mel spectrograms that achieved 98% accuracy for real-time drone detection, proving our models exceed industry benchmarks where mission-critical precision matters most.
                  </p>
                </div>
                <div className="bg-gray-800 border border-purple-500/30 rounded-lg p-6">
                  <div className="flex items-center mb-2">
                    <TrendingUp className="h-5 w-5 text-purple-400 mr-2" />
                    <span className="text-purple-400 text-xs tracking-wide uppercase">Key Differentiator</span>
                  </div>
                  <h4 className="text-lg text-white mb-2">Causal Policy Analysis with Multi-Million Dollar Impact</h4>
                  <p className="text-gray-300 text-sm">
                    Applied causal inference methodologies to model Air Force policy changes, delivering actionable insights that directly resulted in multi-million dollar cost savings, not just correlation, but true causation.
                  </p>
                </div>
              </div>

              {/* What Your Analytics Will Deliver — Outcome Clusters */}
              <div className="mb-10">
                <h3 className="text-xl text-white mb-2 flex items-center">
                  <Target className="h-5 w-5 text-yellow-400 mr-2" />
                  What Your Analytics Will Deliver
                </h3>
                <p className="text-gray-400 mb-6 text-sm">Capabilities grouped by the outcomes they enable.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Cluster 1: Predict & Classify */}
                  <div className="bg-gray-900 border border-gray-700 rounded-lg p-6">
                    <div className="flex items-center mb-3">
                      <div className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center mr-3">
                        <BrainCircuit className="h-5 w-5 text-yellow-400" />
                      </div>
                      <div>
                        <h4 className="text-white">Predict & Classify</h4>
                        <p className="text-gray-400 text-xs">ML models that see what humans can't</p>
                      </div>
                    </div>
                    <ul className="space-y-2 text-sm text-gray-300">
                      <li className="flex items-start"><CheckCircle className="h-4 w-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />Classification Models (Image, Audio, Text)</li>
                      <li className="flex items-start"><CheckCircle className="h-4 w-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />Regression & Forecasting Models</li>
                      <li className="flex items-start"><CheckCircle className="h-4 w-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />Sound Recognition & Signal Processing</li>
                      <li className="flex items-start"><CheckCircle className="h-4 w-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />Computer Vision & Object Detection</li>
                    </ul>
                  </div>

                  {/* Cluster 2: Understand Why & Optimize */}
                  <div className="bg-gray-900 border border-gray-700 rounded-lg p-6">
                    <div className="flex items-center mb-3">
                      <div className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center mr-3">
                        <FlaskConical className="h-5 w-5 text-purple-400" />
                      </div>
                      <div>
                        <h4 className="text-white">Understand Why & Optimize</h4>
                        <p className="text-gray-400 text-xs">Move from correlation to causation</p>
                      </div>
                    </div>
                    <ul className="space-y-2 text-sm text-gray-300">
                      <li className="flex items-start"><CheckCircle className="h-4 w-4 text-purple-500 mr-2 mt-0.5 flex-shrink-0" />Causal Inference & Statistical Modeling</li>
                      <li className="flex items-start"><CheckCircle className="h-4 w-4 text-purple-500 mr-2 mt-0.5 flex-shrink-0" />Policy Impact Analysis & Forecasting</li>
                      <li className="flex items-start"><CheckCircle className="h-4 w-4 text-purple-500 mr-2 mt-0.5 flex-shrink-0" />A/B Testing & Experimental Design</li>
                      <li className="flex items-start"><CheckCircle className="h-4 w-4 text-purple-500 mr-2 mt-0.5 flex-shrink-0" />ROI Modeling & Cost-Benefit Analysis</li>
                    </ul>
                  </div>

                  {/* Cluster 3: Build & Deploy Production Models */}
                  <div className="bg-gray-900 border border-gray-700 rounded-lg p-6">
                    <div className="flex items-center mb-3">
                      <div className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center mr-3">
                        <Cpu className="h-5 w-5 text-green-400" />
                      </div>
                      <div>
                        <h4 className="text-white">Build & Deploy Production Models</h4>
                        <p className="text-gray-400 text-xs">From notebook to production pipeline</p>
                      </div>
                    </div>
                    <ul className="space-y-2 text-sm text-gray-300">
                      <li className="flex items-start"><CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />Deep Learning Architectures (CNN, RNN, Transformers)</li>
                      <li className="flex items-start"><CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />Transfer Learning & Fine-Tuning</li>
                      <li className="flex items-start"><CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />MLOps & Model Deployment</li>
                      <li className="flex items-start"><CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />CUDA & GPU Acceleration</li>
                    </ul>
                  </div>

                  {/* Cluster 4: Validate & Trust */}
                  <div className="bg-gray-900 border border-gray-700 rounded-lg p-6">
                    <div className="flex items-center mb-3">
                      <div className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center mr-3">
                        <ShieldCheck className="h-5 w-5 text-amber-400" />
                      </div>
                      <div>
                        <h4 className="text-white">Validate & Trust</h4>
                        <p className="text-gray-400 text-xs">Results you can stake decisions on</p>
                      </div>
                    </div>
                    <ul className="space-y-2 text-sm text-gray-300">
                      <li className="flex items-start"><CheckCircle className="h-4 w-4 text-amber-500 mr-2 mt-0.5 flex-shrink-0" />Model Validation & Performance Optimization</li>
                      <li className="flex items-start"><CheckCircle className="h-4 w-4 text-amber-500 mr-2 mt-0.5 flex-shrink-0" />Feature Engineering & Selection</li>
                      <li className="flex items-start"><CheckCircle className="h-4 w-4 text-amber-500 mr-2 mt-0.5 flex-shrink-0" />Econometric Methods (DiD, IV, PSM)</li>
                      <li className="flex items-start"><CheckCircle className="h-4 w-4 text-amber-500 mr-2 mt-0.5 flex-shrink-0" />Strategic Decision Support Systems</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Segmentation Analysis */}
              <div className="mb-10">
                <h3 className="text-xl text-white mb-2 flex items-center">
                  <Users className="h-5 w-5 text-yellow-400 mr-2" />
                  Segmentation Analysis
                </h3>
                <p className="text-gray-400 mb-6 text-sm">
                  Your customers, products, and operations aren't one-size-fits-all, so your data shouldn't be either. Segmentation analysis uses machine learning to uncover hidden groups in your data that you didn't know existed, revealing distinct patterns in behavior, risk, spending, or performance that get lost in averages.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-5">
                  <div className="rounded-xl overflow-hidden border border-gray-700 shadow-sm">
                    <img src={segImg1} alt="Segmentation cluster visualization" className="w-full h-auto" />
                  </div>
                  <div className="rounded-xl overflow-hidden border border-gray-700 shadow-sm">
                    <img src={segImg2} alt="Customer segmentation scatter plot" className="w-full h-auto" />
                  </div>
                  <div className="rounded-xl overflow-hidden border border-gray-700 shadow-sm">
                    <img src={segImg3} alt="Cluster analysis heatmap" className="w-full h-auto" />
                  </div>
                  <div className="rounded-xl overflow-hidden border border-gray-700 shadow-sm">
                    <img src={segImg4} alt="Segmentation profile breakdown" className="w-full h-auto" />
                  </div>
                </div>
                <div className="bg-gray-800 border border-indigo-500/30 rounded-lg p-5">
                  <h4 className="text-white mb-2">What this means for your business</h4>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li className="flex items-start"><CheckCircle className="h-4 w-4 text-indigo-500 mr-2 mt-0.5 flex-shrink-0" />Discover high-value customer segments you're currently under-serving</li>
                    <li className="flex items-start"><CheckCircle className="h-4 w-4 text-indigo-500 mr-2 mt-0.5 flex-shrink-0" />Target marketing spend on groups most likely to convert</li>
                    <li className="flex items-start"><CheckCircle className="h-4 w-4 text-indigo-500 mr-2 mt-0.5 flex-shrink-0" />Identify at-risk groups before churn happens</li>
                    <li className="flex items-start"><CheckCircle className="h-4 w-4 text-indigo-500 mr-2 mt-0.5 flex-shrink-0" />Replace gut-feel personas with data-backed segments</li>
                  </ul>
                </div>
              </div>

              {/* ML Model Health Monitoring */}
              <div className="mb-10">
                <h3 className="text-xl text-white mb-2 flex items-center">
                  <Activity className="h-5 w-5 text-yellow-400 mr-2" />
                  ML Model Health Monitoring
                </h3>
                <p className="text-gray-400 mb-6 text-sm">
                  A model that was 95% accurate six months ago might be making bad predictions today, and you'd never know without monitoring. The real world changes: customer behavior shifts, markets move, and data patterns evolve. We continuously watch your models for signs of drift and automatically retrain them when accuracy starts to slip, so your predictions stay reliable without you having to think about it.
                </p>
                <div className="bg-gray-800 border border-amber-500/30 rounded-lg p-5">
                  <h4 className="text-white mb-2">How it works in plain terms</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-amber-400 text-sm">1</span>
                      </div>
                      <div>
                        <p className="text-sm text-white mb-1">We watch</p>
                        <p className="text-xs text-gray-400">Your models are monitored 24/7 for accuracy drops, data shifts, and prediction anomalies.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-amber-400 text-sm">2</span>
                      </div>
                      <div>
                        <p className="text-sm text-white mb-1">We catch it early</p>
                        <p className="text-xs text-gray-400">When a model starts drifting, predicting outside the norm, we flag it before it impacts your decisions.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-amber-400 text-sm">3</span>
                      </div>
                      <div>
                        <p className="text-sm text-white mb-1">We retrain & redeploy</p>
                        <p className="text-xs text-gray-400">Updated models are retrained on fresh data and pushed live, no downtime, no manual intervention.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Technology Stack */}
              <div className="mb-10">
                <h3 className="text-xl text-white mb-5 flex items-center">
                  <Code className="h-5 w-5 text-yellow-400 mr-2" />
                  Technology Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {["TensorFlow", "PyTorch", "Keras", "scikit-learn", "Librosa", "OpenCV", "CUDA", "MLflow", "Docker", "NumPy / SciPy", "Python", "R", "DoWhy", "EconML", "statsmodels", "CausalImpact", "pandas", "Jupyter", "Matplotlib / Seaborn"].map((tech) => (
                    <span key={tech} className="bg-gray-900 border border-gray-700 text-gray-200 px-4 py-2 rounded-lg text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Technical Proof */}
              <div className="bg-gray-800 border-l-4 border-yellow-400 p-6 rounded-r-lg mb-8">
                <h4 className="text-lg text-white mb-2">Technical Proof</h4>
                <p className="text-gray-300">
                  Developed a <strong>98% accuracy</strong> drone sound classification model using MFCCs and Mel spectrograms, and <strong>90% validation</strong> lane detection models for autonomous systems. Applied <strong>Causal Inference</strong> methodologies to model Air Force policy changes, delivering actionable insights that resulted in <strong>multi-million dollar cost savings</strong>.
                </p>
              </div>

              {/* Mid-Section CTA */}
              <div className="bg-gray-800 border border-yellow-400/30 rounded-xl p-8 text-center">
                <h4 className="text-xl text-white mb-2">Need models that predict accurately and explain why?</h4>
                <p className="text-gray-300 mb-5 text-sm max-w-xl mx-auto">
                  From high-precision classification to causal policy analysis, let's build the analytical foundation your decisions deserve.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center bg-yellow-400 text-black px-6 py-3 rounded-lg hover:bg-yellow-300 transition-colors text-sm"
                >
                  Discuss Your Analytics Needs
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </ServiceModule>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gray-900 border-t border-gray-700 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl mb-6">
              Let's Build Your AI Solution
            </h2>
            <p className="text-xl mb-8 text-gray-300">
              Schedule a consultation to discuss how these services can transform your
              organization.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center bg-yellow-400 text-black px-8 py-4 rounded-lg hover:bg-yellow-300 transition-colors text-lg"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />

      {/* Schema.org Service Markup */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          itemListElement: [
            {
              "@type": "Service",
              name: "Business Web Development",
              description:
                "High-converting websites and web applications built with React, Next.js, TypeScript, and Tailwind CSS, SEO and AI-search optimized",
              provider: { "@type": "Organization", name: "Pantera Claw" },
            },
            {
              "@type": "Service",
              name: "Database Management, Creation & Optimization",
              description:
                "Enterprise-grade database infrastructure across Databricks, PostgreSQL, and Snowflake with secure, auditable pipelines",
              provider: { "@type": "Organization", name: "Pantera Claw" },
            },
            {
              "@type": "Service",
              name: "Dashboard & Visualization Development",
              description:
                "Interactive dashboards and data visualization across Tableau, Power BI, and R Shiny with predictive analytics and causal analysis integration",
              provider: { "@type": "Organization", name: "Pantera Claw" },
            },
            {
              "@type": "Service",
              name: "Agentic Workflow Design",
              description:
                "Autonomous LLM workflows and multi-agent architectures using LangGraph orchestration",
              provider: { "@type": "Organization", name: "Pantera Claw" },
            },
            {
              "@type": "Service",
              name: "Advanced Analytics",
              description:
                "ML model development for classification, regression, and sound recognition combined with causal inference methods for policy impact analysis and strategic decision support",
              provider: { "@type": "Organization", name: "Pantera Claw" },
            },
          ],
        })}
      </script>
    </div>
  );
}