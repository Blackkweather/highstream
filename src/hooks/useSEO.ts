import { useEffect } from "react";

type SEOInput = {
  title: string;
  description?: string;
  /** path is optional; defaults to the current location */
  path?: string;
  image?: string;
  /** set true on pages that should not be indexed (404, internal utility pages) */
  noindex?: boolean;
};

const BRAND = "HighStream";
const DEFAULT_DESC =
  "Premium IPTV with 35,000+ live channels and 120,000+ movies in 4K. Anti-freeze technology, 99.9% uptime, instant setup on any device.";
const DEFAULT_IMAGE = "/android-chrome-512x512.png";

function setMeta(attr: "name" | "property", key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setLink(rel: string, href: string) {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

/**
 * Sets a unique <title>, description, canonical URL and Open Graph / Twitter
 * tags per route. Canonical + og:url derive from the live origin, so they are
 * always correct on whatever domain the site is deployed to.
 */
export function useSEO({ title, description, path, image, noindex }: SEOInput) {
  const desc = description ?? DEFAULT_DESC;
  const img = image ?? DEFAULT_IMAGE;
  const fullTitle = title.includes(BRAND) ? title : `${title} | ${BRAND}`;

  useEffect(() => {
    const origin = typeof window !== "undefined" ? window.location.origin : "";
    const url = origin + (path ?? window.location.pathname);
    const absImg = img.startsWith("http") ? img : origin + img;

    document.title = fullTitle;
    setMeta("name", "description", desc);

    setMeta("property", "og:title", fullTitle);
    setMeta("property", "og:description", desc);
    setMeta("property", "og:url", url);
    setMeta("property", "og:image", absImg);
    setMeta("property", "og:type", "website");
    setMeta("property", "og:site_name", BRAND);

    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:title", fullTitle);
    setMeta("name", "twitter:description", desc);
    setMeta("name", "twitter:image", absImg);

    setLink("canonical", url);
    setMeta("name", "robots", noindex ? "noindex, nofollow" : "index, follow");
  }, [fullTitle, desc, img, path, noindex]);
}

export default useSEO;
