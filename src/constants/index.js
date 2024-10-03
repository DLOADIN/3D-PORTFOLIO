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
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";
import Thematic from "../assets/company/Thematic.png";
import Mobalytics from "../assets/company/Mobalytics.png";
import Upwork from "../assets/company/Upwork.png";
import nextjs from "../assets/company/nextjs.png";
import foodguardian from "../assets/WEBSITE/Capture-1.png";
import kilohills from "../assets/WEBSITE/Capture-2.png";
import carepulse from "../assets/WEBSITE/Capture-3.png";
import packmate from "../assets/WEBSITE/Capture-4.png";
import femme from "../assets/company/portraits/femme.png"
import gudman from "../assets/company/portraits/gudman.png"
import yesman from "../assets/company/portraits/yesman.png"
import mandown from "../assets/company/portraits/mandown.png"
import prigaal from "../assets/company/portraits/prigaal.png"
import mann from "../assets/company/portraits/mann.png"


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
    title: "JAVASCRIPT STACK DEVELOPER",
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
  {
    name: "nextjs",
    icon: nextjs,
  },
];







const experiences = [
  {
    title: "Full stack Developer",
    company_name: "UPWORK",
    icon: Upwork,
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
    icon: Thematic,
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
    icon: Mobalytics,
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
      " The kid is actually amazing when it comes to understanding customer's needs and figuring out designs that will fit an organisation's criteria. ",
    name: " Prince Prigaal ",
    designation: "COO",
    company: "Kilohills",
    image: prigaal,
  },
  {
    testimonial:
      " After David developed an inventory management web-application that helped me to quickly manage my products in the store; I knew I had my shop's stockage installed in my personal computer. I can't thank him enough. ",
    name: " Lisa Kaneza ",
    designation: "Entrepreneur",
    company: "4QUARTERS Enterprises",
    image: femme,
  },
  {
    testimonial:
      " He did a good job at modelling a figma design that I created as an event management software in my final year at University. ",
    name: " Timo Klins ",
    designation: "Software Engineer",
    company: "IkoRwanda",
    image: mandown,
  },
  {
    testimonial:
      " Besides just coding. he keeps the vibe fun and light, which makes long coding sessions way more bearable. If you want someone who can both crush it with code and crack a joke ",
    name: " Hakim Ishimwe ",
    designation: "Project Manager",
    company: "IkoRwanda",
    image: gudman,
  },
  {
    testimonial:
      " I had the pleasure of working alongside Manzi on several projects, and I can confidently say he’s one of the most talented developers I’ve encountered. His ability to tackle complex problems with innovative solutions is impressive.",
    name: " Gashema Arnaud",
    designation: "Software Engineer",
    company: "IkoRwanda",
    image: mann,
  },
];




const projects = [
  {
    name: "Kilohills site",
    description:
      "A stunning good looking Photography website that showcases the works of a photography company called Kilohills. A group of Photographers who exhibit their work both in pictures, artsworks and videos both on Online venues and Physical venues.",
    tags: [
      {
        name: "React JS",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: kilohills,
    source_code_link: "https://www.kilohills.com",
    source_my_link: "https://www.kilohills.com",
  },
  {
    name: "Carepulse",
    description:
      "A full stack web-application that manages appointments between patients and doctors and other patient's data including personal data which also has messaging feature between app admin and users or patients.",
    tags: [
      {
        name: "Next-Js",
        color: "blue-text-gradient",
      },
      {
        name: "Restapi",
        color: "green-text-gradient",
      },
      {
        name: "Appwrite",
        color: "green-text-gradient",
      },
      {
        name: "Tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: carepulse,
    source_code_link: "https://github.com/DLOADIN/carepulse",
    source_my_link: "https://carepulse-amber.vercel.app/"
  },
  {
    name: "Food Guardian",
    description:
      "A comprehensive food managing web-application that includes CRUD operations. These backend-operations help the application user know what's in the stock, Product deductions and other other complex details that are essential in online business and stock management.",
    tags: [
      {
        name: "PHP",
        color: "blue-text-gradient",
      },
      {
        name: "Phpmyadmin",
        color: "green-text-gradient",
      },
      {
        name: "Tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: foodguardian,
    source_code_link: "https://github.com/DLOADIN/FOOD-GUARDIAN-SYSTEM",
    source_my_link: "https://github.com/DLOADIN/FOOD-GUARDIAN-SYSTEM",
  },
  {
    name: "Packmate Pro",
    description:
      "A Package management web-application that helps in production monitoring, product consumption and in overall product packaging monitoring using a real-time dashboard and other utilites.",
    tags: [
      {
        name: "Php",
        color: "blue-text-gradient",
      },
      {
        name: "Phpmyadmin",
        color: "green-text-gradient",
      },
      {
        name: "Tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: packmate,
    source_code_link: "https://github.com/DLOADIN/packmate-pro",
    source_my_link: "https://github.com/DLOADIN/packmate-pro",
  },
];



export { services, technologies, experiences, testimonials, projects };