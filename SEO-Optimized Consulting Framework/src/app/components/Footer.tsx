import { Link } from "react-router";
import { Linkedin, Github, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

          {/* Brand */}
          <div className="col-span-1">
            <p className="text-white font-semibold text-lg tracking-wide uppercase mb-1">Pantera Claw</p>
            <p className="text-yellow-400 text-sm mb-5">Precision AI. Real Results.</p>
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-yellow-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-yellow-400 transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white text-sm font-semibold uppercase tracking-wide mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-yellow-400 transition-colors text-sm">Home</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-yellow-400 transition-colors text-sm">Services</Link></li>
              <li><Link to="/projects" className="text-gray-400 hover:text-yellow-400 transition-colors text-sm">Solutions Lab</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-yellow-400 transition-colors text-sm">About</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-yellow-400 transition-colors text-sm">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white text-sm font-semibold uppercase tracking-wide mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link to="/services#webdev" className="text-gray-400 hover:text-yellow-400 transition-colors text-sm">Web Development</Link></li>
              <li><Link to="/services#database" className="text-gray-400 hover:text-yellow-400 transition-colors text-sm">Database Management</Link></li>
              <li><Link to="/services#dashboards" className="text-gray-400 hover:text-yellow-400 transition-colors text-sm">Dashboards & Reporting</Link></li>
              <li><Link to="/services#agentic" className="text-gray-400 hover:text-yellow-400 transition-colors text-sm">AI & LLM Integration</Link></li>
              <li><Link to="/services#analytics" className="text-gray-400 hover:text-yellow-400 transition-colors text-sm">Advanced Analytics</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white text-sm font-semibold uppercase tracking-wide mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 flex-shrink-0 text-yellow-400" />
                <a href="tel:+18018980911" className="text-gray-400 hover:text-yellow-400 transition-colors text-sm">801.898.0911</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 flex-shrink-0 text-yellow-400" />
                <a href="mailto:info@panteraclaw.com" className="text-gray-400 hover:text-yellow-400 transition-colors text-sm">info@panteraclaw.com</a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 flex-shrink-0 text-yellow-400" />
                <span className="text-gray-400 text-sm">Salt Lake City, Utah</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Agentic AI LLC. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/contact" className="hover:text-yellow-400 transition-colors">Privacy Policy</Link>
            <Link to="/contact" className="hover:text-yellow-400 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>

      {/* Schema.org LocalBusiness Markup */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "name": "Pantera Claw - Agentic AI LLC",
          "description": "AI and data consulting specializing in LangGraph orchestration, causal inference, and enterprise-grade data pipelines.",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Salt Lake City",
            "addressRegion": "UT",
            "addressCountry": "US"
          },
          "telephone": "+1-801-898-0911",
          "url": "https://panteraclaw.com",
          "areaServed": {
            "@type": "State",
            "name": "Utah"
          }
        })}
      </script>
    </footer>
  );
}
