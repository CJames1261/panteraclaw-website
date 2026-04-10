import { LegalLayout } from "../../components/LegalLayout";
import { Helmet } from "react-helmet-async";

export function Disclaimers() {
  return (
    <>
      <Helmet>
        <title>Disclaimers | Pantera Claw</title>
        <meta name="description" content="Important disclaimers regarding Pantera Claw's website content, data visualizations, AI outputs, and professional services." />
      </Helmet>
      <LegalLayout title="Disclaimers" lastUpdated="April 9, 2026">
      <h2>1. General Website Disclaimer</h2>
      <p>
        The information provided on this website is for general informational and marketing purposes only. Nothing
        on this site constitutes professional, legal, financial, or technical advice. Viewing or using this website
        does not create a client, contractor, or advisory relationship between you and PanteraClaw.
      </p>
      <p>
        While we make reasonable efforts to keep information accurate and up to date, we make no representations or
        warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or
        availability of any information on this website. Any reliance you place on such information is strictly at
        your own risk.
      </p>

      <h2>2. Data Disclaimer</h2>
      <p>
        All data, metrics, statistics, and visualizations presented on this website — including dashboards, charts,
        customer segmentation models, pipeline diagrams, and analytical outputs — are provided for{" "}
        <strong>illustrative and demonstration purposes only</strong>.
      </p>
      <p>Unless explicitly stated otherwise:</p>
      <ul>
        <li>Data shown in interactive visualizations is <strong>synthetically generated</strong> and does not represent any real individuals, organizations, transactions, or business outcomes.</li>
        <li>All figures are approximations and are not intended to reflect actual market conditions, business performance, or predictive accuracy achievable in any specific implementation.</li>
        <li>PanteraClaw makes no representation or warranty regarding the accuracy, completeness, or fitness for a particular purpose of any data displayed on this site.</li>
      </ul>
      <p>
        <strong>Data provided "as is."</strong> Neither PanteraClaw nor its affiliates warrant that any data, model
        output, or analytical result shown is free from human error, machine error, omission, or delay. Any use of
        data shown on this site is at your sole risk.
      </p>

      <h2>3. AI and Results Disclaimer</h2>
      <p>
        Artificial intelligence and machine learning systems are probabilistic by nature. Results, accuracy, and
        performance vary based on data quality, volume, infrastructure, business context, and many other factors
        outside our control.
      </p>
      <p>
        <strong>No guarantee of results.</strong> Case studies, sample outputs, and projected outcomes shown on this
        website reflect specific historical engagements or hypothetical scenarios. They do not guarantee that similar
        results will be achieved in any other implementation. Past performance of an AI system does not guarantee
        future performance.
      </p>
      <p>
        <strong>Not a substitute for human judgment.</strong> AI and ML outputs should be reviewed and validated by
        qualified professionals before being used to make business, financial, medical, legal, or other consequential
        decisions. PanteraClaw is not liable for decisions made based on AI-generated outputs without appropriate
        human oversight.
      </p>
      <p>
        <strong>Third-party models.</strong> Some services involve integration with third-party AI platforms.
        PanteraClaw does not control the availability, accuracy, or output of third-party systems and is not
        responsible for their performance or changes to their terms of service.
      </p>

      <h2>4. Professional Services Disclaimer</h2>
      <p>
        While PanteraClaw strives to deliver high-quality consulting and engineering services, we cannot guarantee
        specific business outcomes. Success depends on variables including the quality and completeness of data
        provided by the client, organizational readiness, market conditions, and timely client cooperation.
      </p>
      <p>
        Engagement timelines and deliverables are estimates. Specific outcomes or performance improvements referenced
        in any proposal or case study are illustrative and not contractual commitments unless explicitly stated in a
        signed agreement.
      </p>

      <h2>5. Copyright Notice</h2>
      <p>
        All content on this website — including text, graphics, logos, images, visualizations, code examples, and
        software — is the property of PanteraClaw and is protected by applicable copyright and intellectual property
        laws.
      </p>
      <p>
        You may not reproduce, distribute, display, modify, or create derivative works from any materials on this
        site without the express prior written permission of PanteraClaw. You may share brief excerpts with proper
        attribution and a link back to the original source. Commercial use, republication, or redistribution without
        permission is prohibited.
      </p>
      <p>&copy; {new Date().getFullYear()} PanteraClaw (Agentic AI LLC). All rights reserved.</p>

      <h2>6. No Third-Party Endorsement</h2>
      <p>
        References to third-party companies, tools, platforms, or technologies on this website are for informational
        purposes only and do not constitute an endorsement, sponsorship, or recommendation. PanteraClaw is not
        affiliated with, sponsored by, or officially connected to any third-party products or services mentioned
        unless explicitly stated.
      </p>

      <h2>7. Not a Registered Financial Advisor or Broker-Dealer</h2>
      <p>
        PanteraClaw provides consulting services in data engineering, artificial intelligence, analytics, and
        technology development. We are <strong>not</strong> registered broker-dealers, investment advisors, or
        financial services providers. We do not provide investment advice, offer or recommend securities, or
        facilitate capital raising or fundraising activities.
      </p>
      <p>
        Nothing on this website or in any deliverable produced by PanteraClaw constitutes financial, investment,
        or securities advice. Any data outputs, predictive models, or analytical tools we build are for operational
        and informational purposes only. Clients and users are solely responsible for any financial decisions made
        using outputs from PanteraClaw's services, and should consult a licensed financial professional before
        making investment or capital allocation decisions.
      </p>

      <h2>8. Trademark Notice</h2>
      <p>
        All trademarks, logos, service marks, and trade names displayed on this website are the property of their
        respective owners. References to third-party company names, products, or technologies (including but not
        limited to OpenAI, Anthropic, Amazon Web Services, Google, and Microsoft) are for identification and
        informational purposes only. Such references do not imply any affiliation with, endorsement by, or
        sponsorship from the trademark owner. PanteraClaw's own name, logo, and marks are the property of
        Agentic AI LLC.
      </p>

      <h2>9. Contact</h2>
      <p>
        For questions about these disclaimers or to request permissions for content use:
        <br />
        <strong>Email:</strong> info@panteraclaw.com
      </p>
    </LegalLayout>
    </>
  );
}
