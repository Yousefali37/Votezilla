import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import styles from './CSS/ProfileMenu.module.css';

function ProfileMenu() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen((prev) => !prev);

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
                    <Link to="/dashboard">Dashboard</Link>
                    <Link to="/FAQs">FAQ</Link>

                    <hr />

                    <Link to="/login" className="btn btn-outline-light border-light-subtle shadow-sm">
                        Sign In
                    </Link>
                </div>
            )}
        </div>
    );
}

export default ProfileMenu;
