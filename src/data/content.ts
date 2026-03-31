export interface LinkItem {
  label: string;
  url: string;
}

export interface HighlightItem {
  text: string;
  url?: string;
}

export interface CaseStudy {
  id: string;
  sector: string;
  geography: string;
  title: string;
  client: string;
  description: string;
  outcome?: string;
  tag?: string;
  links?: LinkItem[];
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
  highlights: { title: string; bullets: HighlightItem[] }[];
}

export const caseStudies: CaseStudy[] = [
  {
    id: "logistics-usa",
    sector: "LOGISTICS",
    geography: "USA",
    title: "AI Operations System",
    client: "City Company",
    description: "AI-assisted sales operations and workflow optimization for a logistics-sector client. Delivered structured AI integration across sales and operational processes (emails, calls, customer communication)",
    links: [
      { label: "AI assistant lead outcomes", url: "https://drive.google.com/drive/folders/1uSDHMWPETYiPvpjKvcM7VZfs3TwrPe1g?usp=sharing" }
    ]
  },
  {
    id: "realestate",
    sector: "REAL ESTATE",
    geography: "UAE & QATAR",
    title: "AI Sales & Marketing Agents",
    client: "Expert Bridge, Signature Stay, FG Realty",
    description: "AI agents deployed for lead engagement, sales conversion, emails, calls, WhatsApp and marketing automation. Multi-market implementation across UAE and Qatar.",
    links: [
      { label: "Expert Bridge portfolio", url: "https://drive.google.com/drive/folders/1z5o6SFHVddptyny-8K8oI9uzxy1komuL?usp=sharing" },
      { label: "FG Realty portfolio", url: "https://drive.google.com/drive/folders/1BY0b2-383lKLoXmGmEeI9vaTwUFU-8RX?usp=sharing" },
      { label: "FG Realty System Tutorial Part 1", url: "https://app.heygen.com/videos/ab589ab23e8846499fb9e626905f51f6-en_en-US" },
      { label: "FG Realty System Tutorial Part 2", url: "https://app.heygen.com/videos/22068900fe754dbfb9ea04682ec70248-en_en-US" }
    ]
  },
  {
    id: "travel",
    sector: "TRAVEL",
    geography: "Turkey, KAZAKHSTAN / GCC",
    title: "AI Sales Assistant",
    client: "Apis Journey",
    description: "$15,000 USD in sales generated in 7 days. AI assistant handled client communication, package upgrades, and conversion — targeting GCC market.",
    links: [
      { label: "Tutorial of AI assistant communicating with clients", url: "https://drive.google.com/file/d/1GviAVVx1b3kPmwTkotSFNQbrY4yag0va/view?usp=sharing" },
      { label: "LinkedIn case description post 1", url: "https://www.linkedin.com/posts/brilliant-seed-up_successstory-businessgrowth-marketingroi-activity-7278854725163184128-NENc" },
      { label: "LinkedIn case description post 2", url: "https://www.linkedin.com/posts/brilliant-seed-up_aiinmarketing-successstory-businessgrowth-activity-7277771623707938816-ihXs" }
    ]
  },
  {
    id: "dhl",
    tag: "FLAGSHIP PROJECT",
    sector: "LOGISTICS",
    geography: "QATAR",
    title: "Executive AI Capability Program",
    client: "DHL Qatar",
    description: "Delivered AI leadership training to the DHL Qatar Board of Directors. First fully AI-literate board in the country. AI communication content approved for all Arabic countries branches.",
    links: [
      { label: "Directors Testimonials", url: "https://drive.google.com/drive/folders/1Qk3VP0TK6thBcfLfIRGuNzWIfG56rZHK?usp=sharing" },
      { label: "AI HR Avatar", url: "https://drive.google.com/file/d/1J1e7RgzbuvfkFugg4X1oyVgYYzEmwOFM/view?usp=sharing" },
      { label: "AI animation for safety rules", url: "https://drive.google.com/drive/folders/1lFN4o4sZaP9UR_uaNGSNX98SBIIXkCB2?usp=sharing" }
    ]
  },
  {
    id: "fmcg",
    sector: "FMCG",
    geography: "MOROCCO",
    title: "AI Training & Content System",
    client: "Philip Morris Distributors",
    description: "AI animation and training content created for each new product launch. Scalable internal capability built for distributor onboarding.",
    links: [
      { label: "Content Folder", url: "https://drive.google.com/drive/folders/1UT_nac9v6o3uEiaRpP6NxfcWVcIanZLh?usp=sharing" }
    ]
  },
  {
    id: "cosmetics",
    sector: "COSMETICS",
    geography: "EUROPE / GCC",
    title: "AI-Powered Market Entry",
    client: "La Brains",
    description: "AI-supported entry into GCC market for a European cosmetic brand. AI-assisted customer acquisition and regional expansion enablement.",
    links: []
  },
  {
    id: "education",
    sector: "EDUCATION",
    geography: "USA",
    title: "AI Marketing + EdTech Program",
    client: "Girls in Aviation",
    description: "AI content creation, educational program development, and AI-powered learning for children.",
    links: [
      { label: "LinkedIn Post", url: "https://www.linkedin.com/posts/brilliant-seed-up_creating-innovative-educational-content-with-activity-7271161566417321984-7_f7" },
      { label: "AI Content Folder", url: "https://drive.google.com/drive/folders/1ku9KNsXjp4FHFk5Ju0tns0tWerqrvXau?usp=sharing" }
    ]
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
        title: "1. Enterprise Advisory",
        bullets: [
          { text: "AI Trainer for Board Directors — DHL Qatar. First fully AI-literate Board in the country", url: "https://www.linkedin.com/posts/inanistoras_our-company-magnaqore-delivered-an-exclusive-activity-7188432360403378177-B8V5/" },
          { text: "200+ startups & companies consulted" },
          { text: "Cross-sector: healthcare, logistics, retail, IT, edtech" }
        ]
      },
      {
        title: "2. Global Thought Leadership",
        bullets: [
          { text: "AI Expert — European Commission & EIC (with Deloitte)", url: "https://www.linkedin.com/posts/inanistoras_what-an-incredible-event-today-a-deep-activity-7191136458512809985-n8zS/" },
          { text: "AI Panel Discussion — Qatar", url: "https://www.linkedin.com/posts/inanistoras_it-was-a-pleasure-yesterday-moderating-an-activity-7204739566379868160-58pY/" },
          { text: "Moderator — Women in Tech", url: "https://www.linkedin.com/posts/inanistoras_such-a-great-discussion-we-had-yesterday-activity-7192735790479417344-t796/" },
          { text: "AI Expert Panelist — Gaming Industry", url: "https://www.linkedin.com/posts/inanistoras_levelingup-videogameindustry-russia-activity-7170799676646875138-T17S/" }
        ]
      },
      {
        title: "3. Education & Ecosystem",
        bullets: [
          { text: "AI Trainer — universities & schools" },
          { text: "Kids AI Camp — DHL corporate families" },
          { text: "Hackathon Mentor — QDB Scale7" },
          { text: "AI Trends Workshop Leader", url: "https://www.linkedin.com/posts/inanistoras_how-are-ai-trends-reshaping-qatars-tech-activity-7275396590825988096-R19y/" }
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
        title: "1. Implementation & Maturity Expertise",
        bullets: [
          { text: "Trained 1,500+ students in AI applications across disciplines" },
          { text: "Designed 20 AI high-literacy programs for enterprise and education" }
        ]
      },
      {
        title: "2. Academic & Institutional",
        bullets: [
          { text: "Mentor — Skolkovo Business School (Moscow)" },
          { text: "AI in Business program — Russian Venture Forum" }
        ]
      },
      {
        title: "3. Government-Accredited Programs",
        bullets: [
          { text: "Russian Ministry of Education accredited AI program for 500+ students", url: "https://drive.google.com/file/d/1G1kE52R6b12Y8s9M9E5528M1S80Y5F5H/view?usp=sharing" }
        ]
      },
      {
        title: "4. Industry Training",
        bullets: [
          { text: "AI training for MAED — Russia's largest marketplace marketing academy" }
        ]
      }
    ]
  },
  {
    id: "artyom",
    name: "Artyom Malinouski",
    title: "AI Architect – Systems & CRM Integration",
    tags: "Enterprise AI systems architect",
    photoUrl: "https://cdn.gamma.app/pwsfkii4h2kvyu4/1697c6ea475f48d9bced86009adf01f1/original/WhatsApp-Image-2026-03-27-at-14.38.51.jpeg",
    roleDescription: "Artyom leads the technical architecture and systems integration layer of our AI delivery model, with a focus on building enterprise-ready AI infrastructures that connect directly into real business operations.",
    highlights: [
      {
        title: "1. Execution Track Record",
        bullets: [
          { text: "Contributed to the development of 300+ AI systems and automations" },
          { text: "Built full-stack AI infrastructures across: Real Estate, Logistics, HR, E-commerce, EdTech, Service-based businesses" },
          { text: "Delivered AI-powered solutions including: AI agents, CRM automations, Internal workflow systems, Telegram / WhatsApp / website chatbots, Document and operations intelligence tools" }
        ]
      },
      {
        title: "2. Technical Capability",
        bullets: [
          { text: "AI & LLM Systems: LLM-powered workflows and integrations, AI agents and multi-agent orchestration, Prompt architecture and instruction design, Retrieval-Augmented Generation (RAG) systems, Semantic search and vector database implementation, AI quality monitoring and system observability" },
          { text: "Systems & Infrastructure: API architecture, webhooks, and authentication, Data pipelines, ETL, and transformation logic, SQL / NoSQL database structures, Cloud deployment environments (AWS, Azure, Google Cloud), Real-time and batch processing workflows, Middleware and system interoperability, CRM platforms including Salesforce, HubSpot, and Microsoft Dynamics" },
          { text: "Integration & Tools: Integration environments: N8N, Make, Zapier, Directus, Cursor, Lovable, Antigravity, and other AI implementation frameworks. Working familiarity with enterprise systems: SAP, Oracle, and NetSuite. Security, compliance, and operational deployment considerations for enterprise environments." }
        ]
      }
    ]
  }
];

