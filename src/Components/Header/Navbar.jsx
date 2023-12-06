import React, { useState } from 'react';
import '../../assets/Css/Navbar.css';
import { Link, NavLink } from 'react-router-dom';
import logoImg from "../../assets/Images/logo.png";

const Navbar = () => {
    const [isServicesDropdownOpen, setServicesDropdownOpen] = useState(false);
    const [isAboutDropdownOpen, setAboutDropdownOpen] = useState(false);

    const handleServicesDropdown = () => {
        setServicesDropdownOpen(!isServicesDropdownOpen);
    };

    const handleAboutDropdown = () => {
        setAboutDropdownOpen(!isAboutDropdownOpen);
    };

    return (
        <>
            <nav>
                <Link to="/">
                    <div className="logo">
                        <img src={logoImg} alt="Logo" />
                    </div>
                </Link>
                <div className='nav-links'>
                    <ul>
                        <li>
                            <Link to="/one">One on One</Link>
                        </li>
                        <li>
                            <NavLink to="/services" onClick={handleServicesDropdown}>Services</NavLink>
                            {isServicesDropdownOpen && (
                                <div className="dropdown-content">
                                    <Link to="/service1">Service 1</Link>
                                    <Link to="/service2">Service 2</Link>
                                </div>
                            )}
                        </li>
                        <li>
                            <NavLink to="/programs">Programs</NavLink>
                        </li>
                        <li>
                            <NavLink to="/workshops">Workshops</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about" onClick={handleAboutDropdown}>About Us</NavLink>
                            {isAboutDropdownOpen && (
                                <div className="dropdown-content">
                                    <Link to="/team">Our Team</Link>
                                    <Link to="/history">History</Link>
                                </div>
                            )}
                        </li>
                        <li>
                            <NavLink to="/contact" className='contact-btn'>Contact Us</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
