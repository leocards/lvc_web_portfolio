import * as React from "react"
import { cn } from "@/lib/utils"
import { InputProps } from "@/utility/componentProps"

export default React.forwardRef<HTMLInputElement, InputProps>(function Input(props: InputProps, ref: React.Ref<HTMLInputElement>) {
    return <input 
        ref={ref} 
        {...props}
        className={cn(
            "h-10 px-2 outline-none bg-transparent",
            props.className
        )}
    />
})