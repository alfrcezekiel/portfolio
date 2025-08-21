import ScrollLink from "@/components/scroll_link";
import AboutMe from "@/assets/image.jpg";

const MainHeroSection = () => {
    return (
        <>
            <section className="w-full min-h-[80dvh] flex items-center py-14 md:py-24 sm:py-20 lg:py-32 max-sm:px-4">
                <div className="container mx-auto px-4 sm:px-6 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                    <div className="flex flex-col gap-6 p-0 sm:p-3 md:p-4">
                        <div className="space-y-3 sm:space-y-4 md:space-y-6">
                            <h1 className="text-2xl sm:text-4xl md:text-4xl font-bold text-white font-mono max-md:text-3xl">
                                Hi, I'm <span className="text-white font-mono">Kiel</span>
                            </h1>
                            <p className="text-base sm:text-sm md:text-2xl lg:text-2xl xl:text-lg text-white font-mono max-md:text-base">
                                I'm  a passionate <span className="font-semibold text-white font-mono">Full Stack Developer</span> constantly learning new technologies and API's and seeking oppurtunities to grow my skills and experiences in real-world projects.
                            </p>
                        </div>
                        <div className="flex sm:flex-wrap md:flex-wrap sm:justify-center lg:justify-start flex-wrap gap-3 sm:gap-4 md:gap-4 mt-3 sm:mt-4 md:mt-6 max-sm:justify-center">
                            <ScrollLink
                                to="/"
                                targetId="projects"
                                className="px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 rounded-2xl bg-black text-white font-medium shadow hover:bg-white hover:text-black transition-colors duration-300 text-sm sm:text-base cursor-pointer"
                            >
                                View Projects
                            </ScrollLink>
                            <ScrollLink
                                to="/"
                                targetId="contact"
                                className="px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 rounded-2xl bg-black text-white font-medium shadow hover:bg-white hover:text-black transition-colors duration-300 text-sm sm:text-base cursor-pointer"
                            >
                                Contact Me
                            </ScrollLink>
                        </div>
                    </div>
                    <div className="flex justify-center sm:justify-center md:justify-center max-sm:justify-center lg:justify-center">
                        <img
                            src={AboutMe}
                            alt="About Me"
                            className="w-64 h-64 sm:w-80 sm:h-80 md:w-80 md:h-80 rounded-full object-cover shadow-lg"
                        />
                    </div>
                </div>
            </section>
        </>
    )
}

export default MainHeroSection;