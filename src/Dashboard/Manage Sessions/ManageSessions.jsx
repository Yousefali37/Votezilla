import HeroSection from './../../Components/Hero Section/HeroSection';
import Tabs from './../../Components/Tabs/Tabs';

function ManageSessions() {

    return (
        <>
            <HeroSection
                title="Manage Sessions"
                text="Add and manage Session to vote on"
            />

            <Tabs page={"session"} />
        </>
    );
}

export default ManageSessions;
