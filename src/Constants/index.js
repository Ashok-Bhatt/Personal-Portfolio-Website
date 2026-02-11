const navigation = [
  {
    text: "Home",
    link: "#home",
    id: "home"
  },
  {
    text: "About",
    link: "#about",
    id: "about"
  },
  {
    text: "Skills",
    link: "#skills",
    id: "skills"
  },
  {
    text: "Coding Profiles",
    link: "#coding_profiles",
    id: "coding_profiles"
  },
  {
    text: "Projects",
    link: "#projects",
    id: "projects"
  },
  {
    text: "Certificates",
    link: "#certificates",
    id: "certificates"
  },
  {
    text: "Achievements",
    link: "#achievements",
    id: "achievements"
  },
  {
    text: "Contact",
    link: "#contact",
    id: "contact"
  },
]

const projects = [
  {
    projectName: "Codefolio",
    projectImage: "/Images/Projects/Codefolio.png",
    description: "A centralized platform for tracking and visualizing progress from multiple coding profiles.",
    liveLink: "https://code-folio-insights.vercel.app/",
    repoLink: "https://github.com/VRAJESH-31/CodeFolio-Insights",
    technologies: ["React", "Tailwind CSS", "Zustand", "Bcrypt", "JWT", "Cloudinary", "Express", "MongoDB", "Recharts", "Redis", "Passport.js",],
    domain: ["Website"],
  },
  {
    projectName: "Scrape Spidey",
    projectImage: "/Images/Projects/Scrape-Spidey.png",
    description: "A public api that can fetch the user profile data from different coding platforms like GFG, Interviewbit, Hackerrank and Codechef",
    liveLink: "https://scrape-spidey-documentation.vercel.app/",
    repoLink: "https://github.com/Ashok-Bhatt/ScrapeSpidey",
    technologies: ["React", "Tailwind CSS", "Recharts", "Bcrypt", "JWT", "Express", "MongoDB", "Puppeteer"],
    domain: ["Public API"],
  },
  {
    projectName: "Flavour Fusion",
    projectImage: "/Images/Projects/Flavor-Fusion.jpg",
    description: "A feature-rich recipe app providing an extensive collection of easy-to-follow and diverse recipes for every taste.",
    liveLink: "",
    repoLink: "https://github.com/Ashok-Bhatt/Flavour-Fusion---Recipe-App",
    technologies: ["Android Studio", "Java", "XML", "Firebase"],
    domain: ["Mobile App"],
  },
  {
    projectName: "Kaun Banega Crorepati",
    projectImage: "/Images/Projects/KBC.png",
    description: "An interactive quiz game inspired by Kaun Banega Crorepati, testing knowledge with progressive difficulty levels",
    liveLink: "https://ashok-bhatt.github.io/Kaun-Banega-Crorepati/",
    repoLink: "https://github.com/Ashok-Bhatt/Kaun-Banega-Crorepati",
    technologies: ["HTML", "CSS", "Javascript", "Trivia API"],
    domain: ["Website", "Game"],
  },
  {
    projectName: "Smart Attendance System",
    projectImage: "/Images/Projects/Smart-Attendance-System.webp",
    description: "A web prototype for an automated system to track attendance of students",
    liveLink: "https://smart-attendance-system-mocha.vercel.app/",
    repoLink: "https://github.com/Ashok-Bhatt/Smart-Attendance-System",
    technologies: ["React", "Tailwind CSS", "Face API", "React Webcam", "Flask", "Flask Pymongo", "Hugging Face", "Gradio", "Pillow", "Numpy", "Pandas", "Matplotlib", "Tensorflow"],
    domain: ["Website", "Machine Learning"],
  },
  {
    projectName: "Draw Perfect Circle",
    projectImage: "/Images/Projects/Draw-Perfect-Circle.png",
    description: "A fun game that challenges you to draw the perfect freehand circle",
    liveLink: "https://perfect-circle-two.vercel.app/",
    repoLink: "https://github.com/Ashok-Bhatt/PerfectCircle",
    technologies: ["React", "CSS"],
    domain: ["Website", "Game"],
  },
  {
    projectName: "Listify",
    projectImage: "/Images/Projects/Listify.png",
    description: "A list managing web app built to help users create and manage lists",
    liveLink: "",
    repoLink: "https://github.com/Ashok-Bhatt/Listify",
    technologies: ["React", "Tailwind CSS", "Firebase"],
    domain: ["Website"],
  },
  {
    projectName: "Path Finding Visualizer",
    projectImage: "/Images/Projects/Path-Finding-Visualizer.png",
    description: "A visualizing tool built to visualize a set of path finding algorithms.",
    liveLink: "",
    repoLink: "https://github.com/Ashok-Bhatt/Path-Finding-Visualizer",
    technologies: ["Python", "Tkinter"],
    domain: ["Desktop App"],
  },
  {
    projectName: "Collab Horizon",
    projectImage: "/Images/Projects/Collab-Horizon.png",
    description: "A team project management system where teammates can collaborate on a project",
    liveLink: "",
    repoLink: "https://github.com/Ashok-Bhatt/Collab-Horizon",
    technologies: ["React", "Tailwind CSS", "Bcrypt", "JWT", "Cloudinary", "Express", "MongoDB"],
    domain: ["Website"],
  },
  {
    projectName: "TechSagers",
    projectImage: "/Images/Projects/TechSagers.png",
    description: "A blog website where user can read, create and manage blogs",
    liveLink: "",
    repoLink: "https://github.com/Ashok-Bhatt/TechSagers---Blog-Website",
    technologies: ["React", "Tailwind CSS", "Redux", "TinyMCE Editor", "Appwrite"],
    domain: ["Website"],
  },
  {
    projectName: "Pong Game",
    projectImage: "/Images/Projects/Pong-Game.png",
    description: "A classic two-player arcade game where players aiming to score points by hitting the ball to past the opponent using paddles.",
    liveLink: "",
    repoLink: "https://github.com/Ashok-Bhatt/Pong-Game",
    technologies: ["Python", "Turtle"],
    domain: ["Desktop App", "Game"],
  },
  {
    projectName: "Query Forge",
    projectImage: "/Images/Projects/Query-Forge.png",
    description: "A web service in which user can create chatbot and qna system and then integrate it to other websites using API Keys",
    liveLink: "https://query-forge-five.vercel.app/",
    repoLink: "https://github.com/Ashok-Bhatt/QueryForge",
    technologies: ["React", "Tailwind CSS", "Gemini Flash 2.5", "Puppeteer", "Browserless API", "Express", "JWT", "Bcrypt"],
    domain: ["Website", "Public API"],
  },
]

