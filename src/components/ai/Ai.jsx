import Section from "../Section.jsx";
import Aia from "./Ai-a.jsx";
import Aib from "./Ai-b.jsx";
import Aic from "./Ai-c.jsx";
import Aid from "./Ai-d.jsx";
import Aie from "./Ai-e.jsx";
import Aif from "./Ai-f.jsx";

function Ad(props) {
    return (
        <article className="p-hor-lg">
            <h1 className="text-display-lg font-thin text-primary">Accident Investigation</h1>
            <p className="text-body-md">The Shift Leader should complete the following information at a suitable time
                following the incident.</p>
            <Section title="a. Who completed the travel path immediately before the incident?" content={<Aia/>}/>
            <Section title="b. List details of any witnesses to the incident (state none if there are no witnesses)"  content={<Aib/>}/>
            <Section title="c. Were any witness statements taken? (Keep any statements in the Health & Safety File)" />
            <Section title="d. Draw sketch to show location of accident and location of any witnesses at the time of
the accident" />
            <Section title="e. Describe any action taken following this incident" />
            <Section title="f. Signatures"/>
            <p className="text-label-sm p-sm m-sm">Completed Accident Report Forms must be uploaded and printed to
                stored in the Accident File</p>
        </article>
    )
}

export default Ad;