import "./Dashboard.css";
import { faClipboardCheck, faGear, faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import DashboardCards from './../Components/Cards/Dashboard-cards/DashboardCards';
import HeroSection from "../Components/Hero Section/HeroSection";
import GoBackBtn from "../Components/Go Back btn/GoBackBtn";

function Dashboard() {

    return (
        <>
            <HeroSection title={"Admin Control Panel"} text={"Manage your voting system's candidates, decisions, and sessions"} />
            <GoBackBtn />
            <div className="dashboard-container">
                <div className="container">
                    <div className="mb-5">
                        <h1 className="dash-head fade-in"></h1>
                        <p className="text-muted fade-in"></p>
                    </div>
                    <div className="row justify-content-center align-items-center gap-5">
                        <DashboardCards title={"Manage Candidates"} desc={"Add, edit, or remove board position candidates"} icon={faUserGroup} />
                        <DashboardCards title={"Manage Decisions"} desc={"Create and manage board decisions"} icon={faClipboardCheck} />
                        <DashboardCards title={"Voting Sessions"} desc={"Control active voting sessions"} icon={faClock} />
                        <DashboardCards title={"Admin Settings"} desc={"Configure system settings and permissions"} icon={faGear} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard;
