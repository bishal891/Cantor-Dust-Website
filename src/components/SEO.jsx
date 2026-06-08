import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import {
  SITE_NAME,
  SITE_URL,
  getBreadcrumbJsonLd,
  getCanonicalUrl,
  getOrganizationJsonLd,
  getPageSeo,
  getServiceJsonLd,
  getWebSiteJsonLd,
} from '../data/seoData';

function upsertMeta(attribute, key, content) {
  if (!content) return;

  const selector = `meta[${attribute}="${key}"]`;
  let element = document.head.querySelector(selector);

  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }

  element.setAttribute('content', content);
}

function upsertLink(rel, href) {
  if (!href) return;

  const selector = `link[rel="${rel}"]`;
  let element = document.head.querySelector(selector);

  if (!element) {
    element = document.createElement('link');
    element.setAttribute('rel', rel);
    document.head.appendChild(element);
  }

  element.setAttribute('href', href);
}

function upsertJsonLd(id, data) {
  if (!data) {
    document.getElementById(id)?.remove();
    return;
  }

  let element = document.getElementById(id);

  if (!element) {
    element = document.createElement('script');
    element.id = id;
    element.type = 'application/ld+json';
    document.head.appendChild(element);
  }

  element.textContent = JSON.stringify(data);
}

export default function SEO() {
  const { pathname } = useLocation();

  useEffect(() => {
    const seo = getPageSeo(pathname);
    const canonicalUrl = getCanonicalUrl(pathname);
    const imageUrl = seo.image?.startsWith('http') ? seo.image : `${SITE_URL}${seo.image}`;

    document.title = seo.title;

    upsertMeta('name', 'description', seo.description);
    upsertMeta('name', 'keywords', seo.keywords);
    upsertMeta('name', 'robots', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
    upsertMeta('name', 'author', SITE_NAME);
    upsertMeta('name', 'application-name', SITE_NAME);

    upsertLink('canonical', canonicalUrl);

    upsertMeta('property', 'og:site_name', SITE_NAME);
    upsertMeta('property', 'og:title', seo.title);
    upsertMeta('property', 'og:description', seo.description);
    upsertMeta('property', 'og:type', seo.type);
    upsertMeta('property', 'og:url', canonicalUrl);
    upsertMeta('property', 'og:image', imageUrl);
    upsertMeta('property', 'og:image:alt', `${SITE_NAME} logo`);
    upsertMeta('property', 'og:locale', 'en_US');

    upsertMeta('name', 'twitter:card', 'summary_large_image');
    upsertMeta('name', 'twitter:title', seo.title);
    upsertMeta('name', 'twitter:description', seo.description);
    upsertMeta('name', 'twitter:image', imageUrl);
    upsertMeta('name', 'twitter:image:alt', `${SITE_NAME} logo`);

    upsertJsonLd('seo-organization', getOrganizationJsonLd());
    upsertJsonLd('seo-website', pathname === '/' ? getWebSiteJsonLd() : null);
    upsertJsonLd('seo-breadcrumb', getBreadcrumbJsonLd(pathname));
    upsertJsonLd('seo-service', getServiceJsonLd(pathname));
  }, [pathname]);

  return null;
}
