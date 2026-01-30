import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import Complaints from "./pages/Complaints";
import Services from "./pages/Services";
import NotFound from "./pages/NotFound";
import Blog from "./pages/Blog";
// Service Pages
import CashFinancing from "./pages/services/CashFinancing";
import RealEstateDevelopment from "./pages/services/RealEstateDevelopment";
import RealEstateInvestment from "./pages/services/RealEstateInvestment";
import ReadyProperties from "./pages/services/ReadyProperties";
import ArchitecturalDesign from "./pages/services/ArchitecturalDesign";
import ExclusiveMarketing from "./pages/services/ExclusiveMarketing";
// Legal Pages
import TermsAndConditions from "./pages/legal/TermsAndConditions";
import PrivacyPolicy from "./pages/legal/PrivacyPolicy";
import Disclaimer from "./pages/legal/Disclaimer";
import Compliance from "./pages/legal/Compliance";
import CookiesPolicy from "./pages/legal/CookiesPolicy";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/complaints" element={<Complaints />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blog" element={<Blog />} />
          {/* Service Routes */}
          <Route path="/services/cash-financing" element={<CashFinancing />} />
          <Route path="/services/development" element={<RealEstateDevelopment />} />
          <Route path="/services/investment" element={<RealEstateInvestment />} />
          <Route path="/services/ready-properties" element={<ReadyProperties />} />
          <Route path="/services/design" element={<ArchitecturalDesign />} />
          <Route path="/services/marketing" element={<ExclusiveMarketing />} />
          {/* Legal Routes */}
          <Route path="/legal/terms" element={<TermsAndConditions />} />
          <Route path="/legal/privacy" element={<PrivacyPolicy />} />
          <Route path="/legal/disclaimer" element={<Disclaimer />} />
          <Route path="/legal/compliance" element={<Compliance />} />
          <Route path="/legal/cookies" element={<CookiesPolicy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
