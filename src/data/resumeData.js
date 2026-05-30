// ─── Personal Info ────────────────────────────────────────────────────────────
export const personal = {
  name: 'Rudra Mehta',
  firstName: 'Rudra',
  lastName: 'Mehta',
  role: 'Backend Engineer',
  tagline: 'Building scalable microservices and real-time systems with Java, Spring Boot & AWS',
  email: 'r.v.mehta9905@gmail.com',
  phone: '+91 8866028764',
  github: 'https://github.com/Rudra9905',
  githubUsername: 'Rudra9905',
  linkedin: 'https://www.linkedin.com/in/rudra-mehta/',
  location: 'Nadiad, Gujarat, India',
  resumeFile: '/Rudra_Mehta_Resume.pdf',
  avatar: '/avatar.png',
};

// ─── About ────────────────────────────────────────────────────────────────────
export const aboutText =
  'Backend engineer specializing in scalable microservices, real-time systems, and cloud-native architecture with Java and Spring Boot. ' +
  'I design distributed backends, secure REST APIs, and production-grade platforms — from WebRTC classroom streaming to AI-powered payment gateways — ' +
  'with a strong focus on system design, performance, and clean engineering.';

export const stats = [
  { value: '300+', label: 'LeetCode Problems' },
  { value: '1,000+', label: 'API Requests / Min' },
  { value: '50+', label: 'Concurrent WebRTC Users' },
  { value: '4', label: 'Major Projects Built' },
];

// ─── Skills ───────────────────────────────────────────────────────────────────
export const skillGroups = [
  {
    category: 'Languages',
    colorClass: 'text-violet-600 dark:text-violet-400',
    bgClass: 'bg-violet-50 dark:bg-violet-500/10',
    borderClass: 'border-violet-200 dark:border-violet-500/20',
    items: ['Java', 'C++', 'Python', 'SQL'],
  },
  {
    category: 'Frameworks & Tech',
    colorClass: 'text-blue-600 dark:text-blue-400',
    bgClass: 'bg-blue-50 dark:bg-blue-500/10',
    borderClass: 'border-blue-200 dark:border-blue-500/20',
    items: ['Spring Boot', 'React', 'Node.js', 'WebSockets', 'WebRTC', 'gRPC'],
  },
  {
    category: 'Cloud & DevOps',
    colorClass: 'text-sky-600 dark:text-sky-400',
    bgClass: 'bg-sky-50 dark:bg-sky-500/10',
    borderClass: 'border-sky-200 dark:border-sky-500/20',
    items: ['AWS', 'Docker', 'ECS', 'Git'],
  },
  {
    category: 'Databases',
    colorClass: 'text-emerald-600 dark:text-emerald-400',
    bgClass: 'bg-emerald-50 dark:bg-emerald-500/10',
    borderClass: 'border-emerald-200 dark:border-emerald-500/20',
    items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis'],
  },
  {
    category: 'AI & ML',
    colorClass: 'text-orange-600 dark:text-orange-400',
    bgClass: 'bg-orange-50 dark:bg-orange-500/10',
    borderClass: 'border-orange-200 dark:border-orange-500/20',
    items: ['TensorFlow', 'FastAPI', 'DeepFace', 'RAG', 'Gemini API'],
  },
  {
    category: 'Concepts',
    colorClass: 'text-rose-600 dark:text-rose-400',
    bgClass: 'bg-rose-50 dark:bg-rose-500/10',
    borderClass: 'border-rose-200 dark:border-rose-500/20',
    items: ['System Design', 'Microservices', 'Backend Architecture', 'REST APIs', 'DBMS'],
  },
];

