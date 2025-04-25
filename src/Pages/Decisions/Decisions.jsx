import './Decisions.css';
import GoBackBtn from "../../Components/Go Back btn/GoBackBtn";
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Loading from './../../Components/Loading/Loading';
import DecisionVotingCard from '../../Components/Cards/Voting-cards/Decision-voting-card/DecisionVotingCard';
import HeroSection from '../../Components/Hero Section/HeroSection';

function Decisions() {
    const navigate = useNavigate();

    const { id } = useParams();
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        axios.get(`http://127.0.0.1:8000/api/election-decisions`)
            .then((res) => setData(res.data))
            .catch((err) => console.log(err))
            .finally(() => setIsLoading(false));
    }, [id])

    const filterData = data.filter(item => item.election_id != null && item.election_id == id);

    if (isLoading) {
        return (
            <Loading />
        )
    }

    const onClickSubmit = () => {
        navigate('/verify-fingerprint');
    }

    return (
        <>
            <GoBackBtn />
            <div className="min-vh-100 d-flex justify-content-center align-items-center position-relative">
                {
                    filterData.length > 0 ? (
                        <div className='d-flex flex-column justify-content-center gap-3'>
                            <div className='d-flex justify-content-center align-items-center gap-5'>
                                {
                                    filterData.map((item, index) => (
                                        <DecisionVotingCard key={index} data={item} />
                                    ))
                                }
                            </div>
                            <div className="text-center fade-in">
                                <button type="submit" className="submit-btn" onClick={onClickSubmit}>Submit</button>
                            </div>
                        </div>
                    ) : (
                        <h1>No Decisions Found</h1>
                    )
                }
            </div>
        </>
    )
}

export default Decisions;