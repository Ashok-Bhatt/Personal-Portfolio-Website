const navigation = [
    {
        text : "Home",
        link: "#home",
        id: "home"
    },
    {
        text : "About",
        link: "#about",
        id: "about"
    },
    {
        text : "Skills",
        link: "#skills",
        id: "skills"
    },
    {
        text : "Coding Profiles",
        link: "#coding_profiles",
        id: "coding_profiles"
    },
    {
        text : "Projects",
        link: "#projects",
        id: "projects"
    },
    {
       text : "Certificates",
       link: "#certificates",
       id: "certificates"
    },
    {
        text : "Achievements",
        link: "#achievements",
        id: "achievements"
    },
    {
        text : "Contact",
        link: "#contact",
        id: "contact"
    },
]

const projects = [
    {
      projectName : "Flavour Fusion",
      projectImage: "https://res.cloudinary.com/dvjkkh0tf/image/upload/v1750856554/IMG_20250625_183147_qto7fl.jpg",
      description : "A feature-rich recipe app providing an extensive collection of easy-to-follow and diverse recipes for every taste.",
      liveLink : "",
      repoLink : "https://github.com/Ashok-Bhatt/Flavour-Fusion---Recipe-App",
      technologies : ["Android Studio", "Java", "XML", "Firebase"],
      domain : ["Mobile App"],
    },
    {
      projectName : "Kaun Banega Crorepati",
      projectImage: "https://res.cloudinary.com/dvjkkh0tf/image/upload/v1749817985/Screenshot_2025-06-13_174237_szh9ff.png",
      description : "An interactive quiz game inspired by Kaun Banega Crorepati, testing knowledge with progressive difficulty levels",
      liveLink : "https://ashok-bhatt.github.io/Kaun-Banega-Crorepati/",
      repoLink : "https://github.com/Ashok-Bhatt/Kaun-Banega-Crorepati",
      technologies : ["HTML", "CSS", "Javascript", "Trivia API"],
      domain : ["Website", "Game"],
    },
    {
      projectName : "Listify",
      projectImage: "https://res.cloudinary.com/dvjkkh0tf/image/upload/v1750855886/Screenshot_2025-06-25_182030_wgbuup.png",
      description : "A list managing web app built to help users create and manage lists",
      liveLink : "",
      repoLink : "https://github.com/Ashok-Bhatt/Listify",
      technologies : ["React", "Tailwind CSS", "Firebase"],
      domain : ["Website"],
    },
    {
      projectName : "Path Finding Visualizer",
      projectImage: "https://res.cloudinary.com/dvjkkh0tf/image/upload/v1748866201/path_finding_visualizer_a_star_algo_jqzlgj.png",
      description : "A visualizing tool built to visualize a set of path finding algorithms.",
      liveLink : "",
      repoLink : "https://github.com/Ashok-Bhatt/Path-Finding-Visualizer",
      technologies : ["Python", "Tkinter"],
      domain : ["Desktop App"],
    },
    {
      projectName : "Collab Horizon",
      projectImage: "https://res.cloudinary.com/dvjkkh0tf/image/upload/v1751033790/Screenshot_2025-06-27_194322_qywfl0.png",
      description : "A team project management system where teammates can collaborate on a project",
      liveLink : "",
      repoLink : "https://github.com/Ashok-Bhatt/Collab-Horizon",
      technologies : ["React", "Tailwind CSS", "Bcrypt", "JWT", "Cloudinary", "Express", "MongoDB"],
      domain : ["Website"],
    },
    {
      projectName : "TechSagers",
      projectImage: "https://res.cloudinary.com/dvjkkh0tf/image/upload/v1751034682/Screenshot_2025-06-27_200009_njhu1w.png",
      description : "A blog website where user can read, create and manage blogs",
      liveLink : "",
      repoLink : "https://github.com/Ashok-Bhatt/TechSagers---Blog-Website",
      technologies: ["React", "Tailwind CSS", "Redux", "TinyMCE Editor", "Appwrite"],
      domain : ["Website"],
    },
    {
      projectName : "Smart Attendance System",
      projectImage: "https://res.cloudinary.com/dvjkkh0tf/image/upload/v1751092810/Screenshot_2025-06-28_120006_pwzyww.webp",
      description : "A web prototype for an automated system to track attendance of students",
      liveLink : "https://smart-attendance-system-mocha.vercel.app/",
      repoLink : "https://github.com/Ashok-Bhatt/Smart-Attendance-System",
      technologies: ["React", "Tailwind CSS", "Face API", "React Webcam", "Flask", "Flask Pymongo", "Hugging Face", "Gradio", "Pillow", "Numpy", "Pandas", "Matplotlib", "Tensorflow"],
      domain : ["Website", "Machine Learning"],
    },
    {
      projectName : "Draw Perfect Circle",
      projectImage: "https://res.cloudinary.com/dvjkkh0tf/image/upload/v1751169742/Screenshot_2025-06-28_221421_bl1ykf.png",
      description : "A fun game that challenges you to draw the perfect freehand circle",
      liveLink : "https://perfect-circle-two.vercel.app/",
      repoLink : "https://github.com/Ashok-Bhatt/PerfectCircle",
      technologies: ["React", "CSS"],
      domain : ["Website", "Game"],
    },
    {
      projectName : "Pong Game",
      projectImage : "https://res.cloudinary.com/dvjkkh0tf/image/upload/v1751080084/Screenshot_2025-06-28_083553_vugtsh.png",
      description : "A classic two-player arcade game where players aiming to score points by hitting the ball to past the opponent using paddles.",
      liveLink : "",
      repoLink :"https://github.com/Ashok-Bhatt/Pong-Game",
      technologies: ["Python", "Turtle"],
      domain : ["Desktop App", "Game"],
    },
    {
      projectName : "Scrape Spidey",
      projectImage : "https://res.cloudinary.com/dvjkkh0tf/image/upload/v1758253366/images_vhz0bz.png",
      description : "A public api that can fetch the user profile data from different coding platforms like GFG, Interviewbit, Hackerrank and Codechef",
      liveLink : "https://scrape-spidey-documentation.vercel.app/",
      repoLink :"https://github.com/Ashok-Bhatt/ScrapeSpidey",
      technologies: ["React", "Tailwind CSS", "Recharts", "Bcrypt", "JWT", "Express", "MongoDB", "Puppeteer", "Browserless API"],
      domain : ["Public API"],
    },
    {
      projectName : "Query Forge",
      projectImage : "https://res.cloudinary.com/dvjkkh0tf/image/upload/v1758264264/Screenshot_2025-09-19_120948_y9otxv.png",
      description : "A web service in which user can create chatbot and qna system and then integrate it to other websites using API Keys",
      liveLink : "https://query-forge-five.vercel.app/",
      repoLink :"https://github.com/Ashok-Bhatt/QueryForge",
      technologies: ["React", "Tailwind CSS", "Gemini Flash 2.5", "Puppeteer", "Browserless API", "Express", "JWT", "Bcrypt"],
      domain : ["Website", "Public API"],
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
    ],
    "Backend and Databases": [
        { name: "Node", logoSrc: "/Images/Skills/node_logo.png" },
        { name: "Express", logoSrc: "/Images/Skills/express_logo.png" },
        { name: "MongoDB", logoSrc: "/Images/Skills/mongodb_logo.png" },
        { name: "Firebase", logoSrc: "/Images/Skills/firebase_logo.png" },
        { name: "Flask", logoSrc: "/Images/Skills/flask_logo.png" },
        { name: "JWT", logoSrc: "/Images/Skills/jwt_logo.png" },
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
    ],
};

