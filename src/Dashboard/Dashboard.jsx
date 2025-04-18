import "./Dashboard.css";
import { faClipboardCheck, faGear, faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import DashboardCards from './../Components/Cards/Dashboard-cards/DashboardCards';
import HeroSection from "../Components/Hero Section/HeroSection";

function Dashboard() {

    return (
        <>
            <HeroSection title={"Admin Control Panel"} text={"Manage your voting system's candidates, decisions, and sessions"} />
            <div className="dashboard-container">
                <div className="container">
                    <div className="row justify-content-center align-items-center gap-5">
                        <DashboardCards title={"Manage Candidates"} desc={"Add, edit, or remove board position candidates"} icon={faUserGroup} link={"/manage-candidates"} />
                        <DashboardCards title={"Manage Decisions"} desc={"Create and manage board decisions"} icon={faClipboardCheck} link={"/manage-decisions"} />
                        <DashboardCards title={"Voting Sessions"} desc={"Control active voting sessions"} icon={faClock} link={"/manage-sessions"} />
                        <DashboardCards title={"Admin Settings"} desc={"Configure system settings and permissions"} icon={faGear} link={"/manage-users"} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard;
