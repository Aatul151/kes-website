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
    subTagline: "Where trust is the foundation and steel is the frame.",
    founded: "2009",
    phone: "+91 90999 10579",
    email: "info@kesprojects.com",
    address:
        "28 29 30 31 32, MOTHER INDUSTRIAL PARK-2, DEHGAM, Kadadara Gandhinagar 382305 Gujarat",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1830.3613406471843!2d72.78765121568185!3d23.096753149260312!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e7d872f055891%3A0x1942765fd8b7bd55!2sKES%20Projects%20Private%20Limited!5e1!3m2!1sen!2sus!4v1783680527890!5m2!1sen!2sus",
    corporateVideoEmbed:
        "https://drive.google.com/file/d/1ohRXlzRnvKnR0HDspUDCMSBixL3KzRWC/preview",
    subCompanys: [
        {
            id: 1,
            name: "KBL- KES BUILTECH LLP",
            icon: "Building2",
            description:
                "Specializes in infrastructure planning and development, offering end-to-end solutions from project planning and design to execution, ensuring efficient, sustainable, and quality-driven infrastructure projects.",
        },
        {
            id: 2,
            name: "KFL- KES FABTECH LLP",
            icon: "Building2",
            description:
                "Engaged in the fabrication of high-quality steel structures and engineered components, providing reliable and customized solutions for industrial and construction requirements.",
        },
    ],
    offices: [
        {
            city: "Gandhinagar (HQ)",
            address: "28 29 30 31 32, MOTHER INDUSTRIAL PARK-2, DEHGAM, Kadadara Gandhinagar 382305 Gujarat",
            phone: "+91 90999 10579",
            email: "info@kesprojects.com",
            hours: "Mon-Sat: 9:00 AM - 6:00 PM",
        },
        {
            city: "Navsari",
            address: "KES Group, 314,Uma darshan arcade, Navsari, Gujarat 396424, IN",
            phone: "+91 90999 10579",
            email: "info@kesprojects.com",
            hours: "Mon-Sat: 9:00 AM - 6:00 PM",
        },
    ],
    satisfiedClients: 350,
    projectsDelivered: 350,
    yearsExperience: 15,
    expertEngineers: 50,
    qualityCommitment: 100,
};

// position: "left" | "right" | "bottom-left" | "bottom-right" | "top-left" | "top-right"
export const FLOATING_ACTIONS = {
    gallery: {
        label: "View Gallery",
        url: "/view-gallery",
        position: "bottom-left",
    },
    whatsapp: {
        label: "WhatsApp",
        phone: "919099910579",
        message:
            "Hello, I would like to know more about KES Groups services.",
        position: "bottom-left",
    },
    brochure: {
        label: "Download Brochure",
        url: "/downloads/kes_broucher.pdf",
        filename: "KES-Brochure.pdf",
        position: "bottom-left",
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
        url: "",
        color: "#1DA1F2",
    },
    {
        id: "facebook",
        label: "Facebook",
        icon: "Facebook",
        url: "",
        color: "#1877F2",
    },
    {
        id: "youtube",
        label: "YouTube",
        icon: "Youtube",
        url: "",
        color: "#FF0000",
    },
];

export const LANDING_SCREEN = {
    durationMs: 8000,
    backgroundVideo: "/videos/hero/home_bg_v_4.mp4",
    backgroundImage: "/images/landing/background.jpg",
    loadingBanner: "/images/landing/banner_2.webp",
    highlights: [
        "Pre-Engineered Buildings & Steel Structures",
        "Industrial Waste Water Treatment Systems - STP/ WTP",
        "EPC - Engineering, Procurement & Construction",
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
        { video: "/videos/hero/home_bg_v_1.mp4", banner: "/images/landing/banner_1.webp" },
        { video: "/videos/hero/home_bg_v_2.mp4", banner: "/images/landing/banner_2.webp" },
        { video: "/videos/hero/home_bg_v_3.mp4", banner: "/images/landing/banner_3.webp" },
    ],
    badge: "Where trust is the foundation and steel is the frame.",
    title: "Engineering Tomorrow's",
    titleHighlight: "Industrial Landmarks",
    subtitle: "Where trust is the foundation and steel is the frame",
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
    { value: COMPANY.projectsDelivered, suffix: "+", label: "Projects Delivered" },
    { value: COMPANY.yearsExperience, suffix: "+", label: "Years Experience" },
    { value: COMPANY.expertEngineers, suffix: "+", label: "Expert Engineers" },
    { value: COMPANY.qualityCommitment, suffix: "%", label: "Quality Commitment" },
];