const certificates = [
  {
    name : "Hackerrank Problem Solving (Intermediate)",
    preview : "/Images/Certificates/hackerrank_problem_solving_intermediate.png",
    link : "https://www.hackerrank.com/certificates/7e8942b3619c",
    description: "Demonstrates proficiency in core Data Structures like HashMaps, Stacks, and Queues, along with the ability to design and implement optimal algorithmic solutions.",
  },
  {
    name : "Deloitte Job Simulation",
    preview : "Images/Certificates/deloitte_job_simulation.png",
    link : "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/9PBTqmSxAf6zZTseP/udmxiyHeqYQLkTPvf_9PBTqmSxAf6zZTseP_53bYQLnZQNdzDFYvp_1752669531060_completion_certificate.pdf",
    description: "Completed Deloitte Australia Technology Job Simulation on Forage, enhancing software development skills.",
  },
  {
    name : "Coding Ninjas Slayground",
    preview : "Images/Certificates/coding_ninjas_slayground_level_3.png",
    link : "https://drive.google.com/file/d/11jYOKoNOKKKNwPGyBFEKfGhuhZkrgQub/view?usp=drive_link",
    description: "Participation certificate for Coding Ninjas' Slayground Challenge — a 21-day coding marathon focused on consistency and skill-building.",
  },
]

const achievements = [
  {
    achievementTitle: "1000+ DSA Problems",
    achievementDescription: "Solved 1000+ DSA Problems Combined on Leetcode and GFG",
    achievementDate: new Date(2025, 6)
  },
  {
    achievementTitle: "Winner - Code Clash, Illuminati 2025",
    achievementDescription: "Secured 1st place in Code Clash at Illuminati 2025, the annual tech fest of ITM (SLS) Baroda University.",
    achievementDate: new Date(2025, 2)
  },
  {
    achievementTitle: "GFG Institute Rank 1",
    achievementDescription: "Ranked 1st on the GeeksForGeeks Institute Leaderboard of ITM (SLS) Baroda University with 1400+ coding score.",
    achievementDate: new Date(2025, 2)
  },
  {
    achievementTitle: "GATE CS/IT 2025 Qualified - AIR 8129",
    achievementDescription: "Qualified GATE CS/IT 2025 with All India Rank of 8129 out of 1.7 lakh candidates (Top 5%).",
    achievementDate: new Date(2025, 3)
  },
  {
    achievementTitle: "Global Rank 1805 - LeetCode Weekly 420",
    achievementDescription: "Achieved Global Rank 1805 out of 32563 participants in LeetCode Weekly Contest 420. Solved 3/4 problems within 50 minutes",
    achievementDate: new Date(2024, 10)
  },
  {
    achievementTitle: "Global Rank 1698 - LeetCode Biweekly 161",
    achievementDescription: "Achieved Global Rank 1698 out of 31670 participants in LeetCode BiWeekly Contest 161. Solved 3/4 problems within 80 minutes",
    achievementDate: new Date(2026, 7)
  },
];

