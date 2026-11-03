function Ad1(props) {
    return(
        <form>
            <div className="input p-hor-lg">
                <input
                    type="text"
                    id="describe-input"
                    className="text-box max-width"
                    name="describe-input"
                    autoComplete="on"
                    placeholder=" "
                    value=""
                    onChange={ () => {} }
                />
                <h2 className="text-box-title">
                    <label htmlFor="describe-input">
                        Describe the injuries?
                    </label>
                </h2>
            </div>
            <div className="form-row">
                <div className="input p-hor-lg">
                    <input
                        type="text"
                        id="who-first-aid-input"
                        className="text-box max-width"
                        name="who-first-aid-input"
                        autoComplete="on"
                        placeholder=" "
                        value=""
                        onChange={ () => {} }
                    />
                    <h2 className="text-box-title">
                        <label htmlFor="who-first-aid-input">
                            Who Gave First Aid?
                        </label>
                    </h2>
                </div>
                <div className="input max-width p-hor-sm">
                    <select
                        id="amb-att-input"
                        name="amb-att-input"
                        className="text-box max-width"
                        value=""
                        onChange={ () => {} }>
                        <option value="amb-no">No</option>
                        <option value="amb-Yes">Yes</option>
                    </select>
                    <h2 className="text-box-title">
                        <label htmlFor="amb-att-input">
                            Ambulance attended?
                        </label>
                    </h2>
                </div>
            </div>
            <div className="input p-hor-lg">
                <input
                    type="text"
                    id="what-first-aid-input"
                    className="text-box max-width"
                    name="what-first-aid-input"
                    autoComplete="on"
                    placeholder=" "
                    value=""
                    onChange={ () => {} }
                />
                <h2 className="text-box-title">
                    <label htmlFor="what-first-aid-input">
                        What First Aid was given?
                    </label>
                </h2>
            </div>
                <div className="form-row">
                    <div className="input max-width p-hor-sm">
                        <select
                            id="riddor-input"
                            name="riddor-input"
                            className="text-box max-width"
                            value=""
                            onChange={ () => {} }>
                            <option value="riddor-no">No</option>
                            <option value="riddor-Yes">Yes</option>
                        </select>
                        <h2 className="text-box-title">
                            <label htmlFor="riddor-input">
                                Is the injury RIDDOR reportable?*
                            </label>
                        </h2>
                    </div>
                    <div className="input max-width p-hor-lg">
                        <input
                            type="date"
                            id="riddor-date-input"
                            className="text-box max-width"
                            name="riddor-date-input"
                            autoComplete="on"
                            placeholder=" "
                            value=""
                            onChange={ () => {} }
                        />
                        <h2 className="text-box-title">
                            <label htmlFor="riddor-date-input">
                                If Yes, record the date reported
                            </label>
                        </h2>
                    </div>
                </div>
        </form>
    );
}

export default Ad1;