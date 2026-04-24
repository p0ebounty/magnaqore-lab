import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');

const en = {
  seo: {
    title: 'MagnaQore | AI Implementation & Transformation Company',
    description:
      'Strategic partnership opportunity for AI Operating System design and implementation. Lead the next wave of organizational transformation.',
  },
  hero: {
    marquee: 'PRESENTED BY MAGNAQORE | AI IMPLEMENTATION & TRANSFORMATION COMPANY',
    titleBefore: 'Opportunity for',
    titleAccent: 'strategic partnership',
    titleAfter: '',
    subtitle: 'AI Operating System Design & Implementation',
    body: 'A high-value enterprise service line for strategic partners ready to lead the next wave of organizational transformation.',
    cta: 'Explore the Opportunity',
    confidential: 'Confidential — For Partner Evaluation Only',
    heroImgAlt: 'Strategic Partnership Implementation',
  },
  marketShift: {
    badge: 'MARKET INTELLIGENCE',
    heading: 'The Market Is Shifting',
    subheading: 'From Tool Adoption to AI-Native Operations',
    body: "The enterprise landscape is undergoing a fundamental transition — and most service providers haven't repositioned yet.",
    diagramFrom: 'Tools',
    diagramTo: 'AI-Native Systems',
  },
  problem: {
    marquee: "YESTERDAY'S MODEL & THE PROBLEM",
    heading: 'Fragmented AI Adoption Is a Structural Risk',
    subtitle: 'Most enterprises are experimenting with AI — but without a system to support it.',
    cards: [
      {
        title: 'Tool Fragmentation',
        body: 'Multiple disconnected AI tools operating in silos — chatbots, automations, content systems — with no unifying architecture or governance layer.',
      },
      {
        title: 'Weak Internal Adoption',
        body: 'Without structured enablement and workflow integration, AI tools are used inconsistently or abandoned. Technology investment fails to generate return.',
      },
      {
        title: 'No Operating Foundation',
        body: 'No internal AI ownership, no prioritization framework, no compliance logic. Every new AI initiative starts from scratch.',
      },
    ],
    bottomBar:
      'The result: multiple vendors, overlapping tools, duplicated costs, and an organization that is no closer to AI-native operations.',
  },
  solution: {
    badge: "TOMORROW'S STANDARD",
    heading: 'AI-Enabled Operating Infrastructure',
    sub: 'From isolated tools to a unified, enterprise-wide AI foundation.',
  },
  iceberg: {
    pillars: [
      'Integrated Operating Layer',
      'Cross-Department AI Coherence',
      'Internal AI Governance',
      'Scalable Implementation Model',
      'Organizational AI Sovereignty',
    ],
  },
  valueProp: {
    s5: {
      badge: 'STRATEGIC OPPORTUNITY',
      heading: 'Why This Is Your Next High-Value Service Line',
      sub: "Your clients already need this. The question is whether you're the one who offers it — or your competitor.",
      cards: [
        {
          title: 'Immediate Market Demand',
          body: 'Every enterprise you serve is already allocating budget toward AI. Most are doing it without structure. You can be the partner who brings order to that chaos.',
        },
        {
          title: 'Account Expansion Engine',
          body: 'This service creates new revenue inside your existing client base — without requiring new business development. Every current account is a potential engagement.',
        },
        {
          title: 'First-Mover Advantage',
          body: 'Most competitors are still selling point AI solutions. By offering a full AI Operating System capability, you position ahead of slower-moving firms.',
        },
      ],
    },
    s6: {
      badge: 'STRATEGIC OPPORTUNITY',
      heading: 'A New Enterprise Service Category — Ready for Your Clients',
      quote:
        'This is how you enter the AI transformation market — with a proven partner, a structured methodology, and immediate commercial upside.',
      tiles: [
        {
          title: 'Growing Demand',
          body: 'Enterprise demand for operational AI infrastructure is accelerating. The window to lead this category is open — and narrowing.',
        },
        {
          title: 'High-Value Projects',
          body: 'Typical client engagements run $100K–$150K. This is a premium transformation offer, not a commodity service.',
        },
        {
          title: 'Inside Your Accounts',
          body: 'Your existing clients already need this. This service line expands wallet share within relationships you already hold.',
        },
        {
          title: 'No Build Required',
          body: 'You bring client access and commercial positioning. We deliver the methodology, systems architecture, and implementation.',
        },
      ],
    },
    s7: {
      badge: 'PARTNER VALUE PROPOSITION',
      headingLine1: 'New Revenue. No Build Cost.',
      headingGold: 'Immediate Market Entry.',
      sub: 'Launch a premium AI transformation practice without building an internal team from scratch.',
      pillars: [
        {
          title: 'New Revenue',
          body: 'Launch a premium AI practice that creates a new growth line for your firm.',
        },
        {
          title: 'No Build Cost',
          body: 'Offer the capability without hiring, staffing, or assembling a team internally.',
        },
        {
          title: 'Immediate Market Entry',
          body: 'Move quickly with a ready-to-deploy service that gets you into the market faster.',
        },
      ],
      dashboardAlt: 'AI Dashboard Meeting',
    },
  },
  aiPreview: {
    badge: 'CORE CAPABILITY',
    heading: 'WHAT IS AN AI OPERATING SYSTEM?',
    leadItalic: 'The internal operating layer that governs how AI functions across your entire organization.',
    notTool: 'Not a single tool. Not a software platform.',
    definition: 'An AI Operating System is the structured framework that enables AI to function coherently across a business.',
    miniCards: [
      'Operating Model Design',
      'Workflow Automation',
      'Governance & Compliance',
      'Team Enablement',
      'Use-Case Prioritization',
      'Scalable Ownership',
    ],
    learnMore: 'Learn more about AI OS →',
    timingBadge: 'MARKET TIMING',
    timingHeading: 'Why This Opportunity Exists Now',
    timingSub: 'The Market Window Is Open — and Competitive Pressure Is Intensifying',
    timingQuote:
      '"The window between early adopter advantage and market expectation is closing. Partners who move now define the category. This convergence of pressures is generating the strongest market pull for AI transformation in history."',
    partnerBadge: 'PARTNERSHIP FRAMEWORK',
    partnerLead:
      'We operate as your specialized execution partner — enabling you to launch a new AI transformation service line without building an internal delivery team from scratch.',
    yourFirm: 'Your Firm',
    yourFirmLines: 'Client Access<br/>Positioning<br/>Account Ownership',
    mq: 'MagnaQore',
    mqLines: 'Methodology<br/>System Architecture<br/>Implementation',
    seeModel: 'See the full partnership model →',
  },
  keyFactors: {
    mobile: [
      {
        title: 'Economic Pressure',
        body: 'Cost reduction and operational efficiency are board-level mandates. AI is the lever.',
      },
      {
        title: 'Competitive Reality',
        body: 'AI-enabled competitors are gaining speed. Firms that delay risk structural disadvantage.',
      },
      {
        title: 'Operational Urgency',
        body: 'Organizations need to do more with existing teams. AI-native operations multiply capacity.',
      },
      {
        title: 'Workflow Modernization & Internal Resilience',
        body: 'Enterprise workflows are overdue for redesign. AI provides the architecture for the next era.\n\nThey are reducing external dependencies and building internal operational capability.',
      },
    ],
    centerLine1: 'Key Success',
    centerLine2: 'Factors',
    desktop: {
      economicTitle: 'Economic Pressure',
      economicBody: 'Cost reduction and operational efficiency are board-level mandates. AI is the lever.',
      operationalTitle: 'Operational Urgency',
      operationalBody: 'Organizations need to do more with existing teams. AI-native operations multiply capacity.',
      competitiveTitle: 'Competitive Reality',
      competitiveBody: 'AI-enabled competitors are gaining speed. Firms that delay risk structural disadvantage.',
      workflowTitleLine1: 'Workflow Modernization &',
      workflowTitleLine2: 'Internal Resilience',
      workflowBody1: 'Enterprise workflows are overdue for redesign. AI provides the architecture for the next era.',
      workflowBody2: 'They are reducing external dependencies and building internal operational capability.',
    },
  },
  about: {
    badge: 'ABOUT THE COMPANY',
    heading: 'Applied AI. Built for Real Business Environments.',
    lead: 'MagnaQore (USA) & BSU (QATAR) are an AI implementation and education companies combining strategy, training, AI systems design, and execution.',
    stats: [
      { value: '200+', label: 'Companies Consulted' },
      { value: '1,500+', label: 'Professionals Trained' },
      { value: '10+', label: 'Industries Served' },
      { value: '3', label: 'Years of Execution' },
    ],
    cards: [
      {
        title: 'Award-Winning Recognition',
        body: 'Our company was recognized as the best startup among thousands of participants at the Russian Venture Forum — a globally recognized innovation benchmark.',
      },
      {
        title: 'MagnaQore (USA) Operational Model',
        body: 'MagnaQore operates as a real-world AI implementation laboratory — continuously testing, building, and validating implementation approaches across live engagements. We bring that intelligence into every partnership.',
      },
      {
        title: 'Sector Expertise Across',
        body: 'Healthcare · Real Estate · Logistics · Retail · IT · EdTech · E-Commerce · Gaming',
      },
    ],
  },
  proof: {
    badge: 'PROOF OF WORK',
    heading: 'Delivered. Measured. Repeatable.',
    sub: 'Client engagements across sectors, geographies, and organizational stages.',
    viewAll: 'View Full Case Studies →',
    clientPrefix: 'Client:',
  },
  team: {
    badge: 'EXPERTISE & LEADERSHIP',
    heading: 'The MagnaQore Team',
    sub: 'Architects of intelligent transformation.',
  },
  cta: {
    heading: 'Ready to Lead the Next Wave?',
    body: "Let's discuss how this partnership creates value for your firm and your clients.",
    button: 'Schedule a Conversation',
  },
  readNext: {
    label: 'Read Next',
    link: 'AI Operating System',
  },
  teamMembers: {
    ina: {
      title: 'Co-Founder & CEO',
      tags: 'AI Transformation Director · International Speaker · Strategic Advisor',
      trustLine: 'Trusted across: Government · Corporate · Startup · Education Institutions',
      highlights: [
        {
          title: '1. Enterprise Advisory',
          bullets: [
            'AI Trainer for Board Directors — DHL Qatar. First fully AI-literate Board in the country',
            '200+ startups & companies consulted',
            'Cross-sector: healthcare, logistics, retail, IT, edtech',
          ],
        },
        {
          title: '2. Global Thought Leadership',
          bullets: [
            'AI Expert — European Commission & EIC (with Deloitte)',
            'AI Panel Discussion — Qatar',
            'Moderator — Women in Tech',
            'AI Expert Panelist — Gaming Industry',
          ],
        },
        {
          title: '3. Education & Ecosystem',
          bullets: [
            'AI Trainer — universities & schools',
            'Kids AI Camp — DHL corporate families',
            'Hackathon Mentor — QDB Scale7',
            'AI Trends Workshop Leader',
          ],
        },
      ],
    },
    maryia: {
      title: 'Co-Founder & CTPO',
      tags: 'AI Systems & Delivery Lead · AI Program Architect',
      statLine: '1,500+ Students Trained · 20 AI Literacy Programs',
      highlights: [
        {
          title: '1. Implementation & Maturity Expertise',
          bullets: [
            'Trained 1,500+ students in AI applications across disciplines',
            'Designed 20 AI high-literacy programs for enterprise and education',
          ],
        },
        {
          title: '2. Academic & Institutional',
          bullets: [
            'Mentor — Skolkovo Business School (Moscow)',
            'AI in Business program — Russian Venture Forum',
          ],
        },
        {
          title: '3. Government-Accredited Programs',
          bullets: ['Russian Ministry of Education accredited AI program for 500+ students'],
        },
        {
          title: '4. Industry Training',
          bullets: ["AI training for MAED — Russia's largest marketplace marketing academy"],
        },
      ],
    },
    artyom: {
      title: 'CTO / AI Architect',
      tags: 'Enterprise AI systems architect',
      roleDescription:
        'Artyom leads the technical architecture and systems integration layer of our AI delivery model, with a focus on building enterprise-ready AI infrastructures that connect directly into real business operations.',
      highlights: [
        {
          title: '1. Execution Track Record',
          bullets: [
            'Contributed to the development of 300+ AI systems and automations',
            'Built full-stack AI infrastructures across: Real Estate, Logistics, HR, E-commerce, EdTech, Service-based businesses',
            'Delivered AI-powered solutions including: AI agents, CRM automations, Internal workflow systems, Telegram / WhatsApp / website chatbots, Document and operations intelligence tools',
          ],
        },
        {
          title: '2. Technical Capability',
          bullets: [
            'AI & LLM Systems: LLM-powered workflows and integrations, AI agents and multi-agent orchestration, Prompt architecture and instruction design, Retrieval-Augmented Generation (RAG) systems, Semantic search and vector database implementation, AI quality monitoring and system observability',
            'Systems & Infrastructure: API architecture, webhooks, and authentication, Data pipelines, ETL, and transformation logic, SQL / NoSQL database structures, Cloud deployment environments (AWS, Azure, Google Cloud), Real-time and batch processing workflows, Middleware and system interoperability, CRM platforms including Salesforce, HubSpot, and Microsoft Dynamics',
            'Integration & Tools: Integration environments: N8N, Make, Zapier, Directus, Cursor, Lovable, Antigravity, and other AI implementation frameworks. Working familiarity with enterprise systems: SAP, Oracle, and NetSuite. Security, compliance, and operational deployment considerations for enterprise environments.',
          ],
        },
      ],
    },
  },
};

