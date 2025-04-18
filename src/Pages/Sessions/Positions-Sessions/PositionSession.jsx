import './PositionSession.css'
import HeroSection from './../../../Components/Hero Section/HeroSection';
import data from './Positions Data/PositionData.json';
import { useState } from 'react';
import PositionCard from './../../../Components/Cards/Session-cards/Position-Card/PositionCard';
import FilterBar from './../../../Components/Search/FilterBar/FilterBar';

function PositionSession() {

    const [filterValues, SetFilterValues] = useState({
        position: '',
        status: '',
    })

    const [searchQuery, SetSearchQuery] = useState("");

    const FilterData = data.filter((data) => {
        const filterPosition = filterValues.position ? data.position.toLowerCase() === filterValues.position.toLowerCase() : true;
        const filterStatus = filterValues.status ? data.status.toLowerCase() === filterValues.status.toLowerCase() : true;
        const filterSearch = data.position.toLowerCase().includes(searchQuery.toLowerCase());
        return filterPosition && filterStatus && filterSearch;
    })

    const handleFilterChange = (filterType, value) => {
        SetFilterValues((prevfilters) => ({
            ...prevfilters,
            [filterType]: value,
        }));
    };

    const handleSearch = (query) => {
        SetSearchQuery(query);
    }

    
    return (
        <>
            <HeroSection title={"Position Sessions"} text={"Vote On the Position You Want"} page={'position'} />
            <FilterBar onFilterChange={handleFilterChange} onSearchChange={handleSearch} page={"position"} />
            <div className="d-flex flex-column justify-content-center align-items-center container-sm gap-5 pt-2 mb-4">
                <div className="container row justify-content-center align-items-center">
                    {
                        FilterData.map((data) => {
                            return (
                                <div className="col-lg-5 col-sm-12" key={data.id}>
                                    <PositionCard id={data.id} position={data.position} desc={data.desc} duration={data.duration} />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default PositionSession;