import Card from "./Card.jsx";

function home(props) {
    return (
        <article className="p-hor-lg">
            <h1 className="text-display-lg font-thin text-primary">Uniq Accident</h1>
            <p className="text-body-md">This platform serves as a central repository for all incidents that have
                occurred within the stores. Data access is strictly regulated and shall only be viewed if necessity.
                Upon completion of viewing or logging an incident, it is important  that you log out and close the
                web browser. Only authorised personnel should have access to this software.</p>
            <h2 className="text-display-sm font-thin text-secondary m-sm">Report Accident</h2>
            <p className="text-body-md m-sm">In the event of an accident occurring during a shift, it is important that a
                comprehensive report be written. Prioritise the well-being of the injured individual first, ensuring
                they are positioned comfortably and at ease. Refrain from asking intrusive questions and instead,
                provide a calm and supportive environment before gathering data.</p>
            <button onClick={props.onClickCreate} className="bubble accept text-label-md">Create Report</button>
            <h2 className="text-display-sm font-thin text-secondary m-sm">View Accidents</h2>
            <p className="text-body-md m-sm">Access a comprehensive log of all incidents recorded across store locations.
                Reports may be deleted only when it is verified as entirely safe to do so; if you are uncertain, retain
                the record. Please note that once a report has been signed, the underlying data cannot be modified to
                prevent alteration and maintain data integrity.</p>
            <section className="card_array">
                <Card
                    name="Doh, John"
                    date="10/11/26"
                    time="12:30 PM"
                    store="1823"
                    injury="Burn to the upper forearm"
                    firstAider="Aaron Hamilton"
                    onClickView={ ()=>{} }
                    onClickDelete={ ()=>{} }
                />
                <Card
                    name="Dawson, Kyle"
                    date="08/02/26"
                    time="16:30 PM"
                    store="0833"
                    injury="Cut on forehead RHS"
                    firstAider="Aaron Hamilton"
                    onClickView={ ()=>{} }
                    onClickDelete={ ()=>{} }
                />
                <Card
                    name="Doh, John"
                    date="10/11/26"
                    time="12:30 PM"
                    store="1823"
                    injury="Burn to the upper forearm"
                    firstAider="Aaron Hamilton"
                    onClickView={ ()=>{} }
                    onClickDelete={ ()=>{} }
                />
                <Card
                    name="Dawson, Kyle"
                    date="08/02/26"
                    time="16:30 PM"
                    store="0833"
                    injury="Cut on forehead RHS"
                    firstAider="Aaron Hamilton"
                    onClickView={ ()=>{} }
                    onClickDelete={ ()=>{} }
                />
                <Card
                    name="Doh, John"
                    date="10/11/26"
                    time="12:30 PM"
                    store="1823"
                    injury="Burn to the upper forearm"
                    firstAider="Aaron Hamilton"
                    onClickView={ ()=>{} }
                    onClickDelete={ ()=>{} }
                />
                <Card
                    name="Dawson, Kyle"
                    date="08/02/26"
                    time="16:30 PM"
                    store="0833"
                    injury="Cut on forehead RHS"
                    firstAider="Aaron Hamilton"
                    onClickView={ ()=>{} }
                    onClickDelete={ ()=>{} }
                />
                <Card
                    name="Dawson, Kyle"
                    date="08/02/26"
                    time="16:30 PM"
                    store="0833"
                    injury="Cut on forehead RHS"
                    firstAider="Aaron Hamilton"
                    onClickView={ ()=>{} }
                    onClickDelete={ ()=>{} }
                />
            </section>
        </article>
    )
}

export default home;