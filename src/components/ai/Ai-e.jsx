function Aie(props) {
    return(
        <form>
            <p className="text-label-md p-hor-sm">Include any training, re-training, maintenance or repair actions to prevent recurrence (there may be no action required).</p>
            <div className="input max-width p-hor-lg">
                <textarea
                    id="action-taken-input"
                    className="text-area text-box max-width"
                    name="action-taken-input"
                    autoComplete="on"
                    placeholder=" "
                    value=""
                    onChange={ () => {} }
                />
                <h2 className="text-box-title">
                    <label htmlFor="action-taken-input">
                        Action Taken?
                    </label>
                </h2>
            </div>
        </form>
    );
}

export default Aie;