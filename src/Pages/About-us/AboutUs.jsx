import './AboutUs.css';
import OurMission from '../../Components/About-us Cards/Our Mission/OurMission';
import OurValues from '../../Components/About-us Cards/Our Values/OurValues';
import KeyFeatures from '../../Components/About-us Cards/Key Features/KeyFeatures';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faEnvelope, faLocationDot, faUsers } from '@fortawesome/free-solid-svg-icons';
import MemberCard from './../../Components/About-us Cards/Member Card/MemberCard';
import { useNavigate } from 'react-router-dom';

function AboutUs() {
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1);
    };

    return (
        <div className='container min-vh-100 mt-5 pt-3 d-flex flex-column justify-content-start align-items-center gap-5 mb-4 fade-in'>
            <button
                className="go-back-btn shadow-lg fade-in"
                onClick={handleGoBack}
                aria-label="Go back to the previous page"
            >
                <FontAwesomeIcon icon={faArrowLeft} />
            </button>
            <div className='d-flex flex-column justify-content-center align-items-center'>
                <h2 className='about-head text-center'>About the Platform</h2>
                <p className='about-caption text-center'>Modern Voting Platform is a comprehensive system designed to streamline the voting process and facilitate informed decision-making in our digital democracy</p>
            </div>
            <div className='row justify-content-between align-items-center gap-4 gap-md-0 gap-sm-4'>
                <div className='col-12 col-md-4 col-sm-12'>
                    <OurMission />
                </div>
                <div className='col-12 col-md-4 col-sm-12'>
                    <OurValues />
                </div>
                <div className='col-12 col-md-4 col-sm-12'>
                    <KeyFeatures />
                </div>
            </div>
            <div className='team-container gap-5'>
                <FontAwesomeIcon icon={faUsers} className='team-icon' />
                <h2 className='fw-bold'>Our Team</h2>
                <div className='row w-100 justify-content-center align-items-center gap-4'>
                    <div className='col-md-3 col-sm-12'>
                        <MemberCard name={'Abeer Rafat'} position={"Artificial Intelligence"} initials={"AR"} />
                    </div>
                    <div className='col-md-3 col-sm-12'>
                        <MemberCard name={'Yousef Ali'} position={"Front-end Developer"} initials={"YA"} />
                    </div>
                    <div className='col-md-3 col-sm-12'>
                        <MemberCard name={'Essam Eldiinn'} position={"Back-end Developer"} initials={"EE"} />
                    </div>
                    <div className='col-md-3 col-sm-12'>
                        <MemberCard name={'Abdallah Younis'} position={"Back-end Developer"} initials={"AY"} />
                    </div>
                    <div className='col-md-3 col-sm-12'>
                        <MemberCard name={'Abdelrahman Mohsen'} position={"Artificial Intelligence"} initials={"AM"} />
                    </div>
                    <div className='col-md-3 col-sm-12'>
                        <MemberCard name={'Yousef Mohamed'} position={"Front-end Developer"} initials={"YM"} />
                    </div>
                    <div className='col-md-3 col-sm-12'>
                        <MemberCard name={'Mostafa '} position={"Front-end Developer"} initials={"M"} />
                    </div>
                    <div className='col-md-3 col-sm-12'>
                        <MemberCard name={'Omar'} position={"Front-end Developer"} initials={"O"} />
                    </div>
                </div>
            </div>
            <div className='get-in-touch container d-flex flex-column align-items-center'>
                <h2>Get in Touch</h2>
                <p className='getintouch-caption w-50'>Have questions about our platform? Our team is here to help you 24/7. Reach out to us for any inquiries about implementation, security, or general information.</p>
                <p className='getintouch-email'><span><FontAwesomeIcon icon={faEnvelope} className='px-2' /></span>Votezilla@gmail.com</p>
                <p className='getintouch-location'><span><FontAwesomeIcon icon={faLocationDot} className='px-1' />Location: </span>Paddys Pub, Philadelphia, PA</p>
                <p className='getintouch-location'><span>Available: </span>Monday - Friday, 9AM - 6PM PST</p>
            </div>
        </div>
    )
}

export default AboutUs;