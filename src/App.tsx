import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider, useLanguage } from "@/contexts/LanguageContext";
import Index from "./pages/Index";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import Reseller from "./pages/Reseller";
import Blog from "./pages/Blog";
import Apps from "./pages/Apps";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import BlogPost from "./pages/BlogPost";
import Installation from "./pages/Installation";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfServices";
import IntroOverlay from "@/components/IntroOverlay";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const queryClient = new QueryClient();



const AppContent = () =>  {
    const { dir } = useLanguage();
      useEffect(() => {
    AOS.init({
      duration: 1000, // durée de l'animation en ms
      easing: 'ease-in-out', // type d'easing
      once: true, // animation une seule fois
      mirror: false, // ne pas répéter en scrollant vers le haut
    });
  }, []);

  return (
    <div dir={dir} className={`min-h-screen bg-background ${dir === 'rtl' ? 'font-arabic' : ''}`}>
      <IntroOverlay />
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/reseller" element={<Reseller />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/apps" element={<Apps />} />
          <Route path="/about" element={<About />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/installation" element={<Installation />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

// Composant principal
const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <LanguageProvider>
          <AppContent />
        </LanguageProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
};
  



export default App;
