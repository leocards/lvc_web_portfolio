import Main from "./components/Main";
import { PhCode } from "./Icons/Code";
import { MdiLaravel } from "./Icons/Laravel";
import { BxlReact } from "./Icons/React";
import { BxlTailwindCss } from "./Icons/Tailwind";
import InViewPage from "./components/InViewPage";

export default function HomeSection({ onView }:{ onView: (inView: boolean) => void }) {
    return (
        <>
            <Main id="home" className="h-screen bg-slate-200/50 dark:bg-[#181A1E]" border="">
                <InViewPage onView={(inView) => onView(inView)} />
                <div className="mx-auto w-full sm:max-w-xl lg:max-w-5xl lg:w-full md:max-w-2xl h-[calc(100vh-3.5rem)] text-slate-700 md:pt-36 pt-44">
                    <div
                        className="border-b dashed w-60 ml-auto after:border-l after:dashed after:h-24 after:absolute after:ml-60 before:border-l before:dashed
                        before:h-6 before:absolute before:ml-60 before:-mt-6 relative"
                    >
                        <div className="absolute bottom-full left-5 -mb-px flex h-8 items-end overflow-hidden">
                            <div className="flex -mb-px h-[2px] w-44">
                                <div className="w-full flex-none blur-sm [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"></div>
                                <div className="-ml-[100%] w-full flex-none blur-[1px] [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0)_100%)]"></div>
                            </div>
                        </div>
                    </div>

                    <div className="md:ml-4 py-8 mt-8 px-4 border-l border-b dashed relative z-30">
                        <div className="font-semibold text-2xl md:text-4xl opacity-50 dark:text-slate-50">
                            I'm a
                        </div>
                        <div className="uppercase font-extrabold text-3xl md:text-5xl sm:leading-[4rem] lg:text-[4.5rem] lg:leading-[5rem] 
                        border-slate-300/70 dark:text-[#ececec]">
                            Full Stack Developer
                            <span className="ml lg:text-[5.5rem] text-blue-600">.</span>
                            <div className="border-b dashed relative mt-3">
                                <div className="absolute border-b dashed w-10 sm:w-24 top-0 -left-[2.6rem] sm:-left-[6.1rem]"></div>
                            </div>
                        </div>
                        <div className="right-16 h-8 overflow-hidden">
                            <div className="flex -mt-px h-[2px] w-32 sm:w-56 -scale-x-100">
                                <div className="w-full flex-none blur-sm [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"></div>
                                <div className="-ml-[100%] w-full flex-none blur-[1px] [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0)_67.19%,rgba(236,72,153,0)_100%)]"></div>
                            </div>
                        </div>
                        <div className="p-4 rounded-md bg-slate-100 dark:bg-zinc-900 shadow-md flex relative border border-[#ececec]/15 text-[10px] xs:text-sm sm:text-base">
                            <ol className="tabular-nums dark:text-white/50 mr-4">
                                <li>1</li>
                                <li>2</li>
                                <li>3</li>
                            </ol>
                            <pre className="text-color">
                                <span className="!text-cyan-500">function </span> 
                                <span className="text-lime-500">getDeveloper</span>
                                <span className="text-yellow-500">() {'{'}</span> <br />
                                <span className="text-red-500 ml-8">return </span>
                                <span className="text-yellow-400">'Leomas Cardenio'</span>
                                <span className="dark:opacity-100 opacity-40">;</span>
                                <div className="text-yellow-500">{'}'}</div>
                            </pre>
                            <div className="absolute right-14 -bottom-8 h-8 overflow-hidden">
                                <div className="flex -mt-px h-[2px] w-32 sm:w-96 -scale-x-100">
                                    <div className="w-full flex-none blur-sm [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"></div>
                                    <div className="-ml-[100%] w-full flex-none blur-[1px] [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0)_67.19%,rgba(236,72,153,0)_100%)]"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="absolute -bottom-2.5 sm:-bottom-4 right-10 z-20 flex gap-4 dark:opacity-20 opacity-50 text-slate-300">
                    <MdiLaravel className="sm:w-14 sm:h-14 w-8 h-8" />
                    <BxlReact className="sm:w-14 sm:h-14 w-8 h-8" />
                    <BxlTailwindCss className="sm:w-14 sm:h-14 w-8 h-8" />
                    <PhCode className="sm:w-14 sm:h-14 w-8 h-8" />
                </div>

                <div
                    className="w-[50rem] h-[50rem] bg-cyan-100 dark:bg-white opacity-[0.35] dark:opacity-[0.5] rounded-full absolute 
                    -top-[65%] lg:left-11 -left-52 pointer-events-none blur-[80px] dark:blur-[300px]"
                />

                <div
                    className="w-[20rem] h-[20rem] bg-blue-400 dark:bg-blue-300 opacity-[0.25] dark:opacity-[0.4] rounded-full absolute 
                    -top-[25%] lg:left-[19rem] -left-16 pointer-events-none blur-[70px] dark:blur-[130px]"
                />
            </Main>
        </>
    );
}
