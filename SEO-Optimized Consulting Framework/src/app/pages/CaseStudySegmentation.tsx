import { Link } from "react-router";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { ArrowLeft, ArrowRight, CheckCircle, Users, Info, TrendingUp, ShoppingCart, Tag, Star, DollarSign, Target } from "lucide-react";
import logo from "../../imports/Pantera_Claw.png";
import clustersImg from "../../imports/segmentation_clusters.png";

const segments = [
  {
    name: "Balanced Mid-Value Shoppers",
    pct: "6.4%",
    customers: "33,773",
    qty: "17.2",
    price: "$3.62",
    dot: "bg-purple-500",
    border: "border-purple-500/40",
    icon: <Star className="h-5 w-5 text-purple-400" />,
    who: "Reliable, moderate spenders. They buy decent quantities at fair prices, consistent and predictable.",
    opportunity: "Loyalty rewards and bundle deals convert this group well. They're already engaged. Give them a reason to spend more.",
  },
  {
    name: "High-Price, Low-Frequency Buyers",
    pct: "26.8%",
    customers: "142,305",
    qty: "2.3",
    price: "$9.39",
    dot: "bg-blue-500",
    border: "border-blue-500/40",
    icon: <Tag className="h-5 w-5 text-blue-400" />,
    who: "Your premium buyers. They don't purchase often, but when they do, they spend significantly more per item.",
    opportunity: "Premium product launches and exclusive offers perform best here. Sending budget promotions to this group is leaving money on the table.",
  },
  {
    name: "High-Volume Bargain Buyers",
    pct: "15.4%",
    customers: "81,630",
    qty: "35.9",
    price: "$1.40",
    dot: "bg-teal-500",
    border: "border-teal-500/40",
    icon: <ShoppingCart className="h-5 w-5 text-teal-400" />,
    who: "Bulk purchasers chasing the lowest prices. High transaction volume, thin margins per order.",
    opportunity: "Volume-tier pricing and slight margin nudges have outsized revenue impact here. Even a $0.20 price adjustment across 81K customers adds up fast.",
  },
  {
    name: "Low-Engagement Budget Shoppers",
    pct: "31.4%",
    customers: "166,331",
    qty: "2.4",
    price: "$1.88",
    dot: "bg-green-500",
    border: "border-green-500/40",
    icon: <TrendingUp className="h-5 w-5 text-green-400" />,
    who: "Your largest segment, occasional price-sensitive buyers with low average order value.",
    opportunity: "This is your biggest re-engagement opportunity. Converting even 10% of this group to the next tier up would be your highest-ROI marketing move.",
  },
  {
    name: "Consistent Value Seekers",
    pct: "20.0%",
    customers: "106,065",
    qty: "12.8",
    price: "$1.76",
    dot: "bg-yellow-400",
    border: "border-yellow-500/40",
    icon: <CheckCircle className="h-5 w-5 text-yellow-400" />,
    who: "Regular, habit-driven shoppers. They buy consistently in moderate volumes at low-mid prices.",
    opportunity: "Subscriptions and auto-replenishment offers are a natural fit. The buying habit is already there. Make it frictionless.",
  },
];

