// App.tsx
import { useLocation } from "react-router-dom";
import { Suspense } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import Layout from "./components/layout/Layout";
import { LoadingSpinner } from "./components/ui/loading";
import React from "react";

// Lazy load pages
const Home = React.lazy(() => import("./pages/Home"));
const Management = React.lazy(() => import("./pages/Management"));
const Admission = React.lazy(() => import("./pages/Admission"));
const Events = React.lazy(() => import("./pages/Events"));
const Contact = React.lazy(() => import("./pages/Contact"));
const NotFound = React.lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const App = () => {
  const location = useLocation();

  // ⚠️ Prevent React rendering anything under /admin
  if (location.pathname.startsWith("/admin")) {
    return null;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <Layout>
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/management" element={<Management />} />
              <Route path="/admission" element={<Admission />} />
              <Route path="/events" element={<Events />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </Layout>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
