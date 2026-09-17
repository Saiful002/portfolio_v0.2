export const personalDetails = {
  name: "Saiful Kabir Chowdhury",
  title: "Full Stack & Shopify Developer",
  roles: [
    "Full Stack Developer",
    "Shopify Expert",
    "WordPress Developer",
    "Creative Web Engineer"
  ],
  bio: "Passionate and experienced Full Stack & E-commerce Developer. With a strong foundation in modern web technologies, I craft sleek, high-performing web applications and custom e-commerce stores that blend visual excellence with seamless functionality.",
  longAbout: "Hello there! I'm Saiful Kabir Chowdhury, a dedicated Full Stack Web Developer and CSE Student. I specialize in building end-to-end web applications, custom Shopify themes, and bespoke WordPress solutions. My focus is on creating exceptional user experiences powered by clean code, intuitive UI/UX design, and dynamic animations. Whether crafting custom React/Next.js platforms or building high-converting Shopify storefronts, I turn complex ideas into digital reality.",
  email: "csaifulkabir@gmail.com",
  location: "Dhaka, Bangladesh",
  resumeUrl: "/cv/Resume.pdf",
};

export const statItems = [
  { label: "Years Experience", value: 3, suffix: "+" },
  { label: "Projects Completed", value: 20, suffix: "+" },
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
      { name: "React.js", level: 95 },
      { name: "Next.js", level: 90 },
      { name: "JavaScript (ES6+)", level: 95 },
      { name: "Tailwind CSS", level: 95 },
      { name: "HTML5 / CSS3", level: 98 },
      { name: "GSAP & Framer Motion", level: 88 }
    ]
  },
  {
    title: "Backend & Database",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Express.js", level: 88 },
      { name: "MongoDB", level: 85 },
      { name: "PostgreSQL", level: 78 },
      { name: "Firebase", level: 82 },
      { name: "REST & GraphQL APIs", level: 90 }
    ]
  },
  {
    title: "CMS & E-Commerce",
    skills: [
      { name: "Shopify & Liquid", level: 92 },
      { name: "WordPress & WooCommerce", level: 90 },
      { name: "Elementor & Custom Widgets", level: 92 }
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
    id: "gub-idpc-2025",
    title: "GUB IDPC 2025 Official Platform",
    category: "Full Stack",
    description: "Official web platform for the International Debate & Programming Contest 2025 at Green University of Bangladesh. Features contest countdowns, registration flow, interactive dropdowns, and schedule details.",
    longDescription: "The GUB IDPC 2025 platform serves as the central hub for contestants, debaters, and sponsors. Built with Next.js and Tailwind CSS, it features a fluid responsive UI, student registration modal, real-time schedule grid, and custom dropdown menus.",
    technologies: ["Next.js", "Tailwind CSS", "JavaScript", "Vercel"],
    image: "/images/gub_idpc.jpg",
    liveUrl: "https://gub-idpc-2025.vercel.app/",
    githubUrl: "https://github.com/Saiful002/GUB_IDPC_2025",
    featured: true
  },
  {
    id: "round-trip",
    title: "Round Trip - Travel Platform",
    category: "Full Stack",
    description: "Comprehensive full-stack travel booking application allowing users to explore destinations, manage itineraries, and make fast bookings.",
    longDescription: "Round Trip is a feature-packed travel portal built with JavaScript, MongoDB, Express.js, and Firebase Authentication. It offers secure user sessions, interactive map previews, dynamic flight/hotel search, and seamless DB connectivity.",
    technologies: ["JavaScript", "MongoDB", "Express.js", "Firebase", "React"],
    image: "/images/round_trip.jpg",
    liveUrl: "https://github.com/Saiful002/Round-Trip",
    githubUrl: "https://github.com/Saiful002/Round-Trip",
    featured: true
  },
  {
    id: "aurum-luxe-shopify",
    title: "Aurum Luxe - Shopify Store",
    category: "Shopify",
    description: "Luxury custom Shopify e-commerce theme with high-converting product showcases, sliding cart drawer, and mobile-first Liquid templates.",
    longDescription: "A high-end e-commerce store built on Shopify using custom Liquid templates, Tailwind styling, AJAX cart drawer, filtering system, and Core Web Vitals optimization.",
    technologies: ["Shopify", "Liquid", "JavaScript", "Tailwind CSS"],
    image: "/images/shopify_store.jpg",
    liveUrl: "#",
    githubUrl: "https://github.com/Saiful002",
    featured: true
  },
  {
    id: "portfolio-v02",
    title: "Developer Portfolio v0.2",
    category: "Full Stack",
    description: "Interactive creative developer portfolio with GSAP animations, Three.js 3D backdrop, Lenis smooth scrolling, and dark luxury aesthetic.",
    longDescription: "My personal developer showcase featuring modern web design practices, JavaScript architecture, dark glassmorphism styling, and custom animations.",
    technologies: ["Next.js", "React", "JavaScript", "GSAP", "Tailwind CSS"],
    image: "/images/profile.jpg",
    liveUrl: "https://port-folio-five-cyan.vercel.app/",
    githubUrl: "https://github.com/Saiful002/PortFolio",
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
