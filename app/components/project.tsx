'use client';

import { projectsData } from "@/lib/data";
import { motion, useScroll, useTransform, useAnimationControls, AnimatePresence } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";
// import { ImYoutube2 } from "react-icons/im";
// import { DiGithubFull } from "react-icons/di";
import Image from "next/image";
import { useRef, useState } from "react";
// import Link from "next/link";
import ProjectMenu from "./projectmenu/projectMenu";
import { cn } from "@/lib/utils";

type ProjectProps = (typeof projectsData)[number] & { index: number }

export default function Project({
    title,
    description,
    tags,
    imageUrl,
    source_code_link,
    youtube_link,
    website_link,
    index
}: ProjectProps) {

    const [isProjectActive, setIsProjectActive] = useState(false);
    const ref = useRef<HTMLDivElement>(null);
    const controls = useAnimationControls();
    const controlsMobile = useAnimationControls();

    const { scrollYProgress } = useScroll({
        target: ref,

        // offset: [start, end]
        // 0 is for container: here viewport, 0 means bottom of viewport 
        // 1 is for target: here project(individual) , 1 means top of target
        // when bottom of container(viewport) reaches top of target(project)
        // 1.33 1 means bottom of viewport reaches 33 percent of target
        offset: ["0 1", "1.33 1"],
    });

    // to modify the scollYprogress to our liking. on 0 to 1 scrollYProgress, transform or scaling, opacity here start at 0.5 to 1
    const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1])
    const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1])


    return (
        <>
            <AnimatePresence mode="wait">
                {isProjectActive &&
                    <ProjectMenu
                        isProjectActive={isProjectActive} 
                        setIsProjectActive={setIsProjectActive}
                        title={title}
                        description={description}
                        tags ={tags}
                        imageUrl ={imageUrl}
                        source_code_link = {source_code_link ?? undefined}
                        youtube_link = {youtube_link ?? undefined}
                        website_link = {website_link ?? undefined}
                    />}
            </AnimatePresence>

            {/* // if something isnot smooth in framer motion just wrap everything in div and animate of that div */}
            <motion.div
                onClick={() => { setIsProjectActive(!isProjectActive) }}
                // onClick={() => controlsMobile.start({ y: 0, x: "0%", opacity: 1 })}
                // onHoverStart={() => controls.start({ y: 0, x: "0%", opacity: 1 })}
                // onHoverEnd={() => controls.start({ y: -100, x: "0%", opacity: 0 })}
                ref={ref}
                style={{
                    scale: scaleProgress,
                    opacity: opacityProgress
                }}
                className=" cursor-pointermb-3 sm:mb-8 group relative cursor-pointer "
            >

                <section
                    className={cn(' bg-gray-100 max-w-[42rem] border  borer-black/5  overflow-hidden  sm:pr-8 sm:h-[20rem] relative rounded-lg hover:bg-gray-200 transitionlast:mb-0 dark:text-white dark:bg-white/10 dark:hover:bg-white/20',
                        {
                            'pl-8': (index + 1) % 2 === 0
                        })}
                >
                    <div
                        className={cn('pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full ',
                            { 'sm:ml-[18rem]': (index + 1) % 2 === 0 }
                        )}
                    >

                        <h3
                            className='
                        text-2xl
                        font-semibold
                        '
                        >
                            {title}
                        </h3>
                        <p
                            className=' mt-2 leading-relaxed text-gray-700 dark:text-white/70'
                        >
                            {description}
                        </p>
                        <ul
                            className='
                        flex flex-wrap mt-4 gap-2 sm:mt-auto
                        '
                        >
                            {tags.map((tag, index) => (
                                <li
                                    className='
                                bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70
                                '
                                    key={index}
                                >
                                    {tag}
                                </li>
                            ))}
                        </ul>

                    </div>
                    <Image
                        src={imageUrl}
                        alt="project I worked on"
                        quality={90}
                        className={cn(' absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl transition  group-hover:scale-[1.04] group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2',
                            { 'group-hover:translate-x-3 group-hover:translate-y-3 group-hover:rotate-2 right-[initial] -left-40': (index + 1) % 2 === 0 }
                        )}
                    >

                    </Image>

                    {/* <motion.div
                        initial={{ y: -100, x: "0%", opacity: 0 }}
                        animate={controls}
                        transition={{
                            type: "spring",
                            stiffness: "380",
                            damping: 25,
                            duration: 1000
                        }}
                        className=" hidden sm:flex absolute top-0 ml-auto left-0 right-0 mr-auto justify-center items-center gap-4 "
                    >
                        {youtube_link !== '' && (
                            <Link
                                href={youtube_link}
                                target="_blank"
                            >
                                <ImYoutube2 className=" hover:cursor-pointer text-6xl text-[#CD201F]  focus:scale-110 hover:scale-110 active:scale-105" />
                            </Link>
                        )
                        }
                        <Link
                            href={source_code_link}
                            target="_blank"
                        >
                            <DiGithubFull className=" hover:cursor-pointer text-6xl  dark:text-[#f5f5f5] text-[#333] focus:scale-110 hover:scale-110 active:scale-105" />
                        </Link>
                        {website_link !== '' && (
                            <Link
                                href={website_link}
                                target="_blank"
                            >
                                <FiExternalLink className=" hover:cursor-pointer text-3xl   dark:text-[#f5f5f5] text-[#333] focus:scale-110 hover:scale-110 active:scale-105" />
                            </Link>

                        )}



                    </motion.div> */}
                    {/* <motion.div
                        initial={{ y: -100, x: "0%", opacity: 0 }}
                        animate={controlsMobile}
                        transition={{
                            type: "spring",
                            stiffness: "380",
                            damping: 25,
                            duration: 1000
                        }}
                        className=" sm:hidden absolute top-0 ml-auto left-0 right-0 mr-auto flex justify-center items-center gap-4 "
                    >
                        {youtube_link !== '' && (
                            <Link
                                href={youtube_link}
                                target="_blank"
                            >
                                <ImYoutube2 className=" hover:cursor-pointer text-6xl text-[#CD201F]  focus:scale-110 hover:scale-110 active:scale-105" />
                            </Link>
                        )
                        }
                        <Link
                            href={source_code_link}
                            target="_blank"
                        >
                            <DiGithubFull className=" hover:cursor-pointer text-6xl  dark:text-[#f5f5f5] text-[#333] focus:scale-110 hover:scale-110 active:scale-105" />
                        </Link>
                        {website_link !== '' && (
                            <Link
                                href={website_link}
                                target="_blank"
                            >
                                <FiExternalLink className=" hover:cursor-pointer text-3xl   dark:text-[#f5f5f5] text-[#333] focus:scale-110 hover:scale-110 active:scale-105" />
                            </Link>

                        )}
                    </motion.div> */}
                </section>
            </motion.div>
        </>
    )
}