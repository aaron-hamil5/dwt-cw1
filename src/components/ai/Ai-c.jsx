function Aic(props) {
    return(
        <form>
            <p className="text-display-lg font-thin text-center text-error">NONE RECORDED</p>
            <ul className="p-sm m-sm">
                <li>
                    <p className="text-title-lg font-thick text-tertiary">Firstname Lastname - Shift Manager</p>
                    <div className="input max-width p-hor-sm">
                        <select
                            id="name-witness-input"
                            name="name-witness-input"
                            className="text-box max-width"
                            value=""
                            onChange={ () => {} }>
                            <option value="statement-no">No</option>
                            <option value="statement-yes">Yes</option>
                        </select>
                        <h2 className="text-box-title">
                            <label htmlFor="name-witness-input">
                                Statement?
                            </label>
                        </h2>
                    </div>
                </li>
                <li>
                    <p className="text-title-lg font-thick text-tertiary">Firstname Lastname - Shift Manager</p>
                    <div className="input max-width p-hor-sm">
                        <select
                            id="1name-witness-input"
                            name="1name-witness-input"
                            className="text-box max-width"
                            value=""
                            onChange={ () => {} }>
                            <option value="statement-no">No</option>
                            <option value="statement-yes">Yes</option>
                        </select>
                        <h2 className="text-box-title">
                            <label htmlFor="1name-witness-input">
                                Statement?
                            </label>
                        </h2>
                    </div>
                </li>
                <li>
                    <p className="text-title-lg font-thick text-tertiary">Firstname Lastname - Shift Manager</p>
                    <div className="input max-width p-hor-sm">
                        <select
                            id="2name-witness-input"
                            name="2name-witness-input"
                            className="text-box max-width"
                            value=""
                            onChange={ () => {} }>
                            <option value="statement-no">No</option>
                            <option value="statement-yes">Yes</option>
                        </select>
                        <h2 className="text-box-title">
                            <label htmlFor="2name-witness-input">
                                Statement?
                            </label>
                        </h2>
                    </div>
                </li>
                <li>
                    <p className="text-title-lg font-thick text-tertiary">Firstname Lastname - Shift Manager</p>
                    <div className="input max-width p-hor-sm">
                        <select
                            id="3name-witness-input"
                            name="3name-witness-input"
                            className="text-box max-width"
                            value=""
                            onChange={ () => {} }>
                            <option value="statement-no">No</option>
                            <option value="statement-yes">Yes</option>
                        </select>
                        <h2 className="text-box-title">
                            <label htmlFor="3name-witness-input">
                                Statement?
                            </label>
                        </h2>
                    </div>
                </li>
            </ul>
        </form>
    )
}

export default Aic