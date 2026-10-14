export interface InsightArticle {
  slug: string;
  title: string;
  subtitle: string;
  excerpt: string;
  date: string;
  readTime: string;
  author: {
    name: string;
    role: string;
    image: string;
  };
  category: 'Paid Media' | 'AI & Search' | 'Measurement & Data';
  tags: string[];
  contentHtml: string;
}

export const INSIGHTS_DATA: InsightArticle[] = [
  {
    slug: 'google-ads-wasted-spend-audit-guide',
    title: 'The 7 Critical Leakages Draining Your Google Ads Budget in 2026',
    subtitle: 'A practical, technical audit checklist used by certified Google Partners to uncover wasted search spend and recover campaign ROAS.',
    excerpt: 'Over 80% of Google Ads accounts audited leak between 15% to 40% of their monthly budget to unmonitored broad match queries, automated asset extensions, and miscalibrated Smart Bidding.',
    date: 'February 24, 2026',
    readTime: '7 min read',
    author: {
      name: 'BidWise Performance Lab',
      role: 'Growth & PPC Research Team',
      image: '/logo.png'
    },
    category: 'Paid Media',
    tags: ['Google Ads', 'PPC Audit', 'ROAS Optimization', 'Performance Max'],
    contentHtml: `
      <h2>Why Most Google Ads Accounts Silently Bleed Profit</h2>
      <p>Google’s machine learning bidding algorithms have improved dramatically over the last three years. However, Smart Bidding requires one vital element to succeed: <strong>uncompromised signal discipline</strong>. When left to default automation settings, Google Ads prioritizes volume over commercial intent.</p>
      
      <p>Through auditing hundreds of accounts spending between $3,000 and $150,000 monthly, we consistently identify seven systematic structural flaws that siphon away ad capital.</p>

      <h3>1. Broad Match Drift and Unscrutinized Search Query Reports</h3>
      <p>Google has steadily broadened the definition of "Broad Match". A search query that Google deems "semantically related" may have zero commercial buying intent. If your team is not reviewing actual Search Terms reports at least twice per week and applying negative match lists, you are subsidizing irrelevant clicks.</p>
      <blockquote>Rule of Thumb: If more than 20% of your search query volume includes informational prefixes like "free", "diy", "jobs", or "definition", your keyword matching criteria is too loose.</blockquote>

      <h3>2. Performance Max Without Negative Keyword Exclusion Lists</h3>
      <p>Performance Max (PMax) is a powerful format, but by default it acts as a black box. Without account-level negative keyword lists, PMax campaigns frequently cannibalize your own branded search traffic, claiming inflated ROAS figures while generating zero incremental revenue.</p>

      <h3>3. Misconfigured Conversion Goals and Duplicate Counting</h3>
      <p>We routinely encounter accounts tracking soft actions (such as 30-second time on site or newsletter subscriptions) as "Primary" conversion actions alongside actual purchases or booked appointments. This confuses the Smart Bidding algorithm, forcing it to optimize for low-value clicks rather than high-paying clients.</p>

      <h3>4. Neglecting Google Merchant Center Feed Attribute Health</h3>
      <p>For ecommerce brands, Google Shopping titles and attributes dictate ranking relevance. Leaving product titles as default manufacturer SKUs rather than enriching them with brand, material, size, and search keywords results in lower impression share and inflated cost-per-click.</p>

      <h3>5. Weak Enhanced Conversions &amp; Broken Attribution Pipelines</h3>
      <p>Without server-side Enhanced Conversions and disciplined conversion value tracking, Google Ads loses up to 30% of conversion signals due to Safari ITP and browser ad-blockers. Rebuilding this data pipeline is the fastest lever to restore smart bidding performance and maximize ROAS.</p>

      <h2>How to Reclaim Control</h2>
      <p>Audit your account manually before increasing budget. Identify your top 20% converting search terms, isolate them into dedicated structures, enforce rigorous negative lists, and align your bidding strategy with verified bottom-line profit.</p>
    `
  },
  {
    slug: 'navigating-aeo-and-generative-engine-optimization',
    title: 'AEO & GEO: How to Ensure LLMs Cite Your Brand as the Authority',
    subtitle: 'Why traditional SEO keyword strategies are no longer sufficient in an era of ChatGPT Search, Perplexity, and Google AI Overviews.',
    excerpt: 'Generative search engines do not just index keywords—they extract facts, verify consensus, and synthesize answers. Here is how to engineer content for LLM retrieval.',
    date: 'January 18, 2026',
    readTime: '6 min read',
    author: {
      name: 'BidWise Performance Lab',
      role: 'Growth & PPC Research Team',
      image: '/logo.png'
    },
    category: 'AI & Search',
    tags: ['AEO', 'GEO', 'AI Search', 'Knowledge Graph', 'Schema'],
    contentHtml: `
      <h2>The Shift from Ten Blue Links to Synthetic Answers</h2>
      <p>When buyers ask ChatGPT, Perplexity, or Google AI Overviews for vendor recommendations, the system does not display a list of paginated search links. It synthesizes a singular answer, highlighting two or three trusted authorities.</p>
      
      <p>To win visibility in this new paradigm, companies must master <strong>Answer Engine Optimization (AEO)</strong> and <strong>Generative Engine Optimization (GEO)</strong>.</p>

      <h3>How Large Language Models Select Sources</h3>
      <p>LLM retrieval-augmented generation (RAG) pipelines assess content based on several critical criteria:</p>
      <ul>
        <li><strong>Entity Clarity:</strong> Does the site clearly state who the organization is and what specific problem it solves in unambiguous language?</li>
        <li><strong>Passage Self-Containment:</strong> Can a 150-word excerpt be extracted and stand alone as a complete, truthful answer without requiring context from other sections?</li>
        <li><strong>Structured Schema Graph:</strong> Is the content validated through JSON-LD schema (Organization, Service, Founder, FAQ)?</li>
        <li><strong>Protocol Standards:</strong> Does your domain host a machine-readable <code>llms.txt</code> file outlining primary documentation and core capabilities?</li>
      </ul>

      <h3>Practical Steps to Optimize Your Site Today</h3>
      <ol>
        <li><strong>Adopt Direct-Answer Architecture:</strong> Lead every service page and article with a direct, definitive definition before expanding into details.</li>
        <li><strong>Eliminate Fluff and Vagueness:</strong> Replace corporate buzzwords with concrete numbers, deliverables, and methodology descriptions.</li>
        <li><strong>Deploy Deep Entity Schema:</strong> Ensure your organizational identity, business registry, and service offerings are mapped with persistent schema IDs.</li>
      </ol>
    `
  },
  {
    slug: 'server-side-tracking-consent-mode-v2-guide',
    title: 'The Technical Guide to Server-Side Tracking and Consent Mode v2',
    subtitle: 'How to eliminate client-side tracking blind spots, protect user privacy, and deliver pristine attribution data to your ad platforms.',
    excerpt: 'Browser ad-blockers, Safari ITP, and stricter privacy laws have degraded client-side analytics. Here is how modern server-side telemetry restores data integrity.',
    date: 'January 05, 2026',
    readTime: '8 min read',
    author: {
      name: 'BidWise Performance Lab',
      role: 'Growth & PPC Research Team',
      image: '/logo.png'
    },
    category: 'Measurement & Data',
    tags: ['Server-Side GTM', 'GA4', 'Consent Mode v2', 'Attribution'],
    contentHtml: `
      <h2>The Breakdown of Traditional Client-Side Tracking</h2>
      <p>For over a decade, digital marketers relied on client-side JavaScript tags executing directly within the visitor's browser. Today, that approach has reached its technical limits:</p>
      <ul>
        <li>Over 35% of desktop users run aggressive ad-blockers that prevent tracking libraries from loading.</li>
        <li>Apple's Safari Intelligent Tracking Prevention (ITP) caps client-set cookie lifespans to as little as 24 hours.</li>
        <li>Loading multiple heavy tracking pixels slows down site performance and damages Core Web Vitals.</li>
      </ul>

      <h2>The Server-Side Architecture Solution</h2>
      <p>Server-side tracking moves the data collection mechanism from the visitor's browser to a secure, private cloud server (sGTM). When a user completes an action, a single lightweight first-party event is sent to your own server endpoint. Your server then securely validates, hashes, and forwards that event to Google Ads, GA4, Meta CAPI, and TikTok.</p>

      <h3>Key Advantages of Server-Side Telemetry</h3>
      <ul>
        <li><strong>Superior Site Speed:</strong> Removing 5-10 third-party JavaScript files dramatically accelerates First Contentful Paint and INP.</li>
        <li><strong>Complete Privacy Control:</strong> You can strip IP addresses and personal identifiers before passing data to advertising networks.</li>
        <li><strong>Extended Cookie Durability:</strong> First-party HTTP-only cookies set via server headers persist through Safari ITP restrictions, allowing accurate 30-day attribution windows.</li>
        <li><strong>Google Consent Mode v2 Compliance:</strong> Dynamically adjusts tag execution and cookieless modeling pings according to visitor consent.</li>
      </ul>
    `
  }
];
