import Main from "./components/Main";
import TitleSection from "./components/TitleSection";

export default function Projects() {

    return (
        <Main className="">
            <TitleSection title="Projects" />

            <div className="mx-auto mt-36 w-32 text-center py-5 relative text-2xl">
                SOON

                <div className={`absolute -inset-x-8 bottom-0 h-0.5 bg-blue-900/15 [mask-image:linear-gradient(to_right,transparent,white_4rem,white_calc(100%-4rem),transparent)] 
                dark:bg-sky-600/40`}></div>
            </div>
        </Main>
    )
}