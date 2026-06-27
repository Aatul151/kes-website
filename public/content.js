// ============================================================
// KES ENGINEERING - MASTER CONTENT FILE
// All website data is sourced from this single file.
//
// After editing: upload/replace this file and images in public/images/ on the server.
// Folder guide: landing/ | heroes/ | services/ | projects/ | industries/ | blog/ | process/ | team/ | videos/
// No app rebuild required. Hard-refresh (Ctrl+Shift+R) if cached.
// ============================================================

export const COMPANY = {
  name: "KES Group",
  tagline: "Your Engineering Partner",
  subTagline: "Design. Fabrication. Erection. Turnkey Delivery.",
  founded: "2009",
  phone: "+91 90999 10579",
  email: "info@kesengg.com",
  address:
    "KES Group, 514,Shree Ugti Corporate Park , Kudasan, Gandhinagar, Gujarat 382421, IN",
  mapEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.2!2d78.4867!3d17.3850!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDIzJzA2LjAiTiA3OMKwMjknMTIuMiJF!5e0!3m2!1sen!2sin!4v1234567890",
  subCompanys: [
    {
      id: 1,
      name: "KES Compony-1",
      icon: "Building2",
      description:
        "Specialized in the design, fabrication, and installation of pre-engineered buildings and structural steel solutions for industrial and commercial projects.",
    },
    {
      id: 2,
      name: "KES Compony-2",
      icon: "Building2",
      description:
        "Focused on turnkey infrastructure development, including STP projects, EPC services, and complete engineering solutions from concept to commissioning.",
    },
  ]
};

export const FLOATING_ACTIONS = {
  brochure: {
    label: "Download Brochure",
    url: "/downloads/kes_broucher.pdf",
    filename: "KES-Brochure.pdf",
  },
  whatsapp: {
    label: "WhatsApp",
    phone: "919099910579",
    message:
      "Hello, I would like to know more about KES Engineering services.",
  },
};

export const SOCIAL_LINKS = [
  {
    id: "linkedin",
    label: "LinkedIn",
    icon: "Linkedin",
    url: "https://www.linkedin.com/company/kes-projects-pvt-ltd",
    color: "#0077B5",
  },
  {
    id: "twitter",
    label: "Twitter",
    icon: "Twitter",
    url: "https://twitter.com/kesengineering",
    color: "#1DA1F2",
  },
  {
    id: "facebook",
    label: "Facebook",
    icon: "Facebook",
    url: "https://www.facebook.com/kesengineering",
    color: "#1877F2",
  },
  {
    id: "youtube",
    label: "YouTube",
    icon: "Youtube",
    url: "https://www.youtube.com/@kesengineering",
    color: "#FF0000",
  },
];

export const LANDING_SCREEN = {
  durationMs: 8000,
  backgroundVideo: "/videos/hero/home_bg_v_3.mp4",
  backgroundImage:
    "/images/landing/background.jpg",
  highlights: [
    "Pre-Engineered Buildings & Steel Structures",
    "Turnkey Industrial Construction Solutions",
    "STP / WTP & Specialized Engineering Services",
  ],
  mission:
    "To promote excellence in industrial Engineering Solutions with Technological Innovation on the foundation of distinct quality and corporate values.",
  oneStop:
    'We serve as a "One Stop Solution" for all kinds of Industrial Construction needs.',
  turnkeyTitle: "Turnkey Solutions for Industrial Buildings",
  turnkeyServices: [
    "Pre-Engineered Building (PEB) for Industrial & Commercial Sector",
    "Civil Design and Construction",
    "Specialized Industrial Fabrication Works",
    "Industrial Shed Retrofitting / Maintenance Work",
  ],
  valueAddedTitle: "Value Added Services",
  valueAddedServices: [
    "STP / WTP / UF for Industrial Waste Water Treatment",
    "Pre-Fabricated & Conventional Tanks for Chemical and Water Storage",
    "Water Proofing for Industrial Shed",
    "Epoxy and PU Flooring",
  ],
};

export const HOME_HERO = {
  videos: [
    "/videos/hero/home_bg_v_1.mp4",
    "/videos/hero/home_bg_v_2.mp4",
    "/videos/hero/home_bg_v_3.mp4",
  ],
  badge: "India's Premier Industrial Construction Partner",
  title: "Engineering Tomorrow's",
  titleHighlight: "Industrial Landmarks",
  subtitle: "Your Engineering Partner",
};

export const PRIVACY_POLICY = {
  title: "Privacy Policy",
  lastUpdated: "June 25, 2026",
  intro:
    `${COMPANY.name} ("KES", "we", "us", or "our") respects your privacy. This policy explains how we collect, use, and protect personal information when you visit our website or submit an inquiry through our contact forms.`,
  sections: [
    {
      title: "Information We Collect",
      content: [
        "Contact details you provide, such as your name, company name, email address, and phone number.",
        "Project-related information including project type, budget range, timeline, and description submitted through inquiry forms.",
        "Technical data collected automatically, such as browser type, device information, IP address, and pages visited, through standard website analytics.",
      ],
    },
    {
      title: "How We Use Your Information",
      content: [
        "To respond to your inquiries and prepare project proposals or quotations.",
        "To communicate with you about our services, projects, and business updates you have requested.",
        "To improve our website, services, and customer experience.",
        "To comply with applicable legal and regulatory obligations.",
      ],
    },
    {
      title: "Data Sharing",
      content: [
        "We do not sell or rent your personal information to third parties.",
        "We may share information with trusted service providers who assist us in operating our website or conducting business, subject to confidentiality obligations.",
        "We may disclose information when required by law or to protect our rights, safety, and property.",
      ],
    },
    {
      title: "Data Security",
      content: [
        "We implement reasonable administrative, technical, and physical safeguards to protect your information against unauthorized access, alteration, or disclosure.",
        "No method of transmission over the internet is completely secure, and we cannot guarantee absolute security.",
      ],
    },
    {
      title: "Data Retention",
      content: [
        "We retain personal information only for as long as necessary to fulfill the purposes described in this policy, unless a longer retention period is required by law.",
      ],
    },
    {
      title: "Your Rights",
      content: [
        "You may request access to, correction of, or deletion of your personal information by contacting us using the details below.",
        "You may opt out of marketing communications at any time by following the unsubscribe instructions or contacting us directly.",
      ],
    },
    {
      title: "Cookies",
      content: [
        "Our website may use cookies and similar technologies to enhance browsing experience and analyze site traffic. You can control cookie preferences through your browser settings.",
      ],
    },
    {
      title: "Changes to This Policy",
      content: [
        "We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated revision date.",
      ],
    },
    {
      title: "Contact Us",
      content: [
        `If you have questions about this Privacy Policy or how we handle your data, contact us at ${COMPANY.email} or ${COMPANY.phone}.`,
        `Postal address: ${COMPANY.address}`,
      ],
    },
  ],
};

