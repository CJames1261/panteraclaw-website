import { Suspense } from "react";
import { RouterProvider } from "react-router";
import { HelmetProvider } from "react-helmet-async";
import { router } from "./routes";

export default function App() {
  return (
    <HelmetProvider>
      <Suspense fallback={
        <div className="min-h-screen bg-black flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-yellow-400 border-t-transparent rounded-full animate-spin" />
        </div>
      }>
        <RouterProvider router={router} />
      </Suspense>
    </HelmetProvider>
  );
}
