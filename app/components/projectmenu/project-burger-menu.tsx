"use client"

import { cn } from "@/lib/utils";

type ProjectBurgerMenuProps = {
    isProjectActive: boolean,
    setIsProjectActive: React.Dispatch<React.SetStateAction<boolean>>,

}

export default function ProjectBurgerMenu({
    isProjectActive, setIsProjectActive }: ProjectBurgerMenuProps) {


    return (
        <div
            className="fixed right-0 p-1 group z-[999]"
        >
            <div
                onClick={() => {setIsProjectActive(!isProjectActive)}}
                className=" m-[20px]  bg-[#455CE9]  hover:scale-110 h-[40px] w-[40px] rounded-[50%]  flex items-center justify-center cursor-pointer group transition duration-200 hover:bg-red-400"
            >
                <div
                    className={cn(
                        " w-full after:content-[''] after:block after:w-[40%] after:bg-white after:h-px after:m-auto after:top-[-5px] after:relative before:content-[''] before:block before:w-[40%] before:bg-white before:h-px before:m-auto before:relative  before:top-[5px] after:transition-all before:transition-all before:duration-200 after:duration-200 hover:scale-110 group-hover:after:top-[-2px] group-hover:after:-rotate-45 group-hover:before:rotate-45 group-hover:before:top-0", 
      
                    )}
                >

                </div>
            </div>
        </div>
    )
}