export const credibilityHighlights: Record<string, any[]> = {
  ina: [
    { text: "AI Expert at European Commission & EIC event (with Deloitte, EWA, EISMEA)", url: "https://www.linkedin.com/posts/ina-nistoras-258769300_esteam-stem-europeancommission-activity-7241380103337709568-Ge24" },
    { text: "AI Trends Workshop", url: "https://www.linkedin.com/posts/ina-nistoras-258769300_aitrends2025-aiinmarketing-activity-7295834826689953794-__fp" },
    { text: "AI Panel Discussion in Qatar", url: "https://www.linkedin.com/posts/brilliant-seed-up_on-december-2nd-bsu-web-development-and-ugcPost-7270805768365293568-EHJk" },
    { text: "Guest Speaker", url: "https://www.linkedin.com/posts/brilliant-seed-up_an-unforgettable-ai-workshop-a-huge-thank-activity-7269732084397531137-UJE5" },
    { text: "Moderator at Women in Tech event", url: "https://www.linkedin.com/posts/ina-nistoras-258769300_womenintech-qatartech-ai-activity-7322944753489141762--FnM" },
    { text: "AI Expert Panelist in gaming industry", url: "https://www.linkedin.com/posts/ina-nistoras-258769300_gamedevelopment-aiingaming-esports-activity-7301722384875581443-bl8P" },
    { text: "AI Trainer for Boardroom Directors — DHL Qatar", url: "https://www.linkedin.com/posts/ina-nistoras-258769300_qatar-logistics-leadership-activity-7358164280703115264-Xtai" },
    { text: "Kids Summer AI Camp — DHL corporate families", url: "https://www.linkedin.com/posts/ina-nistoras-258769300_qatar-dhlsummercamp2025-goteach-activity-7351922643341570048-jOVL" },
    { 
      text: "AI Trainer at universities and schools", 
      subLinks: [
        { label: "Link 1", url: "https://drive.google.com/file/d/1RolbqVeNmczs-O8ig0ASKFjwE0lMJ4tV/view?usp=sharing" },
        { label: "Link 2", url: "https://www.linkedin.com/posts/ina-nistoras-258769300_ai-aiineducation-aiskill-activity-7391022214818721793-iHD2" },
        { label: "Link 3", url: "https://www.linkedin.com/posts/aisha-siddiqa-ahmad_aiineducation-smartstudying-promptengineering-ugcPost-7333291626552786945-WAjN" }
      ]
    },
    { text: "Mentor at Hackathons — Qatar Development Bank and M7", url: "https://www.linkedin.com/posts/maximhamida_thats-a-wrap-on-scale7-future-creators-hackathon-ugcPost-7427653495652012032-K3Lf" },
    { 
      text: "Guest Speaker at Business Podcasts — I WANNA GROW PODCAST", 
      embedUrl: "https://www.youtube.com/embed/8X0DSe8KXoU?rel=0",
      subLinks: [{ label: "Testimonials", url: "https://drive.google.com/file/d/1RolbqVeNmczs-O8ig0ASKFjwE0lMJ4tV/view?usp=sharing" }] 
    }
  ],
  maryia: [
    { text: "Training Programs for BSU Web Development (Doha, Qatar)", url: "https://miro.com/app/board/uXjVL2NNoTM=/?share_link_id=855590016182" },
    { 
      text: "MAED (Moscow, Russia)", 
      subLinks: [
        { label: "Presentation 1", url: "https://docs.google.com/presentation/d/1yrRLauIENh0jI3UHjy2DeTQDZeSgYPGU/edit?usp=drive_link&rtpof=true&sd=true" },
        { label: "Presentation 2", url: "https://docs.google.com/presentation/d/1QBVVMbQf97DeMVxx-NEeQCfbtJafLIs7/edit?usp=drive_link&rtpof=true&sd=true" },
        { label: "Presentation 3", url: "https://docs.google.com/presentation/d/1C86IlscCT8xCrLU0sHHo39eBrryOfSnm/edit?usp=drive_link&rtpof=true&sd=true" },
        { label: "Presentation 4", url: "https://docs.google.com/presentation/d/1w46nFy1pWWSXXs96Hye74f-9Uhc8q5xE/edit?usp=drive_link&rtpof=true&sd=true" }
      ] 
    },
    { 
      text: "Mini-Course Program Accredited by Ministry of Education (Yekaterinburg, Russia)", 
      subLinks: [
        { label: "Program Document", url: "https://docs.google.com/document/d/1sJTnoi3fULl40t6ZMgwLC9YZNkb6fGj_pvucTLHEEG0/edit?usp=drivesdk" },
        { label: "Certificate from Ministry of Education", url: "https://drive.google.com/file/d/13ru2gJW1Cp60RohbwOw263HrIUG46kLN/view?usp=sharing" }
      ] 
    },
    { 
      text: "Program for Russian Venture Forum and Skolkovo (Moscow)", 
      subLinks: [
        { label: "Miro Board", url: "https://miro.com/app/board/uXjVJTIn8hM=/?share_link_id=884368452482" },
        { label: "Google Drive Folder", url: "https://drive.google.com/drive/folders/1v4JDuZrA9QFP55LNxWv4WJOVp6kjXxi1?usp=sharing" }
      ] 
    },
    { 
      text: "Children's AI Program (Doha, Qatar)", 
      subLinks: [
        { label: "Miro Board", url: "https://miro.com/app/board/uXjVIqCFH_8=/?share_link_id=458361041405" },
        { label: "Lesson 1 — Introduction to AI", url: "https://gamma.app/docs/Lesson-1-Introduction-to-AI-First-Encounter-95dv31iatdm8u8i" }
      ] 
    },
    { text: "Professional Development Program for Board of Directors of DHL (Doha, Qatar)", subLinks: [{ label: "Module 3 — Hard Skills, Digital Fluency, Automation", url: "https://gamma.app/docs/Module-3-Hard-Skills-Digital-Fluency-Automation-part-2-35g58dfwwabn18n" }] },
    { text: "Program for Ulster University Qatar (Doha, Qatar)", subLinks: [{ label: "PDF — AI Your Future", url: "https://gamma.app/docs/PDF-AI-Your-Future-How-to-Study-Think-and-Succeed-Smarter-4slqwc7pit9rtqu" }] },
    { text: "Program for QDB Startup Hub M7 (Doha, Qatar)", subLinks: [{ label: "AI for Creatives", url: "https://gamma.app/docs/AI-for-Creatives-Supercharge-Your-Business-klhdnuz9y6rppx8" }] },
    { 
      text: "Charitable Training Program to Support Women (Moldova, Romania)", 
      subLinks: [
        { label: "Lesson", url: "https://drive.google.com/file/d/1jsB0_q84TUapudiJ7Vpkg1Q8TNbpyFbn/view?usp=sharing" },
        { label: "Presentation", url: "https://gamma.app/docs/LECTIA-5-Cum-sa-alegi-instrumentele-AI-potrivite-si-sa-le-combini-eyxfimkwg9xxdef" }
      ] 
    },
    { text: "AI Consultant Avatars for Learning Gamification (Doha, Qatar)", subLinks: [{ label: "HR Director Example", url: "https://drive.google.com/file/d/1-9Ztr5jwiabi_42ttbLQtEN-Nfm5ZZL8/view?usp=sharing" }] },
    { text: "Internship Program for Qatar University Students (Doha, Qatar)", url: "https://drive.google.com/file/d/1ZwpugsJzZjhUj3yXYoPH6rxqzXydi2J2/view?usp=sharing" }
  ]
};
