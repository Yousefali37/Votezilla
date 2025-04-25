import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import PositionVotingCard from './../../Components/Cards/Voting-cards/Position-voting-card/PositionVotingCard';
import GoBackBtn from "../../Components/Go Back btn/GoBackBtn";
import axios from "axios";

function Positions() {

    const { id } = useParams();
    const [data, setData] = useState([]);
    const [selectedCard, setSelectedCard] = useState(null);

    // Fetching the candidates data from the API
    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/candidates`)
            .then((res) => setData(res.data))
    }, [id])

    const filterData = data.filter(item => item.election_id != null && item.election_id == id);

    // Using useNavigate hook to programmatically navigate
    const navigate = useNavigate();


    // Function to handle the selection of a candidate
    const handleVoteFor = (id) => {
        setSelectedCard(id);
    }

    // Function to handle the submission of the vote
    const handleSubmit = () => {
        if (selectedCard === null) {
            toast.error('Please select a candidate before submitting.');
            return;
        }
        navigate('/verify-fingerprint');
        toast.dismiss('Please Verify your fingerprint...');
    }

    console.log(selectedCard)

    return (
        <div className="min-vh-100 d-flex flex-column justify-content-center align-items-center gap-4">
            <GoBackBtn />
            <div className="row justify-content-around align-items-center gap-md-1 gap-sm-4">
                {data.length === 0 ? (
                    <h2 className="text-center fade-in">No positions available yet.</h2>
                ) : (
                    <>
                        {
                            filterData.map((data) => {
                                return (
                                    <div className="col-lg-5 col-sm-12 mb-5 fade-in" key={data.candidate_id}>
                                        <PositionVotingCard
                                            name={data.name}
                                            id={data.candidate_id}
                                            bio={data.bio}
                                            position={data.election.name}
                                            onVoteFor={handleVoteFor}
                                            isSelected={selectedCard === data.candidate_id}
                                        />
                                    </div>
                                )
                            })
                        }
                        <div className="text-center fade-in">
                            <button type="submit" className="submit-btn" onClick={handleSubmit}>Submit</button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}

export default Positions;