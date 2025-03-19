import './PositionSession.css'
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import HeroSection from './../../../Components/Hero Section/HeroSection';
import data from './Positions Data/PositionData.json';
import { useState } from 'react';
import PositionCard from './../../../Components/Cards/Session-cards/Position-Card/PositionCard';
import FilterBar from './../../../Components/Search/FilterBar/FilterBar';

function PositionSession() {

    const navigate = useNavigate();
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

    const handleGoBack = () => {
        navigate(-1);
    };

    
    return (
        <>
            <HeroSection title={"Position Sessions"} text={"Vote On the Position You Want"} page={'position'} />
            <FilterBar onFilterChange={handleFilterChange} onSearchChange={handleSearch} page={"position"} />
            <div className="d-flex flex-column justify-content-center align-items-center container-sm gap-5 pt-2 mb-4">
                <button
                    className="go-back-btn shadow-lg fade-in"
                    onClick={handleGoBack}
                    aria-label="Go back to the previous page"
                >
                    <FontAwesomeIcon icon={faArrowLeft} />
                </button>
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