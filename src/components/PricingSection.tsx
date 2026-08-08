import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const pricingPlansByTab = {
  one: [
    {
      title: "1 Month",
      price: "$15",
      period: "month",
      popular: false,
      animation: "fade-right",
      features: [
        "1 Device",
        "35K+ Live Channels",
        "VOD Movies & Series",
        "Ultra HD / 4K Quality",
        "All Device Support",
        "24/7 Customer Support",
        "Anti-Buffering CDN"
      ]
    },
    {
      title: "3 Months",
      price: "$35",
      period: "3 months",
      popular: false,
      originalPrice: "$45",
      savings: "Save $15",
      animation: "fade-right",
      features: [
        "35K+ Live Channels",
        "VOD Movies & Series",
        "Ultra HD / 4K Quality",
        "All Device Support",
        "24/7 Customer Support",
        "Anti-Buffering CDN",
        "Priority Support"
      ]
    },
    {
      title: "6 Months",
      price: "$50",
      period: "6 months",
      popular: false,
      originalPrice: "$70",
      savings: "Save $20",
      animation: "fade-left",
      // badge: "Best Deal",
      features: [
        "35K+ Live Channels",
        "VOD Movies & Series",
        "Ultra HD / 4K Quality",
        "All Device Support",
        "24/7 Customer Support",
        "Anti-Buffering CDN",
        "Premium Support",

      ]
    },
    {
      title: "12 Months",
      price: "$75",
      period: "year",
      popular: true,
      originalPrice: "$110",
      savings: "Save $95",
      animation: "fade-left",
      features: [
        "35K+ Live Channels",
        "VOD Movies & Series",
        "Ultra HD / 4K Quality",
        "All Device Support",
        "24/7 Customer Support",
        "Anti-Buffering CDN",
        "Premium Support"
      ]
    }
  ],
  two: [
    {
      title: "1 Month",
      price: "$25",
      period: "month",
      popular: false,
      features: [
        "2 Devices",
        "35K+ Live Channels",
        "VOD Movies & Series",
        "Ultra HD / 4K Quality",
        "All Device Support",
        "24/7 Customer Support",
        "Anti-Buffering CDN"
      ]
    },
    {
      title: "3 Months",
      price: "$60",
      period: "3 months",
      popular: false,
      originalPrice: "$90",
      savings: "Save $15",
      features: [
        "35K+ Live Channels",
        "VOD Movies & Series",
        "Ultra HD / 4K Quality",
        "All Device Support",
        "24/7 Customer Support",
        "Anti-Buffering CDN",
        "Priority Support"
      ]
    },
    {
      title: "6 Months",
      price: "$85",
      period: "6 months",
      popular: false,
      originalPrice: "$140",
      savings: "Save $20",
      // badge: "Best Deal",
      features: [
        "35K+ Live Channels",
        "VOD Movies & Series",
        "Ultra HD / 4K Quality",
        "All Device Support",
        "24/7 Customer Support",
        "Anti-Buffering CDN",
        "Premium Support",

      ]
    },
    {
      title: "12 Months",
      price: "$125",
      period: "year",
      popular: true,
      originalPrice: "$210",
      savings: "Save $95",
        //  badge: "Best Deal",
      features: [
        "35K+ Live Channels",
        "VOD Movies & Series",
        "Ultra HD / 4K Quality",
        "All Device Support",
        "24/7 Customer Support",
        "Anti-Buffering CDN",
        "Premium Support"
      ]
    }
  ],
  three: [
    {
      title: "1 Month",
      price: "$35",
      period: "month",
      popular: false,
      features: [
        "3 Devices",
        "35K+ Live Channels",
        "VOD Movies & Series",
        "Ultra HD / 4K Quality",
        "All Device Support",
        "24/7 Customer Support",
        "Anti-Buffering CDN"
      ]
    },
    {
      title: "3 Months",
      price: "$85",
      period: "3 months",
      popular: false,
      originalPrice: "$110",
      savings: "Save $15",
      features: [
        "35K+ Live Channels",
        "VOD Movies & Series",
        "Ultra HD / 4K Quality",
        "All Device Support",
        "24/7 Customer Support",
        "Anti-Buffering CDN",
        "Priority Support"
      ]
    },
    {
      title: "6 Months",
      price: "$125",
      period: "6 months",
      popular: false,
      originalPrice: "$200",
      savings: "Save $20",
      // badge: "Best Deal",
      features: [
        "35K+ Live Channels",
        "VOD Movies & Series",
        "Ultra HD / 4K Quality",
        "All Device Support",
        "24/7 Customer Support",
        "Anti-Buffering CDN",
        "Premium Support",

      ]
    },
    {
      title: "12 Months",
      price: "$175",
      period: "year",
      popular: true,
      originalPrice: "$280",
      savings: "Save $95",
      features: [
        "35K+ Live Channels",
        "VOD Movies & Series",
        "Ultra HD / 4K Quality",
        "All Device Support",
        "24/7 Customer Support",
        "Anti-Buffering CDN",
        "Premium Support"
      ]
    }
  ]
};