// ─── Projects ─────────────────────────────────────────────────────────────────
export const projects = [
  {
    title: 'Studify',
    subtitle: 'Real-Time Scalable Smart Classroom Platform',
    problem:
      'Educational institutions needed a platform that supports live interactive meetings and large-scale broadcast streaming without compromising latency or reliability.',
    solution:
      'Architected a Spring Boot backend with WebRTC SFU architecture for real-time meetings (50 concurrent users) and broadcast streaming (300+ viewers). Deployed microservices on AWS ECS with JWT auth, RBAC, ALB, private networking, and horizontal auto-scaling.',
    impact:
      'Processes 1,000+ API requests per minute with event-driven participant synchronization. Database query tuning cut response latency by 40%.',
    tech: ['Java', 'Spring Boot', 'WebRTC', 'WebSockets', 'AWS', 'MySQL'],
    github: '#',
    demo: null,
    featured: true,
  },
  {
    title: 'IrisPay',
    subtitle: 'AI-Powered Biometric Payment Gateway',
    problem:
      'Traditional card-based payments create friction at checkout and raise security concerns around storing sensitive payment credentials.',
    solution:
      'Built a microservices payment system coupling a Spring Boot transaction service with a Python/Flask ML inference service for card-free biometric authentication. Engineered a DeepFace facial embedding pipeline with cosine similarity verification and AES-encrypted embedding storage.',
    impact:
      'Ranked Top 10 at DUHacks 5.0 out of 200 teams. Eliminated raw biometric image storage entirely while securing inter-service traffic via JWT and an API gateway.',
    tech: ['Java', 'Spring Boot', 'Python', 'Flask', 'TensorFlow', 'PostgreSQL'],
    github: 'https://github.com/Rudra9905/Iris',
    demo: null,
    featured: true,
  },
  {
    title: 'QuickFix',
    subtitle: 'On-Demand Home Services Platform',
    problem:
      'Home service marketplaces require reliable booking flows, real-time status updates, and secure multi-role access at scale.',
    solution:
      'Delivered scalable RESTful backend services with connection pooling and query optimization. Enforced stateless JWT security with Spring Security, RBAC, refresh token rotation, and WebSocket-driven live booking notifications.',
    impact:
      'Supports 100+ concurrent users with 35% faster average API response times. Full stack containerized with Docker for reproducible cross-environment deployments.',
    tech: ['Java', 'Spring Boot', 'PostgreSQL', 'Docker', 'JWT', 'WebSockets'],
    github: '#',
    demo: null,
    featured: false,
  },
  {
    title: 'CodeIntel',
    subtitle: 'AI-Powered Codebase Intelligence Platform',
    problem:
      'Large codebases are difficult to navigate and reason about — developers lack tools that understand architectural structure and dependencies at scale.',
    solution:
      'Designed a microservices architecture with Spring Boot orchestration and Python FastAPI for AST parsing. Built a RAG pipeline with hybrid BM25, keyword scoring, and dependency graph expansion. Added a gRPC query orchestrator with Redis caching and Gemini API integration.',
    impact:
      'Enables accurate multi-hop context resolution and automated detection of architectural issues with system-level engineering insights.',
    tech: ['Java', 'Python', 'gRPC', 'Redis', 'Spring Boot', 'FastAPI'],
    github: 'https://github.com/Rudra9905/Codeintel',
    demo: null,
    featured: false,
  },
];

// ─── Experience ───────────────────────────────────────────────────────────────
export const experience = [];

// ─── Education ────────────────────────────────────────────────────────────────
export const education = {
  degree: 'B.Tech in Information Technology',
  school: 'Dharmsinh Desai University',
  location: 'Nadiad, Gujarat, India',
  graduation: 'Expected May 2027',
  cpi: '8.61 / 10.0',
};

// ─── Achievements ─────────────────────────────────────────────────────────────
export const awsCertificate = {
  file: '/AWS Certified Cloud Practitioner certificate.pdf',
  downloadName: 'Rudra_Mehta_AWS_Cloud_Practitioner_Certificate.pdf',
};

export const achievements = [
  {
    icon: '☁️',
    title: 'AWS Certified Cloud Practitioner (CLF-C02)',
    detail: 'Cloud concepts, AWS core services, security, pricing & architecture',
  },
  {
    icon: '🏆',
    title: 'DUHacks 5.0 — Top 10',
    detail: 'IrisPay ranked among top offline projects out of 200 teams',
  },
  {
    icon: '💡',
    title: '300+ LeetCode Problems Solved',
    detail: 'Strong foundation in data structures & algorithms',
  },
];