const gfgContestData = [
  {
      "attended": true,
      "rating": 1590,
      "ranking": 1329,
      "trendDirection": "UP",
      "problemsSolved": 1,
      "totalProblems": 4,
      "finishTimeInSeconds": 5632,
      "contest": {
          "title": "Weekly Contest 154",
          "startTime": 1706409000
      }
  },
  {
      "attended": true,
      "rating": 1705,
      "ranking": 504,
      "trendDirection": "UP",
      "problemsSolved": 1,
      "totalProblems": 4,
      "finishTimeInSeconds": 5632,
      "contest": {
          "title": "Weekly Contest 192",
          "startTime": 1706409000
      }
  },
];

const code360Data = {
    "Full Name": "Ashok Bhatt",
    "Profile Name": "AshokBhatt",
    "Profile Image": "https://media.naukri.com/media/jphotov1/l244%253ALukcMTq83AocGLm2VwgEbp0ywH0oask%252Bg1t73KQq7LoDQTA8j6g%252BGSwgrq01",
    "Current Streak": "1 day",
    "Longest Streak": "20 days",
    "Total Exp": 17346,
    "Profile Views": 29,
    "Problems": {
        "Easy": {
            "Total": 1229,
            "Solved": 156,
        },
        "Moderate": {
            "Total": 1422,
            "Solved": 31,
        },
        "Hard": {
            "Total": 408,
            "Solved": 6,
        },
        "Ninja": {
            "Total": 41,
            "Solved": 0,
        },
        "All": {
            "Total": 3100,
            "Solved": 193,
        }
    },
    "Contests Attended": 5,
    "Current Rating": 2301,
    "Contest Ranking": "Master",
    "Contest Top Percentage": 7,
    "Contest Badge": "https://files.codingninjas.in/active_-badges_-contest-rating-5-1717001724.png",
    "Contests Data": [
        { "rating": 1687, "ranking": 832 },
        { "rating": 1854, "ranking": 127 },
        { "rating": 2010, "ranking": 310 },
        { "rating": 2158, "ranking": 315 },
        { "rating": 2301, "ranking": 962 }
    ],
    "Badges": [
        {
            "title": "Two Pointers",
            "image": "https://files.codingninjas.in/ronin-30759.svg",
            "type": "Achiever"
        },
        {
            "title": "Tries",
            "image": "https://files.codingninjas.in/ronin-30759.svg",
            "type": "Achiever"
        },
        {
            "title": "Strings",
            "image": "https://files.codingninjas.in/ronin-30759.svg",
            "type": "Achiever"
        },
        {
            "title": "Stacks & Queues",
            "image": "https://files.codingninjas.in/ronin-30759.svg",
            "type": "Achiever"
        },
        {
            "title": "Sorting",
            "image": "https://files.codingninjas.in/ronin-30759.svg",
            "type": "Achiever"
        },
        {
            "title": "Recursion",
            "image": "https://files.codingninjas.in/ronin-30759.svg",
            "type": "Achiever"
        },
        {
            "title": "Math",
            "image": "https://files.codingninjas.in/ronin-30759.svg",
            "type": "Achiever"
        },
        {
            "title": "Linked List",
            "image": "https://files.codingninjas.in/ronin-30759.svg",
            "type": "Achiever"
        },
        {
            "title": "Hash Table",
            "image": "https://files.codingninjas.in/ronin-30759.svg",
            "type": "Achiever"
        },
        {
            "title": "Greedy",
            "image": "https://files.codingninjas.in/ronin-30759.svg",
            "type": "Achiever"
        },
        {
            "title": "Binary Trees",
            "image": "https://files.codingninjas.in/ronin-30759.svg",
            "type": "Achiever"
        },
        {
            "title": "Binary Search",
            "image": "https://files.codingninjas.in/ronin-30759.svg",
            "type": "Achiever"
        },
        {
            "title": "Backtracking",
            "image": "https://files.codingninjas.in/ronin-30759.svg",
            "type": "Achiever"
        },
        {
            "title": "Arrays",
            "image": "https://files.codingninjas.in/ronin-30759.svg",
            "type": "Achiever"
        },
        {
            "title": "Matrices",
            "image": "https://files.codingninjas.in/ronin-30759.svg",
            "type": "Achiever"
        },
        {
            "title": "Hash Table",
            "image": "https://files.codingninjas.in/samurai-30760.svg",
            "type": "Specialist"
        },
        {
            "title": "Backtracking",
            "image": "https://files.codingninjas.in/samurai-30760.svg",
            "type": "Specialist"
        },
        {
            "title": "Arrays",
            "image": "https://files.codingninjas.in/samurai-30760.svg",
            "type": "Specialist"
        },
        {
          "title": "Basics of C++",
          "image": "https://files.codingninjas.in/gp-cat-1-23406.svg",
          "type": "Achiever"
        },
        {
          "title": "Pointers",
          "image": "https://files.codingninjas.in/gp-cat-1-23406.svg",
          "type": "Achiever"
        },
        {
          "title": "Pointers",
          "image": "https://files.codingninjas.in/gp-cat-2-23407.svg",
          "type": "Specialist"
        },
        {
          "title": "Basics of C++",
          "image": "https://files.codingninjas.in/gp-cat-3-23408.svg",
          "type": "Master"
        },
        {
          "title": "Pointers",
          "image": "https://files.codingninjas.in/gp-cat-3-23408.svg",
          "type": "Master"
        },
    ]
};

