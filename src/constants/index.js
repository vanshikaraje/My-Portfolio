import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "ReactDeveloper",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Html,Css and Javascript",
    // company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Aug 2024 - Oct 2024",
    points: 
[
  "Started my web development journey by mastering the fundamentals of HTML and CSS to build structured, responsive layouts.",
  "Gained hands-on experience with JavaScript by building interactive features and learning how the web works under the hood.",
  "Created multiple beginner-friendly projects to solidify concepts like DOM manipulation, event handling, and responsive design.",
  "Continuously improving my frontend skills and exploring modern JavaScript features and best practices."
]

  },
  {
    title: "MERN Stack",
    // company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Oct 2024 - Feb 2025",
    points: [
  "Started my MERN stack journey by learning MongoDB, Express.js, React.js, and Node.js to build full-stack web applications.",
  "Built and deployed real-world projects like a password manager, fundraising platform, and e-commerce website using the MERN stack.",
  "Integrated RESTful APIs, handled user authentication, and implemented CRUD operations for dynamic data flow.",
  "Focused on writing clean, modular code and improving performance across both frontend and backend.",
  "Continuously exploring advanced MERN concepts like middleware, JWT auth, and state management with Redux/Context API."
]

  },
  {
    title: "Next.js",
    // company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Feb 2025 - May 2025",
    points: [
  "Developing and deploying modern web applications using Next.js with features like routing, API integration, and server-side rendering.",
  "Building scalable and SEO-friendly pages using App Router, dynamic routes, and metadata handling in Next.js.",
  "Integrating authentication, database operations, and real-time APIs using tools like Clerk, Drizzle ORM, and PostgreSQL.",
  "Collaborating on UI/UX design with Tailwind CSS and Framer Motion to deliver smooth, responsive interfaces.",
  "Optimizing performance through code splitting, lazy loading, and image optimization provided by the Next.js framework."
]

  },
  {
    title: "Three.js and Gsap",
    // company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "May 2025 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
  testimonial:
    "I thought it was impossible to make a website as beautiful as our product, but Vanshika proved me wrong.",
  name: "Ishika",
  designation: "Team Members",
  company: "Student Project",
   image: "https://randomuser.me/api/portraits/women/4.jpg",
},
    {
  testimonial:
    "Working with Vanshika during the hackathon was truly inspiring — her leadership, creativity, and calm under pressure pushed our project to the next level.",
  name: "Eric Sandhu",
  designation: "Hackathon Teammate",
  company: "Project Team",
   image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  
   {
  testimonial: 
    "Working with Vanshika on our mini-project was honestly the best.She is super dedicated, full of ideas, and made everything so smooth. I couldn’t have asked for a better teammate!",
  name: "Shubhanjali",
  designation: "B.Tech CSE Student",
  company: "GL Bajaj Institute of Technology & Management",
  image: "https://randomuser.me/api/portraits/women/6.jpg",
},

];

const projects = [
  {
    name: "WELL N IQ",
    description:
       "Smart healthcare made simple — WELL N IQ connects users with AI-driven medical guidance for faster, accessible, and reliable care.",
    tags: [
      {
        name: "next.js",
        color: "blue-text-gradient",
      },
      {
        name: "orm drizzle",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "vapi",
        color: "yellow-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "ClyvLock",
    description:
      "A secure and user-friendly password manager that lets users store, organize, and manage credentials with full-stack encryption and ease.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Saas Landing page",
    description:
      "Customizable and conversion-focused landing page UI crafted for startups, products, or any online presence.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "farmar motion",
        color: "pink-text-gradient",
      },
      {
        name: "tailwind css",
        color: "browm-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
