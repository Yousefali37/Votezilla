import axios from "axios";
import { useEffect, useState } from "react";
import Loading from "../../../Components/Loading/Loading";
import { useParams } from "react-router-dom";

function EditUser() {
    const { id } = useParams();

    const [userData, setUserData] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/users/${id}`)
            .then((res) => {
                setUserData(res.data);
                setLoading(false);
            })
    }, [id])

    if (loading) {
        return <Loading />;
    }

    return (
        <form className="form-container">
            <h2 className="form-title mb-1 text-center">Update User</h2>
            <hr />
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter User name"
                    value={userData.name}
                    onChange={(e) => {
                        setUserData({...userData, firstName: e.target.value})
                    }}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="name">Role</label>
                <select 
                    name="role" 
                    id="role"
                    value={userData.role}
                    onChange={(e) => {
                        setUserData({...userData, role: e.target.value})
                    }}
                >
                    <option value="manager">Manager</option>
                    <option value="voter">Voter</option>
                </select>
            </div>
            <div className="form-group">
                <label htmlFor="name">Fingerprint</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter User name"
                    value={userData.fingerprint}
                    onChange={(e) => {
                        setUserData({...userData, fingerprint: e.target.value})
                    }}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="name">Login ID</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter User name"
                    value={userData.login_id}
                    onChange={(e) => {
                        setUserData({...userData, login_id: e.target.value})
                    }}
                    required
                />
                <p class="form-text text-muted">
                    This will be used as the login ID for the user. It should be unique and not contain any special characters.
                </p>
            </div>

            <button type="submit" className="form-submit-btn">
                Update User
            </button>
        </form>
    )
}

export default EditUser;