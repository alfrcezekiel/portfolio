import NavigationMenu from "@/components/navigation_menu";
import MainHeroSection from "@/components/main_hero_section";
import { useEffect } from "react"
import ProjectSection from "@/components/project_section";
import Footer from "@/components/footer";

const App = () => {
  useEffect(() => {
    document.title = "Kiel Portfolio";
  }, [])

  return (
    <>
      <div className="bg-gradient-to-br from-black overflow-hidden to-white min-h-dvh">
        <NavigationMenu />
        <MainHeroSection />
      </div>
      <div className=" bg-black min-w-full min-h-dvh">
        <ProjectSection />
      </div>
      <Footer variant="dark" />
    </>
  )
}

export default App
