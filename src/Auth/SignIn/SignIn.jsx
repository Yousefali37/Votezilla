import { useEffect, useState } from "react";
import axios from 'axios';
import Verifyfingerprint from './../../Components/Verify-Fingerprint/Verifyfingerprint';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faClose } from '@fortawesome/free-solid-svg-icons';
import './SignIn.css';
import Cookies from 'universal-cookie';

function SignIn({ onLoginSuccess }) {
    const [step, setStep] = useState(1);
    const [ID, setID] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [userData] = useState(null);
    const cookie = new Cookies();

    useEffect(() => {
        if (ID.length === 0) {
            setError("");
        } else if (ID.length < 5) {
            setError("ID must be at least 5 characters");
        } else {
            setError("");
        }
    }, [ID]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (error || ID.length < 5) {
            setError("Please enter a valid ID (at least 5 characters)");
            return;
        }

        setLoading(true);
        try {
            const response = await axios.post(`http://127.0.0.1:8000/api/auth/login`, {
                login_id: ID
            });

            if (response.data.success) {
                cookie.set('user', response.data.user, { path: '/' });
                if (response.data.user.fingerprint) {
                    setStep(2);
                } else {
                    onLoginSuccess(response.data.user);
                }
            } else {
                setError(response.data.message || "Authentication failed");
            }
        } catch (err) {
            console.error(err);
            const errorMessage = err.response?.data?.message ||
                err.message ||
                "Network error occurred";
            setError(errorMessage);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="SignIn fade-in">
            <div className="container row justify-content-center align-items-center p-0 m-0">
                <form className="signForm" onSubmit={handleSubmit}>
                    <div className="auth-step-container d-flex justify-content-between align-items-center mb-5 position-relative fade-in">
                        <div className={`auth-step-1 ${step >= 1 ? "active-step" : "inactive-step"} ${error && "active-error"} fade-in`}>
                            {error ? (
                                <FontAwesomeIcon icon={faClose} className='fade-in' />
                            ) : step === 1 ? (
                                <p className='fade-in'>1</p>
                            ) : (
                                <FontAwesomeIcon icon={faCheck} className='fade-in' />
                            )}
                            <span className="auth-step-label">Verification</span>
                        </div>
                        <div className={`auth-step-2 ${step >= 2 ? "active-step" : "inactive-step"}`}>
                            {step > 2 ? (
                                <FontAwesomeIcon icon={faCheck} className='fade-in' />
                            ) : (
                                <p className='fade-in'>2</p>
                            )}
                            <span className="auth-step-label">Biometrics</span>
                        </div>
                    </div>

                    {step === 1 ? (
                        <>
                            <div className="auth-form-group">
                                <input
                                    type="text"
                                    id="ID"
                                    placeholder="Enter your member ID"
                                    className="auth-input"
                                    aria-label="ID"
                                    minLength={5}
                                    value={ID}
                                    onChange={(e) => setID(e.target.value)}
                                    required
                                    disabled={loading}
                                />
                                <label htmlFor="ID" className="text-muted">Member ID</label>
                                {error && (
                                    <p className="form-text fw-bold text-danger fade-in">
                                        {error}
                                    </p>
                                )}
                            </div>
                            <hr />
                            <button
                                type="submit"
                                className="verify-btn mt-3"
                                disabled={loading || error || ID.length < 5}
                            >
                                {loading ? 'Verifying...' : 'Verify ID'}
                            </button>
                        </>
                    ) : (
                        <Verifyfingerprint
                            page="auth"
                            user={userData}
                            onSuccess={onLoginSuccess}
                            onBack={() => setStep(1)}
                        />
                    )}
                </form>
            </div>
        </div>
    );
}

export default SignIn;