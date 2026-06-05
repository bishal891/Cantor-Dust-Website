import { media, privateSectorLogos, developmentLogos } from './wixMedia';

export { privateSectorLogos, developmentLogos };

export const contact = {
  phones: ['+1 617-216-5455', '+977 9851431234'],
  email: 'info@cantor-dust.com',
};

export const navLinks = [
  { label: 'HOME', path: '/' },
  { label: 'ABOUT', path: '/about' },
  {
    label: 'SERVICES',
    path: '/services',
    children: [
      { label: 'GENERAL CONSULTING', path: '/generalconsulting' },
      { label: 'PHYSICAL AI', path: '/physicalai' },
    ],
  },
  { label: 'INSIGHTS', path: '/insights' },
];

export const serviceOffers = [
  {
    title: 'General Consulting',
    path: '/generalconsulting',
    description: 'Analytical solutions and insights for energy, healthcare, manufacturing, and complex operational challenges.',
  },
  {
    title: 'Physical AI',
    path: '/physicalai',
    description:
      'Curated datasets for Physical AI. Reliable video and sensor datasets for robotics, embodied AI, and real-world environment training.',
  },
];

export const howWeWorkSteps = [
  {
    title: '1. Discovery & Opportunity Mapping',
    text: 'We start by working closely with client teams to identify high-impact opportunities — focusing on levers such as efficiency, return on investment, or risk reduction.',
  },
  {
    title: '2. Prototype Development & Testing',
    text: 'We translate insights into a focused prototype — an analysis or tool that demonstrates value. Then, with rigorous methods, we quantify the impact of our solutions.',
  },
  {
    title: '3. Deployment & Transfer',
    text: 'We ensure long-term sustainability by transferring the tools, documentation, and know-how to in-house teams.',
  },
];

export const physicalAiIntro =
  'We build reliable datasets from real-world industrial environments to support robotics and embodied AI. By collecting extensive video and sensor data from industrial settings, we enable training of models that understand and operate in complex physical environments. Our curated data ensures accuracy, consistency, and scalability — helping AI systems perceive, adapt, and perform tasks safely in dynamic conditions.';

export const physicalIntroAnnotationRows = [
  {
    sn: 1,
    start: '00:00',
    end: '00:01',
    description: 'Left hand grabs the football on the ground.',
  },
  {
    sn: 2,
    start: '00:01',
    end: '00:02',
    description: 'Right hand grabs the football on the ground.',
  },
  {
    sn: 3,
    start: '00:02',
    end: '00:03',
    description: 'Both hands pick up the football from the ground.',
  },
  {
    sn: 4,
    start: '00:03',
    end: '00:04',
    description: 'Both hands release the football on the ground.',
  },
  {
    sn: 5,
    start: '00:04',
    end: '00:05',
    description: 'Right leg move towards the football on the ground.',
  },
];

export const annotationExampleRows = [
  {
    sn: 1,
    start: '00:00.00',
    end: '00:00.37',
    description: 'Left hand picks up the tweezers from the laboratory bench.',
  },
  {
    sn: 2,
    start: '00:00.37',
    end: '00:00.99',
    description: 'Left hand places the tweezer on the laboratory bench.',
  },
  {
    sn: 3,
    start: '00:00.99',
    end: '00:01.81',
    description: 'Right hand grasps the tweezer on the laboratory bench.',
  },
  {
    sn: 4,
    start: '00:01.81',
    end: '00:02.08',
    description: 'Right hand picks up the tweezer from the laboratory bench.',
  },
  {
    sn: 5,
    start: '00:02.08',
    end: '00:03.16',
    description: 'Right hand tweezes the filter paper into the glass pot.',
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
    title: 'Structured Timestamping',
    text: 'Every annotation includes detailed metadata such as sequence number, start time, end time, and action description, allowing models to understand temporal sequences effectively.',
  },
  {
    title: 'Fine-Grained Annotation Granularity',
    text: 'We use fine-grained annotation, breaking complex actions into smaller steps (e.g., hand reaches, grabs, lifts) to improve AI learning and model accuracy.',
  },
  {
    title: 'Professional Annotation Tools',
    text: 'We use industry-standard tools such as CVAT to perform scalable video annotation, enabling efficient frame navigation, object tracking, and structured labeling.',
  },
  {
    title: 'Multi-Level Quality Assurance',
    text: 'All annotations go through multiple review stages to ensure accuracy, consistency, and high-quality datasets before delivery to the client.',
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
    text: 'Deep research and data analytics tailored for DFIs, MDBs, and government organizations. We deliver sector-specific insights, impact analysis, and evidence-based recommendations to support investment decisions and policy design in frontier and emerging markets.',
  },
  {
    title: 'Custom AI/ML Solutions',
    text: 'We build tailored AI/ML solutions for private-sector organizations. From predictive maintenance and demand forecasting to clinical decision support and process optimization, we design, develop, and deploy intelligent models that seamlessly integrate with your operations and data ecosystem.',
  },
];

export const dataCollection = [
  {
    title: 'Field Surveys',
    icon: 'survey',
    text: 'We work with a deep network of industrialists and policymakers to provide firm-level manufacturing surveys, healthcare facility surveys, and consumer behavior studies.',
  },
  {
    title: 'Geospatial Data',
    icon: 'geospatial',
    text: 'We provide power infrastructure, industrial site, transportation and logistics mapping, as well as satellite image annotation.',
  },
];

export const insights = [
  {
    title: "From Hydropower to Compute: Nepal's Narrow Window to Become an AI Infrastructure Export Hub",
    image: media.insightHydropower,
    href: '/assets/insights/hydropower-compute.pdf',
  },
  {
    title: "The Debate Over Nepal's 300% Vehicle Tax Misses the Real Issue",
    image: media.insightVehicleTax,
    href: '/assets/insights/vehicle-tax.pdf',
  },
];

export { media };
