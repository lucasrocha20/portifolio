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
  yearsOfExperience: 7,
  focusAreas: {
    en: ["Backend", "Frontend", "Cloud", "Automation", "AI & Integrations"],
    pt: ["Backend", "Frontend", "Cloud", "Automação", "IA & Integrações"],
  },
  links: {
    github: "https://github.com/lucasrocha20",
    linkedin: "https://www.linkedin.com/in/dev-lucas-rocha",
    email: "lucas_rocha.14@outlook.com",
    instagram: "https://www.instagram.com/rochalucasdev",
  },
  cvUrl: { en: "/cv-en.pdf", pt: "/cv-pt.pdf" },
  experiences: [
    {
      company: "Cast Group",
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
      tech: [
        "Networking",
        "CCTV",
        "Hardware",
        "Software Support",
      ],
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
    },
    {
      title: { en: "Process automation", pt: "Automação de processos" },
      description: {
        en: "Automating repetitive workflows, integrations, and business processes with modern technologies.",
        pt: "Automação de processos, integrações e tarefas repetitivas usando tecnologias modernas.",
      },
    },
    {
      title: { en: "AI & integrations", pt: "IA e integrações" },
      description: {
        en: "AI-powered solutions and API integrations that connect systems and streamline operations.",
        pt: "Soluções com IA e integrações entre APIs e sistemas para simplificar e otimizar operações.",
      },
    }],
};
