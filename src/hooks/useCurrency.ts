import { useEffect, useState } from "react";

export type Currency = "USD" | "EUR";

// An explicit user choice, once made, persists indefinitely and is never
// overridden by auto-detection.
const MANUAL_KEY = "hs_currency_manual";
// The IP-detected result is cached per browser session so navigating between
// pages doesn't re-hit the lookup API on every mount.
const SESSION_KEY = "hs_currency_ip";

function readStored(key: string, storage: Storage): Currency | null {
  try {
    const v = storage.getItem(key);
    return v === "USD" || v === "EUR" ? v : null;
  } catch {
    return null;
  }
}

function detectFromTimezone(): Currency {
  try {
    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone || "";
    return timeZone.startsWith("Europe/") ? "EUR" : "USD";
  } catch {
    return "USD";
  }
}

/**
 * Currency defaults to a timezone-based guess instantly (no network wait),
 * then upgrades to a real client-side IP lookup (ipapi.co) shortly after —
 * unless the visitor already made an explicit manual choice, which always
 * wins and is never overridden. Any lookup failure (offline, rate-limited,
 * blocked by an ad/privacy extension, slow network) silently keeps whatever
 * is already showing; nothing about the page depends on this succeeding.
 */
export function useCurrency() {
  const manual = () => readStored(MANUAL_KEY, localStorage);

  const [currency, setCurrencyState] = useState<Currency>(
    () => manual() ?? readStored(SESSION_KEY, sessionStorage) ?? detectFromTimezone()
  );

  useEffect(() => {
    if (manual()) return;
    if (readStored(SESSION_KEY, sessionStorage)) return;

    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), 3000);

    fetch("https://ipapi.co/json/", { signal: controller.signal })
      .then((res) => (res.ok ? res.json() : null))
      .then((data: { continent_code?: string } | null) => {
        if (!data) return;
        const detected: Currency = data.continent_code === "EU" ? "EUR" : "USD";
        try {
          sessionStorage.setItem(SESSION_KEY, detected);
        } catch {
          // ignore storage errors (private browsing, etc.)
        }
        setCurrencyState(detected);
      })
      .catch(() => {
        // keep the timezone-based guess already showing
      })
      .finally(() => window.clearTimeout(timeout));

    return () => {
      controller.abort();
      window.clearTimeout(timeout);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const setCurrency = (next: Currency) => {
    setCurrencyState(next);
    try {
      localStorage.setItem(MANUAL_KEY, next);
    } catch {
      // ignore storage errors (private browsing, etc.)
    }
  };

  return { currency, setCurrency };
}
