import { motion } from 'framer-motion';
import { slide } from '../anim';

export default function index({ title }: { title: string }) {
  return (
    <motion.h1
      custom={1}
      variants={slide}
      initial="initial" animate="enter" exit="exit"
      className="p-1 m-[20px] w-auto"
    >
      <span className='block w-full text-5xl text-center lg:text-left  font-semibold sm:font-extrabold drop-shadow-lg pointer-events-none'>
        {title}
      </span>

    </motion.h1>
  )
}
