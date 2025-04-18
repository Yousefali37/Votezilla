import './PositionCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import PropTypes from "prop-types";

function PositionCard({ id, position, desc, duration }) {
    // Navigation
    const navigate = useNavigate();

    return (
        <div className="position-card fade-in">

            {/* navigate to decision session when card is clicked */}
            <div className="card text-center">

                <div className="card-body">

                    {/* Title */}
                    <h5 className="card-title">
                        Position: <span className="text-muted">{position}</span>
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
                <div className='d-flex flex-wrap justify-content-center align-items-center gap-4'>
                    <button className='verify-btn' onClick={() => {
                        navigate('/position-session');
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


// PropTypes validation
PositionCard.propTypes = {
    position: PropTypes.string.isRequired,
    duration: PropTypes.object.isRequired,
    desc: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
};

export default PositionCard;
