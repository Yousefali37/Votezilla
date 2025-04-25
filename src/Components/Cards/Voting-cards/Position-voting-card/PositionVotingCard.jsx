import './PositionVotingCard.css';
import { useState } from "react";
import { PropTypes } from 'prop-types';

function PositionVotingCard({ id, name, position, isSelected, onVoteFor, bio }) {
    const [input, setInput] = useState("");

    const handleVoteFor = () => {
        onVoteFor(id);
    };

    return (
        <div className={`position-voting-card ${isSelected ? 'selected' : 'not-selected'} text-center`}>
            {/* Candidate Info */}
            <div className="w-100 d-flex justify-content-center align-items-center">
                <div className='w-100 text-center'>
                    <h3 className="mb-1">{name}</h3>
                    <p className="position-title">{position}</p>
                    <p className='m-0'>{bio}</p>
                </div>
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
    position: PropTypes.string.isRequired,
    isSelected: PropTypes.bool.isRequired,
    onVoteFor: PropTypes.func.isRequired
};

export default PositionVotingCard;