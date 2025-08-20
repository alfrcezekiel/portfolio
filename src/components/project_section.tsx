import ProjectPanel from "@/components/project_panel";

const ProjectSection = () => {
    return (
        <section id="projects" className="py-10">
            <h2 className="text-4xl md:text-5xl font-bold text-white font-mono text-center">
                Projects
            </h2>
            <div className="container mx-auto px-6 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch py-24">
                <ProjectPanel
                    side="left"
                    title="Clinic Management System"
                    description="The Clinic Management System is a web-based full-stack application designed to streamline and optimize clinic operations. It enables patients to conveniently schedule appointments online, reducing administrative workload and wait times. The system also facilitates the secure management of electronic health records (EHRs), ensuring accurate, efficient, and accessible patient information while minimizing the risks of human errors and data loss."
                    stack={[
                        "React",
                        "Node.js",
                        "Express.js",
                        "Bun.js",
                        "JavaScript",
                        "MySQL",
                        "Tailwind CSS"
                    ]}
                    liveURL="https://clinicmanagement.com"
                />
                <ProjectPanel
                    side="right"
                    title="WeIT: Online IT Esshential Shop"
                    description="Built a full-stack e-commerce platform focused on computer components and IT essentials, featuring product browsing, shopping cart management, and secure online checkout functionality."
                    stack={[
                        "Node.js",
                        "JavaScript",
                        "EJS",
                        "Bootstrap",
                        "Express.js",
                        "MySQL",
                    ]}
                    liveURL="https://weitessentialstore.com"
                />
                <ProjectPanel
                    side="left"
                    title="Hotel and Vacation Rentals System"
                    description="Designed and implemented a Java-based desktop application using Java Swing to manage hotel and vacation rental bookings. The system offers travelers an intuitive interface for browsing accommodations, viewing detailed hotel information, managing reservations, and completing secure check-in/check-out and payment transactions, while providing robust backend logic to ensure efficiency and reliability."
                    stack={[
                        "Java",
                        "MySQL",
                        "Java Swing Toolkit"
                    ]}
                    liveURL=""
                />
            </div>
        </section>
    )
}

export default ProjectSection