'use client'

import { useTheme } from '@/context/theme-context';
import React, { useEffect, useState } from 'react'
import { BsMoon, BsSun } from 'react-icons/bs'

type Theme = "light" | "dark";

export default function ThemeSwitch() {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            className='
            fixed bottom-5 right-5 bg-[#FDB813]/70 w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border-2 border-[#FDB813]/40 border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950 dark:border-white dark:border
            '
            onClick={toggleTheme}
        >   
            {theme === "light" ? <BsSun /> : <BsMoon />}

        </button>
    )
}
