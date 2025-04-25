import HeroSection from '../../Components/Hero Section/HeroSection';
import Tabs from '../../Components/Tabs/Tabs';

function ManageElection() {

    return (
        <>
            <HeroSection
                title="Manage Elections"
                text="Add and manage Session to vote on"
            />

            <Tabs page={"election"} />
        </>
    );
}

export default ManageElection;