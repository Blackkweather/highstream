import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useSEO } from "@/hooks/useSEO";

const PrivacyPolicy = () => {
  useSEO({ title: "Privacy Policy", description: "How HighStream collects, uses and protects your data. Minimal data collection, no logging of viewing activity." });
  return (
    <div className="min-h-screen bg-background flex flex-col ">
        <Header/>
  <div className="container mx-auto px-4 py-16 flex flex-col ">
      <h1 className="text-3xl font-bold mb-4 text-center" >HighStream Privacy Policy</h1>
      <p className="text-sm mb-8">
        <span className="font-semibold">Last Updated:</span> August 2, 2025
      </p>

      <p className=" font-semibold mb-6 leading-relaxed">
        Your privacy and anonymity are fundamental to how we operate. At HighStream, we are built
        on a foundation of minimal data collection to ensure your identity remains protected. This
        Privacy Policy outlines the limited information we process and how we manage it. When
        you choose our IPTV streaming service, you agree to the practices described below.
      </p>

      <h2 className="text-2xl font-bold mb-6 text-foreground">Our Privacy-First Commitment: What We Don't Collect</h2>
      <p className=" font-semibold mb-4 leading-relaxed">
        In a digital world where data collection is the norm, we have taken a different path. Our core
        business model is to avoid the collection of sensitive personal data. We do not collect or
        store the following:


     <ul className="list-disc list-inside pl-5 mb-3 mt-2 space-y-2 ml-4 ">
        <li>Full Names or Addresses</li>
        <li>Credit Card or Banking Details</li>
        <li>IP Addresses</li>
        <li>Device Identifiers</li>
        <li>Viewing History or Usage Patterns</li>
      </ul>
      </p>


      <h2 className="text-2xl font-bold mb-6 text-foreground">Limited Information We Do Collect</h2>
      <p className="font-semibold mb-4 leading-relaxed">
        We only collect information essential for service delivery and communication.
      </p>
      <ul className="list-disc list-inside mb-6 space-y-3 ml-4">
        <li>
          <span className="font-semibold">Contact Information:</span> We only store your email address and name if you voluntarily
          provide them to us by using our contact form.
        </li>
        <li>
          <span className="font-semibold">Payment Verification:</span> When a payment is made through a third-party processor, we
          receive proof of payment (e.g., a receipt or screenshot). We do not receive or store
          any financial details.
        </li>
        <li>
          <span className="font-semibold">Service Account Identifiers:</span> Your service account is linked to the identifier you use
          to communicate with us. This is limited to your WhatsApp phone number or your
          Telegram username, which are the only identifiers we use to manage and deliver
          your service.
        </li>
      </ul>

      <h2 className=" text-2xl font-bold mb-6 text-foreground">How We Use Your Information</h2>
      <p className=" font-semibold mb-4 leading-relaxed">
        The limited data we collect is used solely for the following purposes:
      </p>
      <ul className="list-disc list-inside mb-6 space-y-3 ml-4">
        <li>
          <span className="font-semibold">Service Delivery and Management:</span> We use your WhatsApp number or Telegram
          username to set up and manage your service account, as well as to provide
          customer support.
        </li>
        <li>
          <span className="font-semibold">Communication:</span> We may use your email address, if provided, to respond to your
          inquiries or send you non-promotional, service-related communications.
        </li>
        <li>
          <span className="font-semibold">Record Keeping:</span> We retain payment proofs for our internal accounting records.
        </li>
      </ul>

      <h2 className="text-2xl font-bold mb-6 text-foreground">Data Sharing</h2>
      <p className="font-semibold mb-4 leading-relaxed">
        We do not sell, rent, or trade any information we collect. Our commitment to minimal data
        collection minimizes any potential for sharing. We will only disclose information in the
        following extremely limited circumstances:
      </p>
      <ul className="list-disc list-inside mb-6 space-y-2 ml-4">
        <li>
          <span className="font-semibold">Legal Compliance:</span> If required by a valid and enforceable court order or subpoena,
          we may be obligated to provide any data we possess. Our minimal data model
          significantly limits the information we could disclose.
        </li>
      </ul>

      <h2 className="text-2xl font-bold mb-6 text-foreground">Your Rights</h2>
      <p className=" font-semibold mb-6 leading-relaxed">
        Because we collect very little personal information, your rights are streamlined. If you have
        provided us with your email address via our contact form, you can request that it be deleted.
      </p>

      <h2 className="text-2xl font-bold mb-6 text-foreground">Data Security</h2>
      <p className="font-semibold mb-6 leading-relaxed">
        Our security strategy is built on the principle of not having sensitive data to protect. We
        maintain standard security measures to protect the limited data we do hold (contact
        information and payment proofs) from unauthorized access.
      </p>

      <h2 className="text-2xl font-bold mb-6 text-foreground">Changes to This Policy</h2>
      <p className=" font-semibold mb-6 leading-relaxed">
        We reserve the right to modify this Privacy Policy. Any changes will be posted on our
        website. Your continued use of the services after any changes indicates your acceptance of
        the updated policy.
      </p>

      <h2 className="text-2xl font-bold mb-6 text-foreground">Contact Us</h2>
      <p className=" font-semibold mb-8 leading-relaxed">
        For any questions regarding this Privacy Policy, please <Link className="text-primary font-bold hover:underline" to="/contact">contact us</Link>.
      </p>

      <div className="border-t border-border pt-8">
        <h2 className="text-2xl font-bold mb-6 text-foreground">
          Frequently Asked Questions (FAQ) about Privacy and Our IPTV Service
        </h2>
        <p className=" font-semibold mb-6 leading-relaxed">
          This section answers common questions to give you complete confidence in our approach to
          data protection.
        </p>

        <div className="space-y-6">
          <div>
            <p className="font-semibold leading-relaxed">
              <span className="font-semibold">• Does HighStream share my payment information?</span> No. We do not handle or store
              any sensitive payment information. All transactions are managed by trusted
              third-party processors. We only keep a record of the payment proof you provide.
            </p>
          </div>

          <div>
            <p className=" leading-relaxed">
              <span className="font-semibold">• Do you track my viewing history?</span> Absolutely not. We do not monitor your viewing
              habits, the channels you watch, or any of your streaming activity. Your usage is
              private.
            </p>
          </div>

          <div>
            <p className=" leading-relaxed">
              <span className="font-semibold">• Is my personal information secure with HighStream?</span> Our best security measure is
              our minimal data policy. By not collecting personal data, we significantly reduce the
              risk of a data breach affecting your identity. The limited information we do hold is
              protected by standard security protocols.
            </p>
          </div>

          <div>
            <p className="leading-relaxed">
              <span className="font-semibold">• How does HighStream's data protection compare to other online services?</span> Our
              commitment to minimal data collection sets us apart. We believe this is the most
              effective form of online privacy available, as we don't hold the sensitive information
              that other companies might.
            </p>
          </div>
        </div>
      </div>
    </div>

        <Footer/>
    </div>
  );
};

export default PrivacyPolicy;