import { MdiLaravel } from "@/Icons/Laravel";
import { GridCard } from "../Grid";
import { MdiVuejs } from "@/Icons/Vue";
import { BxlTailwindCss } from "@/Icons/Tailwind";
import { SimpleIconsMysql } from "@/Icons/MySQL";
import AccreditationIMG from "../../assets/Accreditation.png";
import { useState } from "react";
import { MoveLeftIcon } from "lucide-react";
import { ProjectTechBG } from "../component";
import TooltipButton from "../Tooltip";

export default function Accreditation() {
    const [viewDetails, setViewDetails] = useState(false)

    return (
        <GridCard contentClass="h-full relative group transition-150 rounded-br" gradient="green">
            {
                !viewDetails ?
                <>
                    <div className="h-full p-2 relative z-20 ring-inset">
                        <div className="p-2.5">
                            <div className=" font-medium">
                                Accreditation Management System
                            </div>
                            <p className="hidden xxs:block text-color opacity-80 text-sm dark:font-light mt-1">
                                <div className="line-clamp-">A Document Management System that streamlines the AACCUP accreditation processes of the college.</div>
                            </p>
                            <button onClick={() => setViewDetails(!viewDetails)} className="block xxs:hidden text-xs p-1 px-2 border border-color mt-1">View details</button>
                        </div>
                    </div>
                </> :
                <div className="p-5 relative">
                    <button onClick={() => setViewDetails(!viewDetails)} className="rounded-full w-6 h-6 mb-1 flex items-center justify-center absolute top-px left-2">
                        <MoveLeftIcon className="w-5 h-5 stroke-1" />
                    </button>
                    <p className="text-color opacity-80 text-sm dark:font-light mt-2 text-center">A Document Management System that streamlines the AACCUP accreditation processes of the college.</p>
                </div>
            }
            <ProjectTechBG>
                <TooltipButton tooltip="Laravel"><MdiLaravel className="w-6 h-6 text-color" /></TooltipButton>
                <TooltipButton tooltip="Vue"><MdiVuejs className="w-6 h-6 text-color" /></TooltipButton>
                <TooltipButton tooltip="TailwindCss"><BxlTailwindCss className="w-6 h-6 text-color" /></TooltipButton>
                <TooltipButton tooltip="MySQL"><SimpleIconsMysql className="w-6 h-6 text-color" /></TooltipButton>
            </ProjectTechBG>
            <div className="w-[24rem] absolute z-10 -bottom-10 xxs:-bottom-14 -right-48 xxs:-right-28 xs:-right-20 group-hover:-right-64  xxs:group-hover:-right-32 shadow-2xl border-2 border-green-700 rounded-xl overflow-hidden transition-all-300 group-hover:[transform:none] [transform:perspective(400em)_rotateY(15deg)_rotateX(6deg)_skew(8deg,-4deg)_translate3d(4%,-2%,0)_scale(.86)]">
                <img src={AccreditationIMG} alt="img" className="object-cover object-left dark:opacity-90" />
            </div>
            <div className="absolute -bottom-20 -left-5 blur-[50px] rounded-full bg-green-500 w-[18rem] h-[11rem] sm:w-52 sm:h-52 opacity-30 dark:opacity-40"></div>
        </GridCard>
    )
}