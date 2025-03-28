import './DecisionSession.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import DecisionCard from './../../../Components/Session-cards/Decision-card/DecisionCard';
import HeroSection from '../../../Components/Hero Section/HeroSection';
import data from './Decisions Data/DecisionsData.json';
import FilterBar from '../../../Components/Search/FilterBar';

function DecisionSession() {
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState("");
    const [filters, setFilteredData] = useState({
        status: "",
        category: "",
    });

    const filteredData = data.filter((decision) => {
        const matchStatus = filters.status ? filters.status.toLowerCase() === decision.status.toLowerCase() : true;
        const matchCategory = filters.category ? filters.category.toLowerCase() === decision.category.toLowerCase() : true;
        const matchSearch = decision.title.toLowerCase().includes(searchQuery.toLowerCase());

        return matchStatus && matchCategory && matchSearch;
    });

    const handleFilterChange = (filterType, value) => {
        setFilteredData((prevFilters) => ({
            ...prevFilters,
            [filterType]: value,
        }));
    };

    const handleSearch = (query) => {
        setSearchQuery(query);
    };

    const handleGoBack = () => {
        navigate(-1);
    };

    return (
        <>
            <HeroSection page={"decision"} title={"Decision Sessions"} text={"Choose the Session you want to vote on"} />
            <FilterBar onFilterChange={handleFilterChange} onSearchChange={handleSearch} page={"decision"} />
            <div className="d-flex flex-column justify-content-center align-items-center container-sm gap-5 mb-4 mt-lg-0 pt-lg-0">
                <button
                    className="go-back-btn shadow-lg fade-in"
                    onClick={handleGoBack}
                    aria-label="Go back to the previous page"
                >
                    <FontAwesomeIcon icon={faArrowLeft} />
                </button>
                <div className="container row justify-content-center align-items-center">
                    {
                        filteredData.length > 0 ? (
                            filteredData.map((decision) => (
                                <div className="col-lg-5 col-sm-12" key={decision.id}>
                                    <DecisionCard
                                        id={decision.id}
                                        title={decision.title}
                                        desc={decision.desc}
                                        duration={decision.duration}
                                    />
                                </div>
                            ))
                        ) : (
                            <p className="text-center">No decisions match your filters.</p>
                        )
                    }
                </div>
            </div>
        </>
    );
}

export default DecisionSession;
