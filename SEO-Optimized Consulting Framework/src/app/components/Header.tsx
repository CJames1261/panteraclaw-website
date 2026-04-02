import { Link } from "react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-black border-b border-gray-800 sticky top-0 z-50">
      <nav className="w-full px-4 sm:px-6 lg:px-8">
        {/* Desktop Navigation — centered with even spacing */}
        <div className="hidden md:flex items-center justify-center h-16 gap-24">
          <Link to="/" className="text-gray-300 hover:text-yellow-400 transition-colors text-base tracking-wide uppercase">
            Home
          </Link>
          <Link to="/services" className="text-gray-300 hover:text-yellow-400 transition-colors text-base tracking-wide uppercase">
            Services
          </Link>
          <Link to="/projects" className="text-gray-300 hover:text-yellow-400 transition-colors text-base tracking-wide uppercase">
            Solutions Lab
          </Link>
          <Link to="/about" className="text-gray-300 hover:text-yellow-400 transition-colors text-base tracking-wide uppercase">
            About
          </Link>
          <Link to="/contact" className="bg-yellow-400 text-black px-6 py-2 rounded-lg hover:bg-yellow-500 transition-colors text-sm font-semibold tracking-wide uppercase">
            Contact
          </Link>
        </div>

        {/* Mobile Header */}
        <div className="flex md:hidden items-center justify-between h-16">
          <span className="text-yellow-400 font-semibold tracking-wide">Pantera Claw</span>
          <button
            className="p-2 text-gray-300"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-800">
            <div className="flex flex-col items-center space-y-4">
              <Link
                to="/"
                className="text-gray-300 hover:text-yellow-400 transition-colors text-base tracking-wide uppercase"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/services"
                className="text-gray-300 hover:text-yellow-400 transition-colors text-base tracking-wide uppercase"
                onClick={() => setMobileMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                to="/projects"
                className="text-gray-300 hover:text-yellow-400 transition-colors text-base tracking-wide uppercase"
                onClick={() => setMobileMenuOpen(false)}
              >
                Solutions Lab
              </Link>
              <Link
                to="/about"
                className="text-gray-300 hover:text-yellow-400 transition-colors text-base tracking-wide uppercase"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="/contact"
                className="bg-yellow-400 text-black px-6 py-2 rounded-lg hover:bg-yellow-500 transition-colors text-sm font-semibold tracking-wide uppercase"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