export const STATS = [
  { value: 500, suffix: "+", label: "Projects Delivered" },
  { value: 15, suffix: "+", label: "Years Experience" },
  { value: 50, suffix: "+", label: "Expert Engineers" },
  { value: 100, suffix: "%", label: "Quality Commitment" },
];

export const SERVICES = [
  {
    id: "peb",
    icon: "Building2",
    title: "Pre Engineered Buildings",
    shortDesc: "Factory-fabricated steel buildings engineered for speed, precision, and cost efficiency.",
    description: "Our Pre-Engineered Buildings (PEB) are designed and fabricated in a controlled factory environment, ensuring superior quality and faster on-site erection. Ideal for industrial, commercial, and institutional applications.",
    features: [
      "Custom design to suit any span and load requirement",
      "Up to 40% faster construction vs conventional methods",
      "Optimized steel usage reducing material waste",
      "Flexible expansion and modification options",
      "Integrated insulation and roofing systems",
      "Compliant with IS, AISC, and MBMA standards",
    ],
    image: "/images/services/peb.jpg",
    color: "#C8102E",
  },
  {
    id: "steel",
    icon: "Layers",
    title: "Steel Structures",
    shortDesc: "Heavy-duty structural steel fabrication for industrial and commercial applications.",
    description: "KES delivers precision-engineered structural steel solutions for heavy industrial plants, multi-story commercial buildings, bridges, and specialized structures requiring high load-bearing capacity.",
    features: [
      "Heavy structural steel fabrication up to 500 MT",
      "CNC plasma and laser cutting for precision",
      "Hot-dip galvanizing and epoxy coating options",
      "Structural analysis using STAAD.Pro and ETABS",
      "Modular construction for complex geometries",
      "Third-party inspection and quality certification",
    ],
    image: "/images/services/steel.jpg",
    color: "#1A1A1A",
  },
  {
    id: "stp",
    icon: "Factory",
    title: "Stp Projects",
    shortDesc:
      "End-to-end sewage treatment plant solutions for industrial, commercial, and municipal applications.",
    description:
      "KES provides comprehensive STP solutions, including design, engineering, fabrication, installation, commissioning, and maintenance of sewage treatment plants. Our systems are designed to meet environmental regulations while ensuring efficient wastewater treatment, water recycling, and sustainable operations.",
    features: [
      "Customized STP design based on wastewater characteristics",
      "Design, fabrication, installation, and commissioning services",
      "MBBR, SBR, and Activated Sludge Process (ASP) technologies",
      "Treated water recycling and reuse solutions",
      "Automation with PLC and SCADA-based control systems",
      "Compliance with CPCB/SPCB environmental standards",
    ],
    image: "/images/services/stp.jpg",
    color: "#0EA5E9",
  },
  {
    id: "turnkey",
    icon: "Key",
    title: "Turnkey Projects",
    shortDesc: "End-to-end project delivery from concept to commissioning under one roof.",
    description: "Our turnkey construction service covers the complete project lifecycle — from site survey, design, engineering, fabrication, civil works, erection, MEP installation, to final commissioning and handover.",
    features: [
      "Single-point responsibility for entire project",
      "Integrated civil, structural, and MEP works",
      "Project management with real-time reporting",
      "Procurement and supply chain management",
      "Quality assurance and third-party audits",
      "Post-handover maintenance and support",
    ],
    image: "/images/services/turnkey.jpg",
    color: "#1A1A1A",
  },
];

export const WHY_KES = [
  {
    icon: "Zap",
    title: "Faster Delivery",
    desc: "Our factory-fabricated approach cuts construction time by up to 40% compared to conventional methods, ensuring you meet your operational deadlines.",
  },
  {
    icon: "Award",
    title: "Engineering Excellence",
    desc: "A team of 50+ qualified structural engineers using advanced design software to deliver precision-engineered solutions for every project.",
  },
  {
    icon: "TrendingDown",
    title: "Cost Effective Solutions",
    desc: "Optimized material usage, efficient fabrication processes, and reduced on-site labor translate to significant cost savings for our clients.",
  },
  {
    icon: "Shield",
    title: "Certified Manufacturing",
    desc: "ISO 9001:2015 certified manufacturing facility with rigorous quality control at every stage from raw material to final erection.",
  },
  {
    icon: "Globe",
    title: "Nationwide Execution",
    desc: "With project experience across 18 states, our experienced erection teams can mobilize anywhere in India within 72 hours.",
  },
  {
    icon: "Users",
    title: "Dedicated Project Management",
    desc: "Every project gets a dedicated project manager providing weekly progress reports, milestone tracking, and proactive issue resolution.",
  },
];

