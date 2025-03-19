/* eslint-disable no-unused-vars */
import './Verifyfingerprint.css';
import { useState } from "react";
import Loading from "../Loading/Loading";
import { Link } from 'react-router-dom';

function Verifyfingerprint() {
    // State variables and functions for fingerprint verification and navigation between states
    const [currentState, setCurrentState] = useState(1);
    const [isLoading, setIsLoading] = useState(false);

    return (
        <div className="verify vh-100 d-flex justify-content-center align-items-center">
            <div className="container">
                {/* Conditional rendering based on the current state */}
                {isLoading ? (
                    <Loading />
                ) : (
                    <div className="d-flex flex-column justify-content-center align-items-center">
                        {currentState === 1 && (
                            <div className="fade-in">
                                <h4 className="mb-4 text-center">Please Verify Your Fingerprint</h4>
                                <div className="verify-container mx-5">
                                    <img src="/State-1.svg" alt="Fingerprint Initial" className="fingerprint pulse" />
                                </div>
                            </div>
                        )}
                        {currentState === 2 && (
                            <div className="fade-in">
                                <h4 className="mb-5 text-center">Verifying Your Fingerprint...</h4>
                                <div className="verify-container mx-5">
                                    <img src="/State-2.svg" alt="Fingerprint Scanning" className="fingerprint scanning" />
                                    <div className="scanner-line"></div>
                                </div>
                            </div>
                        )}
                        {currentState === 3 && (
                            <div className="fade-in">
                                <h5 className="mb-4 text-center text-success">You&apos;re Good to Go</h5>
                                <div className="verify-container mx-5">
                                    <img src="/State-3.png" alt="Fingerprint Verified" className="fingerprint success" />
                                </div>
                            </div>
                        )}

                        <button className="verify-btn" onClick={() => setCurrentState(2)}>Start Scan</button>
                        <button className="verify-btn" onClick={() => setCurrentState(3)}>Finish Scan</button>
                        <Link to={'/home'} className='mt-4'>Go To Home</Link>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Verifyfingerprint;
