import { useState } from 'react'
import AboutMe from './AboutMe'
import Contact from './Contact'
import HomeSection from './Home'
import TopNavigation from './Navigations/Top'
import Projects from './Projects'
import Skills from './Skills'
import { ThemeProvider } from "@/components/theme-provider"

function App() {
    const [activeTab, setActiveTab] = useState('home')

    return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <TopNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
            <HomeSection onView={(inView) => {
                if(inView) {
                    setActiveTab('home')
                }
            }} />
            <AboutMe onView={(inView) => {
                if(inView) {
                    setActiveTab('about')
                }
            }} />
            <Skills onView={(inView) => {
                if(inView) {
                    setActiveTab('skills')
                }
            }} />
            <Projects onView={(inView) => {
                if(inView) {
                    setActiveTab('projects')
                }
            }} />
            <Contact onView={(inView) => {
                if(inView) {
                    setActiveTab('contact')
                }
            }} />
            <div className='py-4 text-center text-sm font-light mt-16 bg-slate-300 dark:bg-color'>
                © Copyright <span className='font-medium'>Leomas Cardenio</span> | All Rights Reserved
            </div>
        </ThemeProvider>
    )
}

export default App
