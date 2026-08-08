import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const TermsOfService = () => (
    <div className="min-h-screen bg-background flex flex-col ">
        <Header />
      <div className="container mx-auto px-4 py-16 flex flex-col ">
             <h1 className="text-3xl font-bold mb-4 text-center">HighStream Terms of Use</h1>
      <p className="text-sm mb-8">
        <span className="font-semibold">Last Updated:</span> August 2, 2025
      </p>

      <p className="font-semibold mb-6 leading-relaxed">
        Welcome to HighStream! These Terms of Use ("Terms") govern your use of the HighStream
        streaming service. By accessing or using our services, you agree to be bound by these
        Terms.
      </p>

      <h2 className="text-2xl font-bold mb-6 text-foreground">1. Description of Service</h2>
      <p className=" font-semibold mb-6 leading-relaxed">
        HighStream provides a premium, subscription-based IPTV streaming service that delivers a
        vast selection of live television channels and a comprehensive on-demand library of movies
        and series (VOD). Our content is updated weekly to ensure you have access to a fresh and
        dynamic entertainment experience. The service is available worldwide.
      </p>

      <h2 className="text-2xl font-bold mb-6 text-foreground">2. Account and Access</h2>
      <ul className="list-disc list-inside mb-6 space-y-3 ml-4">
        <li>
          <span className="font-semibold">Service Access:</span> We provide you with access to our service via a unique M3U link or
          Xtream Codes. You are free to use these credentials with any compatible IPTV player
          application. We also offer our own dedicated application for Android devices.
        </li>
        <li>
          <span className="font-semibold">Customer Support:</span> Our team is available to assist you with the entire activation
          process and to ensure you have a seamless setup.
        </li>
        <li>
          <span className="font-semibold">Simultaneous Connections:</span> Each subscription plan corresponds to a specific
          number of simultaneous connections. A single account can only be used on one
          device at a time. We offer separate, independent accounts for plans that include
          multiple simultaneous connections (e.g., 2 or 3 devices).
        </li>
        <li>
          <span className="font-semibold">VPN Usage:</span> We permit the use of VPNs with our service. In some regions with
          content restrictions, using a VPN may be necessary to ensure optimal service
          performance.
        </li>
      </ul>

      <h2 className="text-2xl font-bold mb-6 text-foreground">3. Payment and Subscriptions</h2>
      <ul className="list-disc list-inside mb-6 space-y-3 ml-4">
        <li>
          <span className="font-semibold">Subscription Plans:</span> We offer various subscription options, including 1-month,
          3-month, 6-month, and 12-month plans.
        </li>
        <li>
          <span className="font-semibold">No Refunds Policy:</span> All payments are final and non-refundable. To ensure you are
          completely satisfied before making a purchase, we provide a free 24-hour trial of
          our service.
        </li>
        <li>
          <span className="font-semibold">Payment Process:</span> After you make a payment and provide us with a receipt, we will
          promptly send you the necessary access credentials (M3U link or Xtream Codes) to
          activate your service.
        </li>
      </ul>

      <h2 className="text-2xl font-bold mb-6 text-foreground">4. User Conduct and Restrictions</h2>
      <p className="font-semibold mb-4 leading-relaxed">
        By using our service, you agree to the following:
      </p>
      <ul className="list-disc list-inside mb-6 space-y-3 ml-4">
        <li>
          <span className="font-semibold">Prohibited Use:</span> You may not use our service for any unlawful purpose. This
          includes, but is not limited to, using software for recording content, engaging in
          reverse engineering, or attempting to distribute or resell your access credentials.
        </li>
        <li>
          <span className="font-semibold">Account Security:</span> You are responsible for maintaining the confidentiality of your
          account information. You must not share your M3U link or Xtream Codes with others.
          Any unauthorized use of your account is your sole responsibility.
        </li>
      </ul>

      <h2 className="text-2xl font-bold mb-6 text-foreground">5. Service Suspension and Termination</h2>
      <p className=" font-semibold mb-6 leading-relaxed">
        Your access to the service will remain active until the last day of your paid subscription
        period. We reserve the right to immediately suspend or terminate your account without
        a refund if you are found to be in violation of these Terms, particularly for unauthorized use,
        fraudulent activity, or sharing your credentials as outlined in Section 4.
      </p>

      <h2 className="text-2xl font-bold mb-6 text-foreground">6. Disclaimers and Limitation of Liability</h2>
      <p className=" font-semibold mb-6 leading-relaxed">
        HighStream reserves the right to make changes to the content, quality, and availability
        of our service, including the addition or removal of channels, at any time without prior
        notice. We are not liable for any interruptions, delays, or errors that may occur due to
        external factors, such as internet service provider issues, network congestion, or acts of
        nature. Our liability is limited to the subscription fees paid by you for the duration of the
        service.
      </p>

      <h2 className="text-2xl font-bold mb-6 text-foreground">7. Changes to the Terms</h2>
      <p className=" font-semibold mb-6 leading-relaxed">
        We reserve the right to modify these Terms at any time. We will post any changes on our
        website. Your continued use of the service after such changes constitutes your acceptance
        of the new Terms.
      </p>

      <h2 className="text-2xl font-bold mb-6 text-foreground">8. Contact Us</h2>
      <p className=" font-semibold mb-4 leading-relaxed">
        If you have any questions about these Terms, please <a className="text-blue-600 font-bold" href="/contact">contact us</a>.
      </p>
            
          </div>
        <Footer/>
    </div>
)


export default TermsOfService;