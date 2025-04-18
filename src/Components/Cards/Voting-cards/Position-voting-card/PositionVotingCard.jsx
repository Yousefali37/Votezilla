import './PositionVotingCard.css';
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { PropTypes } from 'prop-types';

function PositionVotingCard({ id, position, name, image, desc, email, term, experience, isSelected, onVoteFor }) {
    const [input, setInput] = useState("");

    const handleVoteFor = () => {
        onVoteFor(id);
    };

    return (
        <div className={`position-voting-card ${isSelected ? 'selected' : 'not-selected'}`}>
            {/* Candidate Info */}
            <div className="d-flex align-items-center gap-4">
                <img src={image} alt="Candidate" className="rounded-circle profile-pic" />
                <div>
                    <h3 className="mb-1">{name}</h3>
                    <p className="position-title">{position}</p>
                </div>
            </div>

            {/* Description */}
            <p className="desc text-muted">{desc}</p>

            {/* Contact Info */}
            <p className="contact-info">
                <span className="email">{email}</span>
            </p>

            {/* Term Duration */}
            <p className="term section-title">
                <FontAwesomeIcon icon={faClock} className="icon-color" /> Term: <span>{term}</span>
            </p>

            {/* Experience */}
            <div className="experience">
                <h4>Experience</h4>
                <ul>
                    {experience.map((exp, index) => (
                        <li key={index}>{exp}</li>
                    ))}
                </ul>
            </div>

            {/* Voting Buttons or Abstain Form */}
            {input !== "other" ? (
                <div className="text-center row justify-content-center align-items-center mt-4 gap-2 align-self-center">
                    <button
                        className={`vote-btn for-btn col-12 col-md-3 ${isSelected ? 'voted' : ''}`}
                        onClick={handleVoteFor}
                    >
                        ✅ Vote For
                    </button>
                </div>
            ) : (
                <div className="abstain-form-container">
                    <hr />
                    <form className="abstain-form" onSubmit={(e) => {
                        e.preventDefault();
                        setInput('');
                    }}>
                        <button className='btn-close top-0 end-0 pt-3' onClick={() => {
                            setInput('');
                        }}></button>
                        <label htmlFor="reason" className="form-label mt-3">Reason to Abstain</label>
                        <input type="text" className="form-control" id="reason" placeholder="Write your reason here..." required minLength={1} />
                        <button type="submit" className="submit-btn">Submit</button>
                    </form>
                </div>
            )}
        </div>
    );
}

// PropTypes validation
PositionVotingCard.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    term: PropTypes.string.isRequired,
    experience: PropTypes.arrayOf(PropTypes.string).isRequired,
    position: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    isSelected: PropTypes.bool.isRequired,
    onVoteFor: PropTypes.func.isRequired
};

export default PositionVotingCard;