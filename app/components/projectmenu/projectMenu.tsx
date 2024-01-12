
import { motion } from 'framer-motion';
import {menuSlide} from './anim'
import Curve from './Curve/curve';
import ProjectBurgerMenu from './project-burger-menu';
import ProjectHeader from './ProjectHeader/projectheader';
import { projectsData } from '@/lib/data';
import ProjectContent from './ProjectContent/projectcontent';
import ProjectMenuFooter from './projectmenufooter/ProjectMenuFooter';




type ProjectMenuProps = (typeof projectsData)[number] & {
  isProjectActive: boolean,
  setIsProjectActive: React.Dispatch<React.SetStateAction<boolean>>,
}

export default function index({ 
  isProjectActive, 
  setIsProjectActive ,
  title,
  description,
  tags,
  imageUrl,
  source_code_link,
  youtube_link,
  website_link,
}:ProjectMenuProps) {




  return (
    <motion.div variants={menuSlide} initial="initial" animate="enter" exit="exit" className=" z-40   backdrop-blur-md bg-[rgb(41,41,41)]/50 fixed right-0 top-0 bottom-0 text-white w-[90vw] flex flex-col">
      <ProjectBurgerMenu isProjectActive={isProjectActive} setIsProjectActive={setIsProjectActive} />
      <div className=" flex-1 lg:p-[100px] overflow-hidden">
        <ProjectHeader title={title}/>
        <ProjectContent 
          description={description}
          imageUrl={imageUrl}
        />

       
        {/* FOOTER */}
      </div>
      <div
        className='lg:px-[100px] p-1 mx-[20px] w-auto  mb-20 md:mb-[20px]'
      >

        <ProjectMenuFooter
          website_link={website_link }
          source_code_link={source_code_link}
          youtube_link={youtube_link}
        />

      </div>
      
      <Curve />
    </motion.div>
  )
}