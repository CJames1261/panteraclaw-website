import { LegalLayout } from "../../components/LegalLayout";

export function AiUsePolicy() {
  return (
    <LegalLayout title="AI Use Policy" lastUpdated="April 9, 2026">
      <h2>1. Purpose</h2>
      <p>
        This Policy governs how PanteraClaw uses artificial intelligence in its services, how clients may use
        AI-assisted deliverables, and what is prohibited. AI technology is central to what we build. This Policy
        ensures it is used responsibly, transparently, and in ways that create genuine value while managing risk.
      </p>

      <h2>2. How PanteraClaw Uses AI</h2>
      <p>PanteraClaw may use AI tools, LLMs, machine learning models, and automated systems for:</p>
      <ul>
        <li><strong>Development assistance</strong> — AI-assisted code generation and documentation, reviewed by a human engineer before delivery</li>
        <li><strong>Data analysis</strong> — ML models for clustering, classification, prediction, and anomaly detection</li>
        <li><strong>LLM integrations</strong> — Building applications powered by third-party LLM APIs on behalf of clients</li>
        <li><strong>Agentic systems</strong> — Autonomous agents executing multi-step workflows</li>
        <li><strong>NLP tasks</strong> — Text classification, extraction, summarization, and generation</li>
      </ul>
      <p>PanteraClaw will disclose when a deliverable incorporates AI-generated components as a material part of its function.</p>

      <h2>3. Permitted Uses of AI Deliverables</h2>
      <p>Clients may use AI-assisted deliverables for internal business operations, customer-facing applications with appropriate disclosures and human oversight, workflow automation, research and reporting, and any purpose explicitly authorized in the applicable SOW.</p>

      <h2>4. Prohibited Uses</h2>
      <h3>Harmful or Deceptive</h3>
      <ul>
        <li>Generating or distributing misinformation or deliberately false content</li>
        <li>Creating deepfakes or impersonations intended to deceive</li>
        <li>Generating spam, phishing content, or fraudulent materials</li>
      </ul>

      <h3>Discriminatory and Rights-Violating</h3>
      <ul>
        <li>Automated decisions that unlawfully discriminate based on protected characteristics</li>
        <li>Deploying AI in hiring, lending, healthcare, or other regulated contexts without human oversight, legal review, and bias testing</li>
        <li>Surveilling or profiling individuals without lawful basis and consent</li>
      </ul>

      <h3>Unlawful</h3>
      <ul>
        <li>Any use that violates applicable law</li>
        <li>Processing regulated data (PHI, PCI, biometrics) through AI systems without appropriate safeguards</li>
        <li>Using AI to circumvent security systems or facilitate cyberattacks</li>
        <li>Infringing third-party intellectual property</li>
      </ul>

      <h3>High-Risk Autonomous Deployments Without Safeguards</h3>
      <ul>
        <li>Agentic systems that take irreversible real-world actions (send communications, execute transactions, modify databases) without human review checkpoints</li>
        <li>AI in safety-critical applications without meeting applicable regulatory standards</li>
      </ul>

      <h2>5. Human Oversight Requirements</h2>
      <table>
        <thead><tr><th>Use Case</th><th>Oversight Requirement</th></tr></thead>
        <tbody>
          <tr><td>AI content for internal use</td><td>Review recommended</td></tr>
          <tr><td>AI content for public / customer-facing use</td><td>Human review required before publishing</td></tr>
          <tr><td>AI-generated code in production</td><td>Engineer review and testing required</td></tr>
          <tr><td>AI decisions affecting individuals (hiring, credit)</td><td>Human decision-maker required; AI as input only</td></tr>
          <tr><td>Agentic systems executing financial or legal actions</td><td>Human approval required per action</td></tr>
          <tr><td>AI analysis in regulated reports or filings</td><td>Professional review and sign-off required</td></tr>
        </tbody>
      </table>
      <p>Client assumes full responsibility for consequences of AI output use without appropriate oversight.</p>

      <h2>6. Agentic Systems</h2>
      <p><strong>Before deployment:</strong> Define permitted action scope, implement rate limits and guardrails, establish audit logging, test in staging, and establish a kill switch.</p>
      <p><strong>In production:</strong> Monitor activity, define escalation paths, review logs regularly.</p>
      <p>After formal project acceptance and deployment, <strong>Client assumes full operational responsibility</strong> for agent behavior.</p>

      <h2>7. Data Inputs to AI Systems</h2>
      <p>Do not submit the following without a written agreement governing that data class:</p>
      <ul>
        <li>Personal data without a legal basis for processing</li>
        <li>Protected health information (PHI) under HIPAA</li>
        <li>Payment card data within PCI-DSS scope</li>
        <li>Trade secrets or sensitive proprietary information you cannot legally share with third-party AI providers</li>
        <li>Data of minors under 13</li>
      </ul>
      <p><strong>PanteraClaw will not use Client's data to train or fine-tune AI models without explicit prior written consent.</strong></p>

      <h2>8. Bias, Fairness, and Accuracy</h2>
      <p>AI systems may reflect biases from training data, have error rates, perform differently on real-world vs. training data, and generate plausible but incorrect information (hallucinations). Client is responsible for evaluating whether an AI system's accuracy and bias profile is acceptable for the intended use case.</p>

      <h2>9. End-User Disclosure</h2>
      <p>Where AI products we build are deployed to end users, Client is responsible for disclosing AI interaction where required by law, providing a mechanism for human review of AI decisions that affect individuals, and complying with applicable AI transparency laws.</p>

      <h2>10. Violations</h2>
      <p>PanteraClaw reserves the right to suspend or terminate services if AI deliverables are used in violation of this Policy, applicable law, or third-party AI providers' terms of service.</p>

      <h2>11. Updates</h2>
      <p>This Policy may be updated as technology and regulations evolve. Material changes will be communicated via our website.</p>

      <h2>12. Contact</h2>
      <p>
        Questions about this Policy: <strong>info@panteraclaw.com</strong>
      </p>
    </LegalLayout>
  );
}
