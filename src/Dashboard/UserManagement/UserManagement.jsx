import HeroSection from '../../Components/Hero Section/HeroSection';
import UserRoles from '../../Components/User Roles/UserRoles';
import Tabs from '../../Components/Tabs/Tabs';

function UserManagement() {




  return (
    <>
      <HeroSection
        title="User Management"
        text="Add and manage users who can access the voting system"
      />

      <Tabs page={"user"} />
    </>
  );
}

export default UserManagement;