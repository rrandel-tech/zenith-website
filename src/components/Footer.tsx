import { NavLink } from "react-router-dom";

export default function Footer() {
    const links = [
        { to: "/about", label: "About" },
        { to: "/docs", label: "Docs" },
        { to: "/roadmap", label: "Roadmap" },
        { to: "/license", label: "License" },
        { to: "/privacy-policy", label: "Privacy Policy" },
        { to: "/code-of-conduct", label: "Code of Conduct" },
        { to: "/contact", label: "Contact" },
        { to: "/download", label: "Download" },
        { to: "/blog", label: "Blog" },
        { to: "/showcase", label: "Showcase" },
        { to: "/features", label: "Features" },
    ];

    return (
        <footer className="bg-dark-crust">
            <div className="mx-auto max-w-md overflow-hidden px-4 py-12 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
                <nav className="-mx-5 -my-2 flex flex-wrap justify-center" aria-label="Footer">
                    {links.map(({ to, label }) => (
                        <div key={to} className="px-5 py-2">
                            <NavLink to={to} className="text-base text-dark-subtext-0 hover:text-dark-text">
                                {label}
                            </NavLink>
                        </div>
                    ))}
                    <div className="px-5 py-2">
                        <a href="https://github.com/rrandel-tech/Zenith" target="_blank" rel="noreferrer" className="text-base text-dark-subtext-0 hover:text-dark-text">
                            Source Code
                        </a>
                    </div>
                </nav>

                <div className="mt-8 flex justify-center space-x-6">
                    <a href="https://github.com/rrandel-tech/Zenith" target="_blank" rel="noreferrer" className="text-dark-subtext-0 hover:text-dark-text">
                        <span className="sr-only">GitHub</span>
                        <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" fill="currentColor">
                            <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                        </svg>
                    </a>

                    <a href="https://bsky.app/" target="_blank" rel="noreferrer" className="text-dark-subtext-0 hover:text-dark-text">
                        <span className="sr-only">Bluesky</span>
                        <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" fill="currentColor">
                            <path d="M407.8 294.7c-3.3-.4-6.7-.8-10-1.3 3.4.4 6.7.9 10 1.3zM288 227.1C261.9 176.4 190.9 81.9 124.9 35.3 61.6-9.4 37.5-1.7 21.6 5.5 3.3 13.8.0 41.9.0 58.4S9.1 194 15 213.9c19.5 65.7 89.1 87.9 153.2 80.7 3.3-.5 6.6-.9 10-1.4-3.3.5-6.6 1-10 1.4-93.9 14-177.3 48.2-67.9 169.9C220.6 589.1 265.1 437.8 288 361.1c22.9 76.7 49.2 222.5 185.6 103.4 102.4-103.4 28.1-156-65.8-169.9-3.3-.4-6.7-.8-10-1.3 3.4.4 6.7.9 10 1.3 64.1 7.1 133.6-15.1 153.2-80.7C566.9 194 576 75 576 58.4s-3.3-44.7-21.6-52.9c-15.8-7.1-40-14.9-103.2 29.8C385.1 81.9 314.1 176.4 288 227.1z" />
                        </svg>
                    </a>

                    <a href="https://discord.gg" target="_blank" rel="noreferrer" className="text-dark-subtext-0 hover:text-dark-text">
                        <span className="sr-only">Discord</span>
                        <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" fill="currentColor">
                            <path d="M524.5 69.8a1.5 1.5 0 00-.8-.7A485.1 485.1 0 00404.1 32a1.8 1.8 0 00-1.9.9 337.5 337.5 0 00-14.9 30.6 447.8 447.8 0 00-134.4 0 309.5 309.5 0 00-15.1-30.6 1.9 1.9 0 00-1.9-.9A483.7 483.7 0 00116.1 69.1a1.7 1.7 0 00-.8.7C39.1 183.7 18.2 294.7 28.4 404.4a2 2 0 00.8 1.4A487.7 487.7 0 00176 479.9a1.9 1.9 0 002.1-.7 348.2 348.2 0 0030-48.8 1.9 1.9 0 00-1-2.6 321.2 321.2 0 01-45.9-21.9 1.9 1.9 0 01-.2-3.1c3.1-2.3 6.2-4.7 9.1-7.1a1.8 1.8 0 011.9-.3c96.2 43.9 200.4 43.9 295.5 0a1.8 1.8 0 011.9.2c2.9 2.4 6 4.9 9.1 7.2a1.9 1.9 0 01-.2 3.1 301.4 301.4 0 01-45.9 21.8 1.9 1.9 0 00-1 2.6 391.1 391.1 0 0030 48.8 1.9 1.9 0 002.1.7 486 486 0 00147.2-74.1 1.9 1.9 0 00.8-1.4c12.2-126.7-20.6-236.8-87-334.5zm-302 267.8c-29 0-52.8-26.6-52.8-59.2s23.4-59.3 52.8-59.3c29.7 0 53.3 26.8 52.8 59.2 0 32.7-23.4 59.3-52.8 59.3zm195.4 0c-29 0-52.8-26.6-52.8-59.2s23.3-59.3 52.8-59.3c29.7 0 53.3 26.8 52.8 59.2 0 32.7-23.2 59.3-52.8 59.3z" />
                        </svg>
                    </a>
                </div>

                <p className="mt-8 text-center text-base text-dark-subtext-0">
                    © 2026 Robert Randel. All rights reserved.
                    <br />
                    Website built using{" "}
                    <a href="https://vite.dev/" className="hover:text-dark-text">Vite</a>
                    {", "}
                    <a href="https://tailwindcss.com/" className="hover:text-dark-text">Tailwind</a>
                    {", "}
                    <a href="https://react.dev/" className="hover:text-dark-text">React</a>
                    {", "}
                    <a href="https://www.typescriptlang.org/" className="hover:text-dark-text">TypeScript</a>
                    .
                </p>
            </div>
        </footer>
    );
}