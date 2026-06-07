// src/data/projectsData.js
// All projects data for Tejas Gopale portfolio

export const projectsData = [
  {
    id: 1,
    title: "VGI Approval System",
    company: "Bhilosa Industries",
    category: "Mobile + Backend",
    year: "2024",
    tags: ["React Native", "Java Spring Boot", "Firebase", "SAP APIs", "REST APIs"],
    color: "#FF6B35",
    accent: "#FF9A6C",
    icon: "📱",
    shortDesc: "Mobile vehicle approval management system with real-time push notifications",
    longDesc: "A comprehensive mobile application built with React Native for the frontend and Java Spring Boot for the robust backend. The system manages vehicle approval workflows with seamless SAP API integrations and Firebase Cloud Messaging for real-time push notifications. Features include multi-level approval chains, automated email alerts, real-time status tracking, and a clean dashboard for operations managers.",
    features: [
      "Multi-level vehicle approval workflow",
      "Firebase push notifications & alerts",
      "SAP HANA database integration",
      "RESTful API architecture",
      "Automated email notifications",
      "Real-time approval tracking dashboard",
      "Role-based access control (Admin/Manager/User)"
    ],
    stack: {
      frontend: ["React Native", "Redux", "Firebase SDK"],
      backend: ["Java Spring Boot", "Spring Security", "Spring Data JPA"],
      database: ["SAP HANA"],
      services: ["Firebase Cloud Messaging", "Firebase Auth", "SAP APIs", "EmailJS"]
    },
    status: "Production",
    confidential: true
  },
  {
    id: 2,
    title: "Customer Vendor Portal",
    company: "Bhilosa Industries",
    category: "Full Stack Web",
    year: "2024",
    tags: ["Vite.js", "Java Spring Boot", "PostgreSQL", "SAP APIs", "JWT"],
    color: "#6C63FF",
    accent: "#9D97FF",
    icon: "🏭",
    shortDesc: "Enterprise customer-vendor management portal with SAP integration and JWT security",
    longDesc: "An enterprise-grade customer and vendor management portal developed for Bhilosa Industries. Features a lightning-fast Vite.js frontend with a secure Java Spring Boot backend. Implements JWT-based authentication and authorization, integrates deeply with SAP ERP APIs for real-time data synchronization, and uses PostgreSQL for robust data persistence. The portal streamlines vendor onboarding, purchase orders, and payment tracking.",
    features: [
      "JWT-based secure authentication & authorization",
      "SAP ERP real-time API integration",
      "Vendor onboarding & management",
      "Purchase order lifecycle management",
      "Payment tracking & invoice management",
      "Advanced reporting & analytics dashboard",
      "Role-based portal access (Admin/Vendor/Customer)"
    ],
    stack: {
      frontend: ["Vite.js", "React", "Tailwind CSS", "Axios"],
      backend: ["Java Spring Boot", "Spring Security", "JWT", "Spring Data JPA"],
      database: ["PostgreSQL"],
      services: ["SAP APIs", "SAP HANA"]
    },
    status: "Production",
    confidential: true
  },
  {
    id: 3,
    title: "Stermin Muse Jewellery",
    company: "Stermin Muse",
    category: "E-Commerce Website",
    year: "2023",
    tags: ["Wix Platform", "E-Commerce", "UI/UX Design", "SEO"],
    color: "#C9A84C",
    accent: "#E8C96A",
    icon: "💎",
    shortDesc: "Luxury jewellery e-commerce website with elegant design and seamless shopping",
    longDesc: "A premium luxury jewellery e-commerce website built on the Wix platform for Stermin Muse. Designed with a focus on elegance, visual storytelling, and conversion optimization. Features a sophisticated product catalog, secure checkout, wishlist functionality, and mobile-responsive design that matches the brand's luxury aesthetic.",
    features: [
      "Luxury-focused UI/UX design",
      "Full e-commerce product catalog",
      "Secure payment gateway integration",
      "Wishlist & product comparison",
      "Mobile-first responsive design",
      "SEO optimization for organic traffic",
      "Custom brand identity implementation"
    ],
    stack: {
      frontend: ["Wix Studio", "Custom CSS", "Wix Velo (JavaScript)"],
      backend: ["Wix Backend (Velo)"],
      database: ["Wix Collections"],
      services: ["Wix Payments", "Wix SEO"]
    },
    status: "Live",
    confidential: false,
    liveUrl: "#"
  },
  {
    id: 4,
    title: "Schools SaaS ERP",
    company: "KaryaSoft Technology",
    category: "SaaS Platform",
    year: "2024",
    tags: ["React", "Android", "Java Spring Boot", "MySQL", "Payment Gateway", "SaaS"],
    color: "#00D4AA",
    accent: "#4EEEC8",
    icon: "🏫",
    shortDesc: "Complete school management SaaS with mobile apps for teachers, parents & students",
    longDesc: "A comprehensive end-to-end School Management SaaS ERP platform developed at KaryaSoft Technology. The platform covers every aspect of school administration—from student enrollment to exam results, fee payments, and beyond. Includes dedicated Android apps for Teachers, Parents, and Students with real-time communication, attendance tracking, assignment management, and integrated online payment solutions.",
    features: [
      "Complete student lifecycle management",
      "Attendance tracking (biometric/manual)",
      "Online fee payment & installment plans",
      "Assignment & homework management",
      "Exam scheduling & result publication",
      "Parent-Teacher communication portal",
      "Library & inventory management",
      "Transport & route management",
      "Android apps: Teachers, Parents, Students",
      "Multi-school SaaS architecture",
      "Real-time notifications & announcements",
      "Timetable & schedule management"
    ],
    stack: {
      frontend: ["React.js", "Redux Toolkit", "Tailwind CSS"],
      backend: ["Java Spring Boot", "Spring Security", "Microservices"],
      mobile: ["Android (Java/Kotlin)"],
      database: ["MySQL", "Redis (caching)"],
      services: ["Razorpay (payments)", "Firebase", "Twilio (SMS)", "Spring Batch"]
    },
    status: "Production",
    confidential: false
  },
  {
    id: 5,
    title: "KaryaSoft Technology Website",
    company: "KaryaSoft Technology",
    category: "Corporate Website",
    year: "2024",
    tags: ["React.js", "Framer Motion", "Tailwind CSS", "SEO"],
    color: "#FF4785",
    accent: "#FF7DAB",
    icon: "🚀",
    shortDesc: "Official corporate website for KaryaSoft Technology with modern animations",
    longDesc: "The official corporate website for KaryaSoft Technology, showcasing the company's services, portfolio, team, and technology expertise. Built with React.js and enriched with smooth Framer Motion animations. Features SEO optimization, dynamic service showcases, and a modern tech-forward aesthetic that positions KaryaSoft as an industry leader.",
    features: [
      "Modern corporate identity design",
      "Animated service showcases",
      "Portfolio & case studies section",
      "Team profiles & culture page",
      "SEO-optimized content structure",
      "Contact & lead generation forms",
      "Mobile-responsive design",
      "Performance-optimized (90+ Lighthouse score)"
    ],
    stack: {
      frontend: ["React.js", "Framer Motion", "Tailwind CSS", "EmailJS"],
      backend: ["Node.js (Contact API)"],
      services: ["Google Analytics", "Vercel Deployment"]
    },
    status: "Live",
    confidential: false
  },
  {
    id: 6,
    title: "Helcolin India Pvt. Ltd. Website",
    company: "Helcolin India Private Limited",
    category: "Corporate Website",
    year: "2024",
    tags: ["React.js", "Java Backend", "MySQL", "Corporate"],
    color: "#0099FF",
    accent: "#4DB8FF",
    icon: "🏢",
    shortDesc: "Official website for Helcolin India with dynamic content management and CMS",
    longDesc: "The official corporate website for Helcolin India Private Limited. Developed with a focus on professionalism, brand trust, and lead generation. Features a dynamic content management system, product catalog, downloadable brochures, and an integrated inquiry management system to streamline business development operations.",
    features: [
      "Professional corporate design",
      "Dynamic product/service catalog",
      "Inquiry management system",
      "Downloadable brochures & documents",
      "Admin panel for content updates",
      "Lead capture & CRM integration",
      "Mobile-responsive layout",
      "Multi-language support ready"
    ],
    stack: {
      frontend: ["React.js", "CSS Modules", "Axios"],
      backend: ["Java Spring Boot", "Spring MVC"],
      database: ["MySQL"],
      services: ["AWS S3 (documents)", "EmailJS"]
    },
    status: "Live",
    confidential: false
  }
];

export const skillsData = {
  languages: ["Java", "JavaScript", "TypeScript", "SQL", "HTML5", "CSS3"],
  frontend: ["React.js", "Vite.js", "React Native", "Redux", "Tailwind CSS", "Framer Motion"],
  backend: ["Spring Boot", "Spring Security", "Spring Data JPA", "Microservices", "REST APIs", "JWT"],
  database: ["PostgreSQL", "MySQL", "SAP HANA", "Firebase Firestore", "Redis"],
  tools: ["Git", "Docker", "Postman", "IntelliJ IDEA", "VS Code", "Figma"],
  cloud: ["Firebase", "AWS (S3, EC2)", "Vercel", "Google Cloud"],
  integrations: ["SAP APIs", "Razorpay", "Twilio", "EmailJS", "Firebase FCM"]
};

export const statsData = [
  { number: 6, suffix: "+", label: "Projects Delivered" },
  { number: 2, suffix: "+", label: "Years Experience" },
  { number: 3, suffix: "+", label: "Happy Clients" },
  { number: 10, suffix: "+", label: "Technologies Mastered" }
];
