import TechBadge from "@/components/tech_badge";
import AboutMe from "@/assets/image.jpg";

interface AboutSectionProps {
    variant?: "dark" | "light";
    className?: string;
}

const AboutSection = ({ variant = "dark", className }: AboutSectionProps) => {
    const isDark = variant === "dark";
    const bg = isDark ? "bg-black" : "bg-white";
    const text = isDark ? "text-white/80" : "text-black";
    const subtext = isDark ? "text-white/80" : "text-neutral-700";
    const panel = isDark ? "backdrop-blur-md border border-white/10 bg-gradient-to-br from-white/5 to-transparent" :
        "backdrop-blur-md border border-black/10 bg-gradient-to-br from-black/5 to-transparent";
    const techStack: string[] = [
        "JavaScript",
        "HTML",
        "CSS",
        "React",
        "TypeScript",
        "Node.js",
        "Github",
        "Docker",
        "Material UI",
        "Express.js",
        "SQL",
        "MySQL",
        "Git",
        "Tailwind CSS",
        "PHP",
        "Python",
        "Postman",
        "Apidog",
        "Java"
    ]

    return (
        <>
            <section id="about" className={`${bg} ${text} w-full py-16 md:py-24 ${className}`}>
                <div className="container mx-auto px-4 sm:px-6 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                    <div className={`rounded-2xl p-6 sm:p-8 ${panel} shadow-xl`}>
                        <div className="space-y-4 sm:space-y-6">
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight font-mono">About Me</h2>
                            <p className={`${subtext} text-sm sm:text-base leading-relaxed max-w-prose`}>
                                I'm Kiel, a passionate <span className="font-semibold">Full Stack Developer</span> with a strong background in software development and a deep understanding of the latest technologies. With a keen eye for detail and a commitment to delivering high-quality results, I am dedicated to creating innovative and user-friendly solutions that meet the needs of my clients and users.
                            </p>
                            <p className={`${subtext} text-sm sm:text-base leading-relaxed max-w-prose`}>
                                Currently based in Iloilo City, Philippines. I enjoy working across the stack-from crafting accessible interfaces to implementing robust
                                backend services and data models. I value strong engineering fundamentals,  thoughtful UX, and maintainable code.
                            </p>
                            <p className={`${subtext} text-sm sm:text-base leading-relaxed max-w-prose`}>
                                I'm always looking for new opportunities to learn and grow, and I'm excited to work with talented individuals who share my passion for technology.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-6">
                        <div className={`rounded-2xl p-4 sm:p-6 flex items-center justify-center ${panel} shadow-xl`}>
                            <img
                                src={AboutMe}
                                alt="Portrait of Me"
                                className="w-48 h-48 sm:w-60 sm:h-60 md:w-72 md:h-72 rounded-2xl object-cover shadow-lg"
                            />
                        </div>
                        <div className={`rounded-2xl p-6 sm:p-8 ${panel}`}>
                            <h3 className="text-xl sm:text-2xl font-semibold font-mono mb-4">Tech Stack</h3>
                            <div className="flex flex-wrap gap-3">
                                {techStack.map((tech) => (
                                    <TechBadge
                                        key={tech}
                                        label={tech}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutSection;