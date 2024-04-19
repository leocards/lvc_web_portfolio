import Main from "./components/Main"
import TitleSection from "./components/TitleSection"
import { AkarIconsFacebookFill } from "./Icons/Facebook"
import { MdiGithub } from "./Icons/Github"
import { BiInstagram } from "./Icons/Intagram"
import { BiLinkedin } from "./Icons/LinkedIn"
import profile from "./assets/IMG_6405_edited.png"
import InViewPage from "./components/InViewPage"

export default function AboutMe({ onView }:{ onView: (inView: boolean) => void }) {
    return (
        <Main id="about" isOverflowHidden={false} titleChildren={<TitleSection title="About Me" shadow="About" shadowSize="text-6xl" />}>
            <InViewPage onView={(inView) => onView(inView)} />
            <div className="flex w-full lg:pb-0 pb-16">
                <div className="mx-auto flex flex-col lg:flex-row justify-center gap-10 max-w-5xl w-full lg:h-[30rem] lg:mt-4 mt-10 lg:px-0 sm:px-10">
                    <div className="p-4 lg:w-[30rem] w-fit h-full relative mx-auto lg:mx-0 border-b border-color shadow-sm">
                        <div className="border-l border-color absolute lg:-top-10 -top-7 left-0 lg:h-72 h-44" />
                        <div className="border-t dashed absolute top-0 lg:-left-32 -left-16 lg:w-[30rem] w-52" />
                        <div className="border-r dashed absolute -bottom-3 right-0 lg:h-72 h-44" />

                        <div className="absolute bottom-full lg:left-16 -mb-px flex h-8 items-end overflow-hidden">
                            <div className="flex -mb-px h-[2px] lg:w-56 w-24">
                                <div className="w-full flex-none blur-sm [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"></div>
                                <div className="-ml-[100%] w-full flex-none blur-[1px] [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0)_100%)]"></div>
                            </div>
                        </div>

                        <div className="absolute lg:-left-[128px] -left-14 lg:top-24 top-10 flex h-8 items-end overflow-hidden rotate-[-90deg]">
                            <div className="flex -mb-px h-[2px] lg:w-56 w-20">
                                <div className="w-full flex-none blur-sm [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"></div>
                                <div className="-ml-[100%] w-full flex-none blur-[1px] [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0)_100%)]"></div>
                            </div>
                        </div>

                        <div className="w-full xs:w-52 lg:w-full h-52 lg:h-full rounded-md bg-slate-200 dark:bg-slate-800 relative overflow-hidden">
                            <img src={profile} alt="profile" className="object-cover w-full h-[20rem] lg:h-[40rem]" />
                            <div className="flex items-center gap-3 absolute z-10 left-1/2 -translate-x-1/2 bottom-4 rounded text-[#ececec] bg-white/20 px-2.5 py-1 backdrop-blur-sm border border-white/10">
                                <a href="https://www.facebook.com/leomas.cardenio" target="_blank"><AkarIconsFacebookFill className="lg:w-7 lg:h-7 w-6 h-6" /></a>
                                <a href="#"><BiInstagram className="lg:w-7 lg:h-7 w-6 h-6" /></a>
                                <a href="https://www.linkedin.com/in/leomas-cardenio-48832620a/" target="_blank"><BiLinkedin className="lg:w-7 lg:h-7 w-6 h-6" /></a>
                                <a href="https://github.com/leocards" target="_blank"><MdiGithub className="lg:w-7 lg:h-7 w-6 h-6" /></a>
                            </div>
                        </div>
                    </div>

                    <div className="md:max-w-3xl w-full lg:pl-10 mx-auto lg:mx-0">
                        <div className="text-xl opacity-80 text-center lg:text-left">
                            My name is <span className="text-blue-500 uppercase font-semibold">Leomas</span>
                        </div>

                        <div className="mt-5 dark:opacity-75 dark:font-light text-center lg:text-left">
                            I am a versatile web app developer skilled in both front-end and back-end development.
                        </div>

                        <div className="border-b md:border-r border-color relative md:grid md:grid-cols-2 md:grid-rows-3 mt-16 md:h-64">
                            <div className="flex items-center justify-center border dashed border-color md:h-auto h-20">
                                <div className="border-t-dashed -top-0 -left-16 w-16"></div>
                                <div className="border-l-dashed -top-10 -left-0 h-10"></div>
                                <div className="text-center">
                                    <Label>Full name</Label>
                                    <LabelText label="Leomas V. Cardenio" />
                                </div>
                            </div>
                            <div className="flex items-center justify-center border-b md:border-x-0 border-x md:border-solid dashed border-color relative md:h-auto h-20">
                                <div className="border-t-dashed w-32 top-0 left-0 md:block hidden"></div>
                                <div className="text-center">
                                    <Label>Phone</Label>
                                    <LabelText label="(+63) 9956675630" />
                                </div>
                            </div>
                            <div className="flex items-center justify-center border-b md:border-r border-color relative md:h-auto h-20">
                                <div className="border-l-dashed -top-0 -left-0 h-10"></div>
                                <div className="border-l-dashed -bottom-0 -right-0 h-10 md:hidden"></div>
                                <div className="text-center">
                                    <Label>Country</Label>
                                    <LabelText label="Philippines" />
                                </div>
                            </div>
                            <div className="flex items-center justify-center border-b border-x md:border-x-0 border-color md:h-auto h-20">
                                <div className="text-center">
                                    <Label>Email</Label>
                                    <LabelText label="leomascardenio223@gmail.com" />
                                </div>
                            </div>
                            <div className="flex items-center justify-center border-r md:border-r-0 border-color md:col-span-2 md:h-auto h-24">
                                <div className="text-center">
                                    <Label>Education</Label>
                                    <LabelText label="B. S. in Information Technology" />
                                    <LabelText label="Davao del Norte State College" />
                                </div>
                            </div>

                            <div className="absolute bottom-full sm:left-16 -mb-px flex h-8 items-end overflow-hidden">
                                <div className="flex -mb-px h-[2px] w-32 sm:w-56">
                                    <div className="w-full flex-none blur-sm [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"></div>
                                    <div className="-ml-[100%] w-full flex-none blur-[1px] [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0)_100%)]"></div>
                                </div>
                            </div>

                            <div className="absolute right-10 w-fit ml-auto top-full sm:left-16 mt-px flex h-8 items-start overflow-hidden">
                                <div className="flex -mt-px h-[2px] w-32 sm:w-56">
                                    <div className="w-full flex-none blur-sm [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"></div>
                                    <div className="-ml-[100%] w-full flex-none blur-[1px] [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0)_100%)]"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </Main>
    )
}

const Label = ({children, className}: {children:React.ReactNode, className?: string}) => 
    <div className={`font-medium text-sm ${className}`}>{children}</div>

const LabelText = ({label, className}:{label: string, className?: string}) =>
    <div className={`font-light opcaity-90 dark:opacity-70 sm:text-base text-xs ${className}`}>{label}</div>