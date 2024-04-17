import { Tabs } from "@/components/component"
import DrawerDialog from "@/components/Drawer"
import { ModeToggle } from "@/components/theme-mode-toggle"
import { useState } from "react"

export default function TopNavigation() {

    const [activeTab, setActiveTab] = useState('home')

    const scrollTo = (id: string) => {
        const element = document.getElementById(id)
        element?.scrollIntoView({
            behavior: 'smooth'
        })
    }

    return (
        <nav className="h-14 w-full flex items-center px-4 z-50 backdrop-blur-2xl fixed top-0">
            <div className="w-11 h-11 rounded-full absolute bg-blue-700 text-white font-bold text-xl after:content-['LC'] 
            after:ml-2.5 after:mt-2 after:absolute " />
            <div className="hidden md:flex items-center justify-center h-full w-fit ml-auto gap-4 dark:text-white">
                <Tabs className={``} active={activeTab == 'home'} onClick={() => {scrollTo("home"); setActiveTab('home')}}>Home</Tabs>
                <Tabs className={``} active={activeTab == 'about'} onClick={() => {scrollTo("about"); setActiveTab('about')}}>About Me</Tabs>
                <Tabs className={``} active={activeTab == 'skills'} onClick={() => {scrollTo("skills"); setActiveTab('skills')}}>Skills</Tabs>
                <Tabs className={``} active={activeTab == 'projects'} onClick={() => {scrollTo("projects"); setActiveTab('projects')}}>Projects</Tabs>
                <Tabs className={``} active={activeTab == 'contact'} onClick={() => {scrollTo("contact"); setActiveTab('contact')}}>Contact</Tabs>
            </div>

            <DrawerDialog />
            <ModeToggle />
        </nav>
    )
}