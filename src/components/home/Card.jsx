function Card(props) {
    return(
        <div className="bubble secondary card m-lg p-lg">
            <h2 className="text-headline-md font-thin text-secondary m-hor-sm">{props.name}</h2>
            <p className="text-label-sm m-sm">{props.date} | {props.time} | Store: {props.store}</p>
            <p className="text-body-lg m-sm">Injury: {props.injury}</p>
            <p className="text-label-sm m-sm">First Aider: {props.firstAider}</p>
            <div className="horizontal">
                <button onClick={props.onClickView} className="bubble accept text-label-md">View Report</button>
                <button onClick={props.onClickView} className="bubble decline text-label-md">Delete Report</button>
            </div>
        </div>
    );
}

export default Card;