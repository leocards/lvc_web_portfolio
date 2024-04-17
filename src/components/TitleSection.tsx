export default function TitleSection({title, shadow, shadowSize = 'text-4xl'}: {title: string, shadow?: string, shadowSize?: string}) {
    return (
        <div className="w-full relative pt-8">
            <div className="relative z-20 mx-auto w-fit py-12">
                <div className="font-bold text-lg sm:text-3xl md:text-4xl text-slate-600 dark:text-inherit">{title}</div>
                <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-extrabold opacity-5 uppercase -z-10 ${shadowSize} xs:text-6xl md:text-[5rem]`}>
                    {shadow||title}
                </div>
            </div>

            <div className="w-full h-48 absolute top-0 -z-0 overflow-hidden mx-auto pointer-events-none">
                <div className="absolute -top-40 left-1/2 -translate-x-1/2 bg-blue-300 dark:bg-blue-500 /30 w-44 h-60 rounded-full blur-[50px]"></div>
            </div>
        </div>
    )
}