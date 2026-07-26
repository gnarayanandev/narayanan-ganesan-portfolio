import { SkillCategory, ServiceItem, CaseStudy, TimelineItem, Testimonial, ToolBadge } from '../types';

export const personalInfo = {
  name: "Narayanan Ganesan",
  title: "AI-Driven Digital Marketing Specialist & Full Stack Developer",
  location: "Tamil Nadu, India",
  serviceRegions: "India, USA, UK, Australia, Canada, New Zealand",
  tagline: "I Build the Growth Engine Your Business is Missing. More Leads. Higher ROAS. Faster, Smarter Web Builds.",
  shortIntro: "Most agencies give you traffic. Most developers give you a website. I give you both, connected, converting, and running on AI-powered automation. If your SEO is invisible, your ads are burning budget, or your tech stack is holding you back, let's fix it in one free 30-minute call.",
  email: "gnarayanan13490@gmail.com",
  linkedin: "https://linkedin.com/in/narayananganesandm",
  certifications: ["Certified Prompt Engineer", "Edison Award Recipient", "Digital Marketing Specialist"],
  experienceYears: "15+ Years Experience (Digital Marketing 2019 - Present)",
  bioParagraphs: [
    "With over 15 years of overall professional technical experience (starting in 2011 in product design and CAD/CAE engineering, and transitioning into Full Stack Web Development and Digital Marketing from 2019 to Present), I bring an engineering-grade, systems-driven approach to every growth campaign and software project.",
    "I manage the complete digital ecosystem for my clients: planning and executing end-to-end digital marketing strategies across SEO, SEM, SMM, and paid ads (Meta & Google Ads), while engineering the underlying custom WordPress plugins and themes, Shopify apps, Laravel web applications, and Google Chrome extensions that drive conversions.",
    "As a Certified Prompt Engineer and Edison Award recipient, I operationalize advanced Generative AI platforms daily (including LLMs like Claude, ChatGPT, Gemini, Perplexity, and Grok; Image AI like DALL-E, MidJourney, Leonardo, Nano Banana, and Stitch; and Video AI like HiggsField, Google Veo 3.1, Omni Flash, Kling AI, and Hailo AI) to accelerate content development, ad creative testing, and backend workflow automations.",
    "I partner directly with SMBs, e-commerce brands, SaaS companies, and marketing agencies across India, USA, UK, Australia, and Canada who need a dependable, high-output specialist to deliver complex technical builds and high-ROI marketing results on time."
  ]
};

