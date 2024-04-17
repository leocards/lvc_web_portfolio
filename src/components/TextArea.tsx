import * as React from "react"
import { cn } from "@/lib/utils"
import { TextAreaProps } from "@/utility/componentProps"

export default React.forwardRef<HTMLTextAreaElement, TextAreaProps>(function Input(props: TextAreaProps, ref: React.Ref<HTMLTextAreaElement>) {
    return <textarea 
        ref={ref} 
        {...props}
        className={cn(
            "h-10 px-2 outline-none bg-transparent",
            props.className
        )}
    />
})