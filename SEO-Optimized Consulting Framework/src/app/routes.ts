import { lazy } from "react";
import { createBrowserRouter } from "react-router";

// Each import() becomes a separate JS chunk — only downloaded when the user
// navigates to that route, keeping the initial home-page bundle small.
const Home                = lazy(() => import("./pages/Home").then(m => ({ default: m.Home })));
const Services            = lazy(() => import("./pages/Services").then(m => ({ default: m.Services })));
const Projects            = lazy(() => import("./pages/Projects").then(m => ({ default: m.Projects })));
const CaseStudyDrone      = lazy(() => import("./pages/CaseStudyDrone").then(m => ({ default: m.CaseStudyDrone })));
const CaseStudyNLP        = lazy(() => import("./pages/CaseStudyNLP").then(m => ({ default: m.CaseStudyNLP })));
const CaseStudySegmentation = lazy(() => import("./pages/CaseStudySegmentation").then(m => ({ default: m.CaseStudySegmentation })));
const About               = lazy(() => import("./pages/About").then(m => ({ default: m.About })));
const Contact             = lazy(() => import("./pages/Contact").then(m => ({ default: m.Contact })));
const NotFound            = lazy(() => import("./pages/NotFound").then(m => ({ default: m.NotFound })));
const Legal               = lazy(() => import("./pages/Legal").then(m => ({ default: m.Legal })));
const PrivacyPolicy       = lazy(() => import("./pages/legal/PrivacyPolicy").then(m => ({ default: m.PrivacyPolicy })));
const TermsOfService      = lazy(() => import("./pages/legal/TermsOfService").then(m => ({ default: m.TermsOfService })));
const CookiePolicy        = lazy(() => import("./pages/legal/CookiePolicy").then(m => ({ default: m.CookiePolicy })));
const AiUsePolicy         = lazy(() => import("./pages/legal/AiUsePolicy").then(m => ({ default: m.AiUsePolicy })));
const SecurityStatement   = lazy(() => import("./pages/legal/SecurityStatement").then(m => ({ default: m.SecurityStatement })));
const AccessibilityStatement = lazy(() => import("./pages/legal/AccessibilityStatement").then(m => ({ default: m.AccessibilityStatement })));
const Disclaimers         = lazy(() => import("./pages/legal/Disclaimers").then(m => ({ default: m.Disclaimers })));

export const router = createBrowserRouter([
  { path: "/",                               Component: Home },
  { path: "/services",                       Component: Services },
  { path: "/projects",                       Component: Projects },
  { path: "/case-study/drone-classification",Component: CaseStudyDrone },
  { path: "/case-study/nlp-sql",             Component: CaseStudyNLP },
  { path: "/case-study/customer-segmentation", Component: CaseStudySegmentation },
  { path: "/about",                          Component: About },
  { path: "/contact",                        Component: Contact },
  { path: "/legal",                          Component: Legal },
  { path: "/legal/privacy",                  Component: PrivacyPolicy },
  { path: "/legal/terms",                    Component: TermsOfService },
  { path: "/legal/cookies",                  Component: CookiePolicy },
  { path: "/legal/ai-policy",               Component: AiUsePolicy },
  { path: "/legal/security",                 Component: SecurityStatement },
  { path: "/legal/accessibility",            Component: AccessibilityStatement },
  { path: "/legal/disclaimers",              Component: Disclaimers },
  { path: "*",                               Component: NotFound },
]);
