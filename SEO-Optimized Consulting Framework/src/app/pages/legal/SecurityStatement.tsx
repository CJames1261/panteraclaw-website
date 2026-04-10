import { LegalLayout } from "../../components/LegalLayout";

export function SecurityStatement() {
  return (
    <LegalLayout title="Security Statement" lastUpdated="April 9, 2026">
      <h2>Overview</h2>
      <p>
        PanteraClaw takes the security of client data and our systems seriously. As a data engineering and AI
        consulting firm, we regularly work with sensitive business data and production infrastructure. This statement
        describes our security practices and the shared responsibility model that governs security in our engagements.
      </p>
      <p>This is not a compliance certification — it is a transparent description of the measures we implement.</p>

      <h2>1. Data Handling Security</h2>
      <h3>Encryption</h3>
      <ul>
        <li>All data transmitted to and from our systems uses <strong>TLS 1.2 or higher</strong> (HTTPS).</li>
        <li>Sensitive data stored at rest is encrypted using <strong>AES-256</strong> or equivalent where applicable.</li>
        <li>We do not store Client data on unencrypted local drives or personal devices without engagement-specific protocols.</li>
      </ul>
      <h3>Data Minimization</h3>
      <p>We collect and retain only the data necessary to perform contracted services. Data is returned or deleted upon engagement completion per our Data Processing Agreement.</p>
      <h3>Sensitive Data</h3>
      <p>We do not accept PII, PHI, PCI, or other regulated data without a written agreement governing its handling.</p>

      <h2>2. Access Controls</h2>
      <ul>
        <li>Access to client data is granted on a <strong>least-privilege basis</strong>.</li>
        <li><strong>Multi-factor authentication (MFA)</strong> on all accounts accessing client systems, cloud infrastructure, and code repositories.</li>
        <li>Credentials are never shared between personnel.</li>
        <li>Client system access is revoked promptly upon project completion or team member departure.</li>
        <li>Strong, unique credentials managed via password manager across all systems.</li>
      </ul>

      <h2>3. Third-Party Services</h2>
      <p>We select vendors with established security practices, execute DPAs where required, review third-party terms to understand data handling, and avoid transmitting sensitive client data to third-party services without written agreement.</p>

      <h2>4. Development and Code Security</h2>
      <ul>
        <li>Code in private repositories with access limited to project team members.</li>
        <li>No secrets, credentials, or API keys committed to source control — managed via environment variables or secrets management services.</li>
        <li>Dependencies reviewed for known vulnerabilities before production use.</li>
        <li>Production deliverables reviewed for OWASP Top 10 vulnerabilities (SQL injection, XSS, insecure authentication, improper data exposure).</li>
        <li>AI-generated code reviewed by a human engineer before inclusion in deliverables.</li>
      </ul>

      <h2>5. Infrastructure and Cloud Security</h2>
      <ul>
        <li>Cloud resources configured with restricted network access, firewall rules, disabled default credentials, and audit logging.</li>
        <li>Principle of least privilege for IAM roles and service accounts.</li>
        <li>Client infrastructure credentials treated as Confidential Information.</li>
        <li>Monitoring and alerting implemented for production systems we build or manage, where applicable.</li>
      </ul>

      <h2>6. AI System Security</h2>
      <ul>
        <li><strong>Prompt injection:</strong> LLM systems designed with input sanitization and output validation.</li>
        <li><strong>Model access control:</strong> AI API keys stored securely, never exposed in client-facing interfaces.</li>
        <li><strong>Output validation:</strong> AI outputs validated against expected formats in production systems.</li>
        <li><strong>Agentic systems:</strong> Designed with defined permission scopes, audit logging, and human-in-the-loop checkpoints for high-risk actions.</li>
      </ul>

      <h2>7. Incident Response</h2>
      <p>In the event of a security incident affecting client data, we will:</p>
      <ol>
        <li>Investigate and contain the incident as quickly as possible.</li>
        <li>Notify affected clients within <strong>72 hours</strong> of confirming a breach.</li>
        <li>Provide a summary of the incident, impact, and remediation steps.</li>
        <li>Cooperate with client investigation and regulatory notification requirements.</li>
      </ol>

      <h2>8. Employee and Contractor Practices</h2>
      <ul>
        <li>All personnel with data access bound by confidentiality agreements.</li>
        <li>Internal security guidelines covering acceptable use, data handling, and incident reporting.</li>
        <li>Subcontractors bound by security obligations at least as protective as our own.</li>
      </ul>

      <h2>9. Client Responsibilities (Shared Security Model)</h2>
      <p>Security is a shared responsibility. Clients are responsible for:</p>
      <ul>
        <li>Providing access credentials with appropriate (not excessive) permissions.</li>
        <li>Revoking PanteraClaw's access promptly upon project completion.</li>
        <li>Maintaining security standards in client-controlled infrastructure.</li>
        <li>Promptly notifying PanteraClaw of any suspected compromise of shared credentials.</li>
        <li>Maintaining appropriate security in environments where our deliverables are deployed.</li>
      </ul>
      <p><strong>PanteraClaw is not responsible for vulnerabilities arising from client infrastructure, third-party dependencies outside our control, or client modifications to delivered systems.</strong></p>

      <h2>10. Limitations</h2>
      <p>No system is completely secure. This statement describes our current practices, which are reviewed and updated periodically. It does not constitute a security audit, penetration test report, or compliance certification.</p>

      <h2>11. Vulnerability Reporting</h2>
      <p>
        If you discover a security vulnerability in our website or systems, please report it responsibly to{" "}
        <strong>info@panteraclaw.com</strong> with the subject "Security Vulnerability Report." We will acknowledge
        within 5 business days and work to address confirmed vulnerabilities promptly.
      </p>
    </LegalLayout>
  );
}
