import { Link } from "react-router";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { ArrowLeft, ArrowRight, CheckCircle, AudioLines, Info, Star, Wrench, ShieldCheck, Activity, TreePine } from "lucide-react";
import logo from "../../imports/Pantera_Claw.png";
import waveformsImg from "../../imports/drone_waveforms.png";
import stftImg from "../../imports/drone_stft.png";
import mfcImg from "../../imports/drone_mfc.png";
import melImg from "../../imports/drone_mel.png";
import chromaImg from "../../imports/drone_chroma.png";

const allModels = [
  { model: "Custom Neural Network",           accuracy: 99.02, winner: true  },
  { model: "XGBoost",                         accuracy: 98.50, winner: false },
  { model: "K-Nearest Neighbors",             accuracy: 98.38, winner: false },
  { model: "Random Forest",                   accuracy: 98.25, winner: false },
  { model: "Support Vector Machine (Linear)", accuracy: 97.95, winner: false },
  { model: "Support Vector Machine (RBF)",    accuracy: 97.61, winner: false },
  { model: "Decision Tree",                   accuracy: 95.86, winner: false },
  { model: "AdaBoost",                        accuracy: 94.23, winner: false },
  { model: "Quadratic Discriminant Analysis", accuracy: 71.38, winner: false },
  { model: "Gaussian Naive Bayes",            accuracy: 37.68, winner: false },
];

