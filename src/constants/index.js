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
    id: "services",
    title: "Services",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Smart Health Care",
    icon: web,
  },
  {
    title: "Remote Appointment",
    icon: mobile,
  },
  {
    title: "Online Consultancy",
    icon: backend,
  },
  {
    title: "Health Records",
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
    title: "Get an Eye Glass for Free",
    company_name: "- Merit Hospital",
    icon: starbucks,
    iconBg: "#383E56",
    date: "",
    points: [
      "click here",
    ],
  },
  {
    title: "Are you feeling harsh symtoms?",
    company_name: "- Dr. Nuel",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "",
    points: ["click me"],
  },
  {
    title: "Get a specialist",
    company_name: "- TeleDoc",
    icon: shopify,
    iconBg: "#383E56",
    date: "",
    points: ["click me",
    ],
  },
  {
    title: "Book a free session with a medical specialist",
    company_name: "- Meta Health Care",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "",
    points: ["click here",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I love TeleDoc.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I love TeleDoc",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "I love TeleDoc",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Dr. Mark",
    description:
      "Dr. Mark is a chief consultant in Eye care unit, He is MBBS Certified.",
    tags: [
      {
        name: "E.M Certified",
        color: "blue-text-gradient",
      },
      {
        name: "Consultant",
        color: "green-text-gradient",
      },
      {
        name: "Verified",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Dr. Stella",
    description:
      "Dr. Stella is a chief consultant in Eye care unit, She is MBBS Certified.",
    tags: [
      {
        name: "E.M Certified",
        color: "blue-text-gradient",
      },
      {
        name: "Consultant",
        color: "green-text-gradient",
      },
      {
        name: "Verified",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Dr. David",
    description:
      "Dr. David is a chief consultant in Eye care unit, He is MBBS Certified.",
    tags: [
      {
        name: "E.M Certified",
        color: "blue-text-gradient",
      },
      {
        name: "Resident Doctor",
        color: "green-text-gradient",
      },
      {
        name: "Verified",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
