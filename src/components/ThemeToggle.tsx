import { useContext } from "react"
import { ThemeContext } from "@/components/ThemeProvider"

export default function ThemeToggle() {
    const context = useContext(ThemeContext)
    if (!context) throw new Error("useTheme must be used within a ThemeProvider")
    const { theme, toggleTheme } = context
    const isDark = theme === "dark"

    return (
        <button id="theme-toggle" type="button" onClick={toggleTheme} aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"} title={isDark ? "Light mode" : "Dark mode"} className="flex items-center justify-center w-9 h-9 rounded-lg bg-transparent text-light-subtext-0 hover:text-light-text hover:bg-light-surface-0 dark:text-dark-subtext-0 dark:hover:text-dark-text dark:hover:bg-dark-surface-0 focus:outline-none focus:ring-2 focus:ring-light-mauve/40 dark:focus:ring-dark-mauve/40 transition-colors duration-200 active:scale-95 md:ml-2">
            {!isDark ? (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8 8 0 1010.586 10.586z" />
                </svg>
            ) : (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" clipRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" />
                </svg>
            )}
        </button>
    )
}