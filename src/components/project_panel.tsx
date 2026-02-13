import TechBadge from "@/components/tech_badge";
import ScrollLink from "@/components/scroll_link";
import { Link } from "react-router-dom"
import { ExternalLink, FolderGit2, Mail } from "lucide-react"
import { useTheme } from "@/context/use-theme";

interface ProjectPanelProps {
    side: "left" | "right";
    title: string;
    description: string;
    stack: string[];
    liveURL: string;
    gitHubURL: string;
    img?: string;
}

const ProjectPanel = ({ side, title, description, stack, liveURL, gitHubURL, img }: ProjectPanelProps) => {
    const { isDark } = useTheme();
    const themeStyles = {
        container: isDark
            ? "border-white/15 bg-gradient-to-br from-white/10 to-transparent"
            : "border-gray-200 bg-white/80",
        text: {
            primary: isDark ? "text-white" : "text-gray-900",
            secondary: isDark ? "text-white/85" : "text-gray-700",
        },
        button: isDark
            ? "bg-black text-white hover:bg-white hover:text-black"
            : "bg-gray-800 text-white hover:bg-gray-700",
    };

    const handleLiveURLClick = (e: React.MouseEvent<HTMLAnchorElement>, url: string) => {
        if (url === "") {
            e.preventDefault();
            alert("No URL link provided");
        }
    }

    return (
        <div
            className={`flex flex-col gap-5 p-8 rounded-2xl backdrop-blur-md border ${themeStyles.container} shadow-xl
                ${side === "left" ? "items-start text-left" : "items-start lg:items-end lg:text-right"}`}
        >
            <h2 className={`text-3xl md:text-4xl lg:text-4xl font-extrabold tracking-tight ${themeStyles.text.primary} font-mono text-wrap`}>
                {title}
            </h2>
            <div className="p-2">
                <img src={img} alt={title} className="w-full h-auto rounded-3xl object-cover" />
            </div>
            <p className={`text-sm ${themeStyles.text.secondary} leading-relaxed max-w-prose italic lg:text-base lg:${themeStyles.text.secondary} sm:${themeStyles.text.secondary} md:${themeStyles.text.secondary} md:text-lg xl:text-lg`}>
                {description}
            </p>
            <div className={`flex gap-4 mt-2 flex-wrap items-center ${side === "right" ? "justify-end" : ""}`}>
                {stack.map((s) => (
                    <TechBadge key={s} label={s} />
                ))}
            </div>
            <div className={`flex gap-4 mt-2 flex-wrap lg:flex-nowrap md:flex-wrap items-center justify-center ${side === "right" ? "justify-end" : ""}`}>
                {liveURL && liveURL.trim() !== "" ? (
                    <Link
                        to={liveURL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`px-6 py-3 rounded-2xl ${themeStyles.button} font-medium font-mono shadow hover:bg-white hover:text-black transition-colors duration-300 ${!liveURL ? 'opacity-50' : ''}`}
                    >
                        <ExternalLink className="w-6 h-6" aria-hidden="true" />
                    </Link>
                ) : (
                    <Link
                        to="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => handleLiveURLClick(e, liveURL)}
                        className={`px-6 py-3 rounded-2xl ${themeStyles.button} font-medium font-mono shadow hover:bg-white hover:text-black transition-colors duration-300 ${!liveURL ? 'opacity-50' : ''}`}
                    >
                        <ExternalLink className="w-6 h-6" aria-hidden="true" />
                    </Link>
                )}
                <Link
                    to={gitHubURL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`px-6 py-3 rounded-2xl ${themeStyles.button} font-medium font-mono shadow hover:bg-white hover:text-black transition-colors duration-300`}
                >
                    <FolderGit2 className="w-6 h-6" aria-hidden="true" />
                </Link>
                <ScrollLink
                    to="/"
                    targetId="contact"
                    className={`px-6 py-3 rounded-2xl ${themeStyles.button} font-medium shadow hover:bg-white hover:text-black transition-colors duration-300`}
                >
                    <Mail className="w-6 h-6" aria-hidden="true" />
                </ScrollLink>
            </div>
        </div>
    )
}

export default ProjectPanel;