import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import {
  LuGraduationCap,
  LuShield,
  LuSearch,
  LuPenTool,
  LuCode,
} from "react-icons/lu";
import { SiNextdotjs } from "react-icons/si";

import carhubImg from "@/public/carhub.png";
import realtorImg from "@/public/realtor.png";
import ecommerceImg from "@/public/ecommerce.png";

// Navigation links
// Navigation links
export const LINKS = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Education",
    hash: "#education",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

// External links
export const EXTRA_LINKS = {
  linkedin: "https://www.linkedin.com/in/yousra-kiani-a33a3928a/",
  github: "https://github.com/yw-kiani",
  resume: "/my-resume.pdf",
  source_code: "https://github.com",
  email: "ywkiani@gmail.com",
} as const;

// Data for work experience
export const EXPERIENCES_DATA = [
  {
    title: "Cybersecurity Intern — Digital Empowerment Network",
    description:
      "Worked as a Cybersecurity Intern focusing on digital forensics, SQL Injection, XSS, Command Injection, malware analysis, and vulnerability assessment.",
    icon1: "/icons/den.png",
    icon: React.createElement(LuShield),
    date: "Jul 2025 - Sep 2025",
  },

  {
    title: "Research Analyst — Silverlight Research",
    description:
      "Served as a Research Analyst conducting technical research, data evaluation, and case study analysis for global clients.",
    icon1: "/icons/silver.png",
    icon: React.createElement(LuSearch),
    date: "Sep 2025 - Oct 2025",
  },

  {
    title: "Cybersecurity Intern — Brainwave Matrix Solutions",
    description:
      "Completed a cybersecurity internship focusing on Python automation, security tools, and vulnerability assessment.",
    icon1: "/icons/brainwave.png",
    icon: React.createElement(LuShield),
    date: "Jul 2025 - Aug 2025",
  },

  {
    title: "Cybersecurity Intern — DevelopersHub Corporation",
    description:
      "Performed web security testing including SQL Injection, XSS, Command Injection, and Broken Access Control.",
    icon1: "/icons/devhub.png",
    icon: React.createElement(LuShield),
    date: "Jun 2025 - Jul 2025",
  },

  {
    title: "Python & Problem-Solving Intern — CodSoft",
    description:
      "Strengthened my Python programming and problem-solving skills by working on structured tasks and mini-projects.",
    icon1: "/icons/codsoft.png",
    icon: React.createElement(LuCode),
    date: "Feb 2024 - Mar 2024",
  },
] as const;


// Data for education
export const EDUCATION_DATA = [
  {
    title: "BS Cybersecurity",
    school: "Mehran University of Engineering & Technology (MUET)",
    period: "2023 - Present",
    icon: "/icons/uni.png", // reuse your MUET logo
    short: "Building a strong foundation in cybersecurity and computer science.",
    details:
      "Pursuing a BS in Cybersecurity at MUET with a focus on network security, digital forensics, and system hardening. Actively involved in security societies, CTFs, and technical events.",
  },
  {
    title: "Google Cybersecurity Specialization",
    school: "Google / Coursera",
    period: "2025",
    icon: "/icons/google.png", // add this in /public/icons
    short: "Industry-aligned training in modern cybersecurity practices.",
    details:
      "Completed the Google Cybersecurity Professional Specialization covering SOC workflows, Linux, SQL, SIEM tools, incident response, and hands-on labs for real-world defense scenarios.",
  },
  {
    title: "Hands-On Labs & Hackathons",
    school: "Trillium Information Security Systems",
    period: "2024 - 2025",
    icon: "/icons/trillium.png", // add this in /public/icons
    short: "Applied learning through labs, simulations, and hackathons.",
    details:
      "Participated in Deloitte Cyber Job Simulation, Digital Pakistan Cyber Hackathon, and multiple virtual labs, focusing on problem solving, digital forensics, and attack/defense simulations.",
  },
] as const;

// Data for projects
export const PROJECTS_DATA = [
  {
    title: "CarHub",
    description:
      "A web app that is built using NextJS and enables users to quickly search and obtain information about cars.",
    tags: ["React", "Next.js", "TypeScript", "Tailwind", "Headless UI"],
    imageUrl: carhubImg,
    projectUrl: "https://carhb.vercel.app/",
  },
  {
    title: "Realtor",
    description:
      "Buy and rent homes for everyone. I was the front-end developer. It has features like filtering, sorting, and pagination.",
    tags: ["React", "Chakra UI", "Next.js", "Framer Motion", "React Icons"],
    imageUrl: realtorImg,
    projectUrl: "https://real-estate-app-react.vercel.app/",
  },
  {
    title: "ECommerce Store",
    description:
      "A NextJS-based eCommerce store that allows users to order different products. It supports real-time payments using Stripe.",
    tags: ["React", "Next.js", "Sanity", "React Router", "Stripe"],
    imageUrl: ecommerceImg,
    projectUrl: "https://ecommerce-app-next.vercel.app/",
  },
] as const;

// Data for skills
export const SKILLS_DATA = [
  // Cybersecurity
  "SQL Injection",
  "XSS",
  "Command Injection",
  "Broken Access Control",
  "Malware Analysis",
  "Password Cracking",
  "Digital Forensics",
  "Vulnerability Analysis",
  "Cybersecurity Tools",
  "Problem Solving",
  "Network Security",
  "Linux",
  "Burp Suite",
  "Wireshark",
  "Nmap",
  "Metasploit",

  // Programming
  "Python",
  "JavaScript",

  // Web Development
  "WordPress",
  "Responsive Design",

  // Graphic Designing
  "Adobe Photoshop",
  "Adobe Illustrator",
  "Logo Design",
  "Poster Design",
  "Branding",

  // Additional Skills
  "Team Leadership",
  "Research & Analysis",
] as const;


// Owner name
export const OWNER_NAME = "Yousra";
