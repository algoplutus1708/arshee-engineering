import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import { ScrollToTop } from "@/components/common/ScrollToTop";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import Clientele from "./pages/Clientele";
import TechnicalPartners from "./pages/TechnicalPartners";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route
            path="/services/testing-and-commissioning"
            element={<ServiceDetail forcedSlug="testing-and-commissioning" />}
          />
          <Route
            path="/services/validation-and-homologation"
            element={<ServiceDetail forcedSlug="validation-and-homologation" />}
          />
          <Route
            path="/services/technical-documentation"
            element={<ServiceDetail forcedSlug="technical-documentation" />}
          />
          <Route
            path="/services/retrofitment-and-maintenance"
            element={<ServiceDetail forcedSlug="retrofitment-and-maintenance" />}
          />
          <Route
            path="/services/consulting"
            element={<ServiceDetail forcedSlug="consulting" />}
          />
          <Route
            path="/services/rental-services"
            element={<ServiceDetail forcedSlug="rental-services" />}
          />
          {/* Backwards-compatible route aliases */}
          <Route
            path="/services/testing-commissioning"
            element={<Navigate to="/services/testing-and-commissioning" replace />}
          />
          <Route
            path="/services/validation-homologation"
            element={<Navigate to="/services/validation-and-homologation" replace />}
          />
          <Route
            path="/services/retrofitment-maintenance"
            element={<Navigate to="/services/retrofitment-and-maintenance" replace />}
          />
          <Route
            path="/services/rental"
            element={<Navigate to="/services/rental-services" replace />}
          />
          <Route path="/services/:slug" element={<ServiceDetail />} />
          <Route path="/clientele" element={<Clientele />} />
          <Route path="/technical-partners" element={<TechnicalPartners />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
