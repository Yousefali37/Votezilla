import axios from "axios";
import { useEffect, useState } from "react";
import Loading from "../../../Components/Loading/Loading";
import { useParams } from "react-router-dom";

function EditUser() {
    const { id } = useParams();

    const [userData, setUserData] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(`https://dummyjson.com/users/${id}`)
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
                    value={userData.firstName}
                    onChange={(e) => {
                        setUserData({...userData, firstName: e.target.value})
                    }}
                    required
                />
            </div>

            <button type="submit" className="form-submit-btn">
                Update User
            </button>
        </form>
    )
}

export default EditUser;