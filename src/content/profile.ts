import type { Profile } from "@/types";

export const profile: Profile = {
  name: "Lucas Rocha",
  role: {
    en: "Senior Software Engineer",
    pt: "Engenheiro de Software Sênior",
  },
  tagline: {
    en: "I build software and automate processes to solve complex business problems.",
    pt: "Desenvolvo software e automatizo processos para resolver problemas complexos de negócio.",
  },
  bio: {
    en: [
      "Senior Software Engineer with experience designing and shipping production systems end to end.",
      "I specialize in scalable applications, microservices, cloud environments, and process automation, turning complex business needs into reliable technical solutions.",
    ],
    pt: [
      "Engenheiro de Software Sênior com experiência em projetar e entregar sistemas em produção de ponta a ponta.",
      "Tenho experiência em aplicações escaláveis, microsserviços, ambientes cloud e automação de processos, transformando necessidades complexas de negócio em soluções técnicas confiáveis.",
    ],
  },
  location: { en: "Brazil", pt: "Brasil" },
  timeZone: "UTC−3",
  yearsOfExperience: 7,
  availability: {
    en: "Open to new opportunities",
    pt: "Aberto a novas oportunidades",
  },
  workModel: { en: "Remote", pt: "Remoto" },
  mainStack: ["TypeScript", "Node.js", "NestJS", "React", "Next.js"],
  languages: {
    en: ["Portuguese (native)", "English B2"],
    pt: ["Português (nativo)", "Inglês B2"],
  },
  focusAreas: {
    en: ["Backend", "Frontend", "Cloud", "Automation", "AI & Integrations"],
    pt: ["Backend", "Frontend", "Cloud", "Automação", "IA & Integrações"],
  },
  links: {
    github: "https://github.com/lucasrocha20",
    linkedin: "https://www.linkedin.com/in/dev-lucas-rocha",
    email: "lucas_rocha.14@outlook.com",
    instagram: "https://www.instagram.com/rochalucasdev",
    whatsapp: "5585996973035",
    phone: "+55 85 99697-3035",
  },
  cvUrl: { en: "/cv-en.pdf", pt: "/cv-pt.pdf" },
  experiences: [
    {
      company: "Cast4IT",
      role: {
        en: "Senior Software Engineer",
        pt: "Engenheiro de Software Sênior",
      },
      start: "2022-11",
      highlights: {
        en: [
          "Built a self-service platform that enabled users to resolve common access issues independently.",
          "Developed a centralized analyst platform consolidating information from multiple systems.",
          "Designed and integrated microservices and external systems to automate information flows.",
          "Automated operational workflows including ticket creation, password expiration notifications, and customer information management.",
          "Engineered scalable applications using React, Next.js, and Node.js.",
          "Implemented CI/CD pipelines and automated testing with Jest to improve software delivery and stability.",
          "Saved an average of 2,606 operational hours per month and approximately R$492K in monthly costs.",
          "Participated in code reviews, developer training, and technical mentoring.",
        ],
        pt: [
          "Desenvolvi uma plataforma de autoatendimento que permitia aos usuários resolverem problemas comuns de acesso de forma independente.",
          "Desenvolvi uma plataforma centralizada para analistas, consolidando informações de múltiplos sistemas.",
          "Projetei e integrei microsserviços e sistemas externos para automatizar fluxos de informações.",
          "Automatizei fluxos operacionais, incluindo criação de chamados, notificações de expiração de senha e gerenciamento de informações de clientes.",
          "Desenvolvi aplicações escaláveis utilizando React, Next.js e Node.js.",
          "Implementei pipelines de CI/CD e testes automatizados com Jest para melhorar a entrega e estabilidade dos sistemas.",
          "Gerei uma economia média de 2.606 horas operacionais por mês e aproximadamente R$492 mil em custos mensais.",
          "Participei de code reviews, treinamentos e mentoria de desenvolvedores.",
        ],
      },
      tech: [
        "TypeScript",
        "React",
        "Next.js",
        "Node.js",
        "Microservices",
        "CI/CD",
        "Jest",
      ],
    },

    {
      company: "Pague Menos Drug Store",
      role: {
        en: "Mid Software Engineer",
        pt: "Engenheiro de Software Pleno",
      },
      start: "2021-08",
      end: "2022-11",
      highlights: {
        en: [
          "Streamlined ordering processes directly from manufacturers, reducing manual work and helping prevent product shortages.",
          "Developed solutions using Azure, C#, .NET, React, and React Native.",
          "Managed SQL Server procedures and triggers to support efficient database operations.",
          "Implemented EDI integrations and workers to streamline business processes.",
          "Worked with CI/CD pipelines, pull requests, and code reviews.",
        ],
        pt: [
          "Otimizei processos de pedidos diretamente com fabricantes, reduzindo trabalho manual e ajudando a evitar falta de produtos.",
          "Desenvolvi soluções utilizando Azure, C#, .NET, React e React Native.",
          "Gerenciei procedures e triggers em SQL Server para garantir operações eficientes de banco de dados.",
          "Implementei integrações com EDI e workers para otimizar processos de negócio.",
          "Atuei com pipelines de CI/CD, pull requests e code reviews.",
        ],
      },
      tech: [
        "C#",
        ".NET",
        "React",
        "React Native",
        "Azure",
        "SQL Server",
        "CI/CD",
      ],
    },

    {
      company: "Tijuca Alimentos",
      role: {
        en: "Full Stack Developer",
        pt: "Desenvolvedor Full Stack",
      },
      start: "2019-09",
      end: "2021-08",
      highlights: {
        en: [
          "Designed and delivered a Warehouse Management System (WMS) for inventory management and product location tracking.",
          "Implemented FIFO-based picking optimization within the warehouse management system.",
          "Engineered backend services using PHP and Node.js.",
          "Developed mobile applications with React Native and frontend applications with React.",
          "Maintained CI/CD pipelines using GitLab.",
          "Implemented system integrations using Pentaho and workers.",
          "Created business intelligence reports with Power BI.",
          "Containerized applications using Docker and Docker Compose.",
        ],
        pt: [
          "Projetei e desenvolvi um Warehouse Management System (WMS) para gestão de estoque e localização de produtos.",
          "Implementei otimização de picking baseada em FIFO no sistema de gestão de estoque.",
          "Desenvolvi serviços backend utilizando PHP e Node.js.",
          "Desenvolvi aplicações mobile com React Native e aplicações frontend com React.",
          "Mantive pipelines de CI/CD utilizando GitLab.",
          "Implementei integrações de sistemas utilizando Pentaho e workers.",
          "Criei relatórios de Business Intelligence utilizando Power BI.",
          "Utilizei Docker e Docker Compose para containerização das aplicações.",
        ],
      },
      tech: [
        "JavaScript",
        "PHP",
        "Node.js",
        "React",
        "React Native",
        "Docker",
        "Docker Compose",
        "GitLab",
        "Pentaho",
      ],
    },

    {
      company: "Tijuca Alimentos",
      role: {
        en: "IT Technician",
        pt: "Técnico de Informática",
      },
      start: "2017-06",
      end: "2019-09",
      highlights: {
        en: [
          "Maintained and installed CCTV and network infrastructure.",
          "Assembled and maintained computers and installed and configured software.",
          "Provided technical support and training for system implementation.",
        ],
        pt: [
          "Realizei manutenção e instalação de infraestrutura de CFTV e redes.",
          "Montei e realizei manutenção de computadores, além da instalação e configuração de softwares.",
          "Prestei suporte técnico e treinamento para implantação de sistemas.",
        ],
      },
      tech: ["Networking", "CCTV", "Hardware", "Software Support"],
    },
  ],
  skillGroups: [
    {
      name: { en: "Languages", pt: "Linguagens" },
      skills: ["TypeScript", "JavaScript", "C#", "PHP"],
    },
    {
      name: { en: "Frontend", pt: "Frontend" },
      skills: [
        "React",
        "Next.js",
        "Angular.js",
        "React Native",
        "Redux",
        "HTML",
        "CSS",
        "Storybook",
      ],
    },
    {
      name: { en: "Backend", pt: "Backend" },
      skills: ["Node.js", "Nest.js", "Express", ".NET", "REST APIs"],
    },
    {
      name: { en: "Cloud / DevOps", pt: "Cloud / DevOps" },
      skills: [
        "AWS",
        "Azure",
        "Docker",
        "Kubernetes",
        "Jenkins",
        "CI/CD",
        "Git",
      ],
    },
    {
      name: { en: "Data", pt: "Dados" },
      skills: [
        "PostgreSQL",
        "SQL Server",
        "MySQL",
        "MongoDB",
        "NoSQL",
        "ETL",
        "Pentaho",
      ],
    },
    {
      name: { en: "Architecture", pt: "Arquitetura" },
      skills: [
        "Microservices",
        "Event-Driven Architecture",
        "DDD",
        "Scalability",
        "High Availability",
      ],
    },
    {
      name: { en: "Quality & Engineering", pt: "Qualidade & Engenharia" },
      skills: [
        "Jest",
        "Vitest",
        "Unit Testing",
        "Integration Testing",
        "End-to-End Testing",
        "Code Review",
      ],
    },
  ],
  services: [
    {
      title: { en: "Custom software", pt: "Software sob medida" },
      description: {
        en: "Scalable web applications and backend systems built around your business needs.",
        pt: "Aplicações web e sistemas backend escaláveis, desenvolvidos de acordo com as necessidades do seu negócio.",
      },
      problem: {
        en: "Spreadsheets and off-the-shelf tools no longer fit how your business works.",
        pt: "Planilhas e ferramentas prontas já não atendem à forma como o seu negócio funciona.",
      },
      outcome: {
        en: "A web application built for your process, ready to grow with you, with code and documentation you own.",
        pt: "Uma aplicação web feita para o seu processo, pronta para crescer com você, com código e documentação que são seus.",
      },
      tech: ["TypeScript", "React", "Next.js", "Node.js", "NestJS", ".NET"],
    },
    {
      title: { en: "Process automation", pt: "Automação de processos" },
      description: {
        en: "Automating repetitive workflows, integrations, and business processes with modern technologies.",
        pt: "Automação de processos, integrações e tarefas repetitivas usando tecnologias modernas.",
      },
      problem: {
        en: "Your team spends hours on repetitive tasks: copying data, sending notifications, opening tickets.",
        pt: "Sua equipe perde horas com tarefas repetitivas: copiar dados, enviar notificações, abrir chamados.",
      },
      outcome: {
        en: "Workflows that run on their own, fewer manual errors, and hours back for your team every month.",
        pt: "Fluxos que rodam sozinhos, menos erros manuais e horas de volta para a sua equipe todo mês.",
      },
      tech: [
        "Node.js",
        "Queues (BullMQ)",
        "REST APIs",
        "CI/CD",
        "AWS",
        "Azure",
      ],
    },
    {
      title: { en: "AI & integrations", pt: "IA e integrações" },
      description: {
        en: "AI-powered solutions and API integrations that connect systems and streamline operations.",
        pt: "Soluções com IA e integrações entre APIs e sistemas para simplificar e otimizar operações.",
      },
      problem: {
        en: "Your systems don't talk to each other, and information like documents or leads is handled by hand.",
        pt: "Seus sistemas não conversam entre si, e informações como documentos ou leads são tratadas manualmente.",
      },
      outcome: {
        en: "Connected systems and AI features that extract, classify and act on data, with validation you can trust.",
        pt: "Sistemas conectados e recursos de IA que extraem, classificam e agem sobre os dados, com validação confiável.",
      },
      tech: [
        "OpenAI",
        "REST APIs",
        "Webhooks",
        "HubSpot",
        "WhatsApp",
        "PostgreSQL",
      ],
    },
  ],
  metrics: [
    {
      value: { en: "2,606 h", pt: "2.606 h" },
      label: {
        en: "operational hours saved per month through automation",
        pt: "horas operacionais economizadas por mês com automação",
      },
    },
    {
      value: { en: "R$492K", pt: "R$492 mil" },
      label: {
        en: "in operational costs saved per month",
        pt: "em custos operacionais economizados por mês",
      },
    },
  ],
  caseStudies: [
    {
      title: "DocuMind AI",
      repo: "DocuMindAI",
      problem: {
        en: "Invoice data is typed by hand from PDFs into other systems: slow, and easy to get wrong.",
        pt: "Dados de notas fiscais são digitados à mão a partir de PDFs em outros sistemas: lento e sujeito a erros.",
      },
      solution: {
        en: "Upload the PDFs and a background pipeline extracts supplier, totals and every line item with an LLM, validates each field, and saves it to the database. A dashboard shows progress and results live.",
        pt: "Basta enviar os PDFs: um pipeline em segundo plano extrai fornecedor, totais e cada item com um LLM, valida todos os campos e salva no banco. Um painel mostra o progresso e os resultados em tempo real.",
      },
      result: {
        en: "Structured invoice data with no manual typing. AI output is never trusted as-is, and the same document is never saved twice.",
        pt: "Dados estruturados das notas sem digitação manual. A resposta da IA nunca é aceita sem validação, e o mesmo documento nunca é salvo duas vezes.",
      },
      tech: ["NestJS", "React", "OpenAI", "PostgreSQL", "BullMQ", "Zod"],
    },
    {
      title: "LeadFlow",
      repo: "LeadFlow",
      problem: {
        en: "Leads from web forms wait hours for a reply, follow-ups are forgotten, and the CRM is always out of date.",
        pt: "Leads de formulários esperam horas por uma resposta, os follow-ups são esquecidos e o CRM está sempre desatualizado.",
      },
      solution: {
        en: "Captures each lead, scores it with configurable rules, contacts it right away over WhatsApp and email, follows up on a schedule until it replies, and keeps HubSpot in sync.",
        pt: "Captura cada lead, pontua com regras configuráveis, faz o primeiro contato na hora por WhatsApp e e-mail, segue com follow-ups até a resposta e mantém o HubSpot sincronizado.",
      },
      result: {
        en: "From form submission to CRM in under a second with no manual work, a full audit trail per lead, and no duplicate messages on retries.",
        pt: "Do formulário ao CRM em menos de um segundo, sem trabalho manual, com histórico completo de cada lead e sem mensagens duplicadas em novas tentativas.",
      },
      tech: [
        "Node.js",
        "Fastify",
        "PostgreSQL",
        "BullMQ",
        "HubSpot",
        "WhatsApp",
      ],
    },
    {
      title: "Marketingia",
      repo: "marketing-ia",
      problem: {
        en: "Creators and marketers spend time every week coming up with Instagram content ideas.",
        pt: "Criadores e profissionais de marketing gastam tempo toda semana pensando em ideias de conteúdo para o Instagram.",
      },
      solution: {
        en: "Enter a niche and a short description, and the app uses OpenAI to suggest a ready-to-use post: format (Reels, carousel, Stories), hook, body and call to action.",
        pt: "Informe um nicho e uma descrição curta, e o app usa a OpenAI para sugerir uma publicação pronta: formato (Reels, carrossel, Stories), gancho, desenvolvimento e chamada para ação.",
      },
      result: {
        en: "Concrete, engagement-focused post ideas in seconds instead of a blank page.",
        pt: "Ideias de publicação concretas e focadas em engajamento em segundos, em vez de uma página em branco.",
      },
      tech: ["NestJS", "React", "OpenAI", "Docker"],
    },
  ],
  faq: [
    {
      question: {
        en: "Do you work remotely?",
        pt: "Você trabalha remotamente?",
      },
      answer: {
        en: "Yes, 100% remote from Brazil (UTC−3). I adapt to your team's tools and meeting schedule.",
        pt: "Sim, 100% remoto, do Brasil (UTC−3). Eu me adapto às ferramentas e aos horários de reunião da sua equipe.",
      },
    },
    {
      question: {
        en: "How long does a project take?",
        pt: "Quanto tempo leva um projeto?",
      },
      answer: {
        en: "It depends on the scope. After our first conversation I send a proposal with the steps and an estimated timeline.",
        pt: "Depende do escopo. Depois da nossa primeira conversa eu envio uma proposta com as etapas e um prazo estimado.",
      },
    },
    {
      question: {
        en: "Can you work with my existing systems?",
        pt: "Você trabalha com os sistemas que eu já uso?",
      },
      answer: {
        en: "Yes. Much of my work is integrating with existing systems through APIs, webhooks and databases, without starting from scratch.",
        pt: "Sim. Boa parte do meu trabalho é integrar sistemas existentes por meio de APIs, webhooks e bancos de dados, sem começar do zero.",
      },
    },
    {
      question: {
        en: "Which technologies do you use?",
        pt: "Quais tecnologias você usa?",
      },
      answer: {
        en: "Mainly TypeScript, Node.js, NestJS, React and Next.js, plus .NET, PostgreSQL, AWS/Azure and OpenAI. I pick what fits your project and team.",
        pt: "Principalmente TypeScript, Node.js, NestJS, React e Next.js, além de .NET, PostgreSQL, AWS/Azure e OpenAI. Escolho o que se encaixa no seu projeto e na sua equipe.",
      },
    },
    {
      question: {
        en: "How do we get started?",
        pt: "Como começamos?",
      },
      answer: {
        en: "Send me a message by email or WhatsApp describing what you need. We schedule a short call to understand the problem, and I follow up with a proposal.",
        pt: "Me mande uma mensagem por e-mail ou WhatsApp contando o que você precisa. Marcamos uma conversa rápida para entender o problema e eu retorno com uma proposta.",
      },
    },
  ],
};