const skills = {
  "Programming Languages": [
    { name: "Python", logoSrc: "/Images/Skills/python_logo.png" },
    { name: "C", logoSrc: "/Images/Skills/c_logo.png" },
    { name: "C++", logoSrc: "/Images/Skills/cpp_logo.png" },
    { name: "Java", logoSrc: "/Images/Skills/java_logo.png" },
    { name: "Javascript", logoSrc: "/Images/Skills/javascript_logo.png" },
  ],
  "Frontend": [
    { name: "HTML", logoSrc: "/Images/Skills/html_logo.png" },
    { name: "CSS", logoSrc: "/Images/Skills/css_logo.png" },
    { name: "Bootstrap", logoSrc: "/Images/Skills/bootstrap_logo.png" },
    { name: "Tailwind", logoSrc: "/Images/Skills/tailwind_logo.png" },
    { name: "React", logoSrc: "/Images/Skills/react_logo.png" },
    { name: "Zustand", logoSrc: "/Images/Skills/zustand_logo.jpg" },
    { name: "Tanstack Query", logoSrc: "/Images/Skills/tanstack_query_logo.png" },
  ],
  "Backend and Databases": [
    { name: "Node", logoSrc: "/Images/Skills/node_logo.png" },
    { name: "Express", logoSrc: "/Images/Skills/express_logo.png" },
    { name: "MongoDB", logoSrc: "/Images/Skills/mongodb_logo.png" },
    { name: "Firebase", logoSrc: "/Images/Skills/firebase_logo.png" },
    { name: "Flask", logoSrc: "/Images/Skills/flask_logo.png" },
    { name: "JWT", logoSrc: "/Images/Skills/jwt_logo.png" },
    { name: "Redis", logoSrc: "/Images/Skills/redis_logo.png" },
    { name: "MySQL", logoSrc: "/Images/Skills/mysql.png" },
    { name: "Passport", logoSrc: "/Images/Skills/passport_logo.png" },
  ],
  "Tools": [
    { name: "Git", logoSrc: "/Images/Skills/git_logo.png" },
    { name: "Github", logoSrc: "/Images/Skills/github_logo.png" },
    { name: "Postman", logoSrc: "/Images/Skills/postman_logo.png" },
    { name: "VS Code", logoSrc: "/Images/Skills/vscode_logo.png" },
    { name: "Android Studio", logoSrc: "/Images/Skills/android_logo.png" },
    { name: "Replit", logoSrc: "/Images/Skills/replit_logo.png" },
    { name: "Vercel", logoSrc: "/Images/Skills/vercel_logo.png" },
    { name: "Render", logoSrc: "/Images/Skills/render_logo.png" },
    { name: "Cursor", logoSrc: "/Images/Skills/cursor_logo.jpg" },
    { name: "Chatgpt", logoSrc: "/Images/Skills/chatgpt_logo.png" },
    { name: "Gemini", logoSrc: "/Images/Skills/gemini_logo.png" },
    { name: "Vite", logoSrc: "/Images/Skills/vite_logo.jpg" },
    { name: "Antigravity", logoSrc: "/Images/Skills/antigravity_logo.jpg" }
  ],
};

