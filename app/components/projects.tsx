"use client"

import React from "react"
import SectionHeading from './section-heading'
import { projectsData } from '@/lib/data'
import Project from "./project"

import { useSectionInView } from "@/lib/hooks"


export default function Projects() {

    const { ref } = useSectionInView('Projects', 0.5);

    return (
        <section
            ref={ref}
            className='scroll-mt-28 mb-28 sm:mb-40'
            id="projects"
        >
            <SectionHeading>
                My Latest Projects
            </SectionHeading>
            <div>
                {
                    projectsData.map((project, index) => (
                        <React.Fragment key={index}>
                            <Project index={index} {...project} />
                        </React.Fragment>
                    ))
                }
            </div>
        </section>
    )
}


