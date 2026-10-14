export interface ServiceDetail {
  slug: string;
  title: string;
  shortTitle: string;
  pillar: 'Growth & Paid Media' | 'Search & Content' | 'Design & Development' | 'Automation & Measurement';
  badge: string;
  metaTitle: string;
  metaDescription: string;
  heroHeadline: string;
  heroSubheadline: string;
  whoFor: string[];
  problemSolved: string;
  scopeList: string[];
  deliverables: string[];
  process: { step: string; title: string; description: string }[];
  platformsAndTools: string[];
  metricsAndMeasurement: string[];
  boundaries: string;
  faqs: { q: string; a: string }[];
  relatedServices: { slug: string; title: string; desc: string }[];
}

export const SERVICES_DATA: Record<string, ServiceDetail> = {
  'paid-advertising': {
    slug: 'paid-advertising',
    title: 'Multi-Channel Paid Advertising Hub',
    shortTitle: 'Paid Advertising',
    pillar: 'Growth & Paid Media',
    badge: 'Multi-Channel Acquisition',
    metaTitle: 'Paid Advertising Agency | Google, Meta, TikTok & LinkedIn Ads | BidWise',
    metaDescription: 'Full-funnel paid media management across Google, Meta, TikTok, and LinkedIn. Scientific bidding, rigorous creative testing, and transparent reporting.',
    heroHeadline: 'Multi-Channel Paid Media Engineered for Profitable Scale.',
    heroSubheadline: 'We align commercial intent, creative strategy, and server-side tracking across Google, Meta, TikTok, and LinkedIn to generate predictable pipeline and ecommerce revenue.',
    whoFor: [
      'Growth-stage brands spending $5k to $100k+ monthly across search and social channels',
      'Ecommerce brands seeking resilient multi-touch attribution and higher blended ROAS',
      'B2B firms requiring high-intent search capture alongside LinkedIn decision-maker targeting',
      'Businesses experiencing plateaus on a single ad platform needing cross-channel diversification'
    ],
    problemSolved: 'Relying on a single advertising network creates volatile customer acquisition costs. BidWise develops synchronized multi-channel media architectures that capture existing demand on search while generating new demand across paid social and video.',
    scopeList: [
      'Cross-platform budget allocation and margin-aware bidding models',
      'Account architecture restructuring and audience taxonomy alignment',
      'Continuous creative sprint testing (video hooks, static variants, ad copy)',
      'Server-side Conversion API (CAPI) and Google Consent Mode v2 implementation',
      'Weekly performance iterations and consolidated executive reporting'
    ],
    deliverables: [
      'Comprehensive Multi-Channel Growth Blueprint',
      'Clean account re-architecture across Google, Meta, TikTok, and LinkedIn',
      'Bi-weekly ad creative refresh briefs and copy iterations',
      'Real-time custom GA4 and Looker Studio performance dashboard',
      'Direct Slack/WhatsApp communication channel with senior media buyers'
    ],
    process: [
      { step: '01', title: 'Audit & Diagnostic', description: 'Deep-dive into historic channel efficiency, wasted budget, tracking leakages, and competitor ad libraries.' },
      { step: '02', title: 'Strategy & Architecture', description: 'Build platform-specific funnels, audience matrices, budget weighting, and creative testing frameworks.' },
      { step: '03', title: 'Tracking & Launch', description: 'Deploy server-side event telemetry, build segmented campaigns, and launch with controlled bid thresholds.' },
      { step: '04', title: 'Iterative Optimization', description: 'Prune non-performing queries/audiences weekly while scaling top-performing creative angles.' },
      { step: '05', title: 'Scale & Automation', description: 'Expand into incremental channels and implement automated budget shifting rules to protect blended ROAS.' }
    ],
    platformsAndTools: ['Google Ads', 'Meta Ads Manager', 'TikTok Ads Manager', 'LinkedIn Campaign Manager', 'Google Tag Manager', 'Looker Studio'],
    metricsAndMeasurement: ['Blended Customer Acquisition Cost (CAC)', 'Return on Ad Spend (ROAS)', 'Cost Per Qualified Lead (CPQL)', 'Click-Through Rate (CTR)', 'Conversion Rate (CvR)'],
    boundaries: 'Ad spend is paid directly to advertising platforms by the client. Creative asset production scope is defined per engagement; stock library licensing and raw video footage shoot coordination are scoped separately.',
    faqs: [
      { q: 'How do you allocate budget between Google and Social ad networks?', a: 'We allocate budget based on purchase intent. High-intent search on Google Ads captures immediate buyers, while paid social (Meta, TikTok, LinkedIn) introduces your offer to prospective buyers. We adjust weights based on incremental customer acquisition cost.' },
      { q: 'Do you manage ad accounts directly in our ad accounts?', a: 'Yes. You retain 100% ownership of your ad accounts, pixels, and payment profiles. BidWise accesses your assets via agency partner manager permissions.' },
      { q: 'What is the minimum ad spend required?', a: 'We typically recommend a minimum monthly media budget of $3,000 across channels to generate statistically meaningful testing velocity and algorithm learning.' }
    ],
    relatedServices: [
      { slug: 'google-ads', title: 'Google Ads Management', desc: 'Capture active searchers with precision Search, Shopping, and Performance Max campaigns.' },
      { slug: 'meta-ads', title: 'Meta Ads (Facebook & Instagram)', desc: 'Scale conversion volume with high-converting creative testing and lookalike targeting.' },
      { slug: 'analytics-tracking', title: 'Analytics & Tracking', desc: 'Implement first-party server-side tracking to restore signal clarity.' }
    ]
  },

  'google-ads': {
    slug: 'google-ads',
    title: 'Google Ads & PPC Performance Management',
    shortTitle: 'Google Ads',
    pillar: 'Growth & Paid Media',
    badge: 'Certified Google Partner',
    metaTitle: 'Google Ads Agency | Search, Shopping & PMax Management | BidWise',
    metaDescription: 'Eliminate wasted spend and scale high-intent traffic with certified Google Partner specialists. Search, Shopping, Performance Max, Display & YouTube management.',
    heroHeadline: 'Capture High-Intent Buyers. Eliminate Wasted Google Ad Spend.',
    heroSubheadline: 'Certified Google Partner management with over 9 years of hands-on optimization. We engineer search campaigns, Shopping feeds, and Performance Max structures that turn searchers into profitable revenue.',
    whoFor: [
      'Ecommerce stores losing margin to unsegmented Performance Max campaigns',
      'Service businesses and B2B companies getting irrelevant search queries and low-quality leads',
      'Brands running Google Ads internally without systematic negative keyword management or bid script hygiene',
      'Businesses suffering from suspended Google Merchant Center accounts or broken conversion tracking'
    ],
    problemSolved: 'Broad match drift, unmonitored search term cannibalization, and automated Smart Bidding without conversion value weighting waste thousands every month. We enforce disciplined structural controls and negative match lists that protect your budget.',
    scopeList: [
      'Single-Theme Ad Group (STAG) search structuring and tight intent matching',
      'Performance Max asset group segmentation and search theme exclusions',
      'Negative keyword sculpting and daily search term query mining',
      'Google Shopping product feed optimization and title attribute enrichment',
      'Target CPA / Target ROAS algorithmic bid calibration and value rules',
      'Google Merchant Center compliance and suspension troubleshooting'
    ],
    deliverables: [
      'Cleaned, restructured Google Ads account architecture',
      'Master negative keyword lists and brand protection campaigns',
      'High-converting responsive search ad (RSA) copy with dynamic insertions',
      'Enhanced conversion tracking via Google Tag Manager & Consent Mode v2',
      'Monthly strategic roadmap and transparent Looker Studio dashboard'
    ],
    process: [
      { step: '01', title: 'Full Account Audit', description: 'Analyze 90+ days of historical search queries, wasted budget, Quality Scores, and conversion attribution.' },
      { step: '02', title: 'Re-structuring & Feed Hygiene', description: 'Rebuild campaign structures to isolate branded vs non-branded intent and optimize Google Merchant Center feeds.' },
      { step: '03', title: 'Conversion Tracking Validation', description: 'Deploy Enhanced Conversions, primary vs secondary action hierarchies, and server-side verification.' },
      { step: '04', title: 'Bidding & Creative Optimization', description: 'Train Smart Bidding algorithms with clean signals while split-testing ad copy headlines and assets.' },
      { step: '05', title: 'Scale & Feed Optimization', description: 'Expand into profitable keyword clusters and scale budget where ROAS/CPA thresholds are consistently met.' }
    ],
    platformsAndTools: ['Google Search', 'Google Shopping', 'Performance Max', 'YouTube Ads', 'Google Merchant Center', 'Google Tag Manager'],
    metricsAndMeasurement: ['Return on Ad Spend (ROAS)', 'Cost Per Acquisition (CPA)', 'Search Impression Share', 'Conversion Value / Cost', 'Quality Score Average'],
    boundaries: 'Ad spend is billed directly by Google. Ad copy creation and landing page feedback are included; full landing page redesigns or new development are handled through our Web Design service.',
    faqs: [
      { q: 'How does your FREE Google Ads Audit work?', a: 'Our audit is a comprehensive manual analysis conducted by certified Google Partner specialists. We inspect search terms for wasted spend, audit negative keyword coverage, verify conversion tracking accuracy, and identify immediate ROAS improvements.' },
      { q: 'Do you manage Google Merchant Center suspensions?', a: 'Yes. We audit your website against Google Shopping policies, resolve misrepresentation and tax/shipping issues, update your product feeds, and submit verified appeals directly to Google.' },
      { q: 'Will I work with an account manager or a senior specialist?', a: 'You work directly with senior certified Google Partner specialists who bring 9+ years of dedicated PPC experience. Zero junior pass-offs.' }
    ],
    relatedServices: [
      { slug: 'paid-advertising', title: 'Paid Advertising Hub', desc: 'Expand your capture strategy with multi-platform acquisition.' },
      { slug: 'analytics-tracking', title: 'Analytics & Tracking', desc: 'Ensure every Google Ads click is accurately measured in GA4.' },
      { slug: 'conversion-rate-optimisation', title: 'Conversion Rate Optimisation', desc: 'Maximize revenue per ad click on your key landing pages.' }
    ]
  },

  'meta-ads': {
    slug: 'meta-ads',
    title: 'Meta Ads (Facebook & Instagram) Growth',
    shortTitle: 'Meta Ads',
    pillar: 'Growth & Paid Media',
    badge: 'Facebook & Instagram Scaling',
    metaTitle: 'Meta Ads Agency | Facebook & Instagram Paid Advertising | BidWise',
    metaDescription: 'Scale profitably on Facebook & Instagram. Systematic creative testing, Conversion API (CAPI) integration, and value-based bidding.',
    heroHeadline: 'Turn Attention into Customers with High-Performance Meta Ads.',
    heroSubheadline: 'We combine compelling direct-response creative frameworks with first-party data targeting and Meta Conversion API infrastructure to generate consistent ecommerce and lead acquisition.',
    whoFor: [
      'Ecommerce brands suffering from iOS tracking degradation and volatile Meta ROAS',
      'DTC and consumer services needing high-volume creative testing to beat ad fatigue',
      'Lead generation businesses seeking qualified form fills and appointment bookings'
    ],
    problemSolved: 'Ad fatigue and weak tracking signals burn cash on Meta. We solve this through rapid creative iteration (hook, concept, angle variations) paired with server-side CAPI signals that feed Meta’s AI engine high-value purchase data.',
    scopeList: [
      'Full-funnel campaign structure (Broad targeting, Lookalikes, and Engaged Retargeting)',
      'Meta Conversions API (CAPI) server-side integration with 8.0+ Event Quality Score',
      'Creative strategy briefs covering static visuals, UGC frameworks, and carousel concepts',
      'Cost-per-result and target ROAS bid cap management',
      'Advantage+ Shopping Campaign (ASC) orchestration and catalog optimization'
    ],
    deliverables: [
      'Modern, uncluttered Meta Ads account structure',
      'Bi-weekly creative sprint briefs with proven direct-response hooks',
      'Direct CAPI server telemetry setup via Cloud GTM or Stape',
      'Looker Studio visual performance dashboard',
      'Audience retention and frequency monitoring alerts'
    ],
    process: [
      { step: '01', title: 'Signal & Pixel Health Check', description: 'Audit pixel firing, event deduplication, catalog syncing, and Event Match Quality score.' },
      { step: '02', title: 'Creative Testing Architecture', description: 'Establish a systematic sandbox campaign to test new angles against proven control creatives.' },
      { step: '03', title: 'Advantage+ & Scaling Setup', description: 'Migrate winning creatives into consolidated scaling campaigns with budget safeguards.' },
      { step: '04', title: 'Continuous Iteration', description: 'Monitor frequency and first-time impression ratio to refresh hooks before performance dips.' }
    ],
    platformsAndTools: ['Meta Ads Manager', 'Instagram Advertising', 'Meta Advantage+ Catalog', 'Meta CAPI', 'Cloud GTM'],
    metricsAndMeasurement: ['Blended ROAS', 'Cost Per Acquisition (CPA)', 'Hook Rate (3s Video Views / Impressions)', 'Hold Rate', 'Outbound CTR'],
    boundaries: 'Media spend is paid directly to Meta. Copywriting and creative design briefs are included; on-site video production and actor talent costs are separate.',
    faqs: [
      { q: 'Why is my Meta ROAS dropping after scaling budget?', a: 'Ad fatigue and audience saturation frequently occur when creative volume is insufficient. We combat this by cycling diverse hooks, problem-aware angles, and formats to sustain performance at higher spend.' },
      { q: 'Do you configure the Meta Conversions API (CAPI)?', a: 'Yes. We implement server-side CAPI event tracking to bypass browser ad-blockers and cookie restrictions, achieving high event match quality.' }
    ],
    relatedServices: [
      { slug: 'paid-advertising', title: 'Paid Advertising Hub', desc: 'Sync Meta campaigns with Google Search and TikTok.' },
      { slug: 'tiktok-ads', title: 'TikTok Ads', desc: 'Scale short-form video creative across Gen Z and millennial buyers.' },
      { slug: 'web-design', title: 'Web Design & Landing Pages', desc: 'Pair Meta traffic with custom high-converting landers.' }
    ]
  },

  'tiktok-ads': {
    slug: 'tiktok-ads',
    title: 'TikTok Ads & Short-Form Video Marketing',
    shortTitle: 'TikTok Ads',
    pillar: 'Growth & Paid Media',
    badge: 'Short-Form Video Performance',
    metaTitle: 'TikTok Ads Agency | Short-Form Paid Video Advertising | BidWise',
    metaDescription: 'Scale with native, high-impact TikTok ad campaigns. Creative hook testing, TikTok Shop integration, and Events API tracking.',
    heroHeadline: 'Native Short-Form Video Ads Built for Unstoppable Conversion.',
    heroSubheadline: 'Stop making ads that look like ads. We architect TikTok campaigns with authentic creative concepts, trending audio formats, and TikTok Events API tracking.',
    whoFor: [
      'Consumer brands seeking rapid scale among Gen Z and millennial demographics',
      'Ecommerce stores ready to capitalize on TikTok Shop and impulsive social commerce',
      'Mobile apps and SaaS platforms targeting low-cost app installs and signups'
    ],
    problemSolved: 'Polished corporate ads fail on TikTok. We build native-style creative briefs that hook viewers in the first 2 seconds, communicate clear value props, and drive frictionless checkout.',
    scopeList: [
      'TikTok Ads Manager setup and Events API server tracking',
      'Trend-responsive creative briefs and UGC script development',
      'Spark Ads amplification of top-performing creator posts',
      'TikTok Shop integration and catalog ads management',
      'Dayparting, bid adjustments, and demographic segmentation'
    ],
    deliverables: [
      'Full TikTok ad account build and pixel/Events API verification',
      'Direct-response TikTok creative script templates and storyboard concepts',
      'Continuous weekly testing of creative hooks, audio trends, and calls to action',
      'Transparent weekly performance reporting'
    ],
    process: [
      { step: '01', title: 'Audience & Cultural Research', description: 'Analyze niche hashtags, competitor ads, and top trending formats in your industry.' },
      { step: '02', title: 'Creative Scripting', description: 'Produce script frameworks with problem-first hooks and clear social proof elements.' },
      { step: '03', title: 'Campaign Deployment', description: 'Deploy broad vs interest-targeted ad groups with automated rules to protect CPA.' },
      { step: '04', title: 'Creative Velocity', description: 'Introduce fresh creative variants every 7-10 days to combat rapid content burnout.' }
    ],
    platformsAndTools: ['TikTok Ads Manager', 'TikTok Creative Center', 'TikTok Events API', 'Spark Ads'],
    metricsAndMeasurement: ['Cost Per Mille (CPM)', '2-Second View Rate', 'Cost Per Acquisition (CPA)', 'Video Completion Rate', 'ROAS'],
    boundaries: 'Media budget is paid directly to TikTok. Creator licensing fees, influencer talent fees, and raw asset capture are scoped separately based on client production model.',
    faqs: [
      { q: 'Is TikTok only for young teenagers?', a: 'Over 60% of TikTok active users are aged 25 and older with significant purchasing power. TikTok is currently one of the highest-converting discovery channels for ecommerce.' },
      { q: 'What kind of creative works best on TikTok?', a: 'Authentic user-generated style videos, candid founder demonstrations, unboxing reviews, and problem-solution transformations consistently outperform high-gloss studio commercials.' }
    ],
    relatedServices: [
      { slug: 'meta-ads', title: 'Meta Ads', desc: 'Repurpose winning short-form concepts into Instagram Reels ads.' },
      { slug: 'paid-advertising', title: 'Paid Advertising Hub', desc: 'Unify TikTok ad spend into a holistic growth plan.' }
    ]
  },

  'linkedin-ads': {
    slug: 'linkedin-ads',
    title: 'LinkedIn B2B Advertising & Account-Based Marketing',
    shortTitle: 'LinkedIn Ads',
    pillar: 'Growth & Paid Media',
    badge: 'B2B & Enterprise Lead Generation',
    metaTitle: 'LinkedIn Ads Agency | B2B Account-Based Marketing | BidWise',
    metaDescription: 'Target C-suite executives, directors, and buying committees with pinpoint accuracy on LinkedIn. High-intent B2B pipeline generation.',
    heroHeadline: 'Reach the Decision-Makers Who Actually Sign the Cheques.',
    heroSubheadline: 'Target buying committees by exact job title, company size, seniority, and industry. We design B2B LinkedIn campaigns that produce qualified sales conversations.',
    whoFor: [
      'B2B SaaS, professional services, and enterprise agencies with contract values over $5,000',
      'Companies running Account-Based Marketing (ABM) campaigns targeting specific company lists',
      'Founders seeking thought-leadership amplification and executive client acquisition'
    ],
    problemSolved: 'LinkedIn advertising has high CPMs. Without tight targeting, compelling lead magnets, and friction-free forms, budgets drain rapidly. We engineer high-conversion B2B funnels that minimize cost per qualified meeting.',
    scopeList: [
      'Account-Based Marketing list upload and Matched Audiences configuration',
      'Job function, seniority, skill, and company headcount filtering',
      'Lead Gen Forms integration with automated CRM lead synchronization',
      'Thought Leader Ad amplification for founders and company leadership',
      'Retargeting website visitors with case study carousels and whitepapers'
    ],
    deliverables: [
      'Engineered B2B targeting matrices and audience exclusions',
      'Custom LinkedIn carousel, single image, and text ad copy variants',
      'Native Lead Gen Form setup with instant CRM/Slack notification hooks',
      'Insight Tag implementation and Conversions API verification',
      'Bi-weekly lead quality analysis and cost-per-meeting reviews'
    ],
    process: [
      { step: '01', title: 'ICP & Committee Mapping', description: 'Define the decision-makers, champions, and budget holders within target accounts.' },
      { step: '02', title: 'Offer & Lead Asset Architecture', description: 'Select high-value B2B lead assets (industry benchmark reports, calculators, or audits).' },
      { step: '03', title: 'Campaign Launch', description: 'Run sponsored content, thought leader ads, and message ads with strict budget caps.' },
      { step: '04', title: 'Lead Quality Feedback Loop', description: 'Review CRM pipeline status to refine exclusions and double down on responsive job titles.' }
    ],
    platformsAndTools: ['LinkedIn Campaign Manager', 'LinkedIn Insight Tag', 'HubSpot / Salesforce Sync', 'Matched Audiences'],
    metricsAndMeasurement: ['Cost Per Qualified Lead (CPQL)', 'Lead Form Completion Rate', 'Cost Per Pipeline Opportunity', 'Engagement Rate'],
    boundaries: 'Media budget is paid directly to LinkedIn. Content asset writing (e.g. 30-page ebooks) is scoped separately or provided by client.',
    faqs: [
      { q: 'Why are LinkedIn Ads more expensive than Meta or Google?', a: 'LinkedIn offers unmatched B2B data accuracy, allowing you to filter by specific company name, department size, and exact job title. While CPMs are higher, lead quality and deal sizes are substantially higher.' },
      { q: 'Do you use LinkedIn Lead Gen Forms or external landing pages?', a: 'We test both. Native Lead Gen Forms generally provide 2-3x higher conversion rates due to pre-filled profile information, while external landing pages work well for high-friction qualified qualification funnels.' }
    ],
    relatedServices: [
      { slug: 'paid-advertising', title: 'Paid Advertising Hub', desc: 'Combine LinkedIn with Google Search for bottom-of-funnel capture.' },
      { slug: 'ai-automation', title: 'AI Automations', desc: 'Instantly enrich and route LinkedIn leads directly to your sales team.' }
    ]
  },

  'seo': {
    slug: 'seo',
    title: 'Technical & Organic SEO Strategy',
    shortTitle: 'Technical & Organic SEO',
    pillar: 'Search & Content',
    badge: 'Organic Search Authority',
    metaTitle: 'SEO Agency | Technical & Organic Search Optimization | BidWise',
    metaDescription: 'Sustainable organic growth driven by technical health, semantic site architecture, entity optimization, and authoritative content.',
    heroHeadline: 'Build Long-Term Digital Real Estate That Ranks and Converts.',
    heroSubheadline: 'We eliminate technical crawl barriers, engineer semantic topical authority, and optimize site structure so search engines understand and prioritize your domain.',
    whoFor: [
      'Businesses frustrated by declining traffic following Google Core updates',
      'Ecommerce stores with index bloat, duplicate category pages, and poor crawl budgets',
      'Companies migrating websites wanting to protect historic rankings and organic revenue'
    ],
    problemSolved: 'Thin content, poor Core Web Vitals, broken internal link architectures, and weak entity signals suppress rankings. We solve the technical foundation and topical clustering to win sustainable market share.',
    scopeList: [
      'Deep technical SEO audit (Crawl efficiency, Core Web Vitals, canonicals, status codes)',
      'Information architecture restructuring and topical cluster mapping',
      'Schema markup deployment (Organization, Service, FAQ, Product, Breadcrumbs)',
      'On-page semantic content optimization (entity coverage, headings, search intent)',
      'Clean URL migration mapping and 301 redirect management'
    ],
    deliverables: [
      'Comprehensive Technical SEO Action Audit with prioritized fixes',
      'Complete keyword mapping and topical authority content roadmap',
      'Validated JSON-LD schema implementation',
      'Google Search Console indexing and coverage monitoring',
      'Monthly organic search performance and keyword ranking reports'
    ],
    process: [
      { step: '01', title: 'Technical Diagnostics', description: 'Run comprehensive site crawls to uncover indexability issues, redirect loops, and CWV bottlenecks.' },
      { step: '02', title: 'Topic & Intent Mapping', description: 'Identify high-commercial intent keyword groups and build semantic topic clusters.' },
      { step: '03', title: 'On-Page Optimization', description: 'Refactor title tags, header hierarchies, internal links, and structured data.' },
      { step: '04', title: 'Content & Authority Expansion', description: 'Publish authoritative pillar content that addresses unmet search queries.' },
      { step: '05', title: 'Ongoing Health Monitoring', description: 'Audit search console impressions, click trends, and algorithm resilience.' }
    ],
    platformsAndTools: ['Google Search Console', 'Screaming Frog', 'Ahrefs / Semrush', 'Schema.org', 'PageSpeed Insights'],
    metricsAndMeasurement: ['Organic Click Growth', 'Average Keyword Position', 'Non-Branded Search Impressions', 'Organic Lead Conversions', 'Core Web Vitals Pass Rate'],
    boundaries: 'We do not engage in private blog networks (PBNs) or spam link schemes. We do not guarantee specific #1 keyword positions, as search algorithms remain third-party systems.',
    faqs: [
      { q: 'How long does it take to see SEO results?', a: 'Technical fixes and indexing corrections often yield visible improvements within 4 to 8 weeks, while competitive topical ranking growth typically compounds over 3 to 6 months.' },
      { q: 'How do you ensure our website passes Core Web Vitals?', a: 'We optimize critical rendering paths, eliminate render-blocking scripts, optimize image formats (AVIF/WebP), and maintain lean CSS architectures.' }
    ],
    relatedServices: [
      { slug: 'aeo-geo', title: 'AEO & GEO (AI Answer Engines)', desc: 'Future-proof your organic visibility in ChatGPT, Perplexity, and Google AI Overviews.' },
      { slug: 'content-marketing', title: 'Content Marketing', desc: 'Fuel your SEO topical clusters with high-quality articles.' },
      { slug: 'web-design', title: 'Web Design & Development', desc: 'Build an ultra-fast website that excels in Core Web Vitals out of the box.' }
    ]
  },

  'aeo-geo': {
    slug: 'aeo-geo',
    title: 'AEO & GEO: AI Answer Engine Optimization',
    shortTitle: 'AEO & GEO (AI Search)',
    pillar: 'Search & Content',
    badge: 'AI Discovery & Generative Search',
    metaTitle: 'AEO & GEO Agency | AI Answer Engine Optimization | BidWise',
    metaDescription: 'Optimize your brand for ChatGPT Search, Perplexity, Google AI Overviews, and Claude. Clear entities, structured data, and quotable content.',
    heroHeadline: 'Get Recommended by ChatGPT, Perplexity & Google AI Overviews.',
    heroSubheadline: 'Search has evolved from 10 blue links to AI-synthesized answers. We structure your digital presence so LLMs recognize your brand as the definitive authority to cite.',
    whoFor: [
      'Brands noticing drop-offs in traditional informational search traffic due to Google AI Overviews',
      'B2B and high-consideration businesses needing inclusion in AI comparison summaries',
      'Companies wanting early-mover dominance in conversational search engines'
    ],
    problemSolved: 'AI engines synthesize answers from authoritative, semantically clean, and verifiable sources. If your content is vague, unstructured, or hidden behind heavy JavaScript, AI models ignore your brand. We structure your data for immediate LLM extraction.',
    scopeList: [
      'Entity mapping and knowledge graph consistency optimization',
      'Direct-answer formatting and conversational question architecture',
      'Machine-readable JSON-LD entity schema and sameAs identity validation',
      'Creation and deployment of canonical llms.txt index documentation',
      'Citation benchmarking across ChatGPT, Perplexity, Copilot, and Gemini'
    ],
    deliverables: [
      'AI Search Visibility Audit comparing brand inclusion in key LLM queries',
      'Structured content templates optimized for generative answer extraction',
      'Complete Knowledge Graph & Schema entity graph',
      'Optimized llms.txt and llms-full.txt endpoints',
      'Quarterly generative search citation tracking report'
    ],
    process: [
      { step: '01', title: 'LLM Prompt Benchmarking', description: 'Test 50+ commercial buyer prompts in ChatGPT, Perplexity, and Google AI Overviews to evaluate your current citation share.' },
      { step: '02', title: 'Information Extraction Restructuring', description: 'Rewrite core service passages into self-contained, fact-dense, quotable text snippets.' },
      { step: '03', title: 'Entity Schema Deployment', description: 'Implement deep schema linking founder, organization, and service concepts.' },
      { step: '04', title: 'Authoritative Digital PR Placement', description: 'Strengthen external brand citations across high-reputation industry databases and sources.' }
    ],
    platformsAndTools: ['ChatGPT Search', 'Perplexity AI', 'Google AI Overviews', 'Claude', 'JSON-LD Schema', 'llms.txt Protocol'],
    metricsAndMeasurement: ['LLM Mention Frequency', 'AI Overview Citation Rate', 'Direct Brand Referral Traffic', 'Perplexity Source Rank'],
    boundaries: 'We do not guarantee specific AI generation text or permanent inclusions, as third-party model weights and retrieval mechanisms update continuously.',
    faqs: [
      { q: 'What is the difference between SEO and AEO/GEO?', a: 'Traditional SEO focuses on keyword rankings and organic click-throughs from search engine result pages. AEO (Answer Engine Optimization) and GEO (Generative Engine Optimization) focus on structuring information so AI models parse, trust, and quote your brand in direct synthetic responses.' },
      { q: 'What is an llms.txt file?', a: 'llms.txt is a standardized plain-text markdown file located at your site root that provides LLM crawlers with an efficient, clean overview of your key documentation, services, and entity details.' }
    ],
    relatedServices: [
      { slug: 'seo', title: 'Technical & Organic SEO', desc: 'The authoritative crawl foundation underpinning AI retrieval.' },
      { slug: 'content-marketing', title: 'Content Marketing', desc: 'Create deep, original editorial insights that generative engines cite.' }
    ]
  },

  'social-media-marketing': {
    slug: 'social-media-marketing',
    title: 'Social Media Strategy & Community Growth',
    shortTitle: 'Social Media Marketing',
    pillar: 'Search & Content',
    badge: 'Organic Brand Building',
    metaTitle: 'Social Media Marketing Agency | Organic Strategy & Content | BidWise',
    metaDescription: 'Strategic social media management that builds engaged communities, communicates brand authority, and nurtures long-term organic demand.',
    heroHeadline: 'Turn Casual Followers into Loyal Brand Advocates.',
    heroSubheadline: 'We engineer channel-specific social strategies that position your company as the obvious market choice through consistent value, thought leadership, and community connection.',
    whoFor: [
      'Brands with inconsistent posting schedules looking for structured monthly execution',
      'Companies wanting to separate organic relationship building from paid ad campaigns',
      'B2B brands seeking executive thought leadership on LinkedIn'
    ],
    problemSolved: 'Posting generic stock photos with canned captions yields zero business impact. We build content calendars with real industry perspective, educational carousels, and responsive community engagement.',
    scopeList: [
      'Channel planning and monthly editorial content calendars',
      'Copywriting and visual asset styling aligned with brand guidelines',
      'Active community interaction and comment moderation',
      'Executive founder LinkedIn profile optimization and ghostwriting',
      'Monthly engagement analysis and social audience sentiment tracking'
    ],
    deliverables: [
      'Monthly social media content calendar with pre-approved posts',
      'Custom visual graphics, carousels, and video briefs',
      'Weekly community interaction and follower engagement management',
      'Monthly analytics report detailing follower growth, impressions, and engagement'
    ],
    process: [
      { step: '01', title: 'Brand Voice Definition', description: 'Establish clear tonal guidelines, key content pillars, and prohibited topics.' },
      { step: '02', title: 'Calendar Production', description: 'Develop 30-day content drafts with copy and visual mockups for client approval.' },
      { step: '03', title: 'Publishing & Engagement', description: 'Schedule posts during peak engagement hours and actively reply to community comments.' },
      { step: '04', title: 'Performance Review', description: 'Analyze which content formats resonated most and refine the upcoming calendar.' }
    ],
    platformsAndTools: ['LinkedIn', 'Instagram', 'X (Twitter)', 'YouTube Community', 'Buffer / Hootsuite'],
    metricsAndMeasurement: ['Engagement Rate', 'Follower Growth Rate', 'Post Impressions', 'Direct Messages & Inquiries', 'Social Referral Traffic'],
    boundaries: 'We manage organic social strategy and publishing. Video shoots on location or live event coverage require separate logistical planning.',
    faqs: [
      { q: 'How often should our brand post on social media?', a: 'Consistency and quality outperform sheer frequency. We typically recommend 3 to 5 high-value posts per week per platform, ensuring every post serves a distinct educational, proof, or engagement objective.' }
    ],
    relatedServices: [
      { slug: 'content-marketing', title: 'Content Marketing', desc: 'Repurpose long-form articles into dynamic social carousels and clips.' },
      { slug: 'paid-advertising', title: 'Paid Advertising Hub', desc: 'Amplify top-performing organic posts with paid media spend.' }
    ]
  },

  'content-marketing': {
    slug: 'content-marketing',
    title: 'Content Marketing & Editorial Authority',
    shortTitle: 'Content Marketing',
    pillar: 'Search & Content',
    badge: 'Editorial & Demand Gen',
    metaTitle: 'Content Marketing Agency | High-Intent B2B & Ecommerce Content | BidWise',
    metaDescription: 'Authoritative, research-backed content marketing that educates prospects, solves real problems, and captures high-intent organic search volume.',
    heroHeadline: 'Content That Solves Problems, Builds Trust, and Drives Pipeline.',
    heroSubheadline: 'We produce in-depth articles, strategic buyer guides, and lead assets written by experienced industry researchers—not low-effort generic AI filler.',
    whoFor: [
      'Companies wanting to build lasting search visibility around complex products or services',
      'B2B brands needing lead generation assets like whitepapers, case studies, and calculators',
      'Ecommerce brands seeking informative product buying guides that aid conversion'
    ],
    problemSolved: 'Generic AI-generated blog posts with no original insight fail to rank and damage brand reputation. We produce substantive, original, research-backed content that answers customer questions authoritatively.',
    scopeList: [
      'Topic cluster architecture and keyword commercial intent prioritization',
      'Original copywriting and technical editing by experienced subject researchers',
      'Creation of downloadable lead magnets (checklists, guides, calculators)',
      'Internal linking integration and on-page schema alignment',
      'Content distribution workflows across email newsletters and social channels'
    ],
    deliverables: [
      'Quarterly editorial content roadmap and production schedule',
      'Polished, publication-ready long-form articles with custom diagrams',
      'Custom lead magnet PDFs with branded design',
      'Content attribution tracking in GA4 to measure assisted conversions'
    ],
    process: [
      { step: '01', title: 'Audience Research', description: 'Interview sales teams and review customer support logs to uncover real prospect objections.' },
      { step: '02', title: 'Editorial Outlines', description: 'Structure comprehensive outlines with target entities, subheadings, and primary sources.' },
      { step: '03', title: 'Drafting & Review', description: 'Write original copy incorporating verified data, actionable takeaways, and zero fluff.' },
      { step: '04', title: 'Design & Publishing', description: 'Format with accessible typography, callout boxes, and frictionless conversion CTAs.' }
    ],
    platformsAndTools: ['Content Management Systems', 'Google Docs / Notion', 'Ahrefs', 'Grammarly', 'GA4 Content Grouping'],
    metricsAndMeasurement: ['Organic Search Entries', 'Time on Page', 'Scroll Depth', 'Lead Magnet Downloads', 'Assisted Conversions'],
    boundaries: 'Technical subject matter requires initial client briefing or SME interviews to ensure industry accuracy. All claims are verified against client-provided data.',
    faqs: [
      { q: 'How does your content differ from typical agency blogs?', a: 'We never publish surface-level 500-word articles. Every piece is an exhaustive, well-researched asset that solves a specific customer question, incorporates actionable steps, and drives the reader toward an enquiry.' }
    ],
    relatedServices: [
      { slug: 'seo', title: 'Technical & Organic SEO', desc: 'Ensure your editorial content ranks at the top of search queries.' },
      { slug: 'email-marketing', title: 'Email & Lifecycle Marketing', desc: 'Distribute your best content directly to engaged newsletter subscribers.' }
    ]
  },

  'email-marketing': {
    slug: 'email-marketing',
    title: 'Email & Lifecycle Marketing Automation',
    shortTitle: 'Email & Lifecycle Marketing',
    pillar: 'Design & Development',
    badge: 'Retention & Customer Lifetime Value',
    metaTitle: 'Email Marketing Agency | Lifecycle Automation & Klaviyo | BidWise',
    metaDescription: 'Retain customers and maximize lifetime value with high-converting automated email flows, behavioral segmentation, and engaging campaigns.',
    heroHeadline: 'Maximize Customer Lifetime Value Through Timely Lifecycle Flows.',
    heroSubheadline: 'We design behavioral email automations and newsletter campaigns that nurture leads, recover abandoned carts, and turn one-time buyers into repeat brand advocates.',
    whoFor: [
      'Ecommerce stores generating revenue but leaving 20-30% of sales on the table without automated flows',
      'B2B companies needing automated drip sequences to nurture cold inbound inquiries',
      'Subscription businesses struggling with churn and member onboarding drop-offs'
    ],
    problemSolved: 'Blasting your entire list with unsegmented batch emails leads to high unsubscribe rates and spam folder placement. We build behavior-triggered email sequences that deliver relevant messages based on exact customer actions.',
    scopeList: [
      'Core automated flow architecture (Welcome series, Abandoned Cart, Post-Purchase, Browse Abandonment, Winback)',
      'List segmentation based on RFM (Recency, Frequency, Monetary) purchase data',
      'Mobile-responsive HTML email template design with dark mode support',
      'Technical deliverability audits (SPF, DKIM, DMARC, and Google/Yahoo bulk sender compliance)',
      'Split-testing of subject lines, preview text, send times, and offer mechanics'
    ],
    deliverables: [
      'Full lifecycle email flow map and automation architecture',
      'Custom branded responsive email templates designed for mobile',
      'Weekly scheduled broadcast campaigns (promotions, product spotlights, editorial letters)',
      'Deliverability health monitoring dashboard',
      'Monthly email-attributed revenue reporting'
    ],
    process: [
      { step: '01', title: 'Deliverability & Domain Audit', description: 'Verify authentication records (DKIM/DMARC) and clean inactive contacts.' },
      { step: '02', title: 'Flow Re-Architecture', description: 'Draft, design, and configure high-converting automated sequences triggered by real-time events.' },
      { step: '03', title: 'Segmentation Modeling', description: 'Group subscribers by engagement level, purchase history, and product affinity.' },
      { step: '04', title: 'Iterative Optimization', description: 'Run ongoing A/B tests on subject lines, email layouts, and discount incentives.' }
    ],
    platformsAndTools: ['Klaviyo', 'ActiveCampaign', 'Mailchimp', 'HubSpot', 'Postmark', 'Litmus'],
    metricsAndMeasurement: ['Email Attributed Revenue %', 'Open Rate & Deliverability', 'Click-to-Open Rate (CTOR)', 'Unsubscribe Rate', 'Spam Complaint Rate (<0.1%)'],
    boundaries: 'We do not buy or rent third-party email lists. All email marketing is executed strictly against opt-in, compliant subscriber databases.',
    faqs: [
      { q: 'What percentage of our revenue should email marketing generate?', a: 'For healthy ecommerce brands, automated email flows and campaigns typically account for 20% to 35% of total gross revenue.' },
      { q: 'Do you manage deliverability issues and spam placement?', a: 'Yes. We audit your DNS records (SPF, DKIM, DMARC, MX), prune unengaged contacts, and implement warming strategies to ensure high inbox placement.' }
    ],
    relatedServices: [
      { slug: 'paid-advertising', title: 'Paid Advertising Hub', desc: 'Sync customer email segments directly with Meta and Google ad audiences.' },
      { slug: 'web-design', title: 'Web Design & Landing Pages', desc: 'Optimize high-converting lead capture popups on your website.' }
    ]
  },

  'web-design': {
    slug: 'web-design',
    title: 'High-Performance Web Design & Development',
    shortTitle: 'Web Design & Development',
    pillar: 'Design & Development',
    badge: 'Conversion-Engineered Web Engineering',
    metaTitle: 'Web Design & Development Agency | Fast, Conversion-Focused Sites | BidWise',
    metaDescription: 'Ultra-fast, accessible, and conversion-engineered websites that wow visitors and convert traffic into paying clients. Astro, Next.js, WordPress & Shopify.',
    heroHeadline: 'Ultra-Fast, High-Converting Websites Built for Modern Growth.',
    heroSubheadline: 'We design bespoke digital experiences with futuristic aesthetics, sub-second load speeds, accessible typography, and frictionless conversion pathways.',
    whoFor: [
      'Businesses embarrassed by slow, outdated, template-heavy websites that lose mobile traffic',
      'Companies running expensive ad campaigns into poor landing pages with low conversion rates',
      'Founders seeking a state-of-the-art web presence that establishes instant market authority'
    ],
    problemSolved: 'Sluggish page load speeds, cluttered mobile UX, and confusing navigation kill conversions. We build lightweight, accessible, high-performance websites engineered for sub-second speeds and flawless conversion flows.',
    scopeList: [
      'Complete UX wireframing, site architecture, and conversion journey planning',
      'Futuristic custom visual design system (glassmorphism, clean typography, responsive layouts)',
      'Zero-bloat modern frontend engineering (Astro, Next.js, or clean WordPress/Shopify)',
      'Flawless Core Web Vitals optimization (100 PageSpeed, sub-second LCP, zero CLS)',
      'WCAG 2.2 AA accessibility compliance and cross-browser testing',
      'Serverless form handling with rate limiting, honeypots, and CRM webhooks'
    ],
    deliverables: [
      'Complete responsive bespoke website ready for instant publishing',
      'Design system tokens (color palette, typography, interactive components)',
      'Functional contact and inquiry forms with automated notification routing',
      'Technical SEO foundations (clean semantic HTML, JSON-LD, sitemap, robots.txt)',
      'Comprehensive deployment documentation and client handover'
    ],
    process: [
      { step: '01', title: 'Discovery & UX Architecture', description: 'Map out customer conversion funnels, required pages, and key value propositions.' },
      { step: '02', title: 'Visual Art Direction', description: 'Craft premium design mockups featuring glassmorphism surfaces, sleek contrast, and custom accents.' },
      { step: '03', title: 'Frontend Engineering', description: 'Code pixel-perfect semantic HTML, modular CSS, and ultra-lightweight client scripts.' },
      { step: '04', title: 'Performance & A11y Audit', description: 'Verify 95+ mobile Lighthouse scores, zero contrast failures, and responsive layout fidelity.' },
      { step: '05', title: 'Launch & Domain Setup', description: 'Configure DNS records, SSL certificates, security headers, and live deployment.' }
    ],
    platformsAndTools: ['Astro', 'Next.js', 'Vercel', 'Tailwind / Modern CSS', 'Figma', 'TypeScript'],
    metricsAndMeasurement: ['Lighthouse Mobile Performance (95+)', 'Largest Contentful Paint (LCP < 1.5s)', 'Conversion Rate (CvR)', 'Cumulative Layout Shift (CLS 0.0)', 'Bounce Rate'],
    boundaries: 'Client provides verified brand assets, business credentials, and high-resolution photography. E-commerce product catalog upload over 50 items is quoted based on volume.',
    faqs: [
      { q: 'Why do you prioritize performance and sub-second load times?', a: 'Every 100ms delay in website load time drops conversion rates by up to 7%. Fast sites also receive lower bounce rates, better Google Ad Quality Scores, and higher organic rankings.' },
      { q: 'Is the website easy to edit after launch?', a: 'Yes. All content, contact details, services, and articles are managed through clean, typed configuration files or lightweight CMS backends without complex page-builder bloat.' }
    ],
    relatedServices: [
      { slug: 'conversion-rate-optimisation', title: 'Conversion Rate Optimisation', desc: 'Continuously split-test headlines and forms post-launch.' },
      { slug: 'app-design', title: 'App & Product Design', desc: 'Design intuitive software dashboards and mobile applications.' },
      { slug: 'paid-advertising', title: 'Paid Advertising Hub', desc: 'Drive high-intent traffic directly to your newly built landing pages.' }
    ]
  },

  'app-design': {
    slug: 'app-design',
    title: 'App UI/UX & Product Interface Design',
    shortTitle: 'App & Product Design',
    pillar: 'Design & Development',
    badge: 'Product UI/UX & Design Systems',
    metaTitle: 'App Design Agency | Mobile & Web UI/UX Product Design | BidWise',
    metaDescription: 'Transform complex user workflows into intuitive, engaging digital products. User research, wireframing, high-fidelity UI, and design systems.',
    heroHeadline: 'Intuitive Product Design That Engages Users and Reduces Churn.',
    heroSubheadline: 'We design modern mobile apps, web applications, and SaaS interfaces with frictionless user onboarding, scalable design systems, and developer-ready specifications.',
    whoFor: [
      'Tech startups and SaaS founders preparing for product launch or investor demonstrations',
      'Companies with confusing legacy software requiring modern UI/UX redesign',
      'Businesses expanding their service offerings into native mobile or customer portal apps'
    ],
    problemSolved: 'Clunky navigation, convoluted onboarding, and inconsistent UI lead to customer frustration and high churn. We design intuitive user flows, clear visual hierarchies, and frictionless micro-interactions.',
    scopeList: [
      'User journey mapping, persona definition, and user flow wireframing',
      'High-fidelity interactive Figma prototypes with realistic component states',
      'Scalable design systems (tokens, typography, color variants, component libraries)',
      'Usability testing with representative target users to validate navigation logic',
      'Comprehensive developer handoff documentation with design tokens and auto-layout'
    ],
    deliverables: [
      'Clickable interactive Figma prototype for mobile and desktop screens',
      'Complete modular Design System with reusable UI components',
      'User journey maps and onboarding flow diagrams',
      'Exported icon, graphic, and asset packages for engineering teams'
    ],
    process: [
      { step: '01', title: 'User Research & Scoping', description: 'Interview stakeholders and map out core user jobs-to-be-done.' },
      { step: '02', title: 'Low-Fidelity Wireframes', description: 'Structure functional screen layouts and test navigation architectures quickly.' },
      { step: '03', title: 'High-Fidelity Visual Design', description: 'Apply futuristic glassy aesthetics, refined typography, and accessible contrast.' },
      { step: '04', title: 'Interactive Prototype', description: 'Connect screens into clickable prototypes to test real user interactions.' },
      { step: '05', title: 'Developer Handoff', description: 'Organize design files with clear component properties, spacing tokens, and asset exports.' }
    ],
    platformsAndTools: ['Figma', 'FigJam', 'Design Tokens', 'Tailwind Specs', 'Maze Usability Testing'],
    metricsAndMeasurement: ['Task Completion Rate', 'Time-to-Value on Onboarding', 'Usability System Score (SUS)', 'User Retention & CSAT'],
    boundaries: 'This service covers UI/UX research, prototyping, and product design. Native iOS/Android app engineering is scoped separately or executed by client development teams.',
    faqs: [
      { q: 'What deliverables do our developers receive?', a: 'Developers receive comprehensive Figma files with auto-layout, named layers, documented token variables (colors, spacing, typography), interactive state guides (hover, active, disabled, error), and clean SVG exports.' }
    ],
    relatedServices: [
      { slug: 'web-design', title: 'Web Design & Development', desc: 'Build modern marketing websites for your application.' },
      { slug: 'conversion-rate-optimisation', title: 'Conversion Rate Optimisation', desc: 'Optimize product onboarding and trial-to-paid conversion rates.' }
    ]
  },

  'ai-automation': {
    slug: 'ai-automation',
    title: 'AI Business Automations & Workflow Engineering',
    shortTitle: 'AI Automations',
    pillar: 'Automation & Measurement',
    badge: 'Workflow Automation & AI Integration',
    metaTitle: 'AI Automation Agency | Business Workflow Automation | BidWise',
    metaDescription: 'Streamline operations, automate lead routing, and eliminate repetitive manual tasks with custom n8n, Make, and API integrations.',
    heroHeadline: 'Automate Manual Tasks. Scale Operations Without Adding Headcount.',
    heroSubheadline: 'We build resilient automation pipelines and AI-assisted workflows using n8n, Make, and secure APIs to connect your marketing, sales, and fulfillment systems.',
    whoFor: [
      'Agencies and service businesses wasting hours on manual lead data entry and copy-paste reporting',
      'Ecommerce operations needing automated order syncing, inventory alerts, and supplier routing',
      'Founders wanting instant lead qualification, automated scheduling, and CRM enrichment'
    ],
    problemSolved: 'Slow response times lose deals. Manual data entry creates costly errors. We architect intelligent automation workflows that route leads in seconds, sync databases, and generate automated performance reports.',
    scopeList: [
      'Inbound lead qualification, enrichment, and instant sales rep routing',
      'CRM integration and bidirectional synchronization (HubSpot, Salesforce, Pipedrive)',
      'Automated marketing performance reporting via Looker Studio and Slack notifications',
      'Internal knowledge assistants and AI content review pipelines with human-in-the-loop controls',
      'Webhook engineering, retry mechanisms, and error alerting protocols'
    ],
    deliverables: [
      'Production-ready automation workflows deployed on n8n or Make',
      'Comprehensive workflow architecture documentation and error fallback maps',
      'Secure credential management and API key isolation setup',
      'Automated Slack/Email exception alerts for proactive maintenance'
    ],
    process: [
      { step: '01', title: 'Process Mapping', description: 'Identify repetitive bottleneck tasks across your sales, marketing, and operations stack.' },
      { step: '02', title: 'Architecture & Security', description: 'Design workflow logic with rate limiting, data privacy boundaries, and validation checks.' },
      { step: '03', title: 'Build & Sandbox Testing', description: 'Construct workflows in isolated environments using synthetic test data.' },
      { step: '04', title: 'Production Deployment', description: 'Deploy live automations with end-to-end monitoring and human escalation safeguards.' }
    ],
    platformsAndTools: ['n8n', 'Make (Integromat)', 'Zapier', 'OpenAI / Claude APIs', 'REST APIs & Webhooks', 'Slack / CRM Sync'],
    metricsAndMeasurement: ['Hours of Manual Labor Saved Monthly', 'Lead Response Time (reduced to <60s)', 'Data Sync Accuracy %', 'Error Rate (<0.01%)'],
    boundaries: 'We do not install uncontrolled chatbots that hallucinate pricing or make unauthorized contractual commitments. All AI outputs include verification boundaries and human escalation options.',
    faqs: [
      { q: 'Will AI automations replace my team?', a: 'No. Automations remove tedious administrative busywork (data copying, lead sorting, status updates) so your team can focus on high-value client communication and strategy.' },
      { q: 'How do you ensure data security and privacy?', a: 'We never pass confidential customer data into public model training sets. All API interactions use enterprise zero-data-retention endpoints, strict access keys, and server-side encryption.' }
    ],
    relatedServices: [
      { slug: 'analytics-tracking', title: 'Analytics & Tracking', desc: 'Feed automated workflows with clean, verified conversion data.' },
      { slug: 'paid-advertising', title: 'Paid Advertising Hub', desc: 'Instantly route paid media leads to your sales reps.' }
    ]
  },

  'conversion-rate-optimisation': {
    slug: 'conversion-rate-optimisation',
    title: 'Conversion Rate Optimisation (CRO) & Funnel Testing',
    shortTitle: 'Conversion Rate Optimisation',
    pillar: 'Automation & Measurement',
    badge: 'Funnel Optimization & A/B Testing',
    metaTitle: 'CRO Agency | Conversion Rate Optimisation & A/B Testing | BidWise',
    metaDescription: 'Extract more revenue from existing traffic. Rigorous heuristic analysis, user session recordings, and hypothesis-driven A/B testing.',
    heroHeadline: 'Turn More of Your Existing Website Traffic into Paying Customers.',
    heroSubheadline: 'Double your marketing efficiency without doubling ad spend. We identify where visitors drop off, formulate evidence-based hypotheses, and test winning changes.',
    whoFor: [
      'Ecommerce brands with steady traffic but lagging checkout completion rates',
      'B2B websites driving traffic that fails to convert into qualified demo bookings',
      'Companies running high-spend ad campaigns needing higher landing page efficiency'
    ],
    problemSolved: 'Driving more traffic to a leaky conversion funnel wastes advertising capital. We diagnose usability friction, clarify value propositions, and streamline checkout and form experiences to maximize conversion rate.',
    scopeList: [
      'Comprehensive heuristic UX evaluation and user session recording analysis',
      'Form abandonment auditing and input friction elimination',
      'Landing page value proposition and headline split testing',
      'Checkout funnel simplification and trust badge placement',
      'Micro-copy optimization, mobile sticky CTA positioning, and guarantee clarity'
    ],
    deliverables: [
      'Heuristic Usability & Conversion Friction Audit Report',
      'Prioritized A/B Testing Roadmap scored by potential impact and effort',
      'High-converting variant page designs and interactive prototypes',
      'Statistical significance reporting and implementation code packages'
    ],
    process: [
      { step: '01', title: 'Data & Heuristic Audit', description: 'Analyze heatmaps, drop-off funnels in GA4, and user session recordings.' },
      { step: '02', title: 'Hypothesis Formulation', description: 'Develop test hypotheses backed by user behavior data rather than personal hunches.' },
      { step: '03', title: 'Design & Build Variants', description: 'Create clean, high-impact design variants focusing on friction reduction.' },
      { step: '04', title: 'Run Controlled Tests', description: 'Split test variants until achieving 95%+ statistical confidence.' },
      { step: '05', title: 'Codify & Roll Out Winners', description: 'Hardcode winning variants and move immediately to the next highest-impact test.' }
    ],
    platformsAndTools: ['Google Analytics 4', 'Microsoft Clarity / Hotjar', 'VWO / Optimizely', 'Figma'],
    metricsAndMeasurement: ['Conversion Rate (CvR) Lift %', 'Average Order Value (AOV)', 'Revenue Per Visitor (RPV)', 'Form Completion Rate', 'Cart Abandonment Drop %'],
    boundaries: 'Meaningful A/B testing requires adequate sample traffic (typically 10,000+ monthly visits). For lower-traffic sites, we execute qualitative heuristic redesigns based on proven usability best practices.',
    faqs: [
      { q: 'How much traffic do we need for A/B testing?', a: 'For rigorous statistical significance, we recommend at least 15,000 monthly unique visitors and 200+ monthly conversions. For lower-traffic sites, we implement direct heuristic optimizations that immediately remove proven friction points.' }
    ],
    relatedServices: [
      { slug: 'web-design', title: 'Web Design & Development', desc: 'Rebuild core pages with conversion-optimized layouts.' },
      { slug: 'analytics-tracking', title: 'Analytics & Tracking', desc: 'Deploy accurate funnel step tracking to measure drop-offs.' }
    ]
  },

  'analytics-tracking': {
    slug: 'analytics-tracking',
    title: 'Server-Side Analytics & Conversion Tracking',
    shortTitle: 'Analytics & Tracking',
    pillar: 'Automation & Measurement',
    badge: 'GA4, GTM & Server-Side Telemetry',
    metaTitle: 'Analytics & Conversion Tracking Agency | GTM & GA4 Setup | BidWise',
    metaDescription: 'Eliminate blind spots with server-side conversion tracking. Google Tag Manager, GA4, Consent Mode v2, and Conversion APIs.',
    heroHeadline: 'Clean Measurement. Zero Blind Spots. Flawless Attribution.',
    heroSubheadline: 'We implement server-side tracking, Google Tag Manager architectures, and Consent Mode v2 so your ad algorithms receive clean, privacy-compliant conversion signals.',
    whoFor: [
      'Companies suffering from missing conversions and attribution discrepancies in GA4',
      'High-growth US and international brands needing advanced attribution modeling and privacy compliance',
      'Ecommerce brands needing server-side tracking to recover lost iOS/Safari purchase data'
    ],
    problemSolved: 'Browser ad-blockers, Safari ITP cookie expirations, and misconfigured tags hide 20% to 40% of real purchases. We implement resilient server-side telemetry that restores signal clarity while adhering strictly to privacy regulations.',
    scopeList: [
      'Server-side Google Tag Manager (sGTM) infrastructure setup on Cloud / Stape',
      'Google Analytics 4 (GA4) custom event tracking, funnels, and ecommerce datalayers',
      'Google Consent Mode v2 integration with compliant banner mechanisms',
      'Enhanced Conversions for Google Ads with hashed customer parameters',
      'Meta Conversions API (CAPI) and TikTok Events API server-side synchronization',
      'Custom Looker Studio executive attribution dashboards'
    ],
    deliverables: [
      'Complete GTM web and server container architecture',
      'Validated GA4 ecommerce and lead event schema',
      'Google Consent Mode v2 verification report',
      'Event Match Quality (EMQ) score optimization across ad platforms',
      'Real-time Looker Studio reporting dashboard'
    ],
    process: [
      { step: '01', title: 'Tracking Audit & Tag Inventory', description: 'Review existing tags for duplicates, missing parameters, and slow script bloat.' },
      { step: '02', title: 'Datalayer Specification', description: 'Standardize client-side datalayer events (view_item, add_to_cart, purchase, generate_lead).' },
      { step: '03', title: 'Server Container Build', description: 'Deploy server GTM container to route conversion events directly from your domain.' },
      { step: '04', title: 'Consent & Privacy Alignment', description: 'Configure consent checks so tags fire conditionally according to user preference.' },
      { step: '05', title: 'Ad Platform Integration', description: 'Verify Enhanced Conversions and CAPI event deduplication.' }
    ],
    platformsAndTools: ['Google Tag Manager (Web & Server)', 'Google Analytics 4', 'Consent Mode v2', 'Stape / Cloud sGTM', 'Looker Studio'],
    metricsAndMeasurement: ['Event Match Quality (EMQ > 8.0/10)', 'Tag Delivery Latency (<50ms)', 'Data Deduplication Accuracy (100%)', 'Attribution Discrepancy Rate (<5%)'],
    boundaries: 'We do not sell legal counsel. We implement technical consent architecture based on your approved privacy policy and cookie banner setup.',
    faqs: [
      { q: 'Why is modern conversion modeling essential?', a: 'Modern advertising networks rely on server-side tracking and Enhanced Conversions to recover signals blocked by browser privacy restrictions. Without clean signals, machine learning algorithms under-optimize, increasing your customer acquisition costs.' },
      { q: 'What is the benefit of Server-Side Google Tag Manager?', a: 'Server-side GTM moves third-party tracking scripts off the visitor’s device and onto a private cloud server. This speeds up your website, extends cookie lifespans on Safari, and protects customer data before sending it to ad networks.' }
    ],
    relatedServices: [
      { slug: 'google-ads', title: 'Google Ads Management', desc: 'Feed your Google Ads campaigns with verified Enhanced Conversions.' },
      { slug: 'paid-advertising', title: 'Paid Advertising Hub', desc: 'Achieve accurate multi-touch attribution across all channels.' }
    ]
  }
};
