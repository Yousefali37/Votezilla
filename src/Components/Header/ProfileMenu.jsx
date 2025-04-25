import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import Cookies from "universal-cookie";
import styles from './CSS/ProfileMenu.module.css';

function ProfileMenu() {
    const cookie = new Cookies();
    const user = cookie.get('user');
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    const toggleMenu = () => setIsOpen((prev) => !prev);

    const handleLogout = () => {
        cookie.remove('user', { path: '/' });
        navigate('/');
    }

    return (
        <div className={styles['profile-menu']}>
            {/* Profile Image Button */}
            <Button variant="" onClick={toggleMenu}>
                <img
                    src={'/user.png'}
                    alt="Profile"
                    className={`${styles['profile-img']} rounded-circle`}
                    width="30"
                />
            </Button>


            {/* Dropdown Menu */}
            {isOpen && (
                <div className={styles['profile-dropdown']}>
                    {
                        user.role === "manager" && (
                            <Link to="/dashboard">Dashboard</Link>
                        )
                    }
                    <Link to="/FAQs">FAQ</Link>

                    <hr />

                    {
                        user && (
                            <Link to="/" className="btn btn-outline-light border-light-subtle shadow-sm" onClick={handleLogout}>
                                Sign Out
                            </Link>
                        )
                    }
                </div>
            )}
        </div>
    );
}

export default ProfileMenu;
