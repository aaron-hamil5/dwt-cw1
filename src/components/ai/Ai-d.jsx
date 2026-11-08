function Aid(props) {
    return(
        <form>
            <div className="horizontal p-sm m-sm">
                    <p className="text-label-sm p-hor-md">If there is no camera on device, print and sketch out incident.</p>
                    <p className="bubble accept" onClick={() => {}}>Take Photo</p>
                    <p className="bubble decline" onClick={() => {}}>Delete Photo</p>
            </div>
        </form>
    )
}

export default Aid