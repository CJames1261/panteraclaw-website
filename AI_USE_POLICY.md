# PanteraClaw — AI Use Policy

> **Status:** Draft — review with a licensed attorney before publishing.
> **Effective Date:** [Insert Date]
> **Last Updated:** April 9, 2026

---

## 1. Purpose

This AI Use Policy ("Policy") governs how PanteraClaw uses artificial intelligence in its services, how clients may use AI-assisted deliverables, and what is prohibited. It supplements our Terms of Service and Master Services Agreement.

AI technology is central to what we build. This Policy exists to ensure that AI systems are used responsibly, transparently, and in ways that create genuine value while managing risk.

---

## 2. How PanteraClaw Uses AI

### 2.1 In Service Delivery

PanteraClaw may use AI tools, large language models (LLMs), machine learning models, and automated systems in the following capacities:

- **Development assistance** — AI-assisted code generation, review, and documentation (all reviewed by a human engineer before delivery).
- **Data analysis** — ML models for pattern recognition, clustering, classification, prediction, and anomaly detection.
- **LLM integrations** — Building applications powered by third-party LLM APIs (e.g., OpenAI, Anthropic, Google Gemini) on behalf of clients.
- **Agentic systems** — Autonomous agents that execute multi-step workflows with varying degrees of human oversight.
- **Natural language processing** — Text classification, extraction, summarization, and generation tasks.

### 2.2 AI Transparency

PanteraClaw will disclose:
- When a deliverable incorporates AI-generated components as a material part of its function.
- Which third-party AI models or APIs are used in a deliverable, at the level of specificity agreed in the SOW.
- Known limitations, failure modes, or accuracy constraints of AI components, where material.

We do not claim that AI-generated outputs are deterministic, perfectly accurate, or free from bias.

---

## 3. Permitted Uses of AI-Assisted Deliverables

Client may use AI-assisted deliverables PanteraClaw creates for:

- Internal business operations, analysis, and decision support.
- Customer-facing applications where appropriate disclosures are made and human oversight is maintained.
- Automating repetitive business workflows where the risk of errors is low or where errors are caught by downstream review processes.
- Research, reporting, and business intelligence.
- Any other purpose explicitly authorized in the applicable Statement of Work.

---

## 4. Prohibited Uses

The following uses of PanteraClaw's AI services, tools, and deliverables are strictly prohibited:

### 4.1 Harmful or Deceptive Uses

- Generating or distributing misinformation, disinformation, or deliberately false content.
- Creating deepfakes, synthetic media, or impersonations intended to deceive.
- Manipulating individuals through deceptive AI-generated communications.
- Using AI to create or distribute spam, phishing content, or fraudulent materials.

### 4.2 Discriminatory and Rights-Violating Uses

- Using AI outputs to make or inform automated decisions that unlawfully discriminate based on race, gender, religion, national origin, disability, age, sexual orientation, or other protected characteristics.
- Deploying AI in hiring, lending, insurance underwriting, healthcare triage, or other high-stakes regulated contexts without appropriate human oversight, legal review, and bias testing.
- Using AI to surveil, track, or profile individuals without their knowledge and consent where required by law.

### 4.3 Unlawful Uses

- Any use that violates applicable local, state, national, or international law.
- Processing regulated data (e.g., PHI, PCI, biometric data) through AI systems without appropriate safeguards and legal authorization.
- Using AI to circumvent security systems, conduct unauthorized access, or facilitate cyberattacks.
- Using AI to generate content that infringes third-party intellectual property rights.
- Using AI to assist in activities that violate export control or sanctions laws.

### 4.4 High-Risk Autonomous Deployments (Without Safeguards)

- Deploying agentic AI systems that can take irreversible real-world actions (e.g., send communications, execute financial transactions, modify production databases) without human review checkpoints or kill-switch mechanisms.
- Using AI systems in safety-critical applications (e.g., autonomous vehicles, medical devices, industrial control systems) without meeting applicable regulatory and safety standards.

---

## 5. Human Oversight Requirements

PanteraClaw strongly recommends — and in some cases requires — human oversight for AI outputs before consequential use:

| Use Case | Oversight Requirement |
|---|---|
| AI-drafted content for internal use | Review recommended |
| AI-drafted content for public/customer-facing use | Human review required before publishing |
| AI-generated code in production systems | Engineer review and testing required |
| AI-assisted decisions affecting individuals (hiring, credit, access) | Human decision-maker required; AI as input only |
| Agentic systems executing financial or legal actions | Human approval required per transaction or action |
| AI analysis used in regulated reports or filings | Professional review and sign-off required |

**Client assumes full responsibility for consequences of AI output use without appropriate oversight.**

---

## 6. Agentic Systems

Autonomous and agentic AI systems — those that execute multi-step tasks, interact with external systems, or take real-world actions with limited human intervention — require additional safeguards:

### 6.1 Before Deployment

- Define and document the permitted action scope of the agent (what it can and cannot do).
- Implement rate limits, budget controls, and guardrails to prevent runaway behavior.
- Establish an audit log of all agent actions.
- Test thoroughly in a staging environment before production deployment.
- Establish a kill-switch or pause mechanism that can immediately halt agent activity.

