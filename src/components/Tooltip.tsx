import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import React from "react"

export default function TooltipButton({tooltip, delay = 0, children}:{tooltip: string, delay?: number, children: React.ReactNode}) {
    return (
        <TooltipProvider>
            <Tooltip delayDuration={delay}>
                <TooltipTrigger>{children}</TooltipTrigger>
                <TooltipContent>
                    <p>{tooltip}</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>

    )
}