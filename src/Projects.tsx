import Grid, { GridCard } from "./components/Grid";
import Main from "./components/Main";
import TitleSection from "./components/TitleSection";
import AccreditationIMG from "./assets/Accreditation.png";
import { MdiLaravel } from "./Icons/Laravel";
import { MdiVuejs } from "./Icons/Vue";
import { BxlTailwindCss } from "./Icons/Tailwind";
import { SimpleIconsMysql } from "./Icons/MySQL";

export default function Projects() {

    return (
        <Main id="projects" className="" titleChildren={<TitleSection title="Projects" />}>
            <div className="max-w-5xl mx-auto ">
                <Grid columns={1} className="group">
                    <GridCard contentClass="h-full relative group-hover:group dark:!bg-[#1E2024] transition-150" className="">
                        <div className="h-full p-2 hover:ring-1 dark:ring-green-900 relative z-20 ring-inset rounded-lg">
                            <div className="p-2">
                                <div className="text-xl font-medium">
                                    Accreditation Management System
                                </div>
                                <p className="text-color opacity-80 text-sm dark:font-light mt-1">A Document Management System that streamlines the AACUP accreditation processes of the college</p>
                            </div>

                        </div>
                        <div className="absolute bottom-3 left-3 z-20 bg-white/50 dark:bg-gray-400/40 rounded-md backdrop-blur-sm flex gap-2 px-1 py-0.5 border border-slate-300/70 dark:border-white/20">
                            <MdiLaravel className="w-6 h-6 text-color" />
                            <MdiVuejs className="w-6 h-6 text-color" />
                            <BxlTailwindCss className="w-6 h-6 text-color" />
                            <SimpleIconsMysql className="w-6 h-6 text-color" />
                        </div>
                        <div className="w-[24rem] absolute z-10 -bottom-14 -right-20 group-hover:-right-32 shadow-2xl border-2 border-green-700 rounded-xl overflow-hidden transition-all-300 group-hover:[transform:none] [transform:perspective(400em)_rotateY(15deg)_rotateX(6deg)_skew(8deg,-4deg)_translate3d(4%,-2%,0)_scale(.86)]">
                            <img src={AccreditationIMG} alt="img" className="object-cover object-left dark:opacity-80" />
                        </div>
                        <div className="absolute -bottom-20 -left-5 blur-[50px] rounded-full bg-green-700 w-52 h-52 opacity-30 dark:opacity-40"></div>
                    </GridCard>
                </Grid>
            </div>
        </Main>
    )
}

/*  */