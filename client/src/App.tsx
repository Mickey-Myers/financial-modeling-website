import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import ErrorBoundary from "@/components/ui/error-boundary";
import Home from "@/pages/home";
import FAQPage from "@/pages/faq";
import AboutPage from "@/pages/about";
import AdminPage from "@/pages/admin";
import Navigation from '@/components/ui/navigation';
import ScrollProgress from '@/components/ui/scroll-progress';
import HeroSection from '@/components/sections/hero';
import ServicesSection from '@/components/sections/services';
import TrackRecordSection from '@/components/sections/track-record';
import FeaturesSection from '@/components/sections/features';
import TestimonialsSection from '@/components/sections/testimonials';
import ProcessSection from '@/components/sections/process';
import ContactSection from '@/components/sections/contact';

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/faq" component={FAQPage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/admin" component={AdminPage} />
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
