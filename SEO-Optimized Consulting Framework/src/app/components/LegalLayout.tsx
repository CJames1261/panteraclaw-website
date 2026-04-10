import { Link } from "react-router";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { ArrowLeft } from "lucide-react";

interface LegalLayoutProps {
  title: string;
  lastUpdated: string;
  children: React.ReactNode;
}

export function LegalLayout({ title, lastUpdated, children }: LegalLayoutProps) {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Header />
      <main className="flex-1 max-w-4xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-16">
        <Link
          to="/legal"
          className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-yellow-400 transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Legal
        </Link>

        <div className="border-b border-gray-800 pb-6 mb-10">
          <h1 className="text-3xl font-bold text-white mb-2">{title}</h1>
          <p className="text-gray-500 text-sm">Last updated: {lastUpdated}</p>
          <p className="text-yellow-500 text-xs mt-2">
            Draft — review with a licensed attorney before relying on this document.
          </p>
        </div>

        <div className="
          text-gray-300 leading-relaxed max-w-none
          [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-white [&_h2]:mt-14 [&_h2]:mb-5 [&_h2]:border-b [&_h2]:border-gray-800 [&_h2]:pb-3
          [&_h3]:text-base [&_h3]:font-semibold [&_h3]:text-yellow-400 [&_h3]:mt-10 [&_h3]:mb-4
          [&_p]:text-gray-300 [&_p]:leading-loose [&_p]:my-5
          [&_ul]:my-6 [&_ul]:space-y-2 [&_ul]:list-disc [&_ul]:pl-6
          [&_ol]:my-6 [&_ol]:space-y-2 [&_ol]:list-decimal [&_ol]:pl-6
          [&_li]:text-gray-300 [&_li]:leading-relaxed
          [&_strong]:text-white [&_strong]:font-semibold
          [&_a]:text-yellow-400 [&_a]:no-underline hover:[&_a]:underline
          [&_table]:text-sm [&_table]:w-full [&_table]:my-6
          [&_th]:text-white [&_th]:bg-gray-900 [&_th]:px-4 [&_th]:py-2 [&_th]:text-left [&_th]:border [&_th]:border-gray-700
          [&_td]:text-gray-300 [&_td]:px-4 [&_td]:py-3 [&_td]:border [&_td]:border-gray-800 [&_td]:align-top
        ">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
}
