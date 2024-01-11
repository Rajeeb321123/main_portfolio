// Intro section
'use client';

import Image from "next/image";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";
import { Suspense } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs"
import { BsDownload } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks"
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Intro() {
    
    const { ref } = useSectionInView('Home', 0.5);
    const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

    return (
        <section
            ref={ref}
            // VVV imp: scroll-mt[100rem] is for scroll to section when we click on navbar or header and 100rem means scroll to somewhere middle
            className="mb-8 max-w-[50rem] text-center scroll-mt-[100rem] "
            id="home"
        >
            <div
                className="
                flex items-center justify-center
                cursor-pointer
                "
            >

                <div
                    className="absolute w-full z-5 "
                >
                    <Canvas>
                        <Suspense
                            fallback={null}>
                            <OrbitControls enableZoom={false} />
                            <ambientLight intensity={1} />
                            <directionalLight position={[3, 2, 1]} />
                            <Sphere args={[1, 100, 200]} scale={2.7}>
                                <MeshDistortMaterial
                                    color="white"
                                    attach="material"
                                    distort={0.4}
                                    speed={2}
                                    transparent={true}
                                    opacity={0.7}
                                />
                            </Sphere>
                        </Suspense>
                    </Canvas>
                </div>
                <div
                    className="
                    pointer-events-none
                    z-10
                    relative
                    "
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            type: "tween",
                            duration: 0.7
                        }}
                    >

                        <Image
                            src="/myPhoto.png"
                            alt="Rajeeb Potrait"
                            width='192'
                            height='192'
                            quality="95"
                            
                            priority={true}
                            className="h-24 w-24 rounded-full border-[0.35rem] object-cover shadow-xl shadow-black "
                        />
                    </motion.div>
                    <motion.span
                        className="
                        absolute text-2xl
                        top-1/2 translate-y-1/3
                        left-1/2 -translate-x-1/2
                        whitespace-nowrap
                        "
                        initial={{ x: "-50%", opacity: 0, scale: 0 }}
                        animate={{ x: "-50%", opacity: 1, scale: 1 }}
                        transition={{
                            type: "spring",
                            delay: 0.3,
                            duration: 1.0,
                            stiffness: 125
                        }}
                    >
                        😁👋
                    </motion.span>
                </div>
            </div>

            <motion.h1
                className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    duration: 0.4,
                }}
            >
                <span className="font-bold">Hello, I'm Rajeeb.</span> I'm a{" "}
                <span className="font-bold">full-stack developer</span> with{" "}
                <span className="font-bold">1 years</span> of experience. I enjoy
                building <span className="">sites & apps</span>. My focus is{" "}
                <span className=" bg-blue-400 rounded text-white px-2">React (Next.js)</span>.
            </motion.h1>

            <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0.1,
                    duration: 0.4,
                }}
                className="
                flex flex-col sm:flex-row justify-center gap-2 px-4 
                text-lg font-medium
                "
            >   <div
                className="
                bg-orange-600/80 rounded-lg
                outline-none
                focus:scale-110
                hover:scale-110 hover:bg-orange-600
                active:scale-105
                transition
                "
            >

                    <Link
                        href="#contact"
                        className="
                        bg-[#ffffff33] text-white
                        px-7 py-3 
                        flex items-center gap-2
                        rounded-lg
                        borderBlack
                        backdrop-blur-sm
                        group
                        "
                        onClick={() => {
                            setActiveSection("Contact");
                            // we dont want shutter in header while moving dark box from one section to another so we disable 
                            // we setting the time to latest so we can do math in each like about , home ....
                            setTimeOfLastClick(Date.now())
                        } }
                    >
                        Contact me here <BsArrowRight className="opacity-70 group-hover:translate-x-full transition duration-500" />
                    </Link>
                </div>

                <div
                    className="
                    bg-black/10 rounded-lg
                    outline-none
                    focus:scale-110
                    hover:scale-110 
                    active:scale-105
                    transition
                    "
                >

                    <a
                        className="
                        bg-[#ffffff33] text-gray-950
                        px-7 py-3 
                        flex items-center gap-2
                        rounded-lg
                        borderBlack
                        backdrop-blur-sm
                        group
                        dark:text-white
                        "
                        href="/CV.pdf"
                        download
                    >
                        Download CV <BsDownload className="opacity-60 group-hover:translate-y-2 transition duration-500 dark:text-white" />
                    </a>
                </div>

                <div
                    className="flex flex-row gap-2 items-center justify-center"
                >

                    <div
                        className="
                        bg-[#0072b1]/90 
                        w-full
                        flex items-center gap-2
                        rounded-lg
                        borderBlack
                        outline-none
                        focus:scale-110
                        hover:scale-110 hover:bg-[#0072b1]
                        active:scale-105
                        transition
                        "
                    >

                    <a
                        className="
                        p-3 w-full
                        flex items-center gap-2
                        rounded-lg
                        bg-[#ffffff33] text-white
                        borderBlack
                        backdrop-blur-sm
                        group
                        "
                        target="_blank"
                        href="https://www.linkedin.com/in/rajeebchhetri321/">
                        LinkedIn<BsLinkedin className="group-hover:scale-125 transition duration-500" />
                    </a>
                    </div>
                    <div
                        className="
                        w-full
                        flex items-center gap-2
                        rounded-lg
                        bg-[#171515]/90 
                        border-black/10
                        outline-none
                        focus:scale-110
                        hover:scale-110 hover:bg-[#171515]
                        active:scale-105
                        transition
                        "
                    >
                        <a
                        className="
                        p-3 w-full
                        flex items-center gap-2
                        bg-[#ffffff33] text-white
                        rounded-lg
                        border-black
                        backdrop-blur-sm
                        group
                    "
                        target="_blank"
                        href="https://github.com/Rajeeb321123">
                        GitHub<FaGithubSquare className="group-hover:scale-125 transition duration-500" />
                    </a>
                    </div>
                    
                </div>
            </motion.div>

            <motion.div
                className="
                mt-8
                sm:mt-8
                "
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity:1, y: 0 }}
                transition={{ delay:0.125,  duration: 0.4 }}
            >
                <div className='w-full flex justify-center items-center'>

                    <a href='#about'>

                        {/* we have made capsule like circle using tailwind */}
                        <div className='w-[35px] h-[64px] rounded-3xl border-4 border-black/50 dark:border-white/50 flex justify-center items-start p-2 group'>

                            {/*from  Framer motion  */}
                            <motion.div
                                animate={{
                                    // move 24 pixel up and down
                                    y: [0, 24, 0],
                                }}

                                // how transition look like
                                transition={{
                                    duration: 3.5,
                                    repeat: Infinity,
                                    repeatType: "loop",
                                }}
                                // making roundball using tailwind css
                                // using motion to animate to ball up and down
                                className='w-3 h-3 rounded-full bg-blue-400 mb-1 group-hover:bg-red-400'
                            />
                        </div>
                    </a>
                </div>
            </motion.div>
        </section>
    )
}
