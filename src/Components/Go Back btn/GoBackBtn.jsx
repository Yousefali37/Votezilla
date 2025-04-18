import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

function GoBackBtn() {

    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1);
    }

    return (
        <button
            className="go-back-btn shadow-lg fade-in"
            onClick={handleGoBack}
            aria-label="Go back to the previous page"
        >
            <FontAwesomeIcon icon={faArrowLeft} />
        </button>
    )
}

export default GoBackBtn