export const personalDetails = {
  name: "Saiful Kabir Chowdhury",
  title: "Full Stack & Shopify Developer",
  roles: [
    "Full Stack Developer",
    "Shopify Expert",
    "Quick Learner"
  ],
  bio: "Passionate and experienced Full Stack & E-commerce Developer. With a strong foundation in modern web technologies, I craft sleek, high-performing web applications and custom e-commerce stores that blend visual excellence with seamless functionality.",
  longAbout: "Hello there! I'm Saiful Kabir Chowdhury, a dedicated Full Stack Web Developer and CSE Student. I specialize in building end-to-end web applications, custom Shopify themes, and bespoke WordPress solutions. My focus is on creating exceptional user experiences powered by clean code, intuitive UI/UX design, and dynamic animations. Whether crafting custom React/Next.js platforms or building high-converting Shopify storefronts, I turn complex ideas into digital reality.",
  email: "csaifulkabir@gmail.com",
  location: "Dhaka, Bangladesh",
  resumeUrl: "/cv/Resume.pdf",
};

export const statItems = [
  { label: "Years Experience", value: 3, suffix: "+" },
  { label: "Projects Completed", value: 70, suffix: "+" },
  { label: "Client Satisfaction", value: 100, suffix: "%" },
  { label: "Technologies Mastered", value: 15, suffix: "+" }
];

export const servicesData = [
  {
    id: "shopify",
    title: "Shopify Development",
    iconName: "ShoppingBag",
    description: "Bespoke Shopify theme development, custom Liquid coding, store setup, app integration, and conversion optimization.",
    features: ["Custom Liquid Themes", "Mobile-First Storefronts", "App & Payment Integration", "Speed & Core Web Vitals Optimization"],
    popular: true
  },
  {
    id: "fullstack",
    title: "Full Stack Development",
    iconName: "Code2",
    description: "End-to-end web application development using React, Next.js, Node.js, Express, MongoDB, and JavaScript.",
    features: ["Next.js App Router", "REST & GraphQL APIs", "Database Architecture", "Secure Authentication & Payments"],
    popular: true
  }
];

export const skillCategories = [
  {
    title: "Frontend Development",
    skills: [
      { name: "React.js", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "JavaScript (ES6+)", level: 90 },
      { name: "Tailwind CSS", level: 85 },
      { name: "HTML5 / CSS3", level: 95 },
    ]
  },
  {
    title: "Backend & Database",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Express.js", level: 88 },
      { name: "MongoDB", level: 70 },
      { name: "SQL", level: 78 },
      { name: "Firebase", level: 82 },
      { name: "REST & GraphQL APIs", level: 70 }
    ]
  },
  {
    title: "CMS & E-Commerce",
    skills: [
      { name: "Shopify & Liquid", level: 98 },
      { name: "WordPress & WooCommerce", level: 80 },
      { name: "Elementor & Custom Widgets", level: 85 }
    ]
  },
  {
    title: "Tools & Workflow",
    skills: [
      { name: "Git & GitHub", level: 90 },
      { name: "VS Code", level: 95 },
      { name: "Figma", level: 85 },
      { name: "Vercel & Netlify", level: 90 }
    ]
  }
];

