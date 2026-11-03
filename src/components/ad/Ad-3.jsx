function Ad1(props) {
    return(
        <form>
            <div className="input max-width p-hor-lg">
                <input
                    type="text"
                    id="current-location-input"
                    className="text-box max-width"
                    name="current-location-input"
                    autoComplete="on"
                    placeholder=" "
                    value=""
                    onChange={ () => {} }
                />
                <h2 className="text-box-title">
                    <label htmlFor="current-location-input">
                        Current Location
                    </label>
                </h2>
            </div>
            <div className="form-row">
                <div className="input p-hor-lg">
                    <input
                        type="text"
                        id="store-number-input"
                        className="text-box max-width"
                        name="text"
                        autoComplete="on"
                        placeholder=" "
                        value=""
                        onChange={ () => {} }
                    />
                    <h2 className="text-box-title">
                        <label htmlFor="store-number-input">
                            Store Number
                        </label>
                    </h2>
                </div>
                <div className="input p-hor-lg">
                    <input
                        type="text"
                        id="accedent-location-input"
                        className="text-box max-width"
                        name="text"
                        autoComplete="on"
                        placeholder=" "
                        value=""
                        onChange={ () => {} }
                    />
                    <h2 className="text-box-title">
                        <label htmlFor="accedent-location-input">
                            Location (Room / Area)
                        </label>
                    </h2>
                </div>
            </div>
                <div className="form-row">
                    <div className="input max-width p-hor-lg">
                        <input
                            type="date"
                            id="s3-date-input"
                            className="text-box max-width"
                            name="text"
                            autoComplete="on"
                            placeholder=" "
                            value=""
                            onChange={ () => {} }
                        />
                        <h2 className="text-box-title">
                            <label htmlFor="s3-date-input">
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
    );
}

export default Ad1;