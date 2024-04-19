import { Tabs } from "@/components/component"
import DrawerDialog from "@/components/Drawer"
import { ModeToggle } from "@/components/theme-mode-toggle"

export default function TopNavigation({activeTab, setActiveTab}: {activeTab: string, setActiveTab: (tab: string) => void}) {
    const scrollTo = (elementId: string, otherEvent?: boolean) => {
        const element = document.getElementById(elementId)
        if(otherEvent) {
            setTimeout(() => element?.scrollIntoView({
                behavior: 'smooth'
            }), 450)
        } else {
            element?.scrollIntoView({
                behavior: 'smooth'
            })
        }
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

            <DrawerDialog  onClick={scrollTo} />
            <ModeToggle />
        </nav>
    )
}