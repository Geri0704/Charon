import React from 'react';
import { FaBars, FaAngleRight, FaAngleLeft } from 'react-icons/fa';
import "../../style/navbar.css";

// Import the logo image
import logo from '../assets/logo.png'; // Adjust the path as per your project structure

function Navbar({visible, show}) {
    return (
        <>
            <div className="mobile-nav">
                <button
                    className="mobile-nav-btn"
                    onClick={() => show(!visible)}
                >
                    <FaBars size={24} />
                </button>
            </div>
            <nav className={!visible ? 'navbar' : ''}>
                <button
                    type="button"
                    className="nav-btn"
                    onClick={() => show(!visible)}
                >
                    {!visible ? <FaAngleRight size={30} /> : <FaAngleLeft size={30} />}
                </button>

                {/* Logo is displayed only when sidebar is visible */}
                {visible && (
                    <div className="navbar-logo">
                        <img src={logo} alt="My Application Logo" />
                    </div>
                )}

                {/* Example buttons */}
            </nav>
        </>
    );
}

export default Navbar;
