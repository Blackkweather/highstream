import { useEffect, useState } from "react";

export type Currency = "USD" | "EUR";

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
 * Currency is detected, never chosen: it starts from a timezone-based guess
 * instantly (no network wait), then upgrades to a real client-side IP lookup
 * (ipapi.co) shortly after. Any lookup failure (offline, rate-limited, blocked
 * by an ad/privacy extension, slow network) silently keeps whatever is already
 * showing; nothing about the page depends on this succeeding.
 *
 * Only the symbol changes by region — the price numbers are identical
 * everywhere — so a wrong guess is cosmetic.
 */
export function useCurrency(): Currency {
  const [currency, setCurrency] = useState<Currency>(
    () => readStored(SESSION_KEY, sessionStorage) ?? detectFromTimezone()
  );

  useEffect(() => {
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
        setCurrency(detected);
      })
      .catch(() => {
        // keep the timezone-based guess already showing
      })
      .finally(() => window.clearTimeout(timeout));

    return () => {
      controller.abort();
      window.clearTimeout(timeout);
    };
  }, []);

  return currency;
}
