import Grid from "./components/Grid";
import Main from "./components/Main";
import TitleSection from "./components/TitleSection";
import Accreditation from "./components/Projects/Accreditation";
import InViewPage from "./components/InViewPage";
import Attendance from "./components/Projects/Attendance";

export default function Projects({ onView }:{ onView: (inView: boolean) => void }) {

    return (
        <Main id="projects" className="" titleChildren={<TitleSection title="Projects" />}>
            <InViewPage onView={(inView) => onView(inView)} />
            <div className="max-w-5xl mx-auto pb-8">
                <Grid columns={2}>
                    <Accreditation />
                    <Attendance />
                </Grid>
            </div>
        </Main>
    )
}

/*  */