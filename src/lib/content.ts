export const siteConfig = {
  name: "A.S. Dev & Securities x Deepindram Films & Ad Agency",
  shortName: "A.S. x Deepindram",
  description:
    "A premium digital ecosystem combining secure product engineering, cybersecurity, branding, campaigns, and growth.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://asdevdeepindram.com"
};

export const contactDetails = {
  email: "deepindramfilms@gmail.com",
  phone: "+91 92578 89953",
  location: "Ajmer, Rajasthan",
  whatsappLabel: "Message on WhatsApp",
  whatsappUrl:
    "https://wa.me/919257889953?text=Hello%20A.S.%20Dev%20and%20Deepindram%2C%20I%20want%20to%20discuss%20a%20project.",
  mapLabel: "Ajmer, Rajasthan - operating across product, security, and growth work"
};

export const stitchImages = {
  techVertical: "/images/site/tech_vertical.png",
  creativeVertical: "/images/site/creative_vertical.png",
  aura: "/images/site/aura_lifestyle.png",
  nexus: "/images/site/obsidian_core.png",
  vanguard: "/images/site/vanguard_films.png",
  monolith: "/images/site/monolith_systems.png",
  sahilPortrait: "/images/site/sahil_portrait.png",
  creativePortrait: "/images/site/creative_portrait.png",
  code: "/images/cyber/penetration_testing.png",
  data: "/images/cyber/threat_monitoring.png",
  circuit: "/images/cyber/incident_response.png",
  filmHero: "/images/site/film_hero.png",
  branding: "/images/site/agency_branding.png",
  growth: "/images/site/agency_growth.png",
  campaignOne: "/images/site/campaign_nocturne.png",
  campaignTwo: "/images/site/campaign_urban_echo.png",
  campaignThree: "/images/site/vanguard_films.png",
  portfolioObsidian: "/images/site/obsidian_core.png",
  portfolioSentinel: "/images/cyber/identity_access.png",
  portfolioNeural: "/images/site/neural_flow.png",
  portfolioApp: "/images/site/vesper_app.png",
  portfolioTitan: "/images/site/monolith_systems.png",
  office: "/images/site/hq_office.png",
  ecosystemCollaboration: "/images/site/generated_ecosystem_collaboration.png",
  clientJourney: "/images/site/generated_client_journey.png",
  secureGrowthBridge: "/images/site/generated_secure_growth_bridge.png"
};

export const navLinks = [
  { href: "/portfolio", label: "Work" },
  { href: "/as-dev-securities", label: "Development" },
  { href: "/deepindram-films-ad-agency", label: "Growth" },
  { href: "/process", label: "Process" },
  { href: "/founders", label: "Founders" }
];

export const verticals = [
  {
    name: "A.S. Dev & Securities",
    eyebrow: "Architecture & Security",
    subtitle: "Secure Apps, Websites & Cybersecurity",
    description:
      "Android, macOS, websites, secure web app development, penetration testing, vulnerability assessment, deployment hardening, and security-first product work.",
    href: "/as-dev-securities",
    cta: "Explore Development",
    image: stitchImages.techVertical,
    alt: "Abstract server corridor with dark lighting and technical infrastructure"
  },
  {
    name: "Deepindram Films & Ad Agency",
    eyebrow: "Branding & Growth",
    subtitle: "Branding, Marketing & Growth",
    description:
      "Digital marketing, social growth, paid advertising, branding, creative campaigns, content strategy, lead generation, and promotional visuals.",
    href: "/deepindram-films-ad-agency",
    cta: "Explore Growth",
    image: stitchImages.creativeVertical,
    alt: "Minimal dark studio with cinematic lighting and production equipment"
  }
];

export const whyChooseUs = [
  {
    title: "Security Built In",
    description:
      "Every build is planned around reliability, safer architecture, hardened deployment, and long-term trust.",
    icon: "shield_lock"
  },
  {
    title: "Creative Reach",
    description:
      "Brand and campaign systems are built to feel sharp, consistent, and memorable across every public touchpoint.",
    icon: "movie"
  },
  {
    title: "One Journey",
    description:
      "Strategy, build, launch, and growth connect into one client path instead of scattered vendor handoffs.",
    icon: "bolt"
  },
  {
    title: "Serious Execution",
    description:
      "Clean communication, practical roadmaps, and polished delivery keep ambitious work controlled and clear.",
    icon: "all_inclusive"
  }
];

