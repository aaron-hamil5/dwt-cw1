function Ad1(props) {
    return(
        <form>
            <div className="form-row">
                <div className="input p-hor-lg">
                    <input
                        type="text"
                        id="manager-first-name-input"
                        className="text-box max-width"
                        name="text"
                        autoComplete="on"
                        placeholder=" "
                        value=""
                        onChange={ () => {} }
                    />
                    <h2 className="text-box-title">
                        <label htmlFor="manager-first-name-input">
                            First Name
                        </label>
                    </h2>
                </div>
                <div className="input p-hor-lg">
                    <input
                        type="text"
                        id="manager-last-name-input"
                        className="text-box max-width"
                        name="text"
                        autoComplete="on"
                        placeholder=" "
                        value=""
                        onChange={ () => {} }
                    />
                    <h2 className="text-box-title">
                        <label htmlFor="manager-last-name-input">
                            Last Name
                        </label>
                    </h2>
                </div>
            </div>
                <div className="form-row">
                    <div className="input max-width p-hor-lg">
                        <input
                            type="text"
                            id="position-input"
                            className="text-box max-width"
                            name="text"
                            autoComplete="on"
                            placeholder=" "
                            value=""
                            onChange={ () => {} }
                        />
                            <h2 className="text-box-title">
                                <label htmlFor="position-input">
                                    Position
                                </label>
                            </h2>
                        </div>
                    <div className="input max-width p-hor-lg">
                        <input
                            type="date"
                            id="ad2-date-input"
                            className="text-box max-width"
                            name="text"
                            autoComplete="on"
                            placeholder=" "
                            value=""
                            onChange={ () => {} }
                        />
                        <h2 className="text-box-title">
                            <label htmlFor="s2-date-input">
                                Date
                            </label>
                        </h2>
                    </div>
                </div>
            <div className="input max-width p-hor-lg">
                <input
                    type="text"
                    id="s2-manager-signiture-input"
                    className="text-box max-width"
                    name="text"
                    autoComplete="on"
                    placeholder=" "
                    value=""
                    onChange={ () => {} }
                />
                <h2 className="text-box-title">
                    <label htmlFor="s2-manager-signiture-input">
                        Signature
                    </label>
                </h2>
            </div>
        </form>
    );
}

export default Ad1;