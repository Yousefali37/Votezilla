import './Decisions.css';
import GoBackBtn from "../../Components/Go Back btn/GoBackBtn";
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Loading from './../../Components/Loading/Loading';
import DecisionVotingCard from '../../Components/Cards/Voting-cards/Decision-voting-card/DecisionVotingCard';

function Decisions() {

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

    return (
        <div className="min-vh-100 d-flex justify-content-center align-items-center position-relative">
            <GoBackBtn />
            {
                filterData.length > 0 ? (
                    <div className='d-flex justify-content-center align-items-center gap-5'>
                        {
                            filterData.map((item, index) => (
                                <DecisionVotingCard key={index} data={item} />
                            ))
                        }
                    </div>
                ) : (
                    <h1>No Decisions Found</h1>
                )
            }
        </div>
    )
}

export default Decisions;