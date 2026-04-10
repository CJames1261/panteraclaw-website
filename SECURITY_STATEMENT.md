# PanteraClaw — Security Statement

**Status:** Draft — review with a licensed attorney and security professional before publishing.  
**Last Updated:** April 10, 2026

---

## Overview

PanteraClaw, doing business as Agentic AI LLC ("we," "us," or "our"), takes the security of client data and our systems seriously. As a Utah-based consulting firm offering business web development, database creation, management, and optimization; dashboard and visualization development; agentic workflow design; and advanced analytics, we regularly work with sensitive business data, proprietary systems, and production infrastructure. This statement describes our security practices and our expectations for clients under the shared responsibility model.

This is not a compliance certification, audit report, or warranty. It is a transparent description of our current measures, which we review and update periodically.

---

## 1. Data Handling Security

### 1.1 Encryption

- All data transmitted to and from our systems uses **TLS 1.3** (or higher where available).
- Sensitive data at rest is encrypted using **AES-256** or equivalent industry standards.
- Client data is not stored on unencrypted local drives or personal devices; storage occurs in secured, encrypted cloud environments or as specified in the engagement agreement.

### 1.2 Data Minimization and Retention

We collect, process, and retain only the data necessary to perform contracted services (e.g., database optimization, agentic workflows). Excess data is deleted or returned to clients upon engagement completion or as required by our Data Processing Agreement (DPA) and Privacy Policy. See our Privacy Policy for specific retention periods.

### 1.3 Sensitive and Regulated Data

We do not accept or process personally identifiable information (PII), protected health information (PHI), payment card data (PCI-DSS), government-issued IDs, or other regulated/special category data without a prior written agreement (e.g., Business Associate Agreement for HIPAA, DPA with safeguards) explicitly authorizing it and detailing handling procedures.

---

## 2. Access Controls

- Access to client data, project systems, and deliverables is granted on a **least-privilege, need-to-know basis** — limited to specific team members for defined project scopes.
- **Multi-factor authentication (MFA)** is enforced on all accounts accessing client systems, cloud infrastructure, code repositories, and internal tools.
- Credentials are unique, strong (enforced via password managers), and never shared.
- Access is logged, monitored, and revoked immediately upon project completion, role change, or personnel departure.
- Regular access reviews are conducted quarterly or per engagement milestones.

---

## 3. Third-Party Services and Sub-Processors

Our services may involve third-party platforms (e.g., cloud providers like AWS/GCP/Azure, AI APIs like OpenAI/Anthropic/Google, version control like GitHub/GitLab, communication tools). We:

- Select vendors with documented security programs (e.g., SOC 2, ISO 27001).
- Execute Data Processing Agreements (DPAs) or equivalent with sub-processors, including standard contractual clauses for international transfers if applicable.
- Conduct due diligence on vendor security practices before engagement.
- Minimize transmission of sensitive data; anonymize or pseudonymize where feasible.
- Provide clients with a list of sub-processors upon request, subject to confidentiality.

---

## 4. Development and Code Security

- Code for web development, dashboards, databases, and agentic workflows is stored in private repositories with role-based access.
- Secrets (e.g., API keys, credentials, database passwords) are never committed to source control; managed via dedicated services (e.g., AWS Secrets Manager, HashiCorp Vault).
- Third-party dependencies are scanned for vulnerabilities using tools like Dependabot or Snyk before production use.
- Deliverables undergo security reviews aligned with **OWASP Top 10** (e.g., injection prevention, broken authentication, sensitive data exposure).
- All AI-generated code outputs are human-reviewed before delivery.

---

## 5. Infrastructure and Cloud Security

- Client-engaged cloud resources follow security baselines: network segmentation, firewall rules (e.g., security groups), least-privilege IAM policies, no default credentials, and enabled logging/auditing (e.g., CloudTrail, Cloud Audit Logs).
- Production databases and dashboards include monitoring for anomalies, backups with encryption, and disaster recovery testing.
- Shared credentials are treated as Confidential Information under our Master Services Agreement (MSA) or Statement of Work (SOW).

---

## 6. AI and Agentic System Security

AI integrations and agentic workflows include tailored protections:

- **Prompt injection/Jailbreak mitigation**: Input sanitization, context limiting, and output validation.
- **Model/API security**: Scoped API keys, rate limiting, secure storage.
- **Agentic risks**: Permission boundaries, human-in-the-loop for critical actions, audit trails for autonomous decisions.
- **Data/model integrity**: Validation against poisoning/adversarial inputs; no client data used for external training without consent.
- Advanced analytics pipelines include access logging and anomaly detection.

---

## 7. Incident Response

We maintain a documented Incident Response Plan aligned with NIST SP 800-61:

1. **Detection/Assessment**: Continuous monitoring with alerting.
2. **Containment/Eradication**: Isolate affected systems.
3. **Notification**: Notify affected clients without undue delay (within 72 hours of confirmation where required by DPA/GDPR; sooner per agreement).
4. **Recovery/Remediation**: Restore systems, conduct root cause analysis.
5. **Post-Incident Review**: Share summary (impact, actions) with clients.

Clients may request a high-level overview of our plan.

---

## 8. Employee and Contractor Practices

- All personnel sign confidentiality and security agreements.
- Mandatory annual security awareness training on phishing, data handling, and compliance.
- Background checks for key roles; NDAs for all with client data access.
- Subcontractors are vetted and contractually bound to equivalent standards.

---

## 9. Physical and Endpoint Security

As a remote-first Utah operation:

- Devices are full-disk encrypted, with endpoint protection (e.g., antivirus, EDR).
- Mandatory screen locks, no public Wi-Fi without VPN.
- Secure disposal of physical media containing client data.

---

## 10. Client Responsibilities (Shared Security Model)

Clients must:

- Provide scoped, temporary credentials with least privilege.
- Revoke our access post-engagement.
- Secure their own environments and post-delivery modifications.
- Promptly report suspected issues.
- Comply with data submission guidelines (e.g., no unapproved regulated data).

**PanteraClaw is not liable for vulnerabilities in client-controlled systems, unvetted third-party integrations, or post-delivery changes.**

---

## 11. Limitations and Disclaimers

No system is invulnerable to advanced threats. We provide **commercially reasonable** security but offer no guarantees, warranties, or liability for breaches beyond our direct control. This statement does not imply SOC 2, HIPAA, or other certifications unless explicitly stated in an SOW. For regulated engagements, discuss requirements upfront.

---

## 12. Security Inquiries and Vulnerability Reporting

Report vulnerabilities responsibly to: [Insert Security Contact Email] (Subject: "Security Vulnerability Report - PanteraClaw").

- Acknowledgment within **3 business days**.
- No public disclosure until remediated.
- Good-faith reports eligible for recognition (no bug bounty currently).

---

## 13. Contact

**PanteraClaw (Agentic AI LLC)**  
[Insert Business Email]  
[Insert Utah Address]  
Utah, USA

---

**Key Changes Made:**  
- Updated date to April 10, 2026; added business name/location/services for context.  
- Enhanced technical specifics (e.g., TLS 1.3, OWASP, NIST) for credibility while avoiding overcommitment.  
- Strengthened shared responsibility, limitations, and disclaimers to protect against liability.  
- Added monitoring, reviews, training for comprehensiveness.  
- Aligned with Privacy Policy (cross-references).  
- Removed "Notes for Attorney" as it's internal; this is now client-facing. Final attorney/security pro review essential.

Extracted