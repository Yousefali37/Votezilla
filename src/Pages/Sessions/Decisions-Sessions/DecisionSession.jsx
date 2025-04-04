import { useState } from 'react';
import HeroSection from '../../../Components/Hero Section/HeroSection';
import data from './Decisions Data/DecisionsData.json';
import DecisionCard from './../../../Components/Cards/Session-cards/Decision-card/DecisionCard';
import FilterBar from './../../../Components/Search/FilterBar/FilterBar';
import GoBackBtn from '../../../Components/Go Back btn/GoBackBtn';

function DecisionSession() {
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

    return (
        <>
            <HeroSection page={"decision"} title={"Decision Sessions"} text={"Choose the Session you want to vote on"} />
            <FilterBar onFilterChange={handleFilterChange} onSearchChange={handleSearch} page={"decision"} />
            <div className="d-flex flex-column justify-content-center align-items-center container-sm gap-5 mb-4 mt-lg-0 pt-lg-0">
                <GoBackBtn />
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
