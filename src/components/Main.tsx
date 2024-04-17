import { MainProps } from "@/utility/componentProps"

export default function Main({children, className = "", isOverflowHidden = true, border = 'border-t'}: MainProps) {
    return (
        <main
            className={`min-h-screen relative px-8 sm:px-0 dark:border-slate-800 border-slate-300/70
            ${isOverflowHidden?'overflow-hidden':''} ${border} ${className}`}
        >
            {children}
        </main>
    )
}