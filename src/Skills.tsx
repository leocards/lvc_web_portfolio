import InViewPage from "./components/InViewPage";
import Main from "./components/Main";
import TitleSection from "./components/TitleSection";
import TooltipButton from "./components/Tooltip";
import { BxlJavascript } from "./Icons/Javascript";
import { MdiLaravel } from "./Icons/Laravel";
import { SimpleIconsMysql } from "./Icons/MySQL";
import { AkarIconsPhpFill } from "./Icons/PHP";
import { BxlReact } from "./Icons/React";
import { BxlTailwindCss } from "./Icons/Tailwind";

export default function Skills({ onView }:{ onView: (inView: boolean) => void }) {
    return (
        <Main id="skills" className="min-h-screen relative border-t dark:border-slate-800" isOverflowHidden="overflow-x-hidden" titleChildren={<TitleSection title="Skills" />}>
            <InViewPage onView={(inView) => onView(inView)} />
            <div className="py-10 sm:px-8 md:px-0">
                <div className="md:max-w-2xl lg:max-w-4xl xl:max-w-5xl lg:h-72 w-full mx-auto relative gap-4">
                    <div className="flex flex-col lg:flex-row w-full h-full">
                        <div className="text-center flex flex-col w-full">
                            <Label className="py-4 w-full border-b border-t !border-t-transparent border-r dashed inline-block text-center">Front-End</Label>
                            <div className="grow flex items-center border-b border-r dashed p-2 min-h-[7rem]">
                                <Grid>
                                    <TooltipButton tooltip="TailwindCSS">
                                        <BxlTailwindCss className="h-8 sm:h-12 w-8 sm:w-12" />
                                    </TooltipButton>
                                    <TooltipButton tooltip="JavaScript">
                                        <BxlJavascript className="h-8 sm:h-12 w-8 sm:w-12" />
                                    </TooltipButton>
                                    {/* <TooltipButton tooltip="TypeScript">
                                        <MdiLanguageTypescript className="h-8 sm:h-12 w-8 sm:w-12" />
                                    </TooltipButton> */}
                                    <TooltipButton tooltip="React.Js">
                                        <BxlReact className="h-8 sm:h-12 w-8 sm:w-12" />
                                    </TooltipButton>
                                    {/* <TooltipButton tooltip="Next.Js">
                                        <LogosNextjs className="h-14 w-14" />
                                    </TooltipButton> */}
                                </Grid>
                            </div>
                        </div>
                        <div className="text-center flex flex-col w-full">
                            <Label className="py-4 w-full border-b border-t !border-t-transparent border-r dashed inline-block text-center">Back-End</Label>
                            <div className="grow flex items-center lg:border-r dashed p-2 min-h-[7rem]">
                                <Grid grids={2}>
                                    <TooltipButton tooltip="PHP">
                                        <AkarIconsPhpFill className="h-8 sm:h-12 w-8 sm:w-12" />
                                    </TooltipButton>
                                    {/* <TooltipButton tooltip="Python">
                                        <BxlPython className="h-8 sm:h-12 w-8 sm:w-12" />
                                    </TooltipButton> */}
                                    <TooltipButton tooltip="Laravel">
                                        <MdiLaravel className="h-8 sm:h-12 w-8 sm:w-12" />
                                    </TooltipButton>
                                </Grid>
                            </div>
                        </div>
                        <div className="text-center flex flex-col w-full">
                            <Label className="py-4 w-full border-b border-t lg:border-r border-l lg:border-l-0 dashed inline-block text-center">Database</Label>
                            <div className="grow flex items-center p-2 min-h-[7rem] border-l lg:border-l-0 dashed">
                                <Grid grids={1}>
                                    <TooltipButton tooltip="MySql">
                                        <SimpleIconsMysql className="h-8 sm:h-12 w-8 sm:w-12" />
                                    </TooltipButton>
                                    {/* <TooltipButton tooltip="PostgeSQL">
                                        <BxlPostgresql className="h-8 sm:h-12 w-8 sm:w-12" />
                                    </TooltipButton> */}
                                </Grid>
                            </div>
                        </div>
                    </div>

                    <div className="absolute bottom-full sm:left-16 -mb-px flex h-8 items-end overflow-hidden">
                        <div className="flex -mb-px h-[2px] w-32 sm:w-56">
                            <div className="w-full flex-none blur-sm [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"></div>
                            <div className="-ml-[100%] w-full flex-none blur-[1px] [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0)_100%)]"></div>
                        </div>
                    </div>

                    <div className="absolute right-14 -bottom-8 h-8 overflow-hidden">
                        <div className="flex -mt-px h-[2px] w-32 sm:w-56 -scale-x-100">
                            <div className="w-full flex-none blur-sm [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"></div>
                            <div className="-ml-[100%] w-full flex-none blur-[1px] [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0)_67.19%,rgba(236,72,153,0)_100%)]"></div>
                        </div>
                    </div>

                    <div className="absolute -ml-10 w-[15rem] sm:w-[20rem] md:w-[40rem] -inset-x-8 top-0 h-px bg-color [mask-image:linear-gradient(to_right,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
                    <div className="absolute -inset-y-8 left-0 h-[23rem] lg:h-[15rem] w-px bg-color [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
                    <div className="absolute w-[15rem] sm:w-[20rem] md:w-[30rem] lg:w-[40rem] -right-7 sm:-right-10 bottom-0 h-px bg-color [mask-image:linear-gradient(to_right,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
                    <div className="absolute right-0 -bottom-10 h-[17rem] lg:h-[15rem] w-px bg-color [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
                </div>
            </div>
            
            <div className="text-color text-xl sm:text-4xl font-bold text-center py-8">
                I Am Available For Freelance !
            </div>
        </Main>
    )
}

const Label = ({children, className}: {children:React.ReactNode, className?: string}) => 
    <div className={`font-medium text-sm ${className}`}>{children}</div>

const Grid = ({children, grids = 3}: {children: React.ReactNode, grids?: 1|2|3}) => {
    
    const gridColumns = {
        1: 'grid-cols-1',
        2: 'grid-cols-2',
        3: 'grid-cols-3',
    }[grids]

    return <div className={`grid ${gridColumns} items-center place-items-center w-fit gap-3 mx-auto`}>{children}</div>
}
