
import Image, { StaticImageData } from 'next/image'
import { motion } from 'framer-motion';
import { slide } from '../anim';

type ProjectContentMenuProps = {
    description: string,
    imageUrl: StaticImageData,
    youtube_link?: string,
}

export default function index({
    description, imageUrl, youtube_link
}: ProjectContentMenuProps) {
    return (
        <div
            className=' mx-[20px] py-5 grid grid-rows-2 lg:grid-cols-2  gap-10 '
        >
            <div
                className='ml-auto mr-auto lg:ml-0 lg:order-last grid-rows-1 lg:col-span-1 max-h-[300px] max-w-[300px] h-[300px] w-[300px] lg:h-[800px] lg:w-[400px] lg:max-h-[400px] lg:max-w-[800px]  relative '
            >
                <Image
                    alt=''
                    src={imageUrl}
                    fill
                    className='rounded-xl'
                />
            </div>
            <motion.div
                custom={2}
                variants={slide}
                initial="initial" animate="enter" exit="exit"
                className=' flex text-center text-md md:text-lg lg:text-left whitespace-normal grid-rows-1 lg:col-span-1 '
            >
                {description}

            </motion.div>
        </div>
    )
}
