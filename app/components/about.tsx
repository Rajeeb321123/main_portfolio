"use client";

import SectionHeading from "./section-heading"
import { motion } from "framer-motion";
import {useSectionInView} from "@/lib/hooks";

export default function About() {
    const { ref } = useSectionInView('About', 0.9);


    return (
        <motion.section
            ref={ref}
            initial={{ opacity:0, y: 100 }}
            animate = {{ opacity: 1, y:0 }}
            transition={{ delay: 0.525 }}
            className="
            mb-28 max-w-[45rem] text-center leading-8 sm:mb-40
            scroll-mt-28
            "
            id="about"
        >
            <SectionHeading>
                About me
            </SectionHeading>
            <p
                className="mb-3"
            >
                After graduating with a degree in{" "}
                <span className="font-medium">Computer Engineering</span>, I decided to pursue my
                passion for programming. I start taking course in coding & problem solving and learned{" "}
                <span className="font-medium">full-stack web development</span>.{" "}
                <span className="italic">My favorite part of programming</span> is the
                problem-solving aspect. I <span className="underline">love</span> the
                feeling of finally figuring out a solution to a problem. My core stack
                is{" "}
                <span className="font-medium">
                    React, Next.js, TypeScript, Node.js, and MongoDB or MySQL
                </span>
                . I am also familiar with Prisma, Mongoose ODM. I am always looking to
                learn new technologies. I am currently looking for a{" "}
                <span className="font-medium">full-time position</span> as a software
                developer.
            </p>
            <p>
                <span className="italic">When I'm not coding</span>, I enjoy playing
                video games, watching movies, and playing with my dog. I also enjoy{" "}
                <span className="font-medium">learning new things</span>. I am currently
                learning about{" "}
                <span className="font-medium">AI and space and Quantum Mechanics </span>. I 've also started to learn playing guitar.
            </p>
        </motion.section>
    )
}
