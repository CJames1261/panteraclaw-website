import { createBrowserRouter } from "react-router";
import { Home } from "./pages/Home";
import { Services } from "./pages/Services";
import { Projects } from "./pages/Projects";
import { CaseStudyDrone } from "./pages/CaseStudyDrone";
import { CaseStudyNLP } from "./pages/CaseStudyNLP";
import { CaseStudySegmentation } from "./pages/CaseStudySegmentation";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { NotFound } from "./pages/NotFound";
import { Legal } from "./pages/Legal";
import { PrivacyPolicy } from "./pages/legal/PrivacyPolicy";
import { TermsOfService } from "./pages/legal/TermsOfService";
import { CookiePolicy } from "./pages/legal/CookiePolicy";
import { AiUsePolicy } from "./pages/legal/AiUsePolicy";
import { SecurityStatement } from "./pages/legal/SecurityStatement";
import { AccessibilityStatement } from "./pages/legal/AccessibilityStatement";
import { Disclaimers } from "./pages/legal/Disclaimers";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/services",
    Component: Services,
  },
  {
    path: "/projects",
    Component: Projects,
  },
  {
    path: "/case-study/drone-classification",
    Component: CaseStudyDrone,
  },
  {
    path: "/case-study/nlp-sql",
    Component: CaseStudyNLP,
  },
  {
    path: "/case-study/customer-segmentation",
    Component: CaseStudySegmentation,
  },
  {
    path: "/about",
    Component: About,
  },
  {
    path: "/contact",
    Component: Contact,
  },
  // Legal
  {
    path: "/legal",
    Component: Legal,
  },
  {
    path: "/legal/privacy",
    Component: PrivacyPolicy,
  },
  {
    path: "/legal/terms",
    Component: TermsOfService,
  },
  {
    path: "/legal/cookies",
    Component: CookiePolicy,
  },
  {
    path: "/legal/ai-policy",
    Component: AiUsePolicy,
  },
  {
    path: "/legal/security",
    Component: SecurityStatement,
  },
  {
    path: "/legal/accessibility",
    Component: AccessibilityStatement,
  },
  {
    path: "/legal/disclaimers",
    Component: Disclaimers,
  },
  {
    path: "*",
    Component: NotFound,
  },
]);