export function CaseStudyDrone() {
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
                Machine Learning
              </span>
              <span className="bg-gray-800 text-gray-300 text-xs px-3 py-1 rounded-full uppercase tracking-wide border border-gray-700">
                Audio Classification
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl text-white mb-5">
              Drone Sound Classification
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mb-10">
              Can a machine listen to a drone flying overhead and identify exactly which model it is,
              just from the sound? This project proves the answer is{" "}
              <span className="text-yellow-400 font-semibold">yes, with 99% accuracy.</span>
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { value: "99.02%", label: "Classification Accuracy"     },
                { value: "11,704", label: "Audio Samples Processed"     },
                { value: "10",     label: "Models Trained & Tested"     },
                { value: "3",      label: "Sound Classes Identified"    },
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
                This is an <strong className="text-white">independent proof of concept</strong>, not client work.
                It's designed to show the kind of real-world solutions we can build for your organization.
              </p>
            </div>
          </div>
        </div>

        {/* The Problem */}
        <section className="py-16 bg-black border-b border-gray-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-yellow-400 uppercase tracking-wide text-sm mb-3">The Problem</p>
            <h2 className="text-3xl text-white mb-8">Identifying a Drone by Its Sound Alone</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
              <div>
                <p className="text-gray-300 text-lg mb-4">
                  Every drone has a unique acoustic fingerprint: the hum of its motors, the spin of its
                  rotors, and the vibration of its frame create a sound pattern specific to that model.
                </p>
                <p className="text-gray-300 text-lg">
                  The goal: train a model to identify those patterns from raw audio alone.
                  No cameras. No GPS. No visual data. Just sound in, identity out.
                </p>
              </div>

              <div className="bg-gray-900 border border-gray-700 rounded-xl p-6">
                <p className="text-gray-400 text-sm uppercase tracking-wide mb-4">3 audio classes in the dataset</p>
                <div className="space-y-4">
                  {[
                    { label: "DJI Bebop 1",     count: "540 samples",    desc: "Aggressive rotor tone with sharp amplitude spikes" },
                    { label: "Parrot Mambo",     count: "518 samples",    desc: "Quieter, low-amplitude consistent oscillation" },
                    { label: "Background Noise", count: "10,646 samples", desc: "Wind, traffic, ambient, the \"not a drone\" class" },
                  ].map(({ label, count, desc }) => (
                    <div key={label} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-yellow-400 flex-shrink-0 mt-2" />
                      <div>
                        <p className="text-white text-sm font-semibold">{label}</p>
                        <p className="text-gray-500 text-xs mt-0.5">{count} · {desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Result — moved up, featured prominently */}
        <section className="py-16 bg-gray-900 border-b border-gray-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-yellow-400 uppercase tracking-wide text-sm mb-3">The Result</p>
            <h2 className="text-3xl text-white mb-4">10 Models Tested. One Clear Winner.</h2>
            <p className="text-gray-300 text-lg mb-8">
              Nine industry-standard algorithms were benchmarked first to establish a baseline.
              All performed well. A custom neural network was then built on top, and it
              outperformed every single one.
            </p>

            {/* Winner callout */}
            <div className="bg-black border border-yellow-400/50 rounded-2xl p-8 mb-6 flex flex-col sm:flex-row items-center gap-6">
              <div className="text-center sm:text-left flex-shrink-0">
                <p className="text-yellow-400 text-xs uppercase tracking-wide mb-1">Best Result</p>
                <p className="text-6xl text-yellow-400 font-bold leading-none">99.02%</p>
                <p className="text-white text-lg font-semibold mt-2">Custom Neural Network</p>
                <p className="text-gray-500 text-sm mt-1">Tested on 2,341 audio files never seen during training</p>
              </div>
              <div className="hidden sm:block w-px h-20 bg-gray-700 flex-shrink-0" />
              <div className="text-center sm:text-left text-gray-300 text-base max-w-xs">
                The model correctly identified the drone, or confirmed none was present,
                in <strong className="text-white">99 out of every 100 audio files</strong> it had never encountered before.
              </div>
            </div>

            {/* Model comparison table */}
            <div className="bg-black rounded-xl border border-gray-700 overflow-hidden">
              <div className="bg-gray-800 px-5 py-2.5 flex items-center justify-between">
                <span className="text-gray-400 text-xs font-mono">all_models — test set accuracy (ranked)</span>
                <span className="text-gray-600 text-xs">80/20 train/test split</span>
              </div>
              <table className="w-full">
                <tbody>
                  {allModels.map(({ model, accuracy, winner }, i) => (
                    <tr key={model} className={`border-b border-gray-800 last:border-0 ${winner ? "bg-yellow-400/5" : ""}`}>
                      <td className="px-5 py-3 text-gray-600 text-sm w-8">{i + 1}</td>
                      <td className="px-5 py-3 text-sm">
                        <div className="flex items-center gap-2">
                          {winner && <Star className="h-3.5 w-3.5 text-yellow-400 fill-yellow-400 flex-shrink-0" />}
                          <span className={winner ? "text-white font-semibold" : "text-gray-300"}>{model}</span>
                          {winner && (
                            <span className="text-xs bg-yellow-400/20 text-yellow-400 px-2 py-0.5 rounded-full border border-yellow-400/30">Best</span>
                          )}
                        </div>
                      </td>
                      <td className="px-5 py-3 text-right font-mono font-semibold text-sm">
                        <span className={winner ? "text-yellow-400" : accuracy >= 97 ? "text-gray-200" : accuracy >= 90 ? "text-gray-400" : "text-gray-600"}>
                          {accuracy.toFixed(2)}%
                        </span>
                      </td>
                      <td className="px-5 py-3 w-32 hidden sm:table-cell">
                        <div className="bg-gray-800 rounded-full h-1.5">
                          <div
                            className={`h-1.5 rounded-full ${winner ? "bg-yellow-400" : accuracy >= 97 ? "bg-gray-400" : accuracy >= 90 ? "bg-gray-600" : "bg-gray-700"}`}
                            style={{ width: `${accuracy}%` }}
                          />
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* The Visuals — featured prominently */}
        <section className="py-16 bg-black border-b border-gray-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-yellow-400 uppercase tracking-wide text-sm mb-3">The Discovery</p>
            <h2 className="text-3xl text-white mb-4">The Sounds Look Different, Even to the Human Eye</h2>
            <p className="text-gray-300 text-lg mb-8">
              Before building anything, the audio from each class was visualized. The result was
              immediate. The three sound types already look distinct from each other. When humans can
              see the difference in a signal, a machine can be trained to recognize it.
            </p>

            {/* Waveform — full width, featured */}
            <div className="bg-gray-900 rounded-2xl border border-gray-700 overflow-hidden mb-6">
              <img
                src={waveformsImg}
                alt="Raw audio waveforms for the three drone sound classes"
                className="w-full h-auto"
              />
              <div className="px-6 py-4 border-t border-gray-800">
                <p className="text-white text-sm font-semibold">Three classes. Three distinct patterns.</p>
                <p className="text-gray-500 text-xs mt-0.5">
                  The DJI Bebop shows sharp spikes. The Parrot Mambo stays tight and low. Background noise is wide and irregular. The differences are visible before any processing begins.
                </p>
              </div>
            </div>

            {/* Pattern analysis — 2x2 */}
            <p className="text-gray-300 text-base mb-4">
              Each audio file was then analyzed from four different angles, think of it like examining
              a voice for its tone, rhythm, pitch, and energy all at once. Together, these views give
              the model a complete acoustic fingerprint for each drone.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { src: stftImg,   caption: "How frequency energy shifts over time",           note: "Shows when rotor frequency is most active throughout the recording" },
                { src: mfcImg,    caption: "The drone's overall tonal shape",                 note: "A compact acoustic signature, consistent within each drone model" },
                { src: melImg,    caption: "Sound energy mapped the way human ears hear it",  note: "Emphasizes the lower frequencies where rotor noise lives" },
                { src: chromaImg, caption: "Harmonic and pitch patterns over time",           note: "Reveals tonal characteristics that are unique to each drone model" },
              ].map(({ src, caption, note }) => (
                <div key={caption} className="bg-gray-900 rounded-xl border border-gray-700 overflow-hidden">
                  <img src={src} alt={caption} className="w-full h-auto" />
                  <div className="px-4 py-3 border-t border-gray-800">
                    <p className="text-gray-200 text-xs font-medium">{caption}</p>
                    <p className="text-gray-600 text-xs mt-0.5">{note}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Was Done — condensed for credibility */}
        <section className="py-16 bg-gray-900 border-b border-gray-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-yellow-400 uppercase tracking-wide text-sm mb-3">How It Was Done</p>
            <h2 className="text-3xl text-white mb-4">From Raw Audio to a Structured Dataset</h2>
            <p className="text-gray-300 text-lg mb-8">
              Raw audio files can't be handed directly to a model. They first need to be converted
              into numbers that capture the meaningful patterns. Each of those four visual analyses
              produces a set of measurements per file. Stack them together and you get one clean row
              of data per recording, ready to train on.
            </p>

            <div className="bg-black rounded-xl border border-gray-700 overflow-hidden mb-8">
              <div className="bg-gray-800 px-4 py-2 flex items-center justify-between">
                <span className="text-gray-400 text-xs font-mono">feature_dataset.csv — 11,704 rows × 180 columns</span>
                <span className="text-gray-600 text-xs">1 row = 1 audio file</span>
              </div>
              <div className="overflow-x-auto p-4">
                <table className="text-xs font-mono text-gray-300 w-full min-w-[520px]">
                  <thead>
                    <tr className="border-b border-gray-700">
                      <td className="pr-4 pb-2 text-gray-500">file #</td>
                      <td className="pr-4 pb-2 text-yellow-400/70">pitch_0</td>
                      <td className="pr-4 pb-2 text-yellow-400/70">pitch_1</td>
                      <td className="pr-4 pb-2 text-blue-400/70">freq_0</td>
                      <td className="pr-4 pb-2 text-blue-400/70">freq_1</td>
                      <td className="pr-4 pb-2 text-green-400/70">tone_0</td>
                      <td className="pr-4 pb-2 text-green-400/70">tone_1</td>
                      <td className="pb-2 text-gray-600">… ×174</td>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["1", "0.594", "0.640", "6.507",  "36.731", "-129.68", "15.72"],
                      ["2", "0.664", "0.718", "54.896", "169.16", "-58.91",  "14.74"],
                      ["3", "0.701", "0.718", "3.984",  "14.925", "-117.90", "31.71"],
                      ["4", "0.494", "0.539", "0.298",  "0.881",  "-119.48", "21.49"],
                      ["5", "0.653", "0.719", "22.012", "88.222", "…",       "…"    ],
                    ].map((row, i) => (
                      <tr key={i} className={i % 2 === 0 ? "bg-gray-900/30" : ""}>
                        <td className="pr-4 py-1.5 text-gray-500">{row[0]}</td>
                        <td className="pr-4 py-1.5 text-yellow-400/80">{row[1]}</td>
                        <td className="pr-4 py-1.5 text-yellow-400/80">{row[2]}</td>
                        <td className="pr-4 py-1.5 text-blue-400/80">{row[3]}</td>
                        <td className="pr-4 py-1.5 text-blue-400/80">{row[4]}</td>
                        <td className="pr-4 py-1.5 text-green-400/80">{row[5]}</td>
                        <td className="pr-4 py-1.5 text-green-400/80">{row[6]}</td>
                        <td className="py-1.5 text-gray-600">…</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <p className="text-gray-600 text-xs mt-3 border-t border-gray-800 pt-3">
                  11,704 audio files → 11,704 rows. Each column captures a different acoustic measurement.
                  This structured dataset is what the model was trained on.
                </p>
              </div>
            </div>

            {/* Simple 3-step flow */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { step: "01", title: "Visualize the Audio",   desc: "Plot and inspect each class to confirm detectable differences before training." },
                { step: "02", title: "Extract the Patterns",  desc: "Convert each audio file into 180 numerical measurements capturing pitch, frequency, and tone." },
                { step: "03", title: "Train & Benchmark",     desc: "Test 10 models against the dataset. Keep the one that performs best on data it's never seen." },
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

        {/* Business Value */}
        <section className="py-16 bg-black border-b border-gray-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-yellow-400 uppercase tracking-wide text-sm mb-3">Business Value</p>
            <h2 className="text-3xl text-white mb-4">Any Machine That Makes Sound Can Be Classified</h2>
            <p className="text-gray-300 text-lg mb-8">
              Drones are the demo. The same approach works for any scenario where sound carries
              useful information, and there are more of those than most businesses realize.
              No cameras, no hardware changes, no new sensors. Just audio and intelligence.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  icon: <Wrench className="h-5 w-5 text-yellow-400" />,
                  title: "Predictive Maintenance",
                  desc: "Catch a failing motor or bearing before it breaks down, based on how it sounds, weeks before a visual inspection would catch it.",
                },
                {
                  icon: <CheckCircle className="h-5 w-5 text-yellow-400" />,
                  title: "Quality Control",
                  desc: "Flag defective products on a production line by the sounds they make. Faster than manual inspection. Consistent every time.",
                },
                {
                  icon: <ShieldCheck className="h-5 w-5 text-yellow-400" />,
                  title: "Security & Intrusion Detection",
                  desc: "Detect and classify unauthorized drones, vehicles, or personnel using passive audio, no visual line of sight required.",
                },
                {
                  icon: <TreePine className="h-5 w-5 text-yellow-400" />,
                  title: "Environmental & Field Monitoring",
                  desc: "Classify sounds from remote equipment, wildlife activity, weather events, or industrial noise levels, without on-site staff.",
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

        {/* CTA — elevated in a card */}
        <section className="py-16 bg-gray-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-black border border-yellow-400/30 rounded-2xl p-10 text-center">
              <AudioLines className="h-12 w-12 text-yellow-400 mx-auto mb-5" />
              <h2 className="text-3xl text-white mb-4">
                You Don't Need to Be in the Drone Industry
              </h2>
              <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                If your operation makes sound, we can train a model to listen.
                Tell us what you're working with and we'll map out what a custom
                solution could look like for your specific problem.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center bg-yellow-400 text-black px-8 py-4 rounded-lg hover:bg-yellow-500 transition-colors text-lg font-semibold"
                >
                  Start the Conversation
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
