import { useEffect, useState } from "react";
import "./ProgressBar.css";

function ProgressBar() {

    { /* Mange States */ }
    const [progress, setProgress] = useState(0);

    {/* Handle Progress */ }
    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((oldProgress) => {
                const newProgress = oldProgress + 10;
                return newProgress > 100 ? 100 : newProgress;
            });
        }, 500); // Adjust speed

        return () => clearInterval(interval);
    }, []);

    return (
        // Progress Bar
        <div className="progress-container">
            <div className="progress-bar-custom" style={{ width: `${progress}%` }}></div>
        </div>
    );
}

export default ProgressBar;
