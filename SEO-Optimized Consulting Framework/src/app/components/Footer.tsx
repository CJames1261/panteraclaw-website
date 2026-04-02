import { Link } from "react-router";
import { Linkedin, Github, Mail, Phone, MapPin } from "lucide-react";
import logo from "../../imports/Pantera_Claw.png";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <img src={logo} alt="Pantera Claw" className="h-10 md:h-12 brightness-0 invert" />
            </div>
            <p className="text-gray-400 mb-4">
              AI & Data Consulting — databases, dashboards, agentic workflows, and advanced analytics for companies ready to put their data to work.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-500 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-500 transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-blue-500 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-blue-500 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-blue-500 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-blue-500 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <Phone className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-400">801.898.0911</span>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-400">chrisjames313801@gmail.com</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-400">Salt Lake City, Utah</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Agentic AI LLC. All rights reserved.</p>
        </div>
      </div>

      {/* Schema.org LocalBusiness Markup */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "name": "Pantera Claw - Agentic AI LLC",
          "description": "AI and data consulting specializing in LangGraph orchestration, causal inference, and enterprise-grade data pipelines.",
          "founder": {
            "@type": "Person",
            "name": "Chris James",
            "jobTitle": "AI Consultant",
            "alumniOf": [
              {
                "@type": "CollegeOrUniversity",
                "name": "Nuemont University"
              },
              {
                "@type": "CollegeOrUniversity",
                "name": "BYU-Idaho"
              }
            ]
          },
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