export const PROJECTS = [
  {
    id: 1,
    title: "Mahindra Logistics Hub",
    location: "Pune, Maharashtra",
    industry: "Logistics",
    area: "85,000 sq.ft",
    scope: "PEB Warehouse with 12m clear height, 8 dock levelers",
    image: "/images/projects/mahindra-logistics-hub.jpg",
    year: "2023",
    tag: "Logistics",
    images: [
      '/images/projects/mahindra-logistics-hub.jpg',
      '/images/projects/tata-motors-assembly-plant.jpg',
      '/images/projects/amazon-fulfillment-center.jpg',
      '/images/projects/amazon-fulfillment-center.jpg',
      '/images/projects/adani-solar-power-plant.jpg',
    ]
  },
  {
    id: 2,
    title: "Tata Motors Assembly Plant",
    location: "Sanand, Gujarat",
    industry: "Automobile",
    area: "1,20,000 sq.ft",
    scope: "Heavy steel structure with 50T overhead crane",
    image: "/images/projects/tata-motors-assembly-plant.jpg",
    year: "2023",
    tag: "Automobile",
    images: [
      '/images/projects/mahindra-logistics-hub.jpg',
      '/images/projects/tata-motors-assembly-plant.jpg',
      '/images/projects/amazon-fulfillment-center.jpg',
      '/images/projects/amazon-fulfillment-center.jpg',
      '/images/projects/adani-solar-power-plant.jpg',
    ]
  },
  {
    id: 3,
    title: "Sun Pharma Manufacturing Unit",
    location: "Vadodara, Gujarat",
    industry: "Pharmaceutical",
    area: "45,000 sq.ft",
    scope: "Clean room factory building with controlled environment",
    image: "/images/projects/sun-pharma-manufacturing.jpg",
    year: "2022",
    tag: "Pharmaceutical",
    images: [
      '/images/projects/mahindra-logistics-hub.jpg',
      '/images/projects/tata-motors-assembly-plant.jpg',
      '/images/projects/amazon-fulfillment-center.jpg',
      '/images/projects/amazon-fulfillment-center.jpg',
      '/images/projects/adani-solar-power-plant.jpg',
    ]
  },
  {
    id: 4,
    title: "Amazon Fulfillment Center",
    location: "Hyderabad, Telangana",
    industry: "Warehousing",
    area: "2,00,000 sq.ft",
    scope: "Multi-level PEB warehouse with mezzanine floors",
    image: "/images/projects/amazon-fulfillment-center.jpg",
    year: "2023",
    tag: "Warehousing",
    images: [
      '/images/projects/mahindra-logistics-hub.jpg',
      '/images/projects/tata-motors-assembly-plant.jpg',
      '/images/projects/amazon-fulfillment-center.jpg',
      '/images/projects/amazon-fulfillment-center.jpg',
      '/images/projects/adani-solar-power-plant.jpg',
    ]
  },
  {
    id: 5,
    title: "Adani Solar Power Plant",
    location: "Rajasthan",
    industry: "Renewable Energy",
    area: "3,50,000 sq.ft",
    scope: "Solar panel mounting structures and control room",
    image: "/images/projects/adani-solar-power-plant.jpg",
    year: "2022",
    tag: "Renewable Energy",
    images: [
      '/images/projects/mahindra-logistics-hub.jpg',
      '/images/projects/tata-motors-assembly-plant.jpg',
      '/images/projects/amazon-fulfillment-center.jpg',
      '/images/projects/amazon-fulfillment-center.jpg',
      '/images/projects/adani-solar-power-plant.jpg',
    ]
  },
  {
    id: 6,
    title: "ITC Foods Processing Plant",
    location: "Mysuru, Karnataka",
    industry: "Food Processing",
    area: "60,000 sq.ft",
    scope: "Hygienic factory building with HACCP compliance",
    image: "/images/projects/itc-foods-processing.jpg",
    year: "2022",
    tag: "Food Processing",
    images: [
      '/images/projects/mahindra-logistics-hub.jpg',
      '/images/projects/tata-motors-assembly-plant.jpg',
      '/images/projects/amazon-fulfillment-center.jpg',
      '/images/projects/amazon-fulfillment-center.jpg',
      '/images/projects/adani-solar-power-plant.jpg',
    ]
  },
  {
    id: 7,
    title: "Raymond Textile Mill",
    location: "Vapi, Gujarat",
    industry: "Textile",
    area: "75,000 sq.ft",
    scope: "PEB factory with humidity-controlled environment",
    image: "/images/projects/raymond-textile-mill.jpg",
    year: "2021",
    tag: "Textile",
    images: [
      '/images/projects/mahindra-logistics-hub.jpg',
      '/images/projects/tata-motors-assembly-plant.jpg',
      '/images/projects/amazon-fulfillment-center.jpg',
      '/images/projects/amazon-fulfillment-center.jpg',
      '/images/projects/adani-solar-power-plant.jpg',
    ]
  },
  {
    id: 8,
    title: "Bharat Forge Heavy Plant",
    location: "Pune, Maharashtra",
    industry: "Manufacturing",
    area: "95,000 sq.ft",
    scope: "Heavy industrial shed with 100T crane girder",
    image: "/images/projects/bharat-forge-heavy-plant.jpg",
    year: "2021",
    tag: "Manufacturing",
    images: [
      '/images/projects/mahindra-logistics-hub.jpg',
      '/images/projects/tata-motors-assembly-plant.jpg',
      '/images/projects/amazon-fulfillment-center.jpg',
      '/images/projects/amazon-fulfillment-center.jpg',
      '/images/projects/adani-solar-power-plant.jpg',
    ]
  },
];

