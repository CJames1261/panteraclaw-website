import { Link } from "react-router";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { ArrowLeft, CheckCircle, TrendingUp } from "lucide-react";

export function CaseStudyDrone() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
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
              The 98% Accuracy Standard
            </h1>
            <p className="text-xl text-gray-700">
              Drone Sound Classification with Mission-Critical Precision
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
                Modern defense systems require the ability to detect and classify unmanned aerial vehicles (UAVs) 
                with extreme precision in real-world environments. Traditional computer vision approaches fail in 
                low-visibility conditions, creating a critical gap in threat identification capabilities.
              </p>
              <p className="text-lg text-gray-700">
                The objective was clear: develop an audio-based classification system capable of distinguishing 
                between drone types with <strong>98%+ accuracy</strong> under varying acoustic conditions, 
                deployable in mission-critical DoD environments.
              </p>
            </section>

            {/* Technical Approach */}
            <section className="mb-12">
              <h2 className="text-3xl mb-6 text-gray-900">Technical Approach</h2>
              <div className="bg-gray-50 p-8 rounded-lg mb-6">
                <h3 className="text-2xl mb-4 text-gray-900">Audio Feature Engineering</h3>
                <p className="text-gray-700 mb-4">
                  We implemented advanced acoustic signal processing techniques optimized for drone acoustic signatures:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong className="text-gray-900">MFCCs (Mel-Frequency Cepstral Coefficients):</strong>
                      <span className="text-gray-700"> Extracted 13 MFCC features per frame to capture the spectral 
                      envelope of drone audio signatures, optimized for propeller blade frequencies (200-2000 Hz).</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong className="text-gray-900">Mel Spectrograms:</strong>
                      <span className="text-gray-700"> Generated time-frequency representations using 128 Mel filter 
                      banks, enabling CNN-based pattern recognition of unique acoustic fingerprints.</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong className="text-gray-900">Temporal Feature Aggregation:</strong>
                      <span className="text-gray-700"> Applied statistical aggregation (mean, std, max) across 
                      time windows to capture both transient and sustained acoustic characteristics.</span>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg mb-6">
                <h3 className="text-2xl mb-4 text-gray-900">Model Architecture</h3>
                <p className="text-gray-700 mb-4">
                  A hybrid deep learning architecture combining spectral and temporal processing:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>Input Layer:</strong> Dual-stream processing (raw MFCCs + Mel spectrograms)</li>
                  <li><strong>CNN Branch:</strong> 4-layer convolutional network for spatial feature extraction from spectrograms</li>
                  <li><strong>RNN Branch:</strong> BiLSTM layers for temporal sequence modeling of MFCC streams</li>
                  <li><strong>Fusion Layer:</strong> Attention-weighted concatenation of CNN and RNN outputs</li>
                  <li><strong>Classification Head:</strong> Dense layers with dropout regularization</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-2xl mb-4 text-gray-900">Training & Validation</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="font-bold mr-2 text-gray-900">Dataset:</span>
                    <span>10,000+ labeled audio samples across 8 drone categories + ambient noise class</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-bold mr-2 text-gray-900">Augmentation:</span>
                    <span>Time stretching, pitch shifting, and noise injection to simulate real-world conditions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-bold mr-2 text-gray-900">Validation:</span>
                    <span>Stratified K-fold cross-validation with held-out test set from different acoustic environments</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-bold mr-2 text-gray-900">Optimization:</span>
                    <span>Adam optimizer with learning rate scheduling and early stopping on validation loss</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Results */}
            <section className="mb-12">
              <h2 className="text-3xl mb-6 text-gray-900">Results & Impact</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-blue-50 p-6 rounded-lg text-center border-2 border-blue-200">
                  <div className="text-4xl text-blue-600 mb-2">98.3%</div>
                  <div className="text-gray-700">Classification Accuracy</div>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg text-center border-2 border-blue-200">
                  <div className="text-4xl text-blue-600 mb-2">95ms</div>
                  <div className="text-gray-700">Average Inference Time</div>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg text-center border-2 border-blue-200">
                  <div className="text-4xl text-blue-600 mb-2">8</div>
                  <div className="text-gray-700">Drone Classes Detected</div>
                </div>
              </div>
              <p className="text-lg text-gray-700 mb-4">
                The deployed system achieved <strong>98.3% accuracy</strong> on held-out test data, exceeding the 
                98% threshold required for operational deployment. The model demonstrated robust performance across:
              </p>
              <ul className="space-y-2 text-gray-700 mb-4">
                <li>• Varying distances (50m - 500m)</li>
                <li>• Multiple environmental conditions (urban, rural, wind noise)</li>
                <li>• Real-time processing requirements (&lt;100ms latency)</li>
              </ul>
              <p className="text-lg text-gray-700">
                This system was successfully integrated into Air Force modernization initiatives, providing a 
                passive detection capability that complements existing radar and visual systems.
              </p>
            </section>

            {/* Technical Stack */}
            <section className="mb-12">
              <h2 className="text-3xl mb-6 text-gray-900">Technical Stack</h2>
              <div className="flex flex-wrap gap-3">
                <span className="bg-gray-100 text-gray-800 px-4 py-2 rounded-lg border border-gray-300">Python</span>
                <span className="bg-gray-100 text-gray-800 px-4 py-2 rounded-lg border border-gray-300">TensorFlow / Keras</span>
                <span className="bg-gray-100 text-gray-800 px-4 py-2 rounded-lg border border-gray-300">Librosa</span>
                <span className="bg-gray-100 text-gray-800 px-4 py-2 rounded-lg border border-gray-300">NumPy / SciPy</span>
                <span className="bg-gray-100 text-gray-800 px-4 py-2 rounded-lg border border-gray-300">CUDA / GPU Acceleration</span>
                <span className="bg-gray-100 text-gray-800 px-4 py-2 rounded-lg border border-gray-300">Docker</span>
                <span className="bg-gray-100 text-gray-800 px-4 py-2 rounded-lg border border-gray-300">MLflow</span>
              </div>
            </section>

            {/* Key Takeaways */}
            <section className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-lg">
              <h2 className="text-3xl mb-6 text-gray-900">Key Takeaways</h2>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <TrendingUp className="h-6 w-6 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">
                    <strong>Domain-Specific Feature Engineering</strong> is critical—acoustic features optimized 
                    for drone signatures significantly outperformed generic audio features.
                  </span>
                </li>
                <li className="flex items-start">
                  <TrendingUp className="h-6 w-6 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">
                    <strong>Hybrid Architectures</strong> combining CNNs and RNNs provide superior performance 
                    for time-series audio classification tasks.
                  </span>
                </li>
                <li className="flex items-start">
                  <TrendingUp className="h-6 w-6 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">
                    <strong>Rigorous Validation</strong> with real-world noise conditions is essential for 
                    mission-critical deployments—lab accuracy doesn't guarantee field performance.
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
              Need High-Precision ML for Your Application?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how advanced machine learning can solve your toughest classification challenges.
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
          "headline": "The 98% Accuracy Standard: Drone Sound Classification",
          "description": "Advanced audio classification using MFCCs and Mel spectrograms achieving 98% accuracy in mission-critical drone identification",
          "author": {
            "@type": "Person",
            "name": "Chris James"
          },
          "publisher": {
            "@type": "Organization",
            "name": "Pantera Claw"
          },
          "keywords": "drone classification, audio processing, machine learning, computer vision, MFCC, mel spectrograms, deep learning, DoD"
        })}
      </script>
    </div>
  );
}
