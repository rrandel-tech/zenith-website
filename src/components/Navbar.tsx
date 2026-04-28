import { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo256 from '@/assets/Zenith_Logo256.png'
import ThemeToggle from "@/components/ThemeToggle.tsx";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <header className="top-0 z-50 w-full border-b border-dark-surface-0 bg-dark-crust text-dark-text md:sticky">
            <div className="mx-auto flex max-w-full flex-col px-4 md:flex-row md:items-center md:justify-between md:px-6 lg:px-8">
                <div className="flex flex-row items-center justify-between p-4">
                    <NavLink to="/" className="group flex transition duration-1000 ease-in-out">
                        <img src={Logo256} className="h-9 w-9 transition-opacity group-hover:opacity-50 group-focus:opacity-70" alt="Zenith Engine Logo"/>

                        <div className="ml-3 mt-1 text-xl font-black uppercase tracking-tight text-dark-text transition-colors group-hover:text-dark-subtext-1">
                            Zenith Engine
                        </div>
                    </NavLink>

                    <button type="button" className="rounded-lg text-dark-text md:hidden focus:outline-none focus:shadow-outline" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Main navigation" aria-controls="menuItems">
                        <svg fill="currentColor" viewBox="0 0 20 20" className="h-6 w-6">
                            {!open ? (
                                <path fillRule="evenodd" clipRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"/>
                            ) : (
                                <path fillRule="evenodd" clipRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"/>
                            )}
                        </svg>
                    </button>
                </div>

                <nav id="menuItems" className={`grow flex-col pb-4 md:flex md:flex-row md:justify-end md:pb-0 ${open ? "flex" : "hidden"}`}>
                    {["Docs", "Download", "Features", "Blog", "Showcase"].map((item) => (
                        <NavLink key={item} className="mt-2 rounded-lg px-4 py-2 text-sm font-semibold text-dark-text hover:bg-dark-surface-0 hover:text-dark-mauve focus:bg-dark-surface-1 focus:text-dark-mauve focus:outline-none md:ml-4 md:mt-0" to={`/${item.toLowerCase()}`} title={item}>
                            {item}
                        </NavLink>
                    ))}

                    <ThemeToggle/>
                </nav>
            </div>
        </header>
    );
}