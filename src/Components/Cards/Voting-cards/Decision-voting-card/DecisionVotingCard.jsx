import './DecisionVotingCard.css';
import { faCalendar, faChartSimple, faCircleCheck, faClock, faDollarSign, faHandshake } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from 'react';

function DecisionVotingCard() {

    const [input, setInput] = useState("");

    return (
        <div className="decision-card container">
            {/* Title */}
            <h2 className="mb-3">Community Center Renovation</h2>

            {/* Metadata */}
            <div className="row text-muted">
                <div className="col-md-6">
                    <p><FontAwesomeIcon icon={faCalendar} className="icon-color me-2" /> <strong>Deadline:</strong> 2024-04-01</p>
                </div>
                <div className="col-md-6">
                    <p><FontAwesomeIcon icon={faDollarSign} className="icon-color me-2" /> <strong>Budget:</strong> $2.5 Million</p>
                </div>
            </div>

            {/* Description */}
            <p>Proposal to renovate the community center with new facilities and equipment.</p>

            {/* Sections */}
            <div className="row mt-3">
                {/* Timeline */}
                <div className="col-md-6">
                    <p className="section-title">
                        <FontAwesomeIcon icon={faClock} className="icon-color me-2" size="lg" />
                        <span className="badge bg-success text-white">Timeline</span>
                    </p>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Planning Phase: 2 months</li>
                        <li className="list-group-item">Construction: 6 months</li>
                        <li className="list-group-item">Final Inspection: 1 month</li>
                    </ul>
                </div>

                {/* Impact Assessment */}
                <div className="col-md-6">
                    <p className="section-title">
                        <FontAwesomeIcon icon={faChartSimple} className="icon-color me-2" size="lg" />
                        <span className="badge bg-primary text-white">Impact Assessment</span>
                    </p>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Economic benefits</li>
                        <li className="list-group-item">Community engagement</li>
                        <li className="list-group-item">Infrastructure improvement</li>
                    </ul>
                </div>

                {/* Key Stakeholders */}
                <div className="col-md-6 mt-3">
                    <p className="section-title">
                        <FontAwesomeIcon icon={faHandshake} className="icon-color me-2" size="lg" />
                        <span className="badge bg-warning text-dark">Key Stakeholders</span>
                    </p>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Local residents</li>
                        <li className="list-group-item">Sports clubs</li>
                        <li className="list-group-item">Community groups</li>
                        <li className="list-group-item">City maintenance</li>
                    </ul>
                </div>

                {/* Requirements */}
                <div className="col-md-6 mt-3">
                    <p className="section-title">
                        <FontAwesomeIcon icon={faCircleCheck} className="icon-color me-2" size="lg" />
                        <span className="badge bg-danger text-white">Requirements</span>
                    </p>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Building permits</li>
                        <li className="list-group-item">Environmental assessment</li>
                        <li className="list-group-item">Public consultations</li>
                        <li className="list-group-item">Safety inspections</li>
                    </ul>
                </div>
            </div>

            {/* Call-To-Action Button */}
            {input !== 'other' ? (
                <div className="text-center row justify-content-around mt-4 gap-3 px-sm-5">
                    <button className="vote-btn for-btn col-12 col-md-3 col-sm-5">✅ Vote For</button>
                    <button className="vote-btn against-btn col-12 col-md-3 col-sm-5">❌ Vote Against</button>
                    <button className="vote-btn other-btn col-12 col-md-3 col-md-5" onClick={() => {
                        setInput('other');
                    }}>⚖️ Abstain</button>
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

export default DecisionVotingCard;
