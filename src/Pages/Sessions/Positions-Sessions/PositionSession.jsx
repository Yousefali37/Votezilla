import './PositionSession.css'
import HeroSection from './../../../Components/Hero Section/HeroSection';
import { useEffect, useState } from 'react';
import PositionCard from './../../../Components/Cards/Session-cards/Position-Card/PositionCard';
import FilterBar from './../../../Components/Search/FilterBar/FilterBar';
import axios from 'axios';
import Loading from './../../../Components/Loading/Loading';

function PositionSession() {

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    // const [filterValues, SetFilterValues] = useState([]);

    useEffect(() => {
        setIsLoading(true);
        try {
            axios.get("http://127.0.0.1:8000/api/election-positions")
                .then((res) => setData(res.data))
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    }, [])

    console.log(data);

    if (isLoading) {
        return (
            <Loading />
        )
    }

    return (
        <>
            <HeroSection title={"Position Sessions"} text={"Vote On the Position You Want"} page={'position'} />
            <FilterBar page={"position"} />
            <div className="d-flex flex-column justify-content-center align-items-center container-sm gap-5 pt-2 mb-4">
                {
                    data.length ? (
                        <div className="container row justify-content-center align-items-center">
                            {
                                data.map((data) => {
                                    return (
                                        <div className="col-lg-5 col-sm-12" key={data.SESSION_ID}>
                                            <PositionCard desc={data.description} duration={data.duration} id={data.election_id} position={data.position} status={data.election.status} />
                                        </div>
                                    )
                                })
                            }
                        </div>
                    ) : (
                        <div className='d-flex flex-column justify-content-center align-items-center mt-5'>
                            <h1 className='text-center'>No Position Sessions Available</h1>
                            <p className='text-center'>Please check back later</p>
                        </div>
                    )
                }
            </div>
        </>
    )
}

export default PositionSession;