### 6.2 In Production

- Monitor agent activity on an ongoing basis.
- Define escalation paths for unexpected or high-risk agent behavior.
- Review agent action logs regularly.
- Re-evaluate safeguards as the agent's capabilities or action scope expand.

### 6.3 Liability

PanteraClaw designs agentic systems with reasonable safeguards as part of the engagement. After formal project acceptance and deployment by Client, **Client assumes full operational responsibility and liability** for agent behavior, including unintended actions resulting from edge cases, model updates, adversarial inputs, or changes to integrated systems.

---

## 7. Data Inputs to AI Systems

### 7.1 What You Should Not Input

Do not submit the following to AI-powered tools or workflows without a written agreement explicitly governing that data class:

- Personal data of individuals without a legal basis for processing.
- Protected health information (PHI) regulated under HIPAA.
- Payment card data within PCI-DSS scope.
- Classified or export-controlled information.
- Trade secrets or highly sensitive proprietary information you cannot legally share with third-party AI providers.
- Data of minors under 13.

### 7.2 Third-Party AI Providers

When AI systems involve third-party LLM APIs, inputs may be transmitted to those providers' infrastructure. PanteraClaw selects providers with commercially reasonable data protection practices. However:

- PanteraClaw does not control how third-party AI providers store or use submitted data.
- Third-party providers' terms of service and privacy policies govern their data handling.
- Clients should review the data handling policies of AI providers used in their deliverables.

### 7.3 No Training on Client Data

PanteraClaw will not use Client's data to train, fine-tune, or otherwise improve any AI model without Client's explicit prior written consent.

---

## 8. Bias, Fairness, and Accuracy

PanteraClaw acknowledges the following inherent characteristics of AI systems:

- **Bias:** AI models trained on historical data may reflect, amplify, or introduce biases. PanteraClaw will flag known bias risks for models used in high-stakes decisions.
- **Accuracy limitations:** AI systems have error rates. No AI system PanteraClaw delivers is warranted to be perfectly accurate for all inputs.
- **Distributional shift:** AI models may perform differently on real-world data that differs from training data. Production performance should be monitored.
- **Hallucinations:** LLMs may generate plausible-sounding but incorrect information. Outputs should be verified against authoritative sources before use in important decisions.

Client is responsible for evaluating whether the accuracy and bias profile of an AI system is acceptable for their intended use case, particularly in regulated or high-stakes applications.

---

## 9. Disclosure to End Users

Where AI-assisted products or services built by PanteraClaw are deployed to end users (customers, employees, or the public), Client is responsible for:

- Disclosing to end users when they are interacting with an AI system, where required by law or where a reasonable person would want to know.
- Providing end users with a mechanism to request human review of AI-generated decisions that affect them, where required by law (e.g., GDPR Art. 22, Colorado AI Act, EU AI Act).
- Complying with all applicable AI transparency and disclosure requirements in Client's jurisdiction and industry.

---

## 10. Compliance with AI Regulations

The AI regulatory landscape is evolving rapidly. Clients deploying AI systems in regulated contexts should be aware of and comply with applicable requirements, which may include:

- **EU AI Act** (applicable to systems affecting EU individuals or deployed in the EU)
- **Colorado AI Act** and other US state AI laws
- **EEOC guidance** on AI in hiring
- **CFPB guidance** on AI in credit decisions
- **FDA regulations** on AI in medical devices
- **NIST AI Risk Management Framework** (voluntary but increasingly expected by enterprise clients)

PanteraClaw can advise on AI risk management and compliance considerations as a professional service, but such advice does not substitute for legal counsel.

---

## 11. Violations and Enforcement

PanteraClaw reserves the right to:

- Suspend or terminate services if Client uses AI deliverables in a manner that violates this Policy, applicable law, or third-party AI providers' terms of service.
- Refuse to build or modify AI systems intended for prohibited uses.
- Report suspected illegal activity to appropriate authorities.

---

## 12. Updates to This Policy

PanteraClaw may update this AI Use Policy as technology, regulations, and best practices evolve. Material changes will be communicated via our website and to active clients by email. Continued use of AI-assisted services after an update constitutes acceptance of the revised Policy.

---

## 13. Contact

For questions about this Policy or to discuss AI use cases:

**PanteraClaw**
Email: [Insert Business Email]

---

## Notes for Attorney Review

- [ ] Review Section 4 prohibited uses against specific services offered — confirm nothing routine is accidentally prohibited
- [ ] Review Section 5 oversight requirements table — confirm these match your actual recommended practices
- [ ] Section 9 (Disclosure to End Users) — review against EU AI Act, Colorado AI Act, and any state laws applicable to your clients' industries
- [ ] Section 10 — confirm list of regulations is current; EU AI Act enforcement timeline changed in 2025–2026
- [ ] Consider whether a specific Acceptable Use Policy for any client-facing AI tools/platforms is needed separately
- [ ] Review agentic system liability shift language with attorney to confirm it will be upheld in Utah
