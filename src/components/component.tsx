import React from "react"
import { TabProps } from "../utility/componentProps"

export const Tabs: React.FC<TabProps> = ({ children, className, active = false, as = "button" }) => (
    as == 'button' ?
        <button type="button" className={`h-full group relative transition-150 text-sm font-medium px-3.5 py-2 uppercase ${className}`}>
            <div className={`${!active?'opacity-70 group-hover:opacity-100':'opacity-100'}`}>
                {children}
            </div>
            <div className={`absolute -inset-x-8 bottom-0 h-0.5 bg-blue-900/15 [mask-image:linear-gradient(to_right,transparent,white_4rem,white_calc(100%-4rem),transparent)] 
                ${!active?'group-hover:block hidden dark:bg-sky-600/40':'dark:bg-sky-400/70'}`}></div>
        </button> :

        <div className={`h-full opacity-70 hover:opacity-100 group relative transition-150 text-sm font-medium px-3.5 py-2 uppercase cursor-pointer ${className}`}>
            <div className={`${!active?'opacity-70 group-hover:opacity-100':'opacity-100'}`}>
                {children}
            </div>
            <div className={`absolute -inset-x-8 bottom-0 h-0.5 bg-blue-900/15 [mask-image:linear-gradient(to_right,transparent,white_4rem,white_calc(100%-4rem),transparent)] 
                ${!active?'group-hover:block hidden dark:bg-sky-600/40':'dark:bg-sky-400/70'}`}></div>
        </div>
)