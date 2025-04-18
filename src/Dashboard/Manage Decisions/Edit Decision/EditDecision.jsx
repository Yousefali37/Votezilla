import { DatePicker } from "@mui/x-date-pickers";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from './../../../Components/Loading/Loading';

function EditDecision() {

    const { id } = useParams();

    const [decisionData, setDecisionData] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(`https://dummyjson.com/users/${id}`)
            .then((res) => {
                setDecisionData(res.data);
                setLoading(false);
            })
    }, [id])

    console.log(decisionData);

    if (loading) {
        return <Loading />;
    }

    return (
        <form className="form-container">
            <h2 className="form-title mb-1 text-center">Update Decision</h2>
            <hr />
            <div className="form-group">
                <label htmlFor="title">Title</label>
                <input
                    type="text"
                    id="title"
                    placeholder="Enter title"
                    value={decisionData.company?.title || ''}
                    onChange={(e) => {
                        setDecisionData({ ...decisionData, title: e.target.value })
                    }}
                    required
                />
            </div>

            <div className="form-group">
                <label htmlFor="desc">Description</label>
                <textarea 
                    name="desc" 
                    id="desc"
                    value={decisionData.address?.address}
                ></textarea>
            </div>

            <div className="form-group">
                <label htmlFor="sessionID">Session ID</label>
                <select
                    name="sessionID"
                    id="sessionID"
                    required
                >
                    <option value="" disabled defaultValue>Select session</option>
                    <option value="session1">Session 1</option>
                    <option value="session2">Session 2</option>
                </select>
            </div>

            <div className="form-group">
                <label htmlFor="endDate">End Date</label>
                <DatePicker className="datepicker" value={decisionData?.birthDate} />
            </div>

            <button type="submit" className="form-submit-btn mt-3">
                Update Decision
            </button>
        </form>
    )
}

export default EditDecision;