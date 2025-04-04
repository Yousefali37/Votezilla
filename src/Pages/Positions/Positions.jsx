import { useState } from "react";
import PositionData from "./PositionsData";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import PositionVotingCard from './../../Components/Cards/Voting-cards/Position-voting-card/PositionVotingCard';
import GoBackBtn from "../../Components/Go Back btn/GoBackBtn";

function Positions() {
    const navigate = useNavigate();
    const [selectedCard, setSelectedCard] = useState(null);

    const handleVoteFor = (id) => {
        setSelectedCard(id);
    }

    const handleSubmit = () => {
        if (selectedCard === null) {
            toast.error('Please select a candidate before submitting.');
            return;
        }
        navigate('/home');
        toast.success('Your Vote has been submitted successfully');
    }

    const data = PositionData.map((candidate) => {
        return (
            <div className="col-md-5 col-sm-12" key={candidate.id}>
                <PositionVotingCard
                    id={candidate.id}
                    name={candidate.name}
                    image={candidate.image}
                    email={candidate.email}
                    term={candidate.term}
                    experience={candidate.experience}
                    position={candidate.position}
                    desc={candidate.desc}
                    isSelected={selectedCard === candidate.id}
                    onVoteFor={handleVoteFor}
                />
            </div>
        );
    });

    return (
        <div className="min-vh-100 d-flex flex-column justify-content-center align-items-center gap-4">
            <GoBackBtn />
            <div className="row justify-content-around align-items-center gap-md-1 gap-sm-4">
                {data.length === 0 ? (
                    <h2 className="text-center fade-in">No positions available yet.</h2>
                ) : (
                    data
                )}
            </div>
            <div className="text-center fade-in">
                <button type="submit" className="submit-btn" onClick={handleSubmit}>Submit</button>
            </div>
        </div>
    );
}

export default Positions;