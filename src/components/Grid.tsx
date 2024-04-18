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
        <Card {...props} className={cn("h-72 overflow-hidden !bg-white/60 dark:!bg-[#181A1E]", className)}>
            <CardContent className={cn(
                "",
                contentClass
            )}>
                {children}
            </CardContent>
        </Card>
    </div>
}

export default Grid