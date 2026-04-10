import { LegalLayout } from "../../components/LegalLayout";

export function PrivacyPolicy() {
  return (
    <LegalLayout title="Privacy Policy" lastUpdated="April 9, 2026">
      <h2>1. Overview</h2>
      <p>
        PanteraClaw is committed to protecting the privacy of individuals who interact with our website and services.
        This Privacy Policy explains what personal information we collect, why we collect it, how we use and share it,
        and what rights you have.
      </p>
      <p>
        <strong>Two roles we play:</strong> When we collect your information directly (contact forms, analytics), we are
        the <strong>Data Controller</strong> and this Policy applies. When we process data on behalf of a client under a
        signed engagement, we act as a <strong>Data Processor</strong> governed by a separate Data Processing Agreement,
        not this Policy.
      </p>
      <p>
        California residents: see <strong>Section 8 (CCPA)</strong>. EEA/UK residents: see <strong>Section 9 (GDPR)</strong>.
      </p>

      <h2>2. Information We Collect</h2>
      <h3>Information You Provide</h3>
      <ul>
        <li>Name, email address, phone number, company name, job title</li>
        <li>Project briefs, data files, and materials shared for service delivery</li>
        <li>Emails, messages, and inquiry form submissions</li>
        <li>Billing details and signed agreements</li>
      </ul>
      <h3>Automatically Collected Data</h3>
      <ul>
        <li>IP address, browser type, operating system, device type</li>
        <li>Pages visited, time on page, referral source</li>
        <li>Server access logs and timestamps</li>
      </ul>
      <h3>AI and Service-Related Data</h3>
      <p>
        Inputs submitted to AI-assisted services may be processed by PanteraClaw and by third-party AI providers.
        We do not use client engagement data to train AI models without explicit written consent.
      </p>

      <h2>3. How We Use Your Information</h2>
      <ul>
        <li><strong>Service delivery</strong> — performing contracted work, providing support, delivering outputs</li>
        <li><strong>Communication</strong> — responding to inquiries, project updates</li>
        <li><strong>Business operations</strong> — invoicing, contracts, recordkeeping</li>
        <li><strong>Security</strong> — detecting and preventing unauthorized access or abuse</li>
        <li><strong>Website improvement</strong> — analyzing usage to improve content and performance</li>
        <li><strong>Legal compliance</strong> — meeting legal obligations and enforcing our terms</li>
      </ul>

      <h2>4. AI Processing and Third-Party AI Providers</h2>
      <p>
        Some services involve third-party AI platforms (e.g., OpenAI, Anthropic, Google, AWS). When data interacts
        with these systems, inputs may be transmitted to those providers. We select providers with commercially
        reasonable data protection practices and execute Data Processing Agreements where required.
      </p>
      <p>
        <strong>We do not:</strong> transmit regulated data (PHI, PCI) to AI APIs without a written agreement,
        sell AI interaction data, or use one client's data to benefit another.
      </p>
      <p>
        Do not submit sensitive personal data to AI-assisted tools without a written agreement covering that data class.
      </p>

      <h2>5. How We Share Information</h2>
      <p><strong>We do not sell your personal information.</strong> We may share information with:</p>
      <ul>
        <li><strong>Service providers</strong> — cloud hosting, analytics, email platforms, AI APIs. Vendors are contractually required to process data only on our behalf.</li>
        <li><strong>Legal authorities</strong> — when required by law, court order, or to protect safety.</li>
        <li><strong>Business transfers</strong> — in connection with a merger or acquisition, with prior notice.</li>
        <li><strong>With your consent</strong> — when you have given explicit permission.</li>
      </ul>

      <h2>6. Data Retention</h2>
      <table>
        <thead>
          <tr><th>Data Type</th><th>Retention Period</th></tr>
        </thead>
        <tbody>
          <tr><td>Client engagement records</td><td>Duration of engagement + 5 years</td></tr>
          <tr><td>Contact and inquiry data (non-clients)</td><td>2 years from last contact</td></tr>
          <tr><td>Website analytics</td><td>26 months</td></tr>
          <tr><td>Email communications</td><td>3 years</td></tr>
          <tr><td>Financial and billing records</td><td>7 years (IRS requirements)</td></tr>
          <tr><td>AI input/output logs</td><td>90 days unless required longer</td></tr>
        </tbody>
      </table>

      <h2>7. Your Privacy Rights</h2>
      <p>Depending on your location, you may have the right to: access, correct, delete, port, restrict, or object to processing of your personal information, and to withdraw consent.</p>
      <p>To exercise any right, email us at <strong>info@panteraclaw.com</strong>. We will respond within 30 days.</p>

      <h2>8. California Privacy Rights (CCPA/CPRA)</h2>
      <p>California residents have rights to: know what data we collect, request deletion, correct inaccurate data, and opt out of sale or sharing.</p>
      <p><strong>PanteraClaw does not sell personal information or share it for cross-context behavioral advertising.</strong></p>
      <p>Submit California requests to <strong>info@panteraclaw.com</strong> with subject "California Privacy Request." We respond within 45 days.</p>

      <h2>9. EEA and UK — GDPR Rights</h2>
      <p>For EEA/UK residents, PanteraClaw acts as Data Controller for data collected via this website. Legal bases for processing include performance of a contract, legitimate interests, consent, and legal obligation.</p>
      <p>You have rights to access, rectification, erasure, restriction, portability, and objection, and the right to lodge a complaint with your supervisory authority.</p>
      <p>Where we transfer personal data outside the EEA/UK, we use Standard Contractual Clauses or other approved mechanisms.</p>

      <h2>10. Cookies</h2>
      <p>We use cookies and analytics tools to understand website usage. See our <a href="/legal/cookies">Cookie Policy</a> for full details and opt-out instructions.</p>

      <h2>11. Children's Privacy</h2>
      <p>Our services are intended for individuals 18 or older. We do not knowingly collect data from anyone under 13. If you believe we have, contact us immediately.</p>

      <h2>12. Updates to This Policy</h2>
      <p>We may update this Policy periodically. Material changes will be posted on this page with an updated date and communicated to active clients by email.</p>

      <h2>13. Contact</h2>
      <p>
        <strong>PanteraClaw</strong><br />
        Email: info@panteraclaw.com<br />
        Salt Lake City, Utah
      </p>
    </LegalLayout>
  );
}
