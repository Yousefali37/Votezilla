import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function EditCandidates() {


    const { id } = useParams();
    const [userData, setUserData] = useState({
        firstName: "",
        positionTitle: "",
        sessionID: ""
    });

    useEffect(() => {
        axios.get(`https://dummyjson.com/users/${id}`)
        .then((res) => setUserData(res.data))
    }, [id])

    console.log(userData);

    return (
            <form className="form-container">
                <div className="form-group">
                    <label htmlFor="name">Candidate Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Enter Candidate name"
                        value={`${userData.firstName} ${userData.lastName} ${userData.maidenName}`}
                        onChange={(e) => {
                            setUserData({...userData, firstName: e.target.value})
                        }}
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
                        value={userData.company?.title ? userData.company?.title : ""}
                        onChange={(e) => {
                            setUserData({...userData, title: e.target.value})
                        }}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="session_id">Session ID</label>
                    <select
                        name="session_id"
                        id="session_id"
                        // // value={}
                        // onChange={(e) => {
                        //     setUserData({...userData, : e.target.value})
                        // }}
                        required
                    >
                        <option value="" disabled>Select session ID</option>
                        <option value="1">#1</option>
                        <option value="2">#2</option>
                    </select>
                </div>

                <button type="submit" className="form-submit-btn">
                    Update Candidate
                </button>
            </form>
    )
}

export default EditCandidates;