export const INDUSTRIES = [
  {
    id: "manufacturing",
    icon: "Cog",
    title: "Manufacturing",
    desc: "Heavy and light manufacturing facilities with crane integration, utility corridors, and process-specific structural solutions.",
    image: "/images/industries/manufacturing.jpg",
    capabilities: [
      "Heavy structural steel for high-load machinery",
      "Overhead crane girder systems up to 100T",
      "Vibration-isolated foundations",
      "Explosion-proof construction zones",
    ],
  },
  {
    id: "logistics",
    icon: "Truck",
    title: "Logistics",
    desc: "High-clearance distribution centers and logistics hubs designed for maximum throughput and operational efficiency.",
    image: "/images/industries/logistics.jpg",
    capabilities: [
      "Clear spans up to 100m",
      "Multiple dock leveler configurations",
      "Truck court and yard management",
      "Automated conveyor system integration",
    ],
  },
  {
    id: "warehousing",
    icon: "Package",
    title: "Warehousing",
    desc: "Modern warehousing solutions for e-commerce, FMCG, and bulk storage with advanced racking compatibility.",
    image: "/images/industries/warehousing.jpg",
    capabilities: [
      "High-bay racking system compatibility",
      "Mezzanine floor integration",
      "Fire suppression systems",
      "Energy-efficient LED and roofing",
    ],
  },
  {
    id: "pharmaceutical",
    icon: "Pill",
    title: "Pharmaceutical",
    desc: "GMP-compliant manufacturing facilities with clean room construction, controlled environments, and regulatory adherence.",
    image: "/images/industries/pharmaceutical.jpg",
    capabilities: [
      "ISO Class 5-8 clean room construction",
      "HVAC and air handling integration",
      "Epoxy flooring and hygienic wall systems",
      "FDA and WHO-GMP compliance",
    ],
  },
  {
    id: "automobile",
    icon: "Car",
    title: "Automobile",
    desc: "Large-span assembly plants, paint shops, and ancillary facilities for automotive OEMs and Tier-1 suppliers.",
    image: "/images/industries/automobile.jpg",
    capabilities: [
      "Assembly line structural integration",
      "Paint booth and oven room construction",
      "Pit and trench construction for assembly",
      "High-bay storage for body-in-white",
    ],
  },
  {
    id: "food",
    icon: "UtensilsCrossed",
    title: "Food Processing",
    desc: "HACCP-compliant food processing facilities with hygienic construction, temperature control, and food-safe materials.",
    image: "/images/industries/food-processing.jpg",
    capabilities: [
      "HACCP and FSSC 22000 compliant design",
      "Stainless steel and food-safe cladding",
      "Cold room and blast freezer integration",
      "Pest-proof construction detailing",
    ],
  },
  {
    id: "textile",
    icon: "Scissors",
    title: "Textile",
    desc: "Humidity-controlled spinning mills, weaving sheds, and processing units designed for textile manufacturing requirements.",
    image: "/images/industries/textile.jpg",
    capabilities: [
      "Humidity and temperature-controlled environments",
      "Overhead monorail and trolley systems",
      "Acoustic insulation for loom sheds",
      "Effluent treatment plant structures",
    ],
  },
  {
    id: "renewable",
    icon: "Sun",
    title: "Renewable Energy",
    desc: "Solar mounting structures, wind turbine foundations, and energy storage facility construction for the clean energy sector.",
    image: "/images/industries/renewable-energy.jpg",
    capabilities: [
      "Solar panel mounting structures (ground & rooftop)",
      "Wind turbine foundation and tower structures",
      "Battery energy storage system enclosures",
      "Substation and control room buildings",
    ],
  },
];

export const PROCESS_STEPS = [
  {
    step: 1,
    title: "Consultation",
    desc: "Initial site visit, requirement analysis, and feasibility study to understand your project goals.",
    icon: "MessageSquare",
    image: "/images/process/consultation.jpg",
  },
  {
    step: 2,
    title: "Engineering Design",
    desc: "Structural analysis, 3D modeling, and detailed engineering drawings using STAAD.Pro and AutoCAD.",
    icon: "PenTool",
    image: "/images/process/engineering-design.jpg",
  },
  {
    step: 3,
    title: "Manufacturing",
    desc: "Precision fabrication in our ISO-certified factory with CNC cutting, welding, and surface treatment.",
    icon: "Settings",
    image: "/images/process/manufacturing.png",
  },
  {
    step: 4,
    title: "Fabrication",
    desc: "Component assembly, quality inspection, and protective coating application before dispatch.",
    icon: "Wrench",
    image: "/images/process/fabrication.jpg",
  },
  {
    step: 5,
    title: "Erection",
    desc: "Skilled erection teams mobilize on-site with all equipment for safe and efficient structural assembly.",
    icon: "HardHat",
    image: "/images/process/erection.jpg",
  },
  {
    step: 6,
    title: "Project Handover",
    desc: "Final inspection, documentation, as-built drawings, and formal handover with warranty certificate.",
    icon: "CheckCircle",
    image: "/images/process/project-handover.png",
  },
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Rajesh Kumar",
    designation: "VP - Infrastructure",
    company: "Mahindra Logistics",
    quote:
      "KES delivered our 85,000 sq.ft warehouse in just 14 weeks — 3 weeks ahead of schedule. The quality of fabrication and the professionalism of their erection team was outstanding. Highly recommended for any large-scale industrial project.",
    rating: 5,
    industry: "Logistics",
  },
  {
    id: 2,
    name: "Priya Sharma",
    designation: "Head of Projects",
    company: "Sun Pharma",
    quote: "The clean room construction expertise KES brought to our pharmaceutical facility was exceptional. They understood GMP requirements thoroughly and delivered a facility that passed our regulatory audit on the first attempt.",
    rating: 5,
    industry: "Pharmaceutical",
  },
  {
    id: 3,
    name: "Arun Mehta",
    designation: "Director - Operations",
    company: "Amazon India",
    quote: "We've worked with many construction partners across India, but KES stands out for their project management discipline and quality consistency. Our Hyderabad fulfillment center was delivered on time and within budget.",
    rating: 5,
    industry: "Warehousing",
  },
  {
    id: 4,
    name: "Suresh Patel",
    designation: "GM - Manufacturing",
    company: "Tata Motors",
    quote: "The heavy steel structure for our assembly plant required precision engineering for the 50T crane girder system. KES's engineering team handled the complexity with expertise and delivered a structurally sound facility.",
    rating: 5,
    industry: "Automobile",
  },
  {
    id: 5,
    name: "Deepa Nair",
    designation: "CEO",
    company: "Adani Green Energy",
    quote: "KES executed our solar mounting structure project across 350,000 sq.ft in Rajasthan with remarkable efficiency. Their understanding of renewable energy infrastructure requirements made them the ideal partner.",
    rating: 5,
    industry: "Renewable Energy",
  },
];

export const CERTIFICATIONS = [
  { name: "ISO 9001:2015", subtitle: "Quality Management", icon: "Shield" },
  { name: "ISO 14001:2015", subtitle: "Environmental Management", icon: "Leaf" },
  { name: "OHSAS 18001", subtitle: "Occupational Health & Safety", icon: "Heart" },
  { name: "BIS Certified", subtitle: "Bureau of Indian Standards", icon: "Award" },
  { name: "AISC Member", subtitle: "American Institute of Steel", icon: "Star" },
  { name: "MBMA Compliant", subtitle: "Metal Building Manufacturers", icon: "CheckCircle" },
];

