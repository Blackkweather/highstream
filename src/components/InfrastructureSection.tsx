import { Card, CardContent } from "@/components/ui/card";
import { Server, Shield, Zap, Monitor } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const getInfrastructureFeatures = (t: (key: string) => string) => [
  {
    icon: Server,
    titleKey: "infrastructure.globalServers",
    descriptionKey: "infrastructure.globalServersDesc",
    metricKey: "infrastructure.globalServersMetric",
    animation:"fade-up"
  },
  {
    icon: Shield,
    titleKey: "infrastructure.backupTitle",
    descriptionKey: "infrastructure.backupDesc",
    metricKey: "infrastructure.backupMetric",
    animation:"fade-down"
  },
  {
    icon: Zap,
    titleKey: "infrastructure.cdnTitle",
    descriptionKey: "infrastructure.cdnDesc",
    metricKey: "infrastructure.cdnMetric",
    animation:"fade-up"
  },
  {
    icon: Monitor,
   titleKey: "infrastructure.monitoringTitle",
    descriptionKey: "infrastructure.monitoringDesc",
    metricKey: "infrastructure.monitoringMetric",
    animation:"fade-down"
  }
];

const getMetrics = (t: (key: string) => string) => [
    { value: "99.9%", labelKey: "infrastructure.uptime", animation: "fade-right" },
  { value: "20K+", labelKey: "infrastructure.channels", animation: "fade-right" },
  { value: "4K", labelKey: "infrastructure.quality", animation: "fade-left" },
  { value: "24/7", labelKey: "infrastructure.support", animation: "fade-left" }
];

export const InfrastructureSection = () => {
  const { t } = useLanguage();
   const infrastructureFeatures = getInfrastructureFeatures(t);
  const metrics = getMetrics(t);
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4" 
          data-aos="fade-up">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              {t('infrastructure.title')}
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto"
          data-aos="fade-up" data-aos-delay="300">
              {t('infrastructure.subtitle')}
          </p>
        </div>

        {/* Infrastructure Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {infrastructureFeatures.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card 
                key={index}
                className="bg-card border-border hover:bg-card-hover hover:border-primary/20 transition-all duration-300 hover:scale-105 group"
                data-aos={feature.animation} 
                data-aos-delay={index * 100}  
             >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                          {t('infrastructure.globalServers')}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm">
                      {t(feature.descriptionKey)}
                  </p>
                  <div className="inline-flex items-center px-3 py-1 bg-secondary/10 rounded-full">
                    <span className="text-secondary font-semibold text-sm">
                     {t(feature.metricKey)}
                    </span>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Metrics Bar */}
        <div className="bg-card border border-border rounded-2xl p-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <div key={index} className="text-center" 
              data-aos={metric.animation}>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {metric.value}
                </div>
                <div className="text-muted-foreground font-medium">
                  {t(metric.labelKey)}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Visualization */}
        <div className="mt-16 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-3xl"></div>
          <div className="relative bg-card/50 backdrop-blur-sm border border-border rounded-3xl p-8 text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4" data-aos="fade-up">
                {t('infrastructure.techTitle')}
            </h3>
            <div className="flex flex-wrap justify-center items-center gap-6 text-muted-foreground">
              <div className="flex items-center gap-2" data-aos="fade-left" data-aos-delay="100">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                <span className="text-sm">{t('infrastructure.globalCdn')}</span>
              </div>
              <div className="flex items-center gap-2" data-aos="fade-left" data-aos-delay="200">
                <div className="w-2 h-2 bg-secondary rounded-full animate-pulse delay-300"></div>
                 <span className="text-sm">{t('infrastructure.loadBalancing')}</span>
              </div>
              <div className="flex items-center gap-2" data-aos="fade-left" data-aos-delay="400">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse delay-600" ></div>
                  <span className="text-sm">{t('infrastructure.autoScaling')}</span>
              </div>
              <div className="flex items-center gap-2" data-aos="fade-left" data-aos-delay="600">
                <div className="w-2 h-2 bg-secondary rounded-full animate-pulse delay-900"></div>
                 <span className="text-sm">{t('infrastructure.analytics')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};