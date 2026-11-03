import Section from "../Section.jsx";
import Ad1 from "./Ad-1.jsx";
import Ad2 from "./Ad-2.jsx";
import Ad3 from "./Ad-3.jsx";
import Ad4 from "./Ad-4.jsx";
import Ad5 from "./Ad-5.jsx";
import Ad6 from "./Ad-6.jsx";

function Ad(props) {
    return (
        <article className="p-hor-lg">
            <h1 className="text-display-lg font-thin text-primary">Accident Report</h1>
            <p className="text-body-md">Complete all boxes as fully and accurately as possible.</p>
            <Section title="1. About the person who had the accident" content={<Ad1/>}/>
            <Section title="2. About the person completing this report (if not the same as above)" content={<Ad2/>}/>
            <Section title="3. About the Accident – when and where?" content={<Ad3/>}/>
            <Section title="4. About the Accident – what happened?" content={<Ad4/>}/>
            <Section title="5. About the Accident – injuries" content={<Ad5/>}/>
            <Section title="6. Signatures" content={<Ad6/>}/>
            <p className="text-label-sm p-sm m-sm">*Refer to guidance on first page or call your Safety, Security &
                Licensing Advisor/Person for advice or assistance with RIDDOR reporting</p>
            <p className="text-label-sm p-sm m-sm">Completed Accident Report Forms must be uploaded and printed to
                stored in the Accident File</p>
        </article>
    )
}

export default Ad;