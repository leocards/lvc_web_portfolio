import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerTrigger,
} from "@/components/ui/drawer"
import { Menu } from "lucide-react"
import { Tabs } from "./component"

export default function DrawerDialog({ onClick }: {onClick: (arg: string, otherEvent: boolean) => void}) {
    return (
        <Drawer>
            <DrawerTrigger className="md:hidden ml-auto flex items-center justify-center p-2 rounded-full border-transparent border hover:border-color transition-all-150 hover:dark:bg-white/10 hover:bg-slate-400/15 hover:shadow group">
                <Menu size={24} className="group-hover:opacity-100 opacity-70 text-slate-500 dark:text-slate-200 transition-150" />
            </DrawerTrigger>

            <DrawerContent>
                <div className="my-4 mx-auto w-52 space-y-3">
                    <DrawerClose className="w-full" onClick={() => onClick('home', true)}>
                        <Tabs className="!py-3" as="div">Home</Tabs>
                    </DrawerClose>
                    <DrawerClose className="w-full" onClick={() => onClick('about', true)}>
                        <Tabs className="!py-3" as="div">About Me</Tabs>
                    </DrawerClose>
                    <DrawerClose className="w-full" onClick={() => onClick('skills', true)}>
                        <Tabs className="!py-3" as="div">Skills</Tabs>
                    </DrawerClose>
                    <DrawerClose className="w-full" onClick={() => onClick('projects', true)}>
                        <Tabs className="!py-3" as="div">Project</Tabs>
                    </DrawerClose>
                    <DrawerClose className="w-full" onClick={() => onClick('contact', true)}>
                        <Tabs className="!py-3" as="div">Contact</Tabs>
                    </DrawerClose>
                </div>
            </DrawerContent>
        </Drawer>
    )
}