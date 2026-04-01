import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { GraduationCap, Award, Briefcase } from "lucide-react";

export function About() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-indigo-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl text-center mb-6 text-gray-900">
              About Pantera Claw
            </h1>
            <p className="text-xl text-center text-gray-700 max-w-3xl mx-auto">
              Mission-critical AI expertise built on a foundation of advanced research and real-world deployment experience.
            </p>
          </div>
        </section>

        {/* Leadership */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl text-center mb-12 text-gray-900">Leadership</h2>
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl mb-2 text-gray-900">Chris James</h3>
              <p className="text-xl text-blue-600 mb-6">Founder & Principal AI Consultant</p>
              <p className="text-lg text-gray-700 mb-6">
                Chris James is a specialized AI consultant with deep expertise in autonomous systems, causal inference, 
                and enterprise-scale machine learning. With a Master's in Applied AI and extensive experience deploying 
                solutions for the Department of Defense, Chris brings a unique combination of cutting-edge research 
                knowledge and mission-critical operational experience.
              </p>
              <p className="text-lg text-gray-700">
                As a Master's graduate from <strong>Nuemont University</strong> in Salt Lake City and alumnus of 
                <strong> BYU-Idaho</strong>, Chris has deep roots in the Utah tech ecosystem and a thorough understanding 
                of the Silicon Slopes landscape.
              </p>
            </div>
          </div>
        </section>

        {/* Education & Credentials */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl text-center mb-12 text-gray-900">Education & Credentials</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <GraduationCap className="h-8 w-8 text-blue-600 mr-3" />
                  <h3 className="text-xl text-gray-900">Master of Science in Applied AI</h3>
                </div>
                <p className="text-gray-700 mb-2">Nuemont University, Salt Lake City</p>
                <p className="text-gray-600">
                  Advanced studies in machine learning, causal inference, and autonomous systems with focus on 
                  production deployment and operational AI.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <GraduationCap className="h-8 w-8 text-blue-600 mr-3" />
                  <h3 className="text-xl text-gray-900">Bachelor's Degree</h3>
                </div>
                <p className="text-gray-700 mb-2">BYU-Idaho</p>
                <p className="text-gray-600">
                  Foundation in computer science, mathematics, and analytical thinking.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Highlights */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl text-center mb-12 text-gray-900">Experience Highlights</h2>
            <div className="space-y-8 max-w-4xl mx-auto">
              <div className="flex items-start">
                <Briefcase className="h-6 w-6 text-blue-600 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl mb-2 text-gray-900">Air Force AI Modernization</h3>
                  <p className="text-gray-700">
                    Integrated LLM-based autonomous agents into Air Force operational systems using LangChain and 
                    LangGraph, enabling automated decision-making workflows for mission-critical applications.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <Briefcase className="h-6 w-6 text-blue-600 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl mb-2 text-gray-900">DoD Data Pipeline Engineering</h3>
                  <p className="text-gray-700">
                    Architected and optimized PySpark ETL pipelines in Databricks for Department of Defense data 
                    operations, ensuring full compliance with security and auditability requirements.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <Briefcase className="h-6 w-6 text-blue-600 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl mb-2 text-gray-900">Causal Inference for Policy Analysis</h3>
                  <p className="text-gray-700">
                    Applied advanced causal inference methodologies to model Air Force policy changes, delivering 
                    strategic insights that resulted in multi-million dollar operational savings.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <Briefcase className="h-6 w-6 text-blue-600 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl mb-2 text-gray-900">High-Precision ML Systems</h3>
                  <p className="text-gray-700">
                    Developed production machine learning models achieving 98% accuracy for drone classification 
                    and 90% validation for autonomous vehicle lane detection systems.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Company Mission */}
        <section className="py-16 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-center mb-6">
              <Award className="h-16 w-16" />
            </div>
            <h2 className="text-3xl text-center mb-6">Our Mission</h2>
            <p className="text-xl text-center text-blue-100 mb-8">
              Pantera Claw exists to bridge the gap between cutting-edge AI research and production-ready systems 
              that organizations can trust. We don't just build models—we deploy autonomous systems that act with 
              precision, operate under constraints, and deliver measurable ROI.
            </p>
            <p className="text-lg text-center text-blue-100">
              Whether you're in the Silicon Slopes tech corridor or operating at the enterprise scale, we bring 
              mission-critical AI expertise refined through Department of Defense deployments and grounded in 
              the latest research.
            </p>
          </div>
        </section>

        {/* Utah Connection */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl text-center mb-6 text-gray-900">
              Deep Roots in the Utah Tech Ecosystem
            </h2>
            <p className="text-lg text-gray-700 text-center mb-8">
              Based in <strong>Salt Lake City</strong>, Pantera Claw understands the unique needs of Utah's 
              thriving tech community. From startups in <strong>Lehi's Silicon Slopes</strong> to established 
              enterprises across <strong>Utah County</strong>, we bring world-class AI expertise with local knowledge 
              and accessibility.
            </p>
            <div className="bg-blue-50 border-l-4 border-blue-600 p-6">
              <p className="text-gray-800 text-lg">
                <strong>Local expertise. Global standards.</strong> We deliver the same rigorous, DoD-grade AI 
                systems used by the Department of Defense to forward-thinking organizations across Utah and beyond.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