export const projectsData = [
  {
    id: "unisync-campus-room-booking",
    title: "UniSync : Campus Room Booking Platform",
    category: "Full Stack",
    description:
      "A full-stack campus room booking and scheduling platform designed for university students, faculty, and administrators. It provides real-time room availability, reservation management, booking history, administrator support, and an integrated AI assistant.",
    longDescription:
      "UniSync is a modern university campus room booking and management platform built to simplify classroom, seminar room, and lab reservations. Users can check live room availability, select booking dates, submit reservation requests, track approved or pending bookings, contact administrators, and use the integrated AI chatbot for room and schedule-related assistance. The platform also includes a dedicated admin portal for managing rooms, users, reservations, pending requests, and overall booking activity through a centralized dashboard.",
    technologies: [
      "Next.js",
      "React",
      "JavaScript",
      "Tailwind CSS",
      "REST API",
      "SQL",
      "Vercel"
    ],
    image: "/images/UniSync Neon Campus Booking Platform.png",
    liveUrl: "https://uni-sync-client-seven.vercel.app/",
    githubUrl: "https://github.com/Saiful002/UniSync",
    featured: true
  },
  {
    id: "dsa-visualizer",
    title: "DSA Visualizer : Interactive Data Structures & Algorithms Learning Platform",
    category: "Frontend / Educational Platform",
    description:
      "An interactive Data Structures and Algorithms visualization platform designed to help users learn complex DSA concepts through animated visual representations, step-by-step execution, and practical code examples.",

    longDescription:
      "DSA Visualizer is an interactive learning platform built to make Data Structures and Algorithms easier to understand through visual demonstrations. Users can explore and visualize core concepts such as sorting algorithms, searching algorithms, data structures, graph algorithms, pathfinding, recursion, dynamic programming, and algorithm complexity. The platform focuses heavily on interactive animations so users can observe how each algorithm works step by step instead of relying only on theoretical explanations. It also includes supporting theory, pseudocode, complexity analysis, and implementation examples to help users strengthen their problem-solving and algorithmic thinking skills.",

    technologies: [
      "Next.js",
      "React",
      "JavaScript",
      "Tailwind CSS",
      "Data Structures",
      "Algorithms",
      "Algorithm Visualization",
      "Vercel"
    ],

    image: "/images/Neon DSA Visualizer Dashboard.jpg",

    liveUrl: "https://dsa-visualizer-002.vercel.app/",

    githubUrl:
      "https://github.com/Saiful002/Dsa-Visualizer/tree/main/dsa_visualizer",

    featured: true
  },
  {
    id: "sybratic-wellness-shopify",
    title: "Sybratic Wellness - Shopify Store",
    category: "Shopify",
    description: "Custom Shopify wellness and supplement store featuring a product recommendation quiz, detailed product pages, responsive layouts, and a clean healthcare-focused shopping experience.",
    longDescription: "A custom Shopify e-commerce store developed for Sybratic Wellness with a professional health and supplement-focused design. The store includes an interactive product quiz system, custom product layouts, wellness benefit sections, testimonials, FAQs, product recommendations, responsive mobile optimization, and conversion-focused shopping functionality.",
    technologies: ["Shopify", "Liquid", "JavaScript", "CSS"],
    image: "/images/Sybratic Wellness Lab Showcase.png",
    liveUrl: "https://sybratic-swz6zhx4.myshopify.com/",
    storePassword: "1", // Store password for Shopify protected storefront (replaces GitHub URL)
    password: "1",
    featured: true
  }
];

export const experiencesData = [
  {
    id: "softvence-omega",
    company: "SOFTVENCE OMEGA",
    role: "WEB DEVELOPER | SHOPIFY & CUSTOM LIQUID EXPERT",
    location: "Ambon Complex, Mohakhali, Dhaka 1212",
    period: "Feb 2026 – Current",
    description: [
      "Building and customizing high-performance Shopify stores using Custom Liquid, theme development, and tailored eCommerce solutions.",
      "Leading the development team, providing technical guidance, and ensuring the successful delivery of client projects."
    ],
    technologies: ["Shopify", "Custom Liquid", "JavaScript", "Theme Dev", "eCommerce", "Team Lead"]
  },
  {
    id: "sardar-it",
    company: "SARDAR IT",
    role: "WEB DEVELOPER",
    location: "Plot- 30/A, Road-06, Rupnagar, Mirpur, Dhaka-1216",
    period: "May 2025 – Feb 2026",
    description: [
      "Working full-time as a Web Developer at Sardarit, specializing in the Shopify department.",
      "Responsible for building and customizing Shopify websites, developing web-based solutions, and leading a development team to deliver high-quality eCommerce projects."
    ],
    technologies: ["Shopify", "Web Development", "Liquid", "Team Lead"]
  },
  {
    id: "sns-communication",
    company: "SNS COMMUNICATION",
    role: "EXECUTIVE OFFICER",
    location: "Narayanganj, Bangladesh",
    period: "Feb 2023 – July 2023",
    description: [
      "Worked part-time as an Executive Officer, handling administrative tasks, customer accounts, billing, and documentation.",
      "Resolving customer inquiries, coordinating with technical teams, and supporting web-based software maintenance during a 6-hour shift."
    ],
    technologies: ["Customer Accounts", "Billing", "Software Maintenance", "Documentation"]
  }
];

export const socialLinks = [
  { name: "GitHub", url: "https://github.com/Saiful002", iconName: "Github" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/saiful-kabir-chowdhury-a58a57353/", iconName: "Linkedin" },
  { name: "Facebook", url: "https://www.facebook.com/caudhuri.saheba.255136/", iconName: "Facebook" },
  { name: "Instagram", url: "https://www.instagram.com/_saiful_kabir/", iconName: "Instagram" }
];
