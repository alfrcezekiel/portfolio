import { useState } from "react";
import ScrollLink from "@/components/scroll_link";
import { Link } from "react-router-dom";
import Resume from "@/assets/AelfricEzekielAmor.pdf"
import { ThemeToggle } from "@/components/theme-toggle";

const NavigationMenu = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <nav className="w-full fixed top-0 left-0 right-0 z-50 bg-black/70 backdrop-blur-md supports-[backdrop-filter]:bg-black/60 border-b border-white/10 shadow-sm" id="home">
                <div className="container mx-auto px-4 sm:px-6 lg:px-20 py-4 flex items-center justify-between">
                    <ScrollLink to="/" targetId="home" className="cursor-pointer">
                        <h1 className="text-white text-xl sm:text-2xl font-bold font-mono">
                            Kiel Portfolio
                        </h1>
                    </ScrollLink>

                    {/* Mobile toggle */}
                    <button
                        className="lg:hidden inline-flex flex-col justify-center items-center gap-1 p-2 rounded-md border border-white/20 text-white hover:bg-white/10 focus:outline-none cursor-pointer"
                        aria-label="Toggle navigation menu"
                        aria-expanded={open}
                        onClick={() => setOpen((v) => !v)}
                    >
                        <span className={`block h-0.5 w-6 bg-white transition-transform ${open ? "translate-y-1.5 rotate-45" : ""}`}></span>
                        <span className={`block h-0.5 w-6 bg-white transition-opacity ${open ? "opacity-0" : "opacity-100"}`}></span>
                        <span className={`block h-0.5 w-6 bg-white transition-transform ${open ? "-translate-y-1.5 -rotate-45" : ""}`}></span>
                    </button>

                    {/* Desktop menu */}
                    <ul className="hidden lg:flex items-center gap-6 list-none">
                        <li className="p-2 font-mono">
                            <ScrollLink to="/" targetId="home" className="text-white cursor-pointer">
                                Home
                            </ScrollLink>
                        </li>
                        <li className="p-2 font-mono">
                            <ScrollLink to="/" targetId="about" className="text-white cursor-pointer">
                                About
                            </ScrollLink>
                        </li>
                        <li className="p-2 font-mono">
                            <ScrollLink to="/" targetId="projects" className="text-white cursor-pointer">
                                Projects
                            </ScrollLink>
                        </li>
                        <li className="p-2 font-mono">
                            <ScrollLink to="/" targetId="contact" className="text-white cursor-pointer">
                                Contact
                            </ScrollLink>
                        </li>
                        <li className="p-2 font-mono">
                            <Link
                                to={Resume}
                                target="_blank"
                                className="text-white cursor-pointer hover:text-white/80 flex items-center gap-2"
                                title="View Resume"
                            >
                                Resume
                            </Link>
                        </li>
                        <li className="p-2 font-mono cursor-pointer">
                            <ThemeToggle className="h-9 w-9" />
                        </li>
                    </ul>
                </div>

                {/* Mobile menu panel */}
                <div className={`lg:hidden transition-[max-height] duration-300 overflow-hidden ${open ? "max-h-78" : "max-h-0"}`}>
                    <ul className="flex flex-col gap-2 px-4 sm:px-6 lg:px-20 pb-4 list-none">
                        <li className="p-2 font-mono">
                            <ScrollLink to="/" targetId="home" className="text-white cursor-pointer" onClick={() => setOpen(false)}>
                                Home
                            </ScrollLink>
                        </li>
                        <li className="p-2 font-mono">
                            <ScrollLink to="/" targetId="about" className="text-white cursor-pointer" onClick={() => setOpen(false)}>
                                About
                            </ScrollLink>
                        </li>
                        <li className="p-2 font-mono">
                            <ScrollLink to="/" targetId="projects" className="text-white cursor-pointer" onClick={() => setOpen(false)}>
                                Projects
                            </ScrollLink>
                        </li>
                        <li className="p-2 font-mono">
                            <ScrollLink to="/" targetId="contact" className="text-white cursor-pointer" onClick={() => setOpen(false)}>
                                Contact
                            </ScrollLink>
                        </li>
                        <li className="p-2 font-mono">
                            <Link
                                to={Resume}
                                target="_blank"
                                className="text-white cursor-pointer hover:text-white/80 flex items-center gap-2"
                                title="View Resume"
                                onClick={() => setOpen(false)}
                            >
                                Resume
                            </Link>
                        </li>
                        <li className="p-2 font-mono cursor-pointer">
                            <ThemeToggle className="h-9 w-9" isMobile={true}/>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default NavigationMenu;