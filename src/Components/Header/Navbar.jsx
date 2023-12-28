// import React, { useState } from 'react';
import '../../assets/Css/Navbar.css';
import { Link, NavLink } from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logoImg from "../../assets/Images/logo.png";

const Navbar = () => {
    // const [isServicesDropdownOpen, setServicesDropdownOpen] = useState(false);
    // const [isAboutDropdownOpen, setAboutDropdownOpen] = useState(false);

    // const handleServicesDropdown = () => {
    //     setServicesDropdownOpen(!isServicesDropdownOpen);
    // };

    // const handleAboutDropdown = () => {
    //     setAboutDropdownOpen(!isAboutDropdownOpen);
    // };

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
                            <NavDropdown title="Services" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item ><Link to= "/courses">Our Courses</Link></NavDropdown.Item>
                                <NavDropdown.Item ><Link to= "/membership"> Membership Plans</Link></NavDropdown.Item>
                            </NavDropdown>
                        </li>
                        <li>
                            <NavLink to="/programs">Programs</NavLink>
                        </li>
                        <li>
                            <NavLink to="/workshops">Workshops</NavLink>
                        </li>
                        <li>
                        <NavDropdown title="About us" id="basic-nav-dropdown">
                                <NavDropdown.Item >
                                    <Link to ='/about'>About us </Link>
                                    </NavDropdown.Item>
                                <NavDropdown.Item >
                                    <Link to='/branch'>Our Branch</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to = '/blogsection'> Our Blogs</Link>
                                </NavDropdown.Item>
                            </NavDropdown>
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
