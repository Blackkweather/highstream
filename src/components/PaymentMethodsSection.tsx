import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CreditCard, Banknote, Bitcoin, ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const getPaymentMethods = (t: (key: string) => string) => [
  {
    name: "Card payment",
    logo: "/payement logos/eneba.png",
    icon: CreditCard,
    description: t('payment.enebaDesc'),
    recommended: true,
    features:[t('payment.enebaFeature1'), t('payment.enebaFeature2'), t('payment.enebaFeature3')],
    dimension: "w-16 h-16"
  },
  {
    name: "Wise",
    logo: "/payement logos/wise.png",
    icon: Banknote,
    description: t('payment.wiseDesc'),
    recommended: false,
    features:  [t('payment.wiseFeature1'), t('payment.wiseFeature2'), t('payment.wiseFeature3')],
    dimension: "w-16 h-16"
  },
  {
    name: "Crypto",
    logo: "/payement logos/crypto.png",
    icon: Bitcoin,
    description: t('payment.cryptoDesc'),
    recommended: false,
    features: [t('payment.cryptoFeature1'), t('payment.cryptoFeature2'), t('payment.cryptoFeature3')],
    dimension: "w-16 h-16"
  }
];

const getPaymentSteps = (t: (key: string) => string) => [
  {
    step: "1",
    title:  t('payment.step1Title'),
    description: t('payment.step2Desc')
  },
  {
    step: "2",
    title:  t('payment.step2Title'),
    description: t('payment.step2Desc')
  },
  {
    step: "3",
    title: t('payment.step3Title'),
    description: t('payment.step3Desc')
  }
];

export const PaymentMethodsSection = () => {
  const { t } = useLanguage();
   const paymentMethods = getPaymentMethods(t);
  const paymentSteps = getPaymentSteps(t);
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4"
                        data-aos="fade-up">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              {t('payment.title')}
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="300">
           {t('payment.subtitle')}
          </p>
        </div>

        {/* Payment Methods */}
        <div className="grid md:grid-cols-3 gap-6 mb-16 max-w-4xl mx-auto">
          {paymentMethods.map((method, index) => {
            const IconComponent = method.icon;
            return (
              <Card
                            data-aos="fade-left"
              data-aos-delay={index * 200}
                key={index}
                className={`bg-card border-border hover:bg-card-hover transition-all duration-300 hover:scale-105 relative ${method.recommended ? 'border-primary shadow-tech-glow' : ''
                  }`}
              >
                {method.recommended && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-secondary text-secondary-foreground">
                    {t('apps.recommended')}
                  </Badge>
                )}

                <CardContent className="p-6 text-center">
                  <div className={`${method.dimension} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                    <img
                      src={method.logo}
                      alt={method.name}
                      className=" object-contain"
                      width={"100px"}
                      height={"100px"}
                    />
                  </div>

                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {method.name}
                  </h3>

                  <p className="text-muted-foreground mb-4">
                    {method.description}
                  </p>

                  <div className="space-y-2">
                    {method.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center justify-center gap-2">
                        <div className="w-1 h-1 bg-secondary rounded-full"></div>
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Payment Process */}
        <div className="bg-card border border-border rounded-3xl p-8 max-w-5xl mx-auto">
          <h3 className="text-2xl font-bold text-foreground text-center mb-8">
                {t('payment.howItWorks')}
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            {paymentSteps.map((step, index) => (
              <div key={index} className="text-center relative"
                                          data-aos="fade-left"
              data-aos-delay={index * 200}>
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary-foreground font-bold text-lg">
                    {step.step}
                  </span>
                </div>

                <h4 className="text-lg font-semibold text-foreground mb-2">
                  {step.title}
                </h4>

                <p className="text-muted-foreground text-sm">
                  {step.description}
                </p>

                {index < paymentSteps.length - 1 && (
                  <ArrowRight className="hidden md:block absolute top-6 -right-4 w-6 h-6 text-muted-foreground" />
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-8 p-4 bg-secondary/10 rounded-xl"
              data-aos="fade-up">
            <div className="flex items-center justify-center gap-2 mb-2">
              <CreditCard className="w-5 h-5 text-secondary" />
              <span className="font-semibold text-secondary">{t('payment.recommended')}</span>
            </div>
            <p className="text-sm text-muted-foreground">
               {t('payment.acceptsCards')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};