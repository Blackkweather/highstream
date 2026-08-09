import { useSEO } from "@/hooks/useSEO";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageCircle, Phone, Mail, Clock, Send } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { FloatingSocialButtons } from "@/components/FloatingSocialButtons";
import { useState, useRef } from "react";
import emailjs from "emailjs-com";
import { toast } from "@/components/ui/sonner";
import { openWhatsApp, openTelegram } from "@/services/socialService";

// Minimum time (ms) a human needs to fill the form; bots that submit instantly get blocked.
const MIN_FILL_TIME_MS = 2500;

const Contact = () => {
  useSEO({ title: "Contact HighStream — 24/7 IPTV Support", description: "Get in touch with HighStream. 24/7 support over WhatsApp and Telegram for setup, billing and troubleshooting." });
  const { t } = useLanguage();

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [sending, setSending] = useState(false);
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});
  const formLoadedAt = useRef(Date.now());
  // Honeypot: real users never see or fill this field; bots that auto-fill every input do.
  const honeypotRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const validate = () => {
    const next: typeof errors = {};
    if (!form.name.trim()) next.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = "Please enter a valid email address.";
    if (form.message.trim().length < 10) next.message = "Message must be at least 10 characters.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();

    if (honeypotRef.current?.value) {
      // Silently drop bot submissions without revealing the trap.
      return;
    }
    if (Date.now() - formLoadedAt.current < MIN_FILL_TIME_MS) {
      toast.error("Please take a moment to fill out the form.");
      return;
    }
    if (!validate()) return;

    setSending(true);
    try {
      await emailjs.send(
        "service_2ih4eqc",
        "template_xlrjhvo",
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        "RPumTLOK8bWer3Lp3"
      );
      toast.success("Message sent — we'll get back to you soon.");
      setForm({ name: "", email: "", message: "" });
      setErrors({});
    } catch (err) {
      toast.error("Something went wrong sending your message. Please try WhatsApp or Telegram instead.");
    }
    setSending(false);
  };


  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">{t('contact.title')}</h1>
            <p className="text-xl text-muted-foreground">
              {t('contact.subtitle')}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="form-card">
              <CardHeader>
                <CardTitle>{t('contact.sendMessage')}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <form onSubmit={handleSend} noValidate>
                  {/* Honeypot field — hidden from real users, invisible to screen readers, but bots that
                      auto-fill every input will populate it and get silently rejected on submit. */}
                  <input
                    ref={honeypotRef}
                    type="text"
                    name="company"
                    id="company"
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                    className="absolute left-[-9999px] top-auto h-0 w-0 overflow-hidden opacity-0"
                  />
                  <div className="space-y-2">
                    <Label htmlFor="name">{t('contact.name')}</Label>
                    <Input
                      id="name"
                      placeholder={t('contact.namePlaceholder')}
                      value={form.name}
                      onChange={handleChange}
                      required
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? "name-error" : undefined}
                    />
                    {errors.name && <p id="name-error" className="text-sm text-destructive">{errors.name}</p>}
                  </div>
                  <div className="space-y-2 mt-4">
                    <Label htmlFor="email">{t('contact.email')}</Label>
                    <Input
                      id="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder={t('contact.emailPlaceholder')}
                      required
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? "email-error" : undefined}
                    />
                    {errors.email && <p id="email-error" className="text-sm text-destructive">{errors.email}</p>}
                  </div>
                  <div className="space-y-2 mb-4 mt-4">
                    <Label htmlFor="message">{t('contact.message')}</Label>
                    <Textarea
                      id="message"
                      placeholder={t('contact.messagePlaceholder')}
                      rows={6}
                      value={form.message}
                      onChange={handleChange}
                      required
                      aria-invalid={!!errors.message}
                      aria-describedby={errors.message ? "message-error" : undefined}
                    />
                    {errors.message && <p id="message-error" className="text-sm text-destructive">{errors.message}</p>}
                  </div>
                  <Button className="w-full" size="lg" type="submit" disabled={sending}>
                    {sending ? "Sending..." : t('contact.send')}
                  </Button>
                </form>

              </CardContent>
            </Card>

            {/* Quick Contact Options */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="h-5 w-5" />
                    {t('contact.instantSupport')}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    {t('contact.immediateAssistance')}
                  </p>

                  <Button
                    onClick={openWhatsApp}
                    size="lg"
                    className="w-full justify-star bg-secondary hover:bg-secondary/90 text-secondary-foreground h-16 text-lg"
                  >
                    <MessageCircle className="w-6 h-6 mr-3" />
                    {t('footer.whatsapp')}
                  </Button>

                  <Button
                    onClick={openTelegram}
                    size="lg"
                    variant="outline"
                    className="w-full justify-star border-primary text-primary hover:bg-primary hover:text-primary-foreground h-16 text-lg"
                  >
                    <Send className="w-6 h-6 mr-3" />
                    {t('footer.telegram')}
                  </Button>

                  {/* <Button variant="outline" className="w-full justify-start" size="lg">
                    <Mail className="h-5 w-5 mr-2" />
                    Email Support
                  </Button> */}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                             <CardTitle>{t('contact.responseTimes')}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">WhatsApp</span>
                 <span className="font-semibold text-primary">&lt; 30 {t('contact.minutes')}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Telegram</span>
               <span className="font-semibold text-primary">&lt; 1 {t('contact.hours')}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Contact Form</span>
                 <span className="font-semibold text-primary">&lt; 2 {t('contact.hours')}</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>{t('contact.technicalIssues')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                   {t('contact.beforeContacting')}
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• {t('contact.restartApp')}</li>
                    <li>• {t('contact.checkConnection')}</li>
                    <li>• {t('contact.clearCache')}</li>
                    <li>• {t('contact.tryServer')}</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <FloatingSocialButtons />
      <Footer />
    </div>
  );
};

export default Contact;