export const careerTimeline: TimelineItem[] = [
  {
    year: "2023 - 2026",
    role: "Lead Full Stack Developer & Digital Marketing Specialist",
    company: "W3Squad & Independent Consultancy",
    description: "Driving end-to-end digital marketing, custom software engineering, and AI workflow operationalization for high-growth clients across India, USA, UK, and Australia.",
    tags: ["Digital Marketing", "Full Stack Dev", "AI Workflows", "WordPress", "Shopify Apps", "Laravel"],
    highlights: [
      "✔ Plan and execute end-to-end digital marketing strategies across SEO, SEM, SMM, and paid advertising, ensuring on-time delivery and measurable results",
      "✔ Develop custom WordPress themes and plugins, Shopify themes and apps, and Laravel web applications tailored to client requirements",
      "✔ Implement structured workflows, SOPs, and reporting systems to improve project efficiency, team productivity, and campaign outcomes",
      "✔ Perform data analytics using AI tools and Python for marketing automation, campaign reporting, and backend workflow enhancements",
      "✔ Conduct Technical SEO audits, keyword research, and competitor analysis with actionable prioritised fix plans",
      "✔ Manage Meta Ads and Google Ads (Search, Maps, Shopping) end-to-end, from strategy and setup to optimisation and monthly reporting",
      "✔ Design and deploy AI-powered web chatbots and WhatsApp bots for client lead generation",
      "✔ Operationalise AI-driven workflows across content, design, video, and automation to improve turnaround speed and output quality",
      "✔ Specialise in Prompt Engineering for SEO content, ad copy, automation logic, and creative asset development",
      "✔ Daily AI platforms: LLMs (Claude, ChatGPT, Gemini, Perplexity, Grok), Image (DALL-E, MidJourney, Leonardo, Nano Banana, Stitch), Video (HiggsField, Google Veo 3.1, Omni Flash, Kling AI, Hailo AI)",
      "✔ Build digital products, POD store assets, Canva template packs, and AI prompt collections as standalone revenue streams",
      "✔ Drive client communication, performance reviews, and strategic planning to maintain transparent, long-term partnerships"
    ]
  },
  {
    year: "2022 - 2023",
    role: "Senior SEO/SEM Analyst & Full-Stack Developer",
    company: "ExpertPoint.in",
    description: "Spearheaded technical SEO audits, search engine marketing campaigns, and custom web updates for high-growth B2B and consumer brands.",
    tags: ["Technical SEO", "Google Ads", "Web Development", "Analytics"],
    highlights: [
      "Conducted 50+ comprehensive technical SEO audits resolving crawl errors, broken canonicals, and Core Web Vitals performance bottlenecks.",
      "Managed Google Ads (Search, Shopping, Maps) budgets with average ROAS improvements of 3.8x for regional and national accounts."
    ]
  },
  {
    year: "2021 - 2022",
    role: "Senior Digital Marketing Executive & Developer",
    company: "W3Squad",
    description: "Managed Meta and Google paid ad budgets, built custom performance funnels, and developed custom landing pages on WordPress and Shopify.",
    tags: ["Meta Ads", "Shopify Themes", "WordPress", "Funnel Optimization"],
    highlights: [
      "Built conversion-optimized custom landing pages that increased average lead conversion rates by 42%.",
      "Integrated CAPI and GA4 tracking setups across e-commerce client stores."
    ]
  },
  {
    year: "2019 - 2021",
    role: "Independent Digital Marketing Specialist & Web Developer",
    company: "Independent Practice",
    description: "Delivered white-label SEO, PPC campaign management, and web development services for international clients in the US, UK, Australia, and India.",
    tags: ["SEO", "Local Map Pack", "Custom Web Dev", "Client Relations"],
    highlights: [
      "Helped 30+ local service businesses rank in the top 3 Google Business Profile Local Map Pack results.",
      "Developed custom PHP and WordPress solutions for SMB clients."
    ]
  },
  {
    year: "2015 - 2019",
    role: "Engineer Consultant",
    company: "SHYPO Technologies",
    description: "Provided engineering consultancy, analytical modeling, and process structuring, laying the foundation for data-first problem solving.",
    tags: ["Engineering Consultancy", "Analytical Modeling", "Process SOPs"],
    highlights: [
      "Established rigorous analytical workflows and quality assurance procedures for technical client deliverables."
    ]
  },
  {
    year: "2014 - 2015",
    role: "CAD/CAE Engineer",
    company: "TVS Sundram Fasteners",
    description: "Conducted finite element analysis (FEA) and computer-aided engineering for precision automotive and industrial components.",
    tags: ["CAD/CAE", "Finite Element Analysis", "Quality Systems"],
    highlights: [
      "Simulated mechanical stress models to ensure compliance with strict automotive manufacturing tolerances."
    ]
  },
  {
    year: "2011 - 2013",
    role: "Product Design Specialist",
    company: "CADD Centre",
    description: "Designed 3D models and technical documentation while training junior engineers in modern design software and engineering workflows.",
    tags: ["3D Product Design", "Drafting", "Technical Training"],
    highlights: [
      "Trained over 100+ engineering professionals in advanced CAD/CAE modeling frameworks."
    ]
  }
];

