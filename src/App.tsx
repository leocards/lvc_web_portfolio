import AboutMe from './AboutMe'
import Contact from './Contact'
import HomeSection from './Home'
import TopNavigation from './Navigations/Top'
import Projects from './Projects'
import Skills from './Skills'
import { ThemeProvider } from "@/components/theme-provider"

function App() {

    return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <TopNavigation />
            <HomeSection />
            <AboutMe />
            <Skills />
            <Projects />
            <Contact />
            <div className='py-4 text-center text-sm font-light mt-16 bg-slate-300 dark:bg-color'>
                © Copyright <span className='font-medium'>Leomas Cardenio</span> | All Rights Reserved
            </div>
        </ThemeProvider>
    )
}

export default App
