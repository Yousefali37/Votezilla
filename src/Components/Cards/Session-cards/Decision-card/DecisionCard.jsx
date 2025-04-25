import { faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

function DecisionCard({ id, title, desc, duration, status }) {
    {/* set navigation */ }
    const navigate = useNavigate();

    return (
        <div className="position-card fade-in">
            {/* navigate to decision session when card is clicked */}
            <div className="card text-center" onClick={() => {
                navigate(`/decision-session/${id}`)
            }}>

                <div className="card-body">

                    {/* Status */}
                    {
                        status && <p className={`card-status status-badge ${status === "active" ? "active" : status === "closed" ? "completed" : "upcoming" }`}>{status}</p>
                    }

                    {/* Status */}
                    <p className="card-status">
                        {status === "active" ? (
                            <span className='card-status__active'>
                                Active
                            </span>
                        ) : (
                            <span className='card-status__inactive'>
                                Inactive
                            </span>
                        )}
                    </p>

                    {/* Title */}
                    <h5 className="card-title">
                        {title}
                    </h5>

                    {/* Description */}
                    <p className="card-text">
                        {desc}
                    </p>
                </div>

                {/* Duration */}
                <div className="card-footer">
                    <FontAwesomeIcon icon={faClock} className="clock-icon" />
                    <span>Ends in: {duration}</span>
                </div>

                <hr />

                {/* Buttons */}
                <div className='d-flex flex-wrap justify-content-center align-items-center gap-sm-0 gap-4'>
                    <button className='verify-btn' onClick={() => {
                        navigate(`/position-session/${id}`);
                    }}>
                        Vote Now
                    </button>
                    <button className='verify-btn session-details' onClick={() => {
                        navigate(`/position-session/${id}`);
                    }}>
                        Session Details
                    </button>
                </div>
            </div>
        </div>
    );
}

// PropTypes
DecisionCard.propTypes = {
    title: PropTypes.string.isRequired,
    duration: PropTypes.object.isRequired,
    desc: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired
};


export default DecisionCard;