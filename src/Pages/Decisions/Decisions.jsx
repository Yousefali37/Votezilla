import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import DecisionVotingCard from './../../Components/Cards/Voting-cards/Decision-voting-card/DecisionVotingCard';

function Decisions() {

    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1);
    }
    return (
        <div className="min-vh-100 d-flex justify-content-center align-items-center position-relative">
            <button
                className="go-back-btn shadow-lg fade-in"
                onClick={handleGoBack}
                aria-label="Go back to the previous page"
            >
                <FontAwesomeIcon icon={faArrowLeft} />
            </button>
            <DecisionVotingCard />
        </div>
    )
}

export default Decisions;