const gfgData = {
  "Profile Name" : "ashokbhacjou",
  "Full Name" : "Ashok Bhatt",
  "Profile Image" : "https://www.geeksforgeeks.org/_next/image/?url=https%3A%2F%2Fmedia.geeksforgeeks.org%2Fauth%2Fprofile%2F87f1gz2lt16vki1r4fe7&w=256&q=75",
  "Institution Rank" : 1,
  "Coding Score" : 1432,
  "Basic Problems Solved" : 96,
  "Easy Problems Solved" : 219,
  "Medium Problems Solved" : 217,
  "Hard Problems Solved" : 21,
  "Total Basic Problems" : 769,
  "Total Easy Problems" : 1383,
  "Total Medium Problems" : 1141,
  "Total Hard Problems" : 211,
  // Temporary static data setup for gfg contests 
  ["Contests Attended"] : 2,
  ["Contest Rating"] : 1705,
  ["Contest Ranking"] : 0,
  ["Total Participants"] : 0,
  ["Contest Top Percentage"] : 15,
  ["Contest Level"] : 3,
  ["Contest Badges"] : [],
  ["Contests Data"] : gfgContestData,
  ["Global Rank"] : 5976,
  ["default"] : true,
}

const leetcodeContestData = [
        {
            "attended": true,
            "rating": 1589.055,
            "ranking": 4525,
            "trendDirection": "UP",
            "problemsSolved": 3,
            "totalProblems": 4,
            "finishTimeInSeconds": 5632,
            "contest": {
                "title": "Weekly Contest 382",
                "startTime": 1706409000
            }
        },
        {
            "attended": true,
            "rating": 1577.974,
            "ranking": 10254,
            "trendDirection": "DOWN",
            "problemsSolved": 1,
            "totalProblems": 4,
            "finishTimeInSeconds": 263,
            "contest": {
                "title": "Weekly Contest 383",
                "startTime": 1707013800
            }
        },
        {
            "attended": true,
            "rating": 1580.677,
            "ranking": 7889,
            "trendDirection": "UP",
            "problemsSolved": 2,
            "totalProblems": 4,
            "finishTimeInSeconds": 2076,
            "contest": {
                "title": "Weekly Contest 384",
                "startTime": 1707618600
            }
        },
        {
            "attended": true,
            "rating": 1545.158,
            "ranking": 15236,
            "trendDirection": "DOWN",
            "problemsSolved": 1,
            "totalProblems": 4,
            "finishTimeInSeconds": 2850,
            "contest": {
                "title": "Weekly Contest 385",
                "startTime": 1708223400
            }
        },
        {
            "attended": true,
            "rating": 1535.208,
            "ranking": 12334,
            "trendDirection": "DOWN",
            "problemsSolved": 1,
            "totalProblems": 4,
            "finishTimeInSeconds": 419,
            "contest": {
                "title": "Weekly Contest 386",
                "startTime": 1708828200
            }
        },
        {
            "attended": true,
            "rating": 1537.604,
            "ranking": 12198,
            "trendDirection": "UP",
            "problemsSolved": 2,
            "totalProblems": 4,
            "finishTimeInSeconds": 1707,
            "contest": {
                "title": "Weekly Contest 388",
                "startTime": 1710037800
            }
        },
        {
            "attended": true,
            "rating": 1561.742,
            "ranking": 7537,
            "trendDirection": "UP",
            "problemsSolved": 2,
            "totalProblems": 4,
            "finishTimeInSeconds": 1936,
            "contest": {
                "title": "Weekly Contest 390",
                "startTime": 1711247400
            }
        },
        {
            "attended": true,
            "rating": 1576.695,
            "ranking": 8318,
            "trendDirection": "UP",
            "problemsSolved": 2,
            "totalProblems": 4,
            "finishTimeInSeconds": 1653,
            "contest": {
                "title": "Weekly Contest 397",
                "startTime": 1715481000
            }
        },
        {
            "attended": true,
            "rating": 1580.907,
            "ranking": 11903,
            "trendDirection": "UP",
            "problemsSolved": 2,
            "totalProblems": 4,
            "finishTimeInSeconds": 2052,
            "contest": {
                "title": "Weekly Contest 401",
                "startTime": 1717900200
            }
        },
        {
            "attended": true,
            "rating": 1598.004,
            "ranking": 9124,
            "trendDirection": "UP",
            "problemsSolved": 2,
            "totalProblems": 4,
            "finishTimeInSeconds": 979,
            "contest": {
                "title": "Weekly Contest 402",
                "startTime": 1718505000
            }
        },
        {
            "attended": true,
            "rating": 1583.745,
            "ranking": 17312,
            "trendDirection": "DOWN",
            "problemsSolved": 2,
            "totalProblems": 4,
            "finishTimeInSeconds": 2881,
            "contest": {
                "title": "Weekly Contest 403",
                "startTime": 1719109800
            }
        },
        {
            "attended": true,
            "rating": 1584.719,
            "ranking": 10959,
            "trendDirection": "UP",
            "problemsSolved": 1,
            "totalProblems": 4,
            "finishTimeInSeconds": 638,
            "contest": {
                "title": "Weekly Contest 404",
                "startTime": 1719714600
            }
        },
        {
            "attended": true,
            "rating": 1588.755,
            "ranking": 12240,
            "trendDirection": "UP",
            "problemsSolved": 2,
            "totalProblems": 4,
            "finishTimeInSeconds": 2927,
            "contest": {
                "title": "Biweekly Contest 134",
                "startTime": 1720276200
            }
        },
        {
            "attended": true,
            "rating": 1568.104,
            "ranking": 17004,
            "trendDirection": "DOWN",
            "problemsSolved": 1,
            "totalProblems": 4,
            "finishTimeInSeconds": 703,
            "contest": {
                "title": "Biweekly Contest 135",
                "startTime": 1721485800
            }
        },
        {
            "attended": true,
            "rating": 1603.998,
            "ranking": 5182,
            "trendDirection": "UP",
            "problemsSolved": 3,
            "totalProblems": 4,
            "finishTimeInSeconds": 2087,
            "contest": {
                "title": "Weekly Contest 407",
                "startTime": 1721529000
            }
        },
        {
            "attended": true,
            "rating": 1588.87,
            "ranking": 16297,
            "trendDirection": "DOWN",
            "problemsSolved": 1,
            "totalProblems": 4,
            "finishTimeInSeconds": 198,
            "contest": {
                "title": "Weekly Contest 408",
                "startTime": 1722133800
            }
        },
        {
            "attended": true,
            "rating": 1580.095,
            "ranking": 14002,
            "trendDirection": "DOWN",
            "problemsSolved": 1,
            "totalProblems": 4,
            "finishTimeInSeconds": 276,
            "contest": {
                "title": "Weekly Contest 410",
                "startTime": 1723343400
            }
        },
        {
            "attended": true,
            "rating": 1639.061,
            "ranking": 2529,
            "trendDirection": "UP",
            "problemsSolved": 2,
            "totalProblems": 4,
            "finishTimeInSeconds": 1103,
            "contest": {
                "title": "Biweekly Contest 137",
                "startTime": 1723905000
            }
        },
        {
            "attended": true,
            "rating": 1636.702,
            "ranking": 10075,
            "trendDirection": "DOWN",
            "problemsSolved": 2,
            "totalProblems": 4,
            "finishTimeInSeconds": 3230,
            "contest": {
                "title": "Weekly Contest 411",
                "startTime": 1723948200
            }
        },
        {
            "attended": true,
            "rating": 1671.673,
            "ranking": 4068,
            "trendDirection": "UP",
            "problemsSolved": 2,
            "totalProblems": 4,
            "finishTimeInSeconds": 2340,
            "contest": {
                "title": "Weekly Contest 412",
                "startTime": 1724553000
            }
        },
        {
            "attended": true,
            "rating": 1670.663,
            "ranking": 10078,
            "trendDirection": "DOWN",
            "problemsSolved": 2,
            "totalProblems": 4,
            "finishTimeInSeconds": 1265,
            "contest": {
                "title": "Biweekly Contest 138",
                "startTime": 1725114600
            }
        },
        {
            "attended": true,
            "rating": 1642.158,
            "ranking": 17652,
            "trendDirection": "DOWN",
            "problemsSolved": 1,
            "totalProblems": 4,
            "finishTimeInSeconds": 415,
            "contest": {
                "title": "Weekly Contest 413",
                "startTime": 1725157800
            }
        },
        {
            "attended": true,
            "rating": 1624.786,
            "ranking": 15150,
            "trendDirection": "DOWN",
            "problemsSolved": 1,
            "totalProblems": 4,
            "finishTimeInSeconds": 789,
            "contest": {
                "title": "Weekly Contest 414",
                "startTime": 1725762600
            }
        },
        {
            "attended": true,
            "rating": 1600.104,
            "ranking": 18599,
            "trendDirection": "DOWN",
            "problemsSolved": 1,
            "totalProblems": 4,
            "finishTimeInSeconds": 755,
            "contest": {
                "title": "Biweekly Contest 139",
                "startTime": 1726324200
            }
        },
        {
            "attended": true,
            "rating": 1588.898,
            "ranking": 14498,
            "trendDirection": "DOWN",
            "problemsSolved": 1,
            "totalProblems": 4,
            "finishTimeInSeconds": 274,
            "contest": {
                "title": "Weekly Contest 415",
                "startTime": 1726367400
            }
        },
        {
            "attended": true,
            "rating": 1603.036,
            "ranking": 8427,
            "trendDirection": "UP",
            "problemsSolved": 2,
            "totalProblems": 4,
            "finishTimeInSeconds": 4115,
            "contest": {
                "title": "Weekly Contest 416",
                "startTime": 1726972200
            }
        },
        {
            "attended": true,
            "rating": 1640.306,
            "ranking": 4325,
            "trendDirection": "UP",
            "problemsSolved": 2,
            "totalProblems": 4,
            "finishTimeInSeconds": 1053,
            "contest": {
                "title": "Biweekly Contest 140",
                "startTime": 1727533800
            }
        },
        {
            "attended": true,
            "rating": 1643.577,
            "ranking": 9026,
            "trendDirection": "UP",
            "problemsSolved": 2,
            "totalProblems": 4,
            "finishTimeInSeconds": 3798,
            "contest": {
                "title": "Weekly Contest 417",
                "startTime": 1727577000
            }
        },
        {
            "attended": true,
            "rating": 1629.303,
            "ranking": 12464,
            "trendDirection": "DOWN",
            "problemsSolved": 1,
            "totalProblems": 4,
            "finishTimeInSeconds": 1667,
            "contest": {
                "title": "Weekly Contest 418",
                "startTime": 1728181800
            }
        },
        {
            "attended": true,
            "rating": 1656.022,
            "ranking": 4339,
            "trendDirection": "UP",
            "problemsSolved": 2,
            "totalProblems": 4,
            "finishTimeInSeconds": 2249,
            "contest": {
                "title": "Biweekly Contest 141",
                "startTime": 1728743400
            }
        },
        {
            "attended": true,
            "rating": 1654.936,
            "ranking": 7898,
            "trendDirection": "DOWN",
            "problemsSolved": 2,
            "totalProblems": 4,
            "finishTimeInSeconds": 4215,
            "contest": {
                "title": "Weekly Contest 419",
                "startTime": 1728786600
            }
        },
        {
            "attended": true,
            "rating": 1712.707,
            "ranking": 1805,
            "trendDirection": "UP",
            "problemsSolved": 3,
            "totalProblems": 4,
            "finishTimeInSeconds": 2930,
            "contest": {
                "title": "Weekly Contest 420",
                "startTime": 1729391400
            }
        },
        {
            "attended": true,
            "rating": 1726.457,
            "ranking": 4114,
            "trendDirection": "UP",
            "problemsSolved": 2,
            "totalProblems": 4,
            "finishTimeInSeconds": 4117,
            "contest": {
                "title": "Biweekly Contest 142",
                "startTime": 1729953000
            }
        },
        {
            "attended": true,
            "rating": 1703.588,
            "ranking": 10733,
            "trendDirection": "DOWN",
            "problemsSolved": 1,
            "totalProblems": 4,
            "finishTimeInSeconds": 3985,
            "contest": {
                "title": "Weekly Contest 421",
                "startTime": 1729996200
            }
        },
        {
            "attended": true,
            "rating": 1690.721,
            "ranking": 8623,
            "trendDirection": "DOWN",
            "problemsSolved": 1,
            "totalProblems": 4,
            "finishTimeInSeconds": 240,
            "contest": {
                "title": "Weekly Contest 422",
                "startTime": 1730601000
            }
        },
        {
            "attended": true,
            "rating": 1705.934,
            "ranking": 5314,
            "trendDirection": "UP",
            "problemsSolved": 2,
            "totalProblems": 4,
            "finishTimeInSeconds": 3838,
            "contest": {
                "title": "Biweekly Contest 149",
                "startTime": 1738420200
            }
        },
        {
            "attended": true,
            "rating": 1704.43,
            "ranking": 7021,
            "trendDirection": "DOWN",
            "problemsSolved": 1,
            "totalProblems": 4,
            "finishTimeInSeconds": 566,
            "contest": {
                "title": "Weekly Contest 435",
                "startTime": 1738463400
            }
        },
        {
            "attended": true,
            "rating": 1721.949,
            "ranking": 4249,
            "trendDirection": "UP",
            "problemsSolved": 2,
            "totalProblems": 4,
            "finishTimeInSeconds": 3721,
            "contest": {
                "title": "Weekly Contest 436",
                "startTime": 1739068200
            }
        },
        {
            "attended": true,
            "rating": 1689.426,
            "ranking": 18323,
            "trendDirection": "DOWN",
            "problemsSolved": 1,
            "totalProblems": 4,
            "finishTimeInSeconds": 1653,
            "contest": {
                "title": "Biweekly Contest 150",
                "startTime": 1739629800
            }
        },
        {
            "attended": true,
            "rating": 1682.747,
            "ranking": 9098,
            "trendDirection": "DOWN",
            "problemsSolved": 1,
            "totalProblems": 4,
            "finishTimeInSeconds": 607,
            "contest": {
                "title": "Weekly Contest 437",
                "startTime": 1739673000
            }
        },
        {
            "attended": true,
            "rating": 1663.828,
            "ranking": 12711,
            "trendDirection": "DOWN",
            "problemsSolved": 2,
            "totalProblems": 4,
            "finishTimeInSeconds": 3934,
            "contest": {
                "title": "Weekly Contest 438",
                "startTime": 1740277800
            }
        },
        {
            "attended": true,
            "rating": 1668.264,
            "ranking": 7238,
            "trendDirection": "UP",
            "problemsSolved": 1,
            "totalProblems": 4,
            "finishTimeInSeconds": 254,
            "contest": {
                "title": "Weekly Contest 440",
                "startTime": 1741487400
            }
        },
        {
            "attended": true,
            "rating": 1671.471,
            "ranking": 7017,
            "trendDirection": "UP",
            "problemsSolved": 2,
            "totalProblems": 4,
            "finishTimeInSeconds": 2716,
            "contest": {
                "title": "Biweekly Contest 152",
                "startTime": 1742049000
            }
        },
        {
            "attended": true,
            "rating": 1705.848,
            "ranking": 2975,
            "trendDirection": "UP",
            "problemsSolved": 2,
            "totalProblems": 4,
            "finishTimeInSeconds": 2504,
            "contest": {
                "title": "Weekly Contest 441",
                "startTime": 1742092200
            }
        },
        {
            "attended": true,
            "rating": 1704.833,
            "ranking": 7688,
            "trendDirection": "DOWN",
            "problemsSolved": 2,
            "totalProblems": 4,
            "finishTimeInSeconds": 2831,
            "contest": {
                "title": "Weekly Contest 442",
                "startTime": 1742697000
            }
        },
        {
            "attended": true,
            "rating": 1698.964,
            "ranking": 7321,
            "trendDirection": "DOWN",
            "problemsSolved": 1,
            "totalProblems": 4,
            "finishTimeInSeconds": 202,
            "contest": {
                "title": "Biweekly Contest 153",
                "startTime": 1743258600
            }
        },
        {
            "attended": true,
            "rating": 1713.393,
            "ranking": 4646,
            "trendDirection": "UP",
            "problemsSolved": 2,
            "totalProblems": 4,
            "finishTimeInSeconds": 1921,
            "contest": {
                "title": "Weekly Contest 443",
                "startTime": 1743301800
            }
        },
        {
            "attended": true,
            "rating": 1688.608,
            "ranking": 11847,
            "trendDirection": "DOWN",
            "problemsSolved": 1,
            "totalProblems": 4,
            "finishTimeInSeconds": 2467,
            "contest": {
                "title": "Weekly Contest 444",
                "startTime": 1743906600
            }
        },
        {
            "attended": true,
            "rating": 1715.62,
            "ranking": 3237,
            "trendDirection": "UP",
            "problemsSolved": 2,
            "totalProblems": 4,
            "finishTimeInSeconds": 656,
            "contest": {
                "title": "Weekly Contest 446",
                "startTime": 1745116200
            }
        },
        {
            "attended": true,
            "rating": 1722.823,
            "ranking": 4461,
            "trendDirection": "UP",
            "problemsSolved": 2,
            "totalProblems": 4,
            "finishTimeInSeconds": 2025,
            "contest": {
                "title": "Biweekly Contest 155",
                "startTime": 1745677800
            }
        },
        {
            "attended": true,
            "rating": 1702.91,
            "ranking": 7803,
            "trendDirection": "DOWN",
            "problemsSolved": 1,
            "totalProblems": 4,
            "finishTimeInSeconds": 2835,
            "contest": {
                "title": "Weekly Contest 447",
                "startTime": 1745721000
            }
        },
        {
            "attended": true,
            "rating": 1689.668,
            "ranking": 8791,
            "trendDirection": "DOWN",
            "problemsSolved": 2,
            "totalProblems": 4,
            "finishTimeInSeconds": 3601,
            "contest": {
                "title": "Weekly Contest 450",
                "startTime": 1747535400
            }
        },
        {
            "attended": true,
            "rating": 1704.818,
            "ranking": 3746,
            "trendDirection": "UP",
            "problemsSolved": 2,
            "totalProblems": 4,
            "finishTimeInSeconds": 5434,
            "contest": {
                "title": "Biweekly Contest 157",
                "startTime": 1748097000
            }
        },
        {
            "attended": true,
            "rating": 1711.634,
            "ranking": 5210,
            "trendDirection": "UP",
            "problemsSolved": 2,
            "totalProblems": 4,
            "finishTimeInSeconds": 2019,
            "contest": {
                "title": "Weekly Contest 451",
                "startTime": 1748140200
            }
        },
        {
            "attended": true,
            "rating": 1728.448,
            "ranking": 3851,
            "trendDirection": "UP",
            "problemsSolved": 2,
            "totalProblems": 4,
            "finishTimeInSeconds": 2213,
            "contest": {
                "title": "Weekly Contest 452",
                "startTime": 1748745000
            }
        },
        {
            "attended": true,
            "rating": 1701.514,
            "ranking": 11692,
            "trendDirection": "DOWN",
            "problemsSolved": 1,
            "totalProblems": 4,
            "finishTimeInSeconds": 1002,
            "contest": {
                "title": "Weekly Contest 454",
                "startTime": 1749954600
            }
        },
        {
            "attended": true,
            "rating": 1654.751,
            "ranking": 24676,
            "trendDirection": "DOWN",
            "problemsSolved": 0,
            "totalProblems": 4,
            "finishTimeInSeconds": 0,
            "contest": {
                "title": "Biweekly Contest 159",
                "startTime": 1750516200
            }
        },
        {
            "attended": true,
            "rating": 1654.606,
            "ranking": 7585,
            "trendDirection": "DOWN",
            "problemsSolved": 2,
            "totalProblems": 4,
            "finishTimeInSeconds": 5492,
            "contest": {
                "title": "Weekly Contest 455",
                "startTime": 1750559400
            }
        },
        {
            "attended": true,
            "rating": 1640.786,
            "ranking": 9951,
            "trendDirection": "DOWN",
            "problemsSolved": 1,
            "totalProblems": 4,
            "finishTimeInSeconds": 1035,
            "contest": {
                "title": "Weekly Contest 456",
                "startTime": 1751164200
            }
        },
        {
            "attended": true,
            "rating": 1673.516,
            "ranking": 2844,
            "trendDirection": "UP",
            "problemsSolved": 3,
            "totalProblems": 4,
            "finishTimeInSeconds": 5111,
            "contest": {
                "title": "Biweekly Contest 160",
                "startTime": 1751725800
            }
        },
        {
            "attended": true,
            "rating": 1658.648,
            "ranking": 10319,
            "trendDirection": "DOWN",
            "problemsSolved": 1,
            "totalProblems": 4,
            "finishTimeInSeconds": 1669,
            "contest": {
                "title": "Weekly Contest 457",
                "startTime": 1751769000
            }
        },
        {
            "attended": true,
            "rating": 1648.191,
            "ranking": 9910,
            "trendDirection": "DOWN",
            "problemsSolved": 1,
            "totalProblems": 4,
            "finishTimeInSeconds": 370,
            "contest": {
                "title": "Weekly Contest 458",
                "startTime": 1752373800
            }
        },
        {
            "attended": true,
            "rating": 1697.573,
            "ranking": 1698,
            "trendDirection": "UP",
            "problemsSolved": 3,
            "totalProblems": 4,
            "finishTimeInSeconds": 4627,
            "contest": {
                "title": "Biweekly Contest 161",
                "startTime": 1752935400
            }
        },
        {
            "attended": true,
            "rating": 1700.436,
            "ranking": 6630,
            "trendDirection": "UP",
            "problemsSolved": 2,
            "totalProblems": 4,
            "finishTimeInSeconds": 3371,
            "contest": {
                "title": "Weekly Contest 459",
                "startTime": 1752978600
            }
        },
        {
            "attended": true,
            "rating": 1697.854,
            "ranking": 7807,
            "trendDirection": "DOWN",
            "problemsSolved": 1,
            "totalProblems": 4,
            "finishTimeInSeconds": 404,
            "contest": {
                "title": "Weekly Contest 460",
                "startTime": 1753583400
            }
        },
        {
            "attended": true,
            "rating": 1729.255,
            "ranking": 2904,
            "trendDirection": "UP",
            "problemsSolved": 3,
            "totalProblems": 4,
            "finishTimeInSeconds": 4425,
            "contest": {
                "title": "Biweekly Contest 162",
                "startTime": 1754145000
            }
        },
        {
            "attended": true,
            "rating": 1724.786,
            "ranking": 7517,
            "trendDirection": "DOWN",
            "problemsSolved": 2,
            "totalProblems": 4,
            "finishTimeInSeconds": 2343,
            "contest": {
                "title": "Weekly Contest 461",
                "startTime": 1754188200
            }
        },
        {
            "attended": true,
            "rating": 1709.268,
            "ranking": 10091,
            "trendDirection": "DOWN",
            "problemsSolved": 1,
            "totalProblems": 4,
            "finishTimeInSeconds": 924,
            "contest": {
                "title": "Weekly Contest 462",
                "startTime": 1754793000
            }
        }
];

