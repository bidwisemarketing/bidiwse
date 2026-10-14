/**
 * Central verified brand and contact configuration for BidWise Marketing.
 * Preserves all verified business contact details, locations, and brand identity.
 */

export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  pillar: 'Growth & Paid Media' | 'Search & Content' | 'Design & Development' | 'Automation & Measurement';
  badge: string;
  highlights: string[];
  scope: string[];
  deliverables: string[];
  whoFor: string;
  howMeasured: string;
  faqs: { q: string; a: string }[];
}

export const BRAND_CONFIG = {
  name: 'BIDWISE MARKETING',
  legalName: 'BIDWISE MARKETING',
  tagline: 'Smarter Marketing. Predictable Revenue.',
  shortDescription: 'Full-service digital growth agency specialising in Paid Advertising, SEO & AEO, Conversion Web Design, and AI Automations.',
  domain: 'https://bidwise.marketing',
  canonicalUrl: 'https://bidwise.marketing',
  logo: '/logo.png',
  logoDark: '/logo-dark.png',
  
  // Official Corporate & Contact Details
  contact: {
    email: 'info@bidwise.marketing',
    notificationEmail: 'mohammadbilal671@gmail.com',
    phoneDisplay: '+1 302 626 7596',
    phoneTel: '+13026267596',
    whatsappUrl: 'https://wa.me/13026267596?text=Hello%20BidWise%20Marketing,%20I%20have%20an%20inquiry%20about%20your%20services.',
    address: {
      street: 'OFFICE 301, 254 CHAPMAN RD, SUITE 101-B',
      city: 'NEWARK',
      state: 'DELAWARE',
      postalCode: '19702',
      country: 'UNITED STATES',
      countryCode: 'US',
    },
    hours: 'Mon - Fri: 09:00 - 18:00 EST',
  },

  // Senior Performance Team Information
  founder: {
    name: 'BidWise Growth Team',
    role: 'Certified Google Partner Specialists',
    credentials: 'Certified Google Partner with 9+ years experience & 700+ clients scaled',
    image: '/hero-portrait.jpg',
    bio: 'Certified Google Partner specialists with nearly a decade of continuous experience scaling lead generation, Google Ads, and ecommerce brands across the United States and globally.',
  },

  // Analytics & Tracking IDs
  tracking: {
    gtmId: 'GTM-5R446PVQ',
    googleSiteVerification: 'gZpcfLD3YEWwsIqzldaEjcEew2Dul3tFy96b06C3qnU',
  },

  // Navigation Links
  navigation: {
    main: [
      { label: 'Home', href: '/' },
      { label: 'Services', href: '/services/' },
      { label: 'About', href: '/about/' },
      { label: 'Insights', href: '/insights/' },
      { label: 'Free Ads Audit', href: '/free-google-ads-audit/', highlight: true },
      { label: 'Contact', href: '/contact/' },
    ],
    servicePillars: [
      {
        title: 'Growth & Paid Media',
        description: 'Predictable buyer acquisition across high-intent search, social, and video channels.',
        links: [
          { label: 'Paid Advertising Hub', href: '/services/paid-advertising/' },
          { label: 'Google Ads Management', href: '/services/google-ads/' },
          { label: 'Meta Ads (FB & IG)', href: '/services/meta-ads/' },
          { label: 'TikTok Ads', href: '/services/tiktok-ads/' },
          { label: 'LinkedIn B2B Ads', href: '/services/linkedin-ads/' },
        ],
      },
      {
        title: 'Search & Content',
        description: 'Authority, organic search, and modern answer engine discovery.',
        links: [
          { label: 'Technical & Organic SEO', href: '/services/seo/' },
          { label: 'AEO & GEO (AI Answer Engines)', href: '/services/aeo-geo/' },
          { label: 'Content Marketing Strategy', href: '/services/content-marketing/' },
          { label: 'Social Media Marketing', href: '/services/social-media-marketing/' },
        ],
      },
      {
        title: 'Design & Development',
        description: 'Ultra-fast, conversion-engineered digital storefronts and digital products.',
        links: [
          { label: 'Web Design & Development', href: '/services/web-design/' },
          { label: 'App & Product UI/UX Design', href: '/services/app-design/' },
          { label: 'Email & Lifecycle Marketing', href: '/services/email-marketing/' },
        ],
      },
      {
        title: 'Automation & Measurement',
        description: 'Flawless server-side telemetry, conversion testing, and AI-driven workflows.',
        links: [
          { label: 'AI Business Automations', href: '/services/ai-automation/' },
          { label: 'Conversion Rate Optimisation (CRO)', href: '/services/conversion-rate-optimisation/' },
          { label: 'Analytics & Conversion Tracking', href: '/services/analytics-tracking/' },
        ],
      },
    ],
  },
};