export const SERVICE_AREAS = [
  "Maharashtra",
  "Gujarat",
  "Rajasthan",
  "Madhya Pradesh",
];

export const BLOG_POSTS = [
  {
    id: 1,
    slug: "future-of-peb-in-india",
    title: "The Future of Pre-Engineered Buildings in India's Industrial Boom",
    category: "PEB",
    date: "December 15, 2024",
    author: "Er. Vikram Reddy",
    authorRole: "Chief Structural Engineer",
    readTime: "6 min read",
    excerpt: "India's manufacturing sector is undergoing a seismic shift, and Pre-Engineered Buildings are at the forefront of this transformation. Discover how PEB technology is reshaping industrial construction.",
    image: "/images/blog/future-of-peb-in-india.jpg",
    content: `India's industrial landscape is transforming at an unprecedented pace, driven by the government's Make in India initiative, PLI schemes, and massive infrastructure investments. At the heart of this transformation is a construction technology that has quietly revolutionized how industrial buildings are built: Pre-Engineered Buildings (PEB).

## What Makes PEB the Technology of Choice?

Pre-Engineered Buildings represent a paradigm shift from conventional construction. Unlike traditional RCC or conventional steel construction, PEB systems are designed, fabricated, and delivered as complete building systems from a factory environment.

The key advantages are compelling:

**Speed**: A typical 50,000 sq.ft PEB warehouse can be erected in 8-12 weeks, compared to 6-9 months for conventional construction. This speed-to-market advantage is critical for businesses that need to operationalize quickly.

**Cost Efficiency**: Factory fabrication eliminates material waste, reduces on-site labor requirements, and minimizes construction supervision costs. Clients typically save 20-35% compared to conventional construction.

**Quality Consistency**: Every component is manufactured under controlled factory conditions with automated cutting, welding, and quality inspection systems, ensuring dimensional accuracy and structural integrity.

## India's PEB Market: A Growth Story

The Indian PEB market was valued at approximately $2.8 billion in 2023 and is projected to grow at a CAGR of 12.5% through 2030. This growth is driven by:

- Rapid expansion of e-commerce and logistics infrastructure
- Automotive sector capacity additions
- Pharmaceutical manufacturing expansion post-COVID
- Renewable energy infrastructure development
- Government-backed industrial corridor projects

## The Technology Evolution

Modern PEB systems have evolved far beyond simple shed structures. Today's PEB buildings incorporate:

- Clear spans up to 100 meters without intermediate columns
- Heights up to 25 meters for high-bay storage applications
- Integrated crane systems up to 100-tonne capacity
- Advanced insulation systems for temperature-controlled environments
- Solar-ready roofing systems for energy self-sufficiency

## KES Engineering's Role in India's PEB Revolution

At KES Engineering, we have been at the forefront of India's PEB evolution for over 15 years. Our 500+ completed projects span every major industrial sector, from automotive assembly plants to pharmaceutical clean rooms.

Our engineering team continuously invests in the latest design software, fabrication technology, and erection methodologies to deliver PEB solutions that meet the most demanding project requirements.

The future of industrial construction in India is pre-engineered, and KES Engineering is proud to be building that future, one project at a time.`,
    tags: ["PEB", "Industrial Construction", "Steel Buildings", "India Manufacturing"],
  },
  {
    id: 2,
    slug: "warehouse-design-best-practices",
    title: "10 Critical Design Factors for High-Performance Warehouses",
    category: "Warehousing",
    date: "November 28, 2024",
    author: "Er. Anita Krishnan",
    authorRole: "Head of Design",
    readTime: "8 min read",
    excerpt: "Designing a warehouse that maximizes operational efficiency requires careful consideration of structural, operational, and future-proofing factors. Here are the 10 most critical design decisions.",
    image: "/images/blog/warehouse-design-best-practices.jpg",
    content: `A warehouse is not just a building — it is a critical operational asset that directly impacts your supply chain efficiency, labor productivity, and bottom line. Getting the design right from the start is essential, as structural decisions made during design are extremely costly to change post-construction.

## 1. Clear Height Optimization

The single most impactful design decision for a warehouse is the clear height — the usable vertical space from floor to the lowest obstruction. Modern logistics operations increasingly require 12-15 meter clear heights to accommodate high-bay racking systems.

Every additional meter of clear height dramatically increases your storage capacity without increasing your land footprint. A 15m clear height warehouse can store 40% more inventory than a 10m clear height building of the same floor area.

## 2. Column Grid and Clear Span

The column grid determines your operational flexibility. For most warehousing applications, a 12m x 24m or 12m x 30m column grid provides the optimal balance between structural efficiency and operational flexibility.

For automated warehouses with AS/RS systems, clear spans of 40-60 meters may be required to accommodate the racking and aisle configurations.

## 3. Floor Load Capacity

Warehouse floors must be designed for the specific loading conditions of your operation. Key considerations include:
- Point loads from racking uprights (typically 8-15 tonnes per upright)
- Uniformly distributed loads from stored goods
- Dynamic loads from forklift and MHE operations
- Future load increases as operations scale

## 4. Dock Configuration

Loading dock design is critical for throughput efficiency. Key parameters include:
- Number of docks based on truck volume and dwell time
- Dock height (typically 1.2m for standard trucks)
- Dock leveler type (mechanical, hydraulic, or air-powered)
- Truck court depth (minimum 35m for articulated trucks)

## 5. Natural Lighting and Ventilation

Incorporating translucent roofing panels (typically 10-15% of roof area) and ridge ventilators significantly reduces energy costs and improves working conditions. Properly designed natural ventilation can eliminate the need for mechanical ventilation in many warehouse applications.

## 6. Fire Safety Integration

Modern warehouses must integrate fire suppression systems from the design stage. This includes:
- ESFR (Early Suppression Fast Response) sprinkler systems
- Smoke detection and alarm systems
- Fire compartmentalization through fire walls
- Emergency egress planning

## 7. Expansion Capability

Design your warehouse with future expansion in mind. PEB structures can be easily extended by adding bays to the length of the building. Ensure end walls are designed as non-load-bearing to facilitate future expansion.

## 8. Sustainability Features

Green warehouse design is increasingly important for corporate sustainability goals and regulatory compliance:
- Solar-ready roofing with adequate structural capacity
- Rainwater harvesting systems
- LED lighting with motion sensors
- Insulated roofing panels for thermal efficiency

## 9. Security and Access Control

Perimeter security, CCTV integration, and access control systems should be planned from the design stage to ensure proper infrastructure is in place.

## 10. Technology Infrastructure

Modern warehouses require robust technology infrastructure:
- Fiber optic and wireless network coverage
- Charging infrastructure for electric MHE
- WMS server room and control center
- CCTV and security system infrastructure

At KES Engineering, our warehouse design team considers all these factors holistically to deliver warehouses that perform optimally from day one and continue to serve your operations efficiently for decades.`,
    tags: ["Warehouse Design", "Logistics", "Industrial Construction", "PEB"],
  },
  {
    id: 3,
    slug: "steel-structure-vs-rcc",
    title: "Steel Structure vs RCC: Making the Right Choice for Your Industrial Project",
    category: "Steel Structures",
    date: "November 10, 2024",
    author: "Er. Suresh Babu",
    authorRole: "Senior Structural Engineer",
    readTime: "7 min read",
    excerpt: "The choice between steel and RCC construction is one of the most consequential decisions in industrial project planning. This comprehensive comparison will help you make the right choice.",
    image: "/images/blog/steel-structure-vs-rcc.jpg",
    content: `When planning an industrial facility, one of the most fundamental decisions is the choice of structural system: steel or reinforced concrete (RCC). Both have their merits, and the right choice depends on your specific project requirements, timeline, budget, and long-term operational needs.

## Construction Speed

**Steel wins decisively.** A steel structure can be erected 3-4 times faster than an equivalent RCC structure. For a 50,000 sq.ft industrial building:
- Steel structure: 8-14 weeks for erection
- RCC structure: 6-12 months for construction

This speed advantage translates directly to faster revenue generation and reduced financing costs.

## Cost Comparison

The cost comparison is nuanced and depends on the specific application:

**For large-span industrial buildings (>15m span):** Steel is typically 15-25% more economical than RCC due to the structural efficiency of steel in long-span applications.

**For multi-story commercial buildings (<12m span):** RCC may be more economical for the structural frame, though steel still offers advantages in speed and flexibility.

## Flexibility and Modification

**Steel is far superior for future modifications.** Industrial operations evolve, and the ability to modify your building is invaluable:
- Adding crane systems to an existing steel building is straightforward
- Extending a steel building by adding bays is simple and cost-effective
- Modifying RCC structures is expensive, disruptive, and sometimes structurally compromising

## Seismic Performance

Modern steel structures with proper connection design perform excellently in seismic zones. Steel's high ductility allows it to absorb seismic energy without catastrophic failure. RCC structures can also be designed for seismic resistance, but require more material and careful detailing.

## Maintenance Requirements

**RCC requires less maintenance** over the long term. Steel structures require periodic inspection and repainting (typically every 10-15 years) to prevent corrosion. However, modern coating systems (hot-dip galvanizing, epoxy coatings) have significantly extended maintenance intervals.

## When to Choose Steel

- Large-span industrial buildings (>15m span)
- Projects with tight construction timelines
- Buildings requiring future expansion or modification
- Facilities requiring overhead crane systems
- Projects in remote locations where skilled RCC labor is scarce

## When to Choose RCC

- Multi-story buildings with heavy floor loads
- Buildings in highly corrosive environments
- Projects where long-term maintenance minimization is the priority
- Structures requiring high thermal mass

## The Hybrid Approach

Many modern industrial facilities use a hybrid approach: steel superstructure for the main building frame (for speed and span efficiency) with RCC foundations, mezzanine floors, and ancillary structures. This approach captures the best of both systems.

At KES Engineering, our structural engineers analyze each project's specific requirements to recommend the optimal structural system — or hybrid approach — that delivers the best value for your investment.`,
    tags: ["Steel Structures", "RCC", "Industrial Construction", "Structural Engineering"],
  },
  {
    id: 4,
    slug: "turnkey-construction-benefits",
    title: "Why Turnkey Construction is the Smart Choice for Industrial Projects",
    category: "Project Management",
    date: "October 22, 2024",
    author: "Ramesh Iyer",
    authorRole: "Director - Projects",
    readTime: "5 min read",
    excerpt: "Managing multiple contractors for a single industrial project is a recipe for delays, disputes, and cost overruns. Discover why turnkey construction delivers better outcomes.",
    image: "/images/blog/turnkey-construction-benefits.jpg",
    content: `Industrial construction projects are complex undertakings involving dozens of specialized contractors, thousands of design decisions, and millions of rupees in investment. The traditional multi-contractor approach — where the client manages separate contracts for civil, structural, MEP, and finishing works — creates significant coordination challenges that often result in delays, disputes, and cost overruns.

Turnkey construction offers a fundamentally different approach: a single contractor takes complete responsibility for delivering the finished facility, from initial design through final commissioning.

## The Single-Point Responsibility Advantage

The most significant benefit of turnkey construction is the elimination of the "blame game" that plagues multi-contractor projects. When something goes wrong in a traditional project, contractors point fingers at each other, leaving the client to arbitrate disputes while the project stalls.

In a turnkey arrangement, there is only one party responsible for the outcome: the turnkey contractor. This creates powerful incentives for proactive problem-solving and coordination.

## Faster Project Delivery

Turnkey contractors can overlap design, procurement, and construction activities in ways that are impossible in sequential multi-contractor projects. While the structural design is being finalized, the turnkey contractor can simultaneously:
- Procure long-lead items (structural steel, roofing materials)
- Mobilize civil works teams for foundation construction
- Coordinate MEP design with structural design

This parallel processing typically reduces total project duration by 20-30%.

## Cost Certainty

Turnkey contracts are typically executed on a fixed-price basis, providing clients with cost certainty from project inception. The turnkey contractor absorbs the risk of cost overruns due to coordination failures, design conflicts, or procurement delays.

## Quality Integration

When a single contractor is responsible for all aspects of construction, quality integration is seamless. There are no interface disputes between contractors, no gaps in responsibility, and no finger-pointing when quality issues arise.

## KES Engineering's Turnkey Capability

KES Engineering has delivered over 150 turnkey industrial projects across India, ranging from 10,000 sq.ft industrial sheds to 2,00,000 sq.ft integrated manufacturing complexes.

Our turnkey capability encompasses:
- Architectural and structural design
- Civil and foundation works
- Structural steel fabrication and erection
- Roofing and cladding systems
- MEP coordination and installation
- Interior finishing and fit-out
- Commissioning and handover

Contact our projects team to discuss how KES Engineering can deliver your next industrial facility on a turnkey basis.`,
    tags: ["Turnkey Construction", "Project Management", "Industrial Projects"],
  },
  {
    id: 5,
    slug: "green-industrial-buildings",
    title: "Building Green: Sustainable Industrial Construction Practices",
    category: "Industry News",
    date: "October 5, 2024",
    author: "Er. Meera Pillai",
    authorRole: "Sustainability Lead",
    readTime: "6 min read",
    excerpt: "Sustainability is no longer optional in industrial construction. Learn how green building practices are being integrated into modern industrial facilities and the business case for going green.",
    image: "/images/blog/green-industrial-buildings.jpg",
    content: `The industrial construction sector is undergoing a green revolution. Driven by corporate sustainability commitments, regulatory requirements, and the compelling economics of energy efficiency, green industrial buildings are rapidly becoming the new standard rather than the exception.

## The Business Case for Green Industrial Buildings

The business case for sustainable industrial construction has never been stronger:

**Energy Cost Savings**: A well-designed green industrial building can reduce energy consumption by 30-50% compared to a conventional building. For a large manufacturing facility consuming 500,000 kWh per month, this translates to annual savings of Rs. 60-100 lakhs.

**Water Conservation**: Rainwater harvesting and water recycling systems can reduce municipal water consumption by 40-60%, delivering significant cost savings and reducing dependence on increasingly scarce water resources.

**Carbon Credits**: Industrial facilities that reduce their carbon footprint can generate carbon credits under India's Carbon Credit Trading Scheme (CCTS), creating an additional revenue stream.

**Regulatory Compliance**: India's Energy Conservation Building Code (ECBC) for industrial buildings is becoming increasingly stringent. Building green now ensures compliance with current and future regulations.

## Key Green Building Features for Industrial Facilities

### Solar-Ready Roofing Systems

Modern PEB roofing systems can be designed with the structural capacity to support solar panels from day one, even if solar installation is planned for a later phase. This forward-thinking approach avoids costly structural reinforcement later.

### Insulated Roofing Panels

Insulated sandwich panels (50-150mm thickness) dramatically reduce heat gain through the roof, reducing cooling loads and improving working conditions. The payback period for insulated roofing is typically 3-5 years through energy savings.

### Natural Lighting Integration

Translucent roofing panels and clerestory windows can provide adequate natural lighting for most industrial operations during daylight hours, eliminating the need for artificial lighting and reducing energy consumption.

### Rainwater Harvesting

Industrial roofs are ideal for rainwater harvesting due to their large surface area. A 10,000 sq.m roof can harvest 6-8 million liters of rainwater annually in most Indian locations, sufficient for significant industrial water needs.

### LED Lighting with Smart Controls

LED lighting with occupancy sensors and daylight harvesting controls can reduce lighting energy consumption by 60-70% compared to conventional fluorescent lighting.

## KES Engineering's Green Building Commitment

At KES Engineering, sustainability is integrated into every project from the design stage. Our green building services include:

- LEED and IGBC certification support
- Energy modeling and simulation
- Solar mounting structure design and installation
- Rainwater harvesting system design
- Green roof and wall systems
- Sustainable material specification

We believe that the most sustainable building is one that is built right the first time — with quality materials, precise engineering, and a long-term perspective on operational performance.`,
    tags: ["Green Buildings", "Sustainability", "Industrial Construction", "Solar"],
  },
  {
    id: 6,
    slug: "peb-erection-safety",
    title: "Safety First: Best Practices in PEB Erection and Site Safety",
    category: "PEB",
    date: "September 18, 2024",
    author: "Er. Kiran Rao",
    authorRole: "Head of HSE",
    readTime: "5 min read",
    excerpt: "Steel structure erection is one of the most hazardous activities in construction. Discover the safety protocols and best practices that KES Engineering follows to ensure zero-accident project delivery.",
    image: "/images/blog/peb-erection-safety.jpg",
    content: `Steel structure erection is inherently one of the most hazardous activities in the construction industry. Working at heights with heavy steel components, operating cranes and lifting equipment, and coordinating multiple trades simultaneously creates a complex safety environment that demands rigorous protocols and constant vigilance.

At KES Engineering, safety is not a compliance checkbox — it is a core value that is embedded in every aspect of our operations, from project planning through final handover.

## Our Safety Philosophy

We operate on the principle that every accident is preventable. This belief drives us to invest heavily in safety training, equipment, and systems, and to hold every team member accountable for safety performance.

Our safety record speaks for itself: over 15 years and 500+ projects, KES Engineering has maintained a Lost Time Injury (LTI) rate of 0.12 — significantly below the industry average of 0.8.

## Pre-Erection Safety Planning

Safety planning begins before a single steel member is lifted. Our pre-erection safety process includes:

**Site Hazard Assessment**: A comprehensive assessment of site-specific hazards including underground utilities, overhead power lines, soil conditions, and access constraints.

**Erection Sequence Planning**: Detailed planning of the erection sequence to ensure structural stability at every stage of construction, with temporary bracing and guying requirements clearly specified.

**Crane Selection and Planning**: Careful selection of crane type and capacity based on the heaviest lift, reach requirements, and ground bearing capacity. All crane lifts are planned using lift study software.

**Emergency Response Planning**: Site-specific emergency response plans covering medical emergencies, fire, structural collapse, and severe weather events.

## Personal Protective Equipment

All KES Engineering erection personnel are required to wear:
- Safety helmets (IS 2925 compliant)
- Full-body safety harnesses (EN 361 compliant)
- Safety footwear with steel toe caps
- High-visibility vests
- Safety glasses and gloves

## Working at Heights

Working at heights is the highest-risk activity in steel erection. Our protocols include:

- 100% tie-off requirement at all heights above 1.8 meters
- Use of self-retracting lifelines (SRLs) for mobility at height
- Installation of safety nets below erection areas
- Prohibition of work at heights during adverse weather conditions

## Lifting Operations Safety

All lifting operations are conducted under the supervision of a certified Lifting Supervisor. Key protocols include:

- Pre-lift inspection of all lifting equipment and rigging
- Exclusion zones below all lifts
- Tag line use for all lifts to control load movement
- Communication protocols between crane operator and riggers

## Continuous Safety Training

All KES Engineering erection personnel undergo:
- Induction training before site mobilization
- Monthly safety toolbox talks
- Annual refresher training on working at heights and lifting operations
- First aid training for all supervisors

Safety is not just a priority at KES Engineering — it is a value that we live every day on every project. Our clients can be confident that their projects will be delivered not just on time and within budget, but safely.`,
    tags: ["Safety", "PEB Erection", "Construction Safety", "HSE"],
  },
];