export const skillCategories: SkillCategory[] = [
  {
    id: "organic-growth",
    title: "Organic Growth & SEO",
    iconName: "TrendingUp",
    description: "Search engine visibility, local map packs, and AI search engine optimization (GEO) to capture high-intent intent traffic.",
    skills: [
      "Website SEO & Architecture",
      "Local SEO & Google Business Profile",
      "AI & GEO SEO (Generative Engine Optimization)",
      "YouTube SEO & Video Meta Optimization",
      "On-Page & Technical Crawl Diagnostics",
      "Schema.org & Structured Data Markup"
    ]
  },
  {
    id: "paid-marketing",
    title: "Paid Ads & Performance",
    iconName: "Target",
    description: "Data-driven media buying on Meta and Google Ads with optimized ROAS and low customer acquisition costs.",
    skills: [
      "Meta Ads (Facebook & Instagram)",
      "Google Search, Shopping & Display Ads",
      "Google Maps & Local Action Ads",
      "Remarketing & Custom Audience Funnels",
      "Ad Creative Testing & Copywriting",
      "Conversion API (CAPI) & GA4 Tracking"
    ]
  },
  {
    id: "web-development",
    title: "Full Stack Web Engineering",
    iconName: "Code",
    description: "Custom web applications, WordPress plugins, Shopify apps, and Chrome extensions built for performance and scale.",
    skills: [
      "Custom WordPress Themes & Plugins",
      "Custom Shopify Themes & Merchant Apps",
      "Google Chrome Extension Development",
      "Laravel Custom Web Applications",
      "Tailwind CSS, HTML5 & JavaScript/TypeScript",
      "RESTful APIs & Database Optimization"
    ]
  },
  {
    id: "design",
    title: "Creatives & Generative AI",
    iconName: "Palette",
    description: "Conversion-focused visual assets, ad creatives, and AI-generated video/image content.",
    skills: [
      "UI/UX Web & App Layout Design",
      "High-Converting Meta & Google Ad Creatives",
      "Generative AI Image Generation (MidJourney, DALL-E, Leonardo)",
      "AI Video Generation (Google Veo 3.1, Kling AI, HiggsField)",
      "Canva Template Packs & Social Assets",
      "E-commerce Product Visual Enhancement"
    ]
  },
  {
    id: "data-automation",
    title: "AI & Workflow Automation",
    iconName: "Bot",
    description: "Python automation scripts, n8n workflows, and AI chatbots that eliminate manual tasks and capture leads.",
    skills: [
      "Data Analytics with AI Tools & Python",
      "AI Workflow Automation (n8n, Make)",
      "Website & WhatsApp AI Chatbots",
      "Prompt Engineering (SEO, Copy, Code)",
      "Automated Campaign Reporting Dashboards",
      "POD Assets & Digital Product Engines"
    ]
  },
  {
    id: "research",
    title: "Audits & Strategy",
    iconName: "Search",
    description: "Deep technical audits, competitor research, and market gap analysis to guide strategic positioning.",
    skills: [
      "Technical SEO Audits & Actionable Fix Plans",
      "Keyword Research & Search Intent Mapping",
      "Competitor Ad & Funnel Intelligence",
      "E-commerce Product & Market Research",
      "User Behavior Analysis (Hotjar, GA4)",
      "Strategic SOPs & Client Performance Reviews"
    ]
  }
];

