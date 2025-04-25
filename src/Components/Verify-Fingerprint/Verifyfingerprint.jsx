import './Verifyfingerprint.css';
import { useState, useEffect } from "react";
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import Cookies from 'universal-cookie';

function Verifyfingerprint({ page }) {
    const cookie = new Cookies();
    const user = cookie.get('user');
    const [currentState, setCurrentState] = useState(1);
    const navigate = useNavigate();

    // Handle navigation after successful verification
    useEffect(() => {
        if (currentState === 3) {
            const timer = setTimeout(() => {
                toast.success('Fingerprint Verified');
                navigate(page === "auth" ? '/home' : '/position-sessions');
            }, 2000);

            return () => clearTimeout(timer);
        }
    }, [currentState, navigate, page]);

    const handleStateChange = (e, newState) => {
        e.preventDefault();

        // First transition (1 → 2)
        setCurrentState(newState);

        if (newState === 2) {
            // Second transition (2 → 3) after 2 seconds
            setTimeout(() => {
                setCurrentState(3);
            }, 2000);
        }
    };

    return (
        <div className={`verify ${page === "auth" ? "" : "min-vh-100"} d-flex justify-content-center align-items-center`}>
            <div className="container">
                <div className="d-flex flex-column justify-content-center align-items-center">
                    {/* State 1: Initial prompt */}
                    {currentState === 1 && (
                        <div className="fade-in text-center d-flex justify-content-center align-items-center flex-column">
                            <p className="mb-4">Hi {user?.name}, Please Verify Your Fingerprint</p>
                            <div className="verify-container">
                                <img
                                    src="/fingerprint-svgrepo-com.png"
                                    alt="Fingerprint"
                                    className='fingerprint'
                                />
                            </div>
                        </div>
                    )}

                    {/* State 2: Scanning animation */}
                    {currentState === 2 && (
                        <div className="fade-in text-center d-flex justify-content-center align-items-center flex-column">
                            <div className="verify-container">
                                <img
                                    src="/State-2.svg"
                                    alt="Fingerprint Scanning"
                                    className="fingerprint scanning"
                                />
                                <div className="scanner-line"></div>
                            </div>
                        </div>
                    )}

                    {/* State 3: Success message */}
                    {currentState === 3 && (
                        <div className="fade-in text-center d-flex justify-content-center align-items-center flex-column">
                            <h5 className="mb-4 text-success">You're Good to Go</h5>
                            <div className="verify-container">
                                <img
                                    src="/State-3.png"
                                    alt="Fingerprint Verified"
                                    className="fingerprint success"
                                />
                            </div>
                        </div>
                    )}

                    <button
                        className="verify-btn mt-4"
                        onClick={(e) => handleStateChange(e, currentState === 1 ? 2 : 3)}
                        disabled={currentState === 2}
                    >
                        {currentState === 1 ? "Start Scanning" :
                            currentState === 2 ? "Verifying..." : "Continue"}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Verifyfingerprint;