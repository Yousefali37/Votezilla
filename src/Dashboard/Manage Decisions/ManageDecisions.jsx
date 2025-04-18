import HeroSection from './../../Components/Hero Section/HeroSection';
import Tabs from './../../Components/Tabs/Tabs';


function ManageDecisions() {

    return (
        <>
            <HeroSection
                title="Manage Decisions"
                text="Add and manage Decisions"
            />

            <Tabs page={"decision"} />
        </>
    );
}

export default ManageDecisions;