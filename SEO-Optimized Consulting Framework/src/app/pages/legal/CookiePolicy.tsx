import { LegalLayout } from "../../components/LegalLayout";
import { Helmet } from "react-helmet-async";

export function CookiePolicy() {
  return (
    <>
      <Helmet>
        <title>Cookie Policy | Pantera Claw</title>
        <meta name="description" content="Learn how Pantera Claw uses cookies and similar tracking technologies on our website." />
      </Helmet>
      <LegalLayout title="Cookie Policy" lastUpdated="April 9, 2026">
      <h2>1. What Are Cookies?</h2>
      <p>
        Cookies are small text files placed on your device when you visit a website. They allow the site to recognize
        your device and remember information about your visit. We also use similar technologies including local storage,
        pixels, and analytics scripts.
      </p>

      <h2>2. Cookies We Use</h2>

      <h3>Strictly Necessary</h3>
      <p>Essential for the website to function. Cannot be disabled without breaking core functionality.</p>
      <table>
        <thead><tr><th>Purpose</th><th>Duration</th></tr></thead>
        <tbody>
          <tr><td>Session management and security (CSRF protection)</td><td>Session</td></tr>
        </tbody>
      </table>

      <h3>Analytics and Performance</h3>
      <p>Help us understand how visitors use the site. Data is aggregated and does not identify individuals.</p>
      <table>
        <thead><tr><th>Provider</th><th>Purpose</th><th>Duration</th></tr></thead>
        <tbody>
          <tr><td>Google Analytics (_ga, _gid)</td><td>Page views, sessions, traffic sources</td><td>Up to 2 years</td></tr>
        </tbody>
      </table>
      <p>
        Opt out via the{" "}
        <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">
          Google Analytics Opt-out Browser Add-on
        </a>.
      </p>

      <h3>Preference / Functional</h3>
      <p>Remember your settings and preferences. Duration: up to 1 year.</p>

      <h3>Marketing and Advertising</h3>
      <p>We do not currently use marketing cookies or retargeting pixels. This Policy will be updated if that changes.</p>

      <h2>3. Third-Party Cookies</h2>
      <p>Some cookies are set by third-party services we use. We do not control these. Review their policies:</p>
      <table>
        <thead><tr><th>Third Party</th><th>Purpose</th></tr></thead>
        <tbody>
          <tr><td>Google Analytics</td><td>Website analytics</td></tr>
        </tbody>
      </table>

      <h2>4. Your Cookie Choices</h2>

      <h3>EEA/UK Visitors</h3>
      <p>We will ask for your consent before placing non-essential cookies via our cookie consent banner.</p>

      <h3>Browser Controls</h3>
      <p>Manage or delete cookies through your browser settings:</p>
      <ul>
        <li><strong>Chrome:</strong> Settings &gt; Privacy and Security &gt; Cookies</li>
        <li><strong>Firefox:</strong> Settings &gt; Privacy &amp; Security &gt; Cookies</li>
        <li><strong>Safari:</strong> Preferences &gt; Privacy &gt; Manage Website Data</li>
        <li><strong>Edge:</strong> Settings &gt; Cookies and site permissions</li>
      </ul>
      <p>Note: disabling cookies may affect website functionality.</p>

      <h3>Do Not Track</h3>
      <p>Our website does not currently respond to browser DNT signals in a standardized way, as no universal standard exists. We will update this position if one is adopted.</p>

      <h2>5. Updates to This Policy</h2>
      <p>We may update this Policy as our use of tracking technologies changes. Material updates will be reflected by the "Last Updated" date above.</p>

      <h2>6. Contact</h2>
      <p>
        Questions about our use of cookies: <strong>info@panteraclaw.com</strong>
      </p>
    </LegalLayout>
    </>
  );
}
