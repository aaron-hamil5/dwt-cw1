function Aia(props) {
return(
    <form>
        <div className="form-row">
            <div className="input p-hor-lg">
                <input
                    type="text"
                    id="first-name-input"
                    className="text-box max-width"
                    name="text"
                    autoComplete="on"
                    placeholder=" "
                    value=""
                    onChange={ () => {} }
                />
                <h2 className="text-box-title">
                    <label htmlFor="travel-first-name-input">
                        First Name
                    </label>
                </h2>
            </div>
            <div className="input p-hor-lg">
                <input
                    type="text"
                    id="last-name-input"
                    className="text-box max-width"
                    name="text"
                    autoComplete="on"
                    placeholder=" "
                    value=""
                    onChange={ () => {} }
                />
                <h2 className="text-box-title">
                    <label htmlFor="travel-last-name-input">
                        Last Name
                    </label>
                </h2>
            </div>
        </div>
        <div className="form-row">
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
            <div className="input max-width p-hor-lg">
                <input
                    type="time"
                    id="travel-time-input"
                    className="text-box max-width"
                    name="travel-time-input"
                    autoComplete="on"
                    placeholder=" "
                    value=""
                    onChange={ () => {} }
                />
                <h2 className="text-box-title">
                    <label htmlFor="travel-time-input">
                        Time
                    </label>
                </h2>
            </div>
        </div>
        <div className="input max-width p-hor-lg">
                <textarea
                    id="any-observations-input"
                    className="text-area text-box max-width"
                    name="any-observations-input"
                    autoComplete="on"
                    placeholder=" "
                    value=""
                    onChange={ () => {} }
                />
            <h2 className="text-box-title">
                <label htmlFor="any-observations-input">
                    Any Observations?
                </label>
            </h2>
        </div>
    </form>
)}

export default Aia