export function CaseStudySegmentation() {
  return (
    <div className="min-h-screen flex flex-col bg-black">
      <Header />

      <main className="flex-1">
        {/* Fixed ghost watermark — stays centered as user scrolls */}
        <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-[1]">
          <img src={logo} alt="" aria-hidden="true" className="w-[600px] md:w-[700px] max-w-full opacity-[0.05] select-none mix-blend-screen" />
        </div>

        {/* Hero */}
        <section className="relative bg-gradient-to-br from-black to-gray-900 py-16 overflow-hidden">
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              to="/projects"
              className="inline-flex items-center text-gray-400 hover:text-yellow-400 transition-colors mb-8 text-sm"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Solutions Lab
            </Link>

            <div className="flex flex-wrap gap-2 mb-5">
              <span className="bg-gray-800 text-yellow-400 text-xs px-3 py-1 rounded-full uppercase tracking-wide border border-yellow-400/30">
                Proof of Concept
              </span>
              <span className="bg-gray-800 text-gray-300 text-xs px-3 py-1 rounded-full uppercase tracking-wide border border-gray-700">
                Advanced Analytics
              </span>
              <span className="bg-gray-800 text-gray-300 text-xs px-3 py-1 rounded-full uppercase tracking-wide border border-gray-700">
                Data-Driven Marketing
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl text-white mb-5">
              Customer Profiling
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mb-10">
              Most businesses send the same message to every customer and wonder why conversion rates are low.
              This analysis found <span className="text-yellow-400 font-semibold">5 distinct buyer profiles</span> inside
              530,000 transactions, each one requiring a completely different strategy.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { value: "530K+",  label: "Transactions Analyzed"           },
                { value: "5",      label: "Buyer Profiles Discovered"       },
                { value: "166K",   label: "Customers in Largest Segment"    },
                { value: "0",      label: "Manual Labels Needed"            },
              ].map(({ value, label }) => (
                <div key={label} className="bg-gray-900 border border-gray-700 rounded-lg p-4 text-center">
                  <p className="text-2xl text-yellow-400 font-semibold">{value}</p>
                  <p className="text-gray-400 text-sm mt-1">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Disclaimer */}
        <div className="bg-gray-900 border-b border-yellow-400/20 py-3">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-start gap-2 text-gray-400 text-sm">
              <Info className="h-4 w-4 text-yellow-400 flex-shrink-0 mt-0.5" />
              <p>
                This is an <strong className="text-white">independent proof of concept</strong> built on
                a public retail dataset, not client data. It demonstrates the type of segmentation
                analysis we can run directly on your customer records.
              </p>
            </div>
          </div>
        </div>

        {/* The Problem */}
        <section className="py-16 bg-black border-b border-gray-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-yellow-400 uppercase tracking-wide text-sm mb-3">The Problem</p>
            <h2 className="text-3xl text-white mb-8">Not All Customers Are the Same. So Why Treat Them That Way?</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
              <div>
                <p className="text-gray-300 text-lg mb-4">
                  A bulk buyer ordering 36 items at $1.40 each is a completely different customer than
                  someone who orders twice a year and spends $9 per item. One responds to volume deals.
                  The other responds to exclusivity and quality.
                </p>
                <p className="text-gray-300 text-lg">
                  When you send the same campaign to both, one of them ignores it. Customer segmentation
                  automatically finds these groups inside your existing data, so you can talk to each
                  one in a way that actually resonates.
                </p>
              </div>

              <div className="bg-gray-900 border border-gray-700 rounded-xl p-6">
                <p className="text-white font-semibold text-sm mb-4">What untargeted marketing costs you:</p>
                <div className="space-y-3">
                  {[
                    "Ad spend wasted on customers who will never convert at that price point",
                    "Premium buyers receiving discount promotions, training them to wait for sales",
                    "High-volume buyers never offered the bulk pricing they'd jump at",
                    "At-risk customers going cold because no one identified them in time",
                  ].map((point, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <span className="text-red-400 text-base leading-tight flex-shrink-0">✕</span>
                      <p className="text-gray-400 text-sm">{point}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Result — cluster chart featured prominently */}
        <section className="py-16 bg-gray-900 border-b border-gray-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-yellow-400 uppercase tracking-wide text-sm mb-3">The Discovery</p>
            <h2 className="text-3xl text-white mb-4">5 Groups Emerged Automatically</h2>
            <p className="text-gray-300 text-lg mb-8">
              By analyzing 530,000 transactions, looking at how much customers buy, how often,
              and at what price, the analysis surfaced five naturally distinct groups.
              Nobody defined these groups in advance. The data revealed them on its own.
            </p>

            <div className="bg-black rounded-2xl border border-gray-700 overflow-hidden mb-6">
              <img
                src={clustersImg}
                alt="Scatter plot showing 5 distinct customer segments color-coded by buying behavior"
                className="w-full h-auto"
              />
              <div className="px-6 py-4 border-t border-gray-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <p className="text-white text-sm font-semibold">Each dot is a customer. Each color is a buying profile.</p>
                  <p className="text-gray-500 text-xs mt-0.5">The clear separation between groups confirms these are genuinely distinct segments, not random noise</p>
                </div>
                <div className="flex gap-3 flex-wrap">
                  {[
                    { color: "bg-purple-500", label: "Balanced" },
                    { color: "bg-blue-500",   label: "Premium"  },
                    { color: "bg-teal-500",   label: "Bulk"     },
                    { color: "bg-green-500",  label: "Budget"   },
                    { color: "bg-yellow-400", label: "Loyal"    },
                  ].map(({ color, label }) => (
                    <div key={label} className="flex items-center gap-1.5">
                      <span className={`w-2.5 h-2.5 rounded-full ${color} flex-shrink-0`} />
                      <span className="text-gray-400 text-xs">{label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The 5 Segments */}
        <section className="py-16 bg-black border-b border-gray-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-yellow-400 uppercase tracking-wide text-sm mb-3">The Profiles</p>
            <h2 className="text-3xl text-white mb-4">Meet Your 5 Customer Types</h2>
            <p className="text-gray-300 text-lg mb-10">
              Each group has a name, a defined behavior, and most importantly:
              a clear strategy for how to market to them.
            </p>

            <div className="space-y-4">
              {segments.map(({ name, pct, customers, qty, price, dot, border, icon, who, opportunity }) => (
                <div key={name} className={`bg-gray-900 border ${border} rounded-xl overflow-hidden`}>
                  {/* Header row */}
                  <div className="px-6 pt-5 pb-4 flex flex-col sm:flex-row sm:items-center gap-4">
                    <div className="flex items-center gap-3 flex-1 min-w-0">
                      <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center flex-shrink-0">
                        {icon}
                      </div>
                      <div className="min-w-0">
                        <h3 className="text-white font-semibold text-base leading-snug">{name}</h3>
                        <div className="flex items-center gap-2 mt-1">
                          <span className={`w-2 h-2 rounded-full ${dot} flex-shrink-0`} />
                          <span className="text-gray-400 text-xs">{customers} customers · {pct} of total base</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-6 sm:flex-shrink-0">
                      <div className="text-center">
                        <p className="text-gray-500 text-xs uppercase tracking-wide">Avg Qty</p>
                        <p className="text-white font-bold text-xl mt-0.5">{qty}</p>
                      </div>
                      <div className="text-center">
                        <p className="text-gray-500 text-xs uppercase tracking-wide">Avg Price</p>
                        <p className="text-white font-bold text-xl mt-0.5">{price}</p>
                      </div>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="px-6 pb-5 grid grid-cols-1 md:grid-cols-2 gap-4 border-t border-gray-800 pt-4">
                    <div>
                      <p className="text-gray-500 text-xs uppercase tracking-wide mb-1.5">Who they are</p>
                      <p className="text-gray-300 text-sm">{who}</p>
                    </div>
                    <div className="bg-black/50 rounded-lg p-3 border border-yellow-400/20">
                      <p className="text-yellow-400 text-xs uppercase tracking-wide mb-1.5">Recommended strategy</p>
                      <p className="text-gray-200 text-sm">{opportunity}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How we got here — brief, for credibility */}
        <section className="py-16 bg-gray-900 border-b border-gray-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-yellow-400 uppercase tracking-wide text-sm mb-3">How It Was Done</p>
            <h2 className="text-3xl text-white mb-4">Starting From Raw, Messy Data</h2>
            <p className="text-gray-300 text-lg mb-8">
              No clean spreadsheet. No pre-sorted categories. Just a raw transaction log,
              one row per item purchased, across hundreds of thousands of orders. The analysis
              handled the heavy lifting: cleaning the data, summarizing each customer's behavior,
              and finding the groups automatically.
            </p>

            <div className="bg-black rounded-xl border border-gray-700 overflow-hidden mb-8">
              <div className="bg-gray-800 px-4 py-2 flex items-center justify-between">
                <span className="text-gray-400 text-xs font-mono">transactions.csv — raw input data</span>
                <span className="text-gray-600 text-xs">530K+ records</span>
              </div>
              <div className="overflow-x-auto p-4">
                <table className="text-xs font-mono text-gray-300 w-full min-w-[580px]">
                  <thead>
                    <tr className="border-b border-gray-700 text-gray-500">
                      <td className="pr-5 pb-2">idx</td>
                      <td className="pr-5 pb-2">description</td>
                      <td className="pr-5 pb-2 text-yellow-400/70">qty</td>
                      <td className="pr-5 pb-2">invoice_date</td>
                      <td className="pr-5 pb-2 text-blue-400/70">unit_price</td>
                      <td className="pr-5 pb-2 text-green-400/70">customer_id</td>
                      <td className="pb-2">country</td>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["391461", "MAGNETS PACK OF 4 RETRO PHOTO",     "24", "10/11/2011 14:52", "$0.39", "12536", "France"],
                      ["66875",  "SET OF 6 FUNKY BEAKERS",            "3",  "1/21/2011 17:05",  "$2.46", "—",    "United Kingdom"],
                      ["183140", "ROSE DU SUD COSMETICS BAG",         "1",  "5/10/2011 14:09",  "$4.25", "16431","United Kingdom"],
                      ["494143", "SET OF 60 VINTAGE LEAF CAKE CASES", "1",  "11/23/2011 13:27", "$0.55", "18283","United Kingdom"],
                      ["436391", "JINGLE BELL HEART ANTIQUE GOLD",    "12", "11/3/2011 10:45",  "$2.08", "12615","France"],
                    ].map((row, i) => (
                      <tr key={i} className={i % 2 === 0 ? "bg-gray-900/30" : ""}>
                        <td className="pr-5 py-1.5 text-gray-600">{row[0]}</td>
                        <td className="pr-5 py-1.5 text-gray-300">{row[1]}</td>
                        <td className="pr-5 py-1.5 text-yellow-400/80">{row[2]}</td>
                        <td className="pr-5 py-1.5 text-gray-500">{row[3]}</td>
                        <td className="pr-5 py-1.5 text-blue-400/80">{row[4]}</td>
                        <td className="pr-5 py-1.5 text-green-400/80">{row[5]}</td>
                        <td className="py-1.5 text-gray-400">{row[6]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-gray-600 text-xs px-4 py-2 border-t border-gray-800">
                From this raw log, each customer's behavior was summarized into three numbers — average quantity, average price, and order frequency. Those numbers were all the analysis needed to find the 5 groups.
              </p>
            </div>

            {/* Simple 3-step flow */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { step: "01", title: "Clean & Summarize",  desc: "Raw transactions condensed into per-customer behavioral profiles." },
                { step: "02", title: "Find the Groups",    desc: "AI automatically discovers the natural groups, no guessing, no manual labeling." },
                { step: "03", title: "Profile & Strategize", desc: "Each group is named, sized, and paired with a targeted action." },
              ].map(({ step, title, desc }) => (
                <div key={step} className="bg-gray-800 rounded-xl p-5">
                  <p className="text-yellow-400 font-mono text-xs mb-3">{step}</p>
                  <h4 className="text-white font-semibold mb-2">{title}</h4>
                  <p className="text-gray-400 text-sm">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Business value */}
        <section className="py-16 bg-black border-b border-gray-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-yellow-400 uppercase tracking-wide text-sm mb-3">Business Value</p>
            <h2 className="text-3xl text-white mb-4">What You Can Do With This</h2>
            <p className="text-gray-300 text-lg mb-8">
              Knowing your customer segments isn't just an analytics exercise,
              it directly changes how you spend your marketing budget, structure your offers,
              and retain the customers worth keeping.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  icon: <Target className="h-5 w-5 text-yellow-400" />,
                  title: "Targeted Campaigns That Actually Convert",
                  desc: "Match your message to the buyer. Premium offers to premium buyers. Volume deals to bulk buyers. Stop spray-and-pray marketing.",
                },
                {
                  icon: <TrendingUp className="h-5 w-5 text-yellow-400" />,
                  title: "Catch Churn Before It Happens",
                  desc: "Low-engagement segments are your early warning system. Identify them automatically and re-engage before they go quiet.",
                },
                {
                  icon: <DollarSign className="h-5 w-5 text-yellow-400" />,
                  title: "Smarter Pricing & Promotions",
                  desc: "Know which customers are price-sensitive and which aren't. Stop discounting to people who would have paid full price.",
                },
                {
                  icon: <Users className="h-5 w-5 text-yellow-400" />,
                  title: "Build Loyalty in the Right Places",
                  desc: "Focus retention efforts on high-value segments. Not every customer is worth the same investment. Segmentation tells you who is.",
                },
              ].map(({ icon, title, desc }) => (
                <div key={title} className="bg-gray-900 border border-gray-700 hover:border-yellow-400 transition-colors rounded-xl p-5">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center flex-shrink-0">
                      {icon}
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">{title}</h3>
                      <p className="text-gray-400 text-sm">{desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gray-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-black border border-yellow-400/30 rounded-2xl p-10 text-center">
              <Users className="h-12 w-12 text-yellow-400 mx-auto mb-5" />
              <h2 className="text-3xl text-white mb-4">
                Who's Hiding in Your Customer Data?
              </h2>
              <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                If you have transaction history, even messy unorganized data,
                we can find your segments, profile each group, and hand you a clear
                strategy for marketing to each one differently.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center bg-yellow-400 text-black px-8 py-4 rounded-lg hover:bg-yellow-500 transition-colors text-lg font-semibold"
                >
                  Let's Analyze Your Data
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/projects"
                  className="inline-flex items-center justify-center border border-gray-700 text-gray-300 px-8 py-4 rounded-lg hover:border-yellow-400 hover:text-yellow-400 transition-colors text-lg"
                >
                  See More Projects
                </Link>
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
