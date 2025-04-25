import { useEffect, useState } from 'react';
import HeroSection from '../../../Components/Hero Section/HeroSection';
// import data from './Decisions Data/DecisionsData.json';
import DecisionCard from './../../../Components/Cards/Session-cards/Decision-card/DecisionCard';
import FilterBar from './../../../Components/Search/FilterBar/FilterBar';
import GoBackBtn from '../../../Components/Go Back btn/GoBackBtn';
import axios from 'axios';

function DecisionSession() {
    // const [searchQuery, setSearchQuery] = useState("");
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get("http://127.0.0.1:8000/api/election-decisions")
        .then((res) => setData(res.data))
    }, [])

    // const filteredData = data.filter((decision) => {
    //     const matchStatus = filters.status ? filters.status.toLowerCase() === decision.status.toLowerCase() : true;
    //     const matchCategory = filters.category ? filters.category.toLowerCase() === decision.category.toLowerCase() : true;
    //     const matchSearch = decision.title.toLowerCase().includes(searchQuery.toLowerCase());

    //     return matchStatus && matchCategory && matchSearch;
    // });

    // const handleFilterChange = (filterType, value) => {
    //     setFilteredData((prevFilters) => ({
    //         ...prevFilters,
    //         [filterType]: value,
    //     }));
    // };

    // const handleSearch = (query) => {
    //     setSearchQuery(query);
    // };

    return (
        <>
            <HeroSection page={"decision"} title={"Decision Sessions"} text={"Choose the Session you want to vote on"} />
            <FilterBar onFilterChange={""} onSearchChange={""} page={"decision"} />
            <div className="d-flex flex-column justify-content-center align-items-center container-sm gap-5 mb-4 mt-lg-0 pt-lg-0">
                <GoBackBtn />
                <div className="container row justify-content-center align-items-center">
                    {
                        data.length > 0 ? (
                            data.map((data) => (
                                <div className="col-lg-5 col-sm-12" key={data.election_decision_id}>
                                    <DecisionCard
                                        id={data.election_id}
                                        title={data.title}
                                        status={data.election.status}
                                        desc={data.description}
                                        duration={data.duration}
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
