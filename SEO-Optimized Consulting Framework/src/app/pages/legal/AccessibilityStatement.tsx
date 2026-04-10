import { LegalLayout } from "../../components/LegalLayout";
import { Helmet } from "react-helmet-async";

export function AccessibilityStatement() {
  return (
    <>
      <Helmet>
        <title>Accessibility Statement | Pantera Claw</title>
        <meta name="description" content="Pantera Claw's commitment to web accessibility and WCAG 2.1 AA compliance." />
      </Helmet>
      <LegalLayout title="Accessibility Statement" lastUpdated="April 9, 2026">
      <h2>Our Commitment</h2>
      <p>
        PanteraClaw is committed to ensuring our website is accessible to all users, including people with
        disabilities. We are actively working to meet the Web Content Accessibility Guidelines (WCAG) 2.1, Level AA,
        as published by the World Wide Web Consortium (W3C).
      </p>

      <h2>1. Current Status</h2>
      <p>
        <strong>Conformance status: Partially conformant.</strong> Some parts of the content do not yet fully conform
        to WCAG 2.1 Level AA. We are aware of the following known limitations and are actively working to address them:
      </p>
      <table>
        <thead>
          <tr><th>Known Issue</th><th>Area Affected</th><th>Status</th></tr>
        </thead>
        <tbody>
          <tr>
            <td>Interactive canvas visualizations lack full text alternatives</td>
            <td>Home page and case study visualizations</td>
            <td>In progress</td>
          </tr>
          <tr>
            <td>Animated content does not yet respect prefers-reduced-motion</td>
            <td>Home page animations</td>
            <td>Planned</td>
          </tr>
        </tbody>
      </table>

      <h2>2. Accessibility Features</h2>
      <h3>Keyboard Navigation</h3>
      <p>Interactive elements are reachable and operable via keyboard. Focus indicators are visible on interactive elements.</p>

      <h3>Screen Reader Support</h3>
      <p>Semantic HTML is used throughout to communicate structure and meaning. Images have alternative text. Form inputs are associated with descriptive labels.</p>

      <h3>Visual Design</h3>
      <p>Text and background colors aim to meet WCAG 2.1 AA contrast ratios (4.5:1 for normal text, 3:1 for large text). Text can be resized up to 200% without loss of content or functionality. Content does not rely solely on color to convey information.</p>

      <h3>Responsive Design</h3>
      <p>The website is designed to function across a range of screen sizes and devices.</p>

      <h2>3. Technical Specifications</h2>
      <p>This website uses HTML5, CSS3, JavaScript (React/TypeScript), and WAI-ARIA where implemented.</p>

      <h2>4. Known Limitations</h2>
      <p>
        <strong>Canvas visualizations</strong> on the Home and Case Study pages are rendered using HTML5 Canvas.
        Canvas content is inherently difficult to make fully accessible. We are evaluating text alternatives, ARIA
        descriptions, and supplementary data tables.
      </p>
      <p>
        <strong>Third-party embedded content</strong> may not fully conform to WCAG 2.1 AA. We select accessible
        third-party tools where possible.
      </p>

      <h2>5. Legal Basis</h2>
      <p>
        This statement reflects our commitment to compliance with the Americans with Disabilities Act (ADA) Title III
        as it applies to websites, informed by DOJ guidance and WCAG 2.1 AA as the widely accepted standard for
        good-faith accessibility compliance. For EU users, this statement also addresses the European Accessibility
        Act (Directive 2019/882, applicable from June 2025).
      </p>

      <h2>6. Feedback and Contact</h2>
      <p>
        We welcome feedback on the accessibility of our website. If you encounter barriers or have suggestions,
        contact us at <strong>info@panteraclaw.com</strong> with subject "Accessibility Feedback." We aim to respond
        within 5 business days.
      </p>
      <p>
        If you need content in an alternative format, contact us and we will make reasonable efforts to accommodate
        your request.
      </p>

      <h2>7. Formal Complaints</h2>
      <p>If you are not satisfied with our response, you may contact:</p>
      <ul>
        <li><strong>United States:</strong> U.S. Department of Justice Civil Rights Division — ada.gov</li>
        <li><strong>European Union:</strong> Your national accessibility enforcement authority under the Web Accessibility Directive</li>
        <li><strong>United Kingdom:</strong> Equality and Human Rights Commission — equalityhumanrights.com</li>
      </ul>
    </LegalLayout>
    </>
  );
}