const pricingTabs = [
  { key: "one", label: "1 Device" },
  { key: "two", label: "2 Devices" },
  { key: "three", label: "3 Devices" },
];


export const PricingSection = () => {
  const { t } = useLanguage();
  const [selectedTab, setSelectedTab] = useState("one");
   const navigate = useNavigate();
   
  return (
    <section className="py-20 bg-section-gradient">
      <div className="container mx-auto px-4 lg:px-8"  id="pricing-section">
        <div className="text-center mb-20 full-width flex flex-col items-center"
        data-aos="fade-up" >
           <img src="/all_devices.webp" alt="All devices supported" />
        </div>
        <div className="text-center mb-16" >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4" >
            Choose Your{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Perfect Plan
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
           {t('pricing.subtitle')}
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-16">
          {pricingTabs.map((tab,index) => (
            <button
              key={tab.key}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-200
                ${selectedTab === tab.key
                  ? "bg-primary text-primary-foreground shadow"
                  : "bg-card text-foreground hover:bg-primary/10"}`}
              onClick={() => setSelectedTab(tab.key)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Plans selon le tab sélectionné */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
           {pricingPlansByTab[selectedTab].map((plan, index) => (
            <Card
              data-aos={plan.animation}
              key={index}
              className={`relative bg-card border-border hover:bg-card-hover transition-all duration-300 hover:scale-105 ${plan.popular ? 'border-primary shadow-tech-glow lg:scale-105' : ''
                }`}
            >
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground">
                  {t('pricing.bestDeal')}
                </Badge>
              )}

              {plan.badge && !plan.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-secondary text-secondary-foreground">
                  {t('pricing.bestDeal')}
                </Badge>
              )}

              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {plan.title}
                  </h3>

                  {plan.savings && (
                    <div className="text-secondary font-semibold text-sm mb-2">
                      {plan.savings}
                    </div>
                  )}

                  <div className="flex items-baseline justify-center gap-2">
                    <span className="text-4xl font-bold text-primary">
                      {plan.price}
                    </span>
                    <span className="text-muted-foreground">
                      /{plan.period}
                    </span>
                  </div>

                  {plan.originalPrice && (
                    <div className="text-muted-foreground line-through text-sm mt-1">
                      Originally {plan.originalPrice}
                    </div>
                  )}
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground text-sm">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full ${plan.popular
                    ? 'bg-primary hover:bg-primary/90 text-primary-foreground'
                    : 'bg-card border border-border hover:bg-primary hover:text-primary-foreground'
                    } transition-all duration-300`}
                  size="lg"
                  onClick={() => { 
                    navigate("/contact");
                    window.scrollTo(0, 0);
                  }} 
                >
                  {t('pricing.subscribeNow')}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Payment Info */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4" style={{color:'#00FFCC'}}
                        data-aos="fade-down">
            Secure payment processing • Instant activation • 24/7 support
          </p>
          <div className="flex justify-center items-center gap-4 text-sm text-muted-foreground">
            {/*<span>💳 Credit Cards</span>*/}
            {/*<span>•</span>*/}
            {/*<span>🏦 Bank Transfer</span>*/}
            {/*<span>•</span>*/}
            {/*<span>₿ Cryptocurrency</span>*/}
          </div>
        </div>
      </div>
    </section>
  );
};