export const servicesData: ServiceItem[] = [
  {
    id: "wordpress-plugin-dev",
    title: "WordPress Plugin Development",
    shortDescription: "Custom PHP plugins, Gutenberg blocks, and secure REST API extensions engineered for unique business logic.",
    fullDescription: "Bespoke WordPress plugin development built from scratch according to strict WordPress coding standards. Includes custom post types, custom database tables, admin dashboards, third-party API integrations, and Gutenberg editor blocks without heavy bloat.",
    iconName: "Puzzle",
    features: [
      "Custom PHP plugin architecture & hook implementations",
      "Secure REST API endpoints & database table creation",
      "Custom Gutenberg block development using React",
      "Seamless integration with WooCommerce & external CRMs"
    ],
    deliverables: [
      "Production-ready plugin zip package",
      "Clean, fully documented PHP codebase",
      "Admin settings & configuration user manual",
      "60-day bug fix & compatibility guarantee"
    ]
  },
  {
    id: "shopify-app-dev",
    title: "Shopify App Development",
    shortDescription: "Custom Remix/Node.js Shopify merchant apps, GraphQL integrations, and custom checkout extensions.",
    fullDescription: "Custom public or embedded Shopify app development for store owners needing tailored features, custom product configurators, automated order workflows, or internal operational tools using Remix, Node.js, and Shopify GraphQL Admin APIs.",
    iconName: "ShoppingBag",
    features: [
      "Shopify App Bridge & Embedded Merchant Dashboard",
      "GraphQL Admin API & Webhook handler implementations",
      "Custom checkout extensions & product discount functions",
      "Automated inventory & third-party logistics syncing"
    ],
    deliverables: [
      "Deployed Shopify App hosted on Cloud Run / Vercel",
      "App installation URL & partner dashboard setup",
      "Complete source code repository",
      "Merchant onboarding & workflow documentation"
    ]
  },
  {
    id: "chrome-extension-dev",
    title: "Google Chrome Extension Development",
    shortDescription: "Manifest v3 Chrome browser extensions for web scraping, productivity tools, and AI workflow automation.",
    fullDescription: "Custom Chrome extensions built with Manifest v3, HTML5, CSS3, and modern JavaScript. Ideal for internal automation, web data extraction, CRM quick-actions, custom AI assistant overlays, and productivity enhancements.",
    iconName: "Chrome",
    features: [
      "Manifest v3 compliant background service workers",
      "Content script DOM injection & automated scrapers",
      "Popup UI panels with options page settings",
      "AI model API integration (ChatGPT/Gemini/Claude API)"
    ],
    deliverables: [
      "Chrome Web Store ready extension package (.zip)",
      "Developer mode testing instructions",
      "Chrome Web Store submission support",
      "Source code repository"
    ]
  },
  {
    id: "seo-local-seo",
    title: "SEO, Local SEO & GEO Optimization",
    shortDescription: "Dominate Google search, Local Map Packs, and AI engines (ChatGPT/Gemini) with data-backed organic strategies.",
    fullDescription: "Complete organic visibility strategy incorporating technical SEO audits, content optimization, Schema markup, Local Map Pack ranking for local businesses, and Generative Engine Optimization (GEO) for AI search engines.",
    iconName: "Search",
    features: [
      "Google Business Profile optimization for local leads",
      "GEO (Generative Engine Optimization) for AI engines",
      "Technical site structure and crawl budget optimization",
      "High-intent keyword target selection and content clusters"
    ],
    deliverables: [
      "Monthly keyword ranking & organic traffic reports",
      "Fully optimized GBP profile & local citations",
      "On-page schema implementation",
      "Actionable technical audit roadmap"
    ]
  },
  {
    id: "paid-ads-management",
    title: "Meta Ads & Google Ads Management",
    shortDescription: "High-ROI paid media campaigns engineered for e-commerce sales, B2B leads, and local business customer acquisition.",
    fullDescription: "Data-led media buying across Meta Ads (Facebook & Instagram) and Google Ads (Search, Shopping, Display, YouTube, Maps). Focused on lowering customer acquisition costs (CPA) and maximizing Return on Ad Spend (ROAS).",
    iconName: "TrendingUp",
    features: [
      "Full-funnel campaign architecture (Prospecting & Retargeting)",
      "A/B testing for AI-generated ad visuals, copy, and audiences",
      "Meta CAPI and GA4 conversion tracking setup",
      "Negative keyword curation and bid optimization"
    ],
    deliverables: [
      "Real-time campaign analytics dashboard",
      "Custom ad creative variations and copy scripts",
      "Pixel/CAPI diagnostic verification",
      "Clear monthly spend & ROAS performance review"
    ]
  },
  {
    id: "wordpress-shopify-design",
    title: "WordPress & Shopify Website Design",
    shortDescription: "Custom, lightning-fast e-commerce stores and business sites built to convert visitors into loyal clients.",
    fullDescription: "Custom WordPress and Shopify web development without slow bloat. Mobile-first design, fast page load speeds, custom Liquid/PHP code, custom plugin integrations, and seamless payment gateway setups.",
    iconName: "Layout",
    features: [
      "Custom theme design tailored to brand identity",
      "Mobile-first responsive layouts and Core Web Vitals optimization",
      "E-commerce checkout & payment funnel optimization",
      "Custom plugin/app integrations for extended features"
    ],
    deliverables: [
      "Fully responsive production website",
      "Mobile and desktop speed score > 90",
      "Custom user guide for client content updates",
      "Integrated SEO foundation and GA4 tracking"
    ]
  },
  {
    id: "custom-laravel-dev",
    title: "Custom Web App Development (Laravel)",
    shortDescription: "Robust, scalable web applications, client portals, and custom API integrations built with Laravel.",
    fullDescription: "Tailored web applications built on Laravel for complex business requirements. Ideal for SaaS platforms, custom internal dashboards, client portals, and bespoke e-commerce engines.",
    iconName: "Code",
    features: [
      "Custom database architecture and secure REST APIs",
      "User authentication, roles, and permission management",
      "Third-party API integrations (Payment gateways, CRMs)",
      "Admin control panels and data visualization modules"
    ],
    deliverables: [
      "Clean, documented Laravel codebase",
      "Automated database migrations and seeders",
      "Production deployment configuration",
      "API documentation and test suite"
    ]
  },
  {
    id: "ai-automation-setup",
    title: "AI & Workflow Automation (n8n, Chatbots)",
    shortDescription: "Eliminate repetitive tasks with custom n8n workflows, Python scripts, and intelligent AI chatbots.",
    fullDescription: "End-to-end automation solutions connecting marketing channels, CRMs, and customer support. Features custom web and WhatsApp AI chatbots powered by Gemini and ChatGPT, plus Python automated reporting.",
    iconName: "Bot",
    features: [
      "n8n and Make multi-step automation scenarios",
      "WhatsApp and Website AI customer service chatbots",
      "Automated lead enrichment and instant CRM sync",
      "Python scripts for automated marketing reporting"
    ],
    deliverables: [
      "Live, tested automation workflows",
      "Trained AI chatbot agent with brand knowledge base",
      "Automated email/Slack notification alerts",
      "Workflow documentation and recovery triggers"
    ]
  },
  {
    id: "technical-seo-audits",
    title: "Technical SEO Audits & Actionable Fix Plans",
    shortDescription: "In-depth diagnostic audits uncovering hidden site errors, indexing issues, and untapped organic growth potential.",
    fullDescription: "Comprehensive diagnostic inspection analyzing site architecture, speed metrics, indexing status, backlink health, schema compliance, and mobile usability with prioritized action items.",
    iconName: "FileText",
    features: [
      "Deep site crawl using Screaming Frog and custom Python scripts",
      "Core Web Vitals performance inspection",
      "Indexation and canonicalization bug fixes",
      "Competitor gap analysis and keyword strategy"
    ],
    deliverables: [
      "Comprehensive PDF audit presentation",
      "Prioritized developer checklist (High/Med/Low impact)",
      "1-on-1 strategy walkthrough call",
      "Post-fix re-indexation verification"
    ]
  }
];

