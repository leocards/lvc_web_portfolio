import React, { HTMLAttributes } from "react"
import { TabProps } from "../utility/componentProps"

export const Tabs: React.FC<TabProps> = ({ children, className, active = false, as = "button", ...props}) => (
    as == 'button' ?
        <button {...props} type="button" className={`h-full group relative transition-150 text-sm font-medium px-3.5 py-2 uppercase ${className}`}>
            <div className={`${!active?'opacity-70 group-hover:opacity-100':'opacity-100'}`}>
                {children}
            </div>
            <div className={`absolute -inset-x-8 bottom-0 h-0.5 bg-blue-900/15 [mask-image:linear-gradient(to_right,transparent,white_4rem,white_calc(100%-4rem),transparent)] 
                ${!active?'group-hover:block hidden dark:bg-sky-600/40':'dark:bg-sky-400/70'}`}></div>
        </button> :

        <div {...props.onClick} className={`h-full opacity-70 hover:opacity-100 group relative transition-150 text-sm font-medium px-3.5 py-2 uppercase cursor-pointer ${className}`}>
            <div className={`${!active?'opacity-70 group-hover:opacity-100':'opacity-100'}`}>
                {children}
            </div>
            <div className={`absolute -inset-x-8 bottom-0 h-0.5 bg-blue-900/15 [mask-image:linear-gradient(to_right,transparent,white_4rem,white_calc(100%-4rem),transparent)] 
                ${!active?'group-hover:block hidden dark:bg-sky-600/40':'dark:bg-sky-400/70'}`}></div>
        </div>
)

export const GreenGradient = () =>{
    return (
        <>
            <div className="absolute bottom-full right-10 sm:left-24 -mb-px flex h-8 items-end overflow-hidden">
                <div className="flex -mb-px h-[2px] w-32 xs:w-44 sm:w-56">
                    <div className="w-full flex-none blur-sm bg-gradient-to-r from-transparent via-green-500 to-transparent"></div>
                    <div className="-ml-[100%] w-full flex-none blur-[1px] bg-gradient-to-r from-transparent via-green-500 to-transparent"></div>
                </div>
            </div>
            <div className="absolute -left-4 -bottom-8 h-8 overflow-hidden">
                <div className="flex -mt-px dark:-mt-0.5 h-[2px] dark:h-[4px] w-56 -scale-x-100">
                    <div className="w-full flex-none blur-sm bg-gradient-to-r from-transparent via-green-500 to-transparent"></div>
                    <div className="-ml-[100%] w-full flex-none blur-[1px] bg-gradient-to-r from-transparent via-green-500 to-transparent"></div>
                </div>
            </div>
        </>
    )
}

export const BlueGradient = () => {
    return (
        <>
            <div className="absolute bottom-full  right-10 sm:left-24 -mb-px flex h-8 items-end overflow-hidden">
                <div className="flex -mb-px h-[2px] w-32 xs:w-44 sm:w-56">
                    <div className="w-full flex-none blur-sm [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"></div>
                    <div className="-ml-[100%] w-full flex-none blur-[1px] [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0)_100%)]"></div>
                </div>
            </div>
            <div className="absolute -left-4 -bottom-8 h-8 overflow-hidden">
                <div className="flex -mt-px dark:-mt-0.5 h-[2px] dark:h-[4px] w-56 -scale-x-100">
                    <div className="w-full flex-none blur-sm [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"></div>
                    <div className="-ml-[100%] w-full flex-none blur-[1px] [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0)_100%)]"></div>
                </div>
            </div>
        </>
    )
}

export const ProjectTechBG = (props: HTMLAttributes<HTMLDivElement>) => 
    <div {...props} 
        className="absolute bottom-4 left-4 z-20 bg-white/50 dark:bg-gray-400/70 rounded-md backdrop-blur flex gap-2 px-1 py-0.5 border border-slate-300/70 dark:border-white/50"
    >
        {props.children}
    </div>