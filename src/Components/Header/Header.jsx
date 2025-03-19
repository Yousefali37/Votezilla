/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import styles from "./CSS/Header.module.css";
import ProfileMenu from "./ProfileMenu";
import PropTypes from 'prop-types';
import { useNavigate } from "react-router-dom";
import { faFingerprint } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Header({ page }) {
    const profile = page === 'profile';
    const dashboard = page === 'dashboard';
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
            {
                profile ? (
                    <Container>
                        <div className="text-start col-5">
                            <Navbar.Brand className={`${styles["navbar-brand"]}`} onClick={handleGoBack}>
                                <i className="fa fa-arrow-circle-left" aria-hidden="true"></i> {name}
                            </Navbar.Brand>
                        </div>
                    </Container>
                ) :
                    dashboard ? (
                        <Container>
                            <div className="text-start">
                                <Navbar.Brand className={`${styles["navbar-brand"]}`} onClick={handleGoBack}>
                                    <i className="fa fa-arrow-circle-left" aria-hidden="true"></i> Dashboard{name}
                                </Navbar.Brand>
                            </div>
                            <div className="col-6 d-flex justify-content-center">
                                <Navbar.Toggle
                                    aria-controls="basic-navbar-nav"
                                />
                            </div>
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="me-auto">
                                    <Nav.Link className={styles["nav-link"]} onClick={() => navigate('/dashboard')}>Dashboard</Nav.Link>
                                    <Nav.Link className={styles["nav-link"]} onClick={() => navigate('/dashboard/users')}>Users</Nav.Link>
                                    <Nav.Link className={styles["nav-link"]} onClick={() => navigate('/dashboard/products')}>Products</Nav.Link>
                                    <Nav.Link className={styles["nav-link"]} onClick={() => navigate('/dashboard/blogs')}>Blogs</Nav.Link>
                                    <Nav.Link className={styles["nav-link"]} onClick={() => navigate('/dashboard/faq')}>FAQs</Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    ) : (
                        <Container>
                            <div className="text-start col-5">
                                <Navbar.Brand href="/" className={`${styles["navbar-brand"]}`}>
                                    <img src="/Flux_Dev_Design_a_sleek_modern_logo_where_the_primary_element__0-removebg-preview.png" alt="" width={60} height={60} />
                                    <h5>Votezilla</h5>
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
                    )
            }
        </Navbar>
    );
}

Header.propTypes = {
    page: PropTypes.string
}

export default Header;
