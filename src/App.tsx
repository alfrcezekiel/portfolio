import NavigationMenu from "@/components/navigation_menu";
import MainHeroSection from "@/components/main_hero_section";
import { useEffect } from "react"

const App = () => {
  useEffect(() => {
    document.title = "Kiel Portfolio";
  }, [])

  return (
    <>
      <div className="bg-linear-to-br from-black to-white min-h-dvh">
        <NavigationMenu />
        <MainHeroSection />
      </div>
    </>
  )
}

export default App
