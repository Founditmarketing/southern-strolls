import { useEffect } from 'react';

const SITE_URL = 'https://southernstrolls.la';

interface PageSEOProps {
  title: string;
  description: string;
  canonicalPath: string;
  jsonLd?: object | object[];
}

function upsertMeta(selector: string, attr: string, attrValue: string, content: string) {
  let el = document.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, attrValue);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

export function PageSEO({ title, description, canonicalPath, jsonLd }: PageSEOProps) {
  const jsonLdEntries = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : [];
  const jsonLdKey = jsonLdEntries.length ? JSON.stringify(jsonLdEntries) : '';

  useEffect(() => {
    document.title = title;
    upsertMeta('meta[name="description"]', 'name', 'description', description);
    upsertMeta('meta[property="og:title"]', 'property', 'og:title', title);
    upsertMeta('meta[property="og:description"]', 'property', 'og:description', description);
    upsertMeta('meta[name="twitter:title"]', 'name', 'twitter:title', title);
    upsertMeta('meta[name="twitter:description"]', 'name', 'twitter:description', description);

    let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', `${SITE_URL}${canonicalPath}`);

    const scripts = jsonLdEntries.map((entry) => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.text = JSON.stringify({ '@context': 'https://schema.org', ...entry });
      document.head.appendChild(script);
      return script;
    });

    return () => {
      scripts.forEach((script) => document.head.removeChild(script));
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [title, description, canonicalPath, jsonLdKey]);

  return null;
}
