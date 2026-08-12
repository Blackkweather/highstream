import { Button } from "@/components/ui/button";
import { MessageCircle, Play, ChevronDown } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { FloatingSocialButtons } from "./FloatingSocialButtons";
import { useEffect, useState } from "react";
import { openWhatsApp } from "@/services/socialService";

export const HeroSection = () => {
  const { t } = useLanguage();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 640);
    checkScreen();
    window.addEventListener('resize', checkScreen);
    return () => window.removeEventListener('resize', checkScreen);
  }, []);

  return (
    <section className="hero-viewport relative flex w-full items-center justify-center overflow-hidden">
      {/* Layered cinematic background */}
      <div
        className="absolute inset-0 opacity-[0.18] bg-cover bg-center"
        style={{ backgroundImage: `url('${isMobile ? '/mobile-background.webp' : '/background.webp'}')` }}
      />
      <div className="absolute inset-0 bg-hero-gradient" />
      <div className="hs-aurora" />
      <div className="hs-grid" />
      {/* bottom fade into the next section */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" />

      <div className="container relative z-10 mx-auto px-4 lg:px-8">
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          {/* Live eyebrow */}
          <div
            className="glass mb-7 flex items-center gap-2.5 rounded-full px-4 py-1.5 text-xs font-medium text-foreground/90"
            data-aos="fade-down"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" style={{ animation: 'hs-pulse-glow 2s infinite' }} />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            35K+ {t('infrastructure.channels')} · 4K HDR
          </div>

          {/* Headline */}
          <h1
            className="font-display text-3xl font-bold leading-[1.1] [overflow-wrap:anywhere] sm:text-4xl sm:leading-[1.05] md:text-6xl lg:text-7xl"
            data-aos="fade-up"
          >
            <span className="text-foreground">{t('hero.title')}</span>
          </h1>

          {/* Subtitle */}
          <p
            className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:mt-6 sm:text-lg md:text-xl"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            {t('hero.subtitle')}
          </p>

          {/* CTAs */}
          <div
            className="mt-10 flex w-full max-w-sm flex-col items-stretch gap-3 sm:w-auto sm:max-w-none sm:flex-row sm:items-center sm:gap-4"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <Button
              size="lg"
              className="btn-sheen h-14 w-full rounded-full bg-electric px-8 text-base font-semibold text-primary-foreground shadow-glow-md transition-all duration-300 hover:scale-[1.03] hover:shadow-glow-lg sm:w-auto"
              onClick={() => {
                const pricingSection = document.getElementById('pricing-section');
                if (pricingSection) pricingSection.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <Play className="mr-2 h-5 w-5 fill-current" />
              {t('hero.startFrom')}
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="glass h-14 w-full rounded-full border-primary/30 px-8 text-base font-semibold text-foreground transition-all duration-300 hover:scale-[1.03] hover:border-primary/60 hover:bg-primary/10 sm:w-auto"
              onClick={openWhatsApp}
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              {t('hero.whatsapp')}
            </Button>
          </div>

          {/* The 99.9% / 35K+ / 4K / 24/7 stat row that used to sit here is the
              same four figures InfrastructureSection already renders as its
              metrics bar. Repeating them in the hero pushed the CTAs toward the
              fold on phones and spent the page's strongest moment on a claim
              that gets made properly further down. */}
        </div>
      </div>

      {/* scroll cue */}
      <div className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-muted-foreground/70" style={{ animation: 'float 2.6s ease-in-out infinite' }}>
        <ChevronDown className="h-6 w-6" />
      </div>

      <FloatingSocialButtons />
    </section>
  );
};
