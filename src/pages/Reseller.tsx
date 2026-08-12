import { useSEO } from "@/hooks/useSEO";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Users, DollarSign, Headphones, Zap } from "lucide-react";
import { FloatingSocialButtons } from "@/components/FloatingSocialButtons";
import { useLanguage } from "@/contexts/LanguageContext";
import { useNavigate } from "react-router-dom";

const Reseller = () => {
  useSEO({ title: "IPTV Reseller Program — Start Your IPTV Business", description: "Become a HighStream IPTV reseller. Wholesale credits, white-glove support and the tools to launch your own streaming business." });
  const { t } = useLanguage();
  const navigate = useNavigate();
  const resellerPacks = [
    {
      credits: 120,
      price: "$280",
      popular: false,
      savings: "Save 15%"
    },
    {
      credits: 240,
      price: "$450",
      popular: true,
      savings: "Save 25%"
    },
    {
      credits: 360,
      price: "$650",
      popular: false,
      savings: "Save 35%"
    }
  ];

  const benefits = [
    {
      icon: <DollarSign className="h-6 w-6" />,
      title: t('reseller.highMargins'),
      description: t('reseller.marginsDesc')
    },
    {
      icon: <Headphones className="h-6 w-6" />,
      title: t('reseller.support'),
      description: t('reseller.supportDesc')
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: t('reseller.flexible'),
      description: t('reseller.flexibleDesc')
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: t('reseller.customerMgmt'),
      description: t('reseller.customerMgmtDesc')
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">{t('reseller.title')}</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t('reseller.subtitle')}
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-4 text-primary">
                    {benefit.icon}
                  </div>
                  <h3 className="font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Pricing Packs */}
          <div className="mb-16">
 <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12">{t('reseller.packs')}</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {resellerPacks.map((pack, index) => (
                <Card key={index} className={`relative ${pack.popular ? 'border-primary shadow-lg' : ''}`}>
                  {pack.popular && (
                    <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      {t('pricing.mostPopular')}
                    </Badge>
                  )}
                  <CardHeader className="text-center">
                    <CardTitle className="text-2xl">{pack.credits} Credits</CardTitle>
                    <div className="text-2xl sm:text-3xl font-bold text-primary">{pack.price}</div>
                    <Badge variant="secondary">{pack.savings}</Badge>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                       <span className="text-sm">{t('reseller.sell')} {pack.credits} {t('reseller.monthlySubscriptions')}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                         <span className="text-sm">{t('reseller.noExpiration')}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                         <span className="text-sm">{t('reseller.technicalSupport')}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                           <span className="text-sm">{t('reseller.mgmtTools')}</span>
                      </div>
                    </div>
                    <Button className="w-full" variant={pack.popular ? "default" : "outline"} onClick={() => { navigate("/contact"); window.scrollTo(0, 0); }}>
                        {t('reseller.buyNow')}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* How it Works */}
          <div className="mb-16">
               <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12">{t('reseller.howItWorks')}</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">1</span>
                </div>
            <h3 className="font-semibold mb-2">{t('reseller.work1')}</h3>
                <p className="text-muted-foreground">{t('reseller.work1Desc')}</p>
              </div>
              <div className="text-center">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">2</span>
                </div>
                       <h3 className="font-semibold mb-2">{t('reseller.work2')}</h3>
                <p className="text-muted-foreground">{t('reseller.work2Desc')}</p>
              </div>
              <div className="text-center">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">3</span>
                </div>
                 <h3 className="font-semibold mb-2">{t('reseller.work3')}</h3>
                <p className="text-muted-foreground">{t('reseller.work3Desc')}</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20">
            <CardContent className="text-center py-12">
             <h2 className="text-2xl sm:text-3xl font-bold mb-4">{t('reseller.ready')}</h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                         {t('reseller.readyDesc')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="outline" size="lg" onClick={() => {navigate("/contact"); window.scrollTo(0, 0); }}>{t('reseller.contactUs')}</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <FloatingSocialButtons />
      <Footer />
    </div>
  );
};

export default Reseller;