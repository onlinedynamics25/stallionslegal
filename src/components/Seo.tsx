import { useEffect } from "react";

type MetaTag = { name?: string; property?: string; content: string };

interface SeoProps {
  title: string;
  description?: string;
  canonical?: string;
  meta?: MetaTag[];
  jsonLd?: Record<string, unknown>;
}

/**
 * Sets document head tags for the current route (client-side).
 */
export default function Seo({ title, description, canonical, meta = [], jsonLd }: SeoProps) {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = title;

    const created: Element[] = [];

    const upsert = (selector: string, create: () => Element) => {
      let el = document.head.querySelector(selector);
      if (!el) {
        el = create();
        document.head.appendChild(el);
        created.push(el);
      }
      return el;
    };

    const allMeta: MetaTag[] = [
      ...(description ? [{ name: "description", content: description }] : []),
      ...meta,
    ];

    const touched: Array<{ el: Element; attr: string; previous: string | null }> = [];

    allMeta.forEach(({ name, property, content }) => {
      const selector = name ? `meta[name="${name}"]` : `meta[property="${property}"]`;
      const el = upsert(selector, () => {
        const m = document.createElement("meta");
        if (name) m.setAttribute("name", name);
        if (property) m.setAttribute("property", property);
        return m;
      });
      touched.push({ el, attr: "content", previous: el.getAttribute("content") });
      el.setAttribute("content", content);
    });

    if (canonical) {
      const el = upsert('link[rel="canonical"]', () => {
        const l = document.createElement("link");
        l.setAttribute("rel", "canonical");
        return l;
      });
      touched.push({ el, attr: "href", previous: el.getAttribute("href") });
      el.setAttribute("href", canonical);
    }

    let ldScript: HTMLScriptElement | null = null;
    if (jsonLd) {
      ldScript = document.createElement("script");
      ldScript.type = "application/ld+json";
      ldScript.dataset.routeSeo = "true";
      ldScript.textContent = JSON.stringify(jsonLd);
      document.head.appendChild(ldScript);
    }

    return () => {
      document.title = previousTitle;
      touched.forEach(({ el, attr, previous }) => {
        if (created.includes(el)) return;
        if (previous === null) el.removeAttribute(attr);
        else el.setAttribute(attr, previous);
      });
      created.forEach((el) => el.remove());
      ldScript?.remove();
    };
  }, [title, description, canonical, JSON.stringify(meta), JSON.stringify(jsonLd ?? null)]);

  return null;
}
