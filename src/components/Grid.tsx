import React from 'react'
import {
    Card,
    CardContent,
} from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface GridProps {
    children: React.ReactNode,
    columns?: number,
    className?: string
}

const Grid = (props: GridProps) => {

    const column = {
        auto: "grid-cols-[repeat(auto-fill,minmax(17rem,1fr))]",
        1: "grid-cols-1 max-w-80 mx-auto",
        2: "grid-cols-2 max-w-[40rem] mx-auto",
    }[props.columns??'auto']

    return <div className={cn("grid", column, props.className)}>
        {props.children}
    </div>
}

interface GridCardProps extends React.HTMLAttributes<HTMLElement> {
    children: React.ReactNode,
    contentClass?: string,
    className?: string
}

export const GridCard = ({ children, contentClass, className, ...props }: GridCardProps) => {
    return <div className="p-2">
        <Card {...props} className={cn("h-72 relative", className)}>
            <CardContent className={cn(
                "overflow-hidden",
                contentClass
            )}>
                {children}
            </CardContent>
            <div className="absolute bottom-full left-24 -mb-px flex h-8 items-end overflow-hidden">
                <div className="flex -mb-px h-[2px] w-32 sm:w-56">
                    <div className="w-full flex-none blur-sm [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"></div>
                    <div className="-ml-[100%] w-full flex-none blur-[1px] [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0)_100%)]"></div>
                </div>
            </div>
            <div className="absolute -left-10 -bottom-8 h-8 overflow-hidden">
                <div className="flex -mt-px dark:-mt-0.5 h-[2px] dark:h-[4px] w-56 -scale-x-100">
                    <div className="w-full flex-none blur-sm [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"></div>
                    <div className="-ml-[100%] w-full flex-none blur-[1px] [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0)_67.19%,rgba(236,72,153,0)_100%)]"></div>
                </div>
            </div>

            <div className="absolute ml-32 w-[15rem] -inset-x-8 top-0 h-px bg-color [mask-image:linear-gradient(to_right,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
            <div className="absolute z-10 h-[15rem] -top-5 right-0 border-l border-color dashed"></div>
            <div className="absolute z-10 w-[17rem] -left-16 bottom-0 h-px bg-color [mask-image:linear-gradient(to_right,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
            <div className="absolute h-[15rem] -bottom-5 border-l border-color dashed"></div>
        </Card>
    </div>
}

export default Grid