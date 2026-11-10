/**
 * Central configuration for Hire Nexis.
 * Update contact details, navigation, services, and placeholder assets here.
 */

export const siteConfig = {
  name: 'Hire Nexis',
  tagline: 'Premium Staffing & Recruitment',
  description:
    'Hire Nexis helps businesses build stronger teams through strategic staffing, recruitment, and workforce solutions tailored to their needs.',
  url: 'https://www.hirenexis.in',
  contact: {
    email: 'info@hirenexis.in',
    phone: '99663 95396',
    phoneHref: 'tel:99663 95396',
    address: 'Hire Nexis, 1st Floor, Jain Sadhguru Capital Park, Madhapur',
    city: 'Hyderabad, Telangana, 500081',
    hours: 'Monday – Friday, 9:00 AM – 6:00 PM',
  },
  social: {
    // Replace these placeholders with official Hire Nexis profile URLs when available.
    linkedin: 'https://www.linkedin.com/', // CONFIGURE: official LinkedIn profile
    instagram: 'https://www.instagram.com/hirenexis?xtok=MTNlMGgycGI2ZWM0cw==', // CONFIGURE: official Instagram profile
    youtube: 'https://youtube.com/@hirenexis7?si=GkEVSnlacYgOQ6ws', // CONFIGURE: official YouTube channel
  },
  legal: {
    lastUpdated: '17 October 2026',
  },
};

/** Gmail compose URL for navbar "Hire Talent" CTAs */
export function getHireTalentGmailUrl() {
  const params = new URLSearchParams({
    view: 'cm',
    fs: '1',
    to: siteConfig.contact.email,
    su: 'Hiring Inquiry – Hire Nexis',
    body: [
      'Hello Hire Nexis Team,',
      '',
      'I am interested in your talent acquisition and recruitment services. Please share more information about your services and the next steps.',
      '',
      'Thank you.',
    ].join('\n'),
  });

  return `https://crm.hirenexis.in/apply`;
}

export const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  {
    label: 'Our Services',
    path: '/services',
    children: [
      { label: 'Contract Staffing', path: '/services/contract-staffing' },
      { label: 'Permanent Staffing', path: '/services/permanent-staffing' },
    ],
  },
  { label: 'Our Clients', path: '/clients' },
  { label: 'Contact Us', path: '/contact' },
];

export const services = [
  {
    id: 'contract-staffing',
    title: 'Contract Staffing',
    shortTitle: 'Contract Staffing',
    path: '/services/contract-staffing',
    icon: 'Users',
    summary:
      'Flexible workforce solutions for short-term projects, temporary requirements, and changing business demands.',
    heroDescription:
      'Scale your workforce with qualified contract professionals who integrate quickly and deliver when your business needs them most.',
    challenges: [
      'Seasonal or project-based demand that does not justify permanent headcount',
      'Skills gaps that need to be filled quickly without long hiring cycles',
      'Budget constraints that require flexible engagement models',
      'Sudden absences or surges that disrupt operational continuity',
    ],
    howItWorks: [
      'We clarify your role requirements, timeline, and success criteria.',
      'Our team sources candidates aligned to your skills and culture needs.',
      'We coordinate interviews and present shortlisted professionals.',
      'Selected talent joins your team with ongoing support from Hire Nexis.',
    ],
    benefits: [
      'Rapid access to specialized skills',
      'Flexible engagement lengths',
      'Reduced hiring overhead',
      'Ability to scale teams up or down with confidence',
    ],
    scenarios: [
      'Product launches and transformation projects',
      'Peak-season operational support',
      'Specialized technical or domain expertise on demand',
    ],
  },
  {
    id: 'permanent-staffing',
    title: 'Permanent Staffing',
    shortTitle: 'Permanent Staffing',
    path: '/services/permanent-staffing',
    icon: 'Briefcase',
    summary:
      'End-to-end recruitment support to identify and hire professionals for long-term positions.',
    heroDescription:
      'Build lasting teams with a recruitment partner focused on role clarity, candidate quality, and cultural alignment.',
    challenges: [
      'Hard-to-fill roles that require deeper market research',
      'High competition for experienced professionals',
      'Limited internal bandwidth for full-cycle recruitment',
      'Need for consistent hiring quality across multiple openings',
    ],
    howItWorks: [
      'We partner with you to define the role, competencies, and team context.',
      'We run a structured search across active and passive talent pools.',
      'Candidates are evaluated for skills, experience, and role fit.',
      'We support interview coordination through offer and acceptance.',
    ],
    benefits: [
      'Dedicated search for long-term roles',
      'Structured screening and evaluation',
      'Improved candidate experience',
      'Hiring support from intake to onboarding handoff',
    ],
    scenarios: [
      'Leadership and mid-level professional hiring',
      'Building new teams or departments',
      'Replacing critical roles with minimal disruption',
    ],
  },
];

export const industries = [
  { id: 'it', title: 'Information Technology', icon: 'Monitor' },
  { id: 'engineering', title: 'Engineering and Manufacturing', icon: 'Cog' },
  { id: 'bfsi', title: 'Banking and Financial Services', icon: 'Landmark' },
  { id: 'healthcare', title: 'Healthcare and Life Sciences', icon: 'HeartPulse' },
  { id: 'retail', title: 'Retail and E-commerce', icon: 'ShoppingBag' },
  { id: 'operations', title: 'Operations and Business Support', icon: 'ClipboardList' },
];

