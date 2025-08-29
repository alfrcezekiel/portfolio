import ProjectPanel from "@/components/project_panel"
import clinicManagement from "@/assets/Clinic Management System.png"
import weit from "@/assets/WeIT.png"
import lingawMusicFest from "@/assets/Lingaw Music Fest.png"
import covidMonitor from "@/assets/Covid Monitor.png"
import hotelReservation from "@/assets/Hotel Reservation.png"
import travelEase from "@/assets/Travel Ease Web.png"
import hotelAndVacationRentals from "@/assets/Hotel and Vacation Rentals.png"

const ProjectSection = () => {
    return (
        <section id="projects" className="py-7 px-4 md:py-10 md:px-20 sm:px-2 sm:py-8 lg:px-4 lg:py-8">
            <h2 className="text-4xl lg:text-5xl md:text-5xl sm:text-5xl font-bold text-white font-mono text-center md:py-4 md:px-2 sm:px-4 sm:py-2 lg:px-5 lg:py-4 py-2 px-3">
                Projects
            </h2>
            <div className="container mx-auto px-6 py-18 lg:px-10 lg:py-18 sm:py-18 xl:py-14 xl:px-1 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
                <ProjectPanel
                    side="left"
                    title="Clinic Management System"
                    description="The Clinic Management System is a web-based full-stack application designed to streamline and optimize clinic operations. It enables patients to conveniently schedule appointments online, reducing administrative workload and wait times. The system also facilitates the secure management of electronic health records (EHRs), ensuring accurate, efficient, and accessible patient information while minimizing the risks of human errors and data loss."
                    stack={[
                        "React",
                        "Node.js",
                        "Express.js",
                        "Material UI",
                        "Bun.js",
                        "JavaScript",
                        "MySQL",
                        "Tailwind CSS"
                    ]}
                    img={clinicManagement}
                    liveURL="https://clinicmanagement.com"
                    gitHubURL="https://github.com/alfrcezekiel/Integrated-Clinic-Management-System"
                />
                <ProjectPanel
                    side="left"
                    title="WeIT: Online IT Esshential Shop"
                    img={weit}
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
                    gitHubURL="https://github.com/alfrcezekiel/WeIT"
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
                    img={hotelAndVacationRentals}
                    liveURL="https://hotelvacationrentals.com"
                    gitHubURL="https://github.com/alfrcezekiel/Hotel-and-Vacation-Rentals-System"
                />
                <ProjectPanel
                    side="left"
                    title="Lingaw Music Fest E-Commerce"
                    img={lingawMusicFest}
                    description="Built a web platform for Lingaw Music Fest, enabling event scheduling, ticket purchasing, and seat selection while featuring performances from top Filipino artists."
                    stack={[
                        "HTML",
                        "CSS"
                    ]}
                    liveURL="https://lingawmusicfest.com"
                    gitHubURL="https://github.com/alfrcezekiel/E-Commerce-Events"
                />
                <ProjectPanel
                    side="left"
                    title="Covid Monitor (GUI)"
                    description="Developed a Java-based GUI application using the Swing toolkit to manage and monitor patient health data during the COVID-19 pandemic. The system allows healthcare providers to register patients, track and categorize symptoms, and process symptom data to identify the type and severity of illness for efficient monitoring and decision-making."
                    stack={[
                        "Java",
                        "Java Swing Toolkit"
                    ]}
                    img={covidMonitor}
                    liveURL="https://covidmonitor.com"
                    gitHubURL="https://github.com/alfrcezekiel/CovidMonitor"
                />
                <ProjectPanel
                    side="left"
                    title="Travel Ease Web"
                    description="TravelEase is a modern e-commerce travel agency platform designed to simplify the booking experience for travelers. The system enables users to seamlessly search, compare, and book hotels and flights according to their preferences, providing a one-stop solution for travel planning."
                    stack={[
                        "PHP",
                        "MySQL",
                        "JavaScript",
                        "Bootstrap",
                        "HTML",
                        "CSS"
                    ]}
                    img={travelEase}
                    liveURL="https://travelease.com"
                    gitHubURL="https://github.com/alfrcezekiel/TravelEaseWeb"
                />
                <ProjectPanel
                    side="left"
                    title="Hotel Reservation"
                    description="Hotel Reservation is a full-stack e-commerce application that lets guests compare hotels, check rates, and manage bookings with easy check-in and check-out."
                    stack={[
                        "PHP",
                        "MySQL",
                        "JavaScript",
                        "Bootstrap",
                        "HTML",
                        "CSS"
                    ]}
                    img={hotelReservation}
                    liveURL="https://travelhotelreservation.com"
                    gitHubURL="https://github.com/alfrcezekiel/Hotel-Reservation"
                />
            </div>
        </section>
    )
}

export default ProjectSection