export const ABOUT = {
  story: `KES Engineering was founded in 2017 with a singular vision: to bring world-class industrial construction capabilities to India's rapidly growing manufacturing sector. What began as a small structural steel fabrication unit in Hyderabad has grown into one of India's most trusted names in Pre-Engineered Buildings and industrial construction.

Over 8 years, we have delivered 500+ projects across 18 states, serving India's most respected industrial corporations. Our journey has been defined by an unwavering commitment to engineering excellence, on-time delivery, and client satisfaction.`,
  vision: "To be India's most trusted and innovative industrial construction partner, enabling businesses to build their operational infrastructure faster, smarter, and more sustainably.",
  mission: "To deliver precision-engineered industrial buildings and structures that exceed client expectations in quality, speed, and value, while maintaining the highest standards of safety and sustainability.",
  values: [
    { title: "Integrity", desc: "We do what we say, and we say what we do. Transparency and honesty are non-negotiable." },
    { title: "Excellence", desc: "We pursue engineering excellence in every design, every weld, and every project we deliver." },
    { title: "Safety", desc: "Zero accidents is not a goal — it is a standard. Safety is embedded in everything we do." },
    { title: "Innovation", desc: "We continuously invest in new technologies and methodologies to deliver better outcomes." },
  ],
  leadership: [
    {
      name: "K. Suresh Reddy",
      designation: "Chairman & Managing Director",
      message: "When I founded KES Engineering in 2009, I had a simple belief: that India's industrial sector deserved a construction partner that combined global engineering standards with deep local expertise. Fifteen years and 500 projects later, that belief has been validated by the trust our clients place in us every day.",
      image: "/images/team/k-suresh-reddy.jpg",
    },
    {
      name: "Er. Priya Menon",
      designation: "Director - Engineering",
      message: "Our engineering team is the backbone of KES Engineering. We invest continuously in the latest design tools, training, and processes to ensure that every structure we design is not just code-compliant, but optimally engineered for performance, economy, and longevity.",
      image: "/images/team/priya-menon.jpg",
    },
    {
      name: "Anil Kumar",
      designation: "Director - Operations",
      message: "Delivering 500+ projects on time and within budget requires exceptional operational discipline. Our project management systems, supply chain capabilities, and erection expertise allow us to execute complex industrial projects anywhere in India with consistent quality and reliability.",
      image: "/images/team/anil-kumar.jpg",
    },
  ],
  milestones: [
    { year: "2009", event: "KES Engineering founded in Hyderabad with 12 employees" },
    { year: "2011", event: "First major PEB project: 30,000 sq.ft warehouse for a logistics company" },
    { year: "2013", event: "ISO 9001:2008 certification achieved; expanded to 50 employees" },
    { year: "2015", event: "100th project milestone; expanded operations to Maharashtra and Gujarat" },
    { year: "2017", event: "Commissioned new 50,000 sq.ft manufacturing facility in Hyderabad" },
    { year: "2019", event: "250th project delivered; expanded to 18 states across India" },
    { year: "2021", event: "ISO 9001:2015 upgrade; launched turnkey construction division" },
    { year: "2023", event: "500th project milestone; 50+ engineers; Rs. 500 Cr+ annual revenue" },
  ],
};

