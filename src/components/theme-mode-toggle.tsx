import { Monitor, Moon, Sun } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { useTheme } from "@/components/theme-provider";

export function ModeToggle() {
    const { theme, setTheme } = useTheme();

    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button variant="outline" size="icon" className="ml-5 ">
                    <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                    {theme == 'dark' && <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />}
                    {theme == 'system' && <Monitor className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />}
                    <span className="sr-only">Toggle theme</span>
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-36 !-ml-[6.5rem] !p-0 !py-2">
                <div className="w-full">
                    <button onClick={() => setTheme("light")} className="hover:bg-slate-200 dark:hover:bg-slate-600/40 w-full py-1.5 px-2 text-left text-sm flex items-center justify-between">
                        Light
                        <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all text-color" />
                    </button>
                    <button onClick={() => setTheme("dark")} className="hover:bg-slate-200 dark:hover:bg-slate-600/40 w-full py-1.5 px-2 text-left text-sm flex items-center justify-between">
                        Dark
                        <Moon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all text-color" />
                    </button>
                    <button onClick={() => setTheme("system")} className="hover:bg-slate-200 dark:hover:bg-slate-600/40 w-full py-1.5 px-2 text-left text-sm flex items-center justify-between">
                        System
                        <Monitor className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all text-color" />
                    </button>
                </div>
            </PopoverContent>
        </Popover>
    );
}