const LeetCodeData = {
    "Full Name" : "Ashok Bhatt",
    "Profile Name" : "ashokbhatt2048",
    "Global Rank" : 111931,
    "Profile Image": "https://assets.leetcode.com/users/ashokbhatt2048/avatar_1755594802.png",
    "Contribution Points" : 0,
    "Problems" : {
        "Easy" : {
            "Total" : 236,
            "Solved" : 890,
        },
        "Medium" : {
            "Total" : 300,
            "Solved" : 1904,
        },
        "Hard" : {
            "Total" : 45,
            "Solved" : 862,
        },
        "All" : {
            "Total" : 581,
            "Solved" : 3656,
        }
    },
    "Submissions" : {
        "Easy" : 457,
        "Medium" : 715,
        "Hard" : 119,
        "All" : 1291,
    },
    "Badge Count" : 7,
    "Badges" : [
      {
          "id": "7848058",
          "displayName": "365 Days Badge",
          "icon": "https://assets.leetcode.com/static_assets/marketing/lg365.png",
          "creationDate": "2025-08-18"
      },
      {
          "id": "7070959",
          "displayName": "100 Days Badge 2025",
          "icon": "https://assets.leetcode.com/static_assets/others/lg25100.png",
          "creationDate": "2025-05-16"
      },
      {
          "id": "6618429",
          "displayName": "50 Days Badge 2025",
          "icon": "https://assets.leetcode.com/static_assets/others/lg2550.png",
          "creationDate": "2025-03-24"
      },
      {
          "id": "4857916",
          "displayName": "100 Days Badge 2024",
          "icon": "https://assets.leetcode.com/static_assets/marketing/2024-100-lg.png",
          "creationDate": "2024-09-05"
      },
      {
          "id": "3763584",
          "displayName": "50 Days Badge 2024",
          "icon": "https://assets.leetcode.com/static_assets/marketing/2024-50-lg.png",
          "creationDate": "2024-04-20"
      },
      {
          "id": "2870909",
          "displayName": "50 Days Badge 2023",
          "icon": "https://assets.leetcode.com/static_assets/marketing/lg50.png",
          "creationDate": "2023-12-16"
      },
      {
          "id": "4458914",
          "displayName": "Introduction to Pandas",
          "icon": "https://assets.leetcode.com/static_assets/others/Introduction_to_Pandas_Badge.png",
          "creationDate": "2024-07-22"
      }
    ],
    "Active Badge" : {
        "id": "7848058",
        "displayName": "365 Days Badge",
        "icon": "https://assets.leetcode.com/static_assets/marketing/lg365.png",
        "creationDate": "2025-08-18"
    },
    "userSessionBeatsPercentage" : {
        "Easy" : 98.54,
        "Medium" : 96.93,
        "Hard" : 90.4,
    },
    "Contests Attended" : 68,
    "Contest Rating": 1709,
    "Contest Ranking" : 88687,
    "Total Participants" : 737635,
    "Contest Top Percentage" : 12.32,
    "Contest Badges" : null,
    "Contests Data" : leetcodeContestData,
    "default" : true,
}


export {
  navigation, 
  projects,
  skills,
  certificates,
  achievements,
  gfgContestData,
  code360Data,
  gfgData,
  LeetCodeData
};