import { useEffect, useState } from 'react';
import HeroSection from '../../../Components/Hero Section/HeroSection';
import DecisionCard from './../../../Components/Cards/Session-cards/Decision-card/DecisionCard';
import FilterBar from './../../../Components/Search/FilterBar/FilterBar';
import GoBackBtn from '../../../Components/Go Back btn/GoBackBtn';
import axios from 'axios';
import Loading from '../../../Components/Loading/Loading';
import toast from 'react-hot-toast';

function DecisionSession() {
    const [searchQuery, setSearchQuery] = useState("");
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [filters, setFilters] = useState({
        status: "",
        category: "",
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                setIsLoading(true);
                const response = await axios.get("http://127.0.0.1:8000/api/election-decisions");
                setData(response.data);
            } catch (error) {
                toast.error('Failed to load decisions');
                console.error('Error fetching data:', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    const filteredData = data.filter((decision) => {
        const matchStatus = !filters.status ||
            decision.status?.toLowerCase() === filters.status.toLowerCase();
        const matchCategory = !filters.category ||
            decision.category?.toLowerCase() === filters.category.toLowerCase();
        const matchSearch = !searchQuery ||
            decision.title?.toLowerCase().includes(searchQuery.toLowerCase());

        return matchStatus && matchCategory && matchSearch;
    });

    const handleFilterChange = (filterType, value) => {
        setFilters(prev => ({
            ...prev,
            [filterType]: value,
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
                page="decision"
                title="Decision Sessions"
                text="Choose the Session you want to vote on"
            />
            <FilterBar
                onFilterChange={handleFilterChange}
                onSearchChange={handleSearch}
                page="decision"
            />

            <div className="d-flex flex-column justify-content-center align-items-center container-sm gap-5 mb-4 mt-lg-0 pt-lg-0">
                <div className="container row justify-content-center align-items-center">
                    {filteredData.length > 0 ? (
                        filteredData.map((item) => (
                            <div className="col-lg-5 col-sm-12" key={item.election_decision_id}>
                                <DecisionCard
                                    id={item.election_id}
                                    title={item.title}
                                    status={item.election?.status}
                                    desc={item.description}
                                    duration={item.duration}
                                />
                            </div>
                        ))
                    ) : (
                        <div className="text-center py-5">
                            <h4>No decisions match your filters</h4>
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
        </>
    );
}

export default DecisionSession;