const ru = {
  seo: {
    title: 'MagnaQore | Внедрение ИИ и трансформация бизнеса',
    description:
      'Стратегическое партнёрство: дизайн и внедрение AI Operating System. Лидируйте следующую волну организационных изменений.',
  },
  hero: {
    marquee: 'MAGNAQORE | ВНЕДРЕНИЕ ИИ И ТРАНСФОРМАЦИЯ КОМПАНИЙ',
    titleBefore: 'Возможность',
    titleAccent: 'стратегического партнёрства',
    titleAfter: '',
    subtitle: 'Дизайн и внедрение AI Operating System',
    body: 'Премиальная корпоративная линейка для стратегических партнёров, готовых вести следующую волну организационной трансформации.',
    cta: 'Изучить возможность',
    confidential: 'Конфиденциально — только для оценки партнёрами',
    heroImgAlt: 'Внедрение стратегического партнёрства',
  },
  marketShift: {
    badge: 'РЫНОЧНАЯ АНАЛИТИКА',
    heading: 'Рынок меняется',
    subheading: 'От внедрения инструментов к AI-native операциям',
    body: 'Корпоративная среда переживает фундаментальный сдвиг — и большинство поставщиков услуг ещё не перестроились.',
    diagramFrom: 'Инструменты',
    diagramTo: 'AI-native системы',
  },
  problem: {
    marquee: 'ВЧЕРАШНЯЯ МОДЕЛЬ И ПРОБЛЕМА',
    heading: 'Фрагментированное внедрение ИИ — структурный риск',
    subtitle: 'Большинство компаний экспериментируют с ИИ — но без системы, которая это поддерживает.',
    cards: [
      {
        title: 'Фрагментация инструментов',
        body: 'Множество несвязанных ИИ-инструментов в силосах — чат-боты, автоматизация, контент — без единой архитектуры и слоя управления.',
      },
      {
        title: 'Слабое внутреннее принятие',
        body: 'Без структурированного enablement и интеграции в процессы инструменты используются неровно или забрасываются. Инвестиции не дают отдачи.',
      },
      {
        title: 'Нет операционной основы',
        body: 'Нет внутреннего владения ИИ, рамок приоритизации и комплаенса. Каждая новая инициатива начинается с нуля.',
      },
    ],
    bottomBar:
      'Итог: несколько вендоров, дублирование инструментов и затрат, и компания не ближе к AI-native операциям.',
  },
  solution: {
    badge: 'СТАНДАРТ ЗАВТРА',
    heading: 'Операционная инфраструктура на базе ИИ',
    sub: 'От разрозненных инструментов к единой корпоративной основе ИИ.',
  },
  iceberg: {
    pillars: [
      'Интегрированный операционный слой',
      'Согласованность ИИ между подразделениями',
      'Внутреннее управление ИИ',
      'Масштабируемая модель внедрения',
      'Суверенность организации в ИИ',
    ],
  },
  valueProp: {
    s5: {
      badge: 'СТРАТЕГИЧЕСКАЯ ВОЗМОЖНОСТЬ',
      heading: 'Почему это ваша следующая высокомаржинальная линейка',
      sub: 'Клиентам это уже нужно. Вопрос — предложите вы или конкурент.',
      cards: [
        {
          title: 'Спрос уже есть',
          body: 'Каждый ваш enterprise-клиент уже выделяет бюджет на ИИ. Чаще всего без структуры. Вы можете привести к порядку этот хаос.',
        },
        {
          title: 'Двигатель расширения аккаунтов',
          body: 'Новая выручка в существующей базе — без обязательного нового биздев-цикла. Каждый текущий клиент — потенциальный проект.',
        },
        {
          title: 'Преимущество первых',
          body: 'Конкуренты продают точечные решения. Полноценная линейка AI Operating System выводит вас вперёд.',
        },
      ],
    },
    s6: {
      badge: 'СТРАТЕГИЧЕСКАЯ ВОЗМОЖНОСТЬ',
      heading: 'Новая категория enterprise-услуг — готова к вашим клиентам',
      quote:
        'Так вы входите на рынок ИИ-трансформации — с проверенным партнёром, методологией и быстрой коммерческой отдачей.',
      tiles: [
        {
          title: 'Растущий спрос',
          body: 'Спрос на операционную ИИ-инфраструктуру ускоряется. Окно лидерства открыто — и сужается.',
        },
        {
          title: 'Высокий чек проектов',
          body: 'Типичные внедрения — порядка $100K–$150K. Это премиальная трансформация, не коммодити-услуга.',
        },
        {
          title: 'Внутри ваших аккаунтов',
          body: 'Текущим клиентам это нужно. Линейка увеличивает долю кошелька в уже удерживаемых отношениях.',
        },
        {
          title: 'Без своей сборки',
          body: 'Вы даёте доступ к клиентам и коммерцию. Мы — методологию, архитектуру систем и поставку.',
        },
      ],
    },
    s7: {
      badge: 'ЦЕННОСТЬ ДЛЯ ПАРТНЁРА',
      headingLine1: 'Новая выручка. Без стоимости сборки.',
      headingGold: 'Быстрый выход на рынок.',
      sub: 'Запуск премиальной практики ИИ-трансформации без найма внутренней команды с нуля.',
      pillars: [
        {
          title: 'Новая выручка',
          body: 'Премиальная практика ИИ как новая линия роста для фирмы.',
        },
        {
          title: 'Без стоимости сборки',
          body: 'Компетенция без найма, штата и долгой сборки команды.',
        },
        {
          title: 'Быстрый выход',
          body: 'Готовая к поставке услуга — быстрее выходите на рынок.',
        },
      ],
      dashboardAlt: 'Встреча по дашборду ИИ',
    },
  },
  aiPreview: {
    badge: 'КЛЮЧЕВАЯ КОМПЕТЕНЦИЯ',
    heading: 'ЧТО ТАКОЕ AI OPERATING SYSTEM?',
    leadItalic: 'Внутренний операционный слой, который управляет тем, как ИИ работает во всей организации.',
    notTool: 'Не один инструмент. Не одна платформа.',
    definition: 'AI Operating System — структурированная основа, в которой ИИ согласованно работает в бизнесе.',
    miniCards: [
      'Дизайн операционной модели',
      'Автоматизация процессов',
      'Управление и комплаенс',
      'Развитие команды',
      'Приоритизация сценариев',
      'Масштабируемое владение',
    ],
    learnMore: 'Подробнее об AI OS →',
    timingBadge: 'МОМЕНТ НА РЫНКЕ',
    timingHeading: 'Почему возможность есть сейчас',
    timingSub: 'Окно открыто — конкурентное давление растёт',
    timingQuote:
      '«Окно между преимуществом ранних и рыночными ожиданиями сужается. Кто двигается сейчас — задаёт категорию. Эти факторы создают самый сильный запрос на ИИ-трансформацию в истории.»',
    partnerBadge: 'МОДЕЛЬ ПАРТНЁРСТВА',
    partnerLead:
      'Мы — партнёр по исполнению: вы запускаете линейку ИИ-трансформации без внутренней команды поставки с нуля.',
    yourFirm: 'Ваша компания',
    yourFirmLines: 'Доступ к клиентам<br/>Позиционирование<br/>Владение аккаунтом',
    mq: 'MagnaQore',
    mqLines: 'Методология<br/>Системная архитектура<br/>Внедрение',
    seeModel: 'Полная модель партнёрства →',
  },
  keyFactors: {
    mobile: [
      {
        title: 'Экономическое давление',
        body: 'Снижение затрат и эффективность — мандат совета директоров. Рычаг — ИИ.',
      },
      {
        title: 'Конкурентная реальность',
        body: 'ИИ-конкуренты набирают скорость. Откладывающие рискуют отстать структурно.',
      },
      {
        title: 'Операционная срочность',
        body: 'Нужно делать больше с теми же командами. AI-native операции умножают мощность.',
      },
      {
        title: 'Модернизация процессов и устойчивость',
        body: 'Корпоративные процессы давно просят перепроектирования. ИИ даёт архитектуру следующей эры.\n\nКомпании снижают внешние зависимости и строят внутреннюю операционную компетенцию.',
      },
    ],
    centerLine1: 'Ключевые',
    centerLine2: 'факторы',
    desktop: {
      economicTitle: 'Экономическое давление',
      economicBody: 'Снижение затрат и эффективность — мандат совета. Рычаг — ИИ.',
      operationalTitle: 'Операционная срочность',
      operationalBody: 'Больше результата с теми же командами. AI-native операции умножают мощность.',
      competitiveTitle: 'Конкурентная реальность',
      competitiveBody: 'ИИ-конкуренты ускоряются. Промедление — структурный риск.',
      workflowTitleLine1: 'Модернизация процессов и',
      workflowTitleLine2: 'внутренняя устойчивость',
      workflowBody1: 'Процессы просят перепроектирования. ИИ — архитектура следующей эры.',
      workflowBody2: 'Снижение внешних зависимостей и рост внутренней операционной компетенции.',
    },
  },
  about: {
    badge: 'О КОМПАНИИ',
    heading: 'Прикладной ИИ для реальной корпоративной среды.',
    lead: 'MagnaQore (США) и BSU (Катар) — компании по внедрению ИИ и образованию: стратегия, обучение, дизайн ИИ-систем и исполнение.',
    stats: [
      { value: '200+', label: 'Компаний с консалтингом' },
      { value: '1,500+', label: 'Обученных специалистов' },
      { value: '10+', label: 'Отраслей' },
      { value: '3', label: 'Года поставки' },
    ],
    cards: [
      {
        title: 'Признание',
        body: 'Компания признана лучшим стартапом среди тысяч участников Russian Venture Forum — ориентир инноваций.',
      },
      {
        title: 'Операционная модель MagnaQore (США)',
        body: 'MagnaQore — лаборатория реального внедрения ИИ: непрерывно тестируем, строим и проверяем подходы на живых проектах. Эта экспертиза — в каждом партнёрстве.',
      },
      {
        title: 'Отраслевая экспертиза',
        body: 'Здравоохранение · Недвижимость · Логистика · Ритейл · IT · EdTech · E-commerce · Игры',
      },
    ],
  },
  proof: {
    badge: 'ДОКАЗАТЕЛЬСТВА',
    heading: 'Сделано. Измерено. Повторяемо.',
    sub: 'Проекты в разных секторах, географиях и зрелости организаций.',
    viewAll: 'Все кейсы →',
    clientPrefix: 'Клиент:',
  },
  team: {
    badge: 'ЭКСПЕРТИЗА И ЛИДЕРСТВО',
    heading: 'Команда MagnaQore',
    sub: 'Архитекторы интеллектуальной трансформации.',
  },
  cta: {
    heading: 'Готовы вести следующую волну?',
    body: 'Обсудим, как партнёрство создаёт ценность для вашей фирмы и клиентов.',
    button: 'Запланировать разговор',
  },
  readNext: {
    label: 'Далее',
    link: 'AI Operating System',
  },
  teamMembers: {
    ina: {
      title: 'Сооснователь и CEO',
      tags: 'Директор по ИИ-трансформации · Международный спикер · Стратегический советник',
      trustLine: 'Доверие: государство · корпорации · стартапы · образование',
      highlights: [
        {
          title: '1. Корпоративный консалтинг',
          bullets: [
            'Тренер ИИ для советов директоров — DHL Qatar. Первый в стране совет с полной ИИ-грамотностью',
            '200+ стартапов и компаний',
            'Кросс-сектор: здравоохранение, логистика, ритейл, IT, edtech',
          ],
        },
        {
          title: '2. Глобальное лидерство мнений',
          bullets: [
            'Эксперт ИИ — Еврокомиссия и EIC (с Deloitte)',
            'Панель ИИ — Катар',
            'Модератор — Women in Tech',
            'Эксперт-панелист — игровая индустрия',
          ],
        },
        {
          title: '3. Образование и экосистема',
          bullets: [
            'Тренер ИИ — университеты и школы',
            'Детский ИИ-лагерь — семьи сотрудников DHL',
            'Ментор хакатонов — QDB Scale7',
            'Лидер воркшопов по трендам ИИ',
          ],
        },
      ],
    },
    maryia: {
      title: 'Сооснователь и CTPO',
      tags: 'Лидер ИИ-систем и поставки · Архитектор программ',
      statLine: '1,500+ обученных студентов · 20 программ ИИ-грамотности',
      highlights: [
        {
          title: '1. Внедрение и зрелость',
          bullets: [
            'Обучила 1,500+ студентов применению ИИ в разных дисциплинах',
            'Спроектировала 20 программ высокой ИИ-грамотности для бизнеса и образования',
          ],
        },
        {
          title: '2. Академия и институты',
          bullets: [
            'Ментор — Skolkovo Business School (Москва)',
            'Программа «ИИ в бизнесе» — Russian Venture Forum',
          ],
        },
        {
          title: '3. Госаккредитация',
          bullets: ['Программа Минобрнауки РФ по ИИ для 500+ студентов'],
        },
        {
          title: '4. Отраслевое обучение',
          bullets: ['Обучение ИИ для MAED — крупнейшей академии маркетплейс-маркетинга в России'],
        },
      ],
    },
    artyom: {
      title: 'CTO / архитектор ИИ',
      tags: 'Архитектор корпоративных ИИ-систем',
      roleDescription:
        'Артём ведёт техническую архитектуру и интеграционный слой модели поставки ИИ с фокусом на enterprise-ready инфраструктуры, вплетённые в реальные операции.',
      highlights: [
        {
          title: '1. Трек-рекорд исполнения',
          bullets: [
            'Участие в разработке 300+ ИИ-систем и автоматизаций',
            'Full-stack ИИ-инфраструктуры: недвижимость, логистика, HR, e-commerce, edtech, сервис',
            'Поставки: агенты ИИ, автоматизация CRM, внутренние процессы, чат-боты Telegram/WhatsApp/сайт, документная и операционная аналитика',
          ],
        },
        {
          title: '2. Технические компетенции',
          bullets: [
            'ИИ и LLM: workflow на LLM, агенты и мультиагенты, промпт-архитектура, RAG, семантический поиск и векторные БД, мониторинг качества и наблюдаемость',
            'Системы и инфраструктура: API, вебхуки, аутентификация, пайплайны данных, ETL, SQL/NoSQL, облака AWS/Azure/GCP, real-time и batch, middleware, CRM (Salesforce, HubSpot, Dynamics)',
            'Интеграции и инструменты: N8N, Make, Zapier, Directus, Cursor, Lovable, Antigravity и др.; знакомство с SAP, Oracle, NetSuite; безопасность, комплаенс и эксплуатация в enterprise',
          ],
        },
      ],
    },
  },
};

fs.writeFileSync(path.join(root, 'src/locales/en/landing.json'), JSON.stringify(en, null, 2), 'utf8');
fs.writeFileSync(path.join(root, 'src/locales/ru/landing.json'), JSON.stringify(ru, null, 2), 'utf8');
console.log('Wrote landing.json en + ru');