export const SERVICES = [
    {
        id: "peb",
        icon: "Building2",
        title: "Pre Engineered Buildings",
        shortDesc: "Cost-effective, durable steel structures designed for faster construction and flexible applications.",
        description: "Pre-engineered steel buildings (PEB) are structures manufactured off-site and assembled on-site, utilizing standardized components. They offer cost-effective, time-efficient solutions for various applications, such as warehouses, factories, and commercial spaces, due to their design flexibility and durability. PEBs are characterized by their steel framing systems, which contribute to quick construction, energy efficiency and long-term structural reliability.",
        features: [
            "Industrial: Ideal for factories, warehouses, workshops, cold storage, and industrial utility structures.",
            "Commercial: Suitable for malls, offices, showrooms, shopping centers, and business facilities.",
            "Institutional: Used for schools, hospitals, exhibition halls, and auditoriums.",
            "Recreational: Supports sports and leisure facilities such as gymnasiums and indoor courts.",
            "Aviation & Military: Designed for aircraft hangars, barracks, and operational support facilities.",
            "Agricultural: Perfect for dairy farms, poultry buildings, grain storage, and greenhouses.",
        ],
        image: "/images/services/peb.jpg",
        color: "#C8102E",
    },
    {
        id: "steel",
        icon: "Layers",
        title: "Industrial Steel Structures",
        shortDesc: "Heavy-duty structural steel fabrication for industrial and commercial applications.",
        description: "KES delivers precision-engineered structural steel solutions for heavy industrial plants, multi-story commercial buildings, bridges, and specialized structures requiring high load-bearing capacity.",
        features: [
            "Heavy structural steel fabrication up to 500 MT",
            "CNC plasma and laser cutting for precision",
            "Epoxy coating options",
            "Structural analysis using STAAD.Pro and ETABS",
            "Modular construction for complex geometries",
            "In house inspection and quality certification",
        ],
        image: "/images/services/steel.jpg",
        color: "#1A1A1A",
    },
    {
        id: "stp",
        icon: "Factory",
        title: "Industrial Waste Water Treatment Systems - STP/ WTP",
        shortDesc:
            "End-to-end solutions for STP and WTP, ensuring reliable, sustainable, and efficient water treatment systems.",
        description:
            "Demonstrating our commitment to environmental responsibility, KES offers design-to-commissioning solutions for Sewage Treatment Plants (STP) and Water Treatment Plants (WTP). These systems are deployed across industrial zones, hospitals, residential complexes, and institutions, delivering compliant, reliable, and sustainable treatment results. Our capabilities include design, supply, installation, commissioning, and O&M services for both STP and WTP systems.",
        features: [
            "Customized STP design based on wastewater characteristics",
            "Design, fabrication, installation, and commissioning services",
            "Lates MBR technologies",
            "Treated water recycling and reuse solutions",
            "Automation with PLC and SCADA-based control systems",
            "Compliance with environmental standards",
        ],
        image: "/images/services/stp.jpg",
        color: "#0EA5E9",
    },
    {
        id: "turnkey",
        icon: "Key",
        title: "EPC - Engineering, Procurement & Construction",
        shortDesc: "Integrated EPC solutions for seamless, timely, and cost-effective project execution.",
        description: "KES offers comprehensive turnkey project solutions, covering the complete project life cycle from conceptual planning and detailed design to procurement, construction, and commissioning. Our EPC services integrate both Civil and Pre-Engineered Building (PEB) works, ensuring seamless coordination, single-point accountability, and efficient execution under one roof. Whether it's industrial sheds, warehouses, or infrastructure projects, KES delivers end-to-end execution with meticulous attention to timelines, structural integrity, and cost control. Our team also offers technical consultancy and project planning support, making us a trusted partner for clients seeking reliable and efficient infrastructure development.",
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

export const PROJECT_TYPES = SERVICES.map((s) => s.title);

export const WHY_KES = [
    {
        icon: "Zap",
        title: "Faster Delivery",
        desc: "Our factory-fabricated approach cuts construction time by up to 40% compared to conventional methods, ensuring you meet your operational deadlines.",
    },
    {
        icon: "Award",
        title: "Engineering Excellence",
        desc: " A team of 50+ qualified professionals, spanning Sales, Design, Production, Quality, and Projects, leverages advanced systems to deliver precision‑engineered solutions for every project.",
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
        desc: "With project experience across 18 states, our experienced erection teams can mobilize anywhere in India.",
    },
    {
        icon: "Users",
        title: "Dedicated Project Management",
        desc: "A dedicated PMC team oversees all project activities, ensuring milestone-based execution, structured reporting, and proactive issue resolution.",
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
        desc: "Structural Analysis, Modelling and Detailed Engineering Drawings using latest designing softwares.",
        icon: "PenTool",
        image: "/images/process/engineering-design.jpg",
    },
    {
        step: 3,
        title: "Manufacturing",
        desc: "Precision fabrication in our ISO‑certified factory, equipped with state‑of‑the‑art latest machineries.",
        icon: "Settings",
        image: "/images/process/manufacturing.png",
    },
    {
        step: 4,
        title: "Blasting & Painting",
        desc: "Component assembly, quality inspection, and protective coating application before dispatch.",
        icon: "Wrench",
        image: "/images/process/blasting_painting.jpg",
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
        desc: " Project handover is executed in line with customer expectations, supported by thorough final inspection and complete documentation, ensuring a smooth and transparent closure of all activities.",
        icon: "CheckCircle",
        image: "/images/process/project-handover.png",
    },
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

At KES Engineering, we have been at the forefront of India's PEB evolution for over ${COMPANY.yearsExperience} years. Our ${COMPANY.projectsDelivered}+ completed projects span every major industrial sector, from automotive assembly plants to pharmaceutical clean rooms.

Our engineering team continuously invests in the latest design software, fabrication technology, and erection methodologies to deliver PEB solutions that meet the most demanding project requirements.

The future of industrial construction in India is pre-engineered, and KES Engineering is proud to be building that future, one project at a time.`,
        tags: ["PEB", "Industrial Construction", "Steel Buildings", "India Manufacturing"],
    }
];

export const ABOUT = {
    story: `KES Group, established in 2017 and headquartered in Gandhinagar, Gujarat, is a leading solution provider in the field of Pre-Engineered Buildings (PEB) and Steel Structure Construction, with a fully equipped, state-of-the-art manufacturing facility at Mother Industrial Park–2, Kadadara Gandhinagar.

            Led by a dynamic and visionary Directors with over ${COMPANY.yearsExperience}+ years of hands-on industry experience, KES has quickly earned a reputation for delivering high-quality, customized, and cost-effective infrastructure solutions across industrial sectors. Backed by a skilled team of technocrats, in-house structural design capabilities, and modern fabrication system.

            KES offers a comprehensive range of services including PEB systems, EPC turnkey projects, Heavy engineering fabrication and erection, Retrofitting of old sheds, Industrial shed extensions, and Sewage & Waste water treatment plants (STP/ETP).

            With a strong emphasis on structural integrity, timely execution, safety compliance, and client satisfaction, KES positions itself as a one-stop solution provider and a trusted partner for industrial infrastructure development across India`,
    vision: "To be India's leading provider of cutting-edge PreEngineered Building solutions, known for engineering excellence, client trust, and sustainable growth.",
    mission: "Design, manufacture, and erect high-performance steel structures to the evolving needs of various industries and build lasting relationships with clients through integrity, transparency, and consistent performance with Uphold the highest standards of quality, safety, and operational efficiency in every stage of project execution.",
    policy_statement: "Every component is engineered and inspected to ensure structural integrity and compliance with national and international standards. We enforce strict safety protocols and maintain regulatory compliance across all operations and job sites. We are dedicated to meeting our clients’ expectations through responsive service, technical support, and on-time delivery. We embrace modern engineering practices and technologies that promote resource efficiency and align with sustainable development principles. We cultivate a skilled, safety-conscious, and motivated team that drives our commitment to excellence.",
    values: [
        { title: "Integrity", desc: "We do what we say, and we say what we do. Transparency and honesty are non-negotiable." },
        { title: "Excellence", desc: "We pursue engineering excellence in every design, every weld, and every project we deliver." },
        { title: "Safety", desc: "Zero accidents is not a goal — it is a standard. Safety is embedded in everything we do." },
        { title: "Innovation", desc: "We continuously invest in new technologies and methodologies to deliver better outcomes." },
    ],
};

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
    // TESTING ACCOUNT
    // PUBLIC_KEY: "IHQvOnAup4ofVt6xA",
    // SERVICE_ID: "service_vj8lvqg",
    // TEMPLATE_ID: "template_b6prpox",
    // TO_EMAIL: "nikhilmprajapati1999@gmail.com"

    // PRODUCTION ACCOUNT
    PUBLIC_KEY: "6Y8vVC-13hp_-PUF_",
    SERVICE_ID: "service_obmxk4m",
    TEMPLATE_ID: "template_fyh5jyk",
    TO_EMAIL: "Jitesh@kesprojects.com"
};
