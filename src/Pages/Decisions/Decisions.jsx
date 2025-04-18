import DecisionVotingCard from './../../Components/Cards/Voting-cards/Decision-voting-card/DecisionVotingCard';
import GoBackBtn from "../../Components/Go Back btn/GoBackBtn";

function Decisions() {

    return (
        <div className="min-vh-100 d-flex justify-content-center align-items-center position-relative">
            <GoBackBtn />
            <DecisionVotingCard />
        </div>
    )
}

export default Decisions;