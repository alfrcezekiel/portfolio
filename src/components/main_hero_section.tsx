import ScrollLink from "@/components/scroll_link";
import AboutMe from "@/assets/image.jpg";

const MainHeroSection = () => {
    return (
        <>
            <section className="w-full min-h-[60vh] flex items-center py-16 sm:py-20 lg:py-32">
                <div className="container mx-auto px-4 sm:px-6 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                    <div className="flex flex-col gap-6 p-0 sm:p-4">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white font-mono">
                            Hi, I'm <span className="text-white font-mono">Kiel</span>
                        </h1>
                        <p className="text-lg text-white min-w-md font-mono">
                            I'm  a passionate <span className="font-semibold text-white font-mono">Full Stack Developer</span> constantly learning new technologies and API's and seeking oppurtunities to grow my skills and experiences in real-world projects.
                        </p>
                        <div className="flex gap-4 mt-4">
                            <ScrollLink
                                to="/"
                                targetId="projects"
                                className="px-6 py-3 rounded-2xl bg-black text-white font-medium shadow hover:bg-white hover:text-black transition-colors duration-300"
                            >
                                View Projects
                            </ScrollLink>
                            <ScrollLink
                                to="/"
                                targetId="contact"
                                className="px-6 py-3 rounded-2xl bg-black text-white font-medium shadow hover:bg-white hover:text-black transition-colors duration-300"
                            >
                                Contact Me
                            </ScrollLink>
                        </div>
                    </div>
                    <div className="flex justify-center lg:justify-end">
                        <img
                            src={AboutMe}
                            alt="About Me"
                            className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover shadow-lg"
                        />
                    </div>
                </div>
            </section>
        </>
    )
}

export default MainHeroSection;