import { DatePicker } from "@mui/x-date-pickers";

function EditSession() {
    return (
        <form className="form-container">
            <h2 className="form-title mb-1 text-center">Update Session</h2>
            <hr />
            <div className="form-group">
                <label htmlFor="sessionName" className="manage-session__label">Session Name</label>
                <input
                    type="text"
                    id="sessionName"
                    name="sessionName"
                    className="manage-session__input"
                    placeholder="Enter session name"
                    required
                />
            </div>

            <div className="form-group">
                <label htmlFor="endDate" className="manage-session__label">End Date</label>
                <DatePicker className="manage-session__datepicker" />
            </div>

            <div className="form-group">
                <label htmlFor="sessionType" className="manage-session__label">Session Type</label>
                <select
                    name="sessionType"
                    id="sessionType"
                    className="manage-session__select"
                    required
                >
                    <option value="" disabled defaultValue>Select session type</option>
                    <option value="position">Position Voting</option>
                    <option value="decision">Decision Voting</option>
                </select>
            </div>

            <button type="submit" className="form-submit-btn">
                Update Voting Session
            </button>
        </form>
    )
}

export default EditSession;