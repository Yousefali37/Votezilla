/* eslint-disable no-unused-vars */
import './Verifyfingerprint.css';
import { useState } from "react";
import Loading from "../Loading/Loading";
import { Link } from 'react-router-dom';

// Material UI Icons
import FingerprintIcon from '@mui/icons-material/Fingerprint';

function Verifyfingerprint() {
    const [currentState, setCurrentState] = useState(1);

    const handleStateChange = (e, newState) => {
        e.preventDefault();

        setTimeout(() => {
            setCurrentState(newState);

            if (newState === 2) {
                setTimeout(() => {
                    setCurrentState(3);
                }, 3000);
            }
        }, 1000);
    }

    return (
        <div className="verify d-flex justify-content-center align-items-center">
            <div className="container">
                <div className="d-flex flex-column justify-content-center align-items-center">

                    {/* Content based on current state */}
                    {currentState === 1 && (
                        <div className="fade-in text-center d-flex justify-content-center align-items-center flex-column">
                            <h4 className="mb-4">Please Verify Your Fingerprint</h4>
                            <div className="verify-container">
                                <img src="/fingerprint-svgrepo-com.png" alt="" className='fingerprint' />
                            </div>
                            <button className="verify-btn mt-4" onClick={(e) => handleStateChange(e, 2)}>
                                Start Scan
                            </button>
                        </div>
                    )}

                    {currentState === 2 && (
                        <div className="fade-in text-center d-flex justify-content-center align-items-center flex-column">
                            <h4 className="mb-5">Verifying Your Fingerprint...</h4>
                            <div className="verify-container">
                                <img src="/State-2.svg" alt="Fingerprint Scanning" className="fingerprint scanning" />
                                <div className="scanner-line"></div>
                            </div>
                        </div>
                    )}

                    {currentState === 3 && (
                        <div className="fade-in text-center d-flex justify-content-center align-items-center flex-column">
                            <h5 className="mb-4 text-success">You&apos;re Good to Go</h5>
                            <div className="verify-container">
                                <img src="/State-3.png" alt="Fingerprint Verified" className="fingerprint success" />
                            </div>
                            <Link to="/home" className="verify-btn mt-4">
                                Continue to Home
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Verifyfingerprint;