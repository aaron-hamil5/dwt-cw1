export default function Aif(props) {
    return(
        <form>
            <div className="form-row">
                <div className="input p-hor-lg">
                    <input
                        type="text"
                        id="ai-name-input"
                        className="text-box max-width"
                        name="ai-name-input"
                        autoComplete="on"
                        placeholder=" "
                        value=""
                        onChange={ () => {} }
                    />
                    <h2 className="text-box-title">
                        <label htmlFor="ai-name-input">
                            Full Name
                        </label>
                    </h2>
                </div>
                <div className="input max-width p-hor-sm">
                    <select
                        id="ai-position-input"
                        name="ai-position-input"
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
                        <label htmlFor="ai-position-input">
                            Position
                        </label>
                    </h2>
                </div>
            </div>
            <div className="form-row">
                <div className="input max-width p-hor-lg">
                    <input
                        type="date"
                        id="ai-date-input"
                        className="text-box max-width"
                        name="ai-date-input"
                        autoComplete="on"
                        placeholder=" "
                        value=""
                        onChange={ () => {} }
                    />
                    <h2 className="text-box-title">
                        <label htmlFor="ai-date-input">
                            Date
                        </label>
                    </h2>
                </div>
                <div className="input max-width p-hor-lg">
                    <input
                        type="time"
                        id="s3-time-input"
                        className="text-box max-width"
                        name="text"
                        autoComplete="on"
                        placeholder=" "
                        value=""
                        onChange={ () => {} }
                    />
                    <h2 className="text-box-title">
                        <label htmlFor="s3-time-input">
                            Time
                        </label>
                    </h2>
                </div>
            </div>
        </form>
    )
}