import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import logo from "../../imports/Pantera_Claw.webp";
import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would send to a backend
    alert("Thank you for your interest! We'll be in touch soon.");
    setFormData({ name: "", email: "", company: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-black">
      <Header />

      <main className="flex-1">
        {/* Fixed ghost watermark — stays centered as user scrolls */}
        <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-[1]">
          <img src={logo} alt="" aria-hidden="true" className="w-[600px] md:w-[700px] max-w-full opacity-[0.05] select-none mix-blend-screen" />
        </div>

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-black to-gray-900 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl text-center mb-6 text-white">
              Let's Build Something Extraordinary
            </h1>
            <p className="text-xl text-center text-gray-300 max-w-3xl mx-auto">
              Ready to deploy mission-critical AI systems? Schedule a consultation to discuss your project.
            </p>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-16 bg-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div>
                <h2 className="text-3xl mb-6 text-white">Get in Touch</h2>
                <p className="text-lg text-gray-300 mb-8">
                  Whether you're exploring agentic AI workflows, need high-precision ML models, or require
                  DoD-compliant data systems, we're here to help. Reach out to discuss your project requirements
                  and learn how Pantera Claw can deliver production-ready solutions.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <Phone className="h-6 w-6 text-yellow-400 mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg mb-1 text-white">Phone</h3>
                      <a href="tel:+18018980911" className="text-gray-300 hover:text-yellow-400 transition-colors">
                        801.898.0911
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Mail className="h-6 w-6 text-yellow-400 mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg mb-1 text-white">Email</h3>
                      <a href="mailto:info@panteraclaw.com" className="text-gray-300 hover:text-yellow-400 transition-colors">
                        info@panteraclaw.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-yellow-400 mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg mb-1 text-white">Location</h3>
                      <p className="text-gray-300">
                        Salt Lake City, Utah<br />
                        Serving the Silicon Slopes and beyond
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-12 bg-gray-900 p-6 rounded-lg border border-yellow-400/30">
                  <h3 className="text-xl mb-3 text-white">Business Hours</h3>
                  <p className="text-gray-300 mb-2">Monday - Friday: 9:00 AM - 6:00 PM MST</p>
                  <p className="text-gray-300">Saturday - Sunday: By appointment</p>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <div className="bg-gray-900 p-8 rounded-lg border border-gray-700">
                  <h2 className="text-2xl mb-6 text-white">Send us a Message</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm mb-2 text-gray-300">
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-yellow-400 focus:border-transparent outline-none transition-all"
                        placeholder="Your name"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm mb-2 text-gray-300">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-yellow-400 focus:border-transparent outline-none transition-all"
                        placeholder="your.email@company.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="company" className="block text-sm mb-2 text-gray-300">
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-yellow-400 focus:border-transparent outline-none transition-all"
                        placeholder="Your company"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm mb-2 text-gray-300">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        rows={6}
                        className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-yellow-400 focus:border-transparent outline-none transition-all resize-none"
                        placeholder="Tell us about your project..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-yellow-400 text-black px-6 py-3 rounded-lg hover:bg-yellow-500 transition-colors flex items-center justify-center text-lg font-semibold"
                    >
                      Send Message
                      <Send className="ml-2 h-5 w-5" />
                    </button>
                  </form>
                </div>

                <p className="text-sm text-gray-500 mt-4 text-center">
                  By submitting this form, you agree to be contacted by Pantera Claw regarding your inquiry.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section className="py-16 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl text-center mb-12 text-white">
              Service Areas
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <h3 className="text-xl mb-3 text-yellow-400">Utah Tech Corridor</h3>
                <p className="text-gray-300">
                  Salt Lake City, Silicon Slopes, Lehi, Provo, Utah County, and surrounding areas
                </p>
              </div>
              <div>
                <h3 className="text-xl mb-3 text-yellow-400">Remote Consulting</h3>
                <p className="text-gray-300">
                  Nationwide AI consulting services for enterprise and government clients
                </p>
              </div>
              <div>
                <h3 className="text-xl mb-3 text-yellow-400">On-Site Support</h3>
                <p className="text-gray-300">
                  Available for critical deployments and strategic projects requiring in-person collaboration
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
