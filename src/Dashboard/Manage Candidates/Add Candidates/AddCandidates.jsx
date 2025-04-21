import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "../../../Components/Loading/Loading";

function AddCandidates() {

    const navigate = useNavigate();

    const [userData, setUserData] = useState({
        name: "",
        position: "",
        sessionId: "",
        Manger_ID: ""
    })
    const [sessions, setSessions] = useState([]);
    const [managers, setManagers] = useState([]);

    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        Promise.all([
            axios.get(`http://127.0.0.1:8000/api/voting-sessions`),
            axios.get(`http://127.0.0.1:8000/api/managers`),
        ])
            .then(([sessionsRes, managersRes]) => {
                setManagers(managersRes.data);
                setSessions(sessionsRes.data);
            })
            .catch(error => {
                setError("Failed to load data: " + error.message);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!userData.name || !userData.position || !userData.sessionId || !userData.Manger_ID ) {
            setError("Please fill out all the fields");
            return;
        }

        setIsLoading(true);
        setError("");
        setSuccess("");

        try {
            let response = await axios.post('http://127.0.0.1:8000/api/candidates', {
                CANDIDATE_ID: 3,
                NAME: userData.name,
                POSITION: userData.position,
                SESSION_ID: parseInt(userData.sessionId),
                MANAGER_ID: parseInt(userData.Manger_ID)
            })
            if (response.status === 200) {
                setSuccess("Candidate add successfully");
                setTimeout(() => {
                    navigate('/manage-candidates/view-candidate');
                }, 1500);
            } else {
                setError("Faild to add the candidate, try again");
            }
        } catch (err) {
            console.error(err);
            setError("Error Occured, please try again");
        } finally {
            setIsLoading(false);
        }
    }

    if (isLoading) {
        return <Loading />;
    }

    return (
        <form className="form-container" onSubmit={handleSubmit}>

            {error && (
                <p className="form-text fw-bold text-danger mb-3 fade-in">
                    {error}
                </p>
            )}
            {success && (
                <p className="form-text fw-bold text-success mb-3 fade-in">
                    {success}
                </p>
            )}

            <div className="form-group">
                <label htmlFor="name">Candidate Name</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter Candidate name"
                    value={userData.name}
                    onChange={(e) => {
                        setUserData({ ...userData, name: e.target.value })
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
                    value={userData.position}
                    onChange={(e) => {
                        setUserData({ ...userData, position: e.target.value })
                    }}
                    required
                />
            </div>

            <div className="form-group">
                <label htmlFor="session_id">Session ID</label>
                <select
                    name="session_id"
                    id="session_id"
                    value={userData.sessionId}
                    onChange={(e) => setUserData({ ...userData, sessionId: e.target.value })}
                    required
                >
                    <option value="" disabled>Select session ID</option>
                    {sessions.map(session => (
                        <option key={session.SESSION_ID} value={session.SESSION_ID}>
                            #{session.SESSION_ID} - {session.ELECTION_NAME}
                        </option>
                    ))}
                </select>
            </div>

            <div className="form-group">
                <label htmlFor="manger_id">Manager ID</label>
                <select
                    name="manger_id"
                    id="manger_id"
                    value={userData.Manger_ID}
                    onChange={(e) => setUserData({ ...userData, Manger_ID: e.target.value })}
                    required
                >
                    <option value="" disabled>Select manager ID</option>
                    {managers.map(manager => (
                        <option key={manager.MANAGER_ID} value={manager.MANAGER_ID}>
                            #{manager.MANAGER_ID} - {manager.FULL_NAME}
                        </option>
                    ))}
                </select>
            </div>

            <button type="submit" className="form-submit-btn">
                {isLoading ? <Loading /> : "Create Voting Session"}
            </button>
        </form>
    )
}

export default AddCandidates;