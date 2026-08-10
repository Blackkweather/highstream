import { useState } from "react";

export type Currency = "USD" | "EUR";

const STORAGE_KEY = "hs_currency";

function detectDefaultCurrency(): Currency {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "USD" || stored === "EUR") return stored;

    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone || "";
    return timeZone.startsWith("Europe/") ? "EUR" : "USD";
  } catch {
    return "USD";
  }
}

/**
 * Picks a default currency from the visitor's timezone (a reliable, zero-risk
 * proxy for region that needs no server-side geolocation), remembers an
 * explicit user override in localStorage.
 */
export function useCurrency() {
  const [currency, setCurrencyState] = useState<Currency>(detectDefaultCurrency);

  const setCurrency = (next: Currency) => {
    setCurrencyState(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // ignore storage errors (private browsing, etc.)
    }
  };

  return { currency, setCurrency };
}
