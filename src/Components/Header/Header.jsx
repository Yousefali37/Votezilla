/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import styles from "./CSS/Header.module.css";
import ProfileMenu from "./ProfileMenu";
import PropTypes from 'prop-types';
import { useNavigate } from "react-router-dom";

function Header() {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [name, setname] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 960) setIsNavOpen(false);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const handleGoBack = () => {
        navigate('/');
    }

    return (
        <Navbar expand="lg" className={`${styles['navbar']} fade-in`}>
            <Container>
                <div className="text-start col-5">
                    <Navbar.Brand href="/" className={`${styles["navbar-brand"]}`}>
                        <h5>TouchToVote</h5>
                    </Navbar.Brand>
                </div>
                <div className="col-lg-4 col-sm-5 d-flex justify-content-center">
                    <Navbar.Toggle
                        aria-controls="basic-navbar-nav"
                    />
                </div>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Container className="d-flex justify-content-center align-items-center gap-2">
                            <Nav.Link href="/" className={styles["nav-link"]}>Home</Nav.Link>
                            <NavDropdown title="Pages" id="basic-nav-dropdown">
                                <NavDropdown.Item href="/about-us">About Us</NavDropdown.Item>
                                <NavDropdown.Item href="/position-sessions">Candidates</NavDropdown.Item>
                                <NavDropdown.Item href="/decision-sessions">Decisions</NavDropdown.Item>
                            </NavDropdown>
                            <ProfileMenu />
                        </Container>
                    </Nav>
                    <Container>
                    </Container>
                </Navbar.Collapse>
            </Container>

        </Navbar>
    );
}

Header.propTypes = {
    page: PropTypes.string
}

export default Header;
