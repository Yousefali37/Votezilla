import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

function AddDecision() {
    return (
        <form className="form-container">
            <h2 className="form-title mb-1 text-center">Add New Decision</h2>
            <hr />
            <div className="form-group">
                <label htmlFor="title">Title</label>
                <input
                    type="text"
                    id="title"
                    placeholder="Enter title"
                    required
                />
            </div>

            <div className="form-group">
                <label htmlFor="desc">Description</label>
                <textarea name="desc" id="desc"></textarea>
            </div>

            <div className="form-group">
                <label htmlFor="sessionID">Session ID</label>
                <select
                    name="sessionID"
                    id="sessionID"
                    required
                >
                    <option value="" disabled selected>Select session</option>
                    <option value="session1">Session 1</option>
                    <option value="session2">Session 2</option>
                </select>
            </div>

            <div className="form-group">
                <label htmlFor="endDate">End Date</label>
                <DatePicker className="datepicker" />
            </div>

            <button type="submit" className="form-submit-btn mt-3">
                <FontAwesomeIcon icon={faPlus} /> Add Decision
            </button>
        </form>
    )
}


export default AddDecision;