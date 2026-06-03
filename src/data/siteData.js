import { media, privateSectorLogos, developmentLogos } from './wixMedia';

export { privateSectorLogos, developmentLogos };

export const contact = {
  phone: '+1 617-216-5455, +977 9851431234',
  email: 'info@cantor-dust.com',
  emailAlt: 'info@cantordust.com',
};

export const navLinks = [
  { label: 'HOME', path: '/' },
  { label: 'ABOUT', path: '/about' },
  {
    label: 'SERVICES',
    path: '/services',
    children: [
      { label: 'PHYSICAL-AI', path: '/physicalai' },
      { label: 'GENERAL CONSULTING', path: '/generalconsulting' },
    ],
  },
  { label: 'INSIGHTS', path: '/insights' },
];

export const howWeWorkSteps = [
  {
    title: '1. Discovery & Opportunity Mapping',
    text: 'We start by working closely with client teams to identify high-impact opportunities — focusing on levers such as efficiency, return on investment, or risk reduction.',
  },
  {
    title: '2. Prototype Development & Testing',
    text: 'We translate insights into a minimum viable product — an analysis or tool that demonstrates value. Then, with rigorous methods, we quantify the impact of our solutions.',
  },
  {
    title: '3. Deployment & Transfer',
    text: 'We ensure long-term sustainability by transferring the tools, documentation, and know-how to in-house teams.',
  },
];

export const annotationSteps = [
  {
    title: 'Video Segmentation',
    text: 'We divide each video into precise time segments or individual frames to accurately capture and identify the actions and events occurring within the scene.',
  },
  {
    title: 'Frame-by-Frame Analysis',
    text: 'Our annotators carefully review each frame to identify movements, object interactions, and human actions, ensuring precise and context-aware annotations.',
  },
  {
    title: 'Structured Time Stamping',
    text: 'Every annotation includes detailed metadata such as serial number, start time, stop time, and action description, allowing models to understand temporal sequences effectively.',
  },
  {
    title: 'Fine-Grained Annotation Granularity',
    text: 'We use fine-grained annotation, breaking complex actions into smaller steps to improve AI learning and model accuracy.',
  },
];

export const verticals = [
  {
    title: 'Energy and Climate',
    text: 'Our work includes AI-based electricity demand forecasting, power generation and supply modeling, market and tariff analysis, and infrastructure planning for rapidly evolving energy systems.',
  },
  {
    title: 'Healthcare',
    text: 'We provide pricing optimization, marketplace analytics, and supply chain intelligence for pharmaceutical and laboratory supply chains.',
  },
  {
    title: 'Manufacturing',
    text: 'We help modernize operations by building advanced data systems and analytical tools across the factory floor.',
  },
];

export const serviceTypes = [
  {
    title: 'Research and Analytics',
    text: 'Deep research and data analytics catered for DFIs, MDBs, and government organizations. We deliver sector-specific insights, impact analysis, and evidence-based recommendations to support investment decisions and policy design in frontier and emerging markets.',
  },
  {
    title: 'Custom AI/ML Solutions',
    text: 'We build tailored AI/ML solutions for private-sector organizations. From predictive maintenance and demand forecasting to clinical decision support and process optimization, we design, develop, and deploy intelligent models that seamlessly integrate with your operations and data ecosystem.',
  },
];

export const dataCollection = [
  {
    title: 'Field Surveys',
    text: 'We work with a deep network of industrialists and policymakers to provide firm-level manufacturing surveys, healthcare facility surveys and consumer behavior studies.',
  },
  {
    title: 'Geospatial Data',
    text: 'We provide power infrastructure, industrial site, transportation and logistics mapping, as well as satellite image annotation.',
  },
];

export const insights = [
  {
    title: "From Hydropower to Compute: Nepal's Narrow Window to Become an AI Infrastructure Export Hub",
    image: media.insightHydropower,
    href: 'https://www.cantordust.org/_files/ugd/305fe7_4093eed7dd2a4c379dcc270cee15a6f7.pdf',
  },
  {
    title: "The Debate Over Nepal's 300% Vehicle Tax Misses the Real Issue",
    image: media.insightVehicleTax,
    href: 'https://www.cantordust.org/_files/ugd/8d625e_bccc4f3e3f7f4e2ab3781103c47075a0.pdf',
  },
];

export { media };
