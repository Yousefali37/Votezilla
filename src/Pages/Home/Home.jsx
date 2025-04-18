import './Home.css';
import { faClipboardList } from "@fortawesome/free-solid-svg-icons";
import { faUserGroup } from '@fortawesome/free-solid-svg-icons/faUserGroup';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className="container vh-100 d-flex flex-column justify-content-center align-items-center mt-0 gap-5 fade-in">
            <div className="mb-4 text-center mt-5 pt-5">
                <h1 className='home-head'>Welcome, Board Member</h1>
                <p className='text-muted'>Please select your voting preference below</p>
            </div>
            <div className="w-100 row justify-content-around align-items-center gap-lg-1 gap-sm-3">
                <Link to={'/position-sessions'} className="glass-card d-flex flex-column justify-content-center align-items-center text-center mb-3">
                    <div className='icon'>
                        <FontAwesomeIcon icon={faUserGroup} />
                    </div>
                    <h3 className='text-dark'>Vote on Candidates</h3>
                    <p className='text-muted'>Cast your vote for board positions and roles</p>
                </Link>
                <Link to={'/decision-sessions'} className="glass-card d-flex flex-column justify-content-center align-items-center text-center mb-3">
                    <div className='icon'>
                        <FontAwesomeIcon icon={faClipboardList} />
                    </div>
                    <h3 className='text-dark'>Vote on Decisions</h3>
                    <p className='text-muted'>Cast your vote on important company decisions</p>
                </Link>
            </div>
        </div>
    )
}

export default Home;