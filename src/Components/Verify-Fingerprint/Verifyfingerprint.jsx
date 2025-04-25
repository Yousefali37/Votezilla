import './Verifyfingerprint.css';
import { useState } from "react";
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import Cookies from 'universal-cookie';

function Verifyfingerprint({ page }) {
    const cookie = new Cookies();

    const user = cookie.get('user');

    const [currentState, setCurrentState] = useState(1);
    const navigate = useNavigate();

    const handleStateChange = (e, newState) => {
        e.preventDefault();

        setTimeout(() => {
            setCurrentState(newState);

            if (newState === 2) {
                setTimeout(() => {
                    setCurrentState(3);
                    navigate('/home');
                }, 3000);
            }
        }, 1000);
    }

    return (
        <div className={`verify ${page === "auth" ? "" : "min-vh-100"} d-flex justify-content-center align-items-center`}>
            <div className="container">
                <div className="d-flex flex-column justify-content-center align-items-center">

                    {/* Content based on current state */}
                    {currentState === 1 && (
                        <div className="fade-in text-center d-flex justify-content-center align-items-center flex-column">
                            <p className="mb-4">Hi {user.name} Please Verify Your Fingerprint</p>
                            <div className="verify-container">
                                <img src="/fingerprint-svgrepo-com.png" alt="" className='fingerprint' />
                            </div>
                        </div>
                    )}

                    {currentState === 2 && (
                        <div className="fade-in text-center d-flex justify-content-center align-items-center flex-column">
                            <div className="verify-container">
                                <img src="/State-2.svg" alt="Fingerprint Scanning" className="fingerprint scanning" />
                                <div className="scanner-line"></div>
                            </div>
                        </div>
                    )}

                    {
                        currentState === 3 && (
                            <>
                                {page === "auth" ? (
                                    <>
                                        {currentState === 3 && (
                                            <div className="fade-in text-center d-flex justify-content-center align-items-center flex-column">
                                                <h5 className="mb-4 text-success">You&apos;re Good to Go</h5>
                                                <div className="verify-container">
                                                    <img src="/State-3.png" alt="Fingerprint Verified" className="fingerprint success" />
                                                </div>
                                            </div>
                                        )}
                                    </>
                                ) : (
                                    <div className="fade-in text-center d-flex justify-content-center align-items-center flex-column">
                                        <>
                                            {
                                                setTimeout(() => {
                                                    toast.success('Fingerprint Verified')
                                                    navigate('/position-sessions');
                                                }, 3000)
                                            }
                                        </>
                                    </div>
                                )}
                            </>
                        )
                    }

                    <button className="verify-btn mt-4" onClick={(e) => handleStateChange(e, 2)}>
                        {
                            currentState === 1 ? (
                                "Start Scanning"
                            ) : currentState === 2 ? (
                                "Verifiying..."
                            ) : (
                                "Continue"
                            )
                        }
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Verifyfingerprint;