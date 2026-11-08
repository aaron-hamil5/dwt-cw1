function Aib(props) {
    return(
        <form>
            <div className="form-row">
                <div className="input p-hor-lg">
                    <input
                        type="text"
                        id="witness-name-input"
                        className="text-box max-width"
                        name="witness-name-input"
                        autoComplete="on"
                        placeholder=" "
                        value=""
                        onChange={ () => {} }
                    />
                    <h2 className="text-box-title">
                        <label htmlFor="witness-name-input">
                            Name
                        </label>
                    </h2>
                </div>
                <div className="input max-width p-hor-sm">
                    <select
                        id="travel-position-input"
                        name="travel-position-input"
                        className="text-box max-width"
                        value=""
                        onChange={ () => {} }>
                        <option value="cm">Team Member</option>
                        <option value="fm">Floor Manager</option>
                        <option value="sm">Shift Manager</option>
                        <option value="am">Assistant Manager</option>
                        <option value="bm">Business Manager</option>
                    </select>
                    <h2 className="text-box-title">
                        <label htmlFor="travel-position-input">
                            Position
                        </label>
                    </h2>
                </div>
                <p className="bubble accept" onClick={() => {}}>Add</p>
            </div>
            <p className="text-display-lg font-thin text-center text-error">NONE RECORDED</p>
            <ul className="p-sm m-sm">
                <li className="horizontal"><p className="text-title-lg font-thick text-tertiary">Firstname Lastname - Shift Manager</p> <p className="bubble decline">Delete</p> <p className="bubble accept">Edit</p></li>
                <li className="horizontal"><p className="text-title-lg font-thick text-tertiary">Firstname Lastname - Shift Manager</p> <p className="bubble decline">Delete</p> <p className="bubble accept">Edit</p></li>
                <li className="horizontal"><p className="text-title-lg font-thick text-tertiary">Firstname Lastname - Shift Manager</p> <p className="bubble decline">Delete</p> <p className="bubble accept">Edit</p></li>
                <li className="horizontal"><p className="text-title-lg font-thick text-tertiary">Firstname Lastname - Shift Manager</p> <p className="bubble decline">Delete</p> <p className="bubble accept">Edit</p></li>
            </ul>
            <div className="input max-width p-hor-sm">
                <select
                    id="cctv-input"
                    name="cctv-input"
                    className="text-box max-width"
                    value=""
                    onChange={ () => {} }>
                    <option value="cctv-no">No</option>
                    <option value="cctv-yes">Yes</option>
                </select>
                <h2 className="text-box-title">
                    <label htmlFor="cctv-input">
                        Was the incident recorded on CCTV?
                    </label>
                </h2>
            </div>
        </form>
    )
}

export default Aib