export const asDevServices = [
  {
    title: "ANDROID & MACOS APPS",
    description:
      "Clean app experiences built with Java, Kotlin, Dart, Flutter, practical architecture, reliable data flow, and security-minded defaults.",
    image: stitchImages.code,
    alt: "Dark development workspace showing secure application code"
  },
  {
    title: "WEBSITES, WEB APPS & BACKENDS",
    description:
      "Premium websites, secure web applications, APIs, and backend systems using modern JavaScript, TypeScript, Node.js, Rust, and Go where they fit.",
    image: stitchImages.data,
    alt: "Abstract secure web application data flow in red and black"
  },
  {
    title: "SECURITY, WEB3 & HARDENING",
    description:
      "Penetration testing, vulnerability assessment, smart contract and Web3 support, deployment review, access checks, and launch hardening.",
    image: stitchImages.circuit,
    alt: "Close-up of secure infrastructure hardware with red status lighting"
  }
];

export const cyberSecuritySuite = [
  {
    title: "PENETRATION TESTING",
    description: "Controlled testing to find exploitable weaknesses before attackers or users discover them in production.",
    icon: "security"
  },
  {
    title: "Vulnerability Assessment",
    description: "Structured review of forms, auth flows, dependencies, access rules, hosting, and exposed surfaces.",
    icon: "visibility"
  },
  {
    title: "Secure Deployment",
    description: "Launch hardening for hosting, environment variables, headers, permissions, and release hygiene.",
    icon: "speed"
  },
  {
    title: "Access Protection",
    description: "Safer handling of roles, data visibility, admin access, and sensitive customer information.",
    icon: "fingerprint"
  }
];

export const stackBadges = [
  "Java",
  "Kotlin",
  "Dart",
  "Flutter",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "HTML",
  "CSS",
  "Tailwind CSS",
  "Firebase",
  "MongoDB",
  "MySQL",
  "GitHub",
  "Rust",
  "Go",
  "Smart Contracts",
  "Web3",
  "Cybersecurity tools"
];

export const deepindramServices = [
  "Digital Marketing",
  "Social Media Growth",
  "Paid Advertising",
  "Branding",
  "Creative Campaigns",
  "Content Strategy",
  "Lead Generation",
  "Promotional & Visual Work"
];

export const processSteps = [
  {
    step: "01",
    title: "Discover",
    description:
      "We clarify the business, audience, risks, offer, brand position, and the exact outcome the work must support."
  },
  {
    step: "02",
    title: "Build",
    description:
      "The product, website, campaign system, or content structure is developed with clean milestones and visible progress."
  },
  {
    step: "03",
    title: "Secure",
    description:
      "Architecture, access, input flows, deployment, and operational risk are reviewed before launch."
  },
  {
    step: "04",
    title: "Launch",
    description:
      "We prepare the release, polish the public experience, test the journey, and move the work live with discipline."
  },
  {
    step: "05",
    title: "Grow",
    description:
      "Marketing, campaigns, analytics, and optimization turn the launched system into a sustained growth engine."
  }
];

export const founders = [
  {
    name: "Sahil Kalot",
    role: "Founder, A.S. Dev & Securities",
    vertical: "Technical Leadership",
    image: stitchImages.sahilPortrait,
    alt: "Sahil Kalot, founder of A.S. Dev & Securities",
    bio:
      "Sahil leads the engineering and security vertical with a practical focus on secure products, reliable systems, and disciplined execution.",
    strengths: [
      "Secure app and web architecture",
      "Frontend and backend product development",
      "Security-first planning and launch hardening",
      "Performance, maintainability, and trust"
    ],
    workStyle:
      "He works from clarity to implementation: understand the risk, define the product path, build cleanly, test carefully, and launch with confidence.",
    vision:
      "To make digital products feel premium, fast, and trustworthy from the first interaction to the final deployment."
  },
  {
    name: "Manish Gothwal",
    role: "Founder, Deepindram Films & Ad Agency",
    vertical: "Creative & Growth Leadership",
    image: stitchImages.creativePortrait,
    alt: "Manish Gothwal operating a cinematic RED camera rig",
    bio:
      "With over 12 years of elite industry experience in professional photography and cinematic videography, Manish drives the creative and narrative engine behind Deepindram.",
    strengths: [
      "High-end cinematic videography",
      "Professional editorial photography",
      "Freelance editing & post-production",
      "Deep-market consumer psychology"
    ],
    workStyle:
      "Uncompromising attention to visual detail with over a decade of mastery. Available for dedicated agency campaigns as well as specialized freelance editing and extensive studio work.",
    vision:
      "To architect visual identities the market cannot ignore—bringing cinematic finish to high-performing digital campaigns."
  }
];

