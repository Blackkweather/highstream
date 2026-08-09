import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Globe, ChevronDown } from "lucide-react";
import { useLanguage, Language } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { openWhatsApp } from "@/services/socialService";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const languages = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'it', name: 'Italiano', flag: '🇮🇹' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'ar', name: 'العربية', flag: '🇸🇦' },
];

const getNavigationItems = (t: (key: string) => string) => [
  { href: '/', label: t('nav.home') },
  { href: '/apps', label: t('nav.apps') },
  { href: '/blog', label: t('nav.blog') },
  { href: '/reseller', label: t('nav.reseller') },
  { href: '/faq', label: t('nav.faq') },
  { href: '/contact', label: t('nav.contact') },
  { href: '/installation', label: t('nav.installation') },
];

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const currentLanguage = languages.find(lang => lang.code === language) || languages[0];
  const navigationItems = getNavigationItems(t);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'glass shadow-[0_8px_40px_-12px_rgba(10,162,255,0.35)]'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      {/* electric hairline at the base */}
      <div className={`absolute inset-x-0 bottom-0 h-px transition-opacity duration-300 ${scrolled ? 'opacity-100' : 'opacity-0'}`}
           style={{ background: 'linear-gradient(90deg,transparent,hsl(204 100% 55% / 0.7),transparent)' }} />

      <div className="container mx-auto px-4 lg:px-8">
        <div className={`flex items-center justify-between transition-all duration-300 ${scrolled ? 'h-16' : 'h-20'}`}>
          {/* Logo lockup: H mark + chrome wordmark */}
          <Link to="/" className="group flex items-center gap-3">
            <img
              src="/highstream-mark.png"
              alt="HighStream"
              width={44}
              height={44}
              className="h-10 w-auto drop-shadow-[0_0_14px_rgba(10,162,255,0.55)] transition-transform duration-300 group-hover:scale-105 md:h-11"
            />
            <span className="font-display text-xl font-bold uppercase tracking-[0.18em] text-chrome md:text-2xl">
              HighStream
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-7 lg:flex">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="group relative py-1 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.label}
                <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-electric transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden items-center gap-3 lg:flex">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="h-11 gap-1.5 rounded-full border border-border/60 px-3 text-muted-foreground hover:text-foreground">
                  <Globe className="h-4 w-4" />
                  <span className="text-xs font-semibold">{currentLanguage.code.toUpperCase()}</span>
                  <ChevronDown className="h-3 w-3" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="glass border-primary/20">
                {languages.map((lang) => (
                  <DropdownMenuItem
                    key={lang.code}
                    onClick={() => setLanguage(lang.code as Language)}
                    className="cursor-pointer focus:bg-primary/15"
                  >
                    <span className="mr-2">{lang.flag}</span>
                    {lang.name}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Button
              onClick={openWhatsApp}
              className="btn-sheen h-9 rounded-full bg-electric px-5 text-sm font-semibold text-primary-foreground shadow-glow-sm transition-all duration-300 hover:shadow-glow-md hover:brightness-110"
            >
              {t('header.startNow') || 'Get Started'}
            </Button>
          </div>

          {/* Mobile: language + menu */}
          <div className="flex items-center gap-2 lg:hidden">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="h-11 gap-1 rounded-full border border-border/60 px-2.5 text-muted-foreground">
                  <Globe className="h-4 w-4" />
                  <span className="text-xs font-semibold">{currentLanguage.code.toUpperCase()}</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="glass border-primary/20">
                {languages.map((lang) => (
                  <DropdownMenuItem
                    key={lang.code}
                    onClick={() => setLanguage(lang.code as Language)}
                    className="cursor-pointer focus:bg-primary/15"
                  >
                    <span className="mr-2">{lang.flag}</span>
                    {lang.name}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <button
              className="flex h-11 w-11 items-center justify-center rounded-lg text-foreground"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="glass mt-2 space-y-1 rounded-2xl border-primary/15 p-4 lg:hidden">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="block rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-primary/10 hover:text-foreground"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Button
              onClick={openWhatsApp}
              className="btn-sheen mt-2 h-11 w-full rounded-xl bg-electric text-sm font-semibold text-primary-foreground shadow-glow-sm"
            >
              {t('header.startNow') || 'Get Started'}
            </Button>
          </div>
        )}
      </div>
    </header>
  );
};
