import { Link } from "react-router";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Home } from "lucide-react";

export function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1 flex items-center justify-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-16">
          <h1 className="text-6xl mb-6 text-gray-900">404</h1>
          <h2 className="text-3xl mb-4 text-gray-900">Page Not Found</h2>
          <p className="text-xl text-gray-700 mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Link
            to="/"
            className="inline-flex items-center justify-center bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors text-lg"
          >
            <Home className="mr-2 h-5 w-5" />
            Return Home
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
