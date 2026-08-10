import { useEffect, useState } from "react";

interface IntroOverlayProps {
  onFinish: () => void;
}

/**
 * Brief, minimal branded intro: logo fades in, wordmark resolves, thin
 * underline draws in, whole thing fades out. Under 1.6s total, no canvas,
 * no particles, no scroll locking — the parent unmounts this once `onFinish`
 * fires, so there is nothing left behind to clean up.
 */
export const IntroOverlay = ({ onFinish }: IntroOverlayProps) => {
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const holdMs = reduce ? 0 : 1200;
    const fadeMs = reduce ? 0 : 500;

    const startLeave = window.setTimeout(() => setLeaving(true), holdMs);
    const finish = window.setTimeout(onFinish, holdMs + fadeMs);

    return () => {
      window.clearTimeout(startLeave);
      window.clearTimeout(finish);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const skip = () => {
    setLeaving(true);
    window.setTimeout(onFinish, 250);
  };

  return (
    <div
      role="presentation"
      onClick={skip}
      className="fixed inset-0 z-[200] flex items-center justify-center bg-[#03060c] cursor-pointer transition-opacity duration-500 ease-out"
      style={{ opacity: leaving ? 0 : 1 }}
    >
      <div className="flex flex-col items-center">
        <img
          src="/highstream-mark.png"
          alt="HighStream"
          width={72}
          height={72}
          className="h-16 w-auto md:h-[72px]"
          style={{ animation: "hs-intro-fade-in 0.7s cubic-bezier(0.22,1,0.36,1) both" }}
        />
        <div
          className="font-display mt-5 text-xl font-semibold uppercase tracking-[0.32em] text-chrome md:text-2xl"
          style={{ animation: "hs-intro-fade-in 0.7s cubic-bezier(0.22,1,0.36,1) 0.25s both" }}
        >
          HighStream
        </div>
        <div
          className="mt-5 h-px w-16 bg-electric"
          style={{ animation: "hs-intro-line 0.6s cubic-bezier(0.22,1,0.36,1) 0.55s both" }}
        />
      </div>
    </div>
  );
};

export default IntroOverlay;
