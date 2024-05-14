import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import moruAi from "@/public/moru-ai.png";
// import texters from "@/public/texters.png";
import sunshinefly from "@/public/sunshinefly.png"
import tensorflow from "@/public/tensorflow.jpg"
import llama from "@/public/llama.jpg"
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
    title: "Machine Learning and Deep Learning courses",
    location: "Online",
    description:
      " I recently decided to switch my carrier to AI engineer. I have finished extensive machine learning online course on Udemy by Super DataScience team. So, I have almost finished Deep learning and am in the middle of Mathematical foundation courses provided ZTM online academy and Super DataScience Team. I have completed many real world project like food vision and Skimlit NLP project in the process with Deep learning (please check my GitHub repo on deep learning to check out my projects). I have some understanding and done projects and fine tunned on LLM (especially on Llama-3b-instruct) on my own custom dataset. I am planning to master reinforcement learning, Deep reinforcement learning, Deep Q learning in future. ➔ Please checmy GitHub to track my progress.",

    // very imp : why not <LuGraduationCap/> beacuse it is data.ts file not tsx as we cannot write jsx file here
    icon: React.createElement(LuGraduationCap),
    date: "2024",
  },
  {
    title: "Full-stack Developer",
    location: "Moru Digital Wallet Pvt lTd",
    description:
      "I worked as a full-stack intern for 3 months Moru Digital Wallet Pvt Ltd. I primarily learnt about OpenAi, Llama2, and other things related to Ai with large Language model.",
    icon: React.createElement(CgWorkAlt),
    date: "2023 - 2024",
  }
] as const;

export const projectsData = [
  {
    title: "Moru-Ai",
    description:
      " AI chatbot using OpenAi with features like real time data, memory, speech recognition and synthesis",
    tags: ["React", "Next.js", "MySQL", "OpenAi", "Tailwind", "Prisma", "PineCone.io", "ElevenLabs",],
    imageUrl: moruAi,
    source_code_link: "https://github.com/Rajeeb321123/AiChatBuddy",
    website_link: "",
    youtube_link: "https://www.youtube.com/watch?v=IfygDHf-vg0&ab_channel=RajeepThapa"
  },
  {
    title: "Food-Vision-101 & Skimlit NLP project",
    description:
      " I did these projects while doing my course on deep learning with Tensorflow by ZTM academy.",
    tags: ["Deep Learning", "NLP", "CNN", "RNN", "Tensorflow"],
    imageUrl: tensorflow,
    source_code_link:"https://github.com/Rajeeb321123/Deep-learning-tensorFlow-Journey",
    youtube_link: "",
    website_link: "",
  },
  {
    title: "HTML Feature extractor using Llama3-8b-instruct and Openllama-3b-v2",
    description:
      " I recently did this project for learing and fine tunning Large language model and Hugging Face.",
    tags: ["Llama3-8b", "Fine-Tuning", "Transformers", "HuggingFace"],
    imageUrl: llama,
    source_code_link:  "https://github.com/Rajeeb321123/Large-Language-model" ,
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
  "Python",
  "Machine & Deep learning",
  "Linear Regression ",
  "Classification ",
  "Mathematical Foundation",
  "TensorFlow ",
  "Recurrent Neural Network",
  "Convolution Neural Network",
  "Deep Natural Language processing",
  "Multi-Model Neural Network",
  "NumPy",
  "Padas",
  "Transfer Learning",
  "Hugging Face",
  "LLama3",
  "OpenAI",
  "Transformers",
  "Fine tunning",
  "Large Language model",
  "Vector Database",
  "OpenAI",
  "Chatgpt 3.5 turbo",
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
  "Framer Motion",
  "trpc"
] as const;