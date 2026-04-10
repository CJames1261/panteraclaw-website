# PanteraClaw — Security Statement

> **Status:** Draft — review with a licensed attorney and security professional before publishing.
> **Last Updated:** April 9, 2026

---

## Overview

PanteraClaw takes the security of client data and our own systems seriously. As a data engineering and AI consulting firm, we regularly work with sensitive business data, proprietary systems, and production infrastructure. This statement describes our security practices and our expectations for clients.

This is not a compliance certification. It is a transparent description of the measures we take and the shared responsibility model that governs security in our engagements.

---

## 1. Data Handling Security

### 1.1 Encryption

- All data transmitted to and from our systems uses **TLS 1.2 or higher** (HTTPS).
- Sensitive data stored at rest is encrypted using **AES-256** or equivalent standards where applicable.
- We do not store Client data on unencrypted local drives or personal devices without explicit engagement-specific protocols.

### 1.2 Data Minimization

We collect and retain only the data necessary to perform contracted services. Data is deleted or returned to clients upon engagement completion per the terms of our Data Processing Agreement.

### 1.3 Sensitive Data

We do not accept personally identifiable information (PII), protected health information (PHI), payment card data (PCI), or other regulated data classes without a written agreement governing its handling. See our Data Processing Agreement for details.

---

## 2. Access Controls

- Access to client data and project systems is granted on a **least-privilege** basis — team members receive only the access necessary for their specific role on a project.
- We use **multi-factor authentication (MFA)** on accounts with access to client systems, cloud infrastructure, and code repositories.
- Access credentials are never shared between personnel.
- Client system access is revoked promptly upon project completion or team member departure.
- We use password managers to enforce strong, unique credentials across all systems.

---

## 3. Third-Party Services and Sub-Processors

Our work may involve third-party platforms including cloud providers, AI API services, version control systems, and communication tools. We:

- Select vendors with established security practices and published security documentation.
- Execute Data Processing Agreements with Sub-Processors where required by applicable privacy law.
- Review third-party terms of service to understand how they handle data we transmit to them.
- Avoid transmitting sensitive or regulated client data to third-party services unless explicitly agreed in writing.

Clients may request a list of Sub-Processors used in their engagement.

---

## 4. Development and Code Security

- Code is version-controlled in private repositories with access limited to project team members.
- We do not commit secrets, credentials, API keys, or sensitive configuration values to source control. Secrets are managed via environment variables or dedicated secrets management services.
- Dependencies are reviewed for known vulnerabilities before use in production deliverables.
- Deliverables intended for production are reviewed for common security vulnerabilities (OWASP Top 10) including SQL injection, XSS, insecure authentication, and improper data exposure.
- AI-generated code is reviewed by a human engineer before inclusion in deliverables.

---

## 5. Infrastructure and Cloud Security

- Cloud resources provisioned for client engagements are configured with security best practices including: restricted network access, firewall rules, disabled default credentials, and audit logging.
- We follow the principle of least privilege for cloud IAM roles and service accounts.
- Client infrastructure credentials and access keys are treated as Confidential Information under our Master Services Agreement.
- We recommend and, where applicable, implement monitoring and alerting for production systems we build or manage.

---

## 6. AI System Security

AI and machine learning systems present unique security considerations beyond traditional software:

- **Prompt injection** — We design LLM-based systems with input sanitization and output validation to reduce the risk of prompt injection attacks.
- **Model access control** — API keys for AI services are stored securely and never exposed in client-facing interfaces.
- **Output validation** — AI outputs in production systems are validated against expected formats and ranges where applicable.
- **Data poisoning** — For systems trained on client data, we implement data validation steps to reduce the risk of adversarial data affecting model behavior.
- **Agentic system risk** — Autonomous systems are designed with defined permission scopes, audit logging, and human-in-the-loop checkpoints for high-risk actions.

---

## 7. Incident Response

In the event of a security incident affecting client data:

1. We will investigate and contain the incident as quickly as possible.
2. We will notify affected clients within **72 hours** of becoming aware of a confirmed breach, consistent with our Data Processing Agreement.
3. We will provide a summary of the incident, impact, and remediation steps taken.
4. We will cooperate with any client investigation and assist with required regulatory notifications.

PanteraClaw maintains a documented incident response procedure. Clients may request a summary of this procedure.

---

## 8. Employee and Contractor Practices

- Personnel with access to client data are bound by confidentiality agreements.
- We maintain internal security guidelines covering acceptable use, data handling, and incident reporting.
- Subcontractors are screened and bound by confidentiality and security obligations at least as protective as our own.

---

## 9. Physical Security

PanteraClaw operates primarily as a remote-first business. Physical security practices include:

- Work performed on password-protected, encrypted devices.
- Screen locking when devices are unattended in public or shared spaces.
- Avoidance of processing client data on public or unsecured Wi-Fi networks without VPN.

---

## 10. Client Responsibilities (Shared Security Model)

Security is a shared responsibility. Clients are responsible for:

- Providing PanteraClaw with access credentials that have appropriate (not excessive) permissions for the work being done.
- Revoking PanteraClaw's access to client systems promptly upon project completion.
- Ensuring that systems and infrastructure under Client's control meet appropriate security standards.
- Notifying PanteraClaw promptly of any suspected compromise of shared credentials or systems.
- Maintaining appropriate security controls in any production environment where PanteraClaw's deliverables are deployed.

**PanteraClaw is not responsible for security vulnerabilities arising from client infrastructure, third-party dependencies outside our control, or client modifications to delivered systems.**

---

## 11. Limitations

While PanteraClaw implements the security measures described above, no system is completely secure. We cannot guarantee absolute protection against all threats. This Security Statement describes our current practices, which we review and update periodically.

This statement does not constitute a security audit, penetration test report, compliance certification, or warranty of any kind. For engagements with specific security requirements (e.g., SOC 2, HIPAA, FedRAMP compliance), please discuss requirements with us before engagement begins.

---

## 12. Security Inquiries and Vulnerability Reporting

If you discover a security vulnerability in our website or systems, please report it responsibly:

**Email:** [Insert Security Contact Email]
**Subject:** Security Vulnerability Report

We will acknowledge reports within **5 business days** and work to address confirmed vulnerabilities promptly. We ask that you do not publicly disclose vulnerabilities before we have had a reasonable opportunity to investigate and remediate.

---

## 13. Contact

**PanteraClaw**
Email: [Insert Business Email]
Address: [Insert Business Address]

---

## Notes for Attorney and Security Review

- [ ] Have a security professional review and confirm accuracy of technical claims before publishing
- [ ] Confirm encryption standards match actual tools and infrastructure used
- [ ] Add specific cloud providers used (AWS, GCP, Azure, Vercel, etc.) if comfortable disclosing
- [ ] Consider whether a formal vulnerability disclosure / bug bounty policy is appropriate
- [ ] If pursuing enterprise clients, consider SOC 2 Type II audit as a credibility investment
- [ ] Review whether HIPAA Business Associate Agreement (BAA) capability should be mentioned for healthcare prospects
- [ ] Update "Incident Response" section to match your actual documented procedure
