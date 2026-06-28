/**
 * ==============================================================
 * 🌟 TEMPLATE INSTRUCTIONS 🌟
 * ==============================================================
 * This is the main configuration file for your portfolio.
 * You can change all the text, links, and images here without touching the React components.
 * 
 * Asset Management:
 * To add images or PDFs, place them in the 'public' folder (e.g. 'public/img/' or 'public/pdf/')
 * and reference them using the `assetUrl` function.
 * Example: assetUrl('img/your-image.png')
 */

export const assetUrl = (relativePath) =>
  `${import.meta.env.BASE_URL}${relativePath}`;

// ==========================================
// 🧑 PROFILE DATA (Used in Hero & About Sections)
// ==========================================
export const PROFILE = {
  name: "nam",
  title: "Your Job Title Here",
  subtitle: "A short catchy subtitle about what you do",
  bio: "Write a short bio about yourself here. Explain your background, what you're passionate about, and what kind of work you do. Keep it engaging and to the point.",
  location: "City, Country",
  email: "your.email@example.com",
  github: "https://github.com/yourusername",
  linkedin: "https://www.linkedin.com/in/yourusername",
  cv: assetUrl("pdf/your-cv.pdf"),
  whatsapp: {
    number: "060000000",
    message: "Hi, I saw your portfolio and would like to chat!",
  },
};

// ==========================================
// 🏅 HERO SECTION BADGES (Floating pills)
// ==========================================
export const HERO_BADGES = [
  "PHP",
  "Laravel",
  "MySQL",
  "React",
  "JavaScript",
  "Linux",
];

// ==========================================
// 💻 SKILLS SECTION
// Group your skills into categories.
// Logos can be devicon CDN URLs or any valid image URL.
// ==========================================
export const SKILL_GROUPS = [
  {
    title: "Frontend",
    icon: "Monitor",
    description: "Building responsive, accessible, and modern interfaces.",
    items: [
      {
        name: "React",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
      {
        name: "JavaScript",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      },
      {
        name: "TypeScript",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      },
      {
        name: "HTML5",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      },
      {
        name: "CSS",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      },
    ],
  },
  {
    title: "Backend",
    icon: "Server",
    description: "Server-side logic, APIs, and secure data operations.",
    items: [
      {
        name: "PHP",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
      },
      {
        name: "Laravel",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg",
      },
      {
        name: "FastAPI",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
      },
      { name: "REST API", logo: "https://cdn.simpleicons.org/fastapi" },
    ],
  },
  {
    title: "Databases",
    icon: "Database",
    description: "Data modeling, queries, and secure persistence.",
    items: [
      {
        name: "MySQL",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      },
    ],
  },
  {
    title: "Languages",
    icon: "Code",
    description: "Programming languages used in projects and studies.",
    items: [
      {
        name: "Python",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      },
      {
        name: "Java",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
      },
      {
        name: "C",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
      },
      {
        name: "C++",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
      },
      {
        name: "PHP",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
      },
      {
        name: "JavaScript",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      },
    ],
  },
  {
    title: "Systems & Automation",
    icon: "Terminal",
    description: "Environment and scripting for development and deployment.",
    items: [
      {
        name: "Linux",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
      },
      {
        name: "Bash",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg",
      },
    ],
  },
  {
    title: "Soft Skills",
    icon: "Users",
    description: "Interpersonal and problem-solving strengths.",
    items: [
      { name: "Teamwork" },
      { name: "Problem Solving" },
      { name: "Communication" },
      { name: "Adaptability" },
      { name: "Critical Thinking" },
      { name: "Stress Management" },
    ],
  },
];

// ==========================================
// 🚀 PROJECTS SECTION
// Add your portfolio projects here.
// Set 'featured: true' to highlight them prominently.
// Use 'github' and 'live' for links (set to null if not applicable).
// ==========================================
export const PROJECTS = [
  {
    title: "Example Project One",
    description:
      "A brief description of your first project. Explain what problem it solves, what you learned, and the overall impact.",
    technologies: [
      "React",
      "Node.js",
      "MongoDB",
      "Express",
      "TailwindCSS",
    ],
    github: "https://github.com/yourusername/project-one",
    live: "https://project-one.com",
    image: assetUrl("img/project1-placeholder.png"),
    featured: true,
  },
  {
    title: "Example Project Two",
    description:
      "A description of your second project. Mention any key features or interesting technical challenges you overcame.",
    technologies: [
      "Python",
      "FastAPI",
      "PostgreSQL",
      "Docker",
    ],
    highlights: [
      "Implemented secure user authentication",
      "Built a RESTful API architecture",
      "Optimized database queries",
      "Deployed using Docker containers",
    ],
    github: "https://github.com/yourusername/project-two",
    live: null,
    image: assetUrl("img/project2-placeholder.png"),
    featured: true,
  },
];

// ==========================================
// 🎓 EXPERIENCE & EDUCATION SECTION
// Add your timeline entries here (work, education, certificates).
// ==========================================
export const EXPERIENCE = [
  {
    date: "2023 — Present",
    title: "University/Company Name — Degree/Role",
    description:
      "Description of your coursework, job responsibilities, or key achievements during this period.",
    type: "education", // 'education' or 'work'
  },
  {
    date: "2021 — 2023",
    title: "Previous Company Name — Previous Role",
    description:
      "A summary of the impact you made in your previous role.",
    type: "work",
  },
];

// ==========================================
// 🧭 NAVIGATION MENU
// Customize your navbar links here.
// Make sure paths match the React Router setup in App.jsx.
// ==========================================
export const NAV_ITEMS = [
  { path: "/", label: "Home" },
  { path: "/projects", label: "Projects" },
  { path: "/contact", label: "Contact" },
];
