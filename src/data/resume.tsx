import { Icons } from "@/components/icons";
import { HomeIcon, Database, Smartphone, Workflow, Boxes, Layers, Users, TestTubeDiagonal, Sparkles, BrainCircuit, ChartNoAxesCombined } from "lucide-react";
import { Java } from "@/components/ui/svgs/java";
import { Python } from "@/components/ui/svgs/python";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { CppIcon, JavaScriptIcon, HTML5Icon, CSS3Icon, ExpressIcon, RESTAPIsIcon, GitIcon, VSCodeIcon, PostmanIcon } from "@/components/ui/svgs/skills-icons";

export const DATA = {
  name: "Adrija Chatterjee",
  initials: "AC",
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  location: "Kolkata, West Bengal",
  locationLink: "https://www.google.com/maps/place/Kolkata",
  role: "Full-Stack Developer & Computer Science Undergraduate",
  description: "Adrija Chatterjee is a Computer Science Engineering undergraduate at IEM Kolkata with experience in full-stack web development, REST APIs, and AI-integrated applications.",
  introduction: "I build user-centric web applications, REST APIs, and AI-integrated tools. I'm seeking software engineering, product development, and backend engineering opportunities.",
  summary: "I'm Adrija, a _Computer Science and Engineering undergraduate at IEM Kolkata_. I enjoy building scalable, user-centric systems with full-stack web development, REST APIs, and AI integration. As a _Product Engineering Intern at IEM Research Foundation (Chrysalis)_, I shipped product features in an Agile team and translated requirements into working prototypes. A _tech immersion program at UNSW, Sydney_ broadened my experience in cybersecurity, neural networks, web development, virtual reality, and AI systems. Beyond technology, I lead delegate affairs, practice Kathak, and pursue fine arts.",
  avatarUrl: "/adrija-profile.png",
  skills: {
    Languages: [{ name: "C", icon: "/skills/c.svg" }, { name: "C++", icon: CppIcon }, { name: "Java", icon: Java }, { name: "Python", icon: Python }, { name: "JavaScript", icon: JavaScriptIcon }, { name: "SQL", icon: Database }, { name: "TypeScript (basic)", icon: Typescript }],
    "Web Development": [{ name: "HTML5", icon: HTML5Icon }, { name: "CSS3", icon: CSS3Icon }, { name: "React.js", icon: ReactLight }, { name: "Node.js", icon: Nodejs }, { name: "Express.js", icon: ExpressIcon }, { name: "REST APIs", icon: RESTAPIsIcon }, { name: "Responsive Design", icon: Smartphone }],
    Databases: [{ name: "MongoDB", icon: "/skills/mongodb.svg" }, { name: "MySQL", icon: "/skills/mysql.svg" }, { name: "PostgreSQL (basic)", icon: Postgresql }],
    "Tools & Platforms": [{ name: "Git", icon: GitIcon }, { name: "GitHub", icon: Icons.github }, { name: "VS Code", icon: VSCodeIcon }, { name: "Replit", icon: "/skills/replit.svg" }, { name: "Render", icon: "/skills/render.svg" }, { name: "Google Cloud Platform", icon: "/skills/googlecloud.svg" }, { name: "Postman", icon: PostmanIcon }],
    Concepts: [{ name: "Data Structures & Algorithms", icon: Workflow }, { name: "OOP", icon: Boxes }, { name: "MVC Architecture", icon: Layers }, { name: "Agile/Scrum", icon: Users }, { name: "Unit Testing", icon: TestTubeDiagonal }, { name: "Prompt Engineering", icon: Sparkles }],
    "AI & ML": [{ name: "AI API Integration", icon: RESTAPIsIcon }, { name: "Prompt Engineering", icon: Sparkles }, { name: "Neural Networks (basic)", icon: BrainCircuit }, { name: "Model Evaluation", icon: ChartNoAxesCombined }],
  },
  navbar: [{ href: "/", icon: HomeIcon, label: "Home" }],
  contact: {
    email: "adrijachatterjeeiem@gmail.com",
    social: {
      GitHub: { name: "GitHub", url: "https://github.com/Adrijaww", icon: Icons.github, navbar: true },
      LinkedIn: { name: "LinkedIn", url: "https://www.linkedin.com/in/adrija-chatterjee-346a87321/", icon: Icons.linkedin, navbar: true },
      X: { name: "X", url: "https://x.com/awdrij44", icon: Icons.x, navbar: true },
      email: { name: "Send Email", url: "mailto:adrijachatterjeeiem@gmail.com", icon: Icons.email, navbar: true },
    },
  },
  work: [
    { company: "IEM Research Foundation (Chrysalis)", title: "Product Engineering Intern", logoUrl: "/iem-logo.png", start: "May 2026", end: "Jul 2026", description: "Shipped 3+ product features, reducing user workflow steps by approximately 20%. Collaborated in an Agile team of 6 using JavaScript and REST APIs, reducing bugs by 15%. Translated requirements into technical specifications and prototypes, contributing to 2 milestone releases ahead of schedule. Conducted unit and integration testing to improve feature stability in staging and production." },
    { company: "University of New South Wales", title: "Study Abroad — Tech Immersion Program", logoUrl: "/unsw-logo.png", start: "May 2025", end: "Jun 2025", description: "Completed an interdisciplinary program in Sydney, Australia covering cybersecurity, neural networks, web development, virtual reality, and AI systems design. Solved 5 real-world case studies and delivered prototypes including a DDoS defense simulation and responsive web application. Studied scalable system design, UX testing, and cybersecurity fundamentals with industry and academic experts." },
  ],
  education: [
    { school: "Institute of Engineering & Management, Kolkata", href: "https://iem.edu.in/", degree: "B.Tech — Computer Science and Engineering", logoUrl: "/iem-logo.png", start: "Aug 2024", end: "May 2028", description: "Coursework: Data Structures & Algorithms, OOP, Database Management Systems, Computer Networks, Operating Systems, Web Technologies" },
    { school: "Auxilium Convent School", href: "#education", degree: "ISC — Class XII", logoUrl: "/auxilium-logo.png", start: "2024", end: "2024", description: "Score: 83.2%" },
    { school: "Auxilium Convent School", href: "#education", degree: "ICSE — Class X", logoUrl: "/auxilium-logo.png", start: "2022", end: "2022", description: "Score: 90.2%" },
  ],
  projects: [
    { title: "Raahe", href: "", dates: "Travel Companion Platform", description: "Built a full-stack travel companion platform for itinerary planning and destination discovery for 50+ test users. Developed a MongoDB-backed REST API supporting concurrent sessions, real-time recommendations, and CRUD operations. Created a mobile-first interface and reduced page load time by 30% with lazy loading and optimized API calls.", technologies: ["React.js", "Node.js", "REST APIs", "MongoDB", "Responsive CSS"], links: [] as { type: string; href: string; icon: React.ReactNode }[], image: "/images/raahe-cover.png", video: "" },
    { title: "URL Shortener Service", href: "", dates: "Backend Engineering", description: "Designed and deployed a URL shortening service with base-62 encoding, collision-safe unique IDs, and redirect tracking. Built a SQL-backed backend optimized for O(1) lookup, handling 1,000+ redirects in local load testing without performance degradation. Implemented collision handling and an analytics-ready architecture to support future horizontal scaling.", technologies: ["Node.js", "Express.js", "SQL", "Base-62 Encoding"], links: [] as { type: string; href: string; icon: React.ReactNode }[], image: "/images/url-shortener-cover.png", video: "" },
    { title: "Billaboost", href: "", dates: "AI-Powered Time Tracker", description: "Developed an AI-integrated productivity tool that automatically categorizes and logs work sessions, reducing manual time-tracking effort by 40%. Integrated an ML-based activity classification model for weekly productivity insights. Designed a real-time dashboard displaying tracked hours, task breakdowns, and efficiency trends.", technologies: ["Python", "AI/ML APIs", "Data Visualization", "REST"], links: [] as { type: string; href: string; icon: React.ReactNode }[], image: "/images/billaboost-cover.png", video: "" },
  ],
  leadership: [
    { title: "Lead — Delegate Affairs", organization: "IEM Model United Nations (IEMMUN’26)", dates: "2026", description: "Led delegate operations for 100+ participants, managing communications, scheduling, and onboarding. Previously served as an Executive Board member at IEMMUN’25, moderating committee sessions and mentoring delegates through diplomatic debate." },
    { title: "Core Member — Delegate Affairs", organization: "Rotary Forum of Diplomacy", dates: "2025 – Present", description: "Managed delegate relations and inter-organization communications, coordinating logistics for 80+ attendees across multiple forums." },
    { title: "School Prefect & Captain", organization: "Auxilium Convent School", dates: "2023 – 2024", description: "Led 15 student council members, organized 8+ school events, and maintained oversight across a student body of 500+." },
  ],
  certifications: [
    { title: "Cybersecurity Fundamentals", description: "DDoS mitigation, phishing defense, and system security, completed as part of the UNSW study abroad program." },
    { title: "Diploma in Kathak Classical Dance", description: "Sustained discipline, performance under pressure, and long-term creative commitment." },
    { title: "Diploma in Fine Arts / Drawing", description: "Visual communication skills and design sensibility applicable to UI/UX work." },
  ],
} as const;
