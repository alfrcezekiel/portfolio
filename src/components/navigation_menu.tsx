import ScrollLink from "./scroll_link";

const NavigationMenu = () => {
    return (
        <>
            <nav className="p-4 flex items-center justify-between min-h-18" id="home">
                <div className="ml-100 block">
                    <ScrollLink to="/" targetId="home">
                        <h1 className="text-white text-2xl font-bold font-mono">
                            Kiel Portfolio
                        </h1>
                    </ScrollLink>
                </div>
                <div className="mr-110 block">
                    <ul className="flex items-center gap-4 list-none p-4 justify-center">
                        <li className="p-2 font-mono" >
                            <ScrollLink
                                to="/"
                                targetId="home"
                                className="text-white">
                                Home
                            </ScrollLink>
                        </li>
                        <li className="p-2 font-mono">
                            <ScrollLink
                                to="/"
                                targetId="about"
                                className="text-white">
                                About
                            </ScrollLink>
                        </li>
                        <li className="p-2 font-mono">
                            <ScrollLink
                                to="/"
                                targetId="projects"
                                className="text-white">
                                Projects
                            </ScrollLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default NavigationMenu;