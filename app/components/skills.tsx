'use client'

import React from 'react';
import SectionHeading from './section-heading';
import { skillsData } from '@/lib/data';
import { useSectionInView } from "@/lib/hooks";
import { motion } from 'framer-motion';

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  // if you want normal without indiviual delay
  // animate: {
  //   opacity: 1,
  //   y: 0,
  //   transition:{
  //     delay: 0.05
  //   }
  // }

  //for individual delay , index is passed as we used custom below
  animate : (index: number) => {
    return {
      opacity: 1,
      y: 0,
      transition:{
        delay: 0.05 * index
      }
    }
  }
}

export default function Skills() {
  const { ref } = useSectionInView('Skills',0.5);

  return (
    <section
      ref={ref}
      className='
      mb-28 max-w-[53rem] 
      scroll-mt-28 
      text-center sm:mb-40'
      id="skills"
    >
        <SectionHeading>
            My Skills
        </SectionHeading>
        <ul
          className='
          flex flex-wrap justify-center gap-2
          text-lg text-gray-800
          '
        >
          {
            skillsData.map((skill, index) => (
              <motion.li
                className='
                bg-white border border-black/[0.1] rounded-xl
                py-3 px-5 dark:bg-white/10 dark:text-white/80
                '
                key={index}
                variants={fadeInAnimationVariants}
                initial="initial"
                // animate only in view
                whileInView="animate"
                // animate only once
                viewport={{
                  once: true,
                }}
                // passing the index so we have different delay for each
                custom={index}

              >
                {skill}
              </motion.li>
            ))
          }
        </ul>
    </section>
  )
}
