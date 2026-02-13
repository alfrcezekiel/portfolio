import NavigationMenu from "@/components/navigation_menu";
import MainHeroSection from "@/components/main_hero_section";
import { useEffect } from "react"
import ProjectSection from "@/components/project_section";
import Footer from "@/components/footer";
import AboutSection from "@/components/about_section";
import { ThemeProvider } from "@/context/theme-context";

const App = () => {
  useEffect(() => {
    document.title = "Aelfric Ezekiel Amor";
  }, [])

  return (
    <ThemeProvider>
      <div className="bg-gradient-to-br from-black overflow-hidden to-white min-h-dvh">
        <NavigationMenu />
        <MainHeroSection />
      </div>
      <div className=" bg-black min-w-full min-h-dvh">
        <AboutSection />
        <ProjectSection />
      </div>
      <Footer />
    </ThemeProvider>
  )
}

export default App
