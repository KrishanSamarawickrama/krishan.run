export const profile = {
  name: 'Krishan Samarawickrama',
  title: 'Software Engineer',
  location: 'Sri Lanka',
  email: 'hello@krishan.run',
  website: 'https://krishan.run',
  github: 'https://github.com/krishan',
  linkedin: 'https://linkedin.com/in/krishan',

  about: [
    'Software Engineer with a passion for building elegant,',
    'performant, and user-centric applications.',
    '',
    'I enjoy working across the full stack, from crafting',
    'pixel-perfect interfaces to designing scalable backend',
    'systems. Currently exploring AI/ML integration and',
    'cloud-native architectures.',
  ],

  skills: {
    'Languages': [
      { name: 'TypeScript', level: 90 },
      { name: 'JavaScript', level: 95 },
      { name: 'Python', level: 80 },
      { name: 'Java', level: 75 },
      { name: 'SQL', level: 85 },
    ],
    'Frontend': [
      { name: 'React / Next.js', level: 92 },
      { name: 'Tailwind CSS', level: 90 },
      { name: 'HTML / CSS', level: 95 },
      { name: 'Vue.js', level: 70 },
    ],
    'Backend': [
      { name: 'Node.js', level: 88 },
      { name: 'Express / Fastify', level: 85 },
      { name: 'REST APIs', level: 90 },
      { name: 'GraphQL', level: 75 },
    ],
    'DevOps & Cloud': [
      { name: 'Docker', level: 80 },
      { name: 'AWS', level: 75 },
      { name: 'CI/CD', level: 82 },
      { name: 'Linux', level: 78 },
    ],
    'Databases': [
      { name: 'PostgreSQL', level: 85 },
      { name: 'MongoDB', level: 80 },
      { name: 'Redis', level: 72 },
    ],
  } as Record<string, { name: string; level: number }[]>,

  experience: [
    {
      role: 'Software Engineer',
      company: 'Tech Company',
      period: '2022 - Present',
      description: 'Building modern web applications with React, Node.js, and cloud technologies.',
      highlights: [
        'Led frontend architecture for key product features',
        'Improved application performance by 40%',
        'Mentored junior developers',
      ],
    },
    {
      role: 'Junior Software Engineer',
      company: 'Startup Inc.',
      period: '2020 - 2022',
      description: 'Full-stack development for SaaS platform.',
      highlights: [
        'Developed REST APIs serving 10k+ daily users',
        'Implemented responsive UI components',
        'Contributed to CI/CD pipeline setup',
      ],
    },
    {
      role: 'Software Engineering Intern',
      company: 'Digital Agency',
      period: '2019 - 2020',
      description: 'Web development and client projects.',
      highlights: [
        'Built client-facing web applications',
        'Collaborated with design team on UI/UX',
      ],
    },
  ],

  education: [
    {
      degree: 'B.Sc. in Computer Science',
      institution: 'University of Colombo',
      period: '2016 - 2020',
      details: 'Specialized in Software Engineering',
    },
  ],

  certifications: [
    { name: 'AWS Certified Cloud Practitioner', issuer: 'Amazon Web Services', year: '2023' },
    { name: 'Meta Front-End Developer', issuer: 'Meta / Coursera', year: '2022' },
  ],

  projects: [
    {
      name: 'krishan.run',
      description: 'This terminal portfolio you\'re using right now!',
      tech: 'Next.js, TypeScript, Tailwind CSS',
      url: 'https://krishan.run',
    },
    {
      name: 'Open Source Contributions',
      description: 'Active contributor to various open source projects.',
      tech: 'TypeScript, Python, Go',
    },
    {
      name: 'Cloud Infrastructure',
      description: 'Automated deployment pipelines and infrastructure as code.',
      tech: 'AWS, Terraform, Docker',
    },
  ],

  languages: [
    { name: 'English', level: 'Fluent' },
    { name: 'Sinhala', level: 'Native' },
    { name: 'Tamil', level: 'Basic' },
  ],

  social: [
    { name: 'GitHub', url: 'https://github.com/krishan', icon: '' },
    { name: 'LinkedIn', url: 'https://linkedin.com/in/krishan', icon: '' },
    { name: 'Email', url: 'mailto:hello@krishan.run', icon: '' },
  ],
};
