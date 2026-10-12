import Section from "./components/Section.jsx";

function App() {
    return(
        <article className="p-hor-lg">
            <h1 className="text-display-lg font-thin text-primary">Accident Report</h1>
            <p className="text-body-md">Complete all boxes as fully and accurately as possible.</p>
            <Section title="1. About the person who had the accident"/>
            <Section title="2. About the person completing this report (if not the same as above)"/>
            <Section title="3. About the Accident – when and where?"/>
            <Section title="4. About the Accident – what happened?"/>
            <Section title="5. About the Accident – injuries"/>
            <Section title="6. Signatures"/>
        </article>
    );
}

export default App;