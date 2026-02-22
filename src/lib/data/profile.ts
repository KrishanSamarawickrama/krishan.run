export const profile = {
  name: 'Krishan Samarawickrama',
  title: 'Senior Technical Lead',
  company: 'Rootcode',
  tagline: 'Full-Stack Architect | Mentor',
  location: 'Colombo, Sri Lanka',
  email: 'Krishan.Samarawickrama@outlook.com',
  website: 'https://krishan.run',
  github: 'https://github.com/KrishanSamarawickrama',
  linkedin: 'https://linkedin.com/in/krishansamarawickrama',

  summary: 'Technical Lead at Rootcode with over 10 years in software development. Skilled in C#, ASP.NET, SQL, Docker, and cloud technologies. Passionate about driving innovation and solving complex problems.',

  about: [
    'Technical Lead at Rootcode with over 10 years in',
    'software development. Skilled in C#, ASP.NET, SQL,',
    'Docker, and cloud technologies.',
    '',
    'Passionate about driving innovation and solving',
    'complex problems.',
  ],

  stats: [
    { label: 'YEARS', value: '10+' },
    { label: 'PROJECTS', value: '9' },
    { label: 'DOMAINS', value: '5' },
    { label: 'LEAD YRS', value: '4' },
  ],

  skills: {
    'Core Languages & Frameworks': [
      { name: 'C#', level: 95 },
      { name: '.NET Core / .NET 5/6+', level: 92 },
      { name: 'ASP.NET Web API', level: 90 },
      { name: 'Angular', level: 80 },
      { name: 'HTML / CSS', level: 85 },
    ],
    'Cloud & DevOps (Azure)': [
      { name: 'Azure Web Apps', level: 88 },
      { name: 'Azure Functions', level: 85 },
      { name: 'Azure Storage', level: 82 },
      { name: 'Azure Cognitive Svcs', level: 80 },
      { name: 'Docker', level: 78 },
    ],
    'Database & Data': [
      { name: 'MS SQL Server', level: 92 },
      { name: 'T-SQL', level: 90 },
      { name: 'BigQuery', level: 75 },
      { name: 'Oracle', level: 72 },
    ],
    'Data Analytics & BI': [
      { name: 'Power BI', level: 88 },
      { name: 'Power BI Embedded', level: 85 },
      { name: 'Tableau', level: 70 },
      { name: 'R', level: 65 },
      { name: 'Crystal Reports', level: 75 },
    ],
    'Architecture & Design': [
      { name: 'Cloud-Native Arch.', level: 88 },
      { name: 'Object-Oriented Design', level: 92 },
      { name: 'RESTful APIs', level: 95 },
      { name: 'System Integration', level: 85 },
    ],
    'Tools': [
      { name: 'Visual Studio', level: 95 },
      { name: 'VS Code', level: 90 },
      { name: 'Git', level: 88 },
    ],
    'Leadership': [
      { name: 'Technical Mentorship', level: 90 },
      { name: 'Team Leadership', level: 88 },
      { name: 'Coaching', level: 85 },
      { name: 'Requirements Analysis', level: 88 },
      { name: 'Data-Driven Decisions', level: 82 },
    ],
  } as Record<string, { name: string; level: number }[]>,

  topSkills: ['C#', '.NET', 'Azure', 'Angular', 'SQL', 'Docker', 'Power BI'],

  experience: [
    {
      role: 'Senior Technical Lead',
      company: 'Rootcode',
      period: 'Jan 2025 - Present',
      description: 'Leading architecture and delivery of enterprise-scale solutions.',
      highlights: [
        'Driving technical strategy and architecture decisions',
        'Mentoring engineering teams across multiple projects',
        'Overseeing cloud-native solution delivery',
      ],
    },
    {
      role: 'Technical Lead',
      company: 'Rootcode',
      period: 'Jan 2023 - Jan 2025',
      description: 'Led cross-functional teams on complex enterprise and healthcare projects.',
      highlights: [
        'Led team of engineers on healthcare and government projects',
        'Architected scalable cloud-native solutions on Azure',
        'Established coding standards and review processes',
      ],
    },
    {
      role: 'Associate Technical Lead',
      company: 'Rootcode',
      period: 'Oct 2021 - Jan 2023',
      description: 'Transitioned into technical leadership, guiding team deliverables.',
      highlights: [
        'Managed project technical deliverables end-to-end',
        'Introduced data-driven decision frameworks',
        'Coordinated with stakeholders on requirements',
      ],
    },
    {
      role: 'Senior Software Engineer',
      company: 'Data Capture Experts',
      period: 'Jan 2020 - Sep 2021',
      description: 'Built identity and biometric solutions using Azure Cognitive Services.',
      highlights: [
        'Implemented Face API and Form Recognizer integrations',
        'Developed document processing and identity validation systems',
        'Designed scalable microservice architectures',
      ],
    },
    {
      role: 'Senior Software Engineer',
      company: 'Softlogic Holdings PLC',
      period: 'Apr 2018 - Jan 2020',
      description: 'Enterprise software for insurance and financial operations.',
      highlights: [
        'Built insurance claims automation workflows',
        'Developed financial reporting modules',
        'Integrated with Oracle ERP systems',
      ],
    },
    {
      role: 'Software Engineer',
      company: 'Softlogic Holdings PLC',
      period: 'Apr 2016 - May 2018',
      description: 'Full-stack development on enterprise and ERP platforms.',
      highlights: [
        'Developed ERP modules and financial systems',
        'Implemented reporting frameworks with Crystal Reports',
        'Collaborated on system integration projects',
      ],
    },
    {
      role: 'Software Developer',
      company: 'QB Lanka (Pvt) Ltd.',
      period: 'Jan 2015 - Apr 2016',
      description: 'Software development for business solutions.',
      highlights: [
        'Built business automation tools',
        'Worked on SQL Server database solutions',
      ],
    },
    {
      role: 'Software Developer',
      company: 'Dexter Business Solutions',
      period: 'Mar 2013 - Apr 2014',
      description: 'Entry-level development on business information systems.',
      highlights: [
        'Developed business information systems',
        'Gained foundational .NET and SQL skills',
      ],
    },
  ],

  education: [
    {
      degree: 'M.Sc. Data Science',
      institution: 'Cardiff Metropolitan University',
      period: 'Jun 2024 - Dec 2025',
      details: 'Advanced data science and machine learning',
    },
    {
      degree: 'B.Sc. Computer Science',
      institution: 'University College Dublin',
      period: '2012 - 2014',
      details: 'Second Class Honours Grade 1',
    },
    {
      degree: 'PGDip Big Data Analytics',
      institution: 'Robert Gordon University',
      period: '2016 - 2017',
      details: 'Big data analytics and statistical methods',
    },
    {
      degree: 'Higher Diploma in CBIS',
      institution: 'NIBM',
      period: '2011 - 2012',
      details: 'Computer Based Information Systems',
    },
    {
      degree: 'Diploma in Computer Systems Design',
      institution: 'NIBM',
      period: '2010 - 2011',
      details: 'Distinction',
    },
  ],

  certifications: [
    { name: 'Google Data Analytics Certificate', issuer: 'Google', year: '2023' },
    { name: 'Software Architecture: From Developer to Architect', issuer: 'Udemy', year: '2022' },
    { name: 'Develop an ASP.NET Core web app that consumes an API', issuer: 'Microsoft', year: '2021' },
    { name: 'C# Certificate', issuer: 'Microsoft', year: '2020' },
  ],

  honors: [
    'B.Sc. Computer Science — Second Class Honours Grade 1',
    'Diploma in Computer Systems Design — Distinction',
  ],

  projects: [
    {
      name: 'Healthcare Systems',
      description: 'Hospital management, ward management, pharmacy inventory, POS, claims integration.',
      tech: 'C#, .NET, Azure, SQL Server',
    },
    {
      name: 'Identity & Biometrics',
      description: 'Azure Cognitive Services (Face API, Form Recognizer), document processing, identity validation.',
      tech: 'Azure Cognitive Services, .NET, REST APIs',
    },
    {
      name: 'Government & Compliance',
      description: 'Power BI embedded reports, XML-based regulatory reporting.',
      tech: 'Power BI, SQL Server, .NET',
    },
    {
      name: 'Enterprise Solutions',
      description: 'ERP systems, financial modules, Oracle integration, insurance claims automation.',
      tech: 'C#, Oracle, .NET, Crystal Reports',
    },
    {
      name: 'Reporting & Notifications',
      description: 'Email/SMS notification systems, reporting frameworks, BI dashboards.',
      tech: 'Power BI, Azure Functions, SQL Server',
    },
  ],

  languages: [
    { name: 'English', level: 'Full Professional' },
    { name: 'Sinhalese', level: 'Native or Bilingual' },
    { name: 'Tamil', level: 'Limited Working' },
  ],

  interests: ['.NET Ecosystem', 'Cloud Computing', 'Data Science', 'Community Tech'],

  social: [
    { name: 'GitHub', url: 'https://github.com/KrishanSamarawickrama', icon: '' },
    { name: 'LinkedIn', url: 'https://linkedin.com/in/krishansamarawickrama', icon: '' },
    { name: 'Email', url: 'mailto:Krishan.Samarawickrama@outlook.com', icon: '' },
  ],
};
