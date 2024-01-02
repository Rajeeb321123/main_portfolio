"use client";

import React, { useEffect, useState, createContext, useContext } from "react";

type Theme = "light" | "dark";

type ThemeContextProviderProps = {
  children: React.ReactNode;
};

type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | null>(null);

export default function ThemeContextProvider({
  children,
}: ThemeContextProviderProps) {
    const [theme, setTheme] = useState<Theme>("light")

    const toggleTheme = () => {
        if (theme === 'light' ) {
            setTheme("dark");
            window.localStorage.setItem("theme", "dark");
            // we need to add it to class of dom as we need to check it for tailwind dark
            document.documentElement.classList.add('dark');
        }
        else {
            setTheme("light");
            window.localStorage.setItem("theme", "light");
            document.documentElement.classList.remove("dark");
        };
    }

    // when we interact with eternal sys like local storage we should useEffect
    useEffect(() => {
        const localTheme = window.localStorage.getItem('theme') as Theme | null;

        if (localTheme) {
            setTheme(localTheme);

            if (localTheme === 'dark'){
                document.documentElement.classList.add('dark');

            }

        }
        // getting the theme of pc or mobile
        else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
            setTheme("dark");
            document.documentElement.classList.add('dark');
        }
    },[]);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (context === null) {
    throw new Error("useTheme must be used within a ThemeContextProvider");
  }

  return context;
}