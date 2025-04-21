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

function TableComponent({ endpoint, title, headers, dataFields, searchField }) {
    const navigate = useNavigate();
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        setLoading(true);
        axios.get(endpoint)
            .then((res) => {
                setData(res.data);
                setLoading(false);
            })
            .catch(error => {
                console.error("Error fetching data:", error);
                setLoading(false);
            });

    }, [endpoint]);

    const getIdField = () => {
        switch (title) {
            case 'candidate':
                return 'CANDIDATE_ID';
            case 'session':
                return 'SESSION_ID';
            case 'user':
                return 'id';
            case 'decision':
                return 'DECISION_ID';
            default:
                return 'id';
        }
    };

    const filteredData = data.filter(item => {
        const searchValue = searchField ? item[searchField] : (item.name || item.election_Name || item.description || '');
        const idValue = item[getIdField()];
        return (
            (searchValue && searchValue.toString().toLowerCase().includes(searchTerm.toLowerCase())) ||
            (idValue && idValue.toString().includes(searchTerm))
        );
    });

    const handleDelete = async (id) => {
        try {
            await axios.delete(`${endpoint}/${id}`);
            setData(data.filter(item => item[getIdField()] !== id));
        } catch (error) {
            console.error(`Error deleting ${title}:`, error);
            alert(`Failed to delete ${title}.`);
        }
    }

    if (loading) {
        return <Loading />;
    }

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
                                headers.map((header, index) => {
                                    return (
                                        <th key={index}>
                                            {header}
                                        </th>
                                    )
                                })
                            }
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredData.length > 0 ? (
                            filteredData.map((item) => (
                                <tr key={item[getIdField()]}>
                                    {dataFields.map((field, index) => (
                                        <td key={index}>
                                            <p>{item[field] || 'N/A'}</p>
                                        </td>
                                    ))}
                                    <td>
                                        <div className="action-buttons">
                                            <button
                                                className="edit-btn"
                                                title="Edit"
                                                onClick={() => navigate(`/manage-${title}s/edit-${title}/${item[getIdField()]}`)}
                                            >
                                                <EditIcon />
                                            </button>
                                            <button
                                                className="delete-btn"
                                                title="Delete"
                                                onClick={() => handleDelete(item[getIdField()])}
                                            >
                                                <DeleteIcon />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr className="no-results">
                                <td colSpan={headers.length + 1}>No {title}s found</td>
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