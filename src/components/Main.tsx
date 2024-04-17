import { MainProps } from "@/utility/componentProps"

export default function Main({children, className = "", isOverflowHidden = true, border = 'border-t', ...props}: MainProps) {
    return (
        <main
            id={props.id}
            className={`min-h-screen relative dark:border-slate-800 border-slate-300/70 ${isOverflowHidden&&(typeof isOverflowHidden !== "string")?' overflow-hidden':(isOverflowHidden?isOverflowHidden:'')} ${border} ${className}`}
        >
            {props.titleChildren}
            <div className="px-8 sm:px-0">
                {children}
            </div>
        </main>
    )
}