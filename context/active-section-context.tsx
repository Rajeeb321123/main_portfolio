"use client";

import { useState, createContext, useContext } from "react";
import type { SectionName } from "@/lib/type";


type ActiveSectionContextProviderProps = {
    children: React.ReactNode
};

type ActiveSectionContextType = {
    activeSection: SectionName;
    setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
    timeOfLastClick: number;
    setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
}

// we are giving null as default value if we are trying to access of outside the wrapper
const ActiveSectionContext = createContext< ActiveSectionContextType | null >(null);

export default function ActiveSectionContextProvider({
    children,
}: ActiveSectionContextProviderProps) {
    const [activeSection, setActiveSection] = useState<SectionName>('Home');
    
    //we dont want shuttering or lagging effect in header while we move from different pages at distance in header due to react intersection obeserver 
    const [timeOfLastClick, setTimeOfLastClick] = useState(0);

    return (
        <ActiveSectionContext.Provider
            // value to pass
            value={{
                activeSection,
                setActiveSection,
                timeOfLastClick,
                setTimeOfLastClick,
            }}
        >
            {children}
        </ActiveSectionContext.Provider>
    )
}


// custom hook for dealing with  null value of ActiveSectionContext 
export function useActiveSectionContext() {
    const context = useContext(ActiveSectionContext);

    if ( context === null ) {
        throw new Error(
            "useActiveSectionContext must be used within an ActiveSectionContextProvider"
        );
    };

    return context;
}
