function Ad1(props) {
    return(
        <form>
            <div className="form-row">
                <div className="input p-hor-lg">
                    <input
                        type="text"
                        id="completing-form-name-input"
                        className="text-box max-width"
                        name="completing-form-name-input"
                        autoComplete="on"
                        placeholder=" "
                        value=""
                        onChange={ () => {} }
                    />
                    <h2 className="text-box-title">
                        <label htmlFor="completing-form-name-input">
                            Person completing form
                        </label>
                    </h2>
                </div>
                <div className="input max-width p-hor-lg">
                    <input
                        type="date"
                        id="completing-form-date-input"
                        className="text-box max-width"
                        name="completing-form-date-input"
                        autoComplete="on"
                        placeholder=" "
                        value=""
                        onChange={ () => {} }
                    />
                    <h2 className="text-box-title">
                        <label htmlFor="completing-form-date-input">
                            Date
                        </label>
                    </h2>
                </div>
            </div>
            <div className="form-row">
                <div className="input p-hor-lg">
                    <input
                        type="text"
                        id="had-accident-name-input"
                        className="text-box max-width"
                        name="had-accident-name-input"
                        autoComplete="on"
                        placeholder=" "
                        value=""
                        onChange={ () => {} }
                    />
                    <h2 className="text-box-title">
                        <label htmlFor="had-accident-name-input">
                            Person who had the accident
                        </label>
                    </h2>
                </div>
                <div className="input max-width p-hor-lg">
                    <input
                        type="date"
                        id="had-accident-date-input"
                        className="text-box max-width"
                        name="had-accident-date-input"
                        autoComplete="on"
                        placeholder=" "
                        value=""
                        onChange={ () => {} }
                    />
                    <h2 className="text-box-title">
                        <label htmlFor="had-accident-date-input">
                            Date
                        </label>
                    </h2>
                </div>
            </div>
            <p className="text-label-md p-sm m-sm">The personal information (including details of the accident/injury) which appears on this form will be retained and may be disclosed
                to enable McDonald’s to perform it’s legal obligations, including any health & safety functions given to us by law, and in accordance
                with McDonald’s legitimate business interests.</p>
        </form>
    );
}

export default Ad1;