export const caseStudiesData: CaseStudy[] = [
  {
    id: "case-1",
    title: "SEO Turnaround & GEO Optimization for B2B Export Client",
    clientType: "B2B Manufacturing & Export (India & Global)",
    resultMetric: "+340%",
    metricLabel: "Organic Lead Volume Growth in 6 Months",
    summary: "Reengineered technical site architecture, resolved canonical errors, implemented Schema markup, and optimized for generative search engines.",
    challenge: "The client experienced a drop in organic leads following an unoptimized CMS migration, with broken canonical tags, slow mobile speeds, and unindexed product catalog pages.",
    solution: "Executed a thorough technical audit, rebuilt XML sitemaps, deployed Schema.org structured data across 120+ product categories, and introduced GEO optimization for ChatGPT and Gemini B2B buyer queries.",
    results: [
      "+340% increase in organic search inquiries within 180 days",
      "#1 rank for 24 high-value export search terms in target countries",
      "Mobile page load speed reduced from 5.2s to 1.3s"
    ],
    toolsUsed: ["Google Search Console", "Screaming Frog", "Gemini AI", "WordPress", "Python"],
    category: "SEO",
    isPlaceholder: false
  },
  {
    id: "case-2",
    title: "Google Ads & Meta Ads Scale for Freight Logistics",
    clientType: "Logistics & Express Freight (USA & India)",
    resultMetric: "4.2x ROAS",
    metricLabel: "Return On Ad Spend with 45% Lower CPA",
    summary: "Restructured broad match campaigns, implemented negative keyword filters, and built custom high-converting landing pages.",
    challenge: "High cost-per-lead due to broad keyword match types, unoptimized bidding strategies, and generic landing pages that failed to capture qualified freight quote requests.",
    solution: "Transitioned to Exact and Phrase match target structures, built high-converting custom landing pages, set up conversion tracking via CAPI, and implemented Meta retargeting funnels.",
    results: [
      "4.2x ROAS achieved within the first 60 days of campaign restructuring",
      "45% reduction in Cost Per Acquisition (CPA)",
      "+110% increase in qualified freight quote submissions"
    ],
    toolsUsed: ["Google Ads Manager", "Meta Ads", "GA4", "Custom Landing Pages", "Claude AI"],
    category: "Paid Ads",
    isPlaceholder: false
  },
  {
    id: "case-3",
    title: "Shopify Store Build & AI WhatsApp Chatbot for Retail Brand",
    clientType: "E-Commerce & Retail (Australia & India)",
    resultMetric: "+185%",
    metricLabel: "E-commerce Conversion Rate Lift",
    summary: "Designed a custom Shopify theme integrated with an automated WhatsApp & web AI shopping assistant chatbot.",
    challenge: "High cart abandonment rates and delayed customer support responses during peak promotion hours.",
    solution: "Rebuilt the Shopify theme with mobile-first checkout flows and integrated an AI chatbot that answers product queries, recommends items, and sends automated abandoned cart recovery messages.",
    results: [
      "+185% increase in e-commerce conversion rate",
      "28% of abandoned carts recovered via automated WhatsApp bot",
      "Customer support ticket volume reduced by 60%"
    ],
    toolsUsed: ["Shopify Liquid", "n8n", "WhatsApp API", "MidJourney", "Gemini AI"],
    category: "E-Commerce",
    isPlaceholder: false
  },
  {
    id: "case-4",
    title: "Laravel SaaS Portal & Automated Lead Scoring Engine",
    clientType: "SaaS & Tech Startup (USA & Canada)",
    resultMetric: "60+ Hrs",
    metricLabel: "Saved Per Month via n8n & Python",
    summary: "Built a custom Laravel client portal with automated n8n workflows that enrich leads and route sales opportunities instantly.",
    challenge: "Sales representatives spent hours manually vetting inbound signups and updating CRM records, leading to slow response times for hot prospects.",
    solution: "Developed a custom Laravel dashboard with automated Python scripts and n8n webhooks to enrich lead profiles using firmographic data, scoring them in real-time.",
    results: [
      "60+ hours saved per month in sales team operations",
      "Average lead response time reduced from 4 hours to 3 minutes",
      "+40% increase in booked sales demo conversions"
    ],
    toolsUsed: ["Laravel", "Python", "n8n", "REST APIs", "Tailwind CSS"],
    category: "Web App & AI",
    isPlaceholder: false
  },
  {
    id: "case-5",
    title: "Local SEO & GBP Optimization for Multi-Branch Clinic",
    clientType: "Healthcare & Local Services (India & UAE)",
    resultMetric: "#1 Rank",
    metricLabel: "Top Local Pack Position Across 8 Locations",
    summary: "Optimized Google Business Profiles and local landing pages, driving consistent high-intent appointment calls.",
    challenge: "New clinic branches lacked visibility in regional local pack searches, missing out on local appointment leads.",
    solution: "Standardized local NAP citations, built individual localized branch landing pages with Schema, and established automated review request campaigns.",
    results: [
      "#1 rank in Google Map Pack across 8 target service locations",
      "+220% increase in direct phone call actions from GBP",
      "+350 new 5-star customer reviews collected automatically"
    ],
    toolsUsed: ["Google Business Profile", "WordPress", "Python Automation", "Local SEO"],
    category: "Local SEO",
    isPlaceholder: false
  },
  {
    id: "case-6",
    title: "Custom Chrome Extension & Internal AI Workflow Tool",
    clientType: "Digital Agency & Marketing Team (UK & USA)",
    resultMetric: "3x Speed",
    metricLabel: "Faster SEO Content & Meta Curation",
    summary: "Engineered a custom Manifest v3 Chrome Extension that scrapes page data and generates SEO meta tags via Claude & ChatGPT APIs.",
    challenge: "Account managers wasted 15+ hours weekly manually auditing client web pages and drafting title/description tags in spreadsheets.",
    solution: "Built a Chrome extension that analyzes open web pages in real-time, extracts DOM elements, and prompts Claude API to generate SEO metadata.",
    results: [
      "3x faster workflow for team page-level SEO optimizations",
      "15+ hours saved per week per account strategist",
      "Eliminated manual copy-paste errors across client deliverables"
    ],
    toolsUsed: ["Chrome Extension Manifest v3", "JavaScript", "Claude API", "Tailwind CSS"],
    category: "Web App & AI",
    isPlaceholder: false
  }
];

