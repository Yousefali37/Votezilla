import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Loading from './../../../Components/Loading/Loading';

function EditCandidates() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [userData, setUserData] = useState({
        CANDIDATE_ID: 0,
        NAME: "",
        POSITION: "",
        SESSION_ID: 0,
        MANAGER_ID: 0
    });
    const [sessions, setSessions] = useState([]);
    const [managers, setManagers] = useState([]);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        Promise.all([
            axios.get(`http://127.0.0.1:8000/api/candidates/${id}`),
            axios.get(`http://127.0.0.1:8000/api/voting-sessions`),
            axios.get(`http://127.0.0.1:8000/api/managers`),
        ])
            .then(([candidateRes, sessionsRes, managersRes]) => {
                setUserData(candidateRes.data);
                setManagers(managersRes.data);
                setSessions(sessionsRes.data);
            })
            .catch(error => {
                setError("Failed to load data: " + error.message);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!userData.NAME || !userData.POSITION || !userData.SESSION_ID || !userData.MANAGER_ID) {
            setError("Please fill out all the fields");
            return;
        }

        setIsLoading(true);
        setError("");
        setSuccess("");

        try {
            const response = await axios.put(`http://127.0.0.1:8000/api/candidates/${id}`, {
                CANDIDATE_ID: parseInt(id),
                NAME: userData.NAME,
                POSITION: userData.POSITION,
                SESSION_ID: parseInt(userData.SESSION_ID),
                MANAGER_ID: parseInt(userData.MANAGER_ID)
            });
            if (response.status === 204) {
                setSuccess("Candidate updated successfully");
                setTimeout(() => {
                    navigate('/manage-candidates/view-candidate');
                }, 1500);
            }
        } catch (e) {
            setError("Failed to update candidate: " + (e.response?.data?.message || e.message));
        } finally {
            setIsLoading(false);
        }
    };

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
                    value={userData.NAME}
                    onChange={(e) => setUserData({ ...userData, NAME: e.target.value })}
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
                    value={userData.POSITION}
                    onChange={(e) => setUserData({ ...userData, POSITION: e.target.value })}
                    required
                />
            </div>

            <div className="form-group">
                <label htmlFor="session_id">Session ID</label>
                <select
                    name="session_id"
                    id="session_id"
                    value={userData.SESSION_ID}
                    onChange={(e) => setUserData({ ...userData, SESSION_ID: e.target.value })}
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
                    value={userData.MANAGER_ID}
                    onChange={(e) => setUserData({ ...userData, MANAGER_ID: e.target.value })}
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

            <button type="submit" disabled={isLoading} className="form-submit-btn">
                {isLoading ? <Loading /> : "Update Candidate"}
            </button>
        </form>
    );
}

export default EditCandidates;