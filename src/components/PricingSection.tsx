import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCurrency } from "@/hooks/useCurrency";

// Prices are set per-currency rather than live-converted: EUR figures are
// fixed, clean, hand-set values (not a decimal FX conversion) so they never
// show an ugly number like "€76.79".
const pricingPlansByTab = {
  one: [
    {
      title: "1 Month",
      usd: 15,
      eur: 14,
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
      usd: 35,
      eur: 32,
      originalUsd: 45,
      originalEur: 41,
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
      usd: 60,
      eur: 55,
      originalUsd: 70,
      originalEur: 64,
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
      usd: 75,
      eur: 69,
      originalUsd: 110,
      originalEur: 101,
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
      usd: 25,
      eur: 23,
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
      usd: 60,
      eur: 55,
      originalUsd: 90,
      originalEur: 83,
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
      usd: 85,
      eur: 78,
      originalUsd: 140,
      originalEur: 129,
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
      usd: 125,
      eur: 115,
      originalUsd: 210,
      originalEur: 193,
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
      usd: 35,
      eur: 32,
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
      usd: 85,
      eur: 78,
      originalUsd: 110,
      originalEur: 101,
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
      usd: 125,
      eur: 115,
      originalUsd: 200,
      originalEur: 184,
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
      usd: 175,
      eur: 161,
      originalUsd: 280,
      originalEur: 258,
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
             const price = currency === "EUR" ? plan.eur : plan.usd;
             const originalPrice = currency === "EUR" ? plan.originalEur : plan.originalUsd;
             const savings = originalPrice ? originalPrice - price : undefined;

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
                      {symbol}{price}
                    </span>
                    <span className="text-muted-foreground">
                      /{plan.period}
                    </span>
                  </div>

                  {originalPrice ? (
                    <div className="text-muted-foreground line-through text-sm mt-1">
                      Originally {symbol}{originalPrice}
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
