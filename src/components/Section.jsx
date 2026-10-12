function Section(props) {
    return(
        <div className="bubble full-width m-lg p-lg">
            <h2 className="text-headline-md font-thin text-secondary">{props.title}</h2>
            {props.content}
        </div>
    );
}

export default Section;