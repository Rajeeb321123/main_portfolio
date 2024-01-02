import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import moruAi from "@/public/moru-ai.png";
// import texters from "@/public/texters.png";
import sunshinefly from "@/public/sunshinefly.png"
import movieInfo from "@/public/movieInfo.png";

export const links = [
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

export const experiencesData = [
  {
    title: "Javascript and React Full stack online course",
    location: "Online",
    description:
      " After 7 months of studying. I immediately found a internshipe as a full-stack developer.",

    // very imp : why not <LuGraduationCap/> beacuse it is data.ts file not tsx as we cannot write jsx file here
    icon: React.createElement(LuGraduationCap),
    date: "2022",
  },
  {
    title: "Full-stack Developer",
    location: "Moru Digital Wallet Pvt lTd",
    description:
      "I worked as a full-stack intern for 3 months Moru Digital Wallet Pvt Ltd. I primarily learnt about OpenAi, Llama2, and other things related to Ai with large Language model.",
    icon: React.createElement(CgWorkAlt),
    date: "2023 - present",
  },
  {
    title: "Freelancing Full stack Developer",
    location: "Kathmandu, Nepal",
    description:
      "I also started taking small projects from friends, and family. I also totally involved in daily basis on getting familiar with and using  new technologies to upskill myself",
    icon: React.createElement(FaReact),
    date: "2023 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Moru-Ai",
    description:
      " AI chatbot using OpenAi with features like real time data, memory, speech recognition and synthesis",
    tags: ["React", "Next.js", "MySQL", "OpenAi", "Tailwind", "Prisma", "PineCone.io", "ElevenLabs",],
    imageUrl: moruAi,
    source_code_link: "https://github.com/Rajeeb321123/Moru-ai",
    website_link: "",
    youtube_link: ""
  },
  {
    title: "Sunshine fly",
    description:
      "Airbnb clone with calender, reservaton, map.  ",
    tags: ["React", "TypeScript", "Next.js", "Mongodb", "Prisma", "Tailwind", "Cloudinary"],
    imageUrl: sunshinefly,
    source_code_link: "https://github.com/Rajeeb321123/SunshineFly-airbnbClone",
    website_link: "https://sunshinefly.vercel.app/",
    youtube_link: "https://youtu.be/NyT-cSqOCug",
  },
  {
    title: "MovieInfo",
    description:
      "Frontend Project to get information on any movie or series, trailers and cast memeber, trending & popular movie and series  wtih sorting",
    tags: ["React", "TDMB api", "SCSS","Redux"],
    imageUrl: movieInfo,
    source_code_link: "https://github.com/Rajeeb321123/movieInfo",
    website_link: "https://movie-info-kappa.vercel.app/",
    youtube_link: "https://youtu.be/e-HuBENJKiA",
  },
] 

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Express",
  "Three.js",
  "Node.js",
  "MySQL",
  "MongoDB",
  "Tailwind",
  "Prisma",
  "Redux",
  "Git",
  "Pusher",
  "Scoket.io",
  "SCSS",
  "WebRTC",
  "Vector Database",
  "OpenAI",
  "llama2",
  "Chatgpt 3.5 turbo",
  "Framer Motion",
  "trpc"
] as const;