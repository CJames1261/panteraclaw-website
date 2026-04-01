{
"owner": "CJames1261",
"repo": "panteraclaw-website",
"branch": "main",
"message": "Initial commit: PanteraClaw.com consulting website\n\nComplete React + TypeScript + Tailwind CSS website featuring:\n- Homepage with service offerings and case study previews\n- Services page with 4 modular AI consulting services\n- Case studies: Drone Classification (98% accuracy) and NLP-to-SQL\n- About page with leadership, credentials, and Utah tech focus\n- Contact page with form and business information\n- Schema.org structured data markup throughout\n- SEO/GEO optimization for Utah/Silicon Slopes\n- Responsive design with mobile navigation",
"files": [
{
"path": "package.json",
"content": "{\n \"name\": \"panteraclaw-website\",\n \"private\": true,\n \"version\": \"1.0.0\",\n \"type\": \"module\",\n \"scripts\": {\n \"dev\": \"vite\",\n \"build\": \"vite build\",\n \"preview\": \"vite preview\"\n },\n \"dependencies\": {\n \"lucide-react\": \"^0.487.0\",\n \"react\": \"^18.3.1\",\n \"react-dom\": \"^18.3.1\",\n \"react-router\": \"^7.13.0\"\n },\n \"devDependencies\": {\n \"@tailwindcss/vite\": \"^4.1.12\",\n \"@types/react\": \"^18.3.0\",\n \"@types/react-dom\": \"^18.3.0\",\n \"@vitejs/plugin-react\": \"^4.7.0\",\n \"tailwindcss\": \"^4.1.12\",\n \"typescript\": \"^5.5.0\",\n \"vite\": \"^6.3.5\"\n }\n}"
},
{
"path": "vite.config.ts",
"content": "import { defineConfig } from 'vite'\nimport path from 'path'\nimport tailwindcss from '@tailwindcss/vite'\nimport react from '@vitejs/plugin-react'\n\nexport default defineConfig({\n plugins: [\n react(),\n tailwindcss(),\n ],\n resolve: {\n alias: {\n '@': path.resolve(__dirname, './src'),\n },\n },\n assetsInclude: ['**/*.svg', '**/*.csv'],\n})"
},
{
"path": "tsconfig.json",
"content": "{\n \"compilerOptions\": {\n \"target\": \"ES2020\",\n \"useDefineForClassFields\": true,\n \"lib\": [\"ES2020\", \"DOM\", \"DOM.Iterable\"],\n \"module\": \"ESNext\",\n \"skipLibCheck\": true,\n \"moduleResolution\": \"bundler\",\n \"allowImportingTsExtensions\": true,\n \"resolveJsonModule\": true,\n \"isolatedModules\": true,\n \"noEmit\": true,\n \"jsx\": \"react-jsx\",\n \"strict\": true,\n \"noUnusedLocals\": false,\n \"noUnusedParameters\": false,\n \"noFallthroughCasesInSwitch\": true,\n \"paths\": {\n \"@/*\": [\"./src/*\"]\n }\n },\n \"include\": [\"src\"]\n}"
},
{
"path": "index.html",
"content": "<!DOCTYPE html>\n<html lang=\"en\">\n <head>\n <meta charset=\"UTF-8\" />\n <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n <meta name=\"description\" content=\"Pantera Claw - Agentic AI Systems Built with Mission-Critical Precision. Specializing in LangGraph orchestration, causal inference, and secure DoD-compliant data pipelines.\" />\n <meta name=\"keywords\" content=\"AI Consulting, Agentic AI, LLM Orchestration, LangGraph, Causal Inference, PySpark, Databricks, Utah AI, Silicon Slopes, Machine Learning Consulting\" />\n <link rel=\"canonical\" href=\"https://panteraclaw.com\" />\n <title>Pantera Claw | Agentic AI Consulting - Utah AI & ML Experts</title>\n </head>\n <body>\n <div id=\"root\"></div>\n <script type=\"module\" src=\"/src/main.tsx\"></script>\n </body>\n</html>"
},
{
"path": "src/main.tsx",
"content": "import React from 'react'\nimport ReactDOM from 'react-dom/client'\nimport App from './app/App'\nimport './styles/index.css'\n\nReactDOM.createRoot(document.getElementById('root')!).render(\n <React.StrictMode>\n <App />\n </React.StrictMode>,\n)"
},
{
"path": "src/styles/index.css",
"content": "@import './fonts.css';\n@import './tailwind.css';\n@import './theme.css';"
},
{
"path": "src/styles/fonts.css",
"content": ""
},
{
"path": "src/styles/tailwind.css",
"content": "@import 'tailwindcss' source(none);\n@source '../**/*.{js,ts,jsx,tsx}';\n\n@import 'tw-animate-css';"
},
{
"path": "src/app/App.tsx",
"content": "import { RouterProvider } from \"react-router\";\nimport { router } from \"./routes\";\n\nexport default function App() {\n return <RouterProvider router={router} />;\n}"
},
{
"path": "src/app/routes.ts",
"content": "import { createBrowserRouter } from \"react-router\";\nimport { Home } from \"./pages/Home\";\nimport { Services } from \"./pages/Services\";\nimport { CaseStudyDrone } from \"./pages/CaseStudyDrone\";\nimport { CaseStudyNLP } from \"./pages/CaseStudyNLP\";\nimport { About } from \"./pages/About\";\nimport { Contact } from \"./pages/Contact\";\nimport { NotFound } from \"./pages/NotFound\";\n\nexport const router = createBrowserRouter([\n {\n path: \"/\",\n Component: Home,\n },\n {\n path: \"/services\",\n Component: Services,\n },\n {\n path: \"/case-study/drone-classification\",\n Component: CaseStudyDrone,\n },\n {\n path: \"/case-study/nlp-sql\",\n Component: CaseStudyNLP,\n },\n {\n path: \"/about\",\n Component: About,\n },\n {\n path: \"/contact\",\n Component: Contact,\n },\n {\n path: \"*\",\n Component: NotFound,\n },\n]);"
},
{
"path": "README.md",
"content": "# PanteraClaw.com\n\nAI/ML Consulting Website for Pantera Claw (Agentic AI LLC)\n\n## Overview\n\nA high-converting, SEO/GEO-optimized consulting website showcasing AI/ML expertise including:\n- **Agentic Workflow Design** - LangGraph orchestration and multi-agent architectures\n- **High-Precision ML** - 98% accuracy drone classification, computer vision\n- **Strategic Data Engineering** - DoD-compliant PySpark/Databricks pipelines\n- **Causal Insight & Policy** - Causal inference modeling for strategic decisions\n\n## Tech Stack\n\n- React 18 + TypeScript\n- React Router v7 (Data mode)\n- Tailwind CSS v4\n- Vite\n- Lucide React icons\n- Schema.org structured data\n\n## Features\n\n- Multi-page responsive design\n- Schema.org JSON-LD markup for SEO\n- Utah/Silicon Slopes local SEO targeting\n- Mobile-first responsive navigation\n- Case studies with technical depth\n- Contact form\n- Professional service architecture\n\n## Getting Started\n\n```bash\nnpm install\nnpm run dev\n```\n\n## Pages\n\n- `/` - Homepage with hero, services overview, case study previews\n- `/services` - Detailed service modules with capabilities\n- `/case-study/drone-classification` - 98% accuracy drone audio classification\n- `/case-study/nlp-sql` - NLP-to-SQL enterprise application\n- `/about` - Leadership, credentials, Utah tech ecosystem\n- `/contact` - Contact form and business information\n\n## License\n\nAll rights reserved - Agentic AI LLC"
}
]
}
[
{
"type": "text",
"text": {
"ref": "refs/heads/main",
"url": "https://api.github.com/repos/CJames1261/panteraclaw-website/git/refs/heads/main",
"object": {
"type": "commit",
"sha": "a54ae84b5cb31aa699c645e45469a0234a844b94",
"url": "https://api.github.com/repos/CJames1261/panteraclaw-website/git/commits/a54ae84b5cb31aa699c645e45469a0234a844b94"
},
"node_id": "REF_kwDOR3HvZ69yZWZzL2hlYWRzL21haW4"
}
}
]