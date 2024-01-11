
import { FiExternalLink, FiGithub, FiYoutube } from "react-icons/fi";

type Footerprop = {
    website_link: string,
    source_code_link: string,
    youtube_link: string,
}
const ProjectMenuFooter = ({ website_link, source_code_link, youtube_link }: Footerprop) => {
    return (
        <footer className="  text-white relative">


            <div className="flex items-center justify-center gap-10">
                {(youtube_link !== "") && (<div>
                    <a
                        className="
                        p-3 w-full
                        flex items-center gap-2
                        bg-black text-white
                        rounded-lg
                        border-black
                        backdrop-blur-sm
                        group
                        hover:text-blue-500
                        hover:shadow-md
                        hover:shadow-pink-500
                    "
                        target="_blank"
                        href={youtube_link}>
                        Youtube<FiYoutube className=" h-6 w-6 group-hover:scale-125 transition duration-500" />
                    </a>
                </div>
                )}
                {(source_code_link !== "") && (<div>
                    <a
                        className="
                        p-3 w-full
                        flex items-center gap-2
                        bg-black text-white
                        rounded-lg
                        border-black
                        backdrop-blur-sm
                        group
                        hover:text-blue-500
                        hover:shadow-md
                        hover:shadow-pink-500
                        
                    "
                        target="_blank"
                        href={source_code_link}>
                        GitHub<FiGithub className=" h-6 w-6 group-hover:scale-125 transition duration-500" />
                    </a>
                </div>
                )}
                {(website_link !== "") && (<div>
                    <a
                        className="
                        p-3 w-full
                        flex items-center gap-2
                        bg-black text-white
                        rounded-lg
                        border-black
                        backdrop-blur-sm
                        group
                        hover:text-blue-500
                        hover:shadow-md
                        hover:shadow-pink-500
                    "
                        target="_blank"
                        href={website_link}>
                        LiveDemo<FiExternalLink className=" h-6 w-6 group-hover:scale-125 transition duration-500" />
                    </a>
                </div>
                )}

            </div>

        </footer>
    );
};

export default ProjectMenuFooter;