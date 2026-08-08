import { useLanguage } from "@/contexts/LanguageContext";
import { openWhatsApp, openTelegram } from "@/services/socialService";
const getFooterLinks = (t: (key: string) => string) => ({
  product: [
    { label: t('nav.apps'), href: "/apps" },
    { label: t('pricing.title'), href: "/#pricing" },
    { label: t('nav.faq'), href: "/faq" },
    { label: t('nav.reseller'), href: "/reseller" }

  ],
  support: [
    { label: t('nav.contact'), href: "/contact" },
    { label: t('nav.whatsapp'), href: openWhatsApp },
    { label: t('nav.telegram'), href: openTelegram },
  ],
  company: [
    { label: t('nav.aboutUs'), href: "/about" },
    { label: t('nav.blog'), href: "/blog" },
    { label: t('nav.privacy'), href: "/privacy-policy" },
    { label: t('nav.terms'), href: "/terms-of-service" }
  ]
});

export const Footer = () => {
  const { t } = useLanguage();
    const footerLinks = getFooterLinks(t);
  return (
    <footer className="bg-section-gradient border-t border-border">
      {/* Support Section */}
      <div className="container mx-auto px-4 lg:px-8 py-16">
        {/* <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Need Support?{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              We're Here to Help
            </span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            {t('footer.responseTime')}
          </p>

          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <Button 
              size="lg" 
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground h-16 text-lg"
            >
              <MessageCircle className="w-6 h-6 mr-3" />
              {t('footer.whatsapp')}
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground h-16 text-lg"
            >
              <Send className="w-6 h-6 mr-3" />
              {t('footer.telegram')}
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="border-muted-foreground text-muted-foreground hover:bg-muted hover:text-foreground h-16 text-lg"
            >
              <Mail className="w-6 h-6 mr-3" />
              {t('footer.email')}
            </Button>
          </div>

          <div className="mt-8">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3">
              {t('footer.getSupport')}
            </Button>
          </div>
        </div> */}

        {/* Footer Links */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Logo and Description */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <a href="/">
             <img src="/logo_footer.webp" alt="HighStream Logo"
              width={180} height={80}  />
              </a>

            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {t('footer.description')}
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-foreground font-semibold mb-4">{t('footer.product')}</h3>
            <ul className="space-y-2">

              {footerLinks.product.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="text-foreground font-semibold mb-4">{t('footer.support')}</h3>
            <ul className="space-y-2">
                <li>
                  <a 
                    href={'/contact'}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                   Contact
                  </a>
                </li>
                <li>
                  <a 
                    onClick={openWhatsApp}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm cursor-pointer"
                  >
                 WhatsApp
                  </a>
                </li>
                <li>
                  <a 
                    onClick={openTelegram}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm cursor-pointer"
                  >
                   Telegram
                  </a>
                </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-foreground font-semibold mb-4">{t('footer.company')}</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-muted-foreground text-sm">
                {t('footer.copyright')}
            </div>
            
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <span>🔒  {t('footer.sslSecured')}</span>
              <span>•</span>
              <span>⚡ {t('infrastructure.uptime')}</span>
              <span>•</span>
              <span>🌍 {t('footer.globalCdn')}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};