export const portfolioCategories = [
  "All",
  "Apps",
  "Websites",
  "Security",
  "Branding",
  "Marketing",
  "Creative Work"
] as const;

export type PortfolioCategory = (typeof portfolioCategories)[number];

export type PortfolioItem = {
  slug: string;
  title: string;
  category: Exclude<PortfolioCategory, "All">;
  description: string;
  tools: string[];
  result?: string;
  image: string;
  alt: string;
  size?: "large" | "wide" | "standard";
};

export const portfolioItems: PortfolioItem[] = [
  {
    slug: "obsidian-core",
    title: "Obsidian Core",
    category: "Websites",
    description:
      "Concept case study for a dark premium web experience, built around strong contrast, precise motion, and clear conversion routes.",
    tools: ["Next.js", "Tailwind CSS", "Secure Forms"],
    result: "Concept case study - replace with a live client result when ready",
    image: stitchImages.portfolioObsidian,
    alt: "Dark red digital product interface on a premium screen",
    size: "large"
  },
  {
    slug: "cyber-sentinel",
    title: "Cyber Sentinel",
    category: "Security",
    description:
      "Concept security assessment and hardening plan for a web platform handling private customer inquiries.",
    tools: ["Assessment", "Hardening", "Threat Review"],
    result: "Concept case study - suitable structure for real audit work",
    image: stitchImages.portfolioSentinel,
    alt: "Keyboard in low light with red security lighting",
    size: "standard"
  },
  {
    slug: "neural-flow",
    title: "Neural Flow",
    category: "Marketing",
    description:
      "Concept campaign system for content planning, audience segmentation, and weekly growth review.",
    tools: ["Content Strategy", "Analytics", "Social Growth"],
    result: "Concept case study - ready for real campaign metrics",
    image: stitchImages.portfolioNeural,
    alt: "Red abstract network sphere on a dark background",
    size: "standard"
  },
  {
    slug: "vesper-app",
    title: "Vesper App",
    category: "Apps",
    description:
      "Mobile and desktop app concept with secure onboarding, a focused dashboard, and clean interaction patterns.",
    tools: ["Flutter", "Firebase", "UX Flow"],
    result: "Concept case study - prototype-ready product path",
    image: stitchImages.portfolioApp,
    alt: "Dark smartphone with a red glow on screen",
    size: "wide"
  },
  {
    slug: "aura-lifestyle",
    title: "Aura Lifestyle",
    category: "Branding",
    description:
      "Concept brand and website direction for a premium lifestyle offer, balancing restraint with conversion clarity.",
    tools: ["Brand System", "Website", "Copy Direction"],
    result: "Concept case study - visual direction system",
    image: stitchImages.aura,
    alt: "Abstract dark premium render with red highlights",
    size: "wide"
  },
  {
    slug: "vanguard-films",
    title: "Vanguard Films",
    category: "Creative Work",
    description:
      "Concept cinematic campaign visuals for promotional storytelling, designed for social launch and ad testing.",
    tools: ["Production", "Creative Direction", "Paid Ads"],
    result: "Concept case study - launch asset structure",
    image: stitchImages.vanguard,
    alt: "Moody luxury product shot in dark cinematic lighting",
    size: "standard"
  },
  {
    slug: "monolith-systems",
    title: "Monolith Systems",
    category: "Websites",
    description:
      "Concept infrastructure website with an editorial grid, premium technical language, and high-trust contact routing.",
    tools: ["Next.js", "UI System", "SEO"],
    result: "Concept case study - premium lead journey",
    image: stitchImages.monolith,
    alt: "Modern dark architecture with linear lights",
    size: "wide"
  }
];
