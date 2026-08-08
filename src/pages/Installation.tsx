import { useSEO } from "@/hooks/useSEO";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { useNavigate } from "react-router-dom";

const Installation = () => {
  useSEO({ title: "IPTV Installation Guide — Setup on Any Device", description: "Install HighStream IPTV on Smart TV, Firestick, Android, iOS, MAG and more. Clear, step-by-step setup instructions." });
  const { t } = useLanguage();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <article className="max-w-4xl mx-auto">
          <header className="mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              How to Install 8K Player VIP application IPTV on FireStick & Android 2025
            </h1>
            <div className="flex items-center space-x-4 text-muted-foreground mb-6">
              <span>Installation Guide</span>
              <span>•</span>
              <span>Updated Feb 2025</span>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              The following guide will show you how to install IPTV 8k Player for free on Firestick, Fire TV and Android TV Google TV devices.
              We provide a screenshot guide along with setup instructions and tips to help you get the most out of it on your favourite device.
            </p>
          </header>

          <div className="prose prose-lg max-w-none">
            <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 mb-8">
              <p className="text-foreground font-medium mb-4">
                <strong>Important Note: </strong>
                The app alone does not contain live channels for streaming, however, users can request a 24-hour test from us.
              </p>
              <Button className="bg-primary hover:bg-primary/90" onClick={() => {
                navigate("/contact");
              }}>
                Order Premium Service
              </Button>
            </div>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-6">Step 1 – Prepare your streaming device</h2>

              <div className="space-y-6">
                <div className="border border-border rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-4">1. Access the Search Function</h3>
                  <p className="text-muted-foreground mb-4">
                    From your device's home screen, hover over the Search button, and then click the Search box.
                  </p>
                  <img src="/installation/8k-player-vip-1.webp" alt="8k-player-vip-1" className="w-full h-auto" />
                </div>

                <div className="border border-border rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-4">2. Find Downloader App</h3>
                  <p className="text-muted-foreground mb-4">
                    Find and select <strong>Downloader</strong> from the search results.
                  </p>
                  <img src="/installation/8k-player-vip-2.webp" alt="8k-player-vip-1" className="w-full h-auto" />
                </div>

                <div className="border border-border rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-4">3. Install Downloader</h3>
                  <p className="text-muted-foreground mb-4">
                    Click Download or Get if the application is not yet downloaded. If you have already installed the Downloader application, go directly to Step 2.
                  </p>
                  <img src="/installation/8k-player-vip-3.webp" alt="8k-player-vip-1" className="w-full h-auto" />
                </div>

                <div className="border border-border rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-4">4. Wait for Installation</h3>
                  <p className="text-muted-foreground mb-4">
                    Wait for the Downloader app to install completely before proceeding to the next step.
                  </p>
                  <img src="/installation/8k-player-vip-5.webp" alt="8k-player-vip-1" className="w-full h-auto" />
                </div>

                <div className="border border-border rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-4">5. You will get the message   Downloader Ready to launch!</h3>
                  <img src="/installation/8k-player-vip-6.webp" alt="8k-player-vip-1" className="w-full h-auto" />
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-6">Step 2 – Allow Downloader to install the IPTV 8K Player application</h2>

              <div className="space-y-6">
                <div className="border border-border rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-4">1. Return to the Home screen to hover over Settings and click My Fire TV.</h3>
                  <img src="/installation/8k-player-vip-7.webp" alt="8k-player-vip-1" className="w-full h-auto" />
                </div>

                <div className="border border-border rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-4">2.  Choose Developer Options.</h3>
                  <p className="text-muted-foreground mb-4">
                    <b>IMPORTANT:</b>  Please see the notes below if you do not see the developer options on your screen.
                  </p>
                  <img src="/installation/8k-player-vip-8.webp" alt="8k-player-vip-1" className="w-full h-auto" />
                </div>

                <div className="border border-border rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-4">3. Click Install unknown apps.</h3>
                  <img src="/installation/8k-player-vip-9.webp" alt="8k-player-vip-1" className="w-full h-auto" />
                </div>

                <div className="border border-border rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-4">4. Find the Downloader app and click on it.</h3>
                  <img src="/installation/8k-player-vip-10.webp" alt="8k-player-vip-1" className="w-full h-auto" />
                </div>

                <div className="border border-border rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-4">5. This will enable unknown sources for the Downloader app and enable sideloading on your device.</h3>
                  <img src="/installation/8k-player-vip-11.webp" alt="8k-player-vip-1" className="w-full h-auto" />
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-6 text-center">If Developer Options were not available in step 2 follow the next steps. otherwise go to step 3 </h2>
              <p className=" mb-4"> If you are unable to locate Developer options in Settings, follow the instructions below to enable using the Downloader app.</p>
              {/* <h2 className="text-3xl font-bold text-foreground mb-6">Step 3 – Download and Install 8K Player VIP</h2> */}

              <div className="space-y-6">
                <div className="border border-border rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-4">1.  Mouse over the Settings icon and click  My Fire TV </h3>
                  <img src="/installation/8k-player-vip-12.webp" alt="8k-player-vip-1" className="w-full h-auto" />
                </div>

                <div className="border border-border rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-4">2. Click  About.</h3>
                  <p className="text-muted-foreground mb-4">
                    <b>Note:</b>  Note that the developer options are missing.
                  </p>
                  <img src="/installation/8k-player-vip-13.webp" alt="8k-player-vip-1" className="w-full h-auto" />
                </div>

                <div className="border border-border rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-4">3.  Hover over <b>Fire TV Stick and click  </b>   the OK button on your remote 7 times to become a developer</h3>
                  <img src="/installation/8k-player-vip-14.webp" alt="8k-player-vip-1" className="w-full h-auto" />
                </div>

                <div className="border border-border rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-4">4.  Click the Back button on your remote and you will notice that Developer Options are now displayed in My Fire TV.</h3>
                  <img src="/installation/8k-player-vip-15.webp" alt="8k-player-vip-1" className="w-full h-auto" />
                </div>

                <div className="border border-border rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-4">5. Click Install unknown apps..</h3>
                  <img src="/installation/8k-player-vip-16.webp" alt="8k-player-vip-1" className="w-full h-auto" />
                </div>
                <div className="border border-border rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-4">6. Find the Downloader app and click on it.</h3>
                  <img src="/installation/8k-player-vip-17.webp" alt="8k-player-vip-1" className="w-full h-auto" />
                </div>
                <div className="border border-border rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-4">7. This will enable unknown sources for the Downloader app and enable sideloading on your device.</h3>
                  <img src="/installation/8k-player-vip-18.webp" alt="8k-player-vip-1" className="w-full h-auto" />
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-6">Step 3 – Download and Install IPTV 8K Player</h2>

              <div className="space-y-6">
                <div className="border border-border rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-4">1. Launch the Downloader app.</h3>
                  <img src="/installation/8k-player-vip-19.webp" alt="8k-player-vip-1" className="w-full h-auto" />
                </div>

                <div className="border border-border rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-4">2. Hover over the URL bar and click the select button on your remote</h3>
                  <img src="/installation/8k-player-vip-20.webp" alt="8k-player-vip-1" className="w-full h-auto" />
                </div>

                <div className="border border-border rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-4">3. Type download code 439873 and click Go.</h3>
                  <img src="/installation/8k-player-vip-21-768x346.webp" alt="8k-player-vip-1" className="w-full h-auto" />
                </div>

                <div className="border border-border rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-4">4. You will then encounter a redirect page. wait 4 to 6 seconds if the download does not start click on the link</h3>
                  <img src="/installation/8k-player-vip-22-768x349.webp" alt="8k-player-vip-1" className="w-full h-auto" />
                </div>

                <div className="border border-border rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    5.  Wait for the app to download.</h3>
                  <img src="/installation/8k-player-vip-23-768x355.webp" alt="8k-player-vip-1" className="w-full h-auto" />
                </div>

                <div className="border border-border rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    6.  Click Install.</h3>
                  <img src="/installation/8k-player-vip-24-768x353.webp" alt="8k-player-vip-1" className="w-full h-auto" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4 ml-6">
                  7.  The application is installed.
                </h3>

              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-6">Step 4 – How to configure IPTV 8K Player</h2>

              <div className="space-y-6">
                <div className="border border-border rounded-lg p-6">
                  <p className="text-muted-foreground mb-4">
                    After installation, you can launch the application to use it.
                  </p>
                  <img src="/installation/8k-player-vip-25-768x346.webp" alt="8k-player-vip-1" className="w-full h-auto" />
                </div>
                <div className="border border-border rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    1. Click on 8k VIP</h3>
                  <img src="/installation/8k-player-vip-26-768x379.webp" alt="8k-player-vip-1" className="w-full h-auto" />
                </div>
               <div className="border border-border rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    2. Click on the settings icon</h3>
                  <img src="/installation/8k-player-vip-27-768x379.webp" alt="8k-player-vip-1" className="w-full h-auto" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4 mt-3 ml-4">
               3. Enter the account information (playlist Name+Username+Password) and click Update Playlist. If you do not yet have a subscription, you can order by this Link OR ask us by WhatsApp</h3>
            </section>

            <section className="mb-12">
              <div className="bg-accent/20 border border-accent/30 rounded-lg p-8 text-center">
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  Need Help with Installation?
                </h2>
                <p className="text-muted-foreground mb-6 text-lg">
                  Our support team is ready to assist you with any installation issues or questions you might have.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  {/* <Button className="bg-primary hover:bg-primary/90">
                    Get Premium Support
                  </Button> */}
                  <Button variant="outline" onClick={() => {
                    navigate("/contact");
                  }}>
                    Contact Support
                  </Button>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-6">Troubleshooting Tips</h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="border border-border rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-4">Installation Issues</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Ensure Unknown Sources is enabled</li>
                    <li>• Check your internet connection</li>
                    <li>• Restart your device if installation fails</li>
                    <li>• Clear Downloader app cache</li>
                  </ul>
                </div>

                <div className="border border-border rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-4">Performance Issues</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Close other running apps</li>
                    <li>• Use wired internet connection</li>
                    <li>• Adjust video quality settings</li>
                    <li>• Increase buffer size in settings</li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default Installation;