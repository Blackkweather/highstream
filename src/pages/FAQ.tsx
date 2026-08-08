import { useSEO } from "@/hooks/useSEO";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { ChevronDown, MessageCircle, Phone } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { openWhatsApp, openTelegram } from "@/services/socialService";

const FAQ = () => {
  useSEO({ title: "IPTV FAQ — Setup, Devices, Trials & Support", description: "Answers to common IPTV questions: supported devices, free trials, required internet speed, simultaneous connections and setup help." });
  const { t } = useLanguage();

  const faqSections = [
    {
    title: t('faq.generalGettingStarted'),
      questions: [
        { question: t('faq.whatIsIptv'), answer: t('faq.whatIsIptvAnswer') },
        { question: t('faq.multipleDevices'), answer: t('faq.multipleDevicesAnswer') },
        { question: t('faq.bestApp'), answer: t('faq.bestAppAnswer') },
        { question: t('faq.willWorkTv'), answer: t('faq.willWorkTvAnswer') }
      ]
    },
    {
     title: t('faq.serviceTroubleshooting'),
      questions: [
        { question: t('faq.notWorking'), answer: t('faq.notWorkingAnswer') },
        { question: t('faq.ispBlock'), answer: t('faq.ispBlockAnswer') },
        { question: t('faq.internetSpeed'), answer: t('faq.internetSpeedAnswer') }
      ]
    },
    {
       title: t('faq.accountPayments'),
      questions: [
        { question: t('faq.getService'), answer: t('faq.getServiceAnswer') },
        { question: t('faq.whatAreXtream'), answer: t('faq.whatAreXtreamAnswer') }
      ]
    },
    {
     title: t('faq.legalSecurity'),
      questions: [
        { question: t('faq.isLegal'), answer: t('faq.isLegalAnswer') },
        { question: t('faq.needVpn'), answer: t('faq.needVpnAnswer') }
      ]
    },
    {
     title: t('faq.privacyService'),
      questions: [
        { question: t('faq.sharePayment'), answer: t('faq.sharePaymentAnswer') },
        { question: t('faq.trackViewing'), answer: t('faq.trackViewingAnswer') },
        { question: t('faq.secureInfo'), answer: t('faq.secureInfoAnswer') },
        { question: t('faq.dataProtection'), answer: t('faq.dataProtectionAnswer') }
      ]
    }
  ];

  // Helper function to render bold text
  const renderAnswer = (text: string) => {
    return text.split(/(\*\*.*?\*\*)/).map((part, index) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={index}>{part.slice(2, -2)}</strong>;
      }
      return part;
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto  w-full ">
          <div className="text-center mb-12">
            <h1 className="font-bold mb-4" style={{ fontSize: '2.5rem' }}>{t('faq.mainTitle')}</h1>
            <p className="text-xl text-muted-foreground mb-8">
              {t('faq.intro')}
            </p>
          </div>
          <div className="space-y-12">
            <Accordion type="multiple"
              defaultValue={faqSections.map((_, i) => `section-${i}`)}>
              {faqSections.map((section, sectionIndex) => (
                <AccordionItem
                  key={sectionIndex}
                  value={`section-${sectionIndex}`}
                  className="border border-border/30 rounded-lg bg-card/30 px-0"
                >
                  <AccordionTrigger className="flex items-center gap-2 px-6 py-4 text-2xl font-bold text-foreground border-b border-border">
                    <span>{section.title}</span>
                  </AccordionTrigger>
                  <AccordionContent>
                    <Accordion type="single" collapsible className="space-y-4 px-6 py-4">
                      {section.questions.map((faq, questionIndex) => (
                        <AccordionItem
                          key={questionIndex}
                          value={`section-${sectionIndex}-item-${questionIndex}`}
                          className="border border-border/20 rounded-lg bg-card/50 px-6"
                        >
                          <AccordionTrigger className="text-left hover:no-underline">
                            <h3 className="font-semibold text-foreground" style={{ fontSize: '1.25rem' }}>{faq.question}</h3>
                          </AccordionTrigger>
                          <AccordionContent className="text-muted-foreground pt-2">
                            <div className="prose prose-sm max-w-none" style={{ fontSize: '1rem' }}>
                              {renderAnswer(faq.answer)}
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold mb-6">{t('faq.stillNeedHelp')}</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="flex items-center gap-2"
                onClick={() => openWhatsApp()}>
                <MessageCircle className="h-5 w-5" />
                {t('faq.whatsappSupport')}
              </Button>
              <Button variant="outline" size="lg" className="flex items-center gap-2"
                onClick={() => openTelegram()}>
                <Phone className="h-5 w-5" />
                {t('faq.telegramSupport')}
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              {t('footer.responseTime')}
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FAQ;