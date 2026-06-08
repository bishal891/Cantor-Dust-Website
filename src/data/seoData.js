export const SITE_URL = 'https://www.cantordust.org';
export const SITE_NAME = 'Cantor Dust';
export const SITE_TAGLINE = 'Intelligence for complex real-world environments.';
export const DEFAULT_OG_IMAGE = `${SITE_URL}/assets/logo.png`;
export const CONTACT_EMAIL = 'info@cantor-dust.com';

export const defaultSeo = {
  title: `${SITE_NAME} | ${SITE_TAGLINE}`,
  description:
    'Cantor Dust delivers AI/ML consulting, analytics, and curated Physical AI datasets for energy, healthcare, manufacturing, and robotics teams worldwide.',
  keywords:
    'Cantor Dust, AI consulting, machine learning, Physical AI, robotics datasets, embodied AI, energy analytics, healthcare analytics, manufacturing AI, data annotation, video annotation',
  image: DEFAULT_OG_IMAGE,
  type: 'website',
};

/** Per-route SEO metadata (path → config). */
export const pageSeo = {
  '/': {
    title: `${SITE_NAME} | ${SITE_TAGLINE}`,
    description:
      'Cantor Dust helps organizations solve complex operational and analytical challenges across energy, healthcare, manufacturing, and Physical AI with expert consulting and curated real-world datasets.',
    keywords:
      'Cantor Dust, AI consulting, operational intelligence, Physical AI, energy and climate analytics, healthcare AI, manufacturing data systems',
    type: 'website',
  },
  '/about': {
    title: `About Us | ${SITE_NAME}`,
    description:
      'Meet the Cantor Dust leadership and team — experts in AI/ML, energy, climate, healthcare, and manufacturing delivering bespoke analytical solutions worldwide.',
    keywords:
      'Cantor Dust team, AI experts, machine learning consultants, leadership, about Cantor Dust',
    type: 'website',
  },
  '/services': {
    title: `Services | ${SITE_NAME}`,
    description:
      'Explore Cantor Dust services: General Consulting for energy, healthcare, and manufacturing, plus curated Physical AI datasets for robotics and embodied AI.',
    keywords:
      'Cantor Dust services, AI consulting services, Physical AI datasets, general consulting, robotics training data',
    type: 'website',
  },
  '/physicalai': {
    title: `Physical AI Datasets | ${SITE_NAME}`,
    description:
      'Curated video and sensor datasets from real industrial environments for robotics, embodied AI, and physical world model training — with fine-grained annotation and QA.',
    keywords:
      'Physical AI, robotics datasets, embodied AI, video annotation, sensor data, industrial AI training data, CVAT annotation',
    type: 'website',
  },
  '/generalconsulting': {
    title: `General Consulting | ${SITE_NAME}`,
    description:
      'Analytical consulting for energy and climate, healthcare, and manufacturing — including custom AI/ML solutions, research, field surveys, and geospatial data.',
    keywords:
      'AI consulting, energy analytics, healthcare AI, manufacturing analytics, custom ML solutions, geospatial data, field surveys',
    type: 'website',
  },
  '/insights': {
    title: `Insights & Research | ${SITE_NAME}`,
    description:
      'Research and insights from Cantor Dust — advanced analytics, market research, and policy analysis on energy, infrastructure, and emerging markets.',
    keywords:
      'Cantor Dust insights, AI research, energy policy, market research, infrastructure analysis',
    type: 'website',
  },
};

export function getPageSeo(pathname) {
  const config = pageSeo[pathname];
  if (!config) return { ...defaultSeo };

  return {
    ...defaultSeo,
    ...config,
    title: config.title ?? defaultSeo.title,
    description: config.description ?? defaultSeo.description,
  };
}

export function getCanonicalUrl(pathname) {
  if (pathname === '/') return `${SITE_URL}/`;
  return `${SITE_URL}${pathname}`;
}

const breadcrumbLabels = {
  '/': 'Home',
  '/about': 'About',
  '/services': 'Services',
  '/physicalai': 'Physical AI',
  '/generalconsulting': 'General Consulting',
  '/insights': 'Insights',
};

export function getBreadcrumbJsonLd(pathname) {
  const label = breadcrumbLabels[pathname];
  if (!label) return null;

  const items = [{ name: 'Home', url: `${SITE_URL}/` }];

  if (pathname !== '/') {
    items.push({ name: label, url: getCanonicalUrl(pathname) });
  }

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function getOrganizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
    logo: DEFAULT_OG_IMAGE,
    email: CONTACT_EMAIL,
    description: defaultSeo.description,
    sameAs: [],
  };
}

export function getWebSiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: SITE_URL,
    description: defaultSeo.description,
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      logo: DEFAULT_OG_IMAGE,
    },
  };
}

export function getServiceJsonLd(pathname) {
  if (pathname === '/physicalai') {
    return {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Physical AI Datasets',
      provider: { '@type': 'Organization', name: SITE_NAME, url: SITE_URL },
      description: pageSeo['/physicalai'].description,
      url: getCanonicalUrl('/physicalai'),
      areaServed: 'Worldwide',
      serviceType: 'Physical AI data curation and video annotation',
    };
  }

  if (pathname === '/generalconsulting') {
    return {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'General Consulting',
      provider: { '@type': 'Organization', name: SITE_NAME, url: SITE_URL },
      description: pageSeo['/generalconsulting'].description,
      url: getCanonicalUrl('/generalconsulting'),
      areaServed: 'Worldwide',
      serviceType: 'AI/ML consulting and analytics',
    };
  }

  return null;
}

export const sitemapRoutes = [
  { path: '/', priority: '1.0', changefreq: 'weekly' },
  { path: '/about', priority: '0.8', changefreq: 'monthly' },
  { path: '/services', priority: '0.9', changefreq: 'monthly' },
  { path: '/physicalai', priority: '0.9', changefreq: 'monthly' },
  { path: '/generalconsulting', priority: '0.9', changefreq: 'monthly' },
  { path: '/insights', priority: '0.7', changefreq: 'weekly' },
];
