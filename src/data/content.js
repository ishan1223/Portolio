export const personalInfo = {
  name: "Ishan",
  title: "Software Engineer",
  email: "ishankumar1437@gmail.com",
  phone: "+91 73178-98911",
  linkedin: "https://linkedin.com/in/yourprofile",
  github: "https://github.com/ishan1223",
  leetcode: "https://leetcode.com/u/ishan1223/",
  resumePath: "/resume.pdf",
  portrait: "/images/profile.jpg",
  heroTagline: "Engineering Ideas Into Real-World Software.",
  typingRoles: [
    "Computer Science Undergraduate",
    "Full Stack Developer",
    "AI Enthusiast",
    "Problem Solver",
  ],
  heroDescription:
    "I build thoughtful, scalable software at the intersection of engineering and intelligence — turning complex problems into elegant, production-ready solutions.",
  about: [
    "My journey into software started with a simple question: how do things work under the hood? That curiosity led me from breaking (and fixing) small scripts to architecting full-stack applications used by real people.",
    "Today, I focus on building AI-powered tools and robust web platforms — writing clean code, designing intuitive interfaces, and shipping features that matter. I learn fast, iterate relentlessly, and care deeply about craft.",
    "I'm actively seeking Software Engineering, AI/ML, and Full Stack internships where I can contribute from day one and grow alongside exceptional teams.",
  ],
};

export const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "linkedin", label: "LinkedIn" },
  { id: "leetcode", label: "LeetCode" },
  { id: "experience", label: "Experience" },
  { id: "achievements", label: "Achievements" },
  { id: "contact", label: "Contact" },
];

export const linkedinProfile = {
  url: personalInfo.linkedin,
  headline: "Computer Science Student · Full Stack Developer · AI Enthusiast",
  location: "United States",
  connections: 500,
  image: "/images/profile.jpg",
  image: "/images/profile.jpg",
  featuredPosts: [
    {
      title: "Shipped my first AI-powered side project",
      excerpt:
        "Built an end-to-end resume analyzer using FastAPI and React. Learned more about NLP pipelines and production deployment in two weeks than an entire semester of lectures.",
      date: "2 weeks ago",
      engagement: "42 reactions",
    },
    {
      title: "What I learned leading a university coding club",
      excerpt:
        "Mentoring 30+ students taught me that great engineering is as much about communication and clarity as it is about writing code.",
      date: "1 month ago",
      engagement: "68 reactions",
    },
    {
      title: "Open to Summer 2026 SWE & AI/ML internships",
      excerpt:
        "Passionate about building products that matter. If you're hiring interns who ship fast and care about craft — let's connect.",
      date: "2 months ago",
      engagement: "115 reactions",
    },
  ],
};

export const leetcodeStats = {
  url: personalInfo.leetcode,
  username: "ishan1223",
  totalSolved: 350,
  easy: 120,
  medium: 180,
  hard: 50,
  contestRating: 1650,
};

export const skills = [
  {
    category: "Languages",
    items: ["Python", "JavaScript", "TypeScript", "Java", "C++", "SQL"],
  },
  {
    category: "Frameworks",
    items: ["React", "Node.js", "Express", "FastAPI", "Next.js", "Tailwind CSS"],
  },
  {
    category: "Databases",
    items: ["PostgreSQL", "MongoDB", "Redis", "SQLite", "Firebase"],
  },
  {
    category: "AI Tools",
    items: ["PyTorch", "TensorFlow", "OpenAI API", "LangChain", "scikit-learn", "Hugging Face"],
  },
  {
    category: "Developer Tools",
    items: ["Git", "Docker", "VS Code", "Postman", "Figma", "Linux"],
  },
  {
    category: "Cloud",
    items: ["AWS", "Vercel", "Google Cloud", "Netlify", "Railway"],
  },
];

export const projects = [
  {
    id: "ai-resume-analyzer",
    title: "AI Resume Analyzer",
    description:
      "An intelligent resume analysis tool that uses NLP to evaluate resumes against job descriptions, providing actionable feedback and match scores.",
    image: "/images/projects/placeholder-1.svg",
    tech: ["Python", "FastAPI", "React", "OpenAI API", "Tailwind"],
    github: "https://github.com/ishan1223",
    demo: "https://your-demo.vercel.app",
  },
  {
    id: "ai-interview-prep",
    title: "AI Interview Prep App",
    description:
      "A mock interview platform powered by AI that generates role-specific questions, evaluates responses, and tracks improvement over time.",
    image: "/images/projects/placeholder-2.svg",
    tech: ["Next.js", "TypeScript", "OpenAI", "PostgreSQL", "Prisma"],
    github: "https://github.com/ishan1223/CodeSensei",
    demo: "https://your-demo.vercel.app",
  },
  {
    id: "expense-tracker",
    title: "Expense Tracker",
    description:
      "A full-stack expense management application with real-time analytics, category insights, and intuitive data visualization dashboards.",
    image: "/images/projects/placeholder-3.svg",
    tech: ["React", "Node.js", "MongoDB", "Chart.js", "Express"],
    github: "https://github.com/ishan1223",
    demo: "https://your-demo.vercel.app",
  },
  {
    id: "portfolio-website",
    title: "Portfolio Website",
    description:
      "A performant, accessible personal portfolio built with modern web technologies, featuring smooth animations and responsive design.",
    image: "/images/projects/placeholder-4.svg",
    tech: ["React", "Vite", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/ishan1223/Portolio",
    demo: "https://your-portfolio.vercel.app",
  },
];

export const experience = [
  {
    type: "Projects",
    title: "Full-Stack & AI Projects",
    organization: "Personal & Academic",
    period: "2023 — Present",
    description:
      "Built 10+ production-grade applications spanning AI tools, web platforms, and data-driven dashboards. Focused on clean architecture, testing, and user-centric design.",
  },
  {
    type: "Leadership",
    title: "Technical Lead",
    organization: "University Coding Club",
    period: "2024 — Present",
    description:
      "Led workshops on React, Python, and AI fundamentals. Mentored 30+ students on project development, code reviews, and hackathon preparation.",
  },
  {
    type: "Open Source",
    title: "Open Source Contributor",
    organization: "GitHub Community",
    period: "2023 — Present",
    description:
      "Contributed bug fixes, documentation, and features to open-source projects. Active in issue triage and community discussions.",
  },
  {
    type: "Hackathons",
    title: "Hackathon Participant",
    organization: "Various University & Online Events",
    period: "2023 — Present",
    description:
      "Competed in 5+ hackathons, building MVPs under tight deadlines. Won recognition for innovative AI solutions and polished product demos.",
  },
];

export const achievements = [
  { label: "Projects Built", value: 12, suffix: "+" },
  { label: "GitHub Commits", value: 500, suffix: "+" },
  { label: "Technologies", value: 25, suffix: "+" },
  { label: "Problem Solving", value: 200, suffix: "+" },
  { label: "Years Learning", value: 4, suffix: "" },
];

export const githubStats = {
  repositories: 3,
  stars: 1,
  followers: 1,
};
