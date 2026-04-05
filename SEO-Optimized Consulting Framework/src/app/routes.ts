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
  {
    path: "*",
    Component: NotFound,
  },
]);
