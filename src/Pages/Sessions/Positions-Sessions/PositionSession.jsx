import { useEffect, useState } from 'react';
import axios from 'axios';
import HeroSection from '../../../Components/Hero Section/HeroSection';
import PositionCard from '../../../Components/Cards/Session-cards/Position-Card/PositionCard';
import FilterBar from '../../../Components/Search/FilterBar/FilterBar';
import Loading from '../../../Components/Loading/Loading';
import toast from 'react-hot-toast';
import './PositionSession.css';

function PositionSession() {
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [filters, setFilters] = useState({
        position: '',
        status: ''
    });
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        const fetchPositions = async () => {
            setIsLoading(true);
            try {
                const response = await axios.get("http://127.0.0.1:8000/api/election-positions");
                setData(response.data);
                setFilteredData(response.data); // Initialize filtered data
            } catch (error) {
                console.error('Error fetching positions:', error);
                toast.error('Failed to load position sessions');
            } finally {
                setIsLoading(false);
            }
        };

        fetchPositions();
    }, []);

    // Apply filters whenever filters or search query changes
    useEffect(() => {
        const filtered = data.filter(item => {
            const matchesPosition = !filters.position ||
                item.position.toLowerCase().includes(filters.position.toLowerCase());
            const matchesStatus = !filters.status ||
                item.election?.status.toLowerCase() === filters.status.toLowerCase();
            const matchesSearch = !searchQuery ||
                item.position.toLowerCase().includes(searchQuery.toLowerCase()) ||
                item.description.toLowerCase().includes(searchQuery.toLowerCase());

            return matchesPosition && matchesStatus && matchesSearch;
        });
        setFilteredData(filtered);
    }, [data, filters, searchQuery]);

    const handleFilterChange = (type, value) => {
        setFilters(prev => ({
            ...prev,
            [type]: value
        }));
    };

    const handleSearch = (query) => {
        setSearchQuery(query);
    };

    if (isLoading) {
        return <Loading />;
    }

    return (
        <>
            <HeroSection
                title="Position Sessions"
                text="Vote for the Position You Want"
                page="position"
            />

            <FilterBar
                page="position"
                onFilterChange={handleFilterChange}
                onSearchChange={handleSearch}
            />

            <div className="container-fluid py-4">
                <div className="row justify-content-center">
                    <div className="col-auto">
                        <div className='row justify-content-center'>
                            {filteredData.length > 0 ? (
                                filteredData.map((position) => (
                                    <div className="col-auto" key={position.election_position_id}>
                                        <PositionCard
                                            id={position.election_id}
                                            position={position.position}
                                            status={position.election?.status}
                                            desc={position.description}
                                            duration={position.duration}
                                        />
                                    </div>
                                ))
                            ) : (
                                <div className="text-center py-5">
                                    <h3>No position sessions available</h3>
                                    <p className="text-muted">Please check back later or adjust your filters</p>
                                    <button
                                        className="btn btn-outline-primary mt-2"
                                        onClick={() => {
                                            setFilters({ position: '', status: '' });
                                            setSearchQuery('');
                                        }}
                                    >
                                        Reset Filters
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PositionSession;