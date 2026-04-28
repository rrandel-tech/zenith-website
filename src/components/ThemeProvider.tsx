import { createContext, useContext, useEffect, useState, type ReactNode } from "react"

export type Theme = "light" | "dark"

export type ThemeContextType = {
    theme: Theme
    toggleTheme: () => void
}

const COOKIE_NAME = "theme"
const COOKIE_MAX_AGE = 60 * 60 * 24 * 365 // 1 year

function getCookieTheme(): Theme {
    const match = document.cookie.match(new RegExp(`(?:^|; )${COOKIE_NAME}=([^;]*)`))
    const value = match ? decodeURIComponent(match[1]) : null
    return value === "light" || value === "dark" ? value : "dark"
}

function setCookieTheme(theme: Theme) {
    document.cookie = `${COOKIE_NAME}=${theme}; max-age=${COOKIE_MAX_AGE}; path=/; SameSite=Lax`
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

type Props = {
    children: ReactNode
}

export default function ThemeProvider({ children }: Props) {
    const [theme, setTheme] = useState<Theme>(() => getCookieTheme())

    const toggleTheme = () => {
        setTheme((prev) => (prev === "dark" ? "light" : "dark"))
    }

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme)
        setCookieTheme(theme)
    }, [theme])

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = () => {
    const context = useContext(ThemeContext)
    if (!context) throw new Error("useTheme must be used within a ThemeProvider")
    return context
}