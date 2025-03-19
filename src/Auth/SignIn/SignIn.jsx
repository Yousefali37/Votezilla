import './SignIn.css';
import { useState } from "react";
import Verifyfingerprint from './../../Components/Verify-Fingerprint/Verifyfingerprint';

function SignIn() {

    const [step, setStep] = useState(0);

    const handleStepChange = () => {
        setStep(step + 1);
    }

    return (
        <div className="SignIn fade-in">
            <div className="container row justify-content-center align-items-center p-0 m-0">
                <form className="signForm">

                    <div className="auth-step-container d-flex justify-content-around align-items-center mb-4 position-relative fade-in">
                        <div className={`auth-step-1 ${step === 1 ? "active-step" : "inactive-step"}`}>
                            <p>1</p>
                        </div>
                        <div className={`auth-step-2 ${step === 2 ? ("active-step") : ("inactive-step")}`}>
                            <p>2</p>
                        </div>
                    </div>

                    {
                        step === 0 ? (
                            <>
                                <div className="mb-5">
                                    <h2 className="mb-2">Board Member Login</h2>
                                    <span className="text-muted fw-medium">Please verify your identity to proceed</span>
                                </div>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        id="ID"
                                        placeholder="Enter your member ID"
                                        className="auth-input"
                                        aria-label="ID"
                                        minLength={10}
                                        required
                                    />
                                    <label htmlFor="ID" className="text-muted">Member ID</label>
                                </div>
                                <hr />
                                <button className="verify-btn mt-3" onClick={handleStepChange}>Verify ID</button>
                            </>
                        ) : (
                            step === 1 && (
                                <Verifyfingerprint />
                            )
                        )
                    }
                </form>
            </div>
        </div>
    );
}

export default SignIn;
