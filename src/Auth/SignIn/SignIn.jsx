import './SignIn.css';
import { useEffect, useState } from "react";
import Verifyfingerprint from './../../Components/Verify-Fingerprint/Verifyfingerprint';
// import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faClose } from '@fortawesome/free-solid-svg-icons';

function SignIn() {

    // State to manage the current step of the authentication process
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

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     let isValid = false;

    //     if (isValid) {
    //         try {
    //             let res = await axios.get("");
    //             if (res.status === 200) {
    //                 setStep(step + 1);
    //             }
    //         } catch (e) {
    //             console.log(e);
    //             setError(e);
    //         }
    //     }
    // }

    const handleStepChange = () => {
        setStep(step + 1);
    }

    console.log(ID);

    return (
        // Main container for the SignIn component
        <div className="SignIn fade-in">
            <div className="container row justify-content-center align-items-center p-0 m-0">
                <form className="signForm">

                    {/* authentication process to track progress */}
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

                    {/* Form content based on the current step */}
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
                                <button className="verify-btn mt-3" onClick={handleStepChange}>Verify ID</button>
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
