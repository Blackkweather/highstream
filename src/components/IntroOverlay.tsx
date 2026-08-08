import { useEffect, useRef, useState } from "react";

/**
 * HighStream cinematic intro.
 * Streams of electric light converge and the H mark materializes,
 * then the wordmark resolves and the curtain lifts.
 * Plays once per browser session; respects prefers-reduced-motion.
 */
export const IntroOverlay = () => {
  const [phase, setPhase] = useState<"play" | "out" | "done">("play");
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const finish = () => {
    setPhase((p) => (p === "done" ? p : "out"));
    window.setTimeout(() => setPhase("done"), 700);
  };

  useEffect(() => {
    // Session gate
    if (typeof window !== "undefined" && sessionStorage.getItem("hs_intro_seen")) {
      setPhase("done");
      return;
    }
    sessionStorage.setItem("hs_intro_seen", "1");

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Lock scroll while the curtain is up
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const autoMs = reduce ? 900 : 3000;
    const t = window.setTimeout(finish, autoMs);

    // Particle streams (skip heavy canvas when reduced motion)
    let raf = 0;
    if (!reduce && canvasRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d")!;
      let w = (canvas.width = window.innerWidth);
      let h = (canvas.height = window.innerHeight);
      const onResize = () => {
        w = canvas.width = window.innerWidth;
        h = canvas.height = window.innerHeight;
      };
      window.addEventListener("resize", onResize);

      const cx = () => w / 2;
      const cy = () => h / 2;
      type P = { x: number; y: number; vx: number; vy: number; life: number; max: number; sz: number; hue: number };
      const parts: P[] = [];
      const spawn = () => {
        // emit from screen edges, drift toward centre (streaming in)
        const side = Math.floor(Math.random() * 4);
        let x = 0, y = 0;
        if (side === 0) { x = Math.random() * w; y = -10; }
        else if (side === 1) { x = w + 10; y = Math.random() * h; }
        else if (side === 2) { x = Math.random() * w; y = h + 10; }
        else { x = -10; y = Math.random() * h; }
        const ang = Math.atan2(cy() - y, cx() - x);
        const sp = 2.2 + Math.random() * 3.6;
        parts.push({
          x, y,
          vx: Math.cos(ang) * sp,
          vy: Math.sin(ang) * sp,
          life: 0,
          max: 60 + Math.random() * 50,
          sz: 0.6 + Math.random() * 1.8,
          hue: 190 + Math.random() * 22,
        });
      };

      const draw = () => {
        // trailing fade
        ctx.fillStyle = "rgba(3,6,12,0.28)";
        ctx.fillRect(0, 0, w, h);
        ctx.globalCompositeOperation = "lighter";

        for (let i = 0; i < 7; i++) spawn();

        for (let i = parts.length - 1; i >= 0; i--) {
          const p = parts[i];
          p.x += p.vx;
          p.y += p.vy;
          p.vx *= 1.012; // accelerate toward core
          p.vy *= 1.012;
          p.life++;
          const dist = Math.hypot(p.x - cx(), p.y - cy());
          const t2 = 1 - p.life / p.max;
          if (p.life > p.max || dist < 26) { parts.splice(i, 1); continue; }
          const a = Math.max(0, Math.min(1, t2)) * 0.9;
          // streak
          ctx.strokeStyle = `hsla(${p.hue},100%,60%,${a})`;
          ctx.lineWidth = p.sz;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p.x - p.vx * 3, p.y - p.vy * 3);
          ctx.stroke();
        }
        // core glow
        const g = ctx.createRadialGradient(cx(), cy(), 0, cx(), cy(), 180);
        g.addColorStop(0, "hsla(200,100%,65%,0.20)");
        g.addColorStop(1, "hsla(200,100%,65%,0)");
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(cx(), cy(), 180, 0, Math.PI * 2);
        ctx.fill();

        ctx.globalCompositeOperation = "source-over";
        raf = requestAnimationFrame(draw);
      };
      draw();

      return () => {
        window.clearTimeout(t);
        cancelAnimationFrame(raf);
        window.removeEventListener("resize", onResize);
        document.body.style.overflow = prevOverflow;
      };
    }

    return () => {
      window.clearTimeout(t);
      document.body.style.overflow = prevOverflow;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (phase === "done") return null;

  return (
    <div
      role="presentation"
      onClick={finish}
      className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-[#03060c] cursor-pointer select-none"
      style={{
        animation: phase === "out" ? "hs-intro-out 0.7s ease forwards" : undefined,
      }}
    >
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />

      {/* Logo core */}
      <div className="relative z-10 flex flex-col items-center">
        <div className="relative">
          {/* expanding energy rings */}
          <span
            className="pointer-events-none absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/70"
            style={{ animation: "hs-intro-ring 1.6s ease-out 0.35s infinite" }}
          />
          <span
            className="pointer-events-none absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full border border-secondary/60"
            style={{ animation: "hs-intro-ring 1.6s ease-out 0.95s infinite" }}
          />

          <div className="relative overflow-hidden">
            <img
              src="/highstream-mark.png"
              alt="HighStream"
              className="relative z-10 h-40 w-auto md:h-52 drop-shadow-[0_0_45px_rgba(10,162,255,0.7)]"
              style={{ animation: "hs-intro-logo-in 1.2s cubic-bezier(0.22,1,0.36,1) both" }}
            />
            {/* scan sweep */}
            <span
              className="pointer-events-none absolute inset-x-0 top-0 z-20 h-1/3 bg-gradient-to-b from-transparent via-white/70 to-transparent"
              style={{ animation: "hs-intro-scan 1.3s ease-in-out 0.4s 2" }}
            />
          </div>
        </div>

        <div
          className="mt-7 font-display text-2xl font-bold uppercase text-chrome md:text-4xl"
          style={{ animation: "hs-intro-word 1s ease-out 0.5s both" }}
        >
          HighStream
        </div>

        {/* loading bar */}
        <div className="mt-8 h-[3px] w-44 overflow-hidden rounded-full bg-white/10">
          <div
            className="h-full rounded-full bg-electric shadow-[0_0_12px_rgba(10,162,255,0.9)]"
            style={{ animation: "hs-bar 2.6s cubic-bezier(0.4,0,0.2,1) forwards" }}
          />
        </div>
      </div>

      <button
        onClick={finish}
        className="absolute bottom-8 right-8 z-10 text-xs uppercase tracking-[0.25em] text-muted-foreground transition-colors hover:text-foreground"
      >
        Skip
      </button>
    </div>
  );
};

export default IntroOverlay;
