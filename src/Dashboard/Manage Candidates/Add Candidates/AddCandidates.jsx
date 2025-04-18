
function AddCandidates() {
    return (
        <form className="form-container">
            <div className="form-group">
                <label htmlFor="name">Candidate Name</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter Candidate name"
                    required
                />
            </div>

            <div className="form-group">
                <label htmlFor="position">Position Title</label>
                <input
                    type="text"
                    id="position"
                    name="position"
                    placeholder="Enter Position title"
                    required
                />
            </div>

            <div className="form-group">
                <label htmlFor="session_id">Session ID</label>
                <select
                    name="session_id"
                    id="session_id"
                    required
                >
                    <option value="" disabled selected>Select session ID</option>
                    <option value="1">#1</option>
                    <option value="2">#2</option>
                </select>
            </div>

            <button type="submit" className="form-submit-btn">
                Create Voting Session
            </button>
        </form>
    )
}

export default AddCandidates;