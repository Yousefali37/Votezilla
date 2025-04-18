import HeroSection from './../../Components/Hero Section/HeroSection';
import Tabs from '../../Components/Tabs/Tabs';

function ManageCandidates() {

    return (
        <>
            <HeroSection
                title="Manage Candidates"
                text="Add and manage Candidates"
            />

            <Tabs page={"candidate"} />
        </>
    );
}

export default ManageCandidates;