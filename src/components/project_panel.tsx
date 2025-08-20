import TechBadge from "@/components/tech_badge";
import ScrollLink from "@/components/scroll_link";
import { Link } from "react-router-dom"
import { ExternalLink, FolderGit2, Mail} from "lucide-react"
interface ProjectPanelProps {
    side: "left" | "right";
    title: string;
    description: string;
    stack: string[];
    liveURL: string;
    gitHubURL: string;
}

const ProjectPanel = ({ side, title, description, stack, liveURL, gitHubURL }: ProjectPanelProps) => {
    return (
        <div
            className={`flex flex-col gap-5 p-8 rounded-2xl backdrop-blur-md border border-white/15 bg-gradient-to-br from-white/10 to-transparent shadow-xl 
                ${side === "left" ? "items-start text-left" : "items-start lg:items-end lg:text-right"}`}
        >
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white font-mono">
                {title}
            </h2>
            <p className="text-white/85 leading-relaxed max-w-prose">
                {description}
            </p>
            <div className={`flex gap-4 mt-2 flex-wrap ${side === "right" ? "justify-end" : ""}`}>
                {stack.map((s) => (
                    <TechBadge key={s} label={s} />
                ))}
            </div>
            <div className={`flex gap-4 mt-2 ${side === "right" ? "justify-end" : ""}`}>
                {liveURL && (
                    <Link
                        to={liveURL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 rounded-2xl bg-black text-white font-medium font-mono shadow hover:bg-white hover:text-black transition-colors duration-300"
                    >
                        <ExternalLink className="w-6 h-6" aria-hidden="true"/>
                    </Link>
                )}
                <Link 
                    to={gitHubURL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 rounded-2xl bg-black text-white font-medium font-mono shadow hover:bg-white hover:text-black transition-colors duration-300"
                >
                    <FolderGit2 className="w-6 h-6" aria-hidden="true"/>
                </Link>
                <ScrollLink
                    to="/"
                    targetId="contact"
                    className="px-6 py-3 rounded-2xl bg-black text-white font-medium shadow hover:bg-white hover:text-black transition-colors duration-300"
                >
                    <Mail className="w-6 h-6" aria-hidden="true"/>
                </ScrollLink>
            </div>
        </div>
    )
}

export default ProjectPanel;