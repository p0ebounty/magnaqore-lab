export interface CaseStudy {
  id: string;
  sector: string;
  geography: string;
  title: string;
  client: string;
  description: string;
  tag?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  title: string;
  tags: string;
  photoUrl: string;
  trustLine?: string;
  statLine?: string;
  roleDescription?: string;
  highlights: { title: string; bullets: string[] }[];
}

export const caseStudies: CaseStudy[] = [
  {
    id: "dhl",
    tag: "FLAGSHIP PROJECT",
    sector: "LOGISTICS",
    geography: "QATAR",
    title: "DHL Express Qatar",
    client: "DHL Express Qatar",
    description: "Executive AI capability building. Delivered AI leadership training to the DHL Qatar Board of Directors. First fully AI-literate board in the country. AI communication content approved for all Arabic countries branches."
  },
  {
    id: "realestate",
    sector: "REAL ESTATE",
    geography: "UAE & QATAR",
    title: "AI Sales & Marketing Agents",
    client: "Expert Bridge, Signature Stay, FG Realty",
    description: "AI agents deployed for lead engagement, sales conversion, emails, calls, WhatsApp and marketing automation. Multi-market implementation across UAE and Qatar."
  },
  {
    id: "apis",
    sector: "TRAVEL",
    geography: "TURKEY, KAZAKHSTAN / GCC",
    title: "AI Sales Assistant",
    client: "Apis Journey",
    description: "$15,000 USD in sales generated in 7 days. AI assistant handled client communication, package upgrades, and conversion — targeting GCC market."
  },
  {
    id: "logistics2",
    sector: "LOGISTICS",
    geography: "USA",
    title: "AI Operations System",
    client: "City Company",
    description: "AI-assisted sales operations and workflow optimization for a logistics-sector client. Delivered structured AI integration across sales and operational processes."
  },
  {
    id: "fmcg",
    sector: "FMCG",
    geography: "MOROCCO",
    title: "AI Training & Content System",
    client: "Philip Morris Distributors",
    description: "AI animation and training content created for each new product launch. Scalable internal capability built for distributor onboarding."
  },
  {
    id: "cosmetics",
    sector: "COSMETICS",
    geography: "EUROPE / GCC",
    title: "AI-Powered Market Entry",
    client: "La Brains",
    description: "AI-supported entry into GCC market for a European cosmetic brand. AI-assisted customer acquisition and regional expansion enablement."
  }
];

export const teamMembers: TeamMember[] = [
  {
    id: "ina",
    name: "Ina Nistoras",
    title: "Co-Founder & CEO",
    tags: "AI Transformation Director · International Speaker · Strategic Advisor",
    photoUrl: "https://cdn.gamma.app/pwsfkii4h2kvyu4/bb217795e31946acb4a08cd772cf8034/original/Gemini_Generated_Image_l11q1fl11q1fl11q.png",
    trustLine: "Trusted across: Government · Corporate · Startup · Education Institutions",
    highlights: [
      {
        title: "Enterprise Advisory",
        bullets: [
          "AI Trainer for Board Directors — DHL Qatar. First fully AI-literate Board in the country",
          "200+ startups & companies consulted",
          "Cross-sector: healthcare, logistics, retail, IT, edtech"
        ]
      },
      {
        title: "Global Thought Leadership",
        bullets: [
          "AI Expert — European Commission & EIC (with Deloitte)",
          "AI Panel Discussion — Qatar",
          "Moderator — Women in Tech",
          "AI Expert Panelist — Gaming Industry"
        ]
      }
    ]
  },
  {
    id: "maryia",
    name: "Maryia Sakavets",
    title: "Co-Founder & CTPO",
    tags: "AI Systems & Delivery Lead · AI Program Architect",
    photoUrl: "https://cdn.gamma.app/pwsfkii4h2kvyu4/d709786a614b4c8d8c199f37069f14c0/original/WhatsApp-Image-2026-03-27-at-14.51.08.jpeg",
    statLine: "1,500+ Students Trained · 20 AI Literacy Programs",
    highlights: [
      {
        title: "Implementation & Maturity Expertise",
        bullets: [
          "Trained 1,500+ students in AI applications across disciplines",
          "Designed 20 AI high-literacy programs for enterprise and education"
        ]
      },
      {
        title: "Academic & Institutional",
        bullets: [
          "Mentor — Skolkovo Business School (Moscow)",
          "AI in Business program — Russian Venture Forum"
        ]
      }
    ]
  },
  {
    id: "artyom",
    name: "Artyom Malinouski",
    title: "AI Architect",
    tags: "Systems & CRM Integration",
    photoUrl: "https://cdn.gamma.app/pwsfkii4h2kvyu4/1697c6ea475f48d9bced86009adf01f1/original/WhatsApp-Image-2026-03-27-at-14.38.51.jpeg",
    roleDescription: "Enterprise AI systems architect responsible for designing, integrating, and deploying scalable AI infrastructures.",
    highlights: [
      {
        title: "Execution Track Record",
        bullets: [
          "Contributed to 300+ AI systems and automations",
          "Built full-stack AI infrastructures across: Real Estate, Logistics, HR, E-commerce, EdTech",
          "Delivered: AI agents, CRM automations, internal workflow systems, document intelligence tools"
        ]
      },
      {
        title: "Technical Capability",
        bullets: [
          "AI & LLM Systems: LLM-powered workflows, multi-agent orchestration, RAG systems",
          "Integrations: N8N, Make, Zapier, Directus, AWS, Azure, GCP"
        ]
      }
    ]
  }
];
