import ScrollLink from "@/components/scroll_link";
import { Link } from "react-router-dom"

interface FooterProps {
    variant?: "dark" | "light";
}

const Footer = ({ variant = "dark" }: FooterProps) => {
    const isDark = variant === "dark";
    const bg = isDark ? "bg-black" : "bg-white";
    const text = isDark ? "text-white" : "text-black";
    const subtext = isDark ? "text-neutral-400" : "text-neutral-600";
    const border = isDark ? "border-neutral-800" : "border-neutral-200";
    const link = isDark ? "hover:text-neutral-300" : "hover:text-neutral-700";

    return (
        <footer id="contact" className={`${bg} ${text} w-full border-t ${border}`}>
            <div className="mx-auto max-w-7xl px-6 py-12">
                <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
                    <div className="space-y-3">
                        <h3 className="text-2xl font-bold font-mono lg:px-3">Kiel Portfolio</h3>
                        <p className={`${subtext} text-base leading-relaxed sm:text-sm md:text-sm lg:text-sm lg:px-3 xl:text-sm`}>
                            Building clean, performant web experiences. Explore my work and get in touch.
                        </p>
                    </div>
                    <div>
                        <h4 className={`mb-4 text-sm uppercase tracking-wider ${subtext}`}>Quick Links</h4>
                        <ul className="space-y-2 text-sm">
                            <li className="px-2 font-mono">
                                <ScrollLink to="/" targetId="home" className={`${link} transition-colors`}>
                                    Home
                                </ScrollLink>
                            </li>
                            <li className="px-2 font-mono">
                                <ScrollLink to="/" targetId="about" className={`${link} transition-colors`}>
                                    About
                                </ScrollLink>
                            </li>
                            <li className="px-2 font-mono">
                                <ScrollLink to="/" targetId="projects" className={`${link} transition-colors`}>
                                    Projects
                                </ScrollLink>
                            </li>
                            <li className="px-2 font-mono">
                                <ScrollLink to="/" targetId="contact" className={`${link} transition-colors`}>
                                    Contact
                                </ScrollLink>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className={`mb-4 text-sm uppercase tracking-wider ${subtext}`}>Contact</h4>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <a href="https://mail.google.com/mail/?view=cm&amp;fs=1&amp;to=amoraelfricezekiel@gmail.com" target="_blank" className={`${link} transition-colors`}>
                                    amoraelfricezekiel@gmail.com
                                </a>
                            </li>
                            <li className={`${subtext}`}>Based in PH • Available for work</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className={`mb-4 text-sm uppercase tracking-wider ${subtext}`}>Social</h4>
                        <div className="flex items-center gap-4">
                            <Link
                                to="https://github.com/alfrcezekiel"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="GitHub"
                                className={`group ${link}`}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="h-6 w-6 transition-transform group-hover:-translate-y-0.5"
                                >
                                    <path d="M12 .5a12 12 0 0 0-3.79 23.4c.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.74.08-.74 1.2.09 1.83 1.23 1.83 1.23 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.34-5.47-5.96 0-1.32.47-2.4 1.24-3.25-.12-.3-.54-1.52.12-3.16 0 0 1.01-.32 3.3 1.24a11.5 11.5 0 0 1 6 0c2.29-1.56 3.3-1.24 3.3-1.24.66 1.64.24 2.86.12 3.16.77.85 1.24 1.93 1.24 3.25 0 4.63-2.8 5.66-5.48 5.96.43.37.81 1.1.81 2.22v3.29c0 .32.21.7.82.58A12 12 0 0 0 12 .5Z" />
                                </svg>
                            </Link>
                            <Link
                                to="https://www.linkedin.com/in/aelfric-ezekiel-amor-a28188318/"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="LinkedIn"
                                className={`group ${link}`}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="h-6 w-6 transition-transform group-hover:-translate-y-0.5"
                                >
                                    <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5ZM.5 8h4V24h-4V8Zm7.5 0h3.8v2.2h.05c.53-1.01 1.82-2.2 3.75-2.2 4.01 0 4.75 2.64 4.75 6.08V24h-4v-7.2c0-1.72-.03-3.93-2.4-3.93-2.4 0-2.77 1.87-2.77 3.8V24h-4V8Z" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className={`mt-10 flex flex-col items-center justify-between gap-4 border-t ${border} pt-6 sm:flex-row`}>
                    <p className={`${subtext} text-xs`}>© {new Date().getFullYear()} Kiel Portfolio. All rights reserved.</p>
                    <div className="flex items-center gap-4 text-xs">
                        <Link
                            to="/privacy"
                            className={`${subtext} ${link}`}>
                            Privacy
                        </Link>
                        <Link
                            to="/terms"
                            className={`${subtext} ${link}`}>
                            Terms
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
