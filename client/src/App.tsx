import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import ErrorBoundary from "@/components/ui/error-boundary";
import Home from "@/pages/home";
import FAQPage from "@/pages/faq";
import { lazy, Suspense } from "react";

// Lazy load heavy pages
const AboutPage = lazy(() => import("@/pages/about"));
const AdminPage = lazy(() => import("@/pages/admin"));

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/faq" component={FAQPage} />
      <Route path="/about">
        <Suspense fallback={
          <div className="min-h-screen bg-slate-900 flex items-center justify-center">
            <div className="text-white">Loading...</div>
          </div>
        }>
          <AboutPage />
        </Suspense>
      </Route>
      <Route path="/admin">
        <Suspense fallback={
          <div className="min-h-screen bg-slate-900 flex items-center justify-center">
            <div className="text-white">Loading...</div>
          </div>
        }>
          <AdminPage />
        </Suspense>
      </Route>
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </QueryClientProvider>
    </ErrorBoundary>
  );
}

export default App;
