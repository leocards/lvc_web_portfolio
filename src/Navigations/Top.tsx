import { Tabs } from "@/components/component"
import DrawerDialog from "@/components/Drawer"
import { ModeToggle } from "@/components/theme-mode-toggle"

export default function TopNavigation() {
    return (
        <nav className="h-14 w-full flex items-center px-4 z-50 backdrop-blur-2xl fixed top-0">
            <div className="w-11 h-11 rounded-full absolute bg-blue-700 text-white font-bold text-xl after:content-['LC'] 
            after:ml-2.5 after:mt-2 after:absolute " />
            <div className="hidden md:flex items-center justify-center h-full w-fit ml-auto gap-4 dark:text-white">
                <Tabs className={``} active>Home</Tabs>
                <Tabs className={``}>About Me</Tabs>
                <Tabs className={``}>Skills</Tabs>
                <Tabs className={``}>Projects</Tabs>
                <Tabs className={``}>Contact</Tabs>
            </div>

            <DrawerDialog />
            <ModeToggle />
        </nav>
    )
}