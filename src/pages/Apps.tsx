import { useSEO } from "@/hooks/useSEO";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Smartphone, Tv, Monitor, Tablet, Download } from "lucide-react";
import { FloatingSocialButtons } from "@/components/FloatingSocialButtons";
import { useLanguage } from "@/contexts/LanguageContext";
import { useNavigate } from "react-router-dom";
import { set } from "date-fns";

const Apps = () => {
  useSEO({ title: "IPTV Apps for Smart TV, Firestick, Android & iOS", description: "Download and set up HighStream IPTV on Smart TV, Firestick, Android, iOS, MAG and Enigma2. Step-by-step guides for every device." });
  const { t } = useLanguage();
  const navigate = useNavigate();
  const deviceApps = [
    {
      device: "Android",
      icon: <Smartphone className="h-8 w-8" />,
      apps: [
   
        { name: "8k Player", description:  t('apps.mostPopular'), recommended: true }, //"Our own IPTV player"
        { name: "Ibo Player Pro", description:  t('apps.premiumExp'), recommended: true }, // "Premium IPTV experience"
        { name: "IPTV Stream Player", description: t('apps.featureRich'), recommended: false }, // "Simple and reliable"
        { name: "Perfect Player", description: t('apps.simpleReliable'), recommended: false } // "Simple and reliable"
      ]
    },
    {
      device: "iOS / Apple TV",
      icon: <Tablet className="h-8 w-8" />,
      apps: [
        { name: "Ibo Player Pro", description:  t('apps.bestIos'), recommended: true }, // "Premium IPTV experience"
        { name: "IPTVX", description:  t('apps.cleanInterface'),recommended: true }, // "The All-Round Champion"
        { name: "Smarters Player", description:  t('apps.simpleEffective'), recommended: false }, // "The User-Friendly Workhorse"
        { name: "IPTV Player Live", description:  t('apps.multiFormat'), recommended: false } // "100% free and solid"
      ]
    },
    {
      device: "Smart TVs",
      icon: <Tv className="h-8 w-8" />,
      apps: [
        { name: "Ibo Player Pro", description: "Premium IPTV experience", recommended: true },
        { name: "TiviMate", description: "Premium experience", recommended: true },
        { name: "IPTV Smarters Pro", description: "The Classic app", recommended: false },
        { name: "Net IPTV", description: "Samsung/LG compatible", recommended: false },
      ]
    },
    {
      device: "Windows / Mac",
      icon: <Monitor className="h-8 w-8" />,
      apps: [
        { name: "Ibo Player Pro", description: "Premium IPTV experience", recommended: true },
        { name: "IPTV Smarters Pro", description: "Best Multiplataform", recommended: true },
        { name: "MyIPTV Player", description: "Dedicated IPTV app", recommended: false },
        { name: "IPTV Stream Player", description: "Simple and reliable", recommended: false },
      ]
    },
    {
      device: "Amazon Firestick",
      icon: <Tv className="h-8 w-8" />,
      apps: [
        { name: "Downloader + 8k Player", description: "Best Firestick combo", recommended: true },
        { name: "TiviMate", description: "Premium experience", recommended: true },
        { name: "Downloader + IPTV Smarters", description: "Best Firestick combo", recommended: false },
        { name: "Perfect Player", description: "Lightweight option", recommended: false }
      ]
    }
  ];

  const setupSteps = [
    {
      step: 1,
      title: t('apps.step1'),
      description: t('apps.step1Desc')
    },
    {
      step: 2,
      title: t('apps.step2'),
      description: t('apps.step2Desc')
    },
    {
      step: 3,
      title: t('apps.step3'),
      description: t('apps.step3Desc')
    },
    {
      step: 4,
      title: t('apps.step4'),
      description: t('apps.step4Desc')
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl font-bold mb-4">{t('apps.title')}</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t('apps.subtitle')}
            </p>
          </div>

          {/* Device Recommendations */}
          <div className="space-y-8 mb-16">
            {deviceApps.map((device, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className="text-primary">{device.icon}</div>
                    {device.device}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {device.apps.map((app, appIndex) => (
                      <div 
                        key={appIndex}
                        className={`p-4 rounded-lg border ${app.recommended ? 'border-primary/30 bg-primary/5' : 'border-border/20'}`}
                      >
                        <div className="flex items-start justify-between mb-2">
                          <h4 className="font-semibold">{app.name}</h4>
                          {app.recommended && (
                            <Badge variant="default" className="text-xs">
                              {t('apps.recommended')}
                            </Badge>
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground">{app.description}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Setup Guide */}
          <Card className="mb-16">
            <CardHeader>
              <CardTitle className="text-center">{t('apps.setupTitle')}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-4 gap-6">
                {setupSteps.map((step, index) => (
                  <div key={index} className="text-center">
                    <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                      <span className="text-lg font-bold text-primary">{step.step}</span>
                    </div>
                    <h3 className="font-semibold mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Pro Tips */}
          <Card className="mb-16">
            <CardHeader>
                <CardTitle>{t('apps.proTips')}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">{t('apps.optimizeVideo')}</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• {t('apps.wiredConnection')}</li>
                    <li>• {t('apps.hardwareAcceleration')}</li>
                    <li>• {t('apps.videoDecoder')}</li>
                    <li>• {t('apps.bufferSize')}</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">{t('apps.reduceBuffering')}</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                   <li>• {t('apps.closeApps')}</li>
                    <li>• {t('apps.use5ghz')}</li>
                    <li>• {t('apps.clearCache')}</li>
                    <li>• {t('apps.nearestServer')}</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* CTA Section */}
          <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20">
            <CardContent className="text-center py-12">
              <Download className="h-12 w-12 text-primary mx-auto mb-4" />
             <h2 className="text-2xl font-bold mb-4">{t('apps.readyToStart')}</h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                   {t('apps.readyDesc')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" onClick={() => {
                  navigate("/");
                  setTimeout(() => {
                            const pricingSection = document.getElementById('pricing-section');
                  if (pricingSection) {
                    pricingSection.scrollIntoView({ behavior: 'smooth' });
                  }
                  }, 300); // Adjust delay as needed
                  // Smooth scroll to pricing section   
        
                }}>{t('apps.viewPricing')}</Button>
              <Button variant="outline" size="lg"  onClick={() => {navigate("/contact");    window.scrollTo(0, 0); }}>{t('apps.contactSupport')}</Button>
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

export default Apps;