export const PROJECT_TYPES = SERVICES.map((s) => s.title);

export const BUDGET_RANGES = [
  "Under ₹50 Lakhs",
  "₹50 Lakhs – ₹1 Crore",
  "₹1 – ₹5 Crore",
  "₹5 – ₹10 Crore",
  "Above ₹10 Crore",
  "Not Sure Yet",
];

export const TIMELINES = [
  "Immediate (0–3 months)",
  "3–6 months",
  "6–12 months",
  "12+ months",
  "Planning stage only",
];

export const EMAIL_SERVICES = {
  PUBLIC_KEY: "IHQvOnAup4ofVt6xA",
  SERVICE_ID: "service_vj8lvqg",
  TEMPLATE_ID: "template_b6prpox",
  TO_EMAIL: "nikhilmprajapti1999@gmail.com",
  // TO_EMAIL : "aatul.work@gmail.com"
};

export const CLIENTS = [
  {
    id: 1,
    image: "/images/clients/reliance.jpg",
    title: "Reliance Industries",
    description:
      "Delivered structural steel fabrication and EPC solutions for large-scale industrial infrastructure projects.",
  },
  {
    id: 2,
    image: "/images/clients/tata-steel.jpg",
    title: "Tata Steel",
    description:
      "Executed heavy structural steel fabrication and installation for manufacturing facilities.",
  },
  {
    id: 3,
    image: "/images/clients/adani.jpg",
    title: "Adani Group",
    description:
      "Provided engineering and fabrication services for industrial and infrastructure developments.",
  },
  {
    id: 4,
    image: "/images/clients/larsen-toubro.jpg",
    title: "Larsen & Toubro",
    description:
      "Supported EPC projects with precision structural steel components and fabrication services.",
  },
  {
    id: 5,
    image: "/images/clients/ultratech.jpg",
    title: "UltraTech Cement",
    description:
      "Supplied structural solutions for cement plant expansion and modernization projects.",
  },
];