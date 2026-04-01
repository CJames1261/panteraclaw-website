import { createBrowserRouter } from "react-router";
import { Home } from "./pages/Home";
import { Services } from "./pages/Services";
import { CaseStudyDrone } from "./pages/CaseStudyDrone";
import { CaseStudyNLP } from "./pages/CaseStudyNLP";
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
    path: "/case-study/drone-classification",
    Component: CaseStudyDrone,
  },
  {
    path: "/case-study/nlp-sql",
    Component: CaseStudyNLP,
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