import './SignIn.css';
import { useEffect, useState } from "react";
import axios from 'axios';
import Verifyfingerprint from './../../Components/Verify-Fingerprint/Verifyfingerprint';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faClose } from '@fortawesome/free-solid-svg-icons';

function SignIn() {
    const [step, setStep] = useState(1);
    const [ID, setID] = useState("");
    const [error, setError] = useState("");

    useEffect(() => {
        const handleIDChange = () => {
            if (ID.length === 0) {
                setError("");
            } else if (ID.length < 10) {
                setError("ID Must be More than or equal 10 characters");
            } else if (ID.length >= 10) {
                setError("");
            }
        }

        handleIDChange();
    }, [ID.length])

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (error || ID.length < 10) {
            setError("Please enter a valid ID (at least 10 characters)");
            return;
        }

        try {
            const response = await axios.get(``);

            if (response.status === 200) {
                setStep(step + 1);
            } else {
                setError("Invalid Member ID");
                setStep(1);
            }
        } catch (err) {
            console.error(err);
            setError("An error occurred while verifying your ID");
            setStep(1);
        }
    }

    console.log(ID);

    return (
        <div className="SignIn fade-in">
            <div className="container row justify-content-center align-items-center p-0 m-0">
                <form className="signForm">
                    <div className="auth-step-container d-flex justify-content-between align-items-center mb-5 position-relative fade-in">
                        <div className={`auth-step-1 ${step >= 1 ? "active-step" : "inactive-step"} ${error && "active-error"} fade-in`}>
                            {
                                error ? (
                                    <FontAwesomeIcon icon={faClose} className='fade-in' />
                                ) : step === 1 ? (
                                    <p className='fade-in'>1</p>
                                ) : step === 2 && (
                                    <FontAwesomeIcon icon={faCheck} className='fade-in' />
                                )
                            }
                            <span className="auth-step-label">Verification</span>
                        </div>
                        <div className={`auth-step-2 ${step >= 2 ? "active-step" : "inactive-step"}`}>
                            <p className='fade-in'>2</p>
                            <span className="auth-step-label">Biometrics</span>
                        </div>
                    </div>

                    {
                        step === 1 ? (
                            <>
                                <div className="mb-5">
                                    {/* <h2 className="mb-2">Board Member Login</h2> */}
                                    {/* <span className="text-muted fw-medium">Please verify your identity to proceed</span> */}
                                </div>
                                <div className="auth-form-group">
                                    <input
                                        type="text"
                                        id="ID"
                                        placeholder="Enter your member ID"
                                        className="auth-input"
                                        aria-label="ID"
                                        minLength={10}
                                        value={ID}
                                        onChange={(e) => {
                                            e.preventDefault();
                                            setID(e.target.value);
                                        }}
                                        required
                                    />
                                    <label htmlFor="ID" className="text-muted">Member ID</label>
                                    {
                                        error && (
                                            <p className="form-text fw-bold text-danger fade-in">
                                                {error}
                                            </p>
                                        )
                                    }
                                </div>
                                <hr />
                                <button className="verify-btn mt-3" onClick={handleSubmit}>Verify ID</button>
                            </>
                        ) : (
                            step === 2 && (
                                <Verifyfingerprint />
                            )
                        )
                    }
                </form>
            </div>
        </div >
    );
}

export default SignIn;