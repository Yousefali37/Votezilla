import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { faPencil } from "@fortawesome/free-solid-svg-icons";

function DashboardCards({ title, icon, desc }) {

    {/* Mange States */ }
    const [progress, setProgress] = useState(0);
    const [edit, setEdit] = useState(false);

    {/* On mouse enter handler */ }
    const handleMouseEnter = () => {
        setProgress(100);
        setEdit(true);
    };

    {/* On mouse leave handler */ }
    const handleMouseLeave = () => {
        setProgress(0);
        setEdit(false);
    };

    {/* Render component */ }
    return (
        /* Dashboard card component */
        <div
            className="dashboard-card fade-in"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >

            {/* Icon and title */}
            <div className="icon-title gap-3">
                <div className="icon-container">
                    <FontAwesomeIcon icon={icon} className="icon" />
                </div>
                <h4>{title}</h4>
                {
                    edit && (
                        <div className="edit-icon">
                            <FontAwesomeIcon icon={faPencil} />
                        </div>
                    )
                }
            </div>

            {/* Progress bar */}
            <p className="fw-normal mt-2 px-1">{desc}</p>
            <div className="progress-container">
                <div className="progress-bar-custom" style={{ width: `${progress}%` }}></div>
            </div>

        </div>
    )
}


/* Prop Types */
DashboardCards.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.object.isRequired,
    desc: PropTypes.string.isRequired
};


export default DashboardCards;