const certificates = [
  {
    name: "Hackerrank Problem Solving (Intermediate)",
    preview: "/Images/Certificates/hackerrank_problem_solving_intermediate.png",
    link: "https://www.hackerrank.com/certificates/7e8942b3619c",
    description: "Demonstrates proficiency in core Data Structures like HashMaps, Stacks, and Queues, along with the ability to design and implement optimal algorithmic solutions.",
  },
  {
    name: "Deloitte Job Simulation",
    preview: "Images/Certificates/deloitte_job_simulation.png",
    link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/9PBTqmSxAf6zZTseP/udmxiyHeqYQLkTPvf_9PBTqmSxAf6zZTseP_53bYQLnZQNdzDFYvp_1752669531060_completion_certificate.pdf",
    description: "Completed Deloitte Australia Technology Job Simulation on Forage, enhancing software development skills.",
  },
  {
    name: "Coding Ninjas Slayground",
    preview: "Images/Certificates/coding_ninjas_slayground_level_3.png",
    link: "https://drive.google.com/file/d/11jYOKoNOKKKNwPGyBFEKfGhuhZkrgQub/view?usp=drive_link",
    description: "Participation certificate for Coding Ninjas' Slayground Challenge — a 21-day coding marathon focused on consistency and skill-building.",
  },
  {
    name: "Meta Hackercup 2025 Round I Qualifier",
    preview: "Images/Certificates/meta_hackercup_2025_round_1_qualifier.png",
    link: "https://www.facebook.com/codingcompetitions/hacker-cup/2025/certificate/1959397154628580",
    description: "Qualified the round 1 of Meta hackercup 2025 with 5852nd rank demonstrating the strong foundation of problem-solving skills.",
  }
]

const achievements = [
  {
    title: "Winner - Code Clash, Illuminati 2025",
    description: "Secured 1st place in Code Clash at Illuminati 2025, the annual tech fest of ITM (SLS) Baroda University.",
    date: new Date(2025, 1),
    logo: "/Images/1st_place_award.png",
  },
  {
    title: "GFG Institute Rank 1",
    description: "Ranked 1st on the GeeksForGeeks Institute Leaderboard of ITM (SLS) Baroda University with 1400+ coding score.",
    date: new Date(2025, 1),
    logo: "/Images/1st_place_award.png",
  },
  {
    title: "GATE CS/IT 2025 Qualified - AIR 8129",
    description: "Qualified GATE CS/IT 2025 with All India Rank of 8129 out of 1.7 lakh candidates (Top 5%).",
    date: new Date(2025, 2),
    logo: "/Images/award.png",
  },
  {
    title: "LeetCode Knight",
    description: "Achieved Leetcode Knight rating by securing place in top 6% of Leetcode users with max rating of 1865.",
    date: new Date(2025, 11),
    logo: "/Images/knight.png",
  },
];

const GFG_DATA_REFRESH_INTERVAL = 60 * 1000;
const CODE360_DATA_REFRESH_INTERVAL = 60 * 1000;
const LEETCODE_DATA_REFRESH_INTERVAL = 60 * 1000;
const GITHUB_DATA_REFRESH_INTERVAL = 60 * 1000;

export {
  navigation,
  projects,
  skills,
  certificates,
  achievements,
  GFG_DATA_REFRESH_INTERVAL,
  CODE360_DATA_REFRESH_INTERVAL,
  LEETCODE_DATA_REFRESH_INTERVAL,
  GITHUB_DATA_REFRESH_INTERVAL
};