import { DatePicker } from "@mui/x-date-pickers";

function AddSession() {
    return (
        <form className="form-container">
            <div className="form-group">
                <label htmlFor="sessionName">Session Name</label>
                <input
                    type="text"
                    id="sessionName"
                    name="sessionName"
                    placeholder="Enter session name"
                    required
                />
            </div>

            <div className="form-group">
                <label htmlFor="endDate">End Date</label>
                <DatePicker className="datepicker" />
            </div>

            <div className="form-group">
                <label htmlFor="sessionType">Session Type</label>
                <select
                    name="sessionType"
                    id="sessionType"
                    required
                >
                    <option value="" disabled defaultValue>Select session type</option>
                    <option value="position">Position Voting</option>
                    <option value="decision">Decision Voting</option>
                </select>
            </div>

            <button type="submit" className="form-submit-btn">
                Create Voting Session
            </button>
        </form>
    )
}

export default AddSession;