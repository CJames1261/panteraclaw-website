import { Link } from "react-router";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { ArrowLeft, CheckCircle, Shield, Zap } from "lucide-react";
import { Helmet } from "react-helmet-async";

export function CaseStudyNLP() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Helmet>
        <title>NLP to SQL Pipeline Case Study | Pantera Claw</title>
        <meta name="description" content="How Pantera Claw built a natural language to SQL pipeline that lets business users query databases in plain English — no SQL knowledge required. A deep dive into our NLP and LLM integration work." />
      </Helmet>
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-indigo-50 py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link to="/" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-6">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Link>
            <h1 className="text-4xl md:text-5xl mb-4 text-gray-900">
              NLP-to-SQL for the Enterprise
            </h1>
            <p className="text-xl text-gray-700">
              Secure Natural Language Database Querying with GPU Acceleration
            </p>
          </div>
        </section>

        {/* Content */}
        <article className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Challenge */}
            <section className="mb-12">
              <h2 className="text-3xl mb-6 text-gray-900">The Challenge</h2>
              <p className="text-lg text-gray-700 mb-4">
                Enterprise data teams face a critical bottleneck: non-technical stakeholders need insights from 
                complex databases, but writing SQL queries requires specialized knowledge. Traditional BI tools 
                offer limited flexibility, while giving direct database access creates security and data quality risks.
              </p>
              <p className="text-lg text-gray-700">
                The requirement was to build a secure, production-ready system that allows natural language queries 
                to be automatically translated into SQL, with <strong>enterprise-grade security controls</strong>, 
                <strong>GPU acceleration</strong> for real-time performance, and deployment within existing 
                infrastructure constraints.
              </p>
            </section>

            {/* Technical Approach */}
            <section className="mb-12">
              <h2 className="text-3xl mb-6 text-gray-900">Technical Architecture</h2>
              
              <div className="bg-gray-50 p-8 rounded-lg mb-6">
                <h3 className="text-2xl mb-4 text-gray-900">Natural Language to SQL Pipeline</h3>
                <p className="text-gray-700 mb-4">
                  We implemented a multi-stage NLP pipeline optimized for accuracy and security:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong className="text-gray-900">Schema-Aware Intent Recognition:</strong>
                      <span className="text-gray-700"> LLM fine-tuned on enterprise database schema to understand 
                      table relationships, column semantics, and business logic constraints.</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong className="text-gray-900">Few-Shot SQL Generation:</strong>
                      <span className="text-gray-700"> Prompt engineering with domain-specific examples enabling 
                      accurate SQL synthesis for complex queries including JOINs, aggregations, and subqueries.</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong className="text-gray-900">SQL Validation & Sanitization:</strong>
                      <span className="text-gray-700"> Multi-layer validation including syntax checking, query 
                      complexity analysis, and injection attack prevention before execution.</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong className="text-gray-900">Result Interpretation:</strong>
                      <span className="text-gray-700"> Post-processing layer that translates query results back 
                      into natural language summaries with automatic chart generation.</span>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg mb-6">
                <h3 className="text-2xl mb-4 text-gray-900">GPU-Accelerated Deployment</h3>
                <p className="text-gray-700 mb-4">
                  To meet sub-second response requirements, we optimized the inference pipeline:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>CUDA Integration:</strong> Native GPU acceleration for transformer model inference (T4/A10G GPUs)</li>
                  <li><strong>Model Quantization:</strong> INT8 quantization reducing memory footprint by 4x with &lt;2% accuracy loss</li>
                  <li><strong>Batch Processing:</strong> Dynamic batching for concurrent user requests maximizing GPU utilization</li>
                  <li><strong>Caching Layer:</strong> Redis-based semantic caching for frequently asked queries</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-2xl mb-4 text-gray-900">Security Architecture</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Shield className="h-6 w-6 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong className="text-gray-900">Read-Only Database Access:</strong>
                      <p className="text-gray-700">Application uses dedicated read-only credentials with no write permissions</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Shield className="h-6 w-6 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong className="text-gray-900">Query Whitelisting:</strong>
                      <p className="text-gray-700">Automated filtering blocks DROP, DELETE, UPDATE, and other modification statements</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Shield className="h-6 w-6 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong className="text-gray-900">Row-Level Security:</strong>
                      <p className="text-gray-700">User authentication integrated with database RLS policies for data access control</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Shield className="h-6 w-6 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong className="text-gray-900">Audit Logging:</strong>
                      <p className="text-gray-700">Complete logging of all queries, results, and user interactions for compliance</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Implementation */}
            <section className="mb-12">
              <h2 className="text-3xl mb-6 text-gray-900">Implementation: Streamlit Application</h2>
              <p className="text-lg text-gray-700 mb-4">
                Deployed as a secure Streamlit web application providing an intuitive interface for business users:
              </p>
              <ul className="space-y-3 text-gray-700 mb-6">
                <li className="flex items-start">
                  <Zap className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span><strong>Conversational UI:</strong> Natural language input with query suggestions and auto-complete</span>
                </li>
                <li className="flex items-start">
                  <Zap className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span><strong>Visual Analytics:</strong> Automatic chart generation (bar, line, scatter) from query results</span>
                </li>
                <li className="flex items-start">
                  <Zap className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span><strong>Query History:</strong> Save and share queries across team members</span>
                </li>
                <li className="flex items-start">
                  <Zap className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span><strong>Export Options:</strong> CSV, Excel, and PDF export for generated reports</span>
                </li>
              </ul>
              <p className="text-lg text-gray-700">
                The application is containerized with Docker and deployed on enterprise Kubernetes infrastructure, 
                with auto-scaling based on GPU utilization.
              </p>
            </section>

            {/* Results */}
            <section className="mb-12">
              <h2 className="text-3xl mb-6 text-gray-900">Results & Impact</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-blue-50 p-6 rounded-lg text-center border-2 border-blue-200">
                  <div className="text-4xl text-blue-600 mb-2">87%</div>
                  <div className="text-gray-700">SQL Accuracy (First Pass)</div>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg text-center border-2 border-blue-200">
                  <div className="text-4xl text-blue-600 mb-2">&lt;800ms</div>
                  <div className="text-gray-700">Average Response Time</div>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg text-center border-2 border-blue-200">
                  <div className="text-4xl text-blue-600 mb-2">60%</div>
                  <div className="text-gray-700">Reduction in Analyst Workload</div>
                </div>
              </div>
              <p className="text-lg text-gray-700 mb-4">
                The deployed system achieved <strong>87% first-pass SQL accuracy</strong> on complex business queries, 
                with 95%+ accuracy after user refinement. Key business outcomes include:
              </p>
              <ul className="space-y-2 text-gray-700 mb-4">
                <li>• <strong>Self-Service Analytics:</strong> Product managers and executives can now query data independently</li>
                <li>• <strong>Faster Decision Cycles:</strong> Ad-hoc analysis time reduced from hours to minutes</li>
                <li>• <strong>Reduced Bottlenecks:</strong> Data team freed from routine query requests to focus on strategic work</li>
                <li>• <strong>Improved Data Literacy:</strong> Users learn SQL patterns through generated queries</li>
              </ul>
            </section>

            {/* Technical Stack */}
            <section className="mb-12">
              <h2 className="text-3xl mb-6 text-gray-900">Technical Stack</h2>
              <div className="flex flex-wrap gap-3">
                <span className="bg-gray-100 text-gray-800 px-4 py-2 rounded-lg border border-gray-300">Python</span>
                <span className="bg-gray-100 text-gray-800 px-4 py-2 rounded-lg border border-gray-300">Streamlit</span>
                <span className="bg-gray-100 text-gray-800 px-4 py-2 rounded-lg border border-gray-300">LangChain</span>
                <span className="bg-gray-100 text-gray-800 px-4 py-2 rounded-lg border border-gray-300">OpenAI / Local LLMs</span>
                <span className="bg-gray-100 text-gray-800 px-4 py-2 rounded-lg border border-gray-300">CUDA / PyTorch</span>
                <span className="bg-gray-100 text-gray-800 px-4 py-2 rounded-lg border border-gray-300">PostgreSQL</span>
                <span className="bg-gray-100 text-gray-800 px-4 py-2 rounded-lg border border-gray-300">Redis</span>
                <span className="bg-gray-100 text-gray-800 px-4 py-2 rounded-lg border border-gray-300">Docker / Kubernetes</span>
                <span className="bg-gray-100 text-gray-800 px-4 py-2 rounded-lg border border-gray-300">SQLAlchemy</span>
              </div>
            </section>

            {/* Key Takeaways */}
            <section className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-lg">
              <h2 className="text-3xl mb-6 text-gray-900">Key Takeaways</h2>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">
                    <strong>Schema-Aware Prompting</strong> is critical, providing LLMs with database structure,
                    relationships, and business context dramatically improves SQL generation accuracy.
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">
                    <strong>Security Cannot Be an Afterthought.</strong> Building defense in depth (read-only access,
                    query filtering, RLS) from day one is essential for enterprise adoption.
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">
                    <strong>GPU Acceleration Unlocks Real-Time UX.</strong> Sub-second response times transform
                    NLP-to-SQL from a novelty to a practical daily tool for business users.
                  </span>
                </li>
              </ul>
            </section>
          </div>
        </article>

        {/* CTA Section */}
        <section className="py-16 bg-gray-900 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl mb-4">
              Unlock Your Data with Natural Language Interfaces
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's build a secure, production-ready NLP solution for your enterprise data systems.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors text-lg"
            >
              Schedule a Consultation
            </Link>
          </div>
        </section>
      </main>

      <Footer />

      {/* Schema.org Case Study Markup */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "TechArticle",
          "headline": "NLP-to-SQL for the Enterprise: Secure Natural Language Database Querying",
          "description": "GPU-accelerated Streamlit application enabling non-technical users to query complex databases using natural language",
          "author": {
            "@type": "Person",
            "name": "Chris James"
          },
          "publisher": {
            "@type": "Organization",
            "name": "Pantera Claw"
          },
          "keywords": "NLP, SQL, natural language processing, database querying, LangChain, CUDA, GPU acceleration, Streamlit, enterprise AI"
        })}
      </script>
    </div>
  );
}
