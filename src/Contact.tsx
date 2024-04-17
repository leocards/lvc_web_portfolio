import ContactForm from "./components/ContactForm";
import Main from "./components/Main";
import TitleSection from "./components/TitleSection";
import { CarbonEmail } from "./Icons/Email";
import { MaterialSymbolsLightMapOutline } from "./Icons/Map";
import { CircumMobile1 } from "./Icons/Mobile";

export default function Contact() {

    return (
        <Main isOverflowHidden={false}>
            <TitleSection title="Contact Me" shadow="Contact" />

            <div className="flex flex-col lg:items-center lg:flex-row max-w-5xl mx-auto lg:h-[352px] lg:my-16">
                <div className="w-full sm:w-[70vw] lg:w-[80%] mx-auto min-h-[30vh] 
                lg:h-auto lg:space-x-0 lg:space-y-10 flex lg:flex-col justify-center lg:justify-normal items-center
                md:flex-row flex-col md:space-x-10 md:space-y-0 space-y-10 mb-5 sm:mb-0
                ">
                    <div className="flex flex-col items-center w-fit h-fit">
                        <CircumMobile1 className="md:w-10 w-7 md:h-10 h-7" />
                        <LabelText label="Phone"/>
                        <div className="font-light text-xs sm:text-sm opacity-90 text-center">(+63) 9956675630</div>
                    </div>
                    <div className="flex flex-col items-center w-fit h-fit">
                        <CarbonEmail className="md:w-10 w-7 md:h-10 h-7" />
                        <LabelText label="Email"/>
                        <div className="font-light text-xs sm:text-sm opacity-90 text-center">leomascardenio223@gmail.com</div>
                    </div>
                    <div className="flex flex-col items-center w-fit h-fit">
                        <MaterialSymbolsLightMapOutline className="md:w-10 w-7 md:h-10 h-7" />
                        <LabelText label="Address"/>
                        <div className="font-light text-xs sm:text-sm opacity-90 text-center">Panabo City, Davao del Norte, <br /> Philippines</div>
                    </div>
                </div>
                <div className="h-px lg:h-full w-[80vw] lg:w-px mx-auto lg:mx-4 my-4 lg:my-0 bg-color [mask-image:linear-gradient(to_right,transparent,white_4rem,white_calc(100%-4rem),transparent)] lg:[mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
                <div className="w-full sm:w-[70vw] lg:w-full mx-auto h-fit">
                    <ContactForm />
                </div>
            </div>
        </Main>
    )
}

const LabelText = ({label, className}:{label: string, className?: string}) =>
    <div className={`font-medium opcaity-90 sm:text-base text-sm ${className}`}>{label}</div>