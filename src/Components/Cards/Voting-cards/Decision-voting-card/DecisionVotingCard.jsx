import { useState } from "react";

function DecisionVotingCard({ data }) {

    const [input, setInput] = useState(true);

    const handlInputChange = () => {
        setInput(!input);
    }

    return (
        <div className="decision-card container">
            <div>
                {/* Title */}
                <h2 className="mb-3 text-center">{data.title}</h2>

                {/* Description */}
                <p className='text-center'>{data.description}</p>
            </div>

            {/* Call-To-Action Button */}
            {input ? (
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
                    <form className="abstain-form">
                        <button className='btn-close top-0 end-0 pt-3' onClick={handlInputChange}></button>
                        <label htmlFor="reason" className="form-label mt-3">Reason to Abstain</label>
                        <input type="text" className="form-control" id="reason" placeholder="Write your reason here..." required minLength={1} />
                        <button type="submit" className="submit-btn">Submit</button>
                    </form>
                </div>
            )}
        </div>
    )
}

export default DecisionVotingCard;