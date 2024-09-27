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
    id: "home",
    title: "HOME",
  },
  {
    id: "about",
    title: "DLO",
  },
  {
    id: "work",
    title: "WORK",
  },
  {
    id: "contact",
    title: "CONTACT",
  },
];

const services = [
  {
    title: "UI/UX DESIGNER",
    icon: web,
  },
  {
    title: "JAVASCRIPT FULL-STACK DEVELOPER",
    icon: mobile,
  },
  {
    title: "3D ANIMATION ENTHUSIAST",
    icon: backend,
  },
  {
    title: "GRAPHIC DESIGNER",
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
    title: "Full stack Developer",
    company_name: "UPWORK",
    icon: meta,
    iconBg: "#E6DEDD",
    date: " Nov 2022 - Present Day",
    points: [
      "Developed custom software applications, improving client business processes by up to 40% using the latest technologies in SWE which are React JS, Node Js and a utilizing a good backend service which is MongoDB and Appwrite.",
      "I also took on some collaborative efforts and learn from other freelancers, including a 3D Animation training.",
    ],
  },
  {
    title: "Business Development and Sales Extern",
    company_name: "THEMATIC",
    icon: starbucks,
    iconBg: "#383E56",
    date: "May 2024 - July 2024",
    points: [
      "Identified and sourced potential leads,resulting in a 10% increase in quality leads.",
      "Articulated Thematic’s unique value proposition and customized cold outreach to leads, achieving a 75% response rate in cold outreach.",
      "Managed time autonomously to complete multiple projects in an asynchronous an eight-week program,successfully completing 3 key projects.",
    ],
  },
  {
    title: "Gaming Genre and Research Extern",
    company_name: "MOBALYTICS",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Mar 2024 - May 2024",
    points: [
      "Analyzed gaming genres, providing market insights and identifying 15% potential market growth opportunities.",
      "Deeply analyzed game mechanisms, KPIs, revenue models, and player psychology.",
      "Engaged with games for firsthand experience, developing a comprehensive understanding of player behavior, which informed 70% of the research conclusions.",
      "Chose a genre and conducted detailed research, Summarized research into a compelling presentation,  which received 95% positive feedback from Mobalytics leadership.",
      "Provided actionable recommendations that could potentially enhance market share by 20%.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };