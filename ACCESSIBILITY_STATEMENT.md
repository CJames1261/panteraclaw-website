# PanteraClaw — Accessibility Statement

> **Status:** Draft — review and update to reflect actual accessibility audit results before publishing.
> **Last Updated:** April 9, 2026
> **Conformance Target:** WCAG 2.1 Level AA

---

## Our Commitment

PanteraClaw is committed to ensuring that our website is accessible to all users, including people with disabilities. We believe that accessible design is good design — and that digital products should work for everyone regardless of ability, device, or context.

We are actively working to meet the Web Content Accessibility Guidelines (WCAG) 2.1, Level AA, as published by the World Wide Web Consortium (W3C).

---

## Current Accessibility Status

**Conformance Status:** Partially conformant

Our website is partially conformant with WCAG 2.1 Level AA. "Partially conformant" means that some parts of the content do not fully conform to the accessibility standards. We are aware of the following known limitations and are working to address them:

| Known Issue | Area Affected | Status |
|---|---|---|
| [e.g., Interactive canvas visualizations lack text alternatives] | Home page data visualizations | In progress |
| [e.g., Some color contrast ratios below 4.5:1] | [Location] | Planned |
| [e.g., Missing ARIA labels on some interactive elements] | [Location] | Planned |

*This table should be updated after a formal accessibility audit.*

---

## Technical Specifications

This website relies on the following technologies for conformance with WCAG 2.1:

- HTML5
- CSS3
- JavaScript (React/TypeScript)
- WAI-ARIA (where implemented)

---

## Accessibility Features

We have implemented or are implementing the following accessibility features:

**Keyboard navigation**
- Interactive elements are reachable and operable via keyboard.
- Focus indicators are visible on interactive elements.

**Screen reader support**
- Semantic HTML is used throughout to communicate structure and meaning.
- Images have alternative text descriptions.
- Form inputs are associated with descriptive labels.

**Visual design**
- Text and background colors aim to meet WCAG 2.1 AA contrast ratios (4.5:1 for normal text, 3:1 for large text).
- Text can be resized up to 200% without loss of content or functionality.
- Content does not rely solely on color to convey information.

**Motion and animation**
- This website contains animated visualizations. We are working to add a "reduce motion" option that respects the `prefers-reduced-motion` media query.

**Responsive design**
- The website is designed to function on a range of screen sizes and devices.

---

## Limitations and Known Issues

Despite our efforts, some content may not yet fully meet accessibility standards:

- **Interactive canvas visualizations** on the Home and Case Study pages are rendered using HTML5 Canvas. Canvas content is inherently difficult to make fully accessible. We are evaluating approaches including: text alternatives, ARIA descriptions, and data tables as supplementary formats.
- **Third-party embedded content** may not fully conform to WCAG 2.1 AA. We work to select accessible third-party tools where possible.

---

## Feedback and Contact

We welcome feedback on the accessibility of our website. If you encounter any barriers or have suggestions for improvement, please contact us:

**Email:** [Insert Email]
**Subject line:** Accessibility Feedback

We aim to respond to accessibility feedback within **5 business days**.

If you need information in an alternative format or have difficulty accessing any part of our website, please contact us and we will make reasonable efforts to provide the content in an accessible way.

---

## Formal Complaints

If you are not satisfied with our response to your accessibility concern, you may contact the following bodies depending on your location:

- **United States:** U.S. Department of Justice Civil Rights Division (for ADA Title III complaints): www.ada.gov
- **European Union:** Your national accessibility enforcement authority under the Web Accessibility Directive (Directive 2016/2102)
- **United Kingdom:** Equality and Human Rights Commission: www.equalityhumanrights.com

---

## Legal Basis

### United States
This statement reflects our commitment to compliance with the Americans with Disabilities Act (ADA) Title III as it applies to websites and digital services, informed by U.S. Department of Justice guidance and the Supreme Court's interpretation in *Robles v. Domino's Pizza* (9th Cir. 2019). While U.S. federal regulations specifically codifying WCAG standards for private businesses had not been finalized as of the date of this statement, WCAG 2.1 AA is the widely accepted standard for demonstrating good-faith accessibility compliance.

### European Union
For EU-based clients or users, this statement addresses requirements of the Web Accessibility Directive (Directive 2016/2102) and the European Accessibility Act (Directive 2019/882, applicable from June 2025 for digital products and services).

---

## Assessment Approach

PanteraClaw assesses the accessibility of our website through:

- [ ] Self-evaluation against WCAG 2.1 success criteria
- [ ] Automated testing tools (e.g., axe, Lighthouse)
- [ ] Manual keyboard navigation testing
- [ ] Screen reader testing (e.g., NVDA, VoiceOver)
- [ ] Formal third-party accessibility audit *(planned)*

---

## Date of Statement

This statement was last reviewed on **April 9, 2026**.

---

## Notes for Review Before Publishing

- [ ] Conduct an accessibility audit (automated + manual) and update the "Known Issues" table with actual findings
- [ ] Replace placeholder known issues with real ones from your audit
- [ ] Confirm whether canvas visualizations have any text fallbacks or if that's a gap to address
- [ ] Add `prefers-reduced-motion` support to animated components before publishing this statement
- [ ] If you build client-facing products, their accessibility obligations may be separate from this statement
- [ ] For enterprise clients subject to Section 508 (US federal contractors) or the European Accessibility Act, you may need a more formal VPAT (Voluntary Product Accessibility Template)
