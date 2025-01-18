import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import moruAi from "@/public/moru-ai.png";
import nepaliGpt from "@/public/Nepali_gpt.png";
import sunshinefly from "@/public/sunshinefly.png"
import tensorflow from "@/public/tensorflow.jpg"
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
    title: "Geneartive Ai engineer",
    location: " Princelab Pvt ltd. Kathmandu, Nepal",
    description:
      "Previously, I have worked 5 months as Generative Ai Engineer in Princelab private limited. I extensive knowledge of Transformer architecture, it's finetuning, pretraining, RAG, inference. I have undertaken complex task on the field of Ai. For example, teaching large language models a new language like Nepali.",

    // very imp : why not <LuGraduationCap/> beacuse it is data.ts file not tsx as we cannot write jsx file here
    icon: React.createElement(LuGraduationCap),
    date: "2024-2025",
  },
  {
    title: "Machine Learning and Deep Learning courses",
    location: "Online",
    description:
      " I recently decided to pursue my passion of Data science and Artificial Intelligence. I have finished extensive machine learning online course on Udemy by Super DataScience team. I have also completed Deep learning Tensorflow course by ZTM academy and I am in the middle of Mathematical foundation course bySuper DataScience Team. I have completed many real world project like Nepali GPT (training open source model to understand new language), food vision and Skimlit NLP project in the process with Deep learning (please check my GitHub repo on deep learning to check out my projects). I have some understanding and done projects and fine tunned on LLM (especially on transformer architecture) on my own custom dataset. I am planning to master reinforcement learning, Deep reinforcement learning, Deep Q learning in future. ➔ Please checmy GitHub to track my progress.",

    // very imp : why not <LuGraduationCap/> beacuse it is data.ts file not tsx as we cannot write jsx file here
    icon: React.createElement(LuGraduationCap),
    date: "2024",
  },
  {
    title: "Full-stack Intern",
    location: "Moru Digital Wallet Pvt lTd",
    description:
      "I worked as a full-stack Nextjs intern for 5 months Moru Digital Wallet Pvt Ltd. I primarily learnt about Nextjs, Reactjs, Nodejs, Mongodb, MySQL, SQL, OpenAi, langchain ,vector database other things related to Web Development and Ai.",
    icon: React.createElement(CgWorkAlt),
    date: "2023 - 2024",
  }
] as const;

export const projectsData = [
  {
    title: "Nepali GPT v2",
    description:
      "Nepali Ai Chat model trained using unsloth, LoRA, peft with process of Pretraining, finetuning and later preference alignment",
    tags: ["Generative Ai","fine-tunning", "LoRA", "unsloth",],
    imageUrl: nepaliGpt,
    source_code_link: "https://github.com/Rajeeb321123/Generative_Ai_tranformers/blob/master/14_pretraining_llm_using_unsloth.ipynb",
    website_link: "",
    youtube_link: "https://youtu.be/W9zTxTxByMw"
  },
  {
    title: "Moru-Ai",
    description:
      " RAG AI chatbot using OpenAi with features like real time data, memory, speech recognition and synthesis",
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
  "NumPy",
  "Padas",
  "Machine & Deep learning",
  "Linear algebra",
  "Calculus",
  "Linear Regression ",
  "Classification ",
  "Mathematical Foundation of Ai & Data science",
  "TensorFlow ",
  "Recurrent Neural Network",
  "Convolution Neural Network",
  "Deep Natural Language processing",
  "Multi-Model Neural Network",
  "Transfer Learning",
  "Hugging Face",
  "Transformers",
  "Fine tunning",
  "Large Language model",
  "Retrieval Augmented Generation",
  "Vector Database",
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "SQL",
  "MongoDB",
  "Tailwind",
  "Git",

] as const;