function Ad1(props) {
    return(
        <form>
            <div className="input max-width p-hor-lg">
                <textarea
                    id="what-happened-input"
                    className="text-area text-box max-width"
                    name="what-happened-input"
                    autoComplete="on"
                    placeholder=" "
                    value=""
                    onChange={ () => {} }
                />
                <h2 className="text-box-title">
                    <label htmlFor="what-happened-input">
                        What Happened?
                    </label>
                </h2>
            </div>
        </form>
    );
}

export default Ad1;