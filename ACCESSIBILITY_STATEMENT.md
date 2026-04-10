# Pantera Claw — Accessibility Statement

> **Status:** Draft — conduct accessibility audit and update before publishing.
> **Last Updated:** April 10, 2026
> **Conformance Target:** WCAG 2.1 Level AA
> **Business Information:** Pantera Claw is a DBA of Agentic AI LLC, a Utah-based limited liability company providing business web development, database services, dashboard development, agentic workflow design, and advanced analytics.

---

## Our Commitment

Pantera Claw (Agentic AI LLC) is committed to making its website accessible to users with disabilities. We aim to meet **WCAG 2.1 Level AA** standards published by the W3C.

---

## Current Accessibility Status

**Conformance Status:** Partially conformant

The website partially meets WCAG 2.1 AA. Known limitations are listed below and will be addressed:

| Known Issue | Area Affected | Status |
|-------------|---------------|--------|
| Interactive canvas visualizations lack text alternatives | Home page and case study data visualizations | In progress |
| Some color contrast ratios below 4.5:1 | Buttons and form elements | Planned |
| Missing ARIA labels on interactive elements | Dashboard demo widgets | Planned |

*Update this table post-audit with specific findings.*

---

## Technical Specifications

Technologies used:
- HTML5
- CSS3
- JavaScript (React/TypeScript)
- WAI-ARIA (as implemented)

---

## Accessibility Features Implemented

- **Keyboard navigation:** All interactive elements are keyboard-accessible with visible focus indicators.
- **Screen reader support:** Semantic HTML, alt text on images, labeled form inputs.
- **Visual design:** Targets WCAG AA contrast ratios; resizable text up to 200%; no color-only cues.
- **Motion:** Evaluating `prefers-reduced-motion` support for animations.
- **Responsive:** Works across devices and screen sizes.

---

## Known Limitations

- **Canvas visualizations:** HTML5 Canvas on Home/Case Study pages limits accessibility. Solutions under review: text alternatives, ARIA-live regions, data tables.
- **Third-party content:** Embeds may not fully conform; we select accessible vendors where possible.

This is **not legal advice**. Consult an attorney for compliance with ADA or other laws.

---

## Feedback and Contact

Contact for accessibility issues:

**Email:** accessibility@panteraclaw.com  
**Subject:** Accessibility Feedback

Response within **5 business days**. We will provide alternative formats upon request, subject to technical feasibility.

---

## Formal Complaints

Unsatisfied with our response? Contact:

- **United States:** U.S. Department of Justice ADA hotline: ada.gov
- **European Union:** National authority under Directive (EU) 2016/2102
- **United Kingdom:** Equality and Human Rights Commission

---

## Legal Basis

### United States
Aligned with **ADA Title III** (public accommodations), per DOJ guidance. WCAG 2.1 AA demonstrates good-faith effort, though not federally mandated for private sites as of this date. See *Robles v. Domino's* (9th Cir. 2019).

### European Union
Addresses Web Accessibility Directive (2016/2102) and European Accessibility Act (2019/882, effective 2025+).

**This statement does not guarantee full compliance. Pantera Claw disclaims liability for third-party content or inaccessible client deliverables.**

---

## Assessment Approach

- Self-evaluation vs. WCAG 2.1
- Automated tools (axe, Lighthouse)
- Manual testing (keyboard, screen readers: NVDA, VoiceOver)
- Third-party audit *(planned)*

---

## Date of Statement

Last reviewed: **April 10, 2026**.

---

## Pre-Publishing Checklist

- [ ] Complete audit; update issues table
- [ ] Add real audit findings
- [ ] Implement canvas fallbacks or alternatives
- [ ] Add `prefers-reduced-motion`
- [ ] Verify client products' separate accessibility needs
- [ ] For Section 508/EAA clients: Provide VPAT if requested
- [ ] Insert actual email address
- [ ] Attorney review recommended

**Disclaimer:** This is a draft template. Agentic AI LLC / Pantera Claw provides no warranties. Seek licensed legal counsel in Utah for binding advice. No attorney-client relationship formed.
