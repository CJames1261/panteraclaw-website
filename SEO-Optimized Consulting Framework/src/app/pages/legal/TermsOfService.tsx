import { LegalLayout } from "../../components/LegalLayout";
import { Helmet } from "react-helmet-async";

export function TermsOfService() {
  return (
    <>
      <Helmet>
        <title>Terms of Service | Pantera Claw</title>
        <meta name="description" content="Pantera Claw's Terms of Service governing use of our website and consulting services." />
      </Helmet>
      <LegalLayout title="Terms of Service" lastUpdated="April 9, 2026">
      <h2>1. Acceptance of Terms</h2>
      <p>
        By accessing this website or engaging PanteraClaw for services, you agree to be bound by these Terms. If you
        are entering these Terms on behalf of a company, you represent that you have authority to bind that entity.
      </p>
      <p>
        These Terms apply to all website visitors and clients. Where a separate signed services agreement exists,
        that agreement controls to the extent of any conflict.
      </p>

      <h2>2. Description of Services</h2>
      <p>PanteraClaw provides technology consulting and implementation services including:</p>
      <ul>
        <li>Data engineering, ingestion, and pipeline architecture</li>
        <li>Database design and management</li>
        <li>AI and machine learning system development</li>
        <li>LLM integration and agent-based system development</li>
        <li>Data analytics, visualization, and business intelligence</li>
        <li>Application and software development</li>
        <li>Automation tooling and workflow optimization</li>
      </ul>
      <p>Specific scope and pricing are governed by a signed Statement of Work (SOW). Nothing in these Terms creates an obligation to provide any specific service absent a signed agreement.</p>

      <h2>3. AI-Assisted Services</h2>
      <p>Many of our services involve AI and machine learning. You acknowledge:</p>
      <ul>
        <li><strong>Inherent variability.</strong> AI outputs are probabilistic and may vary given identical inputs.</li>
        <li><strong>No guarantee of accuracy.</strong> AI outputs may contain errors, hallucinations, or biases.</li>
        <li><strong>Human review required.</strong> You are solely responsible for reviewing AI outputs before using them in business operations or consequential decisions.</li>
        <li><strong>Third-party dependencies.</strong> Some services rely on third-party AI APIs (e.g., OpenAI, Anthropic). PanteraClaw does not control these systems and is not responsible for their changes or failures.</li>
      </ul>

      <h2>4. Agentic and Automated Systems</h2>
      <p>For autonomous or agent-based systems we develop on your behalf:</p>
      <ul>
        <li>You are responsible for maintaining appropriate human oversight in production.</li>
        <li>You must implement safeguards including rate limits, approval workflows, audit logging, and kill switches.</li>
        <li>You bear full responsibility for agent actions after deployment and acceptance.</li>
      </ul>

      <h2>5. No Professional Advice</h2>
      <p>Our services are technical and consulting in nature. Nothing constitutes legal, financial, medical, or regulatory compliance advice. Seek licensed professional guidance for decisions with legal or regulatory implications.</p>

      <h2>6. Client Responsibilities</h2>
      <p>You agree to provide accurate and lawful data, ensure you have rights to share materials with us, review all deliverables before relying on them, and use our services in compliance with applicable law.</p>

      <h2>7. Data and Inputs</h2>
      <p>You retain ownership of all data you provide. Do not submit PII, PHI, PCI, or other regulated data without a written agreement governing its handling. PanteraClaw does not independently verify the accuracy or legality of Client Data.</p>

      <h2>8. Confidentiality</h2>
      <p>Both parties agree to hold each other's Confidential Information in strict confidence, use it solely to perform or receive services, and not disclose it to third parties without prior written consent. Confidentiality obligations survive termination for 3 years.</p>

      <h2>9. Intellectual Property</h2>
      <p><strong>PanteraClaw IP:</strong> Pre-existing frameworks, tools, and methodologies remain PanteraClaw's property. You receive a license to use Background IP embedded in deliverables for internal business use.</p>
      <p><strong>Deliverables:</strong> Unless an SOW explicitly states otherwise, deliverables are licensed to you for internal use — not transferred as work-for-hire.</p>
      <p><strong>Client IP:</strong> You retain full ownership of your data and pre-existing materials.</p>

      <h2>10. Acceptable Use</h2>
      <p>You agree not to use our services to violate any law, infringe third-party rights, generate fraudulent or harmful content, conduct unauthorized security testing, or misrepresent your identity. We may suspend access immediately for suspected misuse.</p>

      <h2>11. Payment Terms</h2>
      <p>Fees are set forth in each SOW. Invoices are due within 30 days. Late payments accrue interest at 1.5% per month. PanteraClaw may pause deliverables on accounts more than 15 days past due. All fees are non-refundable unless PanteraClaw materially failed to deliver agreed work.</p>

      <h2>12. Third-Party Services</h2>
      <p>Our services may depend on third-party platforms, APIs, or AI providers. PanteraClaw is not responsible for third-party outages, accuracy issues, pricing changes, or changes in terms.</p>

      <h2>13. Disclaimer of Warranties</h2>
      <p>SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE." PANTERACLAW DISCLAIMS ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE DO NOT WARRANT ERROR-FREE OPERATION, CONTINUOUS AVAILABILITY, OR THAT SERVICES WILL ACHIEVE ANY SPECIFIC BUSINESS OUTCOME.</p>

      <h2>14. Limitation of Liability</h2>
      <p>PANTERACLAW'S TOTAL LIABILITY FOR ANY CLAIM SHALL NOT EXCEED THE FEES PAID BY YOU IN THE THREE MONTHS PRECEDING THE CLAIM OR $100, WHICHEVER IS GREATER. IN NO EVENT ARE WE LIABLE FOR INDIRECT, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING LOST PROFITS OR DATA LOSS.</p>
      <p>Nothing limits liability for gross negligence, willful misconduct, or liability that cannot be excluded by law.</p>

      <h2>15. Indemnification</h2>
      <p>You agree to indemnify PanteraClaw from claims arising from your use of services in violation of these Terms, your violation of applicable law, Client Data infringing third-party rights, or your operation of agentic systems after acceptance.</p>

      <h2>16. Force Majeure</h2>
      <p>PanteraClaw is not liable for delays caused by events outside our reasonable control including acts of God, cyberattacks, government actions, or third-party infrastructure failures.</p>

      <h2>17. Termination</h2>
      <p>Either party may terminate for material breach with 15 days' written notice and cure period. PanteraClaw may terminate immediately for legal or reputational risk. Upon termination, all outstanding fees become due immediately.</p>

      <h2>18. Dispute Resolution</h2>
      <p>Disputes will first be addressed through 30 days of good-faith negotiation, then binding arbitration under AAA Commercial Rules in Salt Lake City, Utah. Class action claims are waived. Either party may seek equitable relief in court for IP or confidentiality breaches.</p>

      <h2>19. Governing Law</h2>
      <p>These Terms are governed by the laws of the State of Utah, without regard to conflict of law principles.</p>

      <h2>20. Updates to Terms</h2>
      <p>We may update these Terms periodically. Material changes will be posted on this page. Continued use after the effective date constitutes acceptance.</p>

      <h2>21. Contact</h2>
      <p>
        <strong>PanteraClaw</strong><br />
        Email: info@panteraclaw.com<br />
        Salt Lake City, Utah
      </p>
    </LegalLayout>
    </>
  );
}