export const testimonialsData: Testimonial[] = [
  {
    id: "test-1",
    quote: "Narayanan transformed our organic search presence and ad ROI completely. His analytical approach stemming from his engineering background shows in every single audit, campaign structure, and data report he delivers.",
    author: "Rajesh Kumar",
    role: "Founder & Managing Director",
    companyType: "Apex Global Logistics",
    location: "India & USA",
    isPlaceholder: false
  },
  {
    id: "test-2",
    quote: "Working with Narayanan as our white-label project specialist and full-stack developer was seamless. His custom WordPress plugins and n8n AI integrations cut our agency's project turnaround times in half.",
    author: "Eleanor Vance",
    role: "Chief Marketing Officer",
    companyType: "Horizon Commerce Agency",
    location: "United Kingdom",
    isPlaceholder: false
  },
  {
    id: "test-3",
    quote: "The Laravel web portal and custom Shopify theme Narayanan built boosted our online sales significantly in the first quarter. He is rare in that he understands both deep code and high-ROI marketing strategy.",
    author: "Michael Thorne",
    role: "Operations Director",
    companyType: "SaaSify Tech Solutions",
    location: "Australia & USA",
    isPlaceholder: false
  }
];

export const toolBadges: ToolBadge[] = [
  // LLMs
  { name: "Claude", logoCode: "Cl", category: "AI", description: "Complex prompt engineering, coding, and strategy" },
  { name: "ChatGPT", logoCode: "Ch", category: "AI", description: "SEO content generation, ad copy, and automation logic" },
  { name: "Gemini", logoCode: "Ge", category: "AI", description: "Multi-modal analysis, research, and data processing" },
  { name: "Perplexity", logoCode: "Pe", category: "AI", description: "Real-time market research and search intent diagnostics" },
  { name: "Grok", logoCode: "Gr", category: "AI", description: "Real-time trends and audience insights" },
  
  // Image AI
  { name: "DALL-E", logoCode: "DA", category: "AI", description: "High-resolution prompt image generation" },
  { name: "MidJourney", logoCode: "Mi", category: "AI", description: "High-converting ad visuals and creative assets" },
  { name: "Leonardo AI", logoCode: "Le", category: "AI", description: "Product visualization and graphic assets" },
  { name: "Nano Banana", logoCode: "Na", category: "AI", description: "Creative asset generation and visual editing" },
  { name: "Stitch AI", logoCode: "St", category: "AI", description: "UI mockup generation and creative design" },

  // Video AI
  { name: "HiggsField", logoCode: "Hi", category: "AI", description: "AI video generation for social ad testing" },
  { name: "Google Veo 3.1", logoCode: "Go", category: "AI", description: "High-fidelity video prompt creation" },
  { name: "Omni Flash", logoCode: "Om", category: "AI", description: "Multi-modal video & creative automation" },
  { name: "Kling AI", logoCode: "Kl", category: "AI", description: "Cinematic AI video ad creatives" },
  { name: "Hailo AI", logoCode: "Ha", category: "AI", description: "Fast video processing & creative rendering" },

  // Web & Marketing & Dev
  { name: "Google Ads", logoCode: "Go", category: "Marketing", description: "Search, Shopping, Maps, and Display campaigns" },
  { name: "Meta Ads", logoCode: "Me", category: "Marketing", description: "Facebook & Instagram full-funnel ad campaigns" },
  { name: "WordPress", logoCode: "Wo", category: "Dev", description: "Custom theme, plugin, and Gutenberg block development" },
  { name: "Shopify", logoCode: "Sh", category: "Dev", description: "Custom Liquid themes and Shopify merchant apps" },
  { name: "Laravel", logoCode: "La", category: "Dev", description: "Custom PHP web applications, APIs, and portals" },
  { name: "Chrome Extension", logoCode: "Ch", category: "Dev", description: "Manifest v3 browser extensions & productivity tools" },
  { name: "Python", logoCode: "Py", category: "Automation", description: "Data analytics, web scraping, and automation scripts" },
  { name: "n8n & Make", logoCode: "n8", category: "Automation", description: "Multi-app workflow automations and webhooks" }
];
