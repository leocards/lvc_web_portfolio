import React from 'react'
import {
    Card,
    CardContent,
} from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { BlueGradient, GreenGradient } from './component'

interface GridProps {
    children: React.ReactNode,
    columns?: number,
    className?: string
}

const Grid = (props: GridProps) => {

    const column = {
        auto: "grid-cols-[repeat(auto-fill,minmax(17rem,1fr))]",
        1: "grid-cols-1 max-w-80 mx-auto",
        2: "grid-cols-[repeat(auto-fill,minmax(17rem,1fr))] max-w-[40rem] mx-auto gap-4",
    }[props.columns??'auto']

    return <div className={cn("grid", column, props.className)}>
        {props.children}
    </div>
}

type Colors = 'green' | 'blue'

interface GridCardProps extends React.HTMLAttributes<HTMLElement> {
    children: React.ReactNode,
    contentClass?: string,
    className?: string,
    gradient?: Colors
}

export const GridCard = ({ children, contentClass, className, gradient = 'blue', ...props }: GridCardProps) => {
    return <div className="p-2">
        <Card {...props} className={cn("h-72 relative", className)}>
            <CardContent className={cn(
                "overflow-hidden",
                contentClass
            )}>
                {children}
            </CardContent>

            { gradient === 'green' && <GreenGradient /> }
            { gradient === 'blue' && <BlueGradient /> }

            <div className="absolute sm:ml-32 sm:w-[15rem] -inset-x-8 top-0 h-px bg-color [mask-image:linear-gradient(to_right,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
            <div className="absolute z-10 h-[15rem] -top-5 right-0 border-l border-color dashed"></div>
            <div className="absolute z-10 w-[17rem] -left-10 bottom-0 h-px bg-color [mask-image:linear-gradient(to_right,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
            <div className="absolute h-[15rem] -bottom-5 border-l border-color dashed"></div>
        </Card>
    </div>
}


export default Grid