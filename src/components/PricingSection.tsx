import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCurrency } from "@/hooks/useCurrency";

// Single set of numbers — only the currency symbol changes by region, the
// price itself does not.
const pricingPlansByTab = {
  one: [
    {
      title: "1 Month",
      price: 15,
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
      price: 35,
      originalPrice: 45,
      period: "3 months",
      popular: false,
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
      price: 60,
      originalPrice: 70,
      period: "6 months",
      popular: false,
      animation: "fade-left",
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
      price: 75,
      originalPrice: 110,
      period: "year",
      popular: true,
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
      price: 25,
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
      price: 60,
      originalPrice: 90,
      period: "3 months",
      popular: false,
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
      price: 85,
      originalPrice: 140,
      period: "6 months",
      popular: false,
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
      price: 125,
      originalPrice: 210,
      period: "year",
      popular: true,
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
      price: 35,
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
      price: 85,
      originalPrice: 110,
      period: "3 months",
      popular: false,
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
      price: 125,
      originalPrice: 200,
      period: "6 months",
      popular: false,
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
      price: 175,
      originalPrice: 280,
      period: "year",
      popular: true,
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

const CURRENCY_SYMBOL = { USD: "$", EUR: "€" } as const;

export const PricingSection = () => {
  const { t } = useLanguage();
  const [selectedTab, setSelectedTab] = useState("one");
  const navigate = useNavigate();
  const { currency, setCurrency } = useCurrency();
  const symbol = CURRENCY_SYMBOL[currency];

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

        {/* Currency toggle */}
        <div className="flex justify-center mb-8">
          <div className="glass inline-flex rounded-full p-1" role="group" aria-label="Currency">
            {(["USD", "EUR"] as const).map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setCurrency(c)}
                aria-pressed={currency === c}
                className={`h-9 rounded-full px-4 text-sm font-semibold transition-colors ${
                  currency === c
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
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
           {pricingPlansByTab[selectedTab].map((plan, index) => {
             const savings = plan.originalPrice ? plan.originalPrice - plan.price : undefined;

             return (
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

              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {plan.title}
                  </h3>

                  {savings ? (
                    <div className="text-secondary font-semibold text-sm mb-2">
                      Save {symbol}{savings}
                    </div>
                  ) : null}

                  <div className="flex items-baseline justify-center gap-2">
                    <span className="text-4xl font-bold text-primary">
                      {symbol}{plan.price}
                    </span>
                    <span className="text-muted-foreground">
                      /{plan.period}
                    </span>
                  </div>

                  {plan.originalPrice ? (
                    <div className="text-muted-foreground line-through text-sm mt-1">
                      Originally {symbol}{plan.originalPrice}
                    </div>
                  ) : null}
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
             );
           })}
        </div>

        {/* Payment Info */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4" style={{color:'#00FFCC'}}
                        data-aos="fade-down">
            Secure payment processing • Instant activation • 24/7 support
          </p>
        </div>
      </div>
    </section>
  );
};
