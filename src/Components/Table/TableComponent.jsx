import './TableComponent.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import {
    ModeEdit as EditIcon,
    Delete as DeleteIcon,
    Search as SearchIcon
} from '@mui/icons-material';
import Loading from '../Loading/Loading';
import { useNavigate } from 'react-router-dom';

function TableComponent({ endpoint, title }) {
    const navigate = useNavigate();
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [tableHeader, setTableHeader] = useState([]);

    useEffect(() => {
        const handleTableHeader = () => {
            if (title === "session") {
                setTableHeader(["ID", "Election Name", "Start Date", "End Date", "Total Votes", "Status"])
            } else if (title === "candidate") {
                setTableHeader(["ID", "Name", "Position", "Session ID"])
            } else if (title === "user") {
                setTableHeader(["ID", "Name"])
            } else if (title === "decision") {
                setTableHeader(["ID", "Date", "Description"]);
            }
        }

        setLoading(true);
        axios.get(endpoint || "https://dummyjson.com/users")
            .then((res) => {
                setData(res.data.users || []);
                setLoading(false);
            })
            .catch(error => {
                console.error("Error fetching data:", error);
                setLoading(false);
            });

            handleTableHeader();
    }, [endpoint, title]);

    const filteredData = data.filter(user =>
        `${user.firstName} ${user.lastName}`.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.id.toString().includes(searchTerm)
    );

    if (loading) {
        return <Loading />;
    }

    console.log(tableHeader);

    return (
        <div className="table-card">
            <div className="table-header">
                <h2>{title[0].toUpperCase() + title.slice(1)} Management</h2>
                <div className="search-container">
                    <SearchIcon className="search-icon" />
                    <input
                        type="text"
                        placeholder={`Search ${title}...`}
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </div>

            <div className="table-responsive">
                <table className="modern-table">
                    <thead>
                        <tr>
                            {
                                tableHeader.map((item) => {
                                    return (
                                        <th key={item}>
                                            {item}
                                        </th>
                                    )
                                })
                            }
                        </tr>
                    </thead>
                    <tbody>
                        {filteredData.length > 0 ? (
                            filteredData.map((user) => (
                                <tr key={user.id}>
                                    <td>
                                        <div className="user-info">
                                            <img
                                                src={user.image || 'https://i.pravatar.cc/40'}
                                                alt="User"
                                                className="user-avatar"
                                            />
                                            <div>
                                                <div className="user-name">{user.firstName} {user.lastName}</div>
                                                <div className="user-email">{user.email}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>#{user.id}</td>
                                    <td>
                                        <span className={`status-badge ${user.id % 2 === 0 ? 'active' : 'inactive'}`}>
                                            {user.id % 2 === 0 ? 'Active' : 'Inactive'}
                                        </span>
                                    </td>
                                    <td>
                                        <span className={`role-badge ${user.id % 3 === 0 ? 'admin' : user.id % 3 === 1 ? 'editor' : 'user'}`}>
                                            {user.id % 3 === 0 ? 'Admin' : user.id % 3 === 1 ? 'Editor' : 'User'}
                                        </span>
                                    </td>
                                    <td>
                                        <div className="action-buttons">
                                            <button className="edit-btn" title="Edit" onClick={() => navigate(`/manage-${title}s/edit-${title}/${user.id}`)}>
                                                <EditIcon />
                                            </button>
                                            <button className="delete-btn" title="Delete">
                                                <DeleteIcon />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr className="no-results">
                                <td colSpan="5">No {title}s found</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

TableComponent.propTypes = {
    endpoint: PropTypes.string,
    title: PropTypes.string.isRequired,
};

export default TableComponent;