export const values = [
  {
    title: 'Integrity',
    description: 'We communicate clearly and operate with honesty in every client and candidate interaction.',
  },
  {
    title: 'Collaboration',
    description: 'We work as an extension of your team, aligning our approach to your goals and culture.',
  },
  {
    title: 'Quality',
    description: 'We prioritize thoughtful screening and role alignment over volume-driven hiring.',
  },
  {
    title: 'Accountability',
    description: 'We take ownership of outcomes and stay engaged throughout the hiring journey.',
  },
  {
    title: 'Continuous Improvement',
    description: 'We refine our process based on feedback, market insight, and evolving client needs.',
  },
];

export const whyChoose = [
  {
    title: 'Quality-Driven Recruitment',
    description:
      'We focus on skills, experience, and role fit so every introduction is purposeful.',
    icon: 'BadgeCheck',
  },
  {
    title: 'Industry-Focused Talent Search',
    description:
      'Our searches are shaped by the realities of the industries and roles you hire for.',
    icon: 'Target',
  },
  {
    title: 'Flexible Staffing Models',
    description:
      'Choose contract or permanent staffing support based on what your business needs now.',
    icon: 'Layers',
  },
  {
    title: 'Client-Centric Approach',
    description:
      'We adapt communication, timelines, and delivery to how your organization prefers to work.',
    icon: 'Handshake',
  },
];

export const processSteps = [
  {
    step: 1,
    title: 'Understand Hiring Needs',
    description: 'We align on role requirements, timelines, team context, and success criteria.',
  },
  {
    step: 2,
    title: 'Source Qualified Candidates',
    description: 'We identify professionals who match your technical and organizational needs.',
  },
  {
    step: 3,
    title: 'Screen and Evaluate Talent',
    description: 'Candidates are assessed for skills, experience, and potential role fit.',
  },
  {
    step: 4,
    title: 'Coordinate Interviews',
    description: 'We facilitate a clear interview process and keep both sides informed.',
  },
  {
    step: 5,
    title: 'Support Hiring and Onboarding',
    description: 'We assist through selection and help create a smooth transition for new talent.',
  },
];

export const faqs = [
  {
    question: 'What staffing services does Hire Nexis offer?',
    answer:
      'Hire Nexis provides contract staffing and permanent staffing to support a range of hiring needs.',
  },
  {
    question: 'What is the difference between contract and permanent staffing?',
    answer:
      'Contract staffing supports temporary or project-based roles with flexible engagement lengths. Permanent staffing focuses on identifying professionals for long-term positions within your organization.',
  },
  {
    question: 'How can a company get started with Hire Nexis?',
    answer:
      'Reach out through our Contact page or Get in Touch CTA. We will discuss your hiring goals, recommend a suitable staffing model, and outline next steps for engagement.',
  },
];

export const pageMeta = {
  home: {
    title: 'Hire Nexis | Premium Staffing & Recruitment',
    description:
      'Hire Nexis connects businesses with exceptional talent through contract staffing and permanent recruitment solutions.',
  },
  about: {
    title: 'About Us | Hire Nexis',
    description:
      'Learn about Hire Nexis—our mission, vision, and values as a staffing and recruitment partner.',
  },
  services: {
    title: 'Our Services | Hire Nexis',
    description:
      'Explore Hire Nexis staffing solutions: contract staffing and permanent staffing.',
  },
  clients: {
    title: 'Our Clients | Hire Nexis',
    description:
      'Discover how Hire Nexis partners with organizations to build high-performing teams.',
  },
  contact: {
    title: 'Contact Us | Hire Nexis',
    description:
      'Get in touch with Hire Nexis to discuss your hiring needs and staffing solutions.',
  },
  privacy: {
    title: 'Privacy Policy | Hire Nexis',
    description:
      'Read the Hire Nexis privacy policy regarding website inquiries and recruitment-related information.',
  },
  terms: {
    title: 'Terms and Conditions | Hire Nexis',
    description:
      'Review the terms and conditions for using the Hire Nexis website and related online information.',
  },
  notFound: {
    title: 'Page Not Found | Hire Nexis',
    description: 'The page you are looking for could not be found.',
  },
};

export const serviceInterestOptions = [
  'Contract Staffing',
  'Permanent Staffing',
  'General Inquiry',
];

/**
 * Image paths — replace files in src/assets/images/ or update URLs as needed.
 * Using Unsplash Source images (free license) as professional placeholders.
 */
export const images = {
  hero:
    'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1400&q=80',
  about:
    'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=80',
  intro:
    'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=80',
  mission:
    'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80',
  team:
    'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80',
  clients:
    'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1400&q=80',
  contact:
    'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=80',
  contract:
    'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80',
  permanent:
    'https://images.unsplash.com/photo-1560264280-88b68371db39?auto=format&fit=crop&w=1200&q=80',
  c2h:
    'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&w=1200&q=80',
  rpo:
    'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1200&q=80',
};
