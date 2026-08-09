import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingSocialButtons } from "@/components/FloatingSocialButtons";
import { Button } from "@/components/ui/button";
import { useSEO } from "@/hooks/useSEO";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();
  useSEO({ title: "Page Not Found", noindex: true });

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="relative flex flex-1 items-center justify-center overflow-hidden px-4 py-24">
        <div className="hs-aurora" />
        <div className="hs-grid" />
        <div className="glass relative z-10 flex max-w-lg flex-col items-center rounded-3xl px-8 py-14 text-center">
          <span className="font-display text-electric text-7xl font-bold md:text-8xl">404</span>
          <h1 className="font-display mt-4 text-2xl font-bold text-foreground md:text-3xl">
            This channel doesn't exist
          </h1>
          <p className="mt-3 text-muted-foreground">
            The page you're looking for isn't here. It may have moved, or the link might be broken.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" className="btn-sheen rounded-full bg-electric text-primary-foreground shadow-glow-sm">
              <Link to="/">
                <Home className="mr-2 h-4 w-4" />
                Back to Home
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="glass rounded-full border-primary/30">
              <Link to="/contact">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Contact Support
              </Link>
            </Button>
          </div>
        </div>
      </main>
      <FloatingSocialButtons />
      <Footer />
    </div>
  );
};

export default NotFound;
