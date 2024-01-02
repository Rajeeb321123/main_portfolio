// separate hooks 


import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/active-section-context";
import { SectionName } from "./type";



export function useSectionInView( sectionName : SectionName, threshold = 0.75) {
      // to know what is in the view , very usefull from react-intersection-observer npm
      const {ref, inView } = useInView({
        // if 75% in view only then,
        threshold: threshold
    });
    const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

    // very imp: we dont want to set using external dependency  during render so we use useEffect 
    useEffect(() =>{
        // Date.now() - timeOfLastClick  > 1000 beacuse we want to disable observer intersection api and  animated moving of dark box from section to seciton while clicking for 1 sec
        if (inView && Date.now() - timeOfLastClick > 1000 ) {
            setActiveSection(sectionName)
        };
    },[inView, setActiveSection, timeOfLastClick, sectionName]);

    return{
        ref,
        inView
    }
}
