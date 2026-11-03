function Ad1(props) {
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
                        <label htmlFor="first-name-input">
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
                        <label htmlFor="last-name-input">
                            Last Name
                        </label>
                    </h2>
                </div>
            </div>

                <div className="input p-hor-lg">
                    <input
                        type="text"
                        id="address-line-one-input"
                        className="text-box max-width"
                        name="text"
                        autoComplete="on"
                        placeholder=" "
                        value=""
                        onChange={ () => {} }
                    />
                    <h2 className="text-box-title">
                        <label htmlFor="address-line-one-input">
                            Address Line 1
                        </label>
                    </h2>
                </div>
                <div className="input p-hor-lg">
                    <input
                        type="text"
                        id="address-line-two-input"
                        className="text-box max-width"
                        name="text"
                        autoComplete="on"
                        placeholder=" "
                        value=""
                        onChange={ () => {} }
                    />
                    <h2 className="text-box-title">
                        <label htmlFor="address-line-two-input">
                            Address Line 2
                        </label>
                    </h2>
                </div>
                <div className="form-row">
                    <div className="input max-width p-hor-lg">
                        <input
                            type="text"
                            id="town-input"
                            className="text-box max-width"
                            name="text"
                            autoComplete="on"
                            placeholder=" "
                            value=""
                            onChange={ () => {} }
                        />
                            <h2 className="text-box-title">
                                <label htmlFor="town-input">
                                    Town / City
                                </label>
                            </h2>
                        </div>
                    <div className="input max-width p-hor-lg">
                        <input
                            type="text"
                            id="post-input"
                            className="text-box max-width"
                            name="text"
                            autoComplete="on"
                            placeholder=" "
                            value=""
                            onChange={ () => {} }
                        />
                        <h2 className="text-box-title">
                            <label htmlFor="post-input">
                                Post Code
                            </label>
                        </h2>
                    </div>
                </div>
            <div className="input max-width p-hor-lg">
                <input
                    type="number"
                    id="phone-input"
                    className="text-box max-width"
                    name="text"
                    autoComplete="on"
                    placeholder=" "
                    value=""
                    onChange={ () => {} }
                />
                <h2 className="text-box-title">
                    <label htmlFor="phone-input">
                        Phone Number
                    </label>
                </h2>
            </div>
            <div className="input max-width p-hor-sm">
                <select
                    id="inured-person"
                    name="inured-person"
                    className="text-box max-width"
                    value=""
                    onChange={ () => {} }>
                    <option value="employee">Employee</option>
                    <option value="customer">Customer</option>
                    <option value="contractor">Contractor</option>
                    <option value="other">Other</option>
                </select>
                <h2 className="text-box-title">
                    <label htmlFor="inured-person">
                        Inured Person
                    </label>
                </h2>
            </div>
            <div className="input max-width p-hor-lg">
                <input
                    type="text"
                    id="activity-input"
                    className="text-box max-width"
                    name="text"
                    autoComplete="on"
                    placeholder=" "
                    value=""
                    onChange={ () => {} }
                />
                <h2 className="text-box-title">
                    <label htmlFor="activity-input">
                        Activity being undertaken at time of accident
                    </label>
                </h2>
            </div>
        </form>
    );
}

export default Ad1;