import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider, useLanguage } from "@/contexts/LanguageContext";
import IntroOverlay from "@/components/IntroOverlay";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { useEffect, lazy, Suspense } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

// Route-level code splitting: only the page the visitor requests is downloaded,
// instead of one ~650KB bundle containing every page up front.
const Index = lazy(() => import("./pages/Index"));
const FAQ = lazy(() => import("./pages/FAQ"));
const Contact = lazy(() => import("./pages/Contact"));
const Reseller = lazy(() => import("./pages/Reseller"));
const Blog = lazy(() => import("./pages/Blog"));
const Apps = lazy(() => import("./pages/Apps"));
const NotFound = lazy(() => import("./pages/NotFound"));
const About = lazy(() => import("./pages/About"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const Installation = lazy(() => import("./pages/Installation"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const TermsOfService = lazy(() => import("./pages/TermsOfServices"));

const queryClient = new QueryClient();

const RouteFallback = () => (
  <div className="flex min-h-screen items-center justify-center bg-background">
    <div className="h-10 w-10 animate-spin rounded-full border-2 border-primary/30 border-t-primary" role="status" aria-label="Loading" />
  </div>
);



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
        <ErrorBoundary>
          <Suspense fallback={<RouteFallback />}>
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
          </Suspense>
